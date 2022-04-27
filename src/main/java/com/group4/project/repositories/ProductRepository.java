package com.group4.project.repositories;

import com.group4.project.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Integer> {
    @Query(value = "SELECT * FROM product WHERE title LIKE %?1%", nativeQuery = true)
    public List<Product> searchResult(String keyword);
}
