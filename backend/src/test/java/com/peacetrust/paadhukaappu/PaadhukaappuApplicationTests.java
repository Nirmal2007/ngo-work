
package com.peacetrust.paadhukaappu;

import org.bson.Document;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.test.context.ActiveProfiles;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
@ActiveProfiles("local")
class PaadhukaappuApplicationTests {

	@Autowired
	private MongoTemplate mongoTemplate;

	@Test
	void testMongoDBConnection() {

		assertNotNull(mongoTemplate, "MongoTemplate was not initialized");

		System.out.println("Connecting to MongoDB Atlas...");

		Document result = mongoTemplate.getDb()
				.runCommand(new Document("ping", 1));

		Number ok = (Number) result.get("ok");

		assertNotNull(ok, "MongoDB ping response is invalid");
		assertEquals(1.0, ok.doubleValue(),
				"MongoDB connection failed");

		System.out.println("MongoDB Atlas Connected Successfully!");
		System.out.println("Database: "
				+ mongoTemplate.getDb().getName());
	}
}
