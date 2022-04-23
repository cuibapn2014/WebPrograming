import React, { useEffect } from "react";
import Banner from "../Banner";
import ListPc from "../../components/ListPc";
import ListLaptop from "../ListLaptop";
import ListScreen from "../ListScreen";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import axios from "axios";
import jwt_decode from "jwt-decode";

import { reRenderUser } from "../../redux/actions";
import Helmet from "../common/Helmet";
const Home = () => {
  const remember = useSelector((state) => state.token.rememberMe);
  const cookiesToken = Cookies.get("token");
  const token = useSelector((state) => state.token.tokenDefault);
  const dispatch = useDispatch();
  // console.log(remember, cookiesToken);

  useEffect(async () => {
    if (remember && cookiesToken) {
      // let data = new FormData();
      // data.append("token", cookiesToken);
      var decoded = jwt_decode(cookiesToken);
      const { sub } = decoded;
      // console.log("check jwt", decoded);
      let res = await axios({
        method: "GET",
        url: `http://localhost:8085/api/v1/user/${sub}`,

        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res && res.data && res.data.data) {
        const tokenCookies = res.data.data.token;
        sessionStorage.setItem("informationUser", JSON.stringify(tokenCookies));
        let random_number = Math.floor(Math.random() * 100);
        dispatch(reRenderUser(random_number));
      }
      // console.log("check server jwt", res);
    }
  }, []);

  return (
    <Helmet title="Home">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{
          opacity: 0,
          x: -100,
        }}
        transition={{ duration: 0.25 }}
      >
        <Banner />
        <ListPc />
        <ListLaptop />
        <div className="w-full overflow-hidden  bg-[#f8f8fc] p-5">
          <img
            src="https://lh3.googleusercontent.com/rgdxfc-mni8_oLsSCfEdwCBEdOnWKfdAox_pyWJGmAJMlCC_O-2hwaUx7FUmo524De9BAWdJ5Xf0-V9WoYP6tM_X-ykCp5c=rw-w1232"
            className="w-full  rounded-md hover:scale-105 transition-all hover:rounded-md"
          />
        </div>
        <ListScreen />
      </motion.div>
    </Helmet>
  );
};

export default Home;
