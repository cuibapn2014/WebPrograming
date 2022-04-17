package com.group4.project.controller;

import com.group4.project.models.Product;
import com.group4.project.repositories.product.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Optional;

@Controller
public class MainController {
    @Autowired
    private ProductRepository productRepo;

    @RequestMapping("/*")
    public String index() {
        return "index";
    }

    @GetMapping(path = "/product/{id}/{slug}")
    public String product(@PathVariable Integer id, @PathVariable String slug) {
        Optional<Product> product = productRepo.findById(id);
        if(product.isPresent() && product.get().getSlug().equals(slug))
            return "index";
        return "error";
    }
}
