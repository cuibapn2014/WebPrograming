import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import Menu from "./common/Menu";

const slider = [
  "https://lh3.googleusercontent.com/RhNNGMK6jozMT1uG33aeAGn1liUPF0631PvFz0zhEpiK-ETKm74uICu1bcOPpeO5TPscRfNj2GGDLnuvI9JXX5snb1ZkSg7JxQ=rw-w1920",
  "https://lh3.googleusercontent.com/NMHOFg2n830tfgpXBoa1lFc88WBKRY8ESNh94BrUpX2Kze87CScoQ7wQGm57EFlbsbgM529m-s2FHlDzeehcOBCGOwx69sZpqQ=rw-w1920",
  "https://lh3.googleusercontent.com/cd5qfrscXQFFUdHhDVTo-9HcEL63cKWlLgPZnWFShjTFfdnXs-zeKJ6AVZxS3IxoPuuUlKRsiDPGh4pkqCK1usc1uP-wtNsRZQ=rw-w1920",
  "https://lh3.googleusercontent.com/K60P9sbgZ2FojvzLeHLd63oDc3HyWcPZhpeMb5k90LsaNFZteIiWMPze3GzA0a6J6XE0fbrPfiQr9xvMgePBcxz2Id2PgnDE=rw-w1920",
  "https://lh3.googleusercontent.com/XMrjDlfsYFQhmgpTiHeaSt5oexCO0DrkZIHSvubswJtJKi4_253SPbfz3ATunKPS6DBjMnWzZWRRC0QdxDsE4U4lTFYhxRws=rw-w1920",
];
const Banner = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        id="slider"
      >
        {slider.map((item, index) => {
          return (
            <key key={index}>
              <SwiperSlide key={index}>
                <div>
                  <img src={item} className="h-[500px] object-cover" />
                </div>
              </SwiperSlide>
            </key>
          );
        })}
        <div className="absolute top-[3%] z-10 left-10 xl:block hidden ">
          <Menu />
        </div>
        <div className="absolute top-[3%] right-10 z-10 xl:block hidden">
          <a
            href="https://phongvu.vn/cong-nghe/?pv_source=homepage&pv_medium=de-sub-banner-right"
            target="_blank"
          >
            <img
              src="https://lh3.googleusercontent.com/DkNx7tujFxE_u_HXMtnJnpiaLmSy8ldt9qpsvMtnNUh6P1t7bO2ONobgmPG-sh0F-udGPDPIbVfAjY_dcIjF6VPeLy1b7WoYzg=rw-w300"
              className="hover:scale-105 transition-all w-full overflow-hidden"
            />
          </a>
          {/* <a
            href="https://phongvu.vn/cong-nghe/?pv_source=homepage&pv_medium=de-sub-banner-right"
            target="_blank"
          >
            <img
              src="https://lh3.googleusercontent.com/0eQBvi3PCBbp4yVoK8gReFaxWSNjWh0dlj-RAKrOmcE0dxVZxJXwvOiZsoMK_fFQDDwb_A3hRBMsiFB_qp7_r4MKhuqZp4UI=rw-w400"
              className="hover:scale-105 transition-all w-full overflow-hidden mt-4"
            />
          </a> */}
        </div>
      </Swiper>
    </>
  );
};

export default Banner;
