package com.group4.project.api;

import com.group4.project.models.Customer;
import com.group4.project.models.ResponseCode;
import com.group4.project.models.ResponseObject;
import com.group4.project.services.customer.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


@Controller
@RequestMapping("/api/v1/customer")
public class CustomerController {
    @Autowired
    private CustomerService service;

    @GetMapping("/get-all")
    public ResponseEntity<ResponseObject> getAll(){
        return ResponseEntity.ok().body(
                new ResponseObject("Successfully", 200, service.findAllCustomer())
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<ResponseObject> findById(@PathVariable Integer id){
        Customer foundCustomer = service.findCustomerById(id);
        if (foundCustomer != null){
            return ResponseEntity.ok().body(
                    new ResponseObject("Successfully", 200, foundCustomer)
            );
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                new ResponseObject("Not found customer", 404, null)
        );
    }

    @PostMapping("/insert")
    public ResponseEntity<ResponseObject> insertCustomer(@RequestBody Customer customer){
        return ResponseEntity.ok().body(
                new ResponseObject("Insert successfully", 200, service.saveCustomer(customer))
        );
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<ResponseObject> updateCustomer(@RequestBody Customer customer,
                                                         @PathVariable Integer id){
        Customer foundCustomer = service.updateCustomerById(customer, id);
        if(foundCustomer != null) {
            return ResponseEntity.ok().body(
                    new ResponseObject("Updated successfully", 200, foundCustomer)
            );
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
                new ResponseObject("Bad request", ResponseCode.HTTP_BAD_REQUEST, null)
        );
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<ResponseObject> deleteCustomer(@PathVariable Integer id){
        Customer foundCustomer = service.findCustomerById(id);
        if(foundCustomer != null) service.deleteCustomerById(id);
        return ResponseEntity.ok().body(
                new ResponseObject("Delete successfully", 200, null)
        );
    }
}
