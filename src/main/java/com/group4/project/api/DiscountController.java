package com.group4.project.api;

import com.group4.project.models.DiscountCode;
import com.group4.project.models.ResponseObject;
import com.group4.project.repositories.discount.DiscountCodeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("api/v1/discount-code")
public class DiscountController {
    @Autowired
    private DiscountCodeRepository repository;

    @GetMapping("/get-all")
    public ResponseEntity<ResponseObject> getAll(){
        return new ResponseEntity<>(
                new ResponseObject("Successfully", 200, repository.findAll()), HttpStatus.OK
        );
    }

    @GetMapping("/{code}")
    public ResponseEntity<ResponseObject> getByCode(@PathVariable String code){
        Optional<DiscountCode> discountCode = repository.findByCode(code);
        if(discountCode.isPresent()){
            return new ResponseEntity<>(
                    new ResponseObject("Successfully", 200, discountCode.get()),HttpStatus.OK
            );
        }

        return new ResponseEntity<>(
                new ResponseObject("Not found code", 404, discountCode.get()), HttpStatus.NOT_FOUND
        );
    }

    @PostMapping("/insert")
    public ResponseEntity<ResponseObject> insertCode(@RequestBody DiscountCode discountCode){
        return new ResponseEntity<>(
                new ResponseObject("Insert successfully", 200, repository.save(discountCode)), HttpStatus.OK
        );
    }


    @PutMapping("/update/{id}")
    public ResponseEntity<ResponseObject> updateCode(@RequestBody DiscountCode discountCode, @PathVariable Integer id){
        Optional<DiscountCode> foundCode = repository.findById(id);
        if(foundCode.isPresent()){
            repository.save(foundCode.get());
        }
        return new ResponseEntity<>(
                new ResponseObject("Update successfully", 200, foundCode.get()), HttpStatus.OK
        );
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<ResponseObject> deleteCode(@PathVariable Integer id){
        Optional<DiscountCode> foundCode = repository.findById(id);
        if(foundCode.isPresent()){
            repository.deleteById(id);
        }

        return new ResponseEntity<>(
                new ResponseObject("Delete successfully", 200, null), HttpStatus.OK
        );
    }
}
