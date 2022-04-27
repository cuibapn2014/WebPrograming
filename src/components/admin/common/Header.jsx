import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FcHome } from "react-icons/fc";
const Header = () => {
  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? "#fff" : "",
    backgroundColor: isActive ? "#0d6efd" : "",
  });
  return (
    <>
      <div className="fixed top-0 left-0 w-[20%] h-screen  shadow-xl bg-[#1435c3]">
        <div className="px-2 py-6 flex items-center">
          <Link to="/">
            <FcHome size="25px" className="hover:opacity-60" />
          </Link>
          <NavLink
            to="/admin"
            className="text-center text-white text-xl ml-2 font-medium uppercase hover:text-gray-300"
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
            Sản Phẩm
          </NavLink>
          <NavLink
            to="/admin/staff"
            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item transition-all"
            style={navLinkStyle}
          >
            <i className="fas fa-sticky-note mr-3"></i>
            Nhân Viên
          </NavLink>
          <NavLink
            to="/admin/customer"
            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item transition-all"
            style={navLinkStyle}
          >
            <i className="fas fa-tachometer-alt mr-3"></i>
            Khách Hàng
          </NavLink>
          <NavLink
            to="/admin/category"
            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item transition-all"
            style={navLinkStyle}
          >
            <i className="fas fa-align-left mr-3"></i>
            Danh Mục
          </NavLink>
          <NavLink
            to="/admin/brand"
            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item transition-all"
            style={navLinkStyle}
          >
            <i className="fas fa-tablet-alt mr-3"></i>
            Thương Hiệu
          </NavLink>
          <NavLink
            to="/admin/bill"
            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item transition-all"
            style={navLinkStyle}
          >
            <i className="fas fa-sticky-note mr-3"></i>
            Hóa Đơn
          </NavLink>
          <NavLink
            to="/admin/voucher"
            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item transition-all"
            style={navLinkStyle}
          >
            <i className="fas fa-sticky-note mr-3"></i>
            Voucher
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
