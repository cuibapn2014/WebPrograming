package com.group4.project.services.product;

import com.group4.project.models.*;
import com.group4.project.repositories.BrandRepository;
import com.group4.project.repositories.CategoryRepository;
import com.group4.project.repositories.ProductRepository;
import com.group4.project.services.image.IStoreServices;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.Arrays;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService{
    @Autowired private ProductRepository repository;
    @Autowired private CategoryRepository categoryRepo;
    @Autowired private BrandRepository brandRepo;
    @Autowired private IStoreServices imageStore;

    @Override
    public Page<Product> findAllPage(Pageable pageable) {
        return repository.findAll(pageable);
    }

    @Override
    public List<Product> findAllProduct() {
        return repository.findAll();
    }

    @Override
    public Product findProductById(Integer id) {
        return repository.findById(id).get();
    }

    @Override
    public Product saveProduct(String title,
                               String description,
                               float price,
                               float discount,
                               Integer quantity,
                               Integer brandID,
                               Integer categoryID,
                               String[] attributes,
                               MultipartFile[] images) {
        Product product = new Product();
        Category category = categoryRepo.findById(categoryID).orElseGet(() -> {return null;});
        Brand brand = brandRepo.findById(brandID).orElseGet(() -> {return null;});
        product.setTitle(title);
        product.setDescription(description);
        product.setPrice(price);
        product.setDiscount(discount);
        product.setSlug(title);
        product.setQuantity(quantity);
        product.setBrand(brand);
        product.setCategory(category);
        Arrays.asList(attributes).stream().forEach(s -> {
            String strAttr[] = s.split(":");
            Attribute attr = new Attribute(strAttr[0], strAttr[1]);
            product.getAttribute().add(attr);
        });
        try {
            if(images.length > 1){
                Arrays.asList(images).forEach(multipartFile -> {
                    String fileName = imageStore.storeImage(multipartFile);
                    Image img = new Image(fileName);
                    product.getImage().add(img);
                });
            }else{
                Image img = new Image(imageStore.storeImage(images[0]));
                product.getImage().add(img);
            }
        }catch(Exception e){
            throw new RuntimeException("Coulnd't upload image: " + e.getMessage());
        }

        return repository.save(product);
    }

    @Override
    public Product updateProduct(String title,
                                 String description,
                                 float price,
                                 float discount,
                                 Integer quantity,
                                 Integer brandID,
                                 Integer categoryID,
                                 String[] attributes,
                                 MultipartFile[] images,
                                 Integer id) {
        Product product = repository.findById(id).orElseGet(() ->{ return null;});
        Category category = categoryRepo.findById(categoryID).orElseGet(() -> {return null;});
        Brand brand = brandRepo.findById(brandID).orElseGet(() -> {return null;});
        product.setTitle(title);
        product.setDescription(description);
        product.setPrice(price);
        product.setDiscount(discount);
        product.setSlug(title);
        product.setQuantity(quantity);
        product.setBrand(brand);
        product.setCategory(category);
        product.setBrand(brand);
        product.setCategory(category);
		product.getAttribute().clear();
        Arrays.asList(attributes).stream().forEach(s -> {
            String strAttr[] = s.split(":");
            Attribute attr = new Attribute(strAttr[0], strAttr[1]);
            product.getAttribute().add(attr);
        });
        if(images != null) {
            try {
                Arrays.asList(images).stream().forEach(multipartFile -> {
                    Image img = new Image(imageStore.storeImage(multipartFile));
                    product.getImage().add(img);
                });
            } catch (Exception e) {
                throw new RuntimeException("Coulnd't upload image: " + e.getMessage());
            }
        }
        return repository.save(product);
    }

    @Override
    public void deleteProductById(Integer id) {
        repository.deleteById(id);
    }

}
