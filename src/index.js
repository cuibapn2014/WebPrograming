import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowRoom from "./components/page/ShowRoom";
import Home from "./components/page/Home";
import Payment from "./components/page/Payment";
import Installment from "./components/page/Installment";
import Maintain from "./components/page/Maintain";
import Delivery from "./components/page/Delivery";
import Login from "./components/page/Login";
import ProductView from "./components/page/ProductView";
import Paypal from "./components/page/Paypal";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<ShowRoom />} />
          <Route path="huong-dan-thanh-toan" element={<Payment />} />
          <Route path="huong-dan-tra-gop" element={<Installment />} />
          <Route path="chinh-sach-bao-hanh" element={<Maintain />} />
          <Route path="chinh-sach-van-chuyen" element={<Delivery />} />
          <Route path="sign-in" element={<Login />} />
          <Route path="product" element={<ProductView />} />
          <Route path="paypal" element={<Paypal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
