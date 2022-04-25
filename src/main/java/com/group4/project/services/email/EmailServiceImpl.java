package com.group4.project.services.email;

import com.group4.project.models.ResponseCode;
import com.group4.project.models.ResponseObject;
import com.group4.project.models.User;
import com.group4.project.repositories.PasswordResetRepository;
import com.group4.project.repositories.UserRepository;
import com.group4.project.services.user.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.internet.MimeMessage;

@Service
@RequiredArgsConstructor
@Slf4j
public class EmailServiceImpl implements EmailService{
    @Autowired private JavaMailSender mailSender;
    @Autowired private UserRepository repository;
    @Autowired private PasswordResetRepository resetRepository;

    @Override
    public ResponseEntity<ResponseObject> sendMailForgot(String email) {
        try {
            MimeMessage message = mailSender.createMimeMessage();

            boolean multipart = true;
            String title = "Thay đổi mật khẩu - G4PC";

            MimeMessageHelper helper = new MimeMessageHelper(message, multipart, "utf-8");

            helper.setSubject(title);
            helper.setFrom("nmtworks.7250@gmail.com", "G4PC");

            User user = repository.findByEmail(email).get();
            if (user != null && resetRepository.findById(email) != null) {
                String content = "Mã bảo mật: " + resetRepository.findById(email).get().getCode() + "\n *Chỉ có hiệu lực trong 5 phút!";
                message.setContent(content, "text/plain; charset=UTF-8");
                helper.setTo(user.getEmail());
                this.mailSender.send(message);
                return ResponseEntity.ok().body(
                        new ResponseObject("Sent mail", ResponseCode.HTTP_OK, null)
                );
            }
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObject("Not found user by email", ResponseCode.HTTP_NOT_FOUND, null)
            );
        }catch (Exception e){
            throw new RuntimeException("Error! An error occurred. Please try again later: " + e.getMessage());
        }
    }
}
