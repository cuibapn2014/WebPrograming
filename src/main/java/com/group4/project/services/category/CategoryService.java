package com.group4.project.services.category;

import com.group4.project.models.Category;

import java.util.List;

public interface CategoryService {
    public Category saveCategory(Category category);
    public Category findCategoryById(Integer id);
    public List<Category> findAllCategory();
    public Category updateCategoryById(Category category, Integer id);
    public void deleteCategoryById(Integer id);
}
