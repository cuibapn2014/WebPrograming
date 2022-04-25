package com.group4.project.services.user;

import com.group4.project.helper.GenerateString;
import com.group4.project.helper.Validate;
import com.group4.project.models.PasswordReset;
import com.group4.project.models.User;
import com.group4.project.repositories.PasswordResetRepository;
import com.group4.project.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class PasswordResetServiceImpl implements PasswordResetService{
    @Autowired private PasswordResetRepository repository;
    @Autowired private UserRepository userRepository;

    @Override
    public PasswordReset save(String email) {
        PasswordReset passwordReset = new PasswordReset();
        boolean existEmail = repository.findById(email) != null ? true : false;
        if(Validate.validEmail(email)) {
            if(existEmail) repository.deleteById(email);
            passwordReset.setEmail(email);
            passwordReset.setCreated_at(new Date(System.currentTimeMillis()));
            passwordReset.setCode(GenerateString.randomAlphaNumeric(6).toUpperCase());
            return repository.save(passwordReset);
        }
        return null;
    }

    @Override
    public User updatePassword(String email, String code, String newPassword) {
        Optional<User> user = userRepository.findByEmail(email);
        PasswordReset passwordReset = this.findByEmail(email);
        if(user.isPresent() && passwordReset != null && passwordReset.getCode().equals(code) && checkExpired(passwordReset.getCreated_at())){
            user.get().setPassword(BCrypt.hashpw(newPassword,BCrypt.gensalt(12)));
            repository.delete(passwordReset);
            return user.get();
        }
        return null;
    }

    @Override
    public PasswordReset findByEmail(String email) {
        return repository.findById(email).get();
    }

    private boolean checkExpired(Date expire){
        boolean result;
        Date current = new Date(System.currentTimeMillis());
        result = ((expire.getTime() + 1000 * 60 * 5) - current.getTime()) <= 0 ? false : true;
        return result;
    }
}
