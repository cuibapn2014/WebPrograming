package com.group4.project.models;

import javax.persistence.*;

import com.group4.project.helper.Encryption;

@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(unique = false,nullable = false)
    private String username;

    @Column(unique = false,nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column
    private String token;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "role_id", referencedColumnName = "id", nullable = false)
    private UserRole role;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "up_id", referencedColumnName = "id")
    private UserProfile userProfile;

    public User(){}

    public User(String username, String email, String password, String token, UserRole role, UserProfile userProfile) {
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

    public void setToken() {
        this.token = Encryption.generateToken(this);
    }

    public UserProfile getUserProfile() {
        return userProfile;
    }

    public void setUserProfile(UserProfile userProfile) {
        this.userProfile = userProfile;
    }

    public UserRole getRole() {
        return role;
    }

    public void setRole(UserRole role) {
        this.role = role;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", token='" + token + '\'' +
                ", role=" + role +
                ", userProfile=" + userProfile +
                '}';
    }
}
