package com.group4.project.services.user;

import com.group4.project.models.UserRole;
import com.group4.project.repositories.UserRoleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RoleServiceImpl implements RoleService{
    @Autowired private UserRoleRepository repository;

    @Override
    public UserRole saveUserRole(UserRole role) {
        role.getName().toUpperCase();
        return repository.save(role);
    }

    @Override
    public UserRole findUserRoleById(Integer id) {
        return repository.findById(id).get();
    }

    @Override
    public List<UserRole> findAllUserRole() {
        return repository.findAll();
    }

    @Override
    public UserRole updateUserRoleById(UserRole UserRole, Integer id) {
        return null;
    }

    @Override
    public void deleteUserRoleById(Integer id) {
        repository.deleteById(id);
    }
}
