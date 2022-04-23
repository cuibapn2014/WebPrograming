import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Helmet from "../common/Helmet";
const Payment = () => {
  return (
    <Helmet title="Thanh Toán">
      <motion.div
        className="container mx-auto"
        initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
        animate={{ clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)" }}
        exit={{
          clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
          transition: { duration: 0.1 },
        }}
      >
        <h1 className="text-left text-2xl font-medium my-7">
          Hướng dẫn thanh toán
        </h1>
        <h2 className="text-center uppercase text-[#1435c3] font-medium text-lg mb-8">
          ~ chính sách thanh toán ~
        </h2>

        {/* Thanh toán trực tiếp */}
        <div className="text-left">
          <h3 className="text-[#1435c3] font-medium text-lg mb-2">
            🛑 Thanh toán trực tiếp :
          </h3>
          <div className="ml-7">
            <p className="mb-1">
              {" "}
              👉 Khách hàng có thể tới cửa hàng của CN mua hàng để thanh toán
              trực tiếp
            </p>
            <p className="mb-1">
              {" "}
              👉 Địa chỉ : Số 2 Hoàng Hoa Thám, phường 12, Quận Tân Bình
            </p>
            <p className="mb-1"> 👉 Hotline : 02873026867</p>
            <p className="mb-1">
              {" "}
              👉 Khách hàng có thể click{" "}
              <Link to="/contact" className="underline text-[#1435c3] ">
                tại đây
              </Link>{" "}
              để xem thêm nhiều chi nhánh hơn
            </p>
          </div>
        </div>
        {/* Thanh toán trực tiếp */}

        {/* Thanh toán onlined */}
        <div className="text-left mt-4">
          <h3 className="text-[#1435c3] font-medium text-lg mb-2">
            🛑 Thanh toán online :
          </h3>

          <div className="ml-7">
            <p className="mb-1">
              {" "}
              👉 Dành cho khách hàng đặt hàng và thanh toán online - Chuyển
              khoản giá trị đơn hàng thông qua các App chuyển khoản (banking) :
            </p>
            <p className="mb-1">
              <span className="font-semibold">Lưu ý : </span> Nội dung chuyển
              khoản là SĐT + Tên khách hàng
            </p>
          </div>
        </div>
        {/* Thanh toán onlined */}

        {/* Techcombank */}
        <div className="bg-slate-50 border-dashed border-8 border-[#5b9bd5] flex flex-col md:flex-row items-center w-[70%] mx-auto p-4 mt-8">
          <div className="md:w-2/5 w-full">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Techcombank_logo.png"
              className="md:w-[90%] w-full"
            />
          </div>
          <div className="md:w-3/5 w-full mt-2">
            <p className="mb-3">
              Ngân hàng TECHCOMBANK - Ngân hàng Kĩ Thương Việt Nam
            </p>
            <p className="mb-3">
              <span className="font-semibold">Số tài khoản : </span>1909 2878
              677 098
            </p>
            <p className="mb-3">
              <span className="font-semibold">Chủ tài khoản : </span> Lê Hoàng
              Chí Nhân
            </p>
          </div>
        </div>
        {/* Techcombank */}

        {/* SACOMBANK */}
        <div className="bg-slate-50 border-dashed border-8 border-[#5b9bd5] flex flex-col md:flex-row items-center w-[70%] mx-auto p-4 mt-8">
          <div className="md:w-2/5 w-full">
            <img
              src="https://apithanhtoan.com/wp-content/uploads/2020/08/Logo-Sacombank.png"
              className="md:w-[90%] w-full"
            />
          </div>
          <div className="md:w-3/5 w-full mt-2">
            <p className="mb-3">
              Ngân hàng SACOMBANK - Ngân hàng Sài Gòn thương tín
            </p>
            <p className="mb-3">
              <span className="font-semibold">Số tài khoản : </span>0909 9078
              677 980
            </p>
            <p className="mb-3">
              <span className="font-semibold">Chủ tài khoản : </span> Lê Hoàng
              Chí Nhân
            </p>
          </div>
        </div>

        {/* SACOMBANK */}

        {/* Shipper */}
        <div className="text-left mt-8">
          <h3 className="text-[#1435c3] font-medium text-lg mb-2">
            🛑 Thanh toán khi nhận hàng (COD) :
          </h3>
          <div className="ml-7">
            <p className="mb-1">
              {" "}
              👉 Khi quý khách hàng nhận hàng sẽ thanh toán tổng giá trị đơn
              hàng hoặc phần còn lại (sau khi khách hàng đã đặt cọc trước 10%
              với hóa đơn trên 15tr đồng).
            </p>
            <p className="mb-1">
              {" "}
              <span className="font-semibold">Lưu ý : </span>Chỉ áp dụng tại Tp.
              Hồ Chí Minh – các đơn ở tỉnh buộc phải thanh toán 100% để được
              FREESHIP ( Với hóa đơn trên 2 triệu) và giao hàng.
            </p>
            <p className="mb-1">
              {" "}
              👉 Quý khách sẽ thanh toán tại địa điểm nhận hàng đã đặt cho nhân
              viên giao nhận của Sao Chổi hoặc đơn vị vận chuyển mà Sao Chổi sử
              dụng.
            </p>
          </div>
        </div>
        {/* Shipper */}
        <h2 className="text-center uppercase text-[#1435c3] font-medium text-lg mt-8">
          ~ cám ơn quý khách ~
        </h2>
      </motion.div>
    </Helmet>
  );
};

export default Payment;
