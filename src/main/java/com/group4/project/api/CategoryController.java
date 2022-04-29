package com.group4.project.api;

import com.group4.project.models.Category;
import com.group4.project.models.ResponseObject;
import com.group4.project.services.category.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/category")
public class CategoryController {
    @Autowired
    private CategoryService service;

    @GetMapping("/get-all")
    public ResponseEntity<ResponseObject> getAllCategory(){
        return ResponseEntity.ok().body(
                new ResponseObject("Successfully", 200, service.findAllCategory())
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<ResponseObject> getCategory(@PathVariable Integer id){
        Category category = service.findCategoryById(id);
        if(category != null) {
            return ResponseEntity.ok().body(
                    new ResponseObject("Successfully", 200, category)
            );
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                new ResponseObject("Successfully", 404, null)
        );
    }

    @PostMapping("/insert")
    public ResponseEntity<ResponseObject> insertCategory(@RequestBody Category category){
        if(category != null){
            return ResponseEntity.ok().body(
                    new ResponseObject("Insert successfully", 200, service.saveCategory(category))
            );
        }
        return ResponseEntity.badRequest().body(
                new ResponseObject("Bad request", 401, null)
        );
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<ResponseObject> updateCategory(@RequestBody Category newCategory,
                                                         @PathVariable Integer id){
        Category foundCategory = service.findCategoryById(id);
        if(newCategory != null && foundCategory != null){
            foundCategory.setName(newCategory.getName());
            return ResponseEntity.ok().body(
                    new ResponseObject("Update successfully", 200, service.saveCategory(foundCategory))
            );
        }

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                new ResponseObject("Not found category", 404, null)
        );
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<ResponseObject> deleteCategory(@PathVariable Integer id){
        Category category = service.findCategoryById(id);
        if(category != null){
            service.deleteCategoryById(id);
            return ResponseEntity.ok().body(
                    new ResponseObject("Delete successfully", 200, null)
            );
        }

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                new ResponseObject("Not found category", 404, null)
        );
    }
}
