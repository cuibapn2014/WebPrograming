package com.group4.project.models;

import javax.persistence.*;

@Entity
@Table(name = "client_email")
public class ClientEmail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(unique = false)
    private String email;

    public ClientEmail() {
    }

    public ClientEmail(String email) {
        this.email = email;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "ClientEmail{" +
                "id=" + id +
                ", email='" + email + '\'' +
                '}';
    }
}
