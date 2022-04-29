package com.group4.project.api;

import com.group4.project.models.Brand;
import com.group4.project.models.ResponseCode;
import com.group4.project.models.ResponseObject;
import com.group4.project.services.brand.BrandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/brand")
public class BrandController {
    @Autowired private BrandService service;

    @GetMapping("/get-all")
    public ResponseEntity<ResponseObject> getAllBrand(){
        return ResponseEntity.ok().body(
                new ResponseObject("successfully", 200, service.findAllBrand())
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<ResponseObject> getBrand(@PathVariable Integer id){
        Brand brand = service.findBrandById(id);
        if(brand != null) {
            return ResponseEntity.ok().body(
                    new ResponseObject("Successfully", 200, brand)
            );
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                new ResponseObject("Not found", 404, null)
        );
    }

    @PostMapping("/insert")
    public ResponseEntity<ResponseObject> insertBrand(@RequestBody Brand brand){
        if(brand != null){
            return ResponseEntity.ok().body(
                    new ResponseObject("Insert successfully", 200, service.saveBrand(brand))
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
        Brand foundBand = service.updateBrandById(brand, id);
        if(foundBand != null && brand != null){
            return ResponseEntity.ok().body(
                    new ResponseObject("Update successfully", 200, foundBand)
            );
        }

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
                new ResponseObject("Not found brand", ResponseCode.HTTP_BAD_REQUEST, null)
        );
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<ResponseObject> deleteBrand(@PathVariable Integer id){
        Brand brand = service.findBrandById(id);
        if(brand != null){
            service.deleteBrandById(id);
            return ResponseEntity.ok().body(
                    new ResponseObject("Delete successfully", 200, null)
            );
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                new ResponseObject("Not found brand", 404, null)
        );
    }
}
