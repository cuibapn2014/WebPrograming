package com.group4.project.api;

import com.group4.project.models.Category;
import com.group4.project.models.ResponseObject;
import com.group4.project.repositories.category.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/category")
public class CategoryController {
    @Autowired
    private CategoryRepository categoryRepository;

    @GetMapping("/get-all")
    public ResponseEntity<ResponseObject> getAllCategory(){
        return ResponseEntity.ok().body(
                new ResponseObject("Successfully", 200, categoryRepository.findAll())
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<ResponseObject> getCategory(@PathVariable Integer id){
        Category category = categoryRepository.findById(id).orElseGet(() -> {return null;});
        return ResponseEntity.ok().body(
                new ResponseObject("Successfully", 200, category)
        );
    }

    @PostMapping("/insert")
    public ResponseEntity<ResponseObject> insertCategory(@RequestBody Category category){
        if(category != null){
            return ResponseEntity.ok().body(
                    new ResponseObject("Insert successfully", 200, categoryRepository.save(category))
            );
        }
        return ResponseEntity.badRequest().body(
                new ResponseObject("Bad request", 401, null)
        );
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<ResponseObject> updateCategory(@RequestBody Category newCategory,
                                                         @PathVariable Integer id){
        Category foundCategory = categoryRepository.findById(id).orElseGet(() -> {return null;});
        if(newCategory != null && foundCategory != null){
            foundCategory.setName(newCategory.getName());
            categoryRepository.save(foundCategory);
            return ResponseEntity.ok().body(
                    new ResponseObject("Update successfully", 200, foundCategory)
            );
        }
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObject("Not found category", 404, foundCategory)
            );
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<ResponseObject> deleteCategory(@PathVariable Integer id){
        Category category = categoryRepository.findById(id).orElseGet(() -> {return null;});
        if(category != null){
            categoryRepository.deleteById(id);
            return ResponseEntity.ok().body(
                    new ResponseObject("Delete successfully", 200, null)
            );
        }

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                new ResponseObject("Not found category", 404, null)
        );
    }
}
