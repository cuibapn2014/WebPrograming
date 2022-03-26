import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineShoppingCart,
  AiOutlineWindows,
} from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { GrClose, GrHostMaintenance } from "react-icons/gr";
import { RiAccountCircleLine, RiSecurePaymentFill } from "react-icons/ri";
import { MdLocalShipping } from "react-icons/md";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import { list } from "../common/Menu";
const HeaderMobile = () => {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <>
      <div className="container mx-auto ">
        <div className="my-2 flex justify-between items-center">
          <div className="cursor-pointer" onClick={() => setIsMenu(!isMenu)}>
            <AiOutlineMenu />
          </div>
          <Link to="/">
            <div>
              {" "}
              <img
                width="200px"
                height="50px"
                src="https://phongvu.vn/phongvu/logo-full.svg"
              />
            </div>
          </Link>
          <Link to="/cart">
            <div className="icon--header">
              <AiOutlineShoppingCart size={"27px"} className="mb-2" />
            </div>
          </Link>
        </div>

        <div className="flex items-center">
          <input
            type="text"
            placeholder="Nhập từ khóa cần tìm ..."
            className="bg-[#f5f5f5] w-full py-[6px] px-3 outline-none rounded-l-lg  placeholder:text-[gray]"
          />
          <button className="px-3 py-[8px] bg-[#1435c3] text-[#fff] rounded-r-lg">
            <BsSearch size={"18px"} />
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 z-50 w-[80%] h-[100vh] bg-white overflow-y-scroll ${
          isMenu ? "clip-path-left100" : "clip-path-left0"
        } `}
      >
        <div className="px-4 py-6">
          <div>
            <Link to="/sign-in">
              <div className="flex items-center justify-center mt-4">
                <RiAccountCircleLine size={"27px"} className="mr-2" />
                Đăng nhập
              </div>
            </Link>
            <div className="flex flex-col justify-start">
              <div className="capitalize flex items-center">
                <AiOutlineWindows size={"25px"} className="mr-3 mb-3" />
                danh mục sản phẩm
              </div>
              <div>
                <Menu className="text-left" />
              </div>
            </div>
            <div>
              <Link to="/huong-dan-thanh-toan">
                <div className="flex items-center py-2">
                  <RiSecurePaymentFill size={"18px"} className="mr-2" /> Hướng
                  dẫn thanh toán
                </div>
              </Link>
            </div>
            <div>
              <Link to="/huong-dan-tra-gop">
                <div className="flex items-center py-2">
                  <RiSecurePaymentFill size={"18px"} className="mr-2" /> Hướng
                  dẫn trả góp
                </div>
              </Link>
            </div>
            <div>
              <Link to="/chinh-sach-bao-hanh">
                <div className="flex items-center py-2">
                  <GrHostMaintenance size={"18px"} className="mr-2" />
                  Chính sách bảo hành
                </div>
              </Link>
            </div>
            <div>
              <Link to="/chinh-sach-van-chuyen">
                <div className="flex items-center py-2">
                  <MdLocalShipping size={"18px"} className="mr-2" />
                  Chính sách vận chuyển
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="absolute top-3 right-3 cursor-pointer"
          onClick={() => setIsMenu(!isMenu)}
        >
          <GrClose />
        </div>
      </div>
    </>
  );
};

export default HeaderMobile;
