import React from "react";
import {
  GrPersonalComputer,
  GrHostMaintenance,
  GrDatabase,
} from "react-icons/gr";
import { RiComputerLine } from "react-icons/ri";
import { BsCpu, BsSdCard } from "react-icons/bs";
import { CgSmartphoneRam } from "react-icons/cg";
import { GiComputerFan, GiApolloCapsule } from "react-icons/gi";
import { AiOutlineHdd } from "react-icons/ai";
import { Link } from "react-router-dom";
export const list = [
  {
    name: "laptop",
    slug: "/collections/laptop",
    icon: "GrPersonalComputer",
    img: "https://theme.hstatic.net/1000026716/1000440777/14/xxx21.png?v=24705",
  },
  {
    name: "pc - máy tính đồng bộ",
    slug: "/collections/pc",
    icon: "RiComputerLine",
    img: "https://theme.hstatic.net/200000397235/1000802136/14/xxx12.png?v=182",
  },
  {
    name: "mainboard",
    slug: "/collections/mainboard",
    icon: "GrHostMaintenance",
    img: "https://theme.hstatic.net/200000397235/1000802136/14/xxx13.png?v=182",
  },
  {
    name: " cpu - vi xử lí",
    slug: "/collections/cpu",
    icon: "BsCpu",
    img: "https://theme.hstatic.net/200000397235/1000802136/14/xxx14.png?v=182",
  },
  {
    name: " ram - bộ nhớ ngoài",
    slug: "/collections/ram",
    icon: "CgSmartphoneRam",
    img: "	https://theme.hstatic.net/200000397235/1000802136/14/xxx15.png?v=182",
  },
  {
    name: "vga - card màn hình",
    slug: "/collections/vga",
    icon: "GiComputerFan",
    img: "https://theme.hstatic.net/200000397235/1000802136/14/xxx16.png?v=182",
  },
  {
    name: "psu - nguồn máy tính",
    slug: "/collections/psu",
    icon: "GiApolloCapsule",
    img: "	https://theme.hstatic.net/200000397235/1000802136/14/xxx17.png?v=182",
  },
  {
    name: "hdd - ổ cứng pc",
    slug: "/collections/hdd",
    icon: "AiOutlineHdd",
    img: "https://theme.hstatic.net/200000397235/1000802136/14/xxx18.png?v=182",
  },
  {
    name: "ssd - ổ cứng pc",
    slug: "/collections/ssd",
    icon: "BsSdCard",
    img: "	https://theme.hstatic.net/200000397235/1000802136/14/xxx19.png?v=182",
  },
  {
    name: "vỏ case",
    slug: "/collections/case",
    icon: "GrDatabase",
    img: "	https://theme.hstatic.net/200000397235/1000802136/14/xxx110.png?v=182",
  },
];

const Menu = () => {
  return (
    <div className="xl:shadow-2xl shadow-none">
      <div className="xl:w-[186px] w-full bg-white rounded-md overflow-y-auto">
        {list.map((item, index) => {
          const Icon = list[index].icon;
          {
            /* console.log("check icon", Icon); */
          }
          return (
            <Link to={item.slug} key={index}>
              <div
                key={index}
                className="flex items-center px-3 py-2 text-[14px] mb-[10px] capitalize transition-all hover:bg-[#f3f5fc]
              hover:text-[#1435c3]"
              >
                {/* <Icon className="min-w-[22px] h-[22px]" />
                 */}
                <img
                  src={item.img}
                  width="25px"
                  className="min-w-[25px] h-[22px]"
                />
                <span className="ml-3 xl:line-clamp-1 break-normal text-left ">
                  {item.name}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
