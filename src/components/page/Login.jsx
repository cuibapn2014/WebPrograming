import { FastField, Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { BiHide } from "react-icons/bi";
import { GrFormViewHide } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import Input from "../common/Input";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import axios from "axios";
import { reRenderUser, toogleRemember } from "../../redux/actions";
import Cookies from "js-cookie";
import Helmet from "../common/Helmet";

const Login = () => {
  const [isCheck, setIsCheck] = useState(false);
  const [ispassword, setIsPassword] = useState(true);
  const token = useSelector((state) => state.token.tokenDefault);
  const navigation = useNavigate();
  const dispatch = useDispatch();
  // const isChecked = JSON.parse(localStorage.getItem("isChecked"));
  const isChecked = useSelector((state) => state.token.rememberMe);
  // console.log("check isChecked", isChecked);
  const formik = useFormik({
    initialValues: {
      email: "",
      passWord: "",
    },

    validationSchema: Yup.object({
      // lastName: Yup.string()
      //   .required("Required")
      //   .min(4, "Must be 4 characters or more"),
      email: Yup.string()
        .required("Required")
        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Please Enter Email"),
      // email: Yup.string()
      //   .required("Required")
      //   .min(4, "Must be 4 characters or more"),
      passWord: Yup.string()
        .required("Required")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/,
          "Password must be from  8-10 characters and contain at least one letter, one number, and one special characters"
        ),
      // confirmPassword: Yup.string()
      //   .required("Required")
      //   .oneOf([Yup.ref("password"), null], "Password must match"),
    }),

    onSubmit: async (values) => {
      const { email, passWord } = values;
      // const data = {
      //   username: email,
      //   password: passWord,
      // };
      const data = new FormData();
      data.append("username", email);
      data.append("password", passWord);
      let res = await axios({
        method: "POST",
        url: "http://localhost:8085/api/v1/user/login",
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res && res.data && res.data.data) {
        // console.log("check login", res.data);

        let tokenJWT = res.data.data.token;
        sessionStorage.setItem("informationUser", JSON.stringify(tokenJWT));
        if (isChecked) {
          Cookies.set("token", tokenJWT, { expires: 30 });
        }
        if (res.data.status === 200) {
          // toast.success("Login in success");
          navigation("/");

          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }
      }

      // if (res.status === 400) {
      //   toast.warn("Login Fail");
      // }

      console.log("check login", res);
    },
  });

  return (
    <Helmet title="Đăng Nhập">
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
              src="https://cdn.dribbble.com/users/9741/screenshots/17064507/media/18fb3545a45772f7579841dec9ee34f5.png?compress=1&resize=1000x750&vertical=top"
              className="rounded-l-lg"
            />
          </div>
          {/* block 1 */}

          {/* block 2 */}
          <div className="lg:w-[40%] w-full  rounded-r-lg">
            <div className="p-10">
              <div className="text-xl font-semibold text-[#1435c3]">
                <h4>You're</h4>
                <h5>Welcome</h5>
              </div>

              <form
                className="px-1 py-5 pb-9 lg:w-full  w-[100%] sm:w-4/5 mx-auto"
                onSubmit={formik.handleSubmit}
              >
                <h2 className="text-center font-medium text-lg my-5">
                  Login your account
                </h2>
                <div className="mb-10">
                  <div className="form-field">
                    <input
                      id="email"
                      name="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      type="text"
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
                  <div className="mb-5">
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
                </div>

                <div className="flex items-center my-4">
                  <input
                    id="remember"
                    type="checkbox"
                    checked={isChecked}
                    // onClick={() => setIsCheck(!isCheck)}
                    onChange={(e) => setIsCheck(!isChecked)}
                    className="cursor-pointer"
                    onClick={() => dispatch(toogleRemember())}
                  />
                  <label
                    className="capitalize ml-2 cursor-pointer"
                    htmlFor="remember"
                  >
                    remember me
                  </label>
                </div>
                <div className="bg-[#1435c3] text-center py-3 rounded-lg text-white">
                  <button type="submit" className="block w-full">
                    Sign in
                  </button>
                </div>
                <div className="mt-4 text-center">
                  Don't have an account ?{" "}
                  <span className="text-[#1435c3] cursor-pointer">
                    <Link to="/sign-up">Sign up</Link>
                  </span>{" "}
                </div>
              </form>
            </div>
          </div>
          {/* block 2 */}
        </div>
      </motion.div>
    </Helmet>
  );
};

export default Login;
