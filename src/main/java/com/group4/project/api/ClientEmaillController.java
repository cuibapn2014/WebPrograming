package com.group4.project.api;

import com.group4.project.models.ClientEmail;
import com.group4.project.models.ResponseCode;
import com.group4.project.models.ResponseObject;
import com.group4.project.services.client.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/client")
public class ClientEmaillController {
    @Autowired private ClientService service;

    @GetMapping("/get-all")
    public ResponseEntity<ResponseObject> findAll(){
        return ResponseEntity.ok().body(
                new ResponseObject("successfully", ResponseCode.HTTP_OK, service.findAllClient())
        );
    }

    @PostMapping("/insert")
    public ResponseEntity<ResponseObject> insertEmail(@RequestParam("email") String email){
        ClientEmail clientEmail = service.saveClient(new ClientEmail(email));
        if(clientEmail != null) {
            return ResponseEntity.ok().body(
                    new ResponseObject("successfully", ResponseCode.HTTP_OK, clientEmail)
            );
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
                new ResponseObject("Bad request", ResponseCode.HTTP_BAD_REQUEST, null)
        );
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<ResponseObject> deleteEmail(@PathVariable Integer id){
        service.deleteClientById(id);
        return ResponseEntity.ok().body(
                new ResponseObject("successfully", ResponseCode.HTTP_OK, null)
        );
    }
}
