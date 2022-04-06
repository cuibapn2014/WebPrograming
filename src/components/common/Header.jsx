import React from "react";
import { BiBuildingHouse, BiRightArrowCircle } from "react-icons/bi";
import { FiHeadphones } from "react-icons/fi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsSearch, BsTags, BsBell } from "react-icons/bs";
import { RiAccountCircleLine, RiSecurePaymentFill } from "react-icons/ri";
import { AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai";
import { MdLocalShipping } from "react-icons/md";
import { GrHostMaintenance } from "react-icons/gr";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      {/* header1 */}
      <div className="bg-[#1435c3] flex items-center justify-end p-3 text-[#fff] text-sm px-10">
        <Link to="/contact">
          <div className="flex items-center ml-10">
            <BiBuildingHouse size={"18px"} className="mr-2" />
            Hệ thống Showroom
          </div>
        </Link>
        <div className="flex items-center ml-10">
          <FiHeadphones size={"18px"} className="mr-2" />
          Tư vấn mua hàng :{" "}
          <span className="text-[#ff0000] ml-1">1800 6867</span>
        </div>
        <div className="flex items-center ml-10">
          <FiHeadphones size={"18px"} className="mr-2" />
          Chăm sóc khách hàng :
          <span className="text-[#ff0000] ml-1">1800 6865</span>
        </div>
        <Link to="/cong-nghe">
          <div className="flex items-center ml-10">
            <HiOutlineDesktopComputer className="mr-2" />
            Tin công nghệ
          </div>
        </Link>
      </div>
      {/* header1 */}
      {/* header2 */}
      <div className="flex items-center px-10 justify-around w-full">
        <Link to="/">
          <div>
            <img
              width="200px"
              height="50px"
              src="https://haycafe.vn/wp-content/uploads/2021/12/mau-logo-ki-niem-10-nam-angry-birds-dep-la.png"
            />
          </div>
        </Link>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Nhập từ khóa cần tìm ..."
            className="bg-[#f5f5f5] min-w-[460px] py-[6px] px-3 outline-none rounded-l-lg  placeholder:text-[gray]"
          />
          <button className="px-3 py-[8px] bg-[#1435c3] text-[#fff] rounded-r-lg">
            <BsSearch size={"18px"} />
          </button>
        </div>
        <Link to="/khuyen-mai">
          <div className="icon--header">
            <BsTags size={"27px"} className="mb-2" />
            Khuyến mãi
          </div>
        </Link>
        <Link to="/sign-in">
          <div className="icon--header">
            <RiAccountCircleLine size={"27px"} className="mb-2" />
            Đăng nhập
          </div>
        </Link>
        <div className="icon--header">
          <BsBell size={"27px"} className="mb-2" />
          Thông báo
        </div>
        <Link to="/cart">
          <div className="icon--header">
            <AiOutlineShoppingCart size={"27px"} className="mb-2" />
            Giỏ hàng
          </div>
        </Link>
      </div>
      {/* header2 */}
      {/* header3 */}
      <div className="bg-[#f1f0f1]">
        <div className="container mx-auto flex items-center uppercase text-[12px]  py-3">
          <div className="flex items-center py-2 px-4 border border-[#333] rounded-md bg-[#505050] text-[#fff] mr-3">
            <AiOutlineMenu size={"18px"} className="mr-2" /> Danh mục sản phẩm
          </div>
          <Link to="/huong-dan-thanh-toan">
            <div className="flex items-center py-2 px-4 border border-[#333] rounded-md mr-3">
              <RiSecurePaymentFill size={"18px"} className="mr-2" /> Hướng dẫn
              thanh toán
            </div>
          </Link>
          <Link to="/huong-dan-tra-gop">
            <div className="flex items-center py-2 px-4 border border-[#333] rounded-md mr-3">
              <RiSecurePaymentFill size={"18px"} className="mr-2" /> Hướng dẫn
              trả góp
            </div>
          </Link>
          <Link to="/chinh-sach-bao-hanh">
            <div className="flex items-center py-2 px-4 border border-[#333] rounded-md mr-3">
              <GrHostMaintenance size={"18px"} className="mr-2" /> Chính sách
              bảo hành
            </div>
          </Link>
          <Link to="/chinh-sach-van-chuyen">
            <div className="flex items-center py-2 px-4 border border-[#333] rounded-md mr-3">
              <MdLocalShipping size={"18px"} className="mr-2" /> Chính sách vận
              chuyển
            </div>
          </Link>
          <div className="flex items-center py-2 px-4 border border-[#333] rounded-md mr-3 ">
            <BiRightArrowCircle size={"18px"} className="mr-2" /> Đổi trả trong
            15 ngày
          </div>
        </div>
      </div>
      {/* header3 */}
    </div>
  );
};

export default Header;