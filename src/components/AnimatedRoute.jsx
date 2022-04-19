import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import App from "../App";
import Cart from "./page/Cart";
import Collections from "./page/Collections";
import Delivery from "./page/Delivery";
import Home from "./page/Home";
import Installment from "./page/Installment";
import Login from "./page/Login";
import Maintain from "./page/Maintain";
import Payment from "./page/Payment";
import Paypal from "./page/Paypal";
import ProductView from "./page/ProductView";
import ShowRoom from "./page/ShowRoom";
import SignUp from "./page/SignUp";
// import Admin from "./";
import { AnimatePresence } from "framer-motion";

const AnimatedRoute = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<ShowRoom />} />
          <Route path="huong-dan-thanh-toan" element={<Payment />} />
          <Route path="huong-dan-tra-gop" element={<Installment />} />
          <Route path="chinh-sach-bao-hanh" element={<Maintain />} />
          <Route path="chinh-sach-van-chuyen" element={<Delivery />} />
          <Route path="sign-in" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="product/:slug/:id" element={<ProductView />} />
          <Route path="collections/:slug/:id" element={<Collections />} />
          <Route path="cart" element={<Cart />} />
          <Route path="paypal" element={<Paypal />} />
        </Route>
        {/* <Route path="/admin" element={<Admin />} /> */}
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoute;
