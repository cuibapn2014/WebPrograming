import React, { useEffect, useRef, useState } from "react";
import Select from "react-select";
import { CKEditor } from "ckeditor4-react";
import { motion } from "framer-motion";
import { AiFillFolderAdd, AiFillPlusSquare } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdOutlineUpdate, MdDeleteForever } from "react-icons/md";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

// const options = [
//   { value: "chocolate", label: "Chocolate" },
//   { value: "strawberry", label: "Strawberry" },
//   { value: "vanilla", label: "Vanilla" },
// ];
const Product = () => {
  const [data, setData] = useState("");
  const [page, setPage] = useState(1);
  const [allPage, setAllPage] = useState([]);
  const [listProduct, setListProduct] = useState([]);
  const [optionBrand, setOptionBrand] = useState([]);
  const [optionCategory, setOptionCategory] = useState([]);
  const [qtyInput, setQtyInput] = useState(0);
  const [bobbImg, setBobbImg] = useState();
  // console.log("check bbob", bobbImg);
  const [customArrayQtyInput, setCustomArrayQtyInput] = useState([]);

  // console.log("check arr input", customArrayQtyInput);
  const [inputImg, setInputImg] = useState([]);
  const [inputSave, setInputSave] = useState([]);

  const [nameAtrr, setNameAtrr] = useState("");
  const [valueAtrr, setValueAtrr] = useState("");

  const [saveAtrr, setSaveAtrr] = useState([]);
  // console.log("check arr atrr", saveAtrr);

  console.log("check arr imgState", inputSave);
  // console.log("check type of arr imgs", Array.isArray(inputSave));

  //data post api
  const [nameProduct, setNameProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [discountProduct, setDisCountProduct] = useState("");
  const [brandProduct, setBrandProduct] = useState("");
  const [categoryProduct, setCategoryProduct] = useState("");
  //data post api

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

  useEffect(() => {
    let arrQty = [];
    for (let i = 0; i < qtyInput; i++) {
      arrQty.push(i);
    }
    setCustomArrayQtyInput(arrQty);
  }, [qtyInput]);

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
    setBrandProduct(e.id);
    console.log(e);
  };

  const handleChangeCategory = (e) => {
    setCategoryProduct(e.id);
    console.log(e);
  };

  const handleRemove = (id) => {
    console.log("check id : ", id);
  };

  // const handleQtyInput = () => {
  //   if (inputImg) {
  //     const arrCopy = inputSave;
  //     arrCopy.push(inputImg);

  //     setInputSave(arrCopy);
  //     setInputImg("");
  //   }
  // };

  const handleQtyAtrr = () => {
    if (nameAtrr && valueAtrr) {
      const arrCopy = saveAtrr;
      arrCopy.push({
        name: nameAtrr,
        value: valueAtrr,
      });
      setSaveAtrr(arrCopy);
      setNameAtrr("");
      setValueAtrr("");
    }
  };

  const submitAddProduct = async () => {
    // let customArr;
    // if (inputSave && inputSave.length > 0) {
    //   customArr = inputSave.map((item, index) => {
    //     return {
    //       urlImage: item,
    //     };
    //   });
    // }
    // const dataCustom = {
    //   title: nameProduct,
    //   descrition: data,
    //   quantity: 50,
    //   price: priceProduct,
    //   discount: discountProduct,
    //   brand: {
    //     id: brandProduct,
    //   },
    //   category: {
    //     id: categoryProduct,
    //   },
    //   attribute: saveAtrr,
    //   image: customArr,
    // };

    const dataAppen = new FormData();

    dataAppen.append("title", nameProduct);
    dataAppen.append("price", priceProduct);
    dataAppen.append("discount", discountProduct);
    dataAppen.append("description", data);
    dataAppen.append("quantity", 50);
    dataAppen.append("brandID", brandProduct);
    dataAppen.append("categoryID", categoryProduct);
    // if (inputSave && inputSave.length > 0) {
    //   inputSave.forEach((item) => {
    //     console.log("check qty img", item);
    //     dataAppen.append("image", item);
    //   });
    // }
    if (inputSave && inputSave.length > 0) {
      console.log("check type of arr imgs", Array.isArray(inputSave));

      inputSave.forEach((item) => {
        console.log("check qty img", item);
        dataAppen.append("image", item);
      });
    }

    if (saveAtrr && saveAtrr.length > 0) {
      saveAtrr.forEach((item) => {
        let customValue = `${item.name}:${item.value}`;
        // console.log("check value custom attr", customValue);
        dataAppen.append("attribute", customValue);
      });
    }

    // console.log("check name", nameProduct);
    // console.log("check price", priceProduct);
    // console.log("check discount", discountProduct);
    // console.log("check brand", brandProduct);
    // console.log("check category", categoryProduct);
    // console.log("check image", inputSave);
    // console.log("check attribute", saveAtrr);
    // console.log("check description", data);

    // console.log("check custom data", dataCustom);
    let res = await axios({
      method: "POST",
      url: "http://localhost:8085/api/v1/product/insert",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: dataAppen,
    });
    console.log("check addproduct res", res);
    if (res && res.data && res.data.data) {
      toast.success("Add product success");
      setNameProduct("");
      setPriceProduct("");
      setDisCountProduct("");
    }
  };

  // useEffect(() => {
  //   // create the preview
  //   const objectUrl = URL.createObjectURL(bobbImg);
  //   console.log("check bobb", objectUrl);
  //   setPreview(objectUrl);

  //   // free memory when ever this component is unmounted
  //   return () => URL.revokeObjectURL(objectUrl);
  // }, [bobbImg]);

  // useEffect(() => {
  //   return () => {
  //     bobbImg && URL.revokeObjectURL(bobbImg.preview);
  //   };
  // }, [bobbImg]);

  const handlePreviewBobb = (e) => {
    // const file = e.target.files[0];
    // file.preview = URL.createObjectURL(file);
    const fileList = e.target.files;
    const customFileList = [...fileList];
    // console.log("check custom fileList", customFileList);
    setInputSave([...inputSave, ...customFileList]);
  };

  const increaseQtyImg = () => {};

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
              value={nameProduct}
              onChange={(e) => setNameProduct(e.target.value)}
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
              value={priceProduct}
              onChange={(e) => setPriceProduct(e.target.value)}
            />
            <h4 className="whitespace-nowrap uppercase ml-5 font-normal">
              giá
            </h4>
          </div>
          <div className="flex items-center mb-5">
            <input
              className="block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-[830px]"
              placeholder="Fill price product input..."
              type="text"
              name="search"
              value={discountProduct}
              onChange={(e) => setDisCountProduct(e.target.value)}
            />
            <h4 className="whitespace-nowrap uppercase ml-5 font-normal">
              giảm giá
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

          {/* hình ảnh */}
          <div className="flex items-center  mb-5">
            <input
              className="block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-[830px]"
              placeholder="Fill link image product input..."
              type="file"
              // name="search"
              // value={inputImg}
              onChange={handlePreviewBobb}
              multiple={true}
            />

            <AiFillPlusSquare
              size="30px"
              className="hover:opacity-75 cursor-pointer ml-5"
              onClick={increaseQtyImg}
            />
          </div>

          {/* <div className="mb-5"> */}
          {/* {inputSave &&
              inputSave.length > 0 &&
              inputSave.map((item, index) => {
                return (
                  <div className="w-[830px] mb-5" key={index}>
                    <input
                      className=" block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-[830px]"
                      placeholder="Fill link image product input..."
                      type="text"
                      // name="search"
                      value={item}
                      readOnly
                    />
                  </div>
                );
              })} */}

          {/* {inputSave &&
              inputSave.length > 0 &&
              inputSave.map((item, index) => {
                return (
                  <div className="w-[830px] mb-5" key={index}>
                    <img src={item} />
                  </div>
                );
              })} */}
          {/* </div> */}
          <div className="flex items-center  mb-5">
            <div className="flex w-[830px] justify-between">
              <input
                className="block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-[49%]"
                placeholder="Fill name attribute product input..."
                type="text"
                // name="search"
                value={nameAtrr}
                onChange={(e) => setNameAtrr(e.target.value)}
              />
              <input
                className="block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-[49%]"
                placeholder="Fill value attribute product input..."
                type="text"
                // name="search"
                value={valueAtrr}
                onChange={(e) => setValueAtrr(e.target.value)}
              />
            </div>

            <AiFillPlusSquare
              size="30px"
              className="hover:opacity-75 cursor-pointer ml-5"
              onClick={handleQtyAtrr}
            />
          </div>
          <div className="mb-5">
            {saveAtrr &&
              saveAtrr.length > 0 &&
              saveAtrr.map((item, index) => {
                return (
                  <div
                    className="flex w-[830px] justify-between mb-5"
                    key={index}
                  >
                    <input
                      className="block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-[49%]"
                      placeholder="Fill name attribute product input..."
                      type="text"
                      // name="search"
                      value={item.name}
                      readOnly
                      // onChange={(e) => setNameAtrr(e.target.value)}
                    />
                    <input
                      className="block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-[49%]"
                      placeholder="Fill value attribute product input..."
                      type="text"
                      // name="search"
                      value={item.value}
                      readOnly
                      // onChange={(e) => setValueAtrr(e.target.value)}
                    />
                  </div>
                );
              })}
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
          <button
            className="flex items-center mt-5 text-white bg-[#1435c3] px-5 py-2 rounded-md hover:bg-slate-300 hover:text-[#1435c3] transition-all"
            onClick={submitAddProduct}
          >
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
                  Hình Ảnh
                </th>
                <th className="w-1/6 text-left py-3 px-4 uppercase font-semibold text-sm text-center">
                  Tên
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
                <th className="w-1/6 text-left py-3 px-4 uppercase font-semibold text-sm text-center">
                  Xem
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
                      <td className="w-1/6 py-3 px-4 ">
                        {/* {item.image[4].urlImage} */}
                        <img
                          src={`http://localhost:8085/api/v1/image/files/${item.image[4].urlImage}`}
                          className="w-[70px] h-[70px] object-cover mx-auto"
                          // alt={name}
                        />
                      </td>
                      <td className="w-1/6 text-left py-3 px-4 text-center">
                        {item.title}
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
                        <Link
                          to={`/product/${item.slug}/${item.id}`}
                          className="text-[#1435c3] hover:text-[#8095f5] transition-all"
                        >
                          Chi tiết
                        </Link>
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
