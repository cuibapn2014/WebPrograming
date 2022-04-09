import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import Menu from "./common/Menu";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toogleIsMenu, isFalseMenu } from "../redux/actions";

const slider = [
  "https://lh3.googleusercontent.com/RhNNGMK6jozMT1uG33aeAGn1liUPF0631PvFz0zhEpiK-ETKm74uICu1bcOPpeO5TPscRfNj2GGDLnuvI9JXX5snb1ZkSg7JxQ=rw-w1920",
  "https://lh3.googleusercontent.com/NMHOFg2n830tfgpXBoa1lFc88WBKRY8ESNh94BrUpX2Kze87CScoQ7wQGm57EFlbsbgM529m-s2FHlDzeehcOBCGOwx69sZpqQ=rw-w1920",
  "https://lh3.googleusercontent.com/cd5qfrscXQFFUdHhDVTo-9HcEL63cKWlLgPZnWFShjTFfdnXs-zeKJ6AVZxS3IxoPuuUlKRsiDPGh4pkqCK1usc1uP-wtNsRZQ=rw-w1920",
  "https://lh3.googleusercontent.com/K60P9sbgZ2FojvzLeHLd63oDc3HyWcPZhpeMb5k90LsaNFZteIiWMPze3GzA0a6J6XE0fbrPfiQr9xvMgePBcxz2Id2PgnDE=rw-w1920",
  "https://lh3.googleusercontent.com/XMrjDlfsYFQhmgpTiHeaSt5oexCO0DrkZIHSvubswJtJKi4_253SPbfz3ATunKPS6DBjMnWzZWRRC0QdxDsE4U4lTFYhxRws=rw-w1920",
];
const Banner = () => {
  const hourRef = useRef(null);
  const minRef = useRef(null);
  const secRef = useRef(null);
  const timeRef = useRef(null);
  const stateMenu = useSelector((state) => state.stateMenu.isMenu);
  // console.log("banner ", stateMenu);
  const dispatch = useDispatch();

  useEffect(() => {
    const timeRef = setInterval(() => {
      var date = new Date();
      let hr = date.getHours();
      let mn = date.getMinutes();
      let sc = date.getSeconds();
      let totalSecond = hr * 3600 + mn * 60 + sc;
      var totalDay = 86400;

      let hr1 = Math.floor((totalDay - totalSecond) / 3600);
      if (hr1 < 10) {
        hr1 = `0${hr1}`;
      }
      let mn1 = Math.floor((totalDay - totalSecond - hr1 * 3600) / 60);
      if (mn1 < 10) {
        mn1 = `0${mn1}`;
      }
      let sc1 = Math.floor((totalDay - totalSecond) % 60);
      if (sc1 < 10) {
        sc1 = `0${sc1}`;
      }
      if (hr1) {
        hourRef.current.innerText = hr1;
      } else {
        hourRef.current.innerText = "00";
      }
      if (mn1) {
        minRef.current.innerText = mn1;
      } else {
        minRef.current.innerText = "00";
      }
      if (sc1) {
        secRef.current.innerText = sc1;
      } else {
        secRef.current.innerText = "00";
      }
    }, 1000);
    return () => {
      clearInterval(timeRef);
    };
  }, []);
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
        {/* <div className="absolute top-[3%] z-10 left-10 xl:block hidden ">
          <Menu />
        </div> */}
        <div className="absolute top-[3%] right-10 z-10 xl:block hidden">
          <div className="w-[200px] h-[200px] overflow-hidden rounded-md">
            <a
              href="https://phongvu.vn/cong-nghe/?pv_source=homepage&pv_medium=de-sub-banner-right"
              target="_blank"
            >
              <img
                src="https://lh3.googleusercontent.com/DkNx7tujFxE_u_HXMtnJnpiaLmSy8ldt9qpsvMtnNUh6P1t7bO2ONobgmPG-sh0F-udGPDPIbVfAjY_dcIjF6VPeLy1b7WoYzg=rw-w300"
                className="w-full h-full object-cover hover:scale-105 transition-all w-full "
              />
            </a>
          </div>
          <div
            className="w-[200px] h-[200px]  mt-4 overflow-hidden rounded-md"
            onClick={() => dispatch(isFalseMenu())}
          >
            <Link to="/huong-dan-thanh-toan">
              <img
                src="https://vinacheck.vn/media/2019/05/ma-qr-code_vinacheck.vm_001.jpg"
                className="w-full h-full object-cover hover:scale-105 transition-all w-full "
              />
            </Link>
          </div>
        </div>
      </Swiper>
      <div className="py-1 bg-slate-50 relative">
        <img src="https://cdn-vn.pushdy.com/_uploads/phongvu_live_teko/f5525bc1552647d5b1dd818414d4c568.png" />
        <div className="absolute top-[50%] transform translate-y-[-50%] lg:right-4 right-0">
          <div className="flex items-center md:flex-row flex-col">
            <h3 className="uppercase font-semibold mr-2 lg:text-lg text-base hidden md:block">
              flase sale :
            </h3>
            <div className="flex lg:flex">
              <h4
                ref={hourRef}
                className="lg:min-w-[40px] w-[20px] lg:py-2  px-1 py-1 bg-white mr-2 tracking-[0.1rem] text-[10px] lg:text-lg font-semibold rounded-md flex justify-center items-center"
              >
                00
              </h4>
              <h4
                ref={minRef}
                className="lg:min-w-[40px] w-[20px] lg:py-2 px-1 py-1 bg-white mr-2 tracking-[0.1rem] text-[10px] lg:text-lg font-semibold rounded-md flex justify-center items-center"
              >
                00
              </h4>
              <h4
                ref={secRef}
                className="lg:min-w-[40px] w-[20px] lg:py-2 px-1 py-1 bg-white mr-2 tracking-[0.1rem] text-[10px] lg:text-lg font-semibold rounded-md flex justify-center items-center"
              >
                00
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
