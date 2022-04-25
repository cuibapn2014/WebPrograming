package com.group4.project.api;

import com.group4.project.models.PasswordReset;
import com.group4.project.models.ResponseCode;
import com.group4.project.models.ResponseObject;
import com.group4.project.models.User;
import com.group4.project.services.email.EmailService;
import com.group4.project.services.user.PasswordResetService;
import com.group4.project.services.user.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.mail.MessagingException;

@RestController
@RequestMapping("api/v1/reset-password")
@RequiredArgsConstructor
@Slf4j
public class PasswordResetController {
    @Autowired private PasswordResetService service;
    @Autowired private EmailService emailService;

    @PostMapping("/create")
    public ResponseEntity<ResponseObject> createReset(@RequestParam("email") String email){
        PasswordReset passwordReset = service.save(email);
        if(passwordReset != null){
            return ResponseEntity.ok().body(
                new ResponseObject("Create successfully", ResponseCode.HTTP_OK, passwordReset)
            );
        }

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
                new ResponseObject("Bad request", ResponseCode.HTTP_BAD_REQUEST, null)
        );
    }

    @PostMapping("/change")
    public ResponseEntity<ResponseObject> changePass(@RequestParam("email") String email,
                                                     @RequestParam("code") String code,
                                                     @RequestParam("password") String newPassowrd){
        User user = service.updatePassword(email, code, newPassowrd);
        if(user != null){
            return ResponseEntity.ok().body(
                    new ResponseObject("Update successfully", ResponseCode.HTTP_OK, user)
            );
        }

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
                new ResponseObject("Bad Request", ResponseCode.HTTP_BAD_REQUEST, null)
        );
    }

    @PostMapping("/sendmail")
    public ResponseEntity<ResponseObject> sendEmailForgotPwd(@RequestParam("email") String email) throws MessagingException {
        return emailService.sendMailForgot(email);
    }
}
