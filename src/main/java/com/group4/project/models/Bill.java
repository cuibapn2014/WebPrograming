package com.group4.project.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "bill")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Bill {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "customer_id", referencedColumnName = "id", nullable = false)
    private Customer customer;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "bill_id", referencedColumnName = "id", nullable = false)
    private List<Item> item;

    @JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss",timezone = "GMT+07:00")
    private Date createdAt;

    private String note;

    /*
    * 1. Waiting confirm
    * 2. Confirmed
    * 3. Being transported
    * 4. Finish
    */
    private int status;

    private String code;

    private boolean payments;//false => Cod | true => Online payment

    public Bill() {
    }

    public Bill(Customer customer, List<Item> item, Date createdAt, String note, int status, String code, boolean payments) {
        this.customer = customer;
        this.item = item;
        this.createdAt = new java.util.Date();
        this.note = note;
        this.status = status;
        this.code = code;
        this.payments = payments;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public List<Item> getItem() {
        return item;
    }

    public void setItem(List<Item> item) {
        this.item = item;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt() {
        this.createdAt = new java.util.Date();
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus() {
        this.status++;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public boolean isPayments() {
        return payments;
    }

    public void setPayments(boolean payments) {
        this.payments = payments;
    }

    public float calTotal(){
        float total = 0;
        for(Item mItem : this.getItem()){
            total += mItem.getProduct().getPrice() * (float)(1 - mItem.getProduct().getDiscount());
        }
        return total;
    }

    @Override
    public String toString() {
        return "Bill{" +
                "id=" + id +
                ", customer=" + customer +
                ", item=" + item +
                ", createdAt=" + createdAt +
                ", note='" + note + '\'' +
                ", status=" + status +
                ", code=" + code +
                ", payments=" + payments +
                '}';
    }
}
