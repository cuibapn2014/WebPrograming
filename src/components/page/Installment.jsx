import React from "react";
import { motion } from "framer-motion";
import Helmet from "../common/Helmet";
const Installment = () => {
  return (
    <Helmet title="Trả Góp">
      <motion.div
        className="container mx-auto "
        initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
        animate={{ clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)" }}
        exit={{
          clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
          transition: { duration: 0.1 },
        }}
      >
        <h1 className="text-left text-2xl font-medium my-7">
          Hướng dẫn trả góp 0%
        </h1>
        <h3 className="text-[#1435c3] font-medium text-left text-lg mb-2">
          Thanh toán trả góp thông qua CMND/Sổ hộ khẩu :
        </h3>
        <h3 className="text-[#1435c3] font-medium text-left text-lg mb-2">
          🛑 Quy trình duyệt hồ sơ trả góp thông qua CMND / Sổ hộ khẩu:
        </h3>
        <p className="text-left">
          Khách hàng ghé Showroom CN đem theo giấy tờ theo đúng hạn mức muốn
          được trả góp (đề cập ở phía dưới) , Sao Chổi sẽ có chuyên viên ngân
          hàng HD SAISON tư vấn và thực hiện thủ tục tại chỗ nhanh chóng cho quý
          khách.
        </p>

        {/* Chính sách quy định */}
        <div className="text-left mt-5">
          <h3 className="font-medium text-lg mb-2">
            {" "}
            👉 Chính sách quy định :{" "}
          </h3>
          <p className="flex items-center ml-2">
            <span className="font-semibold text-2xl mr-1">+</span> Khách hàng
            phải nằm trong độ tuổi từ 19 - 70 tuổi.
          </p>
          <p className="flex items-center ml-2">
            <span className="font-semibold text-2xl mr-1">+</span> Khách hàng
            không được có nợ xấu ( hoặc người thân có nợ xấu ).
          </p>
          <p className="flex items-center ml-2">
            <span className="font-semibold text-2xl mr-1">+</span> Yêu cầu trả
            trước từ 10% - 70% giá trị của đơn hàng.
          </p>
          <p className="flex items-center ml-2">
            <span className="font-semibold text-2xl mr-1">+</span> Áp dụng cho
            toàn bộ sản phẩm trên 2 triệu đồng tại CN PC.
          </p>
        </div>
        {/* Chính sách quy định */}
        <h3 className="text-left mt-10 font-semibold text-lg">
          {" "}
          👇 Dưới đây là hồ sơ quý khách cần mang khi thanh toán trả góp :
        </h3>
        {/* Limit Payment */}
        <div className="text-left mt-5">
          {/* 2 -12 */}
          <div className="mb-5">
            <h4 className="text-[#1435c3] text-xl font-semibold">
              <span className="text-[red] mr-1">♦</span> Đơn hàng từ 2 - 12
              Triệu
            </h4>
            <p className=" my-3">
              <span className="font-semibold text-2xl mr-1">+</span>
              Khách hàng cần đem{" "}
              <span className="font-semibold">CMND/CCCD</span> (không bắt buộc
              thẻ gắn chip)
            </p>
          </div>
          {/* 2 -12 */}
          {/* 2 -20 */}
          <div className="mb-5">
            <h4 className="text-[#1435c3] text-xl font-semibold mb-4">
              <span className="text-[red] mr-1">♦</span> Đơn hàng từ 2 - 20
              Triệu
            </h4>
            <p className="">
              <span className="font-semibold text-2xl mr-1">+</span>Khách hàng
              cần đem <span className="font-semibold mx-1"> CMND/CCCD.</span>
            </p>
            <p className="">
              <span className="font-semibold text-2xl mr-1">+</span>Khách hàng
              cần đem <span className="font-semibold mx-1"> Sổ hậu khẩu</span>(
              hoặc <span className="font-semibold mx-1">Giấy phép lấy xe</span>
              ).
            </p>
            <p>
              <span className="font-semibold text-[red]"> ! Lưu ý : </span> Nếu{" "}
              <span className="font-semibold mr-1">CCCD</span>là mẫu mới có gắn
              chip thì chỉ cần đem theo.{" "}
              <span className="font-semibold">CCCD</span>, không cần{" "}
              <span className="uppercase font-semibold">shk,gplx.</span>
            </p>
          </div>
          {/* 2 -20 */}
          {/* 20 - 30 */}
          <div className="mb-5">
            <h4 className="text-[#1435c3] text-xl font-semibold mb-4">
              <span className="text-[red] mr-1">♦</span> Đơn hàng từ 20 - 30
              Triệu
            </h4>
            <p className="">
              <span className="font-semibold text-2xl mr-1">+</span>Khách hàng
              cần đem <span className="font-semibold mx-1"> CMND/CCCD.</span>
            </p>
            <p className="">
              <span className="font-semibold text-2xl mr-1">+</span>Khách hàng
              cần đem <span className="font-semibold mx-1"> Sổ hộ khẩu</span>(
              hoặc <span className="font-semibold mx-1">Giấy phép lấy xe</span>
              ).
            </p>
            <p className="">
              <span className="font-semibold text-2xl mr-1">+</span>Khách hàng
              cần đem{" "}
              <span className="font-semibold mx-1">
                Hóa đơn tiền điện / nước / Internet / Truyền hình cáp{" "}
              </span>
              tại địa chỉ trùng với hậu khẩu.
            </p>
            <p>
              <span className="font-semibold text-[red]"> ! Lưu ý : </span>{" "}
              Khách hàng cần trả trước{" "}
              <span className="font-semibold ">30%</span> giá trị đơn hàng.
            </p>
          </div>
          {/* 20 - 30 */}
          {/* 30 - 60 */}
          <div className="mb-5">
            <h4 className="text-[#1435c3] text-xl font-semibold mb-4">
              <span className="text-[red] mr-1">♦</span> Đơn hàng từ 30 - 60
              Triệu
            </h4>
            <p className="">
              <span className="font-semibold text-2xl mr-1">+</span>Khách hàng
              cần đem <span className="font-semibold mx-1"> CMND/CCCD.</span>
            </p>
            <p className="">
              <span className="font-semibold text-2xl mr-1">+</span>Khách hàng
              cần đem <span className="font-semibold mx-1"> Sổ hộ khẩu</span>(
              hoặc <span className="font-semibold mx-1">Giấy phép lấy xe</span>
              ).
            </p>
            <p className="">
              <span className="font-semibold text-2xl mr-1">+</span>Khách hàng
              cần đem{" "}
              <span className="font-semibold mx-1">
                Hóa đơn tiền điện / nước / Internet / Truyền hình cáp{" "}
              </span>
              tại địa chỉ trùng với hậu khẩu.
            </p>
            <p className="">
              <span className="font-semibold text-2xl mr-1">+</span>Khách hàng
              cần đem{" "}
              <span className="font-semibold mx-1">
                sao kê tài khoản ngân hàng nhận lương 3 tháng gần nhất / Hợp
                đồng lao động / Bảo hiểm y tế.{" "}
              </span>
            </p>
            <p className="mt-2">
              <span className="font-semibold text-[red]"> ! Lưu ý : </span>{" "}
              Khách hàng cần trả trước{" "}
              <span className="font-semibold ">30%</span> giá trị đơn hàng.
            </p>
          </div>
          {/* 30 - 60 */}
        </div>
        {/* Limit Payment */}
        {/* Finnish  Information*/}
        <div className="text-left">
          <h4 className="font-semibold text-base"> 👉 Lưu ý :</h4>
          <p className="flex items-center">
            <span className="font-semibold text-2xl mr-1">+</span> Thời gian
            duyệt hồ sơ: từ 10 - 20 phút.
          </p>
          <p className="flex items-center">
            <span className="font-semibold text-2xl mr-1">+</span> HD Saison chỉ
            kiểm tra xong giấy tờ gốc và gửi lại, không giữ bất cứ giấy tờ gì
            của khách hàng.
          </p>
          <p className="flex items-center">
            <span className="font-semibold text-2xl mr-1">+</span> Khách hàng
            vẫn nhận đủ các chương trình khuyến mãi mà Sao Chổi đang áp dụng đối
            với mọi sản phẩm.
          </p>
        </div>
        {/* Finnish  Information*/}

        {/* Installment by cards */}
        <div className="w-full h-[1px] border border-dashed border-[black] my-4"></div>
        <h3 className="text-[#1435c3] font-medium text-left text-lg mb-2">
          Thanh toán trả góp qua thẻ tín dụng:
        </h3>
        {/* benefit by customer */}
        <div>
          <h3 className="text-[#1435c3] font-medium text-left text-lg mb-2">
            🛑 Lợi ích của khách khi mua trả góp tại CN PC :
          </h3>

          <div className="text-left ml-6">
            <p className="mb-1">
              {" "}
              👉 Chỉ cần có thẻ tín dụng là đăng kí được chương trình trả góp
              0%.
            </p>
            <p className="mb-1"> 👉 Hỗ trợ trả góp từ xa và trực tiếp.</p>
            <p className="mb-1">
              {" "}
              👉 Nhận đầy đủ các chương trình khuyễn mãi tại cửa hàng.
            </p>
            <p className="mb-1">
              👉 Thủ tục vô cùng đơn giản, không cần đem hồ sơ, giấy tờ rườm rà.
            </p>
            <p className="mt-4 text-[#1435c3] font-semibold">
              {" "}
              💨 Lưu ý : Quý khách hãy liên hệ CN qua Zalo (0941099504) để được
              hướng dẫn làm thủ tục chi tiết nhé.
            </p>
          </div>
        </div>
        {/* benefit by customer */}
        {/* condition apply */}
        <div className="mt-10">
          <h3 className="text-[#1435c3] font-medium text-left text-lg mb-2">
            🛑 Điều kiện áp dụng trả góp thông qua Mpos (thẻ tín dụng) :
          </h3>

          <div className="text-left ml-6">
            <p className="mb-1">
              {" "}
              👉 Áp dụng cho toàn bộ sản phẩm trên 3 triệu đồng tại Sao Chổi PC.
            </p>
            <p className="mb-1">
              {" "}
              👉 Khách hàng cần phải có thẻ tín dụng trong nước và đủ hạn mức
              khả dụng để thanh toán trả góp.
            </p>
          </div>
        </div>
        {/* condition apply */}
        {/* service fee */}
        <div className="mt-10">
          <h3 className="text-[#1435c3] font-medium text-left text-lg mb-2">
            🛑 Biểu phí dịch vụ chuyển đổi trả góp 0% lãi suất :
          </h3>

          <div className="text-left ml-6">
            <p className="font-semibold my-5">
              {" "}
              Khách hàng cần phải thanh toán phí sau để thực hiện chuyển đổi trả
              góp 0% lãi suất :
            </p>
            <p className="mb-1">
              {" "}
              👉 <span className="font-semibold">Phí cà thẻ :</span> trực tiếp
              1,9% HOẶC online ( trả góp từ xa) : 2,2%
            </p>
            <p className="mb-1">
              {" "}
              👉 <span className="font-semibold">
                Phí chuyển đổi trả góp :
              </span>{" "}
              tính theo số tháng khách hàng muốn trả góp và tùy thuộc ngân hàng
              sẽ có phí khác nhau :
            </p>
          </div>
          <div className="text-left mt-5">
            <p>
              {" "}
              📌​​​​​​ Biểu phí dịch vụ để tiến hành chuyển đổi trả góp 0% :
            </p>
            <div>
              <img src="https://w.ladicdn.com/s1550x2600/5bf3dc7edc60303c34e4991f/tra-gop-ab-38-20210805100427.png" />
            </div>
            <span className="uppercase font-semibold text-base underline">
              Lưu ý :
            </span>
            <p className="mt-2 mb-1">
              (*) Đối với MaritimeBank: Theo quy định của ngân hàngMaritimebank,
              ngân hàng sẽ thêm của chủ thẻ 3% phí quản lý dịch vụ trả góp trên
              giá trị giao dịch đối với kỳ hạn 3, 9, 12 tháng và miễn phí dịch
              vụ quản lý đối với kỳ hạn 6 tháng.
            </p>
            <p className="mt-2 mb-1">
              (**) Đối với Techcombank: Theo quy định của ngân hàng Techcombank,
              ngân hàng sẽ thu chủ thẻ phí chuyển đổi giao dịch trả góp là
              1,1%*Giá trị giao dịch (đã bao gồm VAT, tối thiểu 100.000VNĐ/1
              giao dịch).
            </p>
            <p className="mt-2 mb-1">
              (***) Đối với FE Credit: Đơn vị phát hành thẻ sẽ thu thêm phí
              chuyển đổi giao dịch trả góp (thu một lần và chưa bao gồm VAT) của
              chủ thẻ như sau:
            </p>
            <table className="mt-2">
              <tbody>
                <tr>
                  <td className="border border-[black] p-4">Loại phí/Kỳ hạn</td>
                  <td className="border border-[black] p-4">03 tháng</td>
                  <td className="border border-[black] p-4">06 tháng</td>
                  <td className="border border-[black] p-4">09 tháng</td>
                  <td className="border border-[black] p-4">12 tháng</td>
                </tr>
                <tr>
                  <td className="border border-[black] p-4">
                    Phí chuyển đổi trả góp (VPB FC thu của Chủ Thẻ)
                  </td>
                  <td className="border border-[black] p-4">0.99%</td>
                  <td className="border border-[black] p-4">0.99%</td>
                  <td className="border border-[black] p-4">0.99%</td>

                  <td className="border border-[black] p-4">0.99%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* service fee */}
        {/* case no apply installment */}
        <div className="mt-10">
          <h3 className="text-[#1435c3] font-medium text-left text-lg mb-2">
            🛑 CÁC TRƯỜNG HỢP KHÔNG ÁP DỤNG TRẢ GÓP 0% :
          </h3>

          <div className="text-left ml-6">
            <p className="mb-1"> 👉 Thẻ ATM, thẻ Visa, Master trả trước.</p>
            <p className="mb-1">
              {" "}
              👉Thẻ không thuộc các hệ thống ngân hàng mà mPOS hỗ trợ.
            </p>
          </div>
        </div>
        {/* case no apply installment */}
        {/* question usually asked */}
        <div className="mt-10">
          <h3 className="text-[#1435c3] font-medium text-left text-lg mb-2">
            🛑 Các câu hỏi thường gặp :
          </h3>

          <div className="text-left ml-6">
            <span className="font-semibold">
              - Có thể thanh toán số tiền góp trước kì hạn nộp được không ?
            </span>
            <p className="mb-1 mt-2">
              {" "}
              👉 Khách hàng có thể thanh toán số tiền trả góp trước kỳ hạn vào
              bất kỳ lúc nào. Trong trường hợp này, lãi suất 0% vẫn được áp dụng
              cho số tiền trả góp của khách hàng.
            </p>
            <span className="font-semibold">
              - Khi gặp sự cố các vấn đề tín dụng , mình cần gặp ai để được xử
              lí ?
            </span>
            <p className="mb-1 mt-2">
              {" "}
              👉 Khi gặp sự cố, quý khách hàng xin vui lòng liên hệ với bộ phận
              hỗ trợ khách hàng MPOS, số điện thoại 1900.63.64.88.
            </p>
            <span className="font-semibold">
              - Có thể tham gia các chương trình trả góp 0% tại đâu ?
            </span>
            <p className="mb-1 mt-2">
              {" "}
              👉 Chương trình “Trả Góp Lãi Suất 0%” được lựa chọn áp dụng tại
              các điểm kinh doanh của CN PC.
            </p>
          </div>
        </div>
        {/* question usually asked */}
        <h2 className="text-center uppercase text-[#1435c3] font-medium text-lg mt-8">
          ~ cám ơn quý khách ~
        </h2>
        {/* Installment by cards */}
      </motion.div>
    </Helmet>
  );
};

export default Installment;
