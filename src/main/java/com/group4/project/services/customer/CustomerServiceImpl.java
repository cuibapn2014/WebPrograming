package com.group4.project.services.customer;

import com.group4.project.models.Customer;
import com.group4.project.repositories.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CustomerServiceImpl implements CustomerService{
    @Autowired private CustomerRepository repository;

    @Override
    public Customer saveCustomer(Customer customer) {
        return repository.save(customer);
    }

    @Override
    public Customer findCustomerById(Integer id) {
        return repository.findById(id).get();
    }

    @Override
    public List<Customer> findAllCustomer() {
        return repository.findAll();
    }

    @Override
    public Customer updateCustomerById(Customer customer, Integer id) {
        Optional<Customer> foundCustomer = repository.findById(id);
        if(foundCustomer.isPresent()){
            foundCustomer.get().setFirstName(customer.getFirstName());
            foundCustomer.get().setLastName(customer.getLastName());
            foundCustomer.get().setAddress(customer.getAddress());
            return repository.save(foundCustomer.get());
        }
        return null;
    }

    @Override
    public void deleteCustomerById(Integer id) {
        repository.deleteById(id);
    }
}
