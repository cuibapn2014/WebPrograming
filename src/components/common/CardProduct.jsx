import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { isFalseMenu } from "../../redux/actions";

const CardProduct = ({ name, price, discount, priceBeforeDiscount, img }) => {
  const dispatch = useDispatch();
  const handleOntop = (e) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className="hover:shadow-xl p-2 transition-all relative"
      onClick={handleOntop}
    >
      <Link to="/product" onClick={() => dispatch(isFalseMenu())}>
        <div>
          <img src={img} alt={name} />
        </div>
        <div className="text-left bg-white">
          <h4 className="line-clamp-2">{name}</h4>
          <p className="text-base font-semibold mt-3 text-[#1435c3]">{price}</p>
          {priceBeforeDiscount ? (
            <p className="line-through text-xs text-[#95a5a6] my-1">
              {priceBeforeDiscount}
            </p>
          ) : (
            <p className="line-through text-xs text-white my-1">varible temp</p>
          )}
        </div>
        {discount ? (
          <div className="absolute bottom-0 right-0 px-2 py-[2px] rounded-tl-md text-white text-sm bg-[#2a4ef1]">
            {discount}
          </div>
        ) : (
          <div className="absolute bottom-0 right-0 px-2 py-[2px] rounded-tl-md text-white text-sm ">
            discount temp
          </div>
        )}
      </Link>
    </div>
  );
};

export default CardProduct;
