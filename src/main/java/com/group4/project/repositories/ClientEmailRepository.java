package com.group4.project.repositories;

import com.group4.project.models.ClientEmail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ClientEmailRepository extends JpaRepository<ClientEmail, Integer> {
    @Query(value = "SELECT * FROM client_email WHERE email=?1", nativeQuery = true)
    public ClientEmail findByEmail(String email);
}
