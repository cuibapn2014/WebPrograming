package com.group4.project.repositories;

import com.group4.project.models.PasswordReset;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PasswordResetRepository  extends JpaRepository<PasswordReset, String> {
    @Query(value="SELECT * FROM tbl_password_reset WHERE email=?1", nativeQuery = true)
    public PasswordReset findByEmail(String email);
}
