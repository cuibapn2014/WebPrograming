package com.group4.project.api;

import com.group4.project.models.ResponseObject;
import com.group4.project.repositories.user.UserRepository;
import com.group4.project.models.User;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/user")
public class UserController {

    @Autowired
    private UserRepository userRepo;

    @GetMapping("/get-all")
    public ResponseEntity<ResponseObject> getAllUser(){
        List<User> foundUser = userRepo.findAll();
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("successfully", 200, foundUser)
            );
    }

    @PostMapping("/signup")
    public ResponseEntity<ResponseObject> insertUser(@RequestBody User newUser){
        newUser.setPassword(BCrypt.hashpw(newUser.getPassword(), BCrypt.gensalt(12)));
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("Insert successfully", 200, userRepo.save(newUser))
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
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("Bad request", 400, null)
            );
        }

        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("Login successfully", 200, matchUser)
        );
    }

    @PutMapping("/update-role/{id}")
    public ResponseEntity<ResponseObject> updateRole(@RequestParam("role") int role ,@PathVariable Integer id){
        Optional<User> foundUser = userRepo.findById(id);
        if(foundUser.isPresent() && role >= 0 && role <= 4){
            foundUser.get().setRole(role);
            userRepo.save(foundUser.get());
        }
        return ResponseEntity.ok().body(
                new ResponseObject("Updated successfully", 200, foundUser.get())
        );
    }
}
