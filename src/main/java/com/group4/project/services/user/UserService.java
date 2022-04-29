package com.group4.project.services.user;

import com.group4.project.models.User;

import java.util.List;

public interface UserService {
    public User saveUser(User user);
    public User findUserById(Integer id);
    public List<User> findAllUser();
    public User updateUser(User user, Integer id);
    public User findUserByUsername(String username);
    public User findUserByEmail(String email);
    public User findUserByUsernameOrEmail(String input);
    public void deleteUserById(Integer id);
    public User updateUserRole(String userRole, Integer id);
}
