package com.group4.project.api;

import com.group4.project.models.ResponseCode;
import com.group4.project.models.ResponseObject;
import com.group4.project.models.UserRole;
import com.group4.project.services.user.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/role")
public class UserRoleController {
    @Autowired private RoleService service;

    @GetMapping("/get-all")
    public ResponseEntity<ResponseObject> getAll(){
        return new ResponseEntity<>(
                new ResponseObject("successfully", ResponseCode.HTTP_OK, service.findAllUserRole()),
                HttpStatus.OK
        );
    }

    @PostMapping("/insert")
    public ResponseEntity<ResponseObject> insertRole(@RequestBody UserRole role){
        if(service.saveUserRole(role) != null) {
            return new ResponseEntity<>(
                    new ResponseObject("Created successfully", ResponseCode.HTTP_CREATED, service.saveUserRole(role)),
                    HttpStatus.OK
            );
        }
        return new ResponseEntity<>(
                new ResponseObject("Bad request", ResponseCode.HTTP_BAD_REQUEST, null),
                HttpStatus.BAD_REQUEST
        );
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<ResponseObject> deleteRole(@PathVariable Integer id){
        service.deleteUserRoleById(id);
        return new ResponseEntity<>(
                new ResponseObject("Delete successfully", ResponseCode.HTTP_OK, null),
                HttpStatus.OK
        );
    }
}
