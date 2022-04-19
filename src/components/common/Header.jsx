import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import logo from "../../assets/logo.png";
import logo1 from "../../assets/G4PC.png";
import logo2 from "../../assets/g4.png";

import {
  BiBuildingHouse,
  BiRightArrowCircle,
  BiLogInCircle,
} from "react-icons/bi";
import { FiHeadphones } from "react-icons/fi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsSearch, BsTags, BsBell } from "react-icons/bs";
import { RiAccountCircleLine, RiSecurePaymentFill } from "react-icons/ri";
import { AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai";
import { MdLocalShipping } from "react-icons/md";
import { GrHostMaintenance } from "react-icons/gr";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import { useDispatch, useSelector } from "react-redux";
import { toogleIsMenu, isFalseMenu, isTrueMenu } from "../../redux/actions";

const Header = () => {
  const stateMenu = useSelector((state) => state.stateMenu.isMenu);
  const qtyCart = useSelector((state) => state.cart);
  const render = useSelector((state) => state.token.reRenderUser);
  const [showUser, setShowUser] = useState(false);
  const [getUser, setGetUser] = useState(1);
  // console.log("check show", showUser);
  // console.log("qtyCart", qtyCart);
  const dispatch = useDispatch();
  // console.log("Header", stateMenu);
  // const [isMenuPc, setIsMenuPc] = useState(stateMenu);
  const informationUser = JSON.parse(sessionStorage.getItem("informationUser"));
  const lastName = informationUser
    ? informationUser.data.userProfile.lastName
    : "";
  console.log("check lastname", lastName);
  // console.log("information User", informationUser);

  useEffect(() => {
    setGetUser(render + 1);
  }, [render]);

  const handleOntop = (e) => {
    window.scrollTo({
      top: 242,
      left: 0,
      behavior: "smooth",
    });
    dispatch(isFalseMenu());
  };

  const removeItemSesstion = () => {
    sessionStorage.removeItem("informationUser");
    Cookies.remove("token");
    setShowUser(false);
  };
  return (
    <div>
      {/* header1 */}
      <div className="bg-[#1435c3] flex items-center justify-end p-3 text-[#fff] text-sm px-10">
        <Link to="/contact">
          <div
            className="flex items-center ml-10"
            onClick={() => dispatch(isFalseMenu())}
          >
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
      <div className="flex items-center px-10 justify-around w-full my-4">
        <Link to="/">
          <div onClick={() => dispatch(isTrueMenu())}>
            <img
              width="200px"
              height="50px"
              // src="https://haycafe.vn/wp-content/uploads/2021/12/mau-logo-ki-niem-10-nam-angry-birds-dep-la.png"
              src={logo2}
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
        {/* {informationUser ? (
          <div className="w-[50px] h-[50px] flex items-center justify-center bg-[orange] text-white text-medium rounded-full text-lg">
            {lastName.charAt(0).toUpperCase()}
          </div>
        ) : (
          <Link to="/sign-in" onClick={handleOntop}>
            <div className="icon--header">
              <RiAccountCircleLine size={"27px"} className="mb-2" />
              Đăng nhập
            </div>
          </Link>
        )} */}

        <div className="icon--header">
          <BsBell size={"27px"} className="mb-2" />
          Thông báo
        </div>
        <Link to="/cart" onClick={handleOntop}>
          <div className="icon--header relative">
            <AiOutlineShoppingCart size={"27px"} className="mb-2" />
            Giỏ hàng
            <div className="absolute top-[-16px] right-0 px-2 py-[2px] rounded-full bg-[#ff0000] text-white text-[11px]">
              {qtyCart.length}
            </div>
          </div>
        </Link>
        {informationUser ? (
          <div className="relative">
            <div
              className="w-[40px] h-[40px] flex items-center justify-center bg-[orange] text-white text-medium rounded-full text-lg cursor-pointer hover:opacity-90 "
              onClick={() => setShowUser(!showUser)}
            >
              {lastName.charAt(0).toUpperCase()}
            </div>

            <div
              className={`${
                showUser ? "clip-path-top100" : "clip-path-top0"
              } absolute -bottom-11 right-0 rounded-md bg-slate-50 shadow-lg w-[200px] px-3 py-1 text-black`}
            >
              <div className="flex justify-between items-center hover:opacity-80">
                <span className="cursor-pointer" onClick={removeItemSesstion}>
                  Đăng xuất
                </span>
                <BiLogInCircle />
              </div>
            </div>
          </div>
        ) : (
          <Link to="/sign-in" onClick={handleOntop}>
            <div className="icon--header">
              <RiAccountCircleLine size={"27px"} className="mb-2" />
              Đăng nhập
            </div>
          </Link>
        )}
      </div>
      {/* header2 */}
      {/* header3 */}
      <div className="bg-[#f1f0f1]">
        <div className="container mx-auto flex items-center uppercase text-[12px]  py-3">
          <div
            className="relative cursor-pointer"
            onClick={() => dispatch(toogleIsMenu())}
          >
            <div className="flex items-center py-2 px-4 border border-[#333] rounded-md bg-[#505050] text-[#fff] mr-3">
              <AiOutlineMenu size={"18px"} className="mr-2" />{" "}
              <span>Danh mục sản phẩm</span>
            </div>
            <div
              className={`absolute top-14  z-10 transition-all  ${
                stateMenu ? "left-0" : "left-[-150%]"
              }`}
            >
              <Menu />
            </div>
          </div>
          <Link to="/huong-dan-thanh-toan">
            <div
              className="flex items-center py-2 px-4 border border-[#333] rounded-md mr-3"
              onClick={() => dispatch(isFalseMenu())}
            >
              <RiSecurePaymentFill size={"18px"} className="mr-2" /> Hướng dẫn
              thanh toán
            </div>
          </Link>
          <Link to="/huong-dan-tra-gop">
            <div
              className="flex items-center py-2 px-4 border border-[#333] rounded-md mr-3"
              onClick={() => dispatch(isFalseMenu())}
            >
              <RiSecurePaymentFill size={"18px"} className="mr-2" /> Hướng dẫn
              trả góp
            </div>
          </Link>
          <Link to="/chinh-sach-bao-hanh">
            <div
              className="flex items-center py-2 px-4 border border-[#333] rounded-md mr-3"
              onClick={() => dispatch(isFalseMenu())}
            >
              <GrHostMaintenance size={"18px"} className="mr-2" /> Chính sách
              bảo hành
            </div>
          </Link>
          <Link to="/chinh-sach-van-chuyen">
            <div
              className="flex items-center py-2 px-4 border border-[#333] rounded-md mr-3"
              onClick={() => dispatch(isFalseMenu())}
            >
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

// const des = [
//   {
//     img: "https://placehold",
//     descrition:
//       "Laptop ACER Nitro 5 AN515-56-51N4 (NH.QBZSV.002) là sản phẩm máy tính xách tay được hướng tới người làm đồ họa hoặc chơi game. Thuộc phân khúc cao cấp, chiếc máy tính này có thiết kế hiện đại, sang trọng cùng cấu hình mạnh mẽ thỏa mãn được nhu cầu của người dùng.",
//   },
//   {
//     img: "https://placehold",
//     descrition:
//       "Laptop ACER Nitro 5 AN515-56-51N4 (NH.QBZSV.002) là sản phẩm máy tính xách tay được hướng tới người làm đồ họa hoặc chơi game. Thuộc phân khúc cao cấp, chiếc máy tính này có thiết kế hiện đại, sang trọng cùng cấu hình mạnh mẽ thỏa mãn được nhu cầu của người dùng.",
//   },
//   {
//     img: "https://placehold",
//     descrition:
//       "Laptop ACER Nitro 5 AN515-56-51N4 (NH.QBZSV.002) là sản phẩm máy tính xách tay được hướng tới người làm đồ họa hoặc chơi game. Thuộc phân khúc cao cấp, chiếc máy tính này có thiết kế hiện đại, sang trọng cùng cấu hình mạnh mẽ thỏa mãn được nhu cầu của người dùng.",
//   },
// ];
