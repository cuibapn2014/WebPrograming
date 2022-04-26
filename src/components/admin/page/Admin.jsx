import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Helmet from "../../common/Helmet";
import Header from "../common/Header";
import Product from "../page/Product";
const Admin = () => {
  return (
    <Helmet title="Admin">
      <div className="flex">
        <div className="w-[20%]">
          <Header />
        </div>
        <div className="w-[80%]">
          <Outlet />
        </div>
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
    </Helmet>
  );
};

export default Admin;
