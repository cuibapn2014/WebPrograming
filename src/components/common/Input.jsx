import React, { useState } from "react";
import { BiHide } from "react-icons/bi";
import { GrFormViewHide } from "react-icons/gr";
const Input = ({ name, type, id, formik }) => {
  const [ispassword, setIsPassword] = useState(true);

  return (
    <div className="form-field">
      {type === "text" ? (
        <input type="text" placeholder=" " className="form-input" />
      ) : (
        <input
          type={ispassword ? "password" : "text"}
          placeholder=" "
          className="form-input"
        />
      )}
      <label className="form-label">{name}</label>
      {type === "password" && (
        <div
          className="absolute top-[50%] right-5 transform translate-y-[-50%] cursor-pointer"
          onClick={() => setIsPassword(!ispassword)}
        >
          {ispassword ? <GrFormViewHide /> : <BiHide />}
        </div>
      )}
    </div>
  );
};

export default Input;

{
  /* <form>
  <h2 className="text-center font-medium text-lg my-5">Login your account</h2>
  <div className="mb-10">
    <FastField>
      name = "userName"
      <Input name="Username" type="text" />
    </FastField>
  </div>
  <div>
    <Input name="Password" type="password" />
  </div>

  <div className="flex items-center my-4">
    <input
      id="remember"
      type="checkbox"
      checked={isCheck}
      onClick={() => setIsCheck(!isCheck)}
      onChange={(e) => e.target.value}
      className="cursor-pointer"
    />
    <label className="capitalize ml-2 cursor-pointer" htmlFor="remember">
      remember me
    </label>
  </div>
  <div className="bg-[#1435c3] text-center py-3 rounded-lg text-white">
    <button type="submit">Sign in</button>
  </div>
  <div className="mt-4 text-center">
    Don't have an account ?{" "}
    <span className="text-[#1435c3] cursor-pointer">Sign up</span>{" "}
  </div>
</form>; */
}
