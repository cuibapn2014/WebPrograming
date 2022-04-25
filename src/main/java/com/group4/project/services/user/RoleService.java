package com.group4.project.services.user;

import com.group4.project.models.UserRole;

import java.util.List;

public interface RoleService {
    public UserRole saveUserRole(UserRole UserRole);
    public UserRole findUserRoleById(Integer id);
    public List<UserRole> findAllUserRole();
    public UserRole updateUserRoleById(UserRole UserRole, Integer id);
    public void deleteUserRoleById(Integer id);
}
