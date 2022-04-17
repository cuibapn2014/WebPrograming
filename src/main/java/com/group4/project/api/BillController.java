package com.group4.project.api;

import com.group4.project.models.*;
import com.group4.project.repositories.attribute.AttributeRepository;
import com.group4.project.repositories.bill.BillRepository;
import com.group4.project.repositories.discount.DiscountCodeRepository;
import com.group4.project.repositories.product.ProductRepository;
import com.group4.project.repositories.user.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/bill")
public class BillController {
    @Autowired private BillRepository billRepository;
    @Autowired private CustomerRepository customerRepository;
    @Autowired private DiscountCodeRepository discountCodeRepository;
    @Autowired private ProductRepository productRepository;
    @Autowired private AttributeRepository attributeRepository;

    @GetMapping("/get-all")
    public ResponseEntity<ResponseObject> getAll(){
        return new ResponseEntity<>(
                new ResponseObject("successfully", 200, billRepository.findAll()),
                HttpStatus.OK
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<ResponseObject> getById(@PathVariable Integer id){
        Optional<Bill> foundBill = billRepository.findById(id);
        if(foundBill.isPresent()){
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
        Optional<Customer> customer = customerRepository.findByPhoneNumber(newBill.getCustomer().getPhoneNumber());
        Optional<DiscountCode> code = discountCodeRepository.findByCode(newBill.getCode());

        boolean isCode = code.isPresent() ? true : false;
        if(newBill == null){
            return new ResponseEntity<>(
                    new ResponseObject("Bad request", 401, newBill),
                    HttpStatus.BAD_REQUEST
            );
        }

        newBill.setItem(this.getListItem(newBill.getItem()));
        newBill.setCreatedAt();
        if(customer.isPresent()) newBill.setCustomer(customer.get());

        if(isCode){
            int currentTime =(int) new Date().getTime();
            boolean invalidTime = (code.get().getExpired().getTime() - currentTime) > 0 ? true : false;

            if(!invalidTime || code.get().getTimeuses() <= 0 && newBill.calTotal() < code.get().getMinTotal()){
                newBill.setCode(null);
            }else{
                code.get().setTimeuses(code.get().getTimeuses() - 1);
                discountCodeRepository.save(code.get());
            }
        }
        else newBill.setCode(null);

        return new ResponseEntity<>(
                new ResponseObject("Insert successfully", 200, billRepository.save(newBill)),
                HttpStatus.OK
        );
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<ResponseObject> updateBill(@RequestBody Bill newBill, @PathVariable Integer id){
        Optional<Bill> foundBill = billRepository.findById(id);
        if(foundBill.isPresent() && foundBill.get().getStatus() <= 3){
            foundBill.get().setStatus();
            billRepository.save(foundBill.get());
        }
        return new ResponseEntity<>(
                new ResponseObject("Update successfully", 200, foundBill),
                HttpStatus.OK
        );
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<ResponseObject> deleteBill(@PathVariable Integer id){
        Optional<Bill> foundbill = billRepository.findById(id);
        if(foundbill.isPresent()){
            billRepository.deleteById(id);
        }
        return new ResponseEntity<>(
                new ResponseObject("Delete successfully", 200, null),
                HttpStatus.OK
        );
    }

    private List<Item> getListItem(List<Item> listItem){
        listItem.forEach(item -> {
            Optional<Product> foundProduct = productRepository.findById(item.getProduct().getId());
            if(foundProduct.isPresent())
            item.setProduct(foundProduct.get());
        });
        return listItem;
    }
}
