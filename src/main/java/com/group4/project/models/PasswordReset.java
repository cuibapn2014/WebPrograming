package com.group4.project.models;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "tbl_password_reset")
public class PasswordReset {

    @Id
    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String code;

    @JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss",timezone = "GMT+07:00")
    private Date created_at;

    public PasswordReset() {
    }

    public PasswordReset(String email, String code, Date created_at) {
        this.email = email;
        this.code = code;
        this.created_at = created_at;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public Date getCreated_at() {
        return created_at;
    }

    public void setCreated_at(Date created_at) {
        this.created_at = created_at;
    }

    @Override
    public String toString() {
        return "PasswordReset{" +
                "email='" + email + '\'' +
                ", code='" + code + '\'' +
                ", created_at=" + created_at +
                '}';
    }
}
