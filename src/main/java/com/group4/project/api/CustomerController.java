package com.group4.project.api;

import com.group4.project.models.Customer;
import com.group4.project.models.ResponseObject;
import com.group4.project.repositories.user.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Controller
@RequestMapping("/api/v1/customer")
public class CustomerController {
    @Autowired
    private CustomerRepository customerRepository;

    @GetMapping("/get-all")
    public ResponseEntity<ResponseObject> getAll(){
        return ResponseEntity.ok().body(
                new ResponseObject("Successfully", 200, customerRepository.findAll())
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<ResponseObject> findById(@PathVariable Integer id){
        Optional<Customer> foundCustomer = customerRepository.findById(id);
        if (foundCustomer.isPresent()){
            return ResponseEntity.ok().body(
                    new ResponseObject("Successfully", 200, foundCustomer.get())
            );
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                new ResponseObject("Not found customer", 404, null)
        );
    }

    @PostMapping("/insert")
    public ResponseEntity<ResponseObject> insertCustomer(@RequestBody Customer customer){
        return ResponseEntity.ok().body(
                new ResponseObject("Insert successfully", 200, customerRepository.save(customer))
        );
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<ResponseObject> updateCustomer(@RequestBody Customer customer,
                                                         @PathVariable Integer id){
        Optional<Customer> foundCustomer = customerRepository.findById(id);
        if(foundCustomer.isPresent()){
            foundCustomer.get().setFirstName(customer.getFirstName());
            foundCustomer.get().setLastName(customer.getLastName());
            foundCustomer.get().setAddress(customer.getAddress());
            customerRepository.save(foundCustomer.get());
        }
        return ResponseEntity.ok().body(
                new ResponseObject("Updated successfully", 200, foundCustomer.get())
        );
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<ResponseObject> deleteCustomer(@PathVariable Integer id){
        Optional<Customer> foundCustomer = customerRepository.findById(id);
        if(foundCustomer.isPresent()) customerRepository.deleteById(id);
        return ResponseEntity.ok().body(
                new ResponseObject("Delete successfully", 200, null)
        );
    }
}
