import logo from "./logo.svg";
import "./App.css";
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

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (e) => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleOntop = (e) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <Provider store={store}>
      <div>
        {width > 1280 ? <Header /> : <HeaderMobile />}
        <Outlet />
        <Footer />
        <div
          className="fixed bottom-5 right-2 py-3 px-4 bg-black text-white z-10 cursor-pointer rounded-full hover:bg-[#1435c3]  transition-all flex flex-col items-center"
          onClick={handleOntop}
        >
          <BiArrowToTop size={"20px"} />
          <span>TOP</span>
        </div>
      </div>
    </Provider>
  );
}

export default App;
