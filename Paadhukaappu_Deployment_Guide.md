# Paadhukaappu — Deployment & Maintenance Guide

**Purpose:** This document records the deployment currently set up for the Paadhukaappu / Peace Trust website and provides repeatable instructions for updating the frontend and backend on the Oracle Cloud Ubuntu server.

**Last documented:** 14 November 2026  
**Server hostname:** `ntp-vnc`  
**SSH user:** `ubuntu`  
**Public IP used during deployment/testing:** `129.225.89.153`  
**Frontend project (Windows):** `D:\NPT - Peace Trust\frontend`  
**Backend project (Windows):** `D:\NPT - Peace Trust\backend`

> **Security:** This guide deliberately does not contain the MongoDB username/password or full connection URI. Never commit secrets to Git, place them in the frontend `.env` files, or paste them into public logs/screenshots. Keep the real database URI only in the protected server configuration file described below. Because a database URI containing credentials was included in earlier troubleshooting material, rotate the MongoDB Atlas database user's password if that credential has not already been rotated.

---

## 1. Deployment overview

The deployed application has three main parts:

1. **React + Vite frontend** — built on the Windows development PC and served as static files by Nginx.
2. **Spring Boot backend** — runs as a Linux systemd service, listens only on the server's loopback interface, and handles API requests.
3. **MongoDB Atlas** — cloud database connected to the Spring Boot backend.

Request flow:

```text
Visitor's browser
      |
      | HTTP :80 (current deployment)
      v
Nginx on Oracle Cloud
      |                         \
      | / and frontend routes    \ /api/...
      v                           v
React static files             127.0.0.1:8080
                                  |
                                  v
                            Spring Boot service
                                  |
                                  v
                              MongoDB Atlas
```

The browser must **not** call `http://localhost:8080`. In a visitor's browser, `localhost` means the visitor's own device. The production frontend therefore uses the relative API base URL `/api`, and Nginx proxies those requests to Spring Boot on the server.

### Current deployment status

| Component | Current configuration / status |
|---|---|
| Oracle server | Ubuntu 24.04; hostname `ntp-vnc` |
| Java runtime | OpenJDK 25.0.5; executable `/usr/lib/jvm/java-25-openjdk-amd64/bin/java` |
| Spring Boot | 4.1.2, deployed as an executable JAR |
| Backend port | `8080`, bound to `127.0.0.1` only |
| Backend service | `paadhukaappu.service`, enabled and running at last verification |
| Backend JAR | `/opt/paadhukaappu/paadhukaappu.jar` |
| Backend config | `/etc/paadhukaappu/application.properties` |
| Frontend web root | `/var/www/paadhukaappu-new` |
| Frontend archive on server | `/home/ubuntu/paadhukaappu/paadhukaappu-frontend.zip` |
| Web server | Nginx 1.24.0, enabled and running |
| Nginx site file | `/etc/nginx/sites-available/default` |
| Enabled Nginx site | `/etc/nginx/sites-enabled/default` (symlink to `sites-available/default`) |
| API endpoint confirmed | `POST /api/submissions` |
| Database | MongoDB Atlas; connection was confirmed in Spring Boot logs |
| Website test address | `http://129.225.89.153/` |
| HTTPS | **Not configured/verified in this deployment**; see Section 13 |
| Custom domain | Not recorded as configured for this deployment; set DNS and `server_name` before relying on a domain name |

---

## 2. Important server paths

### Frontend

| Path | Purpose |
|---|---|
| `/var/www/paadhukaappu-new` | **Active frontend document root** used by the current Nginx configuration |
| `/var/www/paadhukaappu` | Earlier frontend directory from the initial deployment; not the active root in the current Nginx configuration |
| `/var/www/paadhukaappu-new/index.html` | Main built frontend entry page |
| `/var/www/paadhukaappu-new/assets/` | Vite-generated JavaScript, CSS, and other assets |
| `/home/ubuntu/paadhukaappu/paadhukaappu-frontend.zip` | Uploaded frontend build archive |

### Backend

