import React from "react";
import { motion } from "framer-motion";
import Helmet from "../common/Helmet";
const Maintain = () => {
  return (
    <Helmet title="Bảo Hành">
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
          Chính sách bảo hành
        </h1>
        <h2 className="text-center uppercase text-[#1435c3] font-medium text-lg mb-8">
          ~ chính sách bảo hành ~
        </h2>
        {/* process maintain */}
        <div className="text-left mb-12">
          <h3 className="text-[#1435c3] font-medium text-lg mb-2 uppercase">
            🛑 quy trình và quy định bảo hành
          </h3>
          <span className="text-[#1435c3] font-semibold mt-8 block mb-2">
            Bước 1 :
          </span>
          <span className="mb-3 font-medium ml-3 block">
            {" "}
            Khi có nhu cầu bảo hành sản phẩm, khách hàng vui lòng liên hệ Sao
            Chổi PC qua các hình thức sau :
          </span>
          <div className="ml-7">
            <p className="mb-1"> 👉 Hotline : 0782574048 .</p>
            <p className="mb-1">
              {" "}
              👉 Trò chuyện trực tiếp tại Website hoặc Fanpage ( 0782574048 ).
            </p>
            <p className="mb-1">
              {" "}
              👉 Tới liên hệ bảo hành trực tiếp tại địa chỉ của Sao Chổi PC :
              186/27/3 Nguyễn Súy, Quận Tân Phú, TP. HCM.
            </p>
          </div>
          <span className="text-[#1435c3] font-semibold mt-8 block mb-2">
            Bước 2 :
          </span>
          <div className="ml-7">
            <p className="mb-1">
              {" "}
              👉 Sao Chổi sẽ chủ động liên hệ, bàn giao sản phẩm đã được bảo
              hành đến cho khách hàng.
            </p>
            <p className="mb-1">
              {" "}
              👉 Quý khách vui lòng đọc thông tin, số liện thoại lúc nhận sản
              phẩm trả bảo hành.
            </p>
          </div>
          <div className="mt-10">
            <span className="uppercase underline font-semibold">lưu ý</span>
            <div className="ml-7">
              <p className="mb-1">
                {" "}
                👉 Qui trình tiếp nhận, kiểm tra sản phẩm tại chỗ, khách hàng
                được giám sát.
              </p>
              <p className="mb-1">
                {" "}
                👉 Nếu không phát hiện lỗi ngay: Sao Chổi sẽ giữ lại sản phẩm để
                gửi về hãng tiếp tục kiểm tra, thời gian kiểm tra tối đa 3 ngày
                làm việc.
              </p>
              <p className="mb-1">
                {" "}
                👉 Các sản phẩm Gaming Gear & linh kiện máy tính trong 30 ngày
                đầu tiên ( trừ màn hình là 7 ngày ) nếu phát sinh lỗi kĩ thuật
                của sản phẩm sẽ được đổi mới ngay lập tức với điều kiện sản phẩm
                bị lỗi phải còn giữ nguyên tem bảo hành, hộp hoặc seal sản phẩm.
                Các sản phẩm có tương tác vật lý làm thay đổi hình dáng bên
                ngoài và cấu trúc bên trong của sản phẩm sẽ không được đổi mới.
                Các sản phẩm này sẽ được bảo hành theo chính sách của hãng.
              </p>
            </div>
          </div>
        </div>
        {/* process maintain */}
        <div className="w-full h-[1px] border border-dashed border-[black] my-4"></div>
        {/* // case no maitain  */}
        <div className="text-left">
          <h3 className="text-[#1435c3] font-medium text-lg mb-2">
            🛑 CÁC TRƯỜNG HỢP KHÔNG THUỘC DIỆN BẢO HÀNH :
          </h3>
          <div className="ml-7">
            <p className="mb-1">
              {" "}
              👉 Sản phẩm tiếp nhận không có tem bảo hành của Sao Chổi hoặc tem
              hết hạn bảo hành. Tem bảo hành trên sản phẩm bị rách, mờ hoặc có
              dấu hiệu sửa đổi, làm giả.
            </p>
            <p className="mb-1">
              {" "}
              👉 Không bảo hành sản phẩm Mainboard bị cong hoặc gãy chân, hoặc
              vi phạm các qui định khác của nhà sản xuất.
            </p>
            <p className="mb-1">
              {" "}
              👉 Sản phẩm biến dạng, trầy xước, bể, mẻ, cong, xì tụ, cháy nổ
              chip, bị chất lỏng đổ vào.
            </p>
            <p className="mb-1">
              👉 Sản phẩm có dấu hiệu cháy nổ, rỉ sét, nứt chíp, dấu vết của côn
              trùng, chuột, các loài bọ gây hư hại sản phẩm.
            </p>
            <p className="mb-1">👉 Sản phẩm đặt trong môi trường Ôxy hóa.</p>
            <p className="mb-1">
              {" "}
              👉 Sản phẩm người dùng tự ý sửa chữa trước đó.
            </p>
          </div>
        </div>
        {/* // case no maitain */}
        {/* duration maintain */}
        <div className="text-left mt-8">
          <h3 className="text-[#1435c3] font-medium text-lg mb-2">
            🛑 THỜI GIAN BẢO HÀNH ( dựa theo chính sách của hãng ) :
          </h3>
          <div className="ml-7">
            <p className="mb-1">
              👉 Sản phẩm Gaming Gear: 3 – 5 ngày không tính thứ 7 chủ nhật –
              các ngày lễ tết.
            </p>
            <p className="mb-1">
              {" "}
              👉 Sản phẩm Màn hình: 7 – 14 ngày không tính thứ 7 chủ nhật – các
              ngày lễ tết.
            </p>
            <p className="mb-1">
              {" "}
              👉 Sản phẩm Linh kiện máy tính: 7 – 14 ngày không tính thứ 7 chủ
              nhật – các ngày lễ tết.
            </p>
            <p className="mb-1">
              👉 Trường hợp sản phẩm nằm ngoài chính sách bảo hành, Sao Chổi sẽ
              đề xuất sửa chữa có tính phí nếu phát sinh chi phí sửa chữa.
            </p>
            <p className="mb-1">👉 Sản phẩm đặt trong môi trường Ôxy hóa.</p>
            <p className="mb-1">
              {" "}
              👉 Trường hợp nếu sản phẩm lỗi do người sử dụng không có khả năng
              sửa chữa được, Sao Chổi sẽ hoàn trả lại sản phẩm lỗi cho khách
              hàng.
            </p>
          </div>
        </div>
        {/* duration maintain */}
        <div className="w-full h-[1px] border border-dashed border-[black] my-8"></div>
        {/* policy lie */}
        <div className="text-left mt-8">
          <h2 className="text-center uppercase text-[#1435c3] font-medium text-lg mb-8">
            ~ chính sách đổi trả ~
          </h2>
          <h3 className="text-[#1435c3] font-medium text-lg mb-2">
            🛑 CHÍNH SÁCH ĐỔI TRẢ SẢN PHẨM CỦA CN :
          </h3>
          <span className="text-[#1435c3] font-medium text-base my-3 block">
            {" "}
            + Trả hàng và hoàn lại tiền 100% theo hoá đơn bán hàng :
          </span>
          <div className="ml-7">
            <p className="mb-1">
              👉 Giao hàng không đúng theo đơn đặt hàng của quý khách .
            </p>
            <p className="mb-1">
              {" "}
              👉 Sản phẩm bị lỗi tự nhiên còn trong thời hạn đổi mới nhưng không
              còn sản phẩm đổi và khách hàng không muốn đổi sang sản phẩm tương
              tự.
            </p>
          </div>
          <span className="text-[#1435c3] font-medium text-base my-3 block">
            {" "}
            + Trả hàng và hoàn lại tiền 100% theo hoá đơn bán hàng :
          </span>
          <div className="ml-7">
            <p className="mb-1">
              {" "}
              👉 Phí 5% trên hóa đơn sản phẩm trả của Sao Chổi ( từ ngày thứ 1
              đến ngày thứ 7 ) : máy chưa qua sử dụng .
            </p>
            <p className="mb-1">
              👉 Phí 10% trên hóa đơn sản phẩm trả của Sao Chổi ( từ ngày thứ 1
              đến ngày thứ 7 ) : máy đã qua sử dụng.
            </p>
            <p className="mb-1">
              {" "}
              👉 Kể từ ngày giao hàng , quá thời hạn 7 ngày sản phẩm đã mua sẽ
              không được áp dụng chính sách trả hàng của CN.
            </p>
            <p className="text-center italic mt-4 font-normal">
              ( Chính sách trên không áp dụng đối với các mã màn hình)
            </p>
          </div>
          <span className="uppercase font-semibold underline text-lg mt-8 block">
            LƯU Ý – YÊU CẦU VỀ TRẢ HÀNG :
          </span>
          <div className="ml-7 mt-4">
            <p className="mb-1">
              {" "}
              👉 Sản phẩm phải còn nguyên vẹn, không bị lỗi, không bị trầy xước
              . Tem/nhãn trên máy còn nguyên vẹn.
            </p>
            <p className="mb-1">
              👉 Bắt buộc phải đầy đủ các giấy tờ – phụ kiện kèm theo trong
              thùng máy và chứng từ mà Sao Chổi đã xuất như lúc khách hàng nhận
              hàng ( bao gồm cả quà tặng ).
            </p>
            <p className="mb-1">
              {" "}
              👉 Sao Chổi sẽ hoàn tiền trễ nhất trong vòng 48h dưới hình thức
              tiền mặt hoặc chuyển khoản theo yêu cầu của khách hàng.
            </p>
            <p className="mb-1">
              {" "}
              👉 Sao Chổi sẽ không áp dụng chính sách trả hàng nếu như sản phẩm
              không đáp ứng đầy đủ các yêu cầu trên.
            </p>
          </div>
        </div>
        {/* policy lie */}
        <div className="w-full h-[1px] border border-dashed border-[black] my-8"></div>
        {/* policy product fail */}
        <div className="text-left">
          <h3 className="text-[#1435c3] font-medium text-lg mb-2">
            🛑 Chính sách đổi mới sản phẩm bị lỗi :
          </h3>
          <div className="ml-7">
            <p className="mb-1">
              {" "}
              👉 Khách hàng vui lòng kiểm tra kĩ hàng hóa trước khi thanh toán
              hoặc ngay khi nhận hàng. Sao Chổi sẽ không chịu trách nhiệm đối
              với hàng hóa bị lỗi không phải do nhà sản xuất gây ra sau khi
              khách Hàng đã nhận hàng.
            </p>
            <p className="mb-1">
              {" "}
              👉 Trong trường hợp sản phẩm của khách hàng bị hư hại trong quá
              trình vận chuyển, quý khách vui lòng từ chối nhận và báo ngay cho
              Sao Chổi để được đổi sản phẩm mới.
            </p>
            <p className="mb-1">
              {" "}
              👉 Đổi mới hàng hóa trong vòng 30 ngày ( trừ màn hình là 7 ngày )
              kể từ ngày giao hàng . Hàng hóa bị lỗi phải được xác định là lỗi
              kỹ thuật do nhà sản xuất (cần có xác nhận của Hãng đối với một số
              trường hợp phức tạp); sản phẩm yêu cầu không bị trầy xước, nứt mẻ
              (còn nguyên mới giống như lúc Khách hàng nhận hàng); phụ kiện kèm
              theo phải còn mới, hộp/thùng còn nguyên vẹn, đầy đủ chứng từ như
              khi Sao Chổi giao hàng.
            </p>
            <p className="mb-1">
              👉 Lỗi màn hình điểm chết phải từ 5 điểm chết trở lên mới được đổi
              mới ( quy định hãng ).
            </p>
          </div>
        </div>
        {/* policy product fail */}
        <div className="w-full h-[1px] border border-dashed border-[black] my-8"></div>
        {/* resolve lie product */}
        <div className="text-left">
          <h3 className="text-[#1435c3] font-medium text-lg mb-2">
            🛑 Chính sách đổi mới sản phẩm bị lỗi :
          </h3>
          <div className="ml-7">
            <p className="mb-1">
              {" "}
              👉 Sản phẩm bị lỗi được xác định là lỗi do người dùng (phải nhờ bộ
              phận kỹ thuật hãng kiểm tra với 1 số trường hợp đặc thù).
            </p>
            <p className="mb-1">
              {" "}
              👉 Sản phẩm không còn mới 100%: trầy xước, móp méo, không còn
              nguyên vẹn như lúc đầu, không đầy đủ phụ kiện, thùng/hộp sản phẩm.
            </p>
            <p className="mb-1">
              {" "}
              👉 Các logo của laptop, tem của hãng hay của Sao Chổi đều phải đảm
              bảo nguyên vẹn, không bị bung hay tháo rời dưới mọi hình thức
              trong thời gian đổi trả máy. Khách hàng tuyệt đối không được dán
              màn hình trong thời gian đổi trả máy để đảm bảo màn hình không bị
              xước, nếu khách hàng tự ý dán thì nhờ khách hàng tự lấy ra.
            </p>
            <p className="mb-1">
              👉 Những lí do cảm tính như: “Tôi không thích máy này nữa”, “Máy
              này quá yếu”, “Máy này màn hình không như tôi mong muốn”…
            </p>
          </div>
        </div>
        {/* resolve lie product */}

        <h2 className="text-center uppercase text-[#1435c3] font-medium text-lg mt-8">
          ~ cám ơn quý khách ~
        </h2>
      </motion.div>
    </Helmet>
  );
};

export default Maintain;
