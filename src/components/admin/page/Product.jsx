import React, { useEffect, useState } from "react";
import Select from "react-select";
import { CKEditor } from "ckeditor4-react";
import { motion } from "framer-motion";
import { AiFillFolderAdd } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdOutlineUpdate, MdDeleteForever } from "react-icons/md";
import { useSelector } from "react-redux";
import axios from "axios";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const Product = () => {
  const [data, setData] = useState("");
  const [page, setPage] = useState(1);
  const [allPage, setAllPage] = useState([]);
  const [listProduct, setListProduct] = useState([]);
  const [optionBrand, setOptionBrand] = useState([]);
  const [optionCategory, setOptionCategory] = useState([]);

  // console.log(listProduct);
  const token = useSelector((state) => state.token.tokenDefault);
  // console.log("check allpage", allPage);
  useEffect(async () => {
    let res = await axios.get(
      `http://localhost:8085/api/v1/product/get-all/?page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (res && res.data && res.data.data) {
      setListProduct(res.data);
    }
  }, [page]);

  useEffect(() => {
    let page = [];
    if (listProduct) {
      let arr = listProduct.total / 10;
      for (let i = 0; i < arr; i++) {
        page.push(i);
      }
      setAllPage(page);
    }
  }, [listProduct]);

  useEffect(async () => {
    let res = await axios.get("http://localhost:8085/api/v1/category/get-all", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res && res.data && res.data.data) {
      let customCategory = res.data.data.map((item, index) => {
        return {
          value: item.name,
          label: item.name,
          id: item.id,
        };
      });
      setOptionCategory(customCategory);
      // console.log(customCategory);
    }
  }, [listProduct]);

  useEffect(async () => {
    let res = await axios.get("http://localhost:8085/api/v1/brand/get-all", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res && res.data && res.data.data) {
      let customBrand = res.data.data.map((item, index) => {
        return {
          value: item.brandName,
          label: item.brandName,
          id: item.id,
        };
      });
      setOptionBrand(customBrand);
      // console.log(res.data.data);
    }
  }, [listProduct]);

  const priceSplitter = (number) =>
    number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  const handleChange = (e) => {
    setData(e.editor.getData());
    console.log(e.editor.getData());
  };

  const handleChangeBrand = (e) => {
    console.log(e);
  };

  const handleChangeCategory = (e) => {
    console.log(e);
  };

  const handleRemove = (id) => {
    console.log("check id : ", id);
  };
  return (
    <motion.div
      className="pr-10"
      initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
      animate={{ clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)" }}
      exit={{
        clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
        transition: { duration: 0.3 },
      }}
    >
      <header className="w-full items-center bg-white py-2 px-6 hidden sm:flex">
        <div className="w-1/2 text-right text-xl font-semibold text-blue-700 ">
          QUẢN LÍ SẢN PHẨM
        </div>
        <div
          //   x-data="{ isOpen: false }"
          className="relative w-1/2 flex justify-end"
        >
          <button className="relative z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none">
            <img src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-9/166314538_970652070138231_8558537778400875287_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=8NMHbeJ_gLMAX-sknjL&_nc_ht=scontent.fsgn2-4.fna&oh=00_AT8io7R2WE4Wfd_KKCn8KO30MZ0smKRSvHpZyzbURUW3vQ&oe=626719AB" />
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
          Thêm sản phẩm
        </h3>
        <div className="px-10">
          <div className="flex items-center mb-5">
            <input
              className=" block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-[830px]"
              placeholder="Fill name product input..."
              type="text"
              name="search"
            />
            <h4 className="whitespace-nowrap uppercase ml-5 font-normal">
              tên sản phẩm
            </h4>
          </div>
          <div className="flex items-center mb-5">
            <input
              className="block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-[830px]"
              placeholder="Fill price product input..."
              type="text"
              name="search"
            />
            <h4 className="whitespace-nowrap uppercase ml-5 font-normal">
              giá
            </h4>
          </div>
          <div className="flex items-center mb-5">
            <div className="w-[830px]">
              <Select
                options={optionBrand}
                className="capitalize"
                placeholder="Select brand product..."
                onChange={(e) => {
                  handleChangeBrand(e);
                }}
              />
            </div>
            <h4 className="whitespace-nowrap uppercase ml-5 font-normal">
              thương hiệu
            </h4>
          </div>
          <div className="flex items-center mb-5">
            <div className="w-[830px]">
              <Select
                className="capitalize"
                options={optionCategory}
                placeholder="Select category product..."
                onChange={(e) => {
                  handleChangeCategory(e);
                }}
              />
            </div>
            <h4 className="whitespace-nowrap uppercase ml-5 font-normal">
              danh mục
            </h4>
          </div>
          <div>
            <h4 className="mb-5 uppercase">Mô tả</h4>
            <CKEditor
              initData={<p>Please fill in descrition of product view </p>}
              onChange={(e) => {
                handleChange(e);
              }}
              //   value={data}
            />
          </div>
          <button className="flex items-center mt-5 text-white bg-[#1435c3] px-5 py-2 rounded-md hover:bg-slate-300 hover:text-[#1435c3] transition-all">
            <AiFillFolderAdd size={"30px"} />
            <div className="ml-2">Thêm</div>
          </button>
        </div>
      </div>
      {/* add product */}
      {/* table product */}
      <div className="my-10 bg-slate-50 rounded-md py-5">
        <p className="text-xl pb-3 flex items-center uppercase font-medium ">
          <i className="fas fa-list mr-3"></i> Danh Sách Sản Phẩm
        </p>
        <div>
          <table>
            <thead className="bg-gray-800 text-white ">
              <tr>
                <th className="w-24 text-left py-3 px-4 uppercase font-semibold text-sm text-center ">
                  ID
                </th>
                <th className="w-1/6 text-left py-3 px-4 uppercase font-semibold text-sm text-center">
                  Tên
                </th>
                <th className="w-1/6 text-left py-3 px-4 uppercase font-semibold text-sm text-center">
                  Mô Tả
                </th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm text-center">
                  Thương Hiệu
                </th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm text-center">
                  Giá
                </th>
                <th className="w-1/6 text-left py-3 px-4 uppercase font-semibold text-sm text-center">
                  Danh Mục
                </th>
                <th className="w-1/6 text-left py-3 px-4 uppercase font-semibold text-sm text-center"></th>
                <th className="w-1/6 text-left py-3 px-4 uppercase font-semibold text-sm text-center"></th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {listProduct &&
                listProduct.data &&
                listProduct.data.length > 0 &&
                listProduct.data.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="w-1/6 text-left py-3 px-4 text-center">
                        {item.id}
                      </td>
                      <td className="w-1/6 text-left py-3 px-4 text-center">
                        {item.title}
                      </td>
                      <td className="w-1/6 text-left py-3 px-4 text-center">
                        {item.description}
                      </td>
                      <td className="w-1/6 text-left py-3 px-4 text-center">
                        {item.brand.brandName}
                      </td>
                      <td className="w-1/6 text-left py-3 px-4 text-center">
                        {priceSplitter(item.price)}đ
                      </td>
                      <td className="w-1/6 text-left py-3 px-4 text-center">
                        {item.category.name}
                      </td>
                      <td className="w-1/6 text-left py-3 px-4 text-center">
                        <MdDeleteForever
                          className="cursor-pointer"
                          size="25px"
                          onClick={() => {
                            handleRemove(item.id);
                          }}
                        />
                      </td>
                      <td className="w-1/6 text-left py-3 px-4 text-center">
                        <MdOutlineUpdate size="25px" />
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        {/* <div className="mt-5 mx-auto">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded mr-3">
            1
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded mr-3">
            2
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
            3
          </button>
        </div> */}
      </div>
      <div className="my-5 text-center">
        {allPage &&
          allPage.length > 0 &&
          allPage.map((item, index) => {
            return (
              <button
                key={index}
                className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded mr-3"
                onClick={() => setPage(index + 1)}
              >
                {item + 1}
              </button>
            );
          })}
      </div>
      {/* table product */}
    </motion.div>
  );
};

export default Product;
