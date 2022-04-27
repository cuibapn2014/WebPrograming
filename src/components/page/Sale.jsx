import axios from "axios";
import React, { useState, useEffect } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import CardProduct from "../common/CardProduct";
import { isTrueMenu } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import Helmet from "../common/Helmet";

const Sale = () => {
  const dispatch = useDispatch();

  const [listProduct, setListProduct] = useState([]);

  const [listDynamic, setListDynamic] = useState([]);

  const [activeFilter, setActiveFilter] = useState(0);

  const [filter, setFilter] = useState([]);

  const token = useSelector((state) => state.token.tokenDefault);

  useEffect(async () => {
    try {
      const res = await axios.get(
        `http://localhost:8085/api/v1/product/get-all`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res && res.data && res.data.data) {
        const filterSale = res.data.data.filter(
          (item, index) => item.discount > 20
        );

        setListProduct([...filterSale]);

        setListDynamic([...filterSale]);
      }
    } catch (e) {
      console.log("fail error : >>", e.message);
    }
  }, []);

  useEffect(() => {
    const listFilter = [];
    const arr = listProduct || [];

    if (arr.length > 0) {
      arr.forEach((element) => {
        const include = listFilter.includes(element.brand.brandName);
        if (!include) {
          listFilter.push(element.brand.brandName);
        }
      });
    }

    setFilter(listFilter);
  }, [listProduct]);

  const handleFilter = (filter, index) => {
    let listProductTemp = [...listProduct];

    const listFilter = listProductTemp.filter(
      (item) => item.brand.brandName === filter
    );
    console.log("check filter handle", listFilter);
    setListDynamic(listFilter);
    setActiveFilter(index);
  };

  return (
    // <Helmet title={`Collections - ${name.toUpperCase()}` || "Found"}>
    <Helmet title="Collections - Sale">
      <motion.div
        className="w-full bg-slate-50 py-5"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{
          opacity: 0,
          x: -100,
        }}
        transition={{ duration: 0.25 }}
      >
        <div className="flex items-center  mb-5 ml-5">
          <Link to="/" onClick={() => dispatch(isTrueMenu())}>
            <div className="p-2 rounded-full border border-[#ddd]">
              <AiOutlineHome size={"24px"} className=" text-black" />
            </div>
          </Link>

          <span className="block mx-3"> &gt;</span>
          <span className="p-1 border border-[#ddd] rounded-[15px]">Sale</span>
        </div>
        <div className="container mx-auto flex items-center py-4 rounded-lg px-10">
          <>
            <h6 className="mr-16">Thương hiệu</h6>
            <div className="flex ">
              {filter &&
                filter.length > 0 &&
                filter.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`px-4 py-1 border border-[#ddd] mr-4 rounded-lg cursor-pointer capitalize ${
                        index + 1 === activeFilter
                          ? "border border-[#1435c3]"
                          : ""
                      }`}
                      onClick={() => handleFilter(item, index + 1)}
                    >
                      {item}
                    </div>
                  );
                })}
            </div>
          </>
        </div>
        <div className="container mx-auto bg-slate-50">
          {/* item cart */}
          {/* {listProduct && listProduct.length > 0 && ( */}
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
          {/* )} */}
          {/* item cart */}
        </div>
      </motion.div>
    </Helmet>
  );
};

export default Sale;
