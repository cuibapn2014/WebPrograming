package com.group4.project.repositories;

import com.group4.project.models.DiscountCode;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface DiscountCodeRepository extends JpaRepository<DiscountCode, Integer> {
    @Query(value = "SELECT * FROM discount_code WHERE code=?1", nativeQuery = true)
    public Optional<DiscountCode> findByCode(String code);
}