| Path | Purpose |
|---|---|
| `/opt/paadhukaappu/paadhukaappu.jar` | Active executable Spring Boot JAR |
| `/opt/paadhukaappu/` | Backend application directory |
| `/etc/paadhukaappu/application.properties` | External Spring Boot configuration; contains the private MongoDB connection URI |
| `/etc/systemd/system/paadhukaappu.service` | systemd unit file that starts the backend |
| `/home/ubuntu/paadhukaappu/` | Staging/upload directory in the Ubuntu user's home directory |

### Nginx and logs

| Path / command | Purpose |
|---|---|
| `/etc/nginx/sites-available/default` | Current Nginx site configuration |
| `/etc/nginx/sites-available/default.backup` | Backup made before editing the default Nginx site |
| `/etc/nginx/sites-enabled/default` | Enabled site symlink |
| `/var/log/nginx/access.log` | Nginx request log |
| `/var/log/nginx/error.log` | Nginx error log |
| `journalctl -u paadhukaappu` | Spring Boot service logs in systemd journal |

---

## 3. Network and security configuration

### Backend listens only locally

The Spring Boot configuration includes:

```properties
server.port=8080
server.address=127.0.0.1
```

This is intentional. The backend is reachable from Nginx on the same server, but it is not intended to be directly reachable from the public internet.

Check listening ports:

```bash
sudo ss -ltnp | grep -E ':80|:8080'
```

Expected pattern:

- Nginx listens on public interfaces on port `80`.
- Java/Spring Boot listens on `127.0.0.1:8080` (the output may display `[::ffff:127.0.0.1]:8080`).

**Do not open port 8080 in the Oracle Cloud security list/NSG or expose it publicly.** Visitors use port 80/443 and Nginx forwards API calls internally.

### Oracle Cloud network rules

For the current HTTP website, the Oracle Cloud VCN security list or Network Security Group needs an inbound TCP rule for port `80` from the intended visitor range (normally `0.0.0.0/0` for a public website). SSH uses TCP `22`, preferably restricted to the administrator's IP address where practical.

When HTTPS is configured, allow TCP `443` as well. Do not add a public inbound rule for `8080`.

If Ubuntu's UFW firewall is enabled, inspect it before making changes:

```bash
sudo ufw status verbose
```

Do not enable or change UFW blindly on a remote SSH server; an incorrect rule can lock out SSH.

---

## 4. Frontend production configuration

### Vite environment file

In the Windows frontend project, the production environment file is:

```text
D:\NPT - Peace Trust\frontend\.env.production
```

It must contain:

```env
VITE_API_BASE_URL=/api
```

The React code imports this setting from `../../config/api` and calls:

```text
${API_BASE_URL}/submissions
```

Therefore, the production browser request is:

```text
POST /api/submissions
```

Do not put the MongoDB URI, database password, or any private backend secret in a `VITE_...` variable. Vite variables are embedded in the browser build and are visible to visitors.

### Why not `localhost:8080`?

Do not use this for production:

```env
VITE_API_BASE_URL=http://localhost:8080/api
```

A visitor's browser would try to contact port 8080 on the visitor's own computer or phone. The relative `/api` path sends the request to the same host that served the website, where Nginx handles the proxy.

---

## 5. Nginx configuration currently in use

File:

```text
/etc/nginx/sites-available/default
```

Current configuration:

```nginx
server {
    listen 80 default_server;
    listen [::]:80 default_server;

    server_name _;

    root /var/www/paadhukaappu-new;
    index index.html;

    # Forward backend API requests to Spring Boot on the same server.
    location /api/ {
        proxy_pass http://127.0.0.1:8080;

        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Serve the built React frontend and its client-side routes.
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### What the key directives do

- `listen 80`: accepts normal HTTP requests.
- `server_name _`: current catch-all/default server configuration; suitable for IP-based testing. Replace with the real domain name(s) when DNS and the domain are ready.
- `root /var/www/paadhukaappu-new`: serves the current frontend build.
- `location /api/`: sends API requests to Spring Boot.
- `proxy_pass http://127.0.0.1:8080;`: preserves the requested URI path, so `/api/submissions` reaches Spring Boot as `/api/submissions`.
- `try_files $uri $uri/ /index.html`: serves real static files/directories first and falls back to the frontend entry point for client-side routes.

The backend controller was inspected in the deployed JAR. Its class contains `@RequestMapping("/api/submissions")` and a `@PostMapping` method, matching the frontend's `POST /api/submissions` request.

