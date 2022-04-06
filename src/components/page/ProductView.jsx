import React, { useRef, useState } from "react";
import { AiOutlineGift, AiOutlineSetting } from "react-icons/ai";
import { MdOutlineLocalShipping, MdLaptopWindows } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { BsShieldCheck } from "react-icons/bs";
import { RiExchangeLine } from "react-icons/ri";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

const ProductView = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [img1, setImg1] = useState(true);
  const [img2, setImg2] = useState(false);
  const [img3, setImg3] = useState(false);
  const [img4, setImg4] = useState(false);
  const [img5, setImg5] = useState(false);

  return (
    <div className="bg-slate-50">
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
              <SwiperSlide>
                <img src="https://lh3.googleusercontent.com/c7VuA4P8sHHJCilfzRVp50AQmgZEkJOyOCuh4vvkcT9jxfqTzZVd2gepUFSSqzXVSEljnYlAN319sJD-H1IztNcxPT3UypA=w1000-rw" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://lh3.googleusercontent.com/VpJgldxtdddsmBwMTP0iqPG4-W0WAKCTFE3iYe7XUaXUhvFvePH514GCSoH2TDLHiMOYxKSzRh7hCsmdM1429r-tk_8haRUr3Q=w1000-rw" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://lh3.googleusercontent.com/kpxJEY3p1mLKsaiQdUuL8gK_JPyrawmy_oxRXlU9b_p9TrrPo3hQOBhlXXutOyDABYTmxgnuuDkutPg0VgbUls42ctkH5WXY=w1000-rw" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://lh3.googleusercontent.com/_8W1EMpxpcb_lDJ-nhGMxsqP-ja6GW8iZHwREklHxrkkHcZxEKJTEyaRq817_McgSwXR0e0dQpvl2DxrjumLjU8-3L6u4xpI=w1000-rw" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://lh3.googleusercontent.com/eOT1uNpQy6j-EBoWZTZfelVhvIppYxHOUv27da3RWHyZAj89Wtf1p-qxmVNZnrnkyE8-k9mXQB_r3f19Z1dA5Oy2fgM3lOws=w1000-rw" />
              </SwiperSlide>
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
              <SwiperSlide
                className={`${img1 ? "active-border" : ""} cursor-pointer`}
                onClick={() => {
                  setImg1(true);
                  setImg2(false);
                  setImg3(false);
                  setImg4(false);
                  setImg5(false);
                }}
              >
                <img src="https://lh3.googleusercontent.com/c7VuA4P8sHHJCilfzRVp50AQmgZEkJOyOCuh4vvkcT9jxfqTzZVd2gepUFSSqzXVSEljnYlAN319sJD-H1IztNcxPT3UypA=w1000-rw" />
              </SwiperSlide>
              <SwiperSlide
                className={`${img2 ? "active-border" : ""} cursor-pointer`}
                onClick={() => {
                  setImg1(false);
                  setImg2(true);
                  setImg3(false);
                  setImg4(false);
                  setImg5(false);
                }}
              >
                <img src="https://lh3.googleusercontent.com/VpJgldxtdddsmBwMTP0iqPG4-W0WAKCTFE3iYe7XUaXUhvFvePH514GCSoH2TDLHiMOYxKSzRh7hCsmdM1429r-tk_8haRUr3Q=w1000-rw" />
              </SwiperSlide>
              <SwiperSlide
                className={`${img3 ? "active-border" : ""} cursor-pointer`}
                onClick={() => {
                  setImg1(false);
                  setImg2(false);
                  setImg3(true);
                  setImg4(false);
                  setImg5(false);
                }}
              >
                <img src="https://lh3.googleusercontent.com/kpxJEY3p1mLKsaiQdUuL8gK_JPyrawmy_oxRXlU9b_p9TrrPo3hQOBhlXXutOyDABYTmxgnuuDkutPg0VgbUls42ctkH5WXY=w1000-rw" />
              </SwiperSlide>
              <SwiperSlide
                className={`${img4 ? "active-border" : ""} cursor-pointer`}
                onClick={() => {
                  setImg1(false);
                  setImg2(false);
                  setImg3(false);
                  setImg4(true);
                  setImg5(false);
                }}
              >
                <img src="https://lh3.googleusercontent.com/_8W1EMpxpcb_lDJ-nhGMxsqP-ja6GW8iZHwREklHxrkkHcZxEKJTEyaRq817_McgSwXR0e0dQpvl2DxrjumLjU8-3L6u4xpI=w1000-rw" />
              </SwiperSlide>
              <SwiperSlide
                className={`${img5 ? "active-border" : ""} cursor-pointer`}
                onClick={() => {
                  setImg1(false);
                  setImg2(false);
                  setImg3(false);
                  setImg4(false);
                  setImg5(true);
                }}
              >
                <img src="https://lh3.googleusercontent.com/eOT1uNpQy6j-EBoWZTZfelVhvIppYxHOUv27da3RWHyZAj89Wtf1p-qxmVNZnrnkyE8-k9mXQB_r3f19Z1dA5Oy2fgM3lOws=w1000-rw" />
              </SwiperSlide>
            </Swiper>
          </div>
          {/* block1.1 */}
          {/* block 1.2 */}
          <div className="md:w-[60%] w-full ">
            <div className="pb-4">
              <h2 className="text-[22px] font-medium">
                Laptop MSI GF63 Thin 11SC 662VN ( 15.6" Full HD/ 144Hz/Intel
                Core i7-11800H/8GB/512GB SSD/NVIDIA GeForce GTX 1650/Windows 11
                Home/1.9kg)
              </h2>
              <div className="flex items-center text-sm text-[#82869E] mt-2">
                <p className="mr-5">
                  Thương hiệu : <span className="text-[#1435c3]">MSI</span>
                </p>
                <span className="uppercase">SKU: 220303310</span>
              </div>
              <div className="mt-4">
                <div className="text-xl text-[#1435c3] font-semibold mb-1">
                  22.490.000
                </div>
                <div className="text-xs text-[#82869E] line-through">
                  23.990.000
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
              <div className="w-[48%] bg-[#1435c3] hover:bg-white text-white hover:text-[#1435c3] transition-all uppercase text-center rounded-md py-2 cursor-pointer hover:border hover:border-[#1435c3] text-[10px] md:text-base">
                mua ngay
              </div>
              <div className="w-[48%] bg-white hover:bg-[#1435c3] text-[#1435c3] hover:text-white transition-all border border-[#1435c3] uppercase text-center rounded-md py-2 cursor-pointer text-[10px] md:text-base">
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
              <img
                src="https://lh5.googleusercontent.com/j_m7OgDqv7eSu3hk1jPbCAfsvX-Y3XtvFRp_GSh0NSqqVo69rCnUSiFk-Nv-EKL-4Yj6qTssjUa0vMr6zjRS5MbTWyMGP4Tu0gGDIAYWFMQgfXlxv3fxz-Onl233UR4HEA"
                className="w-[90%] object-cover"
              />
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
              <img
                src="https://file.hstatic.net/1000026716/file/nitro5_an515-57_bl_bk_01d_d01709aeaa754ee69544cc111f71babd_1024x1024.jpg"
                className="w-[90%] object-cover"
              />
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
              <img
                src="https://file.hstatic.net/1000026716/file/nitro5_an515-57_bl_bk_05_4b8bfe220e2745bfa982bf8d5bb9877a_1024x1024.jpg"
                className="w-[90%] object-cover"
              />
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
              <img
                src="https://file.hstatic.net/1000026716/file/nitro5_an515-57_bl_bk_04d_854ebf0a283042479d91f70ceb2a8d33_1024x1024.jpg"
                className="w-[90%] object-cover"
              />
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
    </div>
  );
};

export default ProductView;
