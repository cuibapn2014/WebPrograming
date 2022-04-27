import React, { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ItemCart from "../common/ItemCart";
import { addCodeVoucher, addTotalCart, isTrueMenu } from "../../redux/actions";
import { motion } from "framer-motion";
import Helmet from "../common/Helmet";
import { toast } from "react-toastify";
import axios from "axios";
const Cart = () => {
  const listCart = useSelector((state) => state.cart);
  const token = useSelector((state) => state.token.tokenDefault);
  const [total, setTotal] = useState(0);
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [voucher, setVoucher] = useState("");
  const [blockAddVoucher, setBlockAddVoucher] = useState(true);
  const [codeVoucher, setCodeVoucher] = useState("");
  const [totalBefore, setTotalBefore] = useState(0);
  const [refTotal, setRefTotal] = useState(0);
  // const [listCart, setListCart] = useState(listReducer || []);
  // console.log("check cart", listCart);
  // console.log(Array.isArray(listCart));

  // useEffect(() => {
  //   setListCart(listReducer);
  // }, [listReducer]);

  useEffect(() => {
    let total = listCart.reduce((sum, item) => sum + item.price * item.qty, 0);

    setTotal(total);
    setTotalBefore(total);
    dispatch(addTotalCart(total));
    // console.log("check total", total);
  }, [listCart]);

  const cloneTotal = total;

  const handleChangeVoucher = (e) => {
    setVoucher(e.target.value);
    dispatch(addCodeVoucher(e.target.value));
  };

  const priceSplitter = (number) =>
    number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  const handleOntop = (e) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    dispatch(isTrueMenu());
  };

  const handleCheckVoucher = async () => {
    try {
      let res = await axios({
        method: "GET",
        url: `http://localhost:8085/api/v1/discount-code/${voucher}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("check code voucher", res.data.data);
      if (res && res.data && res.data.data) {
        let discount = res.data.data.value;
        let typeCost = res.data.data.typeCost;
        let code = res.data.data.code;

        if (typeCost === true && code !== codeVoucher) {
          let priceAfterDiscount = cloneTotal * (1 - discount / 100);
          setBlockAddVoucher(false);
          setTotal(priceAfterDiscount);
          setCodeVoucher(code);
          dispatch(addTotalCart(priceAfterDiscount));
        }

        if (typeCost === false && code !== codeVoucher) {
          let priceAfterDiscount = cloneTotal - discount;
          setBlockAddVoucher(false);
          setTotal(priceAfterDiscount);
          setCodeVoucher(code);
          dispatch(addTotalCart(priceAfterDiscount));
        }
      }
      // console.log("check res voucher", res.data.data.value);
    } catch (e) {
      toast.warn("Voucher không hợp lệ");
    }
  };

  return (
    <Helmet title="Giỏ Hàng">
      <motion.div
        className="w-full bg-slate-50 py-5"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      >
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
          <div className="flex flex-wrap lg:justify-between ">
            {/* block1 */}
            <div className="lg:w-[65%] w-full  px-5 rounded-xl bg-white ">
              {listCart && listCart.length > 0 ? (
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
                })
              ) : (
                <div className="flex items-center justify-center flex-col pb-5">
                  <div>
                    <img src="https://i.imgur.com/Drj57qu.png" />
                  </div>
                  <div className="mt-5">Giỏ hàng chưa có sản phẩm nào</div>
                  <Link to="/" className="mt-6" onClick={handleOntop}>
                    <button className="px-8 py-2 bg-[#1435c3] rounded-md text-white">
                      Mua sắm ngay
                    </button>
                  </Link>
                </div>
              )}
              {/* <ItemCart />
            <ItemCart />
            <ItemCart /> */}
            </div>
            {/* block1 */}
            {/* block2 */}
            <div className="lg:w-[33%] w-full bg-white rounded-xl p-5 h-fit mt-5 lg:mt-0">
              <h5 className="text-xl font-medium text-[#333]">Thanh toán</h5>
              <div className="flex justify-between items-center mt-2">
                <div className="text-sm text-[#848788]">Tạm tính</div>
                <div className="text-sm font-semibold">
                  {priceSplitter(totalBefore)} đ
                </div>
              </div>
              <div className="flex justify-between items-center mt-2">
                <div className="text-sm text-[#848788]">Thành tiền</div>
                <div className="text-lg text-[#eb2101] font-semibold relative">
                  {priceSplitter(total)} đ
                </div>
              </div>
              <div className="text-right text-[#848788] font-normal text-xs">
                (Đã bao gồm VAT)
              </div>
              <div className="flex items-center my-5">
                <input
                  className=" block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-[780px]"
                  placeholder="Fill voucher input..."
                  type="text"
                  name="search"
                  value={voucher}
                  onChange={(e) => {
                    handleChangeVoucher(e);
                  }}
                />
                <button
                  className="whitespace-nowrap capitalize ml-5 font-light px-3 py-1 bg-[#1435c3] text-white rounded-md"
                  onClick={handleCheckVoucher}
                >
                  áp dụng
                </button>
              </div>
              <div className=" text-base bg-[#1435c3] py-2 text-white rounded-md text-center mt-10 ">
                <button
                  className={`uppercase block mx-auto w-full ${
                    listCart && listCart.length < 0
                      ? "opacity-10 cursor-not-allowed"
                      : "cursor-pointer"
                  }`}
                  disabled={listCart && listCart.length > 0 ? false : true}
                  onClick={() => navigation("/paypal")}
                >
                  thanh toán
                </button>
              </div>
            </div>
            {/* block2 */}
          </div>
          {/* item cart */}
        </div>
      </motion.div>
    </Helmet>
  );
};

export default Cart;
