package com.group4.project.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name = "user_profile")
public class UserProfile extends Person{

    @Column
    private int birthYear;

    @OneToOne(mappedBy = "userProfile")
    @JsonIgnore
    private User user;

    public UserProfile() {
    }

    public UserProfile(String firstName, String lastName, String phoneNumber, String address, int birthYear, User user) {
        super(firstName, lastName, phoneNumber, address);
        this.birthYear = birthYear;
        this.user = user;
    }

    public int getBirthYear() {
        return birthYear;
    }

    public void setBirthYear(int birthYear) {
        this.birthYear = birthYear;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "UserProfile{" +
                "birthYear=" + birthYear +
                ", user=" + user +
                '}';
    }
}
