package com.group4.project.api;

import com.group4.project.models.*;
import com.group4.project.services.bill.BillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/bill")
public class BillController {
    @Autowired private BillService service;

    @GetMapping("/get-all")
    public ResponseEntity<ResponseObject> getAll(){
        return new ResponseEntity<>(
                new ResponseObject("successfully", 200, service.findAllBill()),
                HttpStatus.OK
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<ResponseObject> getById(@PathVariable Integer id){
        Bill foundBill = service.findBillById(id);
        if(foundBill != null){
            return new ResponseEntity<>(
                    new ResponseObject("successfully", 200, foundBill),
                    HttpStatus.OK
            );
        }

        return new ResponseEntity<>(
                new ResponseObject("Not found bill", 404, null),
                HttpStatus.NOT_FOUND
        );
    }

    @PostMapping("/insert")
    public ResponseEntity<ResponseObject> insertBill(@RequestBody Bill newBill){
        Bill bill = service.saveBill(newBill);
        if(bill != null) {
            return new ResponseEntity<>(
                    new ResponseObject("Insert successfully", 200, bill),
                    HttpStatus.OK
            );
        }

        return new ResponseEntity<>(
                new ResponseObject("Bad request", ResponseCode.HTTP_BAD_REQUEST, null),
                HttpStatus.BAD_REQUEST
        );
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<ResponseObject> updateBill(@RequestBody Bill newBill, @PathVariable Integer id){
        Bill foundBill = service.updateBillById(newBill, id);
        if(foundBill != null) {
            return new ResponseEntity<>(
                    new ResponseObject("Update successfully", 200, foundBill),
                    HttpStatus.OK
            );
        }
        return new ResponseEntity<>(
                new ResponseObject("Bad request", ResponseCode.HTTP_BAD_REQUEST, null),
                HttpStatus.BAD_REQUEST
        );
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<ResponseObject> deleteBill(@PathVariable Integer id){
        Bill foundbill = service.findBillById(id);
        if(foundbill != null) {
            service.deleteBillById(id);
            return new ResponseEntity<>(
                    new ResponseObject("Delete successfully", 200, null),
                    HttpStatus.OK
            );
        }

        return new ResponseEntity<>(
                new ResponseObject("Not found", 404, null), HttpStatus.NOT_FOUND
        );
    }
}
