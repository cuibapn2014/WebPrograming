package com.group4.project.repositories.user;

import com.group4.project.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer>{
    @Query(value = "SELECT * FROM user WHERE username=?1",nativeQuery = true)
    public Optional<User> findByUsername(String username);

    @Query(value = "SELECT * FROM user WHERE email=?1",nativeQuery = true)
    public Optional<User> findByEmail(String email);
}
