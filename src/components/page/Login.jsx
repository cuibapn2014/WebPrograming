import React from "react";
import { useSelector } from "react-redux";

const Login = () => {
  const data = useSelector((state) => state.cart.name);
  return <div>{data}</div>;
};

export default Login;
