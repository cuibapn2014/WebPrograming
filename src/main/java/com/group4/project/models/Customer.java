package com.group4.project.models;

import com.fasterxml.jackson.annotation.*;
import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "customer")
public class Customer extends Person implements Serializable {
    private static final long serialVersionUID = 1L;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "customer", orphanRemoval = true)
    @JsonIgnoreProperties({"customer", "hibernateLazyInitializer", "handler"})
    private List<Bill> bill;

    public Customer() {
    }

    public Customer(String firstName, String lastName, String phoneNumber, String address) {
        super(firstName, lastName, phoneNumber, address);
    }

    public List<Bill> getBill() {
        return bill;
    }

    public void setBill(List<Bill> bill) {
        this.bill = bill;
    }
}
