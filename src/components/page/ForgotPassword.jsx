import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setEmailUser } from "../../redux/actions";

import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const token = useSelector((state) => state.token.tokenDefault);
  const navigation = useNavigate();
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();
  const handleCreateResetPassWord = async () => {
    try {
      let dataEmail = new FormData();
      dataEmail.append("email", email);
      let res = await axios({
        method: "POST",
        url: "http://localhost:8085/api/v1/reset-password/create",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: dataEmail,
      });
      if (res && res.data && res.data.data) {
        dispatch(setEmailUser(res.data.data.email));
        setSuccess(true);
        navigation("/sign-in/forgot-password/input-secret-code");
      }
      console.log("check res email", res);
    } catch (e) {
      console.log("Email của bạn không hợp lệ");
    }
  };
  return (
    <div className="flex justify-center items-center bg-slate-50">
      <div>
        <h1 className="text-[#1435c3] my-5 text-center capitalize font-medium text-xl">
          forgot password
        </h1>
        <input
          className="block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-[780px]"
          placeholder="Fill your email input..."
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="mt-5 flex justify-center">
          <Link
            to={success && "input-secret-code"}
            className="bg-[#1435c3] hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded capitalize inline-block "
            onClick={handleCreateResetPassWord}
          >
            reset password
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
