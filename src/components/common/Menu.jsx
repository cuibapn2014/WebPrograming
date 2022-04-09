import React, { useEffect, useState } from "react";
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
import axios from "axios";
export const list = [
  {
    id: 1,
    name: "laptop",
    slug: "/collections/laptop",
    icon: "GrPersonalComputer",
    img: "https://theme.hstatic.net/1000026716/1000440777/14/xxx21.png?v=24705",
  },
  {
    id: 2,
    name: "pc - máy tính đồng bộ",
    slug: "/collections/pc",
    icon: "RiComputerLine",
    img: "https://theme.hstatic.net/200000397235/1000802136/14/xxx12.png?v=182",
  },
  {
    id: 3,
    name: "mainboard",
    slug: "/collections/mainboard",
    icon: "GrHostMaintenance",
    img: "https://theme.hstatic.net/200000397235/1000802136/14/xxx13.png?v=182",
  },
  {
    id: 4,
    name: " cpu - vi xử lí",
    slug: "/collections/cpu",
    icon: "BsCpu",
    img: "https://theme.hstatic.net/200000397235/1000802136/14/xxx14.png?v=182",
  },
  {
    id: 5,
    name: " ram - bộ nhớ ngoài",
    slug: "/collections/ram",
    icon: "CgSmartphoneRam",
    img: "	https://theme.hstatic.net/200000397235/1000802136/14/xxx15.png?v=182",
  },
  {
    id: 6,
    name: "vga - card màn hình",
    slug: "/collections/vga",
    icon: "GiComputerFan",
    img: "https://theme.hstatic.net/200000397235/1000802136/14/xxx16.png?v=182",
  },
  {
    id: 7,
    name: "psu - nguồn máy tính",
    slug: "/collections/psu",
    icon: "GiApolloCapsule",
    img: "	https://theme.hstatic.net/200000397235/1000802136/14/xxx17.png?v=182",
  },
  {
    id: 8,
    name: "hdd - ổ cứng pc",
    slug: "/collections/hdd",
    icon: "AiOutlineHdd",
    img: "https://theme.hstatic.net/200000397235/1000802136/14/xxx18.png?v=182",
  },
  {
    id: 9,
    name: "ssd - ổ cứng pc",
    slug: "/collections/ssd",
    icon: "BsSdCard",
    img: "	https://theme.hstatic.net/200000397235/1000802136/14/xxx19.png?v=182",
  },
  {
    id: 10,
    name: "vỏ case",
    slug: "/collections/case",
    icon: "GrDatabase",
    img: "	https://theme.hstatic.net/200000397235/1000802136/14/xxx110.png?v=182",
  },
];

const Menu = () => {
  const [listMenu, setListMenu] = useState([]);
  // console.log("check menu", listMenu);
  useEffect(async () => {
    let res = await axios.get("http://localhost:8085/api/v1/category/get-all");
    if (res && res.data && res.data.data) {
      setListMenu(res.data.data);
    }
  }, []);
  return (
    <div className="xl:shadow-2xl shadow-none">
      <div
        id="menu"
        className="xl:w-[186px] w-full h-[470px] bg-white rounded-md overflow-y-auto"
      >
        {listMenu &&
          listMenu.map((item, index) => {
            {
              /* const Icon = list[index].icon; */
            }
            {
              /* console.log("check icon", Icon); */
            }
            return (
              <Link to={`/collections/${item.name}/${item.id}`} key={index}>
                <div
                  key={index}
                  className="flex items-center px-3 py-2 text-[14px] mb-[10px] capitalize transition-all hover:bg-[#f3f5fc]
              hover:text-[#1435c3]"
                >
                  {/* <Icon className="min-w-[22px] h-[22px]" />
                   */}
                  <img
                    src={item.icon}
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
