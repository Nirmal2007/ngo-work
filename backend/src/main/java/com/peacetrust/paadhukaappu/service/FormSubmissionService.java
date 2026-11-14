
package com.peacetrust.paadhukaappu.service;

import com.peacetrust.paadhukaappu.dto.FormSubmissionRequest;
import com.peacetrust.paadhukaappu.model.FormSubmission;
import com.peacetrust.paadhukaappu.repository.FormSubmissionRepository;

import org.springframework.stereotype.Service;

import java.time.Instant;

@Service
public class FormSubmissionService {

    private final FormSubmissionRepository repository;

    public FormSubmissionService(
            FormSubmissionRepository repository) {
        this.repository = repository;
    }

    public FormSubmission saveSubmission(
            FormSubmissionRequest request) {

        FormSubmission submission = new FormSubmission();

        submission.setFullName(request.getFullName().trim());
        submission.setPhone(request.getPhone());
        submission.setVillage(request.getVillage().trim());
        submission.setDistrict(request.getDistrict().trim());

        submission.setOccupation(
                normalize(request.getOccupation())
        );

        submission.setAreaOfInterest(
                normalize(request.getAreaOfInterest())
        );

        submission.setIntro(
                normalize(request.getIntro())
        );

        submission.setConsent(request.getConsent());

        submission.setStatus("PENDING");

        submission.setSubmittedAt(Instant.now());

        return repository.save(submission);
    }

    private String normalize(String value) {

        if (value == null || value.isBlank()) {
            return null;
        }

        return value.trim();
    }
}
