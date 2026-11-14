package com.peacetrust.paadhukaappu.dto;

public class FormSubmissionResponse {

    private final boolean success;
    private final String message;
    private final String submissionId;

    public FormSubmissionResponse(
            boolean success,
            String message,
            String submissionId
    ) {
        this.success = success;
        this.message = message;
        this.submissionId = submissionId;
    }

    public boolean isSuccess() {
        return success;
    }

    public String getMessage() {
        return message;
    }

    public String getSubmissionId() {
        return submissionId;
    }
}