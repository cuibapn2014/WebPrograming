import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
const HeaderMobile = () => {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <>
      <div className="container mx-auto">
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
        className={`fixed top-0 w-[80%] h-[100vh] bg-slate-400 ${
          isMenu ? "clip-path-left100" : "clip-path-left0"
        } `}
      >
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
