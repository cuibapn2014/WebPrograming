import axios from "axios";
import React, { useState, useEffect } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import CardProduct from "../common/CardProduct";
import { isTrueMenu } from "../../redux/actions";
import { useDispatch } from "react-redux";
const Collections = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const [listProduct, setListProduct] = useState([]);
  const [listDynamic, setListDynamic] = useState([]);
  const [activeFilter, setActiveFilter] = useState(0);
  console.log(activeFilter);
  const [filter, setFilter] = useState({});
  // console.log(id);
  // console.log("check data collections", listProduct);
  // console.log("check data dynamic", listDynamic);

  // console.log("check list collections", filter);

  useEffect(async () => {
    try {
      const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      };
      const res = await axios.get(
        `http://localhost:8085/api/v1/category/${id}`
        // {
        //   headers: {
        //     "Access-Control-Allow-Origin": true,
        //   },
        // },
        // { crossDomain: true }
      );

      if (res && res.data && res.data.data) {
        setListProduct(res.data.data);
        setListDynamic(res.data.data.product);
      }
    } catch (e) {
      console.log("fail error : >>", e.message);
    }
  }, [id]);

  useEffect(() => {
    const listFilter = [];
    const arr = listProduct.product || [];
    if (arr.length > 0) {
      arr.forEach((element) => {
        const include = listFilter.includes(element.brand.brandName);
        if (!include) {
          listFilter.push(element.brand.brandName);
        }
      });
    }
    setFilter(listFilter);
    // console.log("check listFilter: ", listFilter);
    // console.log("check temp", arr);
  }, [listProduct]);

  const handleFilter = (filter, index) => {
    const listProductTemp = [...listProduct.product];
    const listFilter = listProductTemp.filter(
      (item) => item.brand.brandName === filter
    );
    // console.log("check filter", listFilter);
    setListDynamic(listFilter);
    setActiveFilter(index);
  };

  return (
    <div className="w-full bg-slate-50 py-5">
      <div className="flex items-center  mb-5 ml-5">
        <Link to="/" onClick={() => dispatch(isTrueMenu())}>
          <div className="p-2 rounded-full border border-[#ddd]">
            <AiOutlineHome size={"24px"} className=" text-black" />
          </div>
        </Link>
        <span className="block mx-3"> &gt;</span>
        {listProduct && listProduct.name && (
          <div className="text-sm px-[6px] py-2 rounded-full border border-[#ddd]">
            {listProduct.name}
          </div>
        )}
      </div>
      <div className="bg-white container mx-auto flex items-center py-4 rounded-lg px-10">
        <h6 className="mr-16">Thương hiệu</h6>
        <div className="flex ">
          {filter &&
            filter.length > 0 &&
            filter.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`px-4 py-1 border border-[#ddd] mr-4 rounded-lg cursor-pointer capitalize ${
                    index + 1 === activeFilter ? "border border-[#1435c3]" : ""
                  }`}
                  onClick={() => handleFilter(item, index + 1)}
                >
                  {item}
                </div>
              );
            })}
        </div>
      </div>
      <div className="container mx-auto bg-slate-50">
        {/* item cart */}
        <div className="flex justify-between">
          <div className="flex flex-wrap ">
            {listDynamic &&
              listDynamic.length > 0 &&
              listDynamic.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="xl:w-[19.8%] lg:w-[24.8%] md:w-[33.2%] sm:w-[49.8%] w-full"
                  >
                    <CardProduct
                      id={item.id}
                      name={item.title}
                      price={item.price}
                      discount={item.discount}
                      priceBeforeDiscount={"10.000.000"}
                      img={item.image[0].urlImage}
                      slug={item.slug}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        {/* item cart */}
      </div>
    </div>
  );
};

export default Collections;
