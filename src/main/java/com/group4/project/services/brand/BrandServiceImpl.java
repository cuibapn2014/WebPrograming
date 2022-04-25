package com.group4.project.services.brand;

import com.group4.project.models.Brand;
import com.group4.project.repositories.BrandRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BrandServiceImpl implements BrandService{
    @Autowired private BrandRepository repository;

    @Override
    public Brand saveBrand(Brand brand) {
        if(brand != null){
           repository.save(brand);
        }
        return null;
    }

    @Override
    public Brand findBrandById(Integer id) {
        return repository.findById(id).get();
    }

    @Override
    public List<Brand> findAllBrand() {
        return repository.findAll();
    }

    @Override
    public Brand updateBrandById(Brand brand, Integer id) {
        Brand foundBand = repository.findById(id).orElseGet(() -> {return null;});
        if(foundBand != null && brand != null){
            foundBand.setBrandName(brand.getBrandName());
            foundBand.setUrlLogo(brand.getUrlLogo());
            return repository.save(foundBand);
        }
        return null;
    }

    @Override
    public void deleteBrandById(Integer id) {
        repository.deleteById(id);
    }
}