### Safe way to edit Nginx

Make a backup before changing the file:

```bash
sudo cp /etc/nginx/sites-available/default /etc/nginx/sites-available/default.backup
```

Edit:

```bash
sudo nano /etc/nginx/sites-available/default
```

Test syntax before applying:

```bash
sudo nginx -t
```

Only when the test says the syntax is OK and the test is successful, reload:

```bash
sudo systemctl reload nginx
```

Check status:

```bash
sudo systemctl status nginx --no-pager
```

If the new configuration is invalid, do not reload. Restore the backup and test again:

```bash
sudo cp /etc/nginx/sites-available/default.backup /etc/nginx/sites-available/default
sudo nginx -t
sudo systemctl reload nginx
```

---

## 6. Frontend update procedure (Windows → Oracle Cloud)

Use this procedure whenever React frontend code, text, images, styles, or routes change.

### A. On the Windows development PC

Open PowerShell and go to the frontend project:

```powershell
cd "D:\NPT - Peace Trust\frontend"
```

1. Confirm `.env.production` still contains `VITE_API_BASE_URL=/api`.
2. Build the production frontend:

```powershell
npm run build
```

3. Check the build output:

```powershell
Get-ChildItem .\dist
```

The `dist` directory should contain `index.html`, an `assets` directory, and the route/content directories generated by the project (for example `join`, `about`, `contact`, and others).

4. Compress the contents of `dist` into a ZIP file:

```powershell
Compress-Archive -Path .\dist\* -DestinationPath .\paadhukaappu-frontend.zip -Force
```

5. Check the ZIP file:

```powershell
Get-Item .\paadhukaappu-frontend.zip | Select-Object Name, Length
```

### B. Upload the archive from Windows

The SSH private key used in the deployment was:

```text
D:\NPT - Peace Trust\Oracle Keys\ssh-key-2026-11-13.key
```

Upload the archive (run in the frontend project directory):

```powershell
scp -i "D:\NPT - Peace Trust\Oracle Keys\ssh-key-2026-11-13.key" ".\paadhukaappu-frontend.zip" ubuntu@129.225.89.153:~/paadhukaappu/paadhukaappu-frontend.zip
```

If the key filename or server public IP changes, update the command accordingly. Keep the private key private; never upload it to the server or commit it to Git.

Connect to the server:

```powershell
ssh -i "D:\NPT - Peace Trust\Oracle Keys\ssh-key-2026-11-13.key" ubuntu@129.225.89.153
```

### C. On Ubuntu: stage and verify the new build

First confirm the uploaded archive exists:

```bash
ls -lh ~/paadhukaappu/paadhukaappu-frontend.zip
```

Extract into a separate staging directory. This does not immediately overwrite the active website:

```bash
sudo rm -rf /var/www/paadhukaappu-next
sudo mkdir -p /var/www/paadhukaappu-next
sudo unzip -oq ~/paadhukaappu/paadhukaappu-frontend.zip -d /var/www/paadhukaappu-next
sudo chown -R root:www-data /var/www/paadhukaappu-next
sudo find /var/www/paadhukaappu-next -type d -exec chmod 755 {} \;
sudo find /var/www/paadhukaappu-next -type f -exec chmod 644 {} \;
```

Check that the new entry page and assets exist:

```bash
ls -lh /var/www/paadhukaappu-next/index.html
ls -lh /var/www/paadhukaappu-next/assets/
```

Optional quick check:

```bash
test -s /var/www/paadhukaappu-next/index.html && echo "New frontend index.html exists"
```

### D. Switch the active frontend

The current Nginx root is `/var/www/paadhukaappu-new`. The following commands preserve the current version as a rollback copy and move the staged release into the active path:

```bash
sudo rm -rf /var/www/paadhukaappu-previous
sudo mv /var/www/paadhukaappu-new /var/www/paadhukaappu-previous
sudo mv /var/www/paadhukaappu-next /var/www/paadhukaappu-new
```

Check and reload Nginx:

```bash
sudo nginx -t && sudo systemctl reload nginx
```

Verify the pages:

```bash
curl -I http://127.0.0.1/
curl -I http://127.0.0.1/join/
```

Expected result for both: `HTTP/1.1 200 OK`.

