import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Pc from "./components/Pc";
import Mobile from "./components/Mobile";
import { Provider, useSelector } from "react-redux";
import store from "./redux/store";
import Login from "./components/Login";
import Header from "./components/common/Header";
import HeaderMobile from "./components/common/HeaderMobile";

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
      <div className="App ">
        {/* <HeaderMobile /> */}
        {width > 1280 ? <Header /> : <HeaderMobile />}
      </div>
    </Provider>
  );
}

export default App;
