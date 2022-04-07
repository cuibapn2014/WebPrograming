package com.group4.project.repositories.user;

import com.group4.project.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {
    @Query(value = "SELECT * FROM customer WHERE phoneNumber=?1",nativeQuery = true)
    public Optional<Customer> findByPhoneNumber(String phoneNumber);
}
