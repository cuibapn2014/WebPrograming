import React from "react";
import { motion } from "framer-motion";
import Helmet from "../common/Helmet";

const Delivery = () => {
  return (
    <Helmet title="Vận Chuyển">
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
          Chính sách giao hàng và vận chuyển
        </h1>
        <div className="flex justify-center mt-4 mb-8">
          <img src="https://file.hstatic.net/200000397235/file/banner_van_chuyen_cae99fd3ae7e4eaa9160f48ab06d9b9f_grande.png" />
        </div>
        <h2 className="text-center uppercase text-[#1435c3] font-medium text-lg mb-8">
          ~ chính sách vận chuyển ~
        </h2>
        {/* quy uoc */}
        <div className="text-left">
          <h3 className="text-[#1435c3] font-medium text-lg mb-2">
            🛑 Quy ước :
          </h3>
          <div className="ml-7">
            <p className="mb-1">
              {" "}
              👉Nội thành TP. Hồ Chí Minh: Quận 1, 3, 4, 5, 6, 7, 8, 10, 11, Tân
              Phú, Tân Bình, Phú Nhuận, Gò Vấp, Bình Thạnh, Bình Tân.
            </p>
            <p className="mb-1">
              {" "}
              👉 Ngoại thành TP. Hồ Chí Minh Quận 12, TP. Thủ Đức (Thủ Đức, Q2,
              Q9), Huyện Củ Chi, Huyện Hóc Môn, Huyện Bình Chánh, Huyện Nhà Bè.
            </p>
          </div>
        </div>
        {/* quy uoc */}
        {/* fee shipper */}
        <div className="text-left mt-8">
          <h3 className="text-[#1435c3] font-medium text-lg mb-2">
            🛑 Chi phí giao hàng trong TP.HCM :
          </h3>
          <div className="ml-7">
            <p className="mb-1">
              {" "}
              👉 Miễn phí 100% phí giao hàng với đơn hàng ≥ 1 triệu đồng.
            </p>
            <p className="mb-1">
              {" "}
              👉 Với các đơn hàng giá trị dưới 1 triệu đồng , Sao Chổi sẽ tính
              phí giao hàng như sau :
            </p>
            <span className="block ml-10">
              + Các quận nội thành : phí ship là 25k
            </span>
            <span className="block ml-10">
              {" "}
              + Các quận ngoại thành : phí ship là 35k{" "}
            </span>
          </div>
        </div>
        {/* fee shipper */}

        {/* ship in HCM */}
        <div className="text-left mt-8">
          <h3 className="text-[#1435c3] font-medium text-lg mb-2">
            🛑 Giao nhận, vận chuyển trong TP.HCM :
          </h3>
          <div className="ml-7">
            <p className="mb-1">
              {" "}
              👉 Thời gian vận chuyển là khoảng 1 ngày kể từ lúc quý khách đặt
              hàng.
            </p>
            <p className="mb-1">
              {" "}
              👉 Với hàng hóa là PC trên 15 triệu , quý khách vui lòng cọc 10%
              giá trị PC để bảo đảm nhận hàng.
            </p>
          </div>
        </div>
        {/* ship in HCM */}

        {/* customer live town */}
        <div className="text-left mt-8">
          <h3 className="text-[#1435c3] font-medium text-lg mb-2">
            🛑 Khách hàng ở tỉnh :
          </h3>
          <div className="ml-7">
            <p className="mb-1">
              {" "}
              👉 Với các đơn hàng đi tỉnh, khách hàng vui lòng thanh toán 100%
              hóa đơn giúp Sao Chổi nhé.
            </p>
            <p className="mb-1 font-medium">
              {" "}
              👉 Phí vận chuyển được FREESHIP khi khách đặt hàng ở tỉnh với hóa
              đơn trên 2 triệu đồng.
            </p>
          </div>
        </div>
        {/* customer live town */}
        <div className="text-left mt-8">
          <h3 className="text-[#1435c3] font-medium text-lg mb-2">
            🛑 Ship hàng bằng nhà xe :
          </h3>
          <div className="ml-7">
            <p className="mb-1">
              {" "}
              👉 Ưu Điểm: Tiết kiệm thời gian và an toàn. Hàng hóa có thể nhận
              được trong ngày mà không cần chờ đợi lâu.
            </p>
            <p className="mb-1">
              {" "}
              👉 Nếu nhà khách hàng gần chành xe có thể ra chành xe nhận hàng
              hoặc chành xe giao trực tiếp trên các cung đường xe đi có sẵn.
            </p>
            <p className="mb-1">
              {" "}
              👉 Khi chọn dịch vụ vận chuyển là nhà xe, quý khách vui lòng thanh
              toán 100% hóa đơn – vì nhà xe{" "}
              <span className="font-medium">không nhận COD</span>.
            </p>
          </div>
        </div>
        <h2 className="text-center uppercase text-[#1435c3] font-medium text-lg mt-8">
          ~ cám ơn quý khách ~
        </h2>
      </motion.div>
    </Helmet>
  );
};

export default Delivery;
