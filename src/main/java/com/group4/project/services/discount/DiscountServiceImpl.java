package com.group4.project.services.discount;

import com.group4.project.models.DiscountCode;
import com.group4.project.repositories.DiscountCodeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class DiscountServiceImpl implements DiscountService{
    @Autowired private DiscountCodeRepository repository;

    @Override
    public List<DiscountCode> findAllDiscount() {
        return repository.findAll();
    }

    @Override
    public DiscountCode saveDiscount(DiscountCode discountCode) {
        return repository.save(discountCode);
    }

    @Override
    public DiscountCode findDiscountById(Integer id) {
        return repository.findById(id).get();
    }

    @Override
    public DiscountCode findByCode(String code) {
        return repository.findByCode(code).get();
    }

    @Override
    public DiscountCode updateCodeById(DiscountCode discountCode, Integer id) {
        Optional<DiscountCode> foundCode = repository.findById(id);
        if(foundCode.isPresent()){
            repository.save(foundCode.get());
        }
        return null;
    }

    @Override
    public void deleteCodeById(Integer id) {
        repository.deleteById(id);
    }
}
