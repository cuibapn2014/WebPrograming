import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeCart, changeQty } from "../../redux/actions";

const ItemCart = ({ id, name, img, price, quantity }) => {
  const [qty, setQty] = useState(quantity);
  const temp = id;
  const dispatch = useDispatch();

  const handleIncrease = (e) => {
    setQty(qty + 1);
    dispatch(
      changeQty({
        id: temp,
        quantity: qty + 1,
      })
    );
  };
  const handleDecrease = (e) => {
    if (qty === 1) {
      setQty(1);
      dispatch(
        changeQty({
          id: temp,
          quantity: 1,
        })
      );
    } else {
      setQty(qty - 1);
      dispatch(
        changeQty({
          id: temp,
          quantity: qty - 1,
        })
      );
    }
  };

  const handleRemove = () => {
    dispatch(removeCart(temp));
  };

  const priceSplitter = (number) =>
    number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return (
    <div className="flex md:items-center my-10 ">
      <div className="w-[80px] h-[80px] aspect-square">
        <img
          src={`http://localhost:8085/api/v1/image/files/${img}`}
          className="w-full h-full object-cover border border-[#ddd]"
        />
      </div>
      {/* responsive md */}
      <div className="md:flex ml-10  md:ml-0 md:items-center  flex-wrap w-full lg:flex-col xl:flex-row  lg:items-start xl:items-center xl:justify-between">
        <div className="mb-2 md:mb-0 md:ml-4 xl:ml-4 lg:mb-2 xl:mb-0 md:max-w-[305px]  w-full lg:w-full  xl:max-w-[305px]">
          <div className="text-sm line-clamp-1">{name}</div>
        </div>
        <div className="md:ml-[60px] xl:ml-[60px] lg:ml-4 md:mb-0 mb-2 flex items-center md:flex-col lg:mb-2 xl:mb-0 ">
          <div className="flex items-center rounded-md  border max-w-[110px] border-[#8f9091] overflow-hidden">
            <div
              className="px-3 py-1 bg-slate-50  cursor-pointer text-[#848788]"
              onClick={handleDecrease}
            >
              -
            </div>
            <div className="px-3 py-1 bg-slate-50 w-[40px] flex items-center justify-center">
              {qty}
            </div>

            <div
              className="px-3 py-1 bg-slate-50 cursor-pointer text-[#848788]"
              onClick={handleIncrease}
            >
              +
            </div>
          </div>
          <div
            className="md:mt-3 ml-5 md:ml-0 text-[#19aeff] text-center text-sm hover:text-[red] cursor-pointer transition-all"
            onClick={handleRemove}
          >
            Xóa
          </div>
        </div>
        <div className="md:ml-14 lg:ml-4 xl:ml-14 text-sm font-medium">
          {priceSplitter(price)}đ
        </div>
      </div>
      {/* responsive md */}
    </div>
  );
};

export default ItemCart;
