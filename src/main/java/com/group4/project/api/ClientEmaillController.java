package com.group4.project.api;

import com.group4.project.helper.Validate;
import com.group4.project.models.ClientEmail;
import com.group4.project.models.ResponseCode;
import com.group4.project.models.ResponseObject;
import com.group4.project.repositories.client.ClientEmailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/client")
public class ClientEmaillController {
    @Autowired private ClientEmailRepository repository;

    @GetMapping("/get-all")
    public ResponseEntity<ResponseObject> findAll(){
        return ResponseEntity.ok().body(
                new ResponseObject("successfully", ResponseCode.HTTP_OK, repository.findAll())
        );
    }

    @GetMapping("/insert")
    public ResponseEntity<ResponseObject> insertEmail(@RequestParam("email") String email){
        if(Validate.validEmail(email)) {
            return ResponseEntity.ok().body(
                    new ResponseObject("successfully", ResponseCode.HTTP_OK, repository.save(new ClientEmail(email)))
            );
        }
        return ResponseEntity.ok().body(
                new ResponseObject("Bad request", ResponseCode.HTTP_BAD_REQUEST, null)
        );
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<ResponseObject> deleteEmail(@PathVariable Integer id){
        repository.deleteById(id);
        return ResponseEntity.ok().body(
                new ResponseObject("successfully", ResponseCode.HTTP_OK, null)
        );
    }
}
