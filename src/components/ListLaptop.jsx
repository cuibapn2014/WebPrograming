import React from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import CardProduct from "./common/CardProduct";
const listCollectionLaptop = [
  {
    name: "Laptop Acer Spin 3 SP314-51-36JE (NX.GUWSV.005) (14 inch FHD/i3-7130U/4GB/1TB HDD/HD 620/Win10/1.7 kg)",
    price: "12.790.000₫",
    discount: "-7.98%",
    priceBeforeDiscount: "13.899.000₫",
    img: "https://kccshop.vn/media/product/250-3018-57436_aspire_3_a315_57g_wp_black__5_.jpeg",
  },
  {
    name: "Laptop Lenovo V330-14IKBR (81B0008LVN) (14 inch HD/i5-8250U/4GB/1TB HDD/UHD 620/Free DOS/1.5 kg)",
    price: "13.490.000",
    // discount: "-23%",
    // priceBeforeDiscount: "11,615,000₫",
    img: "https://kccshop.vn/media/product/250-66-a227c2c4e5ca2cad37545ccb7dde8ffe.png",
  },
  {
    name: "Laptop Acer Spin 5 SP513-52N-556V (NX.GR7SV.004) (13.3 inch FHD/i5-8250U/8GB/UHD 620/Win10/1.5 kg)",
    price: "21.499.000",
    discount: "-21%",
    priceBeforeDiscount: "13,070,000₫",
    img: "	https://kccshop.vn/media/product/250-3016-63806_laptop_acer_gaming_aspire_7_a715_75g_18.jpeg",
  },
  {
    name: "Laptop Acer Nitro 5 AN515-52-51LW (NH.Q3LSV.002) (15.6 inch FHD/i5-8300H/8GB/1TB HDD/GTX 1050Ti/Linux/2.4 kg)",
    price: "22.390.000",
    // discount: "-6.38%",
    // priceBeforeDiscount: "24.049.000",
    img: "	https://kccshop.vn/media/product/250-3014-63564_laptop_acer_aspire_3_a315_56_17.jpeg",
  },
  {
    name: "Laptop Lenovo Ideapad 330-15IKBR (15IKBR 81DE010CVN) (15.6 inch HD/i3-7020U/4GB/2TB HDD/Radeon 530/Win10/2.2 kg)",
    price: "11,090,000₫",
    discount: "-7.51%",
    priceBeforeDiscount: "11.990.000₫",
    img: "	https://kccshop.vn/media/product/250-3010-63307_laptop_hp_14_4.jpeg",
  },
  //copy
  {
    name: "Laptop ACER Swift 3 SF314-510G-57MR NX.A10SV.004 ( 14 inch Full HD/Intel Core i5-1135G7/8GB/512GB SSD/Windows 10 Home 64-bit/1.4kg)",
    price: "20.990.000",
    discount: "-12.51%",
    priceBeforeDiscount: "23.990.000",
    img: "https://kccshop.vn/media/product/250-3012-60790_laptop_acer_gaming_nitro_5_eagle_17--1-.png",
  },
  {
    name: "Laptop Dell Vostro 14 3405 V4R53500U003W ( 14 inch Full HD/AMD Ryzen 5 3500U/8GB/512GB SSD/Windows 10 Home SL 64-bit/1.7kg)",
    price: "17.190.000",
    discount: "-7.03%",
    priceBeforeDiscount: "18.490.000",
    img: "https://kccshop.vn/media/product/250-54-f41ad55fecb8631c4e52a5d79a261501.jpg",
  },
  {
    name: "Laptop Lenovo Yoga Slim 7 14ITL05- 82A3002QVN ( 14 inch Full HD/Intel Evo Core i5-1135G7/8GB/512GB SSD/Windows 10 Home 64-bit/1.4kg)",
    price: "22.490.000",
    discount: "-6.25%",
    priceBeforeDiscount: "23.990.000",
    img: "https://kccshop.vn/media/product/250-67-97355d36624d6f1a3545b0e62af2a20a.jpg",
  },
  {
    name: "Laptop ASUS Vivobook S433EA-AM439T 90NB0RL4-M06720 ( 14 inch Full HD/Intel Core i5-1135G7/8GB/512GB SSD/Windows 10 Home SL 64-bit/1.4kg)",
    price: "10,830,000₫",
    discount: "-17%",
    priceBeforeDiscount: "13,000,000₫",
    img: "	https://kccshop.vn/media/product/250-53-5103fb37216473a9545086924b7cae26.png",
  },
  {
    name: "Laptop Lenovo Yoga Slim 7 14ITL05- 82A3004FVN ( 14 inch/Full HD/Intel EVO Core i7-1165G7/8GB/512GB SSD/Windows 10 Home SL 64-bit/1.4kg)",
    price: "26.290.000",
    // discount: "-6.07%",
    // priceBeforeDiscount: "27.990.000",
    img: "	https://kccshop.vn/media/product/250-3015-9005_asus_vivobook_x413ja__4.jpeg",
  },
];
const ListLaptop = () => {
  return (
    <div className="container mx-auto mt-2 ">
      {" "}
      <div className="px-5 py-2  flex items-center justify-between bg-[#1435c3] text-white">
        <div className="bg-[#1435c3] text-left  text-lg">
          LAPTOP GAMING - MIỄN PHÍ GIAO HÀNG TOÀN QUỐC
        </div>
        <div className="flex items-center  cursor-pointer hover:text-[#8196f3] ">
          <span className="mr-1">Xem thêm</span>
          <div>
            <MdOutlineNavigateNext size="24px" />
          </div>
        </div>
      </div>
      {/* map data */}
      <div className="flex flex-wrap ">
        {listCollectionLaptop.map((item, index) => {
          return (
            <div
              key={index}
              className="xl:w-[19.8%] lg:w-[24.8%] md:w-[33.2%] sm:w-[49.8%] w-full"
            >
              <CardProduct
                name={item.name}
                price={item.price}
                discount={item.discount}
                priceBeforeDiscount={item.priceBeforeDiscount}
                img={item.img}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListLaptop;
