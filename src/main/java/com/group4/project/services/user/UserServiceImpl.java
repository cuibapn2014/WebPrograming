package com.group4.project.services.user;

import com.group4.project.helper.Validate;
import com.group4.project.models.User;
import com.group4.project.models.UserRole;
import com.group4.project.repositories.UserRepository;
import com.group4.project.repositories.UserRoleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{
    @Autowired private UserRepository repository;
    @Autowired private UserRoleRepository roleRepository;

    private final PasswordEncoder passwordEncoder;

    @Override
    public User saveUser(User user) {
        Optional<User> foundUser = repository.findByUsername(user.getUsername());
        if (!foundUser.isPresent() && Validate.validEmail(user.getEmail())){
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            UserRole foundRole = repository.existsById(1) ? roleRepository.findByName("USER") : roleRepository.findByName("ADMIN");
            if (foundRole != null) user.setRole(foundRole);
            user.setToken();
            return repository.save(user);
        }
       return null;
    }

    @Override
    public User findUserById(Integer id) {
        return repository.findById(id).get();
    }

    @Override
    public List<User> findAllUser() {
        return repository.findAll();
    }

    @Override
    public User updateUserRole(String userRole, Integer id) {
        Optional<User> foundUser = repository.findById(id);
        UserRole foundRole = roleRepository.findByName(userRole);
        if(foundUser.isPresent() && foundRole != null){
            foundUser.get().setRole(foundRole);
            foundUser.get().setToken();
            return repository.save(foundUser.get());
        }
        return null;
    }

    @Override
    public User updateUser(User user, Integer id) {
        Optional<User> foundUser = repository.findById(id);
        if(foundUser.isPresent()){
            UserRole foundRole = roleRepository.findByName(foundUser.get().getRole().getName());
            foundUser.get().setRole(foundRole);
            foundUser.get().setToken();
            return repository.save(foundUser.get());
        }
        return null;
    }

    @Override
    public User findUserByUsername(String username) {
        return repository.findByUsername(username).get();
    }

    @Override
    public User findUserByEmail(String email) {
        return repository.findByEmail(email).get();
    }

    @Override
    public User findUserByUsernameOrEmail(String input) {
        return repository.findByEmailOrUsername(input).get();
    }

    @Override
    public void deleteUserById(Integer id) {
        repository.deleteById(id);
    }

}
