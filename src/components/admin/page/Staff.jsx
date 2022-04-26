import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { RiDeleteBin5Line } from "react-icons/ri";
import { MdOutlineUpdate, MdDeleteForever } from "react-icons/md";
import { useSelector } from "react-redux";
import axios from "axios";
import Helmet from "../../common/Helmet";
const Staff = () => {
  const [listUser, setListUser] = useState([]);
  const token = useSelector((state) => state.token.tokenDefault);

  console.log("check listuser", listUser);

  useEffect(async () => {
    let res = await axios.get("http://localhost:8085/api/v1/user/get-all", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res && res.data && res.data.data) {
      setListUser(res.data.data);
    }
    // console.log("check list user", res);
  }, []);

  return (
    <Helmet title="Nhân Viên">
      <motion.div
        className="px-10"
        initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
        animate={{ clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)" }}
        exit={{
          clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
          transition: { duration: 0.3 },
        }}
      >
        <header className="w-full items-center bg-white py-2 px-6 hidden sm:flex">
          <div className="w-1/2 text-right text-xl font-semibold text-blue-700 ">
            QUẢN LÍ NHÂN VIÊN
          </div>
          <div
            //   x-data="{ isOpen: false }"
            className="relative w-1/2 flex justify-end"
          >
            <button className="relative z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none">
              <img src="https://genk.mediacdn.vn/2018/11/26/john-cena-fashion-15431990207761255377744.jpg" />
            </button>
            {/* <button className="h-full w-full fixed inset-0 cursor-default"></button> */}
            <div
              // x-show="isOpen"
              className="absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16 hidden"
            >
              <a
                href="#"
                className="block px-4 py-2 account-link hover:text-white"
              >
                Account
              </a>

              <a
                href="#"
                className="block px-4 py-2 account-link hover:text-white"
              >
                Sign Out
              </a>
            </div>
          </div>
        </header>

        {/* add product */}

        {/* add product */}
        {/* table product */}
        <div className="my-10 bg-slate-50 rounded-md py-5">
          <p className="text-xl pb-3 flex items-center uppercase font-medium ">
            <i className="fas fa-list mr-3"></i> Danh Sách Nhân Viên
          </p>
          <div>
            <table>
              <thead className="bg-gray-800 text-white ">
                <tr>
                  <th className="w-[18%] text-left py-3 px-4 uppercase font-semibold text-sm text-center ">
                    Tên
                  </th>
                  <th className="w-[18%] text-left py-3 px-4 uppercase font-semibold text-sm text-center">
                    Họ
                  </th>
                  <th className="w-[18%] text-left py-3 px-4 uppercase font-semibold text-sm text-center">
                    số điện thoại
                  </th>
                  <th className="w-[18%] text-left py-3 px-4 uppercase font-semibold text-sm text-center">
                    email
                  </th>
                  <th className="w-[18%] text-left py-3 px-4 uppercase font-semibold text-sm text-center">
                    Chức vụ
                  </th>

                  <th className="w-[5%] text-left py-3 px-4 uppercase font-semibold text-sm text-center"></th>
                  <th className="w-[5%] text-left py-3 px-4 uppercase font-semibold text-sm text-center"></th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {listUser &&
                  listUser.length > 0 &&
                  listUser.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className="w-[18%] text-left py-3 px-4 text-center capitalize  ">
                          {item.userProfile.firstName}
                        </td>
                        <td className="w-[18%] text-left py-3 px-4 text-center capitalize ">
                          {item.userProfile.lastName || "Lê"}
                        </td>
                        <td className="w-[18%] text-left py-3 px-4 text-center">
                          {item.userProfile.phoneNumber || "0941099504"}
                        </td>
                        <td className="w-[18%] text-left py-3 px-4 text-center">
                          {item.email}
                        </td>
                        <td className="w-[18%] text-left py-3 px-4 text-center">
                          {item.role.name}
                        </td>

                        <td className="w-[5%] text-left py-3 px-4 text-center">
                          <MdDeleteForever size="25px" />
                        </td>
                        <td className="w-[5%] text-left py-3 px-4 text-center">
                          <MdOutlineUpdate size="25px" />
                        </td>
                      </tr>
                    );
                  })}
                {/* <tr>
                <td className="w-1/6 text-left py-3 px-4 text-center">
                  Lê Hoàng
                </td>
                <td className="w-1/6 text-left py-3 px-4 text-center">Nhân</td>
                <td className="w-1/6 text-left py-3 px-4 text-center">
                  0961944528
                </td>
                <td className="w-1/6 text-left py-3 px-4 text-center">
                  an123@gmail.com
                </td>
                <td className="w-1/6 text-left py-3 px-4 text-center">Admin</td>

                <td className="w-1/6 text-left py-3 px-4 text-center">
                  <MdDeleteForever size="25px" />
                </td>
                <td className="w-1/6 text-left py-3 px-4 text-center">
                  <MdOutlineUpdate size="25px" />
                </td>
              </tr> */}
              </tbody>
            </table>
          </div>
        </div>
        {/* table product */}
      </motion.div>
    </Helmet>
  );
};

export default Staff;
