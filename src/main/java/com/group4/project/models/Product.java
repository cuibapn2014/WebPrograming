package com.group4.project.models;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.*;
import com.group4.project.helper.Slug;
import net.bytebuddy.build.ToStringPlugin;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "product")
public class Product implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(nullable = false, unique = true, length = 255)
    private String title;

    @ManyToOne(fetch = FetchType.LAZY)
    @ToStringPlugin.Exclude
    @JsonIgnoreProperties({"product", "hibernateLazyInitializer", "handler"})
    private Category category;

    @Lob
    @Column(columnDefinition = "TEXT")
    private String description;

    @ManyToOne(fetch = FetchType.LAZY)
    @ToStringPlugin.Exclude
    @JsonIgnoreProperties({"product", "hibernateLazyInitializer", "handler"})
    private Brand brand;

    @Column
    private float price;

    @Column
    private float discount;

    @Column
    private int quantity;

    @Column
    private String slug;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id", referencedColumnName = "id", nullable = false)
    private List<Attribute> attribute = new ArrayList<Attribute>();

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id", referencedColumnName = "id", nullable = false)
    private List<Image> image = new ArrayList<Image>();

    public Product() {
        super();
    }

    public Product(String title, Category category, String description, Brand brand, float price, float discount, int quantity, String slug, List<Attribute> attribute, List<Image> image) {
        this.title = title;
        this.category = category;
        this.description = description;
        this.brand = brand;
        this.price = price;
        this.discount = discount;
        this.quantity = quantity;
        this.slug = Slug.toSlug(title);
        this.attribute = attribute;
        this.image = image;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        if(!category.equals(null))
        this.category = category;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Brand getBrand() {
        return brand;
    }

    public void setBrand(Brand brand) {
        if(!brand.equals(null))
        this.brand = brand;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public float getDiscount() {
        return discount;
    }

    public void setDiscount(float discount) {
        this.discount = discount < 0 ? discount/-1 : discount;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getSlug() {
        return slug;
    }

    public void setSlug(String slug) {
        this.slug = Slug.toSlug(slug);
    }

    public List<Attribute> getAttribute() {
        return attribute;
    }

    public void setAttribute(List<Attribute> attribute) {
        this.attribute.clear();
        this.attribute.addAll(attribute);
    }

    public List<Image> getImage() {
        return image;
    }

    public void setImage(List<Image> image) {
        this.image.clear();
        this.image.addAll(image);
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", category=" + category +
                ", description='" + description + '\'' +
                ", brand=" + brand +
                ", price=" + price +
                ", discount=" + discount +
                ", quantity=" + quantity +
                ", slug='" + slug + '\'' +
                ", attribute=" + attribute +
                ", image=" + image +
                '}';
    }
}
