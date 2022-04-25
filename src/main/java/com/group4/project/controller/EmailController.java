package com.group4.project.controller;

import com.group4.project.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("/send-mail")
public class EmailController {
    @Autowired private JavaMailSender mailSender;
    @Autowired private UserRepository userRepository;

    @ResponseBody
    @RequestMapping("/khuyen-mai")
    public String sendAdsEmail(HttpServletRequest request) throws MessagingException {
        try {
            MimeMessage message = mailSender.createMimeMessage();

            boolean multipart = true;

            MimeMessageHelper helper = new MimeMessageHelper(message, multipart, "utf-8");

            message.setContent(request.getParameter("mail-content"), "text/html; charset=UTF-8");

            helper.setSubject(request.getParameter("title"));
            helper.setFrom("nmtworks.7250@gmail.com", "G4PC");

            userRepository.findAll().stream().forEach(user -> {
                try {
                    helper.setTo(user.getEmail());
                    this.mailSender.send(message);
                } catch (MessagingException e) {
                    e.printStackTrace();
                }
            });
            return "Email sent";
        }catch (Exception e){
            return "Error! An error occurred. Please try again later";
        }
    }

}
