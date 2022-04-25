package com.group4.project.services.client;

import com.group4.project.helper.Validate;
import com.group4.project.models.ClientEmail;
import com.group4.project.repositories.ClientEmailRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ClientServiceImpl implements ClientService{
    @Autowired private ClientEmailRepository repository;

    @Override
    public ClientEmail saveClient(ClientEmail email) {
        if(Validate.validEmail(email.getEmail())) {
             return repository.save(email);
        }
        return null;
    }

    @Override
    public List<ClientEmail> findAllClient() {
        return repository.findAll();
    }

    @Override
    public ClientEmail findClienById(Integer id) {
        return repository.findById(id).get();
    }

    @Override
    public ClientEmail updateClientById(Integer id) {
        return null;
    }

    @Override
    public void deleteClientById(Integer id) {
        repository.deleteById(id);
    }
}
