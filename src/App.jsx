import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

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
  return (
    <Provider store={store}>
      <div>
        {width > 1280 ? <Header /> : <HeaderMobile />}
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
