package com.group4.project.api;

import com.group4.project.models.*;
import com.group4.project.repositories.attribute.AttributeRepository;
import com.group4.project.repositories.brand.BrandRepository;
import com.group4.project.repositories.category.CategoryRepository;
import com.group4.project.repositories.image.ImageRepository;
import com.group4.project.repositories.product.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.servlet.http.HttpServletRequest;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/product")
public class ProductController {

    @Autowired private ProductRepository productRepo;
    @Autowired private BrandRepository brandRepo;
    @Autowired private AttributeRepository attrRepo;
    @Autowired private ImageRepository imgRepo;
    @Autowired private CategoryRepository categoryRepo;

    @GetMapping("/get-all")
    public ResponseEntity<ResponseObjectPage> getAllProducts(@RequestParam(required = true,name = "page",defaultValue = "1") int page,
                                                         HttpServletRequest request) {
        page = page > 0 ? --page : 0;
        Pageable paging = PageRequest.of(page, 10);
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
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @GetMapping("/{id}")
    ResponseEntity<ResponseObject> findById(@PathVariable Integer id){
        Optional<Product> foundProduct = productRepo.findById(id);
        if(foundProduct.isPresent()){
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("success",200,foundProduct)
            );
        }else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObject("failed",500,foundProduct)
            );
        }
    }

    @PostMapping("/insert")
    public ResponseEntity<ResponseObject> insertProduct(@RequestBody Product newProduct){
        Category category = categoryRepo.findById(newProduct.getCategory().getId()).orElseGet(() -> {return null;});
        Brand brand = brandRepo.findById(newProduct.getBrand().getId()).orElseGet(() -> {return null;});
        newProduct.setSlug(newProduct.getTitle());
        newProduct.setCategory(category);
        newProduct.setBrand(brand);
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("Add successfully",200,productRepo.save(newProduct))
        );
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<ResponseObject> updateProduct(@RequestBody Product newProduct,
                                                        @PathVariable Integer id){
        Product product = productRepo.findById(id).orElseGet(() ->{ return null;});
        Category category = categoryRepo.findById(newProduct.getCategory().getId()).orElseGet(() ->{ return null;});
        Brand brand = brandRepo.findById(newProduct.getBrand().getId()).orElseGet(() ->{ return null;});
        product.setTitle(newProduct.getTitle());
        product.setPrice(newProduct.getPrice());
        product.setDiscount(newProduct.getDiscount());
        product.setDescription(newProduct.getDescription());
        product.setSlug(newProduct.getTitle());
        product.setQuantity(newProduct.getQuantity());
        product.setImage(newProduct.getImage());
        product.setAttribute(newProduct.getAttribute());
        product.setBrand(brand);
        product.setCategory(category);
        productRepo.save(product);
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("Update successfully",200, product)
        );
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<ResponseObject> deleteProduct(@PathVariable Integer id){
        boolean exists = productRepo.existsById(id);
        if(exists){
            productRepo.deleteById(id);
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("Delete successfully",200,null)
            );
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                new ResponseObject("Not found product",400,"")
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
