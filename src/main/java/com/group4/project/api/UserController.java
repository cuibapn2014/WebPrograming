package com.group4.project.api;

import com.group4.project.models.ResponseCode;
import com.group4.project.models.ResponseObject;
import com.group4.project.models.UserRole;
import com.group4.project.repositories.user.UserRepository;
import com.group4.project.models.User;
import com.group4.project.repositories.user.UserRoleRepository;
import lombok.RequiredArgsConstructor;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/user")
@RequiredArgsConstructor
public class UserController {

    @Autowired private UserRepository userRepo;
    @Autowired private UserRoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;

    @GetMapping("/get-all")
    public ResponseEntity<ResponseObject> getAllUser(){
        List<User> foundUser = userRepo.findAll();
            return new ResponseEntity<ResponseObject>(
                    new ResponseObject("successfully", ResponseCode.HTTP_OK, foundUser)
                    , HttpStatus.OK);
    }

    @PostMapping("/signup")
    public ResponseEntity<ResponseObject> insertUser(@RequestBody User newUser){
        newUser.setPassword(passwordEncoder.encode(newUser.getPassword()));
        UserRole foundRole = roleRepository.findByName(newUser.getRole().getName());
        newUser.setToken();
        if(foundRole != null) newUser.setRole(foundRole);
        return new ResponseEntity<ResponseObject>(
                new ResponseObject("Insert successfully", 200, userRepo.save(newUser)),
                HttpStatus.OK
        );
    }

    @PostMapping("/login")
    public ResponseEntity<ResponseObject> login(@RequestBody User user){
        User matchUser = userRepo.findByUsername(user.getUsername())
                .orElseGet(() -> {
                    return null;
                });

        boolean isLogin = matchUser != null ? BCrypt.checkpw(user.getPassword(),matchUser.getPassword()) : false;
        if(!isLogin){
            return new ResponseEntity<ResponseObject>(
                    new ResponseObject("Bad request", 400, null),
                    HttpStatus.BAD_REQUEST
            );
        }

        return new ResponseEntity<ResponseObject>(
                new ResponseObject("Login successfully", 200, matchUser),
                HttpStatus.OK
        );
    }

    @PutMapping("/update-role/{id}")
    public ResponseEntity<ResponseObject> updateRole(@RequestParam("role") String userRole ,@PathVariable Integer id){
        Optional<User> foundUser = userRepo.findById(id);
        if(foundUser.isPresent() && userRole != null){
            userRepo.save(foundUser.get());
        }
        return new ResponseEntity<ResponseObject>(
                new ResponseObject("Updated successfully", 200, foundUser.get()),
                HttpStatus.OK
        );
    }
}