After the new release has been checked in a browser and is working, `/var/www/paadhukaappu-previous` can be removed to free space. Keep it until the new release is confirmed:

```bash
sudo rm -rf /var/www/paadhukaappu-previous
```

**Important:** Check the path carefully before running any `rm -rf` command. Do not replace it with `/var/www` or another broad path.

### E. Roll back the frontend if the new build is broken

If the just-deployed frontend fails and `/var/www/paadhukaappu-previous` still exists:

```bash
sudo mv /var/www/paadhukaappu-new /var/www/paadhukaappu-failed
sudo mv /var/www/paadhukaappu-previous /var/www/paadhukaappu-new
sudo nginx -t && sudo systemctl reload nginx
```

Inspect the website again. You can remove `/var/www/paadhukaappu-failed` after diagnosing it.

---

## 7. Backend configuration and service

### Java runtime

Installed Java executable:

```text
/usr/lib/jvm/java-25-openjdk-amd64/bin/java
```

The server has the Java runtime needed to run the executable Spring Boot JAR. The `jar` command was not installed, so use `unzip -l` to list JAR contents if needed; there is no need to install a JDK solely to inspect a JAR.

Check Java:

```bash
java -version
```

### systemd service file

Path:

```text
/etc/systemd/system/paadhukaappu.service
```

Current service definition:

```ini
[Unit]
Description=Paadhukaappu Spring Boot Backend
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
User=paadhukaappu
Group=paadhukaappu
WorkingDirectory=/opt/paadhukaappu
ExecStart=/usr/lib/jvm/java-25-openjdk-amd64/bin/java -jar /opt/paadhukaappu/paadhukaappu.jar --spring.config.additional-location=file:/etc/paadhukaappu/
Restart=on-failure
RestartSec=5
SuccessExitStatus=143
NoNewPrivileges=true
PrivateTmp=true
ProtectSystem=strict
ProtectHome=true

[Install]
WantedBy=multi-user.target
```

The service runs as the dedicated, non-login Linux account `paadhukaappu`, not as `root` or `ubuntu`.

Useful service commands:

```bash
# Current status
sudo systemctl status paadhukaappu --no-pager

# Start / stop / restart
sudo systemctl start paadhukaappu
sudo systemctl stop paadhukaappu
sudo systemctl restart paadhukaappu

# Enable at boot / inspect enablement
sudo systemctl enable paadhukaappu
sudo systemctl is-enabled paadhukaappu

# Follow logs live
sudo journalctl -u paadhukaappu -f

# Show recent logs
sudo journalctl -u paadhukaappu -n 100 --no-pager
```

If the service file itself is changed, reload systemd before restarting:

```bash
sudo systemctl daemon-reload
sudo systemctl restart paadhukaappu
```

### Application properties

Path:

```text
/etc/paadhukaappu/application.properties
```

This is an external configuration file. The systemd `ExecStart` line explicitly tells Spring Boot to load additional configuration from `/etc/paadhukaappu/`.

The important settings currently used include:

```properties
server.port=8080
server.address=127.0.0.1
spring.application.name=paadhukaappu
spring.mongodb.uri=<PRIVATE_MONGODB_ATLAS_CONNECTION_URI>
```

The real `spring.mongodb.uri` value must remain in the server file and must not be replaced with the placeholder above literally. The URI should point to the intended Atlas cluster and application database, include the correct database user credentials, and use the appropriate connection options. Do not place the URI in frontend files.

File ownership and permissions were set as follows:

```text
/etc/paadhukaappu                  root:paadhukaappu  mode 750
/etc/paadhukaappu/application.properties  root:paadhukaappu  mode 640
```

Inspect the file without publishing its secrets:

```bash
sudo stat -c '%U:%G %a %n' /etc/paadhukaappu /etc/paadhukaappu/application.properties
```

Do not use `cat` to paste the full properties file into public chat or screenshots; it contains the database connection URI.

After changing a Spring property, restart the backend and check its logs:

```bash
sudo systemctl restart paadhukaappu
sudo systemctl status paadhukaappu --no-pager
sudo journalctl -u paadhukaappu -n 100 --no-pager
```

---

## 8. Backend update procedure (Windows → Oracle Cloud)

Use this procedure when Java controller, service, repository, model, validation, or other backend code changes.

### A. Build the backend on Windows

