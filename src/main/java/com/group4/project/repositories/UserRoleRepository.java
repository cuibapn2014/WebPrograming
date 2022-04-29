package com.group4.project.repositories;

import com.group4.project.models.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRoleRepository extends JpaRepository<UserRole, Integer> {
    @Query(value = "SELECT * FROM user_role WHERE name=?1",nativeQuery = true)
    public UserRole findByName(String name);
}
