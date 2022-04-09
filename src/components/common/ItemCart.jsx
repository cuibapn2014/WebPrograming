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
    <div className="flex items-center my-10">
      <div className="w-[80px] h-[80px] aspect-square">
        <img
          src={img}
          className="w-full h-full object-cover border border-[#ddd]"
        />
      </div>
      <div>
        <div className="text-sm ml-4 line-clamp-1 w-[305px]">{name}</div>
      </div>
      <div className="ml-[80px] ">
        <div className="flex items-center rounded-md border border-[#8f9091] overflow-hidden">
          <div
            className="px-3 py-1 bg-slate-50  cursor-pointer text-[#848788]"
            onClick={handleDecrease}
          >
            -
          </div>
          <div className="px-3 py-1 bg-slate-50 w-[40px] flex items-center justify-center">
            {qty}
          </div>
          {/* <input
            type="number"
            value={qty}
            min="1"
            max="5"
            className="w-[40px]  flex items-center justify-center border-none outline-none text-center"
          /> */}
          <div
            className="px-3 py-1 bg-slate-50 cursor-pointer text-[#848788]"
            onClick={handleIncrease}
          >
            +
          </div>
        </div>
        <div
          className="mt-3 text-[#19aeff] text-center text-sm hover:text-[red] cursor-pointer transition-all"
          onClick={handleRemove}
        >
          Xóa
        </div>
      </div>
      <div className="ml-14 text-sm font-medium">{priceSplitter(price)}đ</div>
    </div>
  );
};

export default ItemCart;
