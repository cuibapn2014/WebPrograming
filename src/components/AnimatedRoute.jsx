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
import Admin from "./admin/page/Admin";
import { AnimatePresence } from "framer-motion";
import Product from "./admin/page/Product";
import Staff from "./admin/page/Staff";
import Customer from "./admin/page/Customer";
import Category from "./admin/page/Category";
import Brand from "./admin/page/Brand";
import Bill from "./admin/page/Bill";
import Advertisement from "./admin/page/Advertisement";
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
        <Route path="/admin" element={<Admin />}>
          <Route index element={<Product />} />
          <Route path="product" element={<Product />} />
          <Route path="staff" element={<Staff />} />
          <Route path="customer" element={<Customer />} />
          <Route path="category" element={<Category />} />
          <Route path="brand" element={<Brand />} />
          <Route path="bill" element={<Bill />} />
          <Route path="advertisement" element={<Advertisement />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoute;
