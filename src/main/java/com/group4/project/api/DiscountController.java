package com.group4.project.api;

import com.group4.project.models.DiscountCode;
import com.group4.project.models.ResponseCode;
import com.group4.project.models.ResponseObject;
import com.group4.project.services.discount.DiscountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("api/v1/discount-code")
public class DiscountController {
    @Autowired
    private DiscountService service;

    @GetMapping("/get-all")
    public ResponseEntity<ResponseObject> getAll(){
        return new ResponseEntity<>(
                new ResponseObject("Successfully", 200, service.findAllDiscount()), HttpStatus.OK
        );
    }

    @GetMapping("/{code}")
    public ResponseEntity<ResponseObject> getByCode(@PathVariable String code){
        DiscountCode discountCode = service.findByCode(code);
        if(discountCode != null){
            return new ResponseEntity<>(
                    new ResponseObject("Successfully", 200, discountCode),HttpStatus.OK
            );
        }

        return new ResponseEntity<>(
                new ResponseObject("Not found code", 404, null), HttpStatus.NOT_FOUND
        );
    }

    @PostMapping("/insert")
    public ResponseEntity<ResponseObject> insertCode(@RequestBody DiscountCode discountCode){
        return new ResponseEntity<>(
                new ResponseObject("Insert successfully", 200, service.saveDiscount(discountCode)), HttpStatus.OK
        );
    }


    @PutMapping("/update/{id}")
    public ResponseEntity<ResponseObject> updateCode(@RequestBody DiscountCode discountCode, @PathVariable Integer id){
        DiscountCode code= service.updateCodeById(discountCode, id);
        if(code != null) {
            return new ResponseEntity<>(
                    new ResponseObject("Update successfully", 200, code), HttpStatus.OK
            );
        }
        return new ResponseEntity<>(
                new ResponseObject("Bad request", ResponseCode.HTTP_BAD_REQUEST, null), HttpStatus.BAD_REQUEST
        );
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<ResponseObject> deleteCode(@PathVariable Integer id){
        DiscountCode foundCode = service.findDiscountById(id);
        if(foundCode != null){
            service.deleteCodeById(id);
            return new ResponseEntity<>(
                    new ResponseObject("Delete successfully", 200, null), HttpStatus.OK
            );
        }
        return new ResponseEntity<>(
                new ResponseObject("Not found", 404, null), HttpStatus.NOT_FOUND
        );
    }
}
