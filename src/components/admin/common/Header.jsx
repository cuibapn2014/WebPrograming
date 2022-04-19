import React from "react";

const Header = () => {
  return (
    <>
      <aside className="fixed w-48 top-0 left-0 bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
        <div className="p-6">
          <a
            href="admin.html"
            className="text-center text-white text-3xl font-semibold uppercase hover:text-gray-300"
          >
            Trang Quản Lí
          </a>
        </div>
        <nav className="text-white text-base font-semibold pt-3">
          <a
            href="admin.html"
            className="flex items-center active-nav-link text-white py-4 pl-6 nav-item"
          >
            <i className="fas fa-table mr-3"></i>
            QL Sản Phẩm
          </a>
          <a
            href="qlnhanvien.html"
            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
          >
            <i className="fas fa-sticky-note mr-3"></i>
            QL Nhân Viên
          </a>
          <a
            href="qlkhachhang.html"
            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
          >
            <i className="fas fa-tachometer-alt mr-3"></i>
            QL Khách Hàng
          </a>
          <a
            href="qldanhmucsanpham.html"
            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
          >
            <i className="fas fa-align-left mr-3"></i>
            QL Danh Mục
          </a>
          <a
            href="qlthuonghieu.html"
            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
          >
            <i className="fas fa-tablet-alt mr-3"></i>
            QL Thương Hiệu
          </a>
          <a
            href="qlhoadon.html"
            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
          >
            <i className="fas fa-sticky-note mr-3"></i>
            QL Hóa Đơn
          </a>
          <a
            href="quangcao.html"
            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
          >
            <ion-icon className="mr-3" name="planet-outline"></ion-icon>
            Quảng Cáo
          </a>
        </nav>
      </aside>
    </>
  );
};

export default Header;
