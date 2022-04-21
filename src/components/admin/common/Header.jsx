import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? "#fff" : "",
    backgroundColor: isActive ? "#0d6efd" : "",
  });
  return (
    <>
      <div className="fixed top-0 left-0 bg-sidebar h-screen  shadow-xl bg-[#1435c3]">
        <div className="p-6">
          <NavLink
            to="/admin"
            className="text-center text-white text-2xl font-medium uppercase hover:text-gray-300"
          >
            Trang Quản Lí
          </NavLink>
        </div>
        <nav className="text-white text-base font-normal pt-3">
          <NavLink
            to="/admin/product"
            className={` flex items-center  text-white py-4 pl-6 nav-item transition-all`}
            style={navLinkStyle}
          >
            <i className="fas fa-table mr-3"></i>
            QL Sản Phẩm
          </NavLink>
          <NavLink
            to="/admin/staff"
            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item transition-all"
            style={navLinkStyle}
          >
            <i className="fas fa-sticky-note mr-3"></i>
            QL Nhân Viên
          </NavLink>
          <NavLink
            to="/admin/customer"
            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item transition-all"
            style={navLinkStyle}
          >
            <i className="fas fa-tachometer-alt mr-3"></i>
            QL Khách Hàng
          </NavLink>
          <NavLink
            to="/admin/category"
            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item transition-all"
            style={navLinkStyle}
          >
            <i className="fas fa-align-left mr-3"></i>
            QL Danh Mục
          </NavLink>
          <NavLink
            to="/admin/brand"
            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item transition-all"
            style={navLinkStyle}
          >
            <i className="fas fa-tablet-alt mr-3"></i>
            QL Thương Hiệu
          </NavLink>
          <NavLink
            to="/admin/bill"
            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item transition-all"
            style={navLinkStyle}
          >
            <i className="fas fa-sticky-note mr-3"></i>
            QL Hóa Đơn
          </NavLink>
          <NavLink
            to="/admin/advertisement"
            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item transition-all"
            style={navLinkStyle}
          >
            <ion-icon className="mr-3" name="planet-outline"></ion-icon>
            Quảng Cáo
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Header;
