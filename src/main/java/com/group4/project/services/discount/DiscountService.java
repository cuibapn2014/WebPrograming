package com.group4.project.services.discount;

import com.group4.project.models.DiscountCode;

import java.util.List;

public interface DiscountService {
    public List<DiscountCode> findAllDiscount();
    public DiscountCode saveDiscount(DiscountCode discountCode);
    public DiscountCode findDiscountById(Integer id);
    public DiscountCode findByCode(String code);
    public DiscountCode updateCodeById(DiscountCode discountCode, Integer id);
    public void deleteCodeById(Integer id);
}
