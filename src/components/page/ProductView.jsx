import React, { useEffect, useRef, useState } from "react";
import { AiOutlineGift, AiOutlineSetting } from "react-icons/ai";
import { MdOutlineLocalShipping, MdLaptopWindows } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { BsShieldCheck } from "react-icons/bs";
import { RiExchangeLine } from "react-icons/ri";
import { motion } from "framer-motion";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/actions";
import { toast } from "react-toastify";
const ProductView = () => {
  const { slug, id } = useParams();
  const navigation = useNavigate();
  // console.log("id :", id);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const listImg = data.image;

  const [img1, setImg1] = useState(true);
  const [img2, setImg2] = useState(false);
  const [img3, setImg3] = useState(false);
  const [img4, setImg4] = useState(false);
  const [img5, setImg5] = useState(false);

  const buyNow = (e) => {
    window.scrollTo({
      top: 262,
      left: 0,
      behavior: "smooth",
    });
    dispatch(
      addCart({
        id: data.id,
        img: data.image[0].urlImage,
        name: data.title,
        price: data.price,
        qty: 1,
      })
    );
    toast.success("add product success");
    navigation("/cart");
  };

  const addItem = () => {
    dispatch(
      addCart({
        id: data.id,
        img: data.image[0].urlImage,
        name: data.title,
        price: data.price,
        qty: 1,
      })
    );
    toast.success("add product success");
  };

  // const imgSlider = [
  //   "https://lh3.googleusercontent.com/c7VuA4P8sHHJCilfzRVp50AQmgZEkJOyOCuh4vvkcT9jxfqTzZVd2gepUFSSqzXVSEljnYlAN319sJD-H1IztNcxPT3UypA=w1000-rw",
  //   "https://lh3.googleusercontent.com/VpJgldxtdddsmBwMTP0iqPG4-W0WAKCTFE3iYe7XUaXUhvFvePH514GCSoH2TDLHiMOYxKSzRh7hCsmdM1429r-tk_8haRUr3Q=w1000-rw",
  //   "https://lh3.googleusercontent.com/kpxJEY3p1mLKsaiQdUuL8gK_JPyrawmy_oxRXlU9b_p9TrrPo3hQOBhlXXutOyDABYTmxgnuuDkutPg0VgbUls42ctkH5WXY=w1000-rw",
  //   "https://lh3.googleusercontent.com/_8W1EMpxpcb_lDJ-nhGMxsqP-ja6GW8iZHwREklHxrkkHcZxEKJTEyaRq817_McgSwXR0e0dQpvl2DxrjumLjU8-3L6u4xpI=w1000-rw",
  //   "https://lh3.googleusercontent.com/eOT1uNpQy6j-EBoWZTZfelVhvIppYxHOUv27da3RWHyZAj89Wtf1p-qxmVNZnrnkyE8-k9mXQB_r3f19Z1dA5Oy2fgM3lOws=w1000-rw",
  // ];
  const imgSlider = [
    "https://product.hstatic.net/1000026716/product/ratchet_c6d03b5dee39455bbcb66144b29bcbfe.jpg",
    "https://product.hstatic.net/1000026716/product/01_1c33ffcd7b4a446aafbe5c0fd3fb1985_grande.jpg",
    "https://product.hstatic.net/1000026716/product/10400f_71634928fe5b44f1a956f0e652e65d59_grande.jpg",
    "https://product.hstatic.net/1000026716/product/gearvn.com-products-8gb-ddr4-1x8g-3200-ram-pny-xlr8-gaming-1_ebc7adc549654b31927d8cb2f51b8917_grande.jpg",
    "https://product.hstatic.net/1000026716/product/1_340d4299b5fe46b29c19f3c97274a946_grande.jpg",
  ];

  useEffect(async () => {
    let res = await axios.get(`http://localhost:8085/api/v1/product/${id}`);
    if (res && res.data && res.data.data) {
      setData(res.data.data);
      // setListImg(res.data.data.image);
    }
  }, []);
  // console.log("check state", data);

  const priceSplitter = (number) =>
    number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  const handleClickItem = (index) => {
    if (index === 1) {
      setImg1(true);
      setImg2(false);
      setImg3(false);
      setImg4(false);
      setImg5(false);
    }
    if (index === 2) {
      setImg1(false);
      setImg2(true);
      setImg3(false);
      setImg4(false);
      setImg5(false);
    }
    if (index === 3) {
      setImg1(false);
      setImg2(false);
      setImg3(true);
      setImg4(false);
      setImg5(false);
    }
    if (index === 4) {
      setImg1(false);
      setImg2(false);
      setImg3(false);
      setImg4(true);
      setImg5(false);
    }
    if (index === 5) {
      setImg1(false);
      setImg2(false);
      setImg3(false);
      setImg4(false);
      setImg5(true);
    }
  };

  const activeState = (index) => {
    if (index === 1) {
      return img1 ? "active-border" : "";
    }
    if (index === 2) {
      return img2 ? "active-border" : "";
    }
    if (index === 3) {
      return img3 ? "active-border" : "";
    }
    if (index === 4) {
      return img4 ? "active-border" : "";
    }
    if (index === 5) {
      return img5 ? "active-border" : "";
    }
  };
  return (
    <motion.div
      className="bg-slate-50"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{
        opacity: 0,
        x: -100,
      }}
      transition={{ duration: 0.25 }}
    >
      <div className="flex lg:flex-row flex-col justify-between p-4">
        {/* block1 */}
        <div className="lg:w-[74%] w-full flex flex-col md:flex-row justify-between  bg-white rounded-md p-5">
          {/* block1.1 */}
          <div id="thumbs" className="md:w-[35%] w-full ">
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              // loop={true}
              spaceBetween={10}
              grabCursor={true}
              // navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              {listImg &&
                listImg.length > 0 &&
                listImg.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <img src={item.urlImage} />
                    </SwiperSlide>
                  );
                })}
            </Swiper>

            {/* thumbs */}
            <Swiper
              onSwiper={setThumbsSwiper}
              // loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              {listImg &&
                listImg.length > 0 &&
                listImg.map((item, index) => {
                  return (
                    <SwiperSlide
                      key={index}
                      className={activeState(index + 1)}
                      onClick={() => handleClickItem(index + 1)}
                    >
                      <img src={item.urlImage} className="cursor-pointer" />
                    </SwiperSlide>
                  );
                })}
              {/* <SwiperSlide
                className={`${img1 ? "active-border" : ""} cursor-pointer`}
                onClick={handleClickItem1}
              >
                {listImg && <img src={listImg[0].urlImage} />}
              </SwiperSlide>
              <SwiperSlide
                className={`${img2 ? "active-border" : ""} cursor-pointer`}
                onClick={handleClickItem2}
              >
                {listImg && <img src={listImg[1].urlImage} />}
              </SwiperSlide>
              <SwiperSlide
                className={`${img3 ? "active-border" : ""} cursor-pointer`}
                onClick={handleClickItem3}
              >
                {listImg && <img src={listImg[2].urlImage} />}
              </SwiperSlide>
              <SwiperSlide
                className={`${img4 ? "active-border" : ""} cursor-pointer`}
                onClick={handleClickItem4}
              >
                {listImg && <img src={listImg[3].urlImage} />}
              </SwiperSlide>
              <SwiperSlide
                className={`${img5 ? "active-border" : ""} cursor-pointer`}
                onClick={handleClickItem5}
              >
                {listImg && <img src={listImg[4].urlImage} />}
              </SwiperSlide> */}
            </Swiper>
          </div>
          {/* block1.1 */}
          {/* block 1.2 */}
          <div className="md:w-[60%] w-full ">
            <div className="pb-4">
              <h2 className="text-[22px] font-medium">{data.title}</h2>
              <div className="flex items-center text-sm text-[#82869E] mt-2">
                <p className="mr-5">
                  Thương hiệu :{" "}
                  {data.brand && (
                    <span className="text-[#1435c3]">
                      {data.brand.brandName}
                    </span>
                  )}
                </p>
                <span className="uppercase">SKU: 220303310</span>
              </div>
              <div className="mt-4">
                <div className="text-xl text-[#1435c3] font-semibold mb-1">
                  {priceSplitter(data.price)}đ
                </div>
                <div className="text-xs text-[#82869E] line-through">
                  {priceSplitter(
                    Number(data.price / -data.discount + data.price).toFixed()
                  )}
                  đ
                </div>
              </div>
            </div>
            <div className="w-full  border border-[#82869E] border-dashed "></div>
            <div className="border border-[#1435c3] rounded-lg  p-4 flex items-center mt-5">
              <AiOutlineGift size={"24px"} />
              <div className="ml-4 text-[#333] text-sm font-medium">
                <p className="capitalize mb-3">giá tốt mỗi ngày</p>
                <p>
                  <span className="font-normal">Giảm trực tiếp</span> 1.500.000
                  đ
                </p>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <div
                className="w-[48%] bg-[#1435c3] hover:bg-white text-white hover:text-[#1435c3] transition-all uppercase text-center rounded-md py-2 cursor-pointer hover:border hover:border-[#1435c3] text-[10px] md:text-base"
                onClick={buyNow}
              >
                mua ngay
              </div>
              <div
                className="w-[48%] bg-white hover:bg-[#1435c3] text-[#1435c3] hover:text-white transition-all border border-[#1435c3] uppercase text-center rounded-md py-2 cursor-pointer text-[10px] md:text-base"
                onClick={addItem}
              >
                thêm vào giỏ hàng
              </div>
            </div>
          </div>
          {/* block 1.2 */}
        </div>
        {/* block1 */}

        {/* block2 */}
        <div className="lg:w-[25%] w-full lg:mt-0 mt-1 bg-white rounded-md p-4 h-fit">
          <div className="flex items-center text-sm text-[#53c305] mb-5">
            <MdOutlineLocalShipping size={"24px"} className="mr-2" />
            <p>Sản phẩm được miễn phí giao hàng</p>
          </div>
          <div className="w-full  border border-[#e0e0e0] border-dashed "></div>
          <div className="mt-5">
            <h6 className="text-[15px] font-medium mb-2">
              Chính sách bán hàng
            </h6>
            <div className="flex items-center text-sm text-[#333] mb-2">
              <FaShippingFast size={"24px"} className="mr-2 text-[#1435c3]" />
              <p>Miễn phí giao hàng cho đơn hàng từ 800K</p>
            </div>
            <div className="flex items-center text-sm text-[#333] mb-2">
              <BsShieldCheck size={"24px"} className="mr-2 text-[#1435c3]" />
              <p>Cam kết hàng chính hãng 100%</p>
            </div>
            <div className="flex items-center text-sm text-[#333] mb-2">
              <RiExchangeLine size={"24px"} className="mr-2 text-[#1435c3]" />
              <p>Đổi trả trong vòng 10 ngày</p>
            </div>
          </div>
          <div className="mt-5">
            <h6 className="text-[15px] font-medium mb-2">Dịch vụ khác</h6>
            <div className="flex items-center text-sm text-[#333] mb-2">
              <AiOutlineSetting size={"24px"} className="mr-2 text-[#1435c3]" />
              <p>Sữa chữa đồng giá 150k</p>
            </div>
            <div className="flex items-center text-sm text-[#333] mb-2">
              <MdLaptopWindows size={"24px"} className="mr-2 text-[#1435c3]" />
              <p>Vệ sinh máy tính, laptop</p>
            </div>
            <div className="flex items-center text-sm text-[#333] mb-2">
              <BsShieldCheck size={"24px"} className="mr-2 text-[#1435c3]" />
              <p>Bảo hành tại nhà</p>
            </div>
          </div>
        </div>
        {/* block2 */}
      </div>

      {/* DESCRIPTION */}
      <div className="flex justify-between  flex-wrap p-4">
        {/* descrition */}
        <div className="w-[69%] bg-white p-4 rounded-md">
          <h3 className="text-lg font-semibold">Mô tả sản phẩm</h3>
          <div className="mb-3">
            <h4 className="text-base font-medium">
              Laptop ACER Nitro 5 AN515-56-51N4 (NH.QBZSV.002) là sản phẩm máy
              tính xách tay được hướng tới người làm đồ họa hoặc chơi game.
              Thuộc phân khúc cao cấp, chiếc máy tính này có thiết kế hiện đại,
              sang trọng cùng cấu hình mạnh mẽ thỏa mãn được nhu cầu của người
              dùng.
            </h4>
            <div className="my-2">
              {listImg && (
                <img
                  src={listImg[0].urlImage}
                  className="w-[90%] object-cover"
                />
              )}
            </div>
            <p className="text-sm font-normal ">
              Máy có kích thước các chiều lần lượt là 36.34 x 25.5 x 2.39cm.
              ACER Nitro 5 AN515-56-51N4 (NH.QBZSV.002) có tông màu đỏ-đen nổi
              bật, tông màu này cũng khá đặc trưng ở các dòng máy tính gaming.
            </p>
          </div>

          <div className="mb-3">
            <h4 className="text-base font-medium">
              Màn hình rộng 15.6 inch Full HD, tần số quét 144Hz cho chất lượng
              hình ảnh tuyệt vời khi chơi game
            </h4>
            <div className="my-2">
              {listImg && listImg[1] && (
                <img
                  src={listImg[1].urlImage}
                  className="w-[90%] object-cover"
                />
              )}
            </div>
            <p className="text-sm font-normal ">
              Màn hình này còn được trang bị tấm nền IPS chống lóa hiệu quả khi
              máy hoạt động trong môi trường nhiều ánh sáng. Tần số quét 144Hz
              tích hợp trên màn hình của máy tính xách tay này đảm bảo mọi hình
              ảnh chuyển động trên màn hình được hiển thị một cách mượt mà, trơn
              tru.
            </p>
          </div>

          <div className="mb-3">
            <h4 className="text-base font-medium">
              Cấu hình đáp ứng được nhu cầu chơi game: CPU Intel Core i5-11300H,
              RAM 8GB, ổ cứng 512GB SSD M.2 NVMe
            </h4>
            <div className="my-2">
              {listImg && listImg[2] && (
                <img
                  src={listImg[2].urlImage}
                  className="w-[90%] object-cover"
                />
              )}
            </div>
            <p className="text-sm font-normal ">
              Màn hình này còn được trang bị tấm nền IPS chống lóa hiệu quả khi
              máy hoạt động trong môi trường nhiều ánh sáng. Tần số quét 144Hz
              tích hợp trên màn hình của máy tính xách tay này đảm bảo mọi hình
              ảnh chuyển động trên màn hình được hiển thị một cách mượt mà, trơn
              tru.
            </p>
          </div>

          <div className="mb-3">
            <h4 className="text-base font-medium">
              Cấu hình đáp ứng được nhu cầu chơi game: CPU Intel Core i5-11300H,
              RAM 8GB, ổ cứng 512GB SSD M.2 NVMe
            </h4>
            <div className="my-2">
              {listImg && listImg[3] && (
                <img
                  src={listImg[3].urlImage}
                  className="w-[90%] object-cover"
                />
              )}
            </div>
            <p className="text-sm font-normal ">
              Với sự tích hợp của bộ vi xử lý Intel Core i5-11300H, xung nhịp
              4.4 GHz,4 nhân 8 luồng và card đồ họa NVIDIA GeForce GTX 1650 4GB
              GDDR6, laptop ACER Nitro 5 AN515-56-51N4 (NH.QBZSV.002) có khả
              năng xử lý tốt các công việc đồ họa đơn giản trên các phần mềm
              chuyên dụng, tốc độ xử lý thông tin cũng tương đối nhanh và mượt.
            </p>
          </div>
        </div>
        {/* descrition */}

        {/* information product */}
        <div className="w-[30%] bg-white h-fit rounded-md">
          - CPU: Intel Core i5-11300H - Màn hình: 15.6" IPS (1920 x 1080), 144Hz
          - RAM: 1 x 8GB DDR4 3200MHz - Đồ họa: NVIDIA GeForce GTX 1650 4GB
          GDDR6 / Intel Iris Xe Graphics - Lưu trữ: 512GB SSD M.2 NVMe / - Hệ
          điều hành: Windows 10 Home 64-bit - 57 Wh Pin liền - Khối lượng: 2.2
          kg
        </div>
        {/* information product */}
      </div>
      {/* DESCRIPTION */}
    </motion.div>
  );
};

export default ProductView;
