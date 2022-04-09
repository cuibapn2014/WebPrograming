import axios from "axios";
import React, { useState, useEffect } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import CardProduct from "../common/CardProduct";
const Collections = () => {
  const { id } = useParams();

  const [listProduct, setListProduct] = useState([]);
  console.log(id);
  console.log("check data collections", listProduct);
  useEffect(async () => {
    try {
      const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      };
      const res = await axios.get(
        `http://localhost:8085/api/v1/category/${id}`
        // {
        //   headers: {
        //     "Access-Control-Allow-Origin": true,
        //   },
        // },
        // { crossDomain: true }
      );

      if (res && res.data && res.data.data) {
        setListProduct(res.data.data);
      }
    } catch (e) {
      console.log("fail error : >>", e.message);
    }
  }, [id]);
  return (
    <div className="w-full bg-slate-50 py-5">
      <div className="flex items-center  mb-5 ml-5">
        <Link to="/">
          <div className="p-2 rounded-full border border-[#ddd]">
            <AiOutlineHome size={"24px"} className=" text-black" />
          </div>
        </Link>
        <span className="block mx-3"> &gt;</span>
        {listProduct && listProduct.name && (
          <div className="text-sm px-[6px] py-2 rounded-full border border-[#ddd]">
            {listProduct.name}
          </div>
        )}
      </div>
      <div className="container mx-auto bg-slate-50">
        {/* item cart */}
        <div className="flex justify-between">
          <div className="flex flex-wrap ">
            {listProduct.product &&
              listProduct.product.length > 0 &&
              listProduct.product.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="xl:w-[19.8%] lg:w-[24.8%] md:w-[33.2%] sm:w-[49.8%] w-full"
                  >
                    <CardProduct
                      id={item.id}
                      name={item.title}
                      price={item.price}
                      discount={item.discount}
                      priceBeforeDiscount={"10.000.000"}
                      img={item.image[0].urlImage}
                      slug={item.slug}
                      // id={1}
                      // name="Màn hình ViewSonic VA2215-H 22 inch 75Hz FHD"
                      // price={5000000}
                      // discount={10}
                      // priceBeforeDiscount={"10.000.000"}
                      // img="https://product.hstatic.net/1000026716/product/viewsonic_va2215-h_gearvn_032d5d53effc48a2887c2879e6bc5cff_large.jpg"
                      // slug={"tv-lh-kj"}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        {/* item cart */}
      </div>
    </div>
  );
};

export default Collections;
