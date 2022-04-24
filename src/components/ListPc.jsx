import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar } from "swiper";
// import { GrFormNextLink } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";
import CardProduct from "./common/CardProduct";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { isFalseMenu } from "../redux/actions";

const listCollectionPC = [
  {
    name: "PC GAMING CHEAP PENTIUM G6405 / RAM 8GB / SSD 120GB",
    price: "5,940,000₫",
    discount: "-10%",
    priceBeforeDiscount: "6,600,000₫",
    img: "https://product.hstatic.net/1000026716/product/axe_d6711491eeb74f39ac169e49e9ccd982_large.jpg",
  },
  {
    name: "PC GAMING SC I3 10100F / Ram 8GB / GTX 1030 / SSD 120GB",
    price: "8,920,000₫",
    discount: "-23%",
    priceBeforeDiscount: "11,615,000₫",
    img: "https://product.hstatic.net/1000026716/product/ventus_6412aad1ff0949a59c376f7ae739a69b_large.jpg",
  },
  {
    name: "PC GAMING ES2 I3 10105F / RAM 8GB / GTX 1030 / SSD 120GB",
    price: "10,390,000₫",
    discount: "-21%",
    priceBeforeDiscount: "13,070,000₫",
    img: "https://product.hstatic.net/1000026716/product/mystic_f3c70f3ef0dc4e86b932d53b4932b70e_large.jpg",
  },
  {
    name: "PC GAMING ZUMY 1 I5 10400F / RAM 8GB / GTX 1030 / SSD 120GB",
    price: "10,830,000₫",
    discount: "-17%",
    priceBeforeDiscount: "13,000,000₫",
    img: "https://product.hstatic.net/1000026716/product/ratchet_c6d03b5dee39455bbcb66144b29bcbfe_large.jpg",
  },
  {
    name: "PC GAMING MIKTA 1 I3 10105F / RAM 8GB / GTX 1050TI / SSD 120GB",
    price: "11,790,000₫",
    discount: "-18%",
    priceBeforeDiscount: "14,300,000₫",
    img: "https://product.hstatic.net/1000026716/product/athen_29da8eeae7cd47fbb48f3c9d84df5b42_large.jpg",
  },
  //copy
  {
    name: "PC GAMING EXPENSIVE PENTIUM G6405 / RAM 8GB / SSD 120GB",
    price: "6,940,000₫",
    discount: "-10%",
    priceBeforeDiscount: "6,600,000₫",
    img: "https://product.hstatic.net/1000026716/product/garen_e1c63b8aef6f45eaa7e0ed0446a8f961_large.jpg",
  },
  {
    name: "PC GAMING SC I3 10100F / Ram 8GB / GTX 1030 / SSD 120GB",
    price: "9,920,000₫",
    discount: "-23%",
    priceBeforeDiscount: "11,615,000₫",
    img: "https://product.hstatic.net/1000026716/product/volibear_651242d5cb774a42a8fd6629c3d57ef2_large.jpg",
  },
  {
    name: "PC GAMING ES2 I3 10105F / RAM 8GB / GTX 1030 / SSD 120GB",
    price: "10,390,000₫",
    discount: "-21%",
    priceBeforeDiscount: "13,070,000₫",
    img: "https://product.hstatic.net/1000026716/product/neon_91c0996086374bab98d8bd3a16162cf9_large.jpg",
  },
  {
    name: "PC GAMING ZUMY 1 I5 10400F / RAM 8GB / GTX 1030 / SSD 120GB",
    price: "10,830,000₫",
    discount: "-17%",
    priceBeforeDiscount: "13,000,000₫",
    img: "https://product.hstatic.net/1000026716/product/phantom_5f48a8738fee4767af130fb977ac4792_large.jpg",
  },
  {
    name: "PC GAMING MIKTA 1 I3 10105F / RAM 8GB / GTX 1050TI / SSD 120GB",
    price: "11,790,000₫",
    discount: "-18%",
    priceBeforeDiscount: "14,300,000₫",
    img: "https://product.hstatic.net/1000026716/product/ghost_3dedb620811c4c25935ffb5df0dbec71_large.jpg",
  },
];

const ListPc = () => {
  const [list, setList] = useState([]);
  const token = useSelector((state) => state.token.tokenDefault);
  const dispatch = useDispatch();
  useEffect(async () => {
    try {
      const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      };
      const res = await axios.get(
        "http://localhost:8085/api/v1/category/2",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            // "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
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
    <div className="container mx-auto">
      <div className="px-5 py-2  flex items-center justify-between bg-[#1435c3] text-white">
        <div className="bg-[#1435c3] text-left  text-lg">
          PC GEARVN - MIỄN PHÍ GIAO HÀNG TOÀN QUỐC
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
      <div id="listPC">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          grabCursor={true}
          scrollbar={{
            hide: true,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          modules={[Scrollbar]}
          breakpoints={{
            500: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 5,
            },
          }}
          // modules={[Pagination]}
          className="mySwiper"
        >
          {list &&
            list.product &&
            list.product.length > 0 &&
            list.product.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <CardProduct
                    id={item.id}
                    name={item.title}
                    price={item.price}
                    discount={item.discount}
                    priceBeforeDiscount={"10.000.000"}
                    img={item.image[0].urlImage}
                    slug={item.slug}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default ListPc;
