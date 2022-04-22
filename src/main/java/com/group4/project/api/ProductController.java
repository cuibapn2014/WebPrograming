package com.group4.project.api;

import com.group4.project.models.*;
import com.group4.project.repositories.brand.BrandRepository;
import com.group4.project.repositories.category.CategoryRepository;
import com.group4.project.repositories.product.ProductRepository;
import com.group4.project.services.IStoreServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.util.Arrays;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/product")
public class ProductController {

    @Autowired private ProductRepository productRepo;
    @Autowired private BrandRepository brandRepo;
    @Autowired private CategoryRepository categoryRepo;
    @Autowired private IStoreServices iStoreServices;

    @GetMapping("/get-all")
    public ResponseEntity<ResponseObjectPage> getAllProducts(@RequestParam(required = true, value = "page",defaultValue = "1") int page,
                                                         HttpServletRequest request) {
        page = page > 0 ? page : 0;
        Pageable paging = PageRequest.of(page - 1 , 10);
        Page<Product> getAllProduct = productRepo.findAll(paging);
        ResponseObjectPage response = new ResponseObjectPage();
        int totalPage = (int) Math.ceil(response.getTotal() / 10);
        boolean pageInvalid = page > 1 && page < totalPage ? true : false;
        String prevURL = pageInvalid ? getCurrentURL(request).concat("?page=" + (page - 1)) : null;
        String nextUrl = pageInvalid ? getCurrentURL(request).concat("?page=" + (page + 1)) : null;
        response.setMessage("Successfully");
        response.setStatus(200);
        response.setData(getAllProduct.toList());
        response.setTotal(productRepo.findAll().size());
        response.setPerPage(10);
        response.setCurrentPage(page);
        response.setFirstPageUrl(getCurrentURL(request).concat("?page=1"));
        response.setLastPage(totalPage);
        response.setPrevPageUrl(prevURL);
        response.setNextPageUrl(nextUrl);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    ResponseEntity<ResponseObject> findById(@PathVariable Integer id){
        Optional<Product> foundProduct = productRepo.findById(id);
        if(foundProduct.isPresent()){
            return new ResponseEntity<>(
                    new ResponseObject("success",200,foundProduct), HttpStatus.OK
            );
        }else {
            return new ResponseEntity<>(
                    new ResponseObject("Not found",404,foundProduct), HttpStatus.NOT_FOUND
            );
        }
    }

    @PostMapping("/insert")
    public ResponseEntity<ResponseObject> insertProduct(@RequestParam("title") String title,
                                                        @RequestParam("description") String description,
                                                        @RequestParam("quantity") Integer quantity,
                                                        @RequestParam("brandID") Integer brandID,
                                                        @RequestParam("categoryID") Integer categoryID,
                                                        @RequestParam("attribute") String[] attributes,
                                                        @RequestParam("image")MultipartFile[] images){
        Product product = new Product();
        Category category = categoryRepo.findById(categoryID).orElseGet(() -> {return null;});
        Brand brand = brandRepo.findById(brandID).orElseGet(() -> {return null;});
        product.setTitle(title);
        product.setDescription(description);
        product.setQuantity(quantity);
        product.setBrand(brand);
        product.setCategory(category);
        Arrays.asList(attributes).stream().forEach(s -> {
            String strAttr[] = s.split(":");
            Attribute attr = new Attribute(strAttr[0], strAttr[1]);
            product.getAttribute().add(attr);
        });
        try {
            Arrays.asList(images).stream().forEach(multipartFile -> {
                Image img = new Image(iStoreServices.storeImage(multipartFile));
                product.getImage().add(img);
            });
        }catch(Exception e){
            throw new RuntimeException("Coulnd't upload image: " + e.getMessage());
        }
        return new ResponseEntity<>(
                new ResponseObject("Add successfully",200,productRepo.save(product)), HttpStatus.OK
        );
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<ResponseObject> updateProduct(@RequestParam("title") String title,
                                                        @RequestParam("description") String description,
                                                        @RequestParam("quantity") Integer quantity,
                                                        @RequestParam("brandID") Integer brandID,
                                                        @RequestParam("categoryID") Integer categoryID,
                                                        @RequestParam("attribute") String[] attributes,
                                                        @RequestParam("image")MultipartFile[] images,
                                                        @PathVariable Integer id){
        Product product = productRepo.findById(id).orElseGet(() ->{ return null;});
        Category category = categoryRepo.findById(categoryID).orElseGet(() -> {return null;});
        Brand brand = brandRepo.findById(brandID).orElseGet(() -> {return null;});
        product.setTitle(title);
        product.setDescription(description);
        product.setQuantity(quantity);
        product.setBrand(brand);
        product.setCategory(category);
        product.setBrand(brand);
        product.setCategory(category);
        Arrays.asList(attributes).stream().forEach(s -> {
            product.getAttribute().clear();
            String strAttr[] = s.split(":");
            Attribute attr = new Attribute(strAttr[0], strAttr[1]);
            product.getAttribute().add(attr);
        });
        try {
            product.getImage().clear();
            Arrays.asList(images).stream().forEach(multipartFile -> {
                Image img = new Image(iStoreServices.storeImage(multipartFile));
                product.getImage().add(img);
            });
        }catch(Exception e){
            throw new RuntimeException("Coulnd't upload image: " + e.getMessage());
        }
        productRepo.save(product);
        return new ResponseEntity<>(
                new ResponseObject("Update successfully",200, product), HttpStatus.OK
        );
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<ResponseObject> deleteProduct(@PathVariable Integer id){
        boolean exists = productRepo.existsById(id);
        if(exists){
            productRepo.findById(id).get().getImage().stream().forEach(image -> {
                iStoreServices.deleteImage(image.getUrlImage());
            });
            productRepo.deleteById(id);
            return new ResponseEntity<>(
                    new ResponseObject("Delete successfully",200,null), HttpStatus.OK
            );
        }

        return new ResponseEntity<>(
                new ResponseObject("Not found product",400,""), HttpStatus.NOT_FOUND
        );
    }

    @GetMapping("/delete-all")
    public String delAll(){
        productRepo.deleteAll();
        return "success";
    }

    private String getCurrentURL(HttpServletRequest request)
    {
        return request.getRequestURL().toString();
    }
}
