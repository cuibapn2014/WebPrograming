package com.group4.project.api;

import com.group4.project.models.ResponseCode;
import com.group4.project.models.ResponseObject;
import com.group4.project.models.UserRole;
import com.group4.project.repositories.user.UserRoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/v1/role")
public class UserRoleController {
    @Autowired private UserRoleRepository roleRepository;

    @GetMapping("/get-all")
    public ResponseEntity<ResponseObject> getAll(){
        return new ResponseEntity<>(
                new ResponseObject("successfully", ResponseCode.HTTP_OK, roleRepository.findAll()),
                HttpStatus.OK
        );
    }

    @PostMapping("/insert")
    public ResponseEntity<ResponseObject> insertRole(@RequestBody UserRole role){
        return new ResponseEntity<>(
                new ResponseObject("Created successfully", ResponseCode.HTTP_CREATED, roleRepository.save(role)),
                HttpStatus.OK
        );
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<ResponseObject> deleteRole(@PathVariable Integer id){
        Optional<UserRole> foundRole = roleRepository.findById(id);
        if(foundRole.isPresent()){
            roleRepository.deleteById(id);
        }
        return new ResponseEntity<>(
                new ResponseObject("Delete successfully", ResponseCode.HTTP_OK, null),
                HttpStatus.OK
        );
    }
}
