import React, { useState } from "react";
import { CKEditor } from "ckeditor4-react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Helmet from "../../common/Helmet";

const Advertisement = () => {
  const [data, setData] = useState("");
  const [title, setTitle] = useState("");
  const token = useSelector((state) => state.token.tokenDefault);
  const navigation = useNavigate();
  const handleChange = (e) => {
    setData(e.editor.getData());
    // console.log(e.editor.getData());
  };

  const handleSentEmail = () => {
    if (!title) {
      alert("Bạn chưa nhập tiêu đề của mail");
      return;
    }
    if (!data) {
      alert("Bạn chưa nhập nội dung của mail");
      return;
    }
    const dataEmail = new FormData();
    dataEmail.append("title", title);
    dataEmail.append("mail-content", data);
    // console.log("check data form email", dataEmail);

    let res = axios({
      method: "POST",
      url: "http://localhost:8085/send-mail/khuyen-mai",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: dataEmail,
    });
    toast.success("Gửi mail thành công");
    window.location.reload();
    console.log("check email sent customer :>>", res);
  };
  return (
    <Helmet title="Quảng Cáo">
      <motion.div
        className="flex flex-row "
        initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
        animate={{ clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)" }}
        exit={{
          clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
          transition: { duration: 0.3 },
        }}
      >
        <div className=" max-w-md flex flex-col justify-center p-4">
          <div className=" text-xl font-semibold uppercase">
            Gửi Quảng Cáo Đến Các Khách Hàng Tiềm Năng
          </div>

          <div className="text-xl mt-4">
            <p className="text-[#1435c3] text-2xl font-bold">
              <a href="admin.html">G4 PC </a>
            </p>
            Shop Bán PC số 1 Việt Nam
          </div>
        </div>
        <div className="w-full flex">
          <div className="shadow-md flex-auto  p-10 pb-20 bg-gray-100">
            <div className="w-full">
              <div className="font-semibold h-6 mt-3 text-gray-600 text-xs ">
                <span className="text-red-400 mr-1">*</span>TIÊU ĐỀ
              </div>
              <div className="my-2 bg-white p-1 flex border border-gray-200 rounded">
                {" "}
                <input
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800 "
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />{" "}
              </div>
            </div>
            <div className="w-full">
              <div className="font-semibold h-6 mt-3 text-gray-600 text-xs ">
                <span className="text-red-400 mr-1">*</span> NỘI DUNG
              </div>
              <div>
                <CKEditor
                  initData={<p>Please fill in descrition of product view </p>}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  //   value={data}
                />
              </div>
              <div>{data}</div>
              <div>{title}</div>
            </div>

            <div className="mt-6 relative">
              <div
                className="shadow-md font-medium py-2 px-4 text-white
                   cursor-pointer bg-blue-700 rounded text-lg tr-mt  absolute text-center w-full cursor-pointer"
                onClick={handleSentEmail}
              >
                GỬI TẤT CẢ
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Helmet>
  );
};

export default Advertisement;
