package com.group4.project.models;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "discount_code")
public class DiscountCode {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(unique = true, nullable = false, length = 10)
    private String code;

    @Column
    private float value;

    @JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss",timezone = "GMT+07:00")
    @Column
    private Date expired;

    @Column
    private int timeuses;

    @Column
    private float minTotal;

    @Column
    private boolean typeCost;//false => theo số tiền | true => theo phần trăm

    public DiscountCode() {
    }

    public DiscountCode(String code, float value, Date expired, int timeuses, float minTotal, boolean typeCost) {
        this.code = code;
        this.value = value;
        this.expired = expired;
        this.timeuses = timeuses;
        this.minTotal = minTotal;
        this.typeCost = typeCost;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public float getValue() {
        return value;
    }

    public void setValue(float value) {
        this.value = value;
    }

    public Date getExpired() {
        return expired;
    }

    public void setExpired(Date expired) {
        this.expired = expired;
    }

    public int getTimeuses() {
        return timeuses;
    }

    public void setTimeuses(int timeuses) {
        this.timeuses = timeuses;
    }

    public float getMinTotal() {
        return minTotal;
    }

    public void setMinTotal(float minTotal) {
        this.minTotal = minTotal;
    }

    public boolean isTypeCost() {
        return typeCost;
    }

    public void setTypeCost(boolean typeCost) {
        this.typeCost = typeCost;
    }

    @Override
    public String toString() {
        return "DiscountCode{" +
                "id=" + id +
                ", code='" + code + '\'' +
                ", value=" + value +
                ", expired=" + expired +
                ", timeuses=" + timeuses +
                ", minTotal=" + minTotal +
                ", typeCost=" + typeCost +
                '}';
    }
}
