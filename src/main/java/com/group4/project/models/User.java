package com.group4.project.models;

import javax.persistence.*;

@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;

    @Column(unique = false,nullable = false)
    private String username;

    @Column(unique = false,nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;
    private String token;
    private int role;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "up_id", referencedColumnName = "id")
    private UserProfile userProfile;

    public User(){}

    public User(String name, String username, String email, String password, String token, int role, UserProfile userProfile) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.token = token;
        this.role = role;
        this.userProfile = userProfile;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public int getRole() {
        return role;
    }

    public void setRole(int role) {
        this.role = role;
    }

    public UserProfile getUserProfile() {
        return userProfile;
    }

    public void setUserProfile(UserProfile userProfile) {
        this.userProfile = userProfile;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", token='" + token + '\'' +
                ", role=" + role +
                ", userProfile=" + userProfile +
                '}';
    }
}
