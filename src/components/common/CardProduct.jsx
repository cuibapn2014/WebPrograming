import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { isFalseMenu } from "../../redux/actions";

const CardProduct = ({
  id,
  name,
  price,
  discount,
  priceBeforeDiscount,
  img,
  slug,
}) => {
  const dispatch = useDispatch();
  const handleOntop = (e) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  // function formatDollar(num) {
  //   var p = num.toFixed(2).split(".");
  //   return (
  //     "$" +
  //     p[0]
  //       .split("")
  //       .reverse()
  //       .reduce(function (acc, num, i, orig) {
  //         return num + (num != "-" && i && !(i % 3) ? "," : "") + acc;
  //       }, "") +
  //     "." +
  //     p[1]
  //   );
  // }
  const priceSplitter = (number) =>
    number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  const price1 = price / -discount + price;
  // console.log(Number(price1).toFixed());
  return (
    <div
      className="hover:shadow-xl p-2 transition-all relative min-w-[237px]"
      onClick={handleOntop}
    >
      <Link
        to={`/product/${slug}/${id}`}
        onClick={() => dispatch(isFalseMenu())}
      >
        <div className="bg-white aspect-square">
          <img
            src={`http://localhost:8085/api/v1/image/files/${img}`}
            alt={name}
          />
        </div>
        <div className="text-left bg-white">
          <h4 className="line-clamp-2">{name}</h4>
          <p className="text-base font-semibold mt-3 text-[#1435c3]">
            {priceSplitter(price)}đ
          </p>
          {priceBeforeDiscount ? (
            <p className="line-through text-xs text-[#95a5a6] my-1">
              {priceSplitter(Number(price1).toFixed())}đ
            </p>
          ) : (
            <p className="line-through text-xs text-white my-1">varible temp</p>
          )}
        </div>
        {discount ? (
          <div className="absolute bottom-0 right-0 px-2 py-[2px] rounded-tl-md text-white text-sm bg-[#2a4ef1]">
            {discount} %
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
