import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FastField, Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { blockLogin, blockSignUp } from "../../redux/actions";

const ResetPassword = () => {
  const email = useSelector((state) => state.token.emailForgot);
  const token = useSelector((state) => state.token.tokenDefault);
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      passWord: "",
      confirmPassword: "",
    },

    validationSchema: Yup.object({
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
      const { passWord } = values;
      const dataResetPassWord = new FormData();
      dataResetPassWord.append("email", email);
      dataResetPassWord.append("password", passWord);
      let res = await axios({
        method: "POST",
        url: "http://localhost:8085/api/v1/reset-password/change",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: dataResetPassWord,
      });
      console.log("check call change pass", res);
      if (res && res.data && res.data.data) {
        const tokenJWT = res.data.data.token;
        sessionStorage.setItem("informationUser", JSON.stringify(tokenJWT));
        dispatch(blockSignUp(false));
        dispatch(blockLogin(false));
        navigation("/");
      }
    },
  });
  return (
    <div className="bg-slate-50">
      <div className="w-[60%] mx-auto">
        <h1 className="text-[#1435c3] my-5 text-center capitalize font-medium text-xl">
          reset password
        </h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-10">
            <div className="form-field">
              <input
                id="passWord"
                name="passWord"
                onChange={formik.handleChange}
                value={formik.values.passWord}
                // type={ispassword ? "password" : "text"}
                placeholder=" "
                className="form-input"
              />
              <label className="form-label" htmlFor="passWord">
                New password
              </label>
            </div>
            <span className="block mt-1 text-[red]">
              {formik.errors.passWord}
            </span>
          </div>
          <div className="mb-10">
            <div className="form-field">
              <input
                id="confirmPassword"
                name="confirmPassword"
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
                placeholder=" "
                className="form-input "
              />
              <label className="form-label" htmlFor="passWord">
                Confirm password
              </label>
            </div>
            <span className="block mt-1 text-[red]">
              {formik.errors.confirmPassword}
            </span>
          </div>
          <button
            className="mt-5 px-5 py-2 bg-[#1435c3] rounded-md text-white block mx-auto"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