Open PowerShell:

```powershell
cd "D:\NPT - Peace Trust\backend"
```

Build and run tests:

```powershell
mvn clean package
```

If this project uses the Maven wrapper, the equivalent is:

```powershell
.\mvnw.cmd clean package
```

Check the generated JAR:

```powershell
Get-ChildItem .\target\*.jar | Select-Object Name, Length, LastWriteTime
```

The deployed artifact name used in this deployment is:

```text
paadhukaappu-0.0.1-SNAPSHOT.jar
```

Confirm the JAR exists before uploading. Do not upload a `*.jar.original` file if Maven creates one.

### B. Upload the JAR to Ubuntu

Run from PowerShell (adjust the key path if necessary):

```powershell
scp -i "D:\NPT - Peace Trust\Oracle Keys\ssh-key-2026-11-13.key" ".\target\paadhukaappu-0.0.1-SNAPSHOT.jar" ubuntu@129.225.89.153:~/paadhukaappu/paadhukaappu-0.0.1-SNAPSHOT.jar
```

SSH into the server:

```powershell
ssh -i "D:\NPT - Peace Trust\Oracle Keys\ssh-key-2026-11-13.key" ubuntu@129.225.89.153
```

### C. Back up and install the new JAR on Ubuntu

First verify the uploaded file:

```bash
ls -lh ~/paadhukaappu/paadhukaappu-0.0.1-SNAPSHOT.jar
```

Back up the current running artifact:

```bash
sudo cp -a /opt/paadhukaappu/paadhukaappu.jar /opt/paadhukaappu/paadhukaappu.jar.previous
```

Install the new artifact with the correct owner and permissions:

```bash
sudo install -o root -g paadhukaappu -m 640 \
  ~/paadhukaappu/paadhukaappu-0.0.1-SNAPSHOT.jar \
  /opt/paadhukaappu/paadhukaappu.jar
```

Restart and inspect the service:

```bash
sudo systemctl restart paadhukaappu
sudo systemctl status paadhukaappu --no-pager
sudo journalctl -u paadhukaappu -n 100 --no-pager
```

Look for the Spring Boot `Started ...Application` message and successful MongoDB connection messages. Also check the port:

```bash
sudo ss -ltnp | grep 8080
```

Expected: the Java process listens on `127.0.0.1:8080`, not `0.0.0.0:8080`.

### D. Verify the API through Nginx

The endpoint can be probed with an intentionally empty request:

```bash
curl -i -X POST http://127.0.0.1/api/submissions \
  -H "Content-Type: application/json" \
  -d '{}'
```

The expected response for this deliberately invalid body is HTTP `400` with a JSON validation message and missing-field errors. This is a **successful connectivity test**: it proves Nginx forwarded the request to the Spring controller. It does not mean the submission was accepted or saved.

A valid submission should be tested through the actual volunteer form using test information and explicit consent. Then verify the new record in the appropriate MongoDB Atlas database/collection.

### E. Roll back the backend if the new JAR fails

If the service fails after installing the new JAR and the previous JAR backup exists:

```bash
sudo install -o root -g paadhukaappu -m 640 \
  /opt/paadhukaappu/paadhukaappu.jar.previous \
  /opt/paadhukaappu/paadhukaappu.jar

sudo systemctl restart paadhukaappu
sudo systemctl status paadhukaappu --no-pager
sudo journalctl -u paadhukaappu -n 100 --no-pager
```

Keep the `.previous` JAR until the new backend is verified. Once verified, it can be removed:

```bash
sudo rm -f /opt/paadhukaappu/paadhukaappu.jar.previous
```

---

## 9. MongoDB Atlas notes

- The Spring Boot backend successfully connected to the MongoDB Atlas cluster during deployment; logs showed cluster members and primary discovery, followed by application startup.
- The connection URI is stored in `/etc/paadhukaappu/application.properties` under `spring.mongodb.uri`.
- The URI is a server-side secret. It must never be placed in React/Vite files or returned to the browser.
- Ensure the Atlas database user has only the privileges needed by the application.
- In Atlas Network Access, prefer an access-list entry for the Oracle server's stable public egress IP rather than leaving `0.0.0.0/0` (allow access from anywhere) enabled. The exact address must be checked against the server's current public IP and Oracle networking configuration.
- Confirm the application database name and collection names in Atlas when verifying submissions. Do not assume that the Atlas project or cluster name is the same as the database name.

