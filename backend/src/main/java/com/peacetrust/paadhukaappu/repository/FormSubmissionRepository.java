
package com.peacetrust.paadhukaappu.repository;

import com.peacetrust.paadhukaappu.model.FormSubmission;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FormSubmissionRepository
        extends MongoRepository<FormSubmission, String> {

}
