package com.group4.project.api;

import com.group4.project.models.Brand;
import com.group4.project.models.Category;
import com.group4.project.models.ResponseObject;
import com.group4.project.repositories.brand.BrandRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/brand")
public class BrandController {
    @Autowired private BrandRepository brandRepository;

    @GetMapping("/get-all")
    public ResponseEntity<ResponseObject> getAllBrand(){
        return ResponseEntity.ok().body(
                new ResponseObject("successfully", 200, brandRepository.findAll())
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<ResponseObject> getBrand(@PathVariable Integer id){
        Brand brand = brandRepository.findById(id).orElseGet(() -> {return null;});
        return ResponseEntity.ok().body(
                new ResponseObject("Successfully", 200, brand)
        );
    }

    @PostMapping("/insert")
    public ResponseEntity<ResponseObject> insertBrand(@RequestBody Brand brand){
        if(brand != null){
            return ResponseEntity.ok().body(
                    new ResponseObject("Insert successfully", 200, brandRepository.save(brand))
            );
        }
        return ResponseEntity.badRequest().body(
                new ResponseObject("Brand null", 401, null)
        );
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<ResponseObject> updateBrand(@RequestBody Brand brand,
                                                      @PathVariable Integer id)
    {
        Brand foundBand = brandRepository.findById(id).orElseGet(() -> {return null;});
        if(foundBand != null && brand != null){
            foundBand.setBrandName(brand.getBrandName());
            foundBand.setUrlLogo(brand.getUrlLogo());
            brandRepository.save(foundBand);
            return ResponseEntity.ok().body(
                    new ResponseObject("Update successfully", 200, foundBand)
            );
        }

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                new ResponseObject("Not found brand", 404, null)
        );
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<ResponseObject> deleteBrand(@PathVariable Integer id){
        Brand brand = brandRepository.findById(id).orElseGet(() -> {return null;});
        if(brand != null){
            brandRepository.deleteById(id);
            return ResponseEntity.ok().body(
                    new ResponseObject("Delete successfully", 200, null)
            );
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                new ResponseObject("Not found brand", 404, null)
        );
    }

    @GetMapping("/delete-all")
    public String deleteAll(){
        brandRepository.deleteAll();
        return "deleted";
    }
}