If MongoDB connection errors occur, inspect backend logs:

```bash
sudo journalctl -u paadhukaappu -n 150 --no-pager
```

Check the URI carefully on the server without exposing it: username/password encoding, cluster hostname, database path, and connection options must all be correct. Also check Atlas Network Access and database-user permissions.

---

## 10. Verification checklist after an update

Run these commands on Ubuntu after frontend/backend deployment:

### Nginx syntax and service

```bash
sudo nginx -t
sudo systemctl status nginx --no-pager
```

### Backend service and port

```bash
sudo systemctl status paadhukaappu --no-pager
sudo ss -ltnp | grep 8080
```

### Frontend homepage

```bash
curl -I http://127.0.0.1/
```

Expected: `HTTP/1.1 200 OK`.

### Volunteer page

```bash
curl -I http://127.0.0.1/join/
```

Expected: `HTTP/1.1 200 OK`.

### API proxy and validation

```bash
curl -i -X POST http://127.0.0.1/api/submissions \
  -H "Content-Type: application/json" \
  -d '{}'
```

Expected for `{}`: HTTP `400` and a validation response. This indicates the request reached the backend. A valid user submission should return the success response (the controller returns HTTP `201 Created`) and should then be checked in MongoDB Atlas.

### Browser tests

From a Windows browser, current IP-based URLs are:

```text
http://129.225.89.153/
http://129.225.89.153/join/
```

Test the homepage, all important routes, images, and the volunteer form. Submit a test entry with test data and verify that it is stored in Atlas. If the browser still shows old JavaScript/CSS after a frontend update, perform a hard refresh (`Ctrl + F5`) or open a private/incognito window; Vite assets are content-hashed, but browser caches can still retain the HTML page.

---

## 11. Logs and troubleshooting commands

### Spring Boot

```bash
sudo systemctl status paadhukaappu --no-pager
sudo journalctl -u paadhukaappu -n 100 --no-pager
sudo journalctl -u paadhukaappu -f
```

Common checks:

- `Started PaadhukaappuApplication` indicates the application completed startup.
- MongoDB connection errors: check the server-side URI, Atlas network access list, and database user permissions.
- Port already in use: inspect `sudo ss -ltnp | grep 8080`.
- Permission errors reading the JAR or properties: check owners/modes with `sudo stat` and ensure the `paadhukaappu` service user can read them.

### Nginx

```bash
sudo nginx -t
sudo systemctl status nginx --no-pager
sudo tail -n 100 /var/log/nginx/error.log
sudo tail -n 100 /var/log/nginx/access.log
```

Common checks:

- `502 Bad Gateway`: Nginx cannot connect to Spring Boot. Check `paadhukaappu.service`, its logs, and whether Java is listening on `127.0.0.1:8080`.
- `404 Not Found` on a frontend route: verify the route's built files exist and that `try_files $uri $uri/ /index.html;` is present.
- Homepage returns the old site: check `root` in the active Nginx server block and ensure the new files were moved to that exact directory.
- Nginx syntax error: run `sudo nginx -t`, correct the reported file/line, and only then reload.

### Useful general server checks

```bash
df -h
free -h
sudo ss -ltnp
sudo systemctl --failed
```

---

## 12. Routine maintenance and operational notes

1. **Frontend code changes:** update `.env.production` if needed, run `npm run build`, ZIP `dist`, upload, stage, switch the active frontend directory, and verify.
2. **Backend code changes:** run `mvn clean package`, upload the new JAR, back up the current JAR, install the new one with the correct owner/mode, restart the service, and inspect logs.
3. **Spring properties changes:** edit `/etc/paadhukaappu/application.properties` securely and restart the backend. Do not rebuild the frontend for backend-only configuration changes.
4. **Nginx changes:** back up the site file, edit it, run `sudo nginx -t`, and reload only after the test passes.
5. **Server reboot:** both Nginx and the backend service were enabled to start automatically. Verify them after a reboot with `systemctl status`.
6. **Backups:** keep the previous frontend directory and previous backend JAR until the new release is verified. Periodically back up the application properties securely; never store its database URI in a public repository.
7. **Updates:** apply Ubuntu security updates carefully and avoid changing Java/Nginx versions during an application deployment unless required. Back up configuration before package or version changes.

