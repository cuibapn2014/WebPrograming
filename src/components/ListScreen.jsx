import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { isFalseMenu } from "../redux/actions";
import CardProduct from "./common/CardProduct";
const listCollectionScreen = [
  {
    name: 'Màn hình ASUS VZ24EHE 24" IPS 75Hz viền mỏng',
    price: "3.850.000",
    discount: "-7.98%",
    priceBeforeDiscount: "4.490.000",
    img: "https://product.hstatic.net/1000026716/product/asus_vz24ehe_gearvn_2fb10fca11d949db97913c8c6739d175_large.jpg",
  },
  {
    name: 'Màn hình LG 24MP400-B 24 " IPS 75Hz Freesync chuyên game',
    price: "3.800.000",
    // discount: "-23%",
    // priceBeforeDiscount: "11,615,000₫",
    img: "https://product.hstatic.net/1000026716/product/lg_24mp400_gearvn_239078b91e2f481d9341da70a8d98404_large.jpg",
  },
  {
    name: 'Màn hình AOC 24G2E 24 " IPS 144Hz chuyên gaming',
    price: "4.499.000",
    discount: "-8%",
    priceBeforeDiscount: "4.899.000",
    img: "https://product.hstatic.net/1000026716/product/aoc_24g2e_-_gearvn_a1cd043e4c4e46ecb751fa1467538b55_large.jpg",
  },
  {
    name: 'Màn hình Acer EK241Y 24 " IPS 75Hz',
    price: "3.390.000",
    // discount: "-6.38%",
    // priceBeforeDiscount: "24.049.000",
    img: "https://product.hstatic.net/1000026716/product/acer_ek241y_gearvn_edba05af88ce47448e99d76573d3b1c0_large.jpg",
  },
  {
    name: 'Màn hình Dell E2422H 24" IPS chuyên gaming',
    price: "4.350.000",
    discount: "-9%",
    priceBeforeDiscount: "4.790.000",
    img: "https://product.hstatic.net/1000026716/product/dell_e2422h_gearvn_f5ba1e5ec0314e8e81795ca787bb2568_large.jpg",
  },
  //copy
  {
    name: 'Màn hình ViewSonic VA2215-H 22" 75Hz FHD',
    price: "2.990.000",
    discount: "-17%",
    priceBeforeDiscount: "3.600.000",
    img: "https://product.hstatic.net/1000026716/product/viewsonic_va2215-h_gearvn_032d5d53effc48a2887c2879e6bc5cff_large.jpg",
  },
  {
    name: 'Màn hình ViewSonic VA2408-H 24" IPS 75Hz',
    price: "3.650.000",
    discount: "-20%",
    priceBeforeDiscount: "4.550.000",
    img: "https://product.hstatic.net/1000026716/product/view_va2408-h_gearvn_dcbe3f304278477ca9e7cb144e9d18c1_large_c60769ebead04b17841f281d3083a5f5_large.jpg",
  },
  {
    name: 'Màn hình ASUS VZ27EHE 27" IPS 75Hz viền mỏng',
    price: "4.790.000",
    discount: "-4%",
    priceBeforeDiscount: "4.990.000",
    img: "https://product.hstatic.net/1000026716/product/asus_vz27ehe_gearvn_6c045841ab7c461cbb8f09feb57ec929_large.jpg",
  },
  {
    name: 'Màn hình ACER KA272 27" IPS 75Hz',
    price: "4.390.000",
    discount: "-6%",
    priceBeforeDiscount: "4.690.000",
    img: "https://product.hstatic.net/1000026716/product/acer_ka272_gearvn_066b9835519e489b991e2f99e2ec1e4e_large.jpg",
  },
  {
    name: 'Màn hình Dell E2722H 27" IPS chuyên gaming',
    price: "5.400.000",
    // discount: "-6.07%",
    // priceBeforeDiscount: "27.990.000",
    img: "https://product.hstatic.net/1000026716/product/dell_e2722h_gearvn_a9938cc0f1d54c5ea764c57a949aed62_large.jpg",
  },
];
const ListScreen = () => {
  const [list, setList] = useState([]);
  const token = useSelector((state) => state.token.tokenDefault);
  const dispatch = useDispatch();
  console.log("check data vie", list);
  useEffect(async () => {
    try {
      // const config = {
      //   headers: {
      //     "Access-Control-Allow-Origin": "*",
      //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      //   },
      // };
      const res = await axios.get(
        "http://localhost:8085/api/v1/category/11",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
        // {
        //   headers: {
        //     "Access-Control-Allow-Origin": true,
        //   },
        // },
        // { crossDomain: true }
      );

      if (res && res.data && res.data.data) {
        setList(res.data.data);
      }
    } catch (e) {
      console.log("fail error : >>", e.message);
    }
  }, []);
  return (
    <div className="container mx-auto mt-2 ">
      {" "}
      <div className="px-5 py-2  flex items-center justify-between bg-[#1435c3] text-white">
        <div className="bg-[#1435c3] text-left  text-lg">
          MÀN HÌNH KHUYẾN MÃI HOT - GIAO HÀNG MIỄN PHÍ
        </div>
        <div className="flex items-center  cursor-pointer hover:text-[#8196f3] ">
          <Link
            to={`/collections/${list.name}/${list.id}`}
            onClick={() => {
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
              dispatch(isFalseMenu());
            }}
            className="mr-1"
          >
            Xem thêm
          </Link>
          <div>
            <MdOutlineNavigateNext size="24px" />
          </div>
        </div>
      </div>
      {/* map data */}
      <div className="flex flex-wrap ">
        {list &&
          list.product &&
          list.product.length > 0 &&
          list.product.map((item, index) => {
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
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ListScreen;
