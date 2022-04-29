package com.group4.project.services.attribute;

import com.group4.project.models.Attribute;

import java.util.List;

public interface AttributeService {
    public Attribute saveAttribute(Attribute Attribute);
    public Attribute findAttributeById(Integer id);
    public List<Attribute> findAllAttribute();
    public Attribute updateAttributeById(Attribute Attribute, Integer id);
    public void deleteAttributeById(Integer id);
}
