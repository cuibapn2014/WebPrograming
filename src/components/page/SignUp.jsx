import { FastField, Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";

import { motion } from "framer-motion";

import React, { useState } from "react";
import { BiHide } from "react-icons/bi";
import { GrFormViewHide } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import Input from "../common/Input";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// import { toast } from "react-toastify";

const SignUp = () => {
  const [isCheck, setIsCheck] = useState(false);
  const [ispassword, setIsPassword] = useState(true);
  const navigation = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      passWord: "",
      confirmPassword: "",
    },

    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("Required")
        .min(3, "Must be 3 characters or more"),
      lastName: Yup.string()
        .required("Required")
        .min(3, "Must be 3 characters or more"),
      userName: Yup.string()
        .required("Required")
        .min(4, "Must be 4 characters or more"),
      email: Yup.string()
        .required("Required")
        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Please Enter Email"),
      passWord: Yup.string()
        .required("Required")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/,
          "Password must be from  8-10 characters and contain at least one letter, one number, and one special characters"
        ),
      confirmPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("passWord"), null], "Password must match"),
    }),

    onSubmit: async (values) => {
      const { firstName, lastName, userName, email, passWord } = values;
      const data = {
        username: userName,
        password: passWord,
        email: email,
        userProfile: {
          firstName: firstName,
          lastName: lastName,
        },
        role: {
          name: "USER",
        },
      };

      let res = await axios.post(
        "http://localhost:8085/api/v1/user/signup",
        data
      );
      if (res && res.data && res.data.data) {
        console.log("check sign-up", res.data);
        sessionStorage.setItem("informationUser", JSON.stringify(res.data));
        if (res.data.status === 200) {
          navigation("/");
          toast.success("Sign up success");
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }
      }
    },
  });

  return (
    <motion.div
      className="bg-slate-50  lg:p-10 p-5 "
      initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
      animate={{ clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)" }}
      exit={{
        clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
        transition: { duration: 0.1 },
      }}
    >
      <div className="flex items-center bg-white">
        {/* block 1 */}
        <div className="w-[60%] hidden lg:block">
          <img
            src="https://cdn.dribbble.com/users/9741/screenshots/17082373/media/6ace78ce32fcb1254079fad72b5255ce.png?compress=1&resize=1000x750&vertical=top"
            className="rounded-l-lg"
          />
        </div>
        {/* block 1 */}

        {/* block 2 */}
        <div className="lg:w-[40%] w-full  rounded-r-lg">
          <div className="px-10 py-2`">
            <div className="text-base mb-5">
              <h4>Sign up with your email</h4>
              <h5>
                Already have an account?
                <Link to="/sign-in" className="text-[#1435c3]">
                  {" "}
                  Sign in
                </Link>
              </h5>
            </div>

            <form
              className="px-1 py-5 pb-9 lg:w-full  w-[100%] sm:w-4/5 mx-auto"
              onSubmit={formik.handleSubmit}
            >
              {/* <h2 className="text-center font-medium text-lg my-5">
                Login your account
              </h2> */}
              <div className="mb-10 flex items-center justify-between">
                <div className="w-[49%]">
                  <div className="form-field">
                    <input
                      id="firstName"
                      name="firstName"
                      onChange={formik.handleChange}
                      value={formik.values.firstName || ""}
                      type="text"
                      placeholder=" "
                      className="form-input"
                    />
                    <label className="form-label" htmlFor="firstName">
                      FirstName
                    </label>
                  </div>
                  <span className="block mt-1 text-[red] line-clamp-1">
                    {formik.errors.firstName}
                  </span>
                </div>
                <div className="w-[49%]">
                  <div className="form-field">
                    <input
                      id="lastName"
                      name="lastName"
                      onChange={formik.handleChange}
                      value={formik.values.lastName || ""}
                      type="text"
                      placeholder=" "
                      className="form-input"
                    />
                    <label className="form-label" htmlFor="lastName">
                      Lastname
                    </label>
                  </div>
                  <span className="block mt-1 text-[red] line-clamp-1">
                    {formik.errors.lastName}
                  </span>
                </div>
              </div>
              <div className="mb-10">
                <div className="form-field">
                  <input
                    id="userName"
                    name="userName"
                    onChange={formik.handleChange}
                    value={formik.values.userName}
                    type="text"
                    placeholder=" "
                    className="form-input"
                  />
                  <label className="form-label" htmlFor="userName">
                    Username
                  </label>
                </div>
                <span className="block mt-1 text-[red]">
                  {formik.errors.userName}
                </span>
              </div>
              <div className="mb-10">
                <div className="form-field">
                  <input
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    type="email"
                    placeholder=" "
                    className="form-input"
                  />
                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                </div>
                <span className="block mt-1 text-[red]">
                  {formik.errors.email}
                </span>
              </div>
              <div>
                <div className="mb-10">
                  <div className="form-field">
                    <input
                      id="passWord"
                      name="passWord"
                      onChange={formik.handleChange}
                      value={formik.values.passWord}
                      type={ispassword ? "password" : "text"}
                      placeholder=" "
                      className="form-input"
                    />
                    <label className="form-label" htmlFor="passWord">
                      Password
                    </label>
                    <div
                      className="absolute top-[50%] right-5 transform translate-y-[-50%] cursor-pointer"
                      onClick={() => setIsPassword(!ispassword)}
                    >
                      {ispassword ? <GrFormViewHide /> : <BiHide />}
                    </div>
                  </div>
                  <span className="block mt-1 text-[red]">
                    {formik.errors.passWord}
                  </span>
                </div>
                <div className="mb-5">
                  <div className="form-field">
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      onChange={formik.handleChange}
                      value={formik.values.confirmPassword}
                      type={ispassword ? "password" : "text"}
                      placeholder=" "
                      className="form-input"
                    />
                    <label className="form-label" htmlFor="confirmPassword">
                      Password
                    </label>
                    <div
                      className="absolute top-[50%] right-5 transform translate-y-[-50%] cursor-pointer"
                      onClick={() => setIsPassword(!ispassword)}
                    >
                      {ispassword ? <GrFormViewHide /> : <BiHide />}
                    </div>
                  </div>
                  <span className="block mt-1 text-[red]">
                    {formik.errors.confirmPassword}
                  </span>
                </div>
              </div>

              {/* <div className="flex items-center my-4">
                <input
                  id="remember"
                  type="checkbox"
                  checked={isCheck}
                  onClick={() => setIsCheck(!isCheck)}
                  onChange={(e) => e.target.value}
                  className="cursor-pointer"
                />
                <label
                  className="capitalize ml-2 cursor-pointer"
                  htmlFor="remember"
                >
                  remember me
                </label>
              </div> */}
              <div className="bg-[#1435c3] text-center py-3 rounded-lg text-white">
                <button type="submit" className="block w-full">
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* block 2 */}
      </div>
    </motion.div>
  );
};

export default SignUp;
