import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { CKEditor } from "ckeditor4-react";
import jwt_decode from "jwt-decode";
import Helmet from "../common/Helmet";
const listShowRoom = [
  {
    name: "Showroom Phong Vũ Nguyễn Thị Minh Khai, Quận 3",
    address:
      "264A - 264B - 264C Nguyễn Thị Minh Khai, Phường Võ Thị Sáu, Quận 3, TP.HCM",
    hotline: "0287309089",
    img: "https://img1.phongvu.vn/media/wysiwyg/phongvu/pv-showroom/pv-showroom-3.jpg",
    link: "https://www.google.com/maps/place/Phong+V%C5%A9/@10.7739056,106.6871851,17z/data=!3m1!4b1!4m5!3m4!1s0x31752f3b5e579381:0xbad3d6d98221b778!8m2!3d10.7739003!4d106.6893738?shorturl=1",
  },
  {
    name: "Showroom Phong Vũ Phú Lợi, Bình Dương",
    address:
      "408 Đại lộ Bình Dương, P. Phú Lợi, TP. Thủ Dầu Một, Tỉnh Bình Dương",
    hotline: "02747306867",
    img: "https://img1.phongvu.vn/media/wysiwyg/phongvu/pv-showroom/pv-showroom-4.jpg",
    link: "https://www.google.com/maps/place/Phong+Vu%CC%83/@10.7965911,106.6474378,19.75z/data=!4m8!1m2!2m1!1zc-G7kSAyIGhvw6BuZyBob2EgdGjDoW0!3m4!1s0x317529373efa7abb:0x8266edb2e46cf50c!8m2!3d10.7964629!4d106.6470598?utm_medium=s2sms&shorturl=1",
  },
  {
    name: "Showroom Phong Vũ Hoàng Hoa Thám - Quận Tân Bình",
    address: "Số 2 Hoàng Hoa Thám, phường 12, Quận Tân Bình, TP.HCM",
    hotline: "02873026867",
    img: "https://img1.phongvu.vn/media/wysiwyg/0Landing/HHT_PV_amp.png",
    link: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x317529373efa7abb:0x8266edb2e46cf50c?source=g.page.share",
  },
  {
    name: "Showroom Phong Vũ Hậu Giang - Quận 6",
    address: "1081C Hậu Giang, P.11, Q.6, TP.HCM",
    hotline: "02873036867",
    img: "https://img1.phongvu.vn/media/wysiwyg/phongvu/pv-showroom/pv-showroom-7.jpg",
    link: "https://www.google.com/maps/place/Phong+V%C5%A9/@10.7451723,106.6214773,17z/data=!3m1!4b1!4m5!3m4!1s0x31752dd40fbc98ef:0x955253ee205c02c5!8m2!3d10.745167!4d106.623666?shorturl=1",
  },
];
const ShowRoom = () => {
  const [data, setData] = useState("");
  // const [search, setSearch] = useState("");
  const inputRef = useRef(null);

  const onKeyDown = (event) => {
    // 'keypress' event misbehaves on mobile so we track 'Enter' key via 'keydown' event
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      console.log("check search", inputRef.current.value);
    }
  };
  return (
    <Helmet title="ShowRoom">
      <motion.div
        className="bg-slate-50 px-14"
        initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
        animate={{ clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)" }}
        exit={{
          clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
          transition: { duration: 0.1 },
        }}
      >
        <div className="">
          <div>
            <input
              // className="comment-input"
              // aria-multiline="true"
              // role="textbox"
              // contentEditable={true}
              onKeyDown={onKeyDown}
              ref={inputRef}
            />
          </div>
          <h1 className="uppercase text-center py-8 text-xl font-medium">
            hệ thống showroom
          </h1>
          <div className=" shadow-xl ">
            {listShowRoom.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex lg:p-5 p-1 flex-col lg:flex-row bg-white text-center "
                >
                  <div className="lg:w-3/6 md:w-full  relative group transition-all]">
                    <a href={item.link} target="_blank">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="rounded-lg mx-auto"
                      />

                      <div className=" text-[white] rounded-lg absolute  inset-0  bg-[#0e0d0d] cursor-pointer opacity-70 invisible w-0 group-hover:visible group-hover:w-full  transition-all">
                        <span className="absolute top-[50%] transform translate-x-[-50%]">
                          Click để xem chi tiết bản đồ
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="lg:w-3/6 md:w-full text-left pl-3 mt-5">
                    <h2 className="font-medium pb-2">{item.name}</h2>
                    <p>Địa chỉ : {item.address}</p>
                    <p>
                      Tư vấn mua hàng miễn phí : 18006867 - Điện thoại :{" "}
                      {item.hotline}
                    </p>
                    <span>Thời gian làm việc : 08h00 - 21h30</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </Helmet>
  );
};

export default ShowRoom;
