package com.group4.project.services.brand;

import com.group4.project.models.Brand;

import java.util.List;

public interface BrandService {
    public Brand saveBrand(Brand Brand);
    public Brand findBrandById(Integer id);
    public List<Brand> findAllBrand();
    public Brand updateBrandById(Brand Brand, Integer id);
    public void deleteBrandById(Integer id);
}
