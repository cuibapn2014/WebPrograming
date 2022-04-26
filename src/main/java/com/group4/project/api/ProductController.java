package com.group4.project.api;

import com.group4.project.models.*;
import com.group4.project.services.product.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api/v1/product")
public class ProductController {

    @Autowired private ProductService service;

    @GetMapping("/get-all")
    public ResponseEntity<ResponseObjectPage> getAllProducts(@RequestParam(required = true, value = "page",defaultValue = "1") int page,
                                                         HttpServletRequest request) {
        page = page > 0 ? page : 0;
        Pageable paging = PageRequest.of(page - 1 , 10);
        Page<Product> getAllProduct = service.findAllPage(paging);
        ResponseObjectPage response = new ResponseObjectPage();
        int totalPage = (int) Math.ceil(response.getTotal() / 10);
        boolean pageInvalid = page > 1 && page < totalPage ? true : false;
        String prevURL = pageInvalid ? getCurrentURL(request).concat("?page=" + (page - 1)) : null;
        String nextUrl = pageInvalid ? getCurrentURL(request).concat("?page=" + (page + 1)) : null;
        response.setMessage("Successfully");
        response.setStatus(200);
        response.setData(getAllProduct.toList());
        response.setTotal(service.findAllProduct().size());
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
        Product foundProduct = service.findProductById(id);
        if(foundProduct != null){
            return new ResponseEntity<>(
                    new ResponseObject("success",200,foundProduct), HttpStatus.OK
            );
        }else {
            return new ResponseEntity<>(
                    new ResponseObject("Not found",404, null), HttpStatus.NOT_FOUND
            );
        }
    }

    @PostMapping("/insert")
    public ResponseEntity<ResponseObject> insertProduct(@RequestParam("title") String title,
                                                        @RequestParam("description") String description,
                                                        @RequestParam("price") float price,
                                                        @RequestParam("discount") float discount,
                                                        @RequestParam("quantity") Integer quantity,
                                                        @RequestParam("brandID") Integer brandID,
                                                        @RequestParam("categoryID") Integer categoryID,
                                                        @RequestParam("attribute") String[] attributes,
                                                        @RequestParam("image")MultipartFile[] images){
        Product product = service.saveProduct(title, description, price,
                discount, quantity, brandID, categoryID, attributes, images);
        if(product != null){
            return new ResponseEntity<>(
                    new ResponseObject("Add successfully",200, product), HttpStatus.OK
            );
        }

        return new ResponseEntity<>(
                new ResponseObject("Bad request",ResponseCode.HTTP_BAD_REQUEST, null), HttpStatus.BAD_REQUEST
        );
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<ResponseObject> updateProduct(@RequestParam("title") String title,
                                                        @RequestParam("description") String description,
                                                        @RequestParam("price") float price,
                                                        @RequestParam("discount") float discount,
                                                        @RequestParam("quantity") Integer quantity,
                                                        @RequestParam("brandID") Integer brandID,
                                                        @RequestParam("categoryID") Integer categoryID,
                                                        @RequestParam("attribute") String[] attributes,
                                                        @RequestParam(value = "image", required = false)MultipartFile[] images,
                                                        @PathVariable Integer id){
        Product product = service.updateProduct(title, description, price,
                discount, quantity, brandID, categoryID, attributes, images, id);
        if(product != null) {
            return new ResponseEntity<>(
                    new ResponseObject("Update successfully", 200, product), HttpStatus.OK
            );
        }

        return new ResponseEntity<>(
                new ResponseObject("Bad request", ResponseCode.HTTP_BAD_REQUEST, null), HttpStatus.BAD_REQUEST
        );
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<ResponseObject> deleteProduct(@PathVariable Integer id){
        boolean exists = service.findProductById(id) != null ? true : false;
		
        if(exists){
            service.deleteProductById(id);
            return new ResponseEntity<>(
                    new ResponseObject("Delete successfully",200,null), HttpStatus.OK
            );
        }

        return new ResponseEntity<>(
                new ResponseObject("Not found product",400,""), HttpStatus.NOT_FOUND
        );
    }

    private String getCurrentURL(HttpServletRequest request)
    {
        return request.getRequestURL().toString();
    }
}