---

## 13. Domain name and HTTPS status

The deployment and tests documented here used the server IP address `129.225.89.153` and plain HTTP. **A working HTTPS/SSL certificate and custom-domain Nginx configuration have not been confirmed in this deployment.** Do not assume that HTTPS is active merely because the website works over HTTP.

Before enabling a custom domain:

1. Choose/confirm the production domain.
2. Create the correct DNS `A` record(s) pointing to the Oracle server's public IP. Add a `www` record only if it is intended to be used.
3. Wait until public DNS resolves to the correct address and confirm the site is reachable using the domain.
4. Change the Nginx `server_name` from `_` to the real hostname(s), while retaining the correct frontend root and API proxy.
5. Run `sudo nginx -t` and reload Nginx.
6. Configure a trusted TLS certificate (for example, with Let's Encrypt/Certbot), enable inbound TCP port `443` in Oracle Cloud, and test HTTPS and automatic certificate renewal.
7. After HTTPS works, update any canonical URL, sitemap, robots metadata, or external callback/origin settings that refer to the old IP or HTTP URL.

Do not redirect all HTTP traffic to HTTPS until a valid certificate has been installed and verified. Do not expose port `8080` as a workaround for API issues.

---

## 14. Quick reference — most-used commands

### On Windows PowerShell — frontend release

```powershell
cd "D:\NPT - Peace Trust\frontend"
npm run build
Compress-Archive -Path .\dist\* -DestinationPath .\paadhukaappu-frontend.zip -Force
scp -i "D:\NPT - Peace Trust\Oracle Keys\ssh-key-2026-11-13.key" ".\paadhukaappu-frontend.zip" ubuntu@129.225.89.153:~/paadhukaappu/paadhukaappu-frontend.zip
```

### On Windows PowerShell — backend release

```powershell
cd "D:\NPT - Peace Trust\backend"
mvn clean package
scp -i "D:\NPT - Peace Trust\Oracle Keys\ssh-key-2026-11-13.key" ".\target\paadhukaappu-0.0.1-SNAPSHOT.jar" ubuntu@129.225.89.153:~/paadhukaappu/paadhukaappu-0.0.1-SNAPSHOT.jar
```

### On Ubuntu — common checks

```bash
sudo nginx -t
sudo systemctl reload nginx
sudo systemctl status nginx --no-pager
sudo systemctl status paadhukaappu --no-pager
sudo journalctl -u paadhukaappu -n 100 --no-pager
curl -I http://127.0.0.1/
curl -I http://127.0.0.1/join/
curl -i -X POST http://127.0.0.1/api/submissions -H "Content-Type: application/json" -d '{}'
```

---

## 15. Deployment facts confirmed during this setup

The following checks succeeded during deployment on 14 November 2026:

- Ubuntu reported version 24.04.
- The Java 25 runtime was installed and used by the Spring Boot systemd service.
- The Spring Boot 4.1.2 application started successfully.
- Spring Boot logs showed a successful MongoDB Atlas cluster connection and application startup.
- The application was configured to bind to `127.0.0.1:8080`.
- Nginx 1.24.0 was installed, enabled, and running.
- The frontend ZIP was transferred to `/home/ubuntu/paadhukaappu/paadhukaappu-frontend.zip` and extracted with ownership `root:www-data`, directory mode `755`, and file mode `644`.
- The active Nginx frontend root was changed to `/var/www/paadhukaappu-new`.
- Nginx configuration test succeeded.
- `curl -I http://127.0.0.1/` returned `200 OK`.
- `curl -I http://127.0.0.1/join/` returned `200 OK`.
- `POST http://127.0.0.1/api/submissions` with `{}` returned `400` and field validation errors. This confirmed that Nginx forwarded the request to the Spring Boot controller. It was not a successful form submission.
- The deployed controller class confirmed a base mapping of `/api/submissions` and a POST handler.

**Not yet confirmed by the checks recorded here:** a valid browser-submitted volunteer application saved in MongoDB, a domain name resolving to this server, HTTPS/SSL, automated certificate renewal, and any production monitoring/backup schedule. Complete and record those checks when they are set up.
