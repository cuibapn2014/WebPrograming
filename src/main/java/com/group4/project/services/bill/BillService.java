package com.group4.project.services.bill;

import com.group4.project.models.Bill;

import java.util.List;

public interface BillService {
    public Bill saveBill(Bill bill);
    public Bill findBillById(Integer id);
    public List<Bill> findAllBill();
    public Bill updateBillById(Bill bill, Integer id);
    public void deleteBillById(Integer id);
}
