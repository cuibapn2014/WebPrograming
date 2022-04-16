import React from "react";
import Banner from "../Banner";
import ListPc from "../../components/ListPc";
import ListLaptop from "../ListLaptop";
import ListScreen from "../ListScreen";
import { motion } from "framer-motion";
const Home = () => {
  return (
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
  );
};

export default Home;
