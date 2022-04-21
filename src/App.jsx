import logo from "./logo.svg";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { BiArrowToTop } from "react-icons/bi";
import { Provider, useSelector } from "react-redux";
import store from "./redux/store";
import Header from "./components/common/Header";
import HeaderMobile from "./components/common/HeaderMobile";
import Footer from "./components/common/Footer";
import Menu from "./components/common/Menu";
import Banner from "./components/Banner";
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

// axios.defaults.headers.common[
//   "Authorization"
// ] = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjaGluaGFuMzk2NiIsInJvbGUiOiJVU0VSIiwiZXhwIjoxNjUwMzExNDExfQ.2sTIfzrTTQJMpUMY6M_Tx7w_oNA5LBo3zn30QKGEOpM`;

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [isTop, setIsTop] = useState(0);
  const informationUser = JSON.parse(sessionStorage.getItem("informationUser"));
  // console.log(informationUser);

  useEffect(() => {
    const handleResize = (e) => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScrollY = (e) => {
      setIsTop(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScrollY);

    return () => window.removeEventListener("scroll", handleScrollY);
  }, []);
  const handleOntop = (e) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* {console.log("check top", isTop)} */}
      {/* <Provider store={store}> */}
      <div>
        {width > 1280 ? <Header /> : <HeaderMobile />}
        <Outlet />
        <Footer />
        {isTop > 1000 ? (
          <div
            className="fixed bottom-5 right-2 py-3 px-4 bg-black text-white z-10 cursor-pointer rounded-full hover:bg-[#1435c3]  transition-all flex flex-col items-center"
            onClick={handleOntop}
          >
            <BiArrowToTop size={"20px"} />
            <span>TOP</span>
          </div>
        ) : (
          ""
        )}
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
      {/* </Provider> */}
    </>
  );
}

export default App;
