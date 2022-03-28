import React from "react";

const CardProduct = ({ name, price, discount, priceBeforeDiscount, img }) => {
  return (
    <div className="hover:shadow-xl p-2 transition-all mx-auto">
      <div>
        <img src={img} />
      </div>
      <div className="text-left">
        <h4 className="line-clamp-2">{name}</h4>
        <p className="text-base font-semibold mt-3">{price}</p>
        <p className="line-through text-xs">{priceBeforeDiscount}</p>
      </div>
    </div>
  );
};

export default CardProduct;
