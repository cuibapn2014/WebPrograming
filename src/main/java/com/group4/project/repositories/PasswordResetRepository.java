package com.group4.project.repositories;

import com.group4.project.models.PasswordReset;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PasswordResetRepository  extends JpaRepository<PasswordReset, String> {
}
