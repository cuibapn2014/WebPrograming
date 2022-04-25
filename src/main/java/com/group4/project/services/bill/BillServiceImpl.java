package com.group4.project.services.bill;

import com.group4.project.models.*;
import com.group4.project.repositories.BillRepository;
import com.group4.project.repositories.CustomerRepository;
import com.group4.project.repositories.DiscountCodeRepository;
import com.group4.project.repositories.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BillServiceImpl implements BillService{
    @Autowired private CustomerRepository customerRepository;
    @Autowired private DiscountCodeRepository discountCodeRepository;
    @Autowired private BillRepository repository;
    @Autowired private ProductRepository productRepository;

    @Override
    public Bill saveBill(Bill bill) {
        Optional<Customer> customer = customerRepository.findByPhoneNumber(bill.getCustomer().getPhoneNumber());
        Optional<DiscountCode> code = discountCodeRepository.findByCode(bill.getCode());

        boolean isCode = code.isPresent() ? true : false;
        if(bill == null) return null;


        bill.setItem(this.getListItem(bill.getItem()));
        bill.setCreatedAt();
        if(customer.isPresent()) bill.setCustomer(customer.get());

        if(isCode){
            int currentTime =(int) new Date().getTime();
            boolean invalidTime = (code.get().getExpired().getTime() - currentTime) > 0 ? true : false;

            if(!invalidTime || code.get().getTimeuses() <= 0 && bill.calTotal() < code.get().getMinTotal()){
                bill.setCode(null);
            }else{
                code.get().setTimeuses(code.get().getTimeuses() - 1);
                discountCodeRepository.save(code.get());
            }
        }
        else bill.setCode(null);

        return repository.save(bill);
    }

    @Override
    public Bill findBillById(Integer id) {
        return repository.getById(id);
    }

    @Override
    public List<Bill> findAllBill() {
        return repository.findAll();
    }

    @Override
    public Bill updateBillById(Bill Bill, Integer id) {
        Optional<Bill> foundBill = repository.findById(id);
        if(foundBill.isPresent() && foundBill.get().getStatus() <= 3){
            foundBill.get().setStatus();
            return repository.save(foundBill.get());
        }
        return null;
    }

    @Override
    public void deleteBillById(Integer id) {
        Optional<Bill> foundbill = repository.findById(id);
        if(foundbill.isPresent())
            repository.deleteById(id);
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
