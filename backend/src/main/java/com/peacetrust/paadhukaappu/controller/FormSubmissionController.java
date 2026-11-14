package com.peacetrust.paadhukaappu.controller;

import com.peacetrust.paadhukaappu.dto.FormSubmissionRequest;
import com.peacetrust.paadhukaappu.dto.FormSubmissionResponse;
import com.peacetrust.paadhukaappu.model.FormSubmission;
import com.peacetrust.paadhukaappu.service.FormSubmissionService;

import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/submissions")
public class FormSubmissionController {

    private final FormSubmissionService submissionService;

    public FormSubmissionController(
            FormSubmissionService submissionService
    ) {
        this.submissionService = submissionService;
    }

    @PostMapping
    public ResponseEntity<FormSubmissionResponse> submitForm(
            @Valid @RequestBody FormSubmissionRequest request
    ) {

        FormSubmission savedSubmission =
                submissionService.saveSubmission(request);

        FormSubmissionResponse response =
                new FormSubmissionResponse(
                        true,
                        "Your volunteer application has been received successfully.",
                        savedSubmission.getId()
                );

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(response);
    }
}