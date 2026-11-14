
package com.peacetrust.paadhukaappu.dto;

import jakarta.validation.constraints.AssertTrue;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public class FormSubmissionRequest {

    @NotBlank(message = "Full name is required")
    @Size(max = 120, message = "Name cannot exceed 120 characters")
    private String fullName;

    @NotBlank(message = "Phone number is required")
    @Pattern(
            regexp = "^[6-9][0-9]{9}$",
            message = "Enter a valid 10-digit Indian mobile number"
    )
    private String phone;

    @NotBlank(message = "Village or ward is required")
    @Size(max = 100)
    private String village;

    @NotBlank(message = "District is required")
    @Size(max = 100)
    private String district;

    @Size(max = 100)
    private String occupation;

    @Size(max = 150)
    private String areaOfInterest;

    @Size(max = 1000)
    private String intro;

    @NotNull(message = "Consent is required")
    @AssertTrue(message = "You must accept the volunteer pledge")
    private Boolean consent;

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone == null
                ? null
                : phone.replaceAll("[\\s-]", "");
    }

    public String getVillage() {
        return village;
    }

    public void setVillage(String village) {
        this.village = village;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public String getOccupation() {
        return occupation;
    }

    public void setOccupation(String occupation) {
        this.occupation = occupation;
    }

    public String getAreaOfInterest() {
        return areaOfInterest;
    }

    public void setAreaOfInterest(String areaOfInterest) {
        this.areaOfInterest = areaOfInterest;
    }

    public String getIntro() {
        return intro;
    }

    public void setIntro(String intro) {
        this.intro = intro;
    }

    public Boolean getConsent() {
        return consent;
    }

    public void setConsent(Boolean consent) {
        this.consent = consent;
    }
}
