package com.group4.project.services.user;

import com.group4.project.models.PasswordReset;
import com.group4.project.models.User;

public interface PasswordResetService {
    public PasswordReset save(String email);
    public User updatePassword(String email, String newPassword);
    public boolean validCode(String code, String email);
    public PasswordReset findByEmail(String email);
}
