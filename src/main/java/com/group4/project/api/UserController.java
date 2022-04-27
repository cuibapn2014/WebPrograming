package com.group4.project.api;

import com.group4.project.models.ResponseCode;
import com.group4.project.models.ResponseObject;
import com.group4.project.models.User;
import com.group4.project.services.user.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("api/v1/user")
@RequiredArgsConstructor
@Slf4j
public class UserController {
    @Autowired private UserService service;

    @GetMapping("/get-all")
    public ResponseEntity<ResponseObject> getAllUser(){
            return new ResponseEntity<ResponseObject>(
                    new ResponseObject("successfully", ResponseCode.HTTP_OK, service.findAllUser())
                    , HttpStatus.OK);
    }

    @GetMapping("/{username}")
    public ResponseEntity<ResponseObject> findByUsername(@PathVariable String username){
        User user = service.findUserByUsername(username);
        if(user != null) {
            return new ResponseEntity<ResponseObject>(
                    new ResponseObject("successfully", ResponseCode.HTTP_OK, user)
                    , HttpStatus.OK);
        }
        return new ResponseEntity<ResponseObject>(
                new ResponseObject("Not found", ResponseCode.HTTP_NOT_FOUND, null)
                , HttpStatus.NOT_FOUND);
    }

    @PostMapping("/signup")
    public ResponseEntity<ResponseObject> insertUser(@RequestBody User newUser) {
        User user = service.saveUser(newUser);
        if (user != null){
            return new ResponseEntity<ResponseObject>(
                    new ResponseObject("Insert successfully", 200, user),
                    HttpStatus.OK
            );
        }
        return new ResponseEntity<ResponseObject>(
                new ResponseObject("Bad request", ResponseCode.HTTP_BAD_REQUEST, null),
                HttpStatus.BAD_REQUEST
        );
    }

    @PostMapping("/login")
    public ResponseEntity<ResponseObject> login(@RequestParam("username") String username,
                                                @RequestParam("password") String password){
        User matchUser = null;
        if(!isEmail(username)) {
            matchUser = service.findUserByUsername(username);
        }else{
            matchUser = service.findUserByEmail(username);
        }

        boolean isLogin = matchUser != null ? BCrypt.checkpw(password,matchUser.getPassword()) : false;

        if(!isLogin){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
                new ResponseObject("Bad request", ResponseCode.HTTP_BAD_REQUEST, null)
        );
        }

        return new ResponseEntity<ResponseObject>(
                new ResponseObject("Login successfully", 200, matchUser),
                HttpStatus.OK
        );
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<ResponseObject> updateRole(@RequestBody User newUser ,@PathVariable Integer id){
        User user = service.updateUser(newUser, id);
        if(user != null) {
            return new ResponseEntity<ResponseObject>(
                    new ResponseObject("Updated successfully", 200, user),
                    HttpStatus.OK
            );
        }

        return new ResponseEntity<ResponseObject>(
                new ResponseObject("Bad request", ResponseCode.HTTP_BAD_REQUEST, null),
                HttpStatus.OK
        );
    }

    @PutMapping("/update-role/{id}")
    public ResponseEntity<ResponseObject> updateRole(@RequestParam("role") String userRole ,@PathVariable Integer id){
        User user = service.updateUserRole(userRole, id);
        if(user != null) {
            return new ResponseEntity<ResponseObject>(
                    new ResponseObject("Updated successfully", 200, user),
                    HttpStatus.OK
            );
        }
        return new ResponseEntity<ResponseObject>(
                new ResponseObject("Bad request", ResponseCode.HTTP_BAD_REQUEST, null),
                HttpStatus.OK
        );
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<ResponseObject> deleteById(@PathVariable Integer id){
        boolean exist = service.findUserById(id) != null ? true : false;
        if(exist) {
            service.deleteUserById(id);
            return new ResponseEntity<ResponseObject>(
                    new ResponseObject("Delete successfully", ResponseCode.HTTP_OK, null),
                    HttpStatus.OK
            );
        }

        return new ResponseEntity<ResponseObject>(
                new ResponseObject("Not found", ResponseCode.HTTP_NOT_FOUND, null),
                HttpStatus.OK
        );
    }


    private boolean isEmail(String input){
        return input.contains("@");
    }
}
