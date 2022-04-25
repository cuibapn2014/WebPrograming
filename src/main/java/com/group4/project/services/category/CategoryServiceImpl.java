package com.group4.project.services.category;

import com.group4.project.models.Category;
import com.group4.project.repositories.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService{
    @Autowired private CategoryRepository repository;

    @Override
    public Category saveCategory(Category category) {
        if(category != null){
            return repository.save(category);
        }
        return null;
    }

    @Override
    public Category findCategoryById(Integer id) {
        return repository.findById(id).get();
    }

    @Override
    public List<Category> findAllCategory() {
        return repository.findAll();
    }

    @Override
    public Category updateCategoryById(Category category, Integer id) {
        Category foundCategory = repository.findById(id).orElseGet(() -> {return null;});
        if(category != null && foundCategory != null){
            foundCategory.setName(category.getName());
            return repository.save(foundCategory);
        }
        return null;
    }

    @Override
    public void deleteCategoryById(Integer id) {
        repository.deleteById(id);
    }
}
