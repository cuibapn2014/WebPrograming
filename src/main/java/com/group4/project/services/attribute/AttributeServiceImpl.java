package com.group4.project.services.attribute;

import com.group4.project.models.Attribute;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AttributeServiceImpl implements AttributeService{
    @Override
    public Attribute saveAttribute(Attribute Attribute) {
        return null;
    }

    @Override
    public Attribute findAttributeById(Integer id) {
        return null;
    }

    @Override
    public List<Attribute> findAllAttribute() {
        return null;
    }

    @Override
    public Attribute updateAttributeById(Attribute Attribute, Integer id) {
        return null;
    }

    @Override
    public void deleteAttributeById(Integer id) {

    }
}
