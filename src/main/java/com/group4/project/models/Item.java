package com.group4.project.models;

import net.bytebuddy.build.ToStringPlugin;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "item")
public class Item implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    private int quantity;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;
    
    private String attribute;

    public Item() {
    }

    public Item(int quantity, Product product, String attribute) {
        this.quantity = quantity;
        this.product = product;
        this.attribute = attribute;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public String getAttribute() {
        return attribute;
    }

    public void setAttribute(String attribute) {
        this.attribute = attribute;
    }

    @Override
    public String toString() {
        return "Item{" +
                "id=" + id +
                ", quantity=" + quantity +
                ", product=" + product +
                ", attribute=" + attribute +
                '}';
    }
}
