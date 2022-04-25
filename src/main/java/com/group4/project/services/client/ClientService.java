package com.group4.project.services.client;

import com.group4.project.models.ClientEmail;

import java.util.List;

public interface ClientService {
    public ClientEmail saveClient(ClientEmail email);
    public List<ClientEmail> findAllClient();
    public ClientEmail findClienById(Integer id);
    public ClientEmail updateClientById(Integer id);
    public void deleteClientById(Integer id);
}
