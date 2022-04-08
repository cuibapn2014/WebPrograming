import React, { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ItemCart from "../common/ItemCart";
const Cart = () => {
  const listCart = useSelector((state) => state.cart);
  const [total, setTotal] = useState(0);
  // const [listCart, setListCart] = useState(listReducer || []);
  // console.log("check cart", listCart);
  // console.log(Array.isArray(listCart));

  // useEffect(() => {
  //   setListCart(listReducer);
  // }, [listReducer]);

  useEffect(() => {
    let total = listCart.reduce((sum, item) => sum + item.price * item.qty, 0);

    setTotal(total);
    // console.log("check total", total);
  }, [listCart]);

  const priceSplitter = (number) =>
    number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return (
    <div className="w-full bg-slate-50 py-5">
      <div className="flex items-center  mb-5 ml-5">
        <Link to="/">
          <div className="p-2 rounded-full border border-[#ddd]">
            <AiOutlineHome size={"24px"} className=" text-black" />
          </div>
        </Link>
        <span className="block mx-3"> &gt;</span>
        <div className="text-sm px-[6px] py-2 rounded-full border border-[#ddd]">
          Giỏ hàng
        </div>
      </div>
      <div className="container mx-auto bg-slate-50">
        {/* item cart */}
        <div className="flex justify-between">
          {/* block1 */}
          <div className="w-[65%] px-5 rounded-xl bg-white ">
            {listCart &&
              listCart.length > 0 &&
              listCart.map((item, index) => {
                return (
                  <ItemCart
                    key={item.id}
                    id={item.id}
                    img={item.img}
                    name={item.name}
                    price={item.price}
                    quantity={item.qty}
                  />
                );
              })}
            {/* <ItemCart />
            <ItemCart />
            <ItemCart /> */}
          </div>
          {/* block1 */}
          {/* block2 */}
          <div className="w-[33%] bg-white rounded-xl p-5 h-fit">
            <h5 className="text-xl font-medium text-[#333]">Thanh toán</h5>
            <div className="flex justify-between items-center mt-2">
              <div className="text-sm text-[#848788]">Tạm tính</div>
              <div className="text-sm font-semibold">
                {priceSplitter(total)} đ
              </div>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="text-sm text-[#848788]">Thành tiền</div>
              <div className="text-lg text-[#eb2101] font-semibold relative">
                {priceSplitter(total)} đ
                <div className="absolute top-[100%] text-[#848788] font-normal text-xs">
                  (Đã bao gồm VAT)
                </div>
              </div>
            </div>
            <div className="uppercase text-base bg-[#1435c3] py-2 text-white rounded-md text-center mt-10 cursor-pointer">
              thanh toán
            </div>
          </div>
          {/* block2 */}
        </div>
        {/* item cart */}
      </div>
    </div>
  );
};

export default Cart;
