package com.group4.project.services.email;

import com.group4.project.models.ResponseObject;
import org.springframework.http.ResponseEntity;

public interface EmailService {
    public ResponseEntity<ResponseObject> sendMailForgot(String email);
}
