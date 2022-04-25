package com.group4.project.services.customer;

import com.group4.project.models.Customer;

import java.util.List;

public interface CustomerService {
    public Customer saveCustomer(Customer customer);
    public Customer findCustomerById(Integer id);
    public List<Customer> findAllCustomer();
    public Customer updateCustomerById(Customer customer, Integer id);
    public void deleteCustomerById(Integer id);
}
