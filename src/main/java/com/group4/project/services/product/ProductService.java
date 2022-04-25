package com.group4.project.services.product;

import com.group4.project.models.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface ProductService {
    public List<Product> findAllProduct();
    public Page<Product> findAllPage(Pageable pageable);
    public Product findProductById(Integer id);
    public Product saveProduct(String title,
                               String description,
                               float price,
                               float discount,
                               Integer quantity,
                               Integer brandID,
                               Integer categoryID,
                               String[] attributes,
                               MultipartFile[] images);
    public Product updateProduct(String title,
                                 String description,
                                 float price,
                                 float discount,
                                 Integer quantity,
                                 Integer brandID,
                                 Integer categoryID,
                                 String[] attributes,
                                 MultipartFile[] images,
                                 Integer id);
    public void deleteProductById(Integer id);
}
