import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { AiFillFolderAdd } from "react-icons/ai";
import Select from "react-select";
import * as moment from "moment";
import {
  MdOutlineUpdate,
  MdDeleteForever,
  MdSystemUpdateAlt,
} from "react-icons/md";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import Helmet from "../../common/Helmet";
const Voucher = () => {
  const [listBrand, setListBrand] = useState([]);
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  const [usage, setUsage] = useState("");
  const [minBill, setMinBill] = useState("");
  const [typeCost, setTypeCost] = useState("");
  const [date, setDate] = useState(new Date());
  const dateRef = useRef(null);

  const [id, setId] = useState(0);
  const [blockAdd, setBlockAdd] = useState(false);
  const [blockUpdate, setBlockUpdate] = useState(true);
  const [reRender, setReRender] = useState(0);
  const token = useSelector((state) => state.token.tokenDefault);
  const options = [
    { value: "true", label: "Phần trăm" },
    { value: "false", label: "Giá tiền" },
  ];
  useEffect(async () => {
    let res = await axios.get(
      "http://localhost:8085/api/v1/discount-code/get-all",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("check res get all data", res);
    if (res && res.data && res.data.data) {
      setListBrand(res.data.data);
    }
  }, [reRender]);

  const handleChangeSelect = (e) => {
    setTypeCost(e.value);
  };

  // console.log("check date", dateRef.current.value);

  const handleChangeDate = (e) => {
    let dateToFormat = e.target.value;

    let customDate = moment(dateToFormat).format("DD-MM-YYYY");
    setDate(customDate);
  };

  const handleAddCode = async () => {
    if (!name) {
      alert("Bạn chưa nhập mã voucher");
      return;
    }

    if (!link) {
      alert("Bạn chưa thêm giá trị voucher");
      return;
    }
    if (!usage) {
      alert("Bạn chưa thêm lượt sử dụng voucher");
      return;
    }

    if (!minBill) {
      alert("Bạn chưa thêm đơn tối thiểu để áp dụng voucher");
      return;
    }

    let dataState = {
      code: name,
      value: Number(link),
      expired: `${date} 00:00:00`,
      timeuses: Number(usage),
      minTotal: Number(minBill),
      typeCost: JSON.parse(typeCost),
    };

    console.log(dataState);

    let res = await axios({
      method: "POST",
      url: "http://localhost:8085/api/v1/discount-code/insert",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: dataState,
    });
    if (res && res.data && res.data.status === 200) {
      toast.success("Add voucher success");
      setName("");
      setLink("");
      setUsage("");
      setMinBill("");
      setDate("");
      setTypeCost(null);
      const random = Math.floor(Math.random() * 10000);
      setReRender(random);
    }
    console.log(res);
  };

  const handleRemove = async (id) => {
    console.log(id);
    let res = await axios({
      method: "DELETE",
      url: `http://localhost:8085/api/v1/discount-code/delete/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res && res.data && res.data.status === 200) {
      toast.success("Delete voucher success");
      const random = Math.floor(Math.random() * 10000);
      setReRender(random);
    }
    // console.log(res);
  };

  return (
    <Helmet title="Voucher">
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
          <div className="w-1/2 text-right text-xl font-semibold text-blue-700 uppercase">
            QUẢN LÍ voucher
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
        <div className="bg-slate-50 py-10 rounded-lg">
          <h3 className="ml-5 uppercase mb-5 font-medium text-xl">
            Thêm voucher
          </h3>
          <div className="px-10">
            <div className="flex items-center mb-5">
              <input
                className=" block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-[760px]"
                placeholder="Fill name category input..."
                type="text"
                name="search"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <h4 className="whitespace-nowrap uppercase ml-5 font-normal">
                mã voucher
              </h4>
            </div>
            <div className="flex items-center mb-5">
              <input
                className="block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-[760px]"
                placeholder="Fill link image input..."
                type="text"
                name="search"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
              <h4 className="whitespace-nowrap uppercase ml-5 font-normal">
                giá trị voucher
              </h4>
            </div>
            <div className="flex items-center mb-5">
              <input
                className="block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-[760px]"
                placeholder="Fill link image input..."
                type="text"
                name="search"
                value={usage}
                onChange={(e) => setUsage(e.target.value)}
              />
              <h4 className="whitespace-nowrap uppercase ml-5 font-normal">
                lượt sử dụng
              </h4>
            </div>
            <div className="flex items-center mb-5">
              <input
                className="block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-[760px]"
                placeholder="Fill link image input..."
                type="text"
                name="search"
                value={minBill}
                onChange={(e) => setMinBill(e.target.value)}
              />
              <h4 className="whitespace-nowrap uppercase ml-5 font-normal">
                đơn tối thiểu
              </h4>
            </div>
            <div className="flex items-center mb-5">
              <div className="w-[760px]">
                <Select
                  options={options}
                  onChange={(e) => {
                    handleChangeSelect(e);
                  }}
                />
              </div>
              <h4 className="whitespace-nowrap uppercase ml-5 font-normal">
                kiểu giảm giá
              </h4>
            </div>
            <div className="flex items-center mb-5">
              <input
                className="block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-[760px]"
                placeholder="Fill link image input..."
                type="date"
                name="search"
                value={date.toLocaleDateString}
                onChange={handleChangeDate}
                min="2022-01-01"
                max="2022-12-31"

                // ref={dateRef}
              />
              <h4 className="whitespace-nowrap uppercase ml-5 font-normal">
                ngày hết hạn
              </h4>
            </div>
            <div className="flex">
              <button
                className={`flex items-center mt-5 text-white bg-[#1435c3] px-5 py-2 rounded-md  transition-all mr-5 ${
                  blockAdd
                    ? "opacity-60 cursor-not-allowed"
                    : "hover:bg-slate-300 hover:text-[#1435c3]"
                }`}
                disabled={blockAdd ? true : false}
                onClick={handleAddCode}
              >
                <AiFillFolderAdd size={"30px"} />
                <div className="ml-2">Thêm</div>
              </button>
              {/* <button
                className={`flex items-center mt-5 text-white bg-[#1435c3] px-5 py-2 rounded-md  transition-all ${
                  blockUpdate
                    ? "opacity-60 cursor-not-allowed"
                    : "hover:bg-slate-300 hover:text-[#1435c3]"
                }`}
                onClick={handleUpdateBrand}
                disabled={blockUpdate ? true : false}
              >
                <MdSystemUpdateAlt size={"30px"} />
                <div className="ml-2">Cập nhật</div>
              </button> */}
            </div>
          </div>
        </div>
        {/* add product */}
        {/* table product */}
        <div className="my-10 bg-slate-50 rounded-md py-5">
          <p className="text-xl pb-3 flex items-center uppercase font-medium ">
            <i className="fas fa-list mr-3"></i> Danh Sách thương hiệu
          </p>
          <div>
            <table className="w-full">
              <thead className="bg-gray-800 text-white ">
                <tr>
                  <th className="w-[23%] text-left py-3 px-4 uppercase font-semibold text-sm text-center ">
                    Code
                  </th>
                  <th className="w-[23%] text-left py-3 px-4 uppercase font-semibold text-sm text-center">
                    Số lần sử dụng
                  </th>
                  <th className="w-[23%] text-left py-3 px-4 uppercase font-semibold text-sm text-center">
                    giá trị sử dụng
                  </th>
                  <th className="w-[23%] text-left py-3 px-4 uppercase font-semibold text-sm text-center">
                    hạn sử dụng
                  </th>

                  <th className="w-[8%] text-left py-3 px-4 uppercase font-semibold text-sm text-center"></th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {listBrand &&
                  listBrand.length > 0 &&
                  listBrand.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className="w-[23%] text-left py-3 px-4 text-center">
                          {item.code}
                        </td>
                        <td className="w-[23%] text-left py-3 px-4 text-center">
                          {item.timeuses}
                        </td>
                        <td className="w-[23%] text-left py-3 px-4 text-center">
                          {item.value}
                        </td>
                        <td className="w-[23%] text-left py-3 px-4 text-center">
                          {item.expired}
                        </td>

                        <td className="w-[5%] text-left py-3 px-4 text-center">
                          <MdDeleteForever
                            size="25px"
                            className="cursor-pointer"
                            onClick={() => handleRemove(item.id)}
                          />
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
        {/* table product */}
      </motion.div>
    </Helmet>
  );
};

export default Voucher;
