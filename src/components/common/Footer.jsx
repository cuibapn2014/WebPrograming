import React, { useState } from "react";
// import { IoMailOpenOutline } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { RiSendPlaneFill } from "react-icons/ri";
import { BsFillTelephoneFill, BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isFalseMenu } from "../../redux/actions";
import axios from "axios";
import { toast } from "react-toastify";
const Footer = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.tokenDefault);
  const [email, setEmail] = useState("");
  const handleOntop = (e) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleSentMail = async () => {
    let dataEmail = new FormData();
    dataEmail.append("email", email);
    // console.log("check email", email);

    try {
      let res = await axios({
        method: "POST",
        url: "http://localhost:8085/api/v1/client/insert",
        data: dataEmail,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("check res email", res);
      if (res && res.data && res.data.status === 200) {
        toast.success("Đăng kí nhận khuyến mãi thành công");
        setEmail("");
      }
    } catch (e) {
      console.log("email fail", e.message);
      toast.warn("Email không hợp lệ");
    }
  };
  return (
    <div className="mt-5">
      {/* footer block 1 */}
      <div className="bg-[#1435c3] flex items-center lg:flex-row flex-col p-3 justify-between ">
        <div className="flex items-center lg:ml-10">
          <span className="text-white mr-5">
            <HiOutlineMail size={"50px"} />
          </span>
          <div className="max-w-[300px] text-left text-white">
            <h5 className="text-xl font-semibold">Nhận tin khuyến mãi</h5>
            <span className="text-sm italic font-normal">
              Bạn vui lòng để lại Email để nhận thông tin khuyến mãi từ CnShop
            </span>
          </div>
        </div>
        <div className="lg:w-[595px] w-full relative lg:mr-10 mt-2 lg:mt-0">
          <input
            className="px-1 pl-2 py-2 border-none outline-none rounded-md w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div
            className="text-[#1435c3] absolute top-[50%] right-4 translate-y-[-50%] cursor-pointer hover:text-[#8598f0]"
            onClick={handleSentMail}
          >
            <RiSendPlaneFill size={"20px"} />
          </div>
        </div>
      </div>
      {/* footer block 1 */}
      {/* footer block 2 */}
      <div className="container mx-auto mt-10">
        <div className="flex flex-wrap justify-between">
          {/* block1 */}
          <div className="text-left xl:w-[15%] lg:w-[20%] md:w-[30%] sm:w-[45%]">
            <h3 className="text-base font-semibold uppercase mb-3">
              hệ thống cửa hàng
            </h3>
            <div className="mb-2">
              <h4 className="text-[13px]">Flagship store 1</h4>
              <p className="text-[12px]">
                12-12Bis, Đường CMT8, Phường Bến Thành, Quận 1, Tp. Hồ Chí Minh.
              </p>
            </div>
            <div className="mb-2">
              <h4 className="text-[13px]">Flagship store 1</h4>
              <p className="text-[12px]">
                12-12Bis, Đường CMT8, Phường Bến Thành, Quận 1, Tp. Hồ Chí Minh.
              </p>
            </div>
            <div className="mb-2">
              <h4 className="text-[13px]">Flagship store 1</h4>
              <p className="text-[12px]">
                12-12Bis, Đường CMT8, Phường Bến Thành, Quận 1, Tp. Hồ Chí Minh.
              </p>
            </div>
            <div className="mb-2">
              <h4 className="text-[13px]">Flagship store 1</h4>
              <p className="text-[12px]">
                12-12Bis, Đường CMT8, Phường Bến Thành, Quận 1, Tp. Hồ Chí Minh.
              </p>
            </div>
          </div>
          {/* block1 */}
          {/* block2 */}
          <div className="text-left xl:w-[15%] lg:w-[20%] md:w-[30%] sm:w-[45%]">
            <h3 className="text-base font-semibold uppercase mb-3">
              thông tin công ty
            </h3>
            <div>
              <p className="text-[13px] mb-1">Công ty Cổ Phần ICON AND DENIM</p>
              <p className="text-[13px] mb-1">
                Mã số doanh nghiệp: 0315388548.
              </p>
              <p className="text-[13px] mb-1">
                Giấy chứng nhận đăng ký doanh nghiệp do Sở Kế hoạch & Đầu tư Tp.
                Hồ Chí Minh cấp ngày 14/11/2018
              </p>
            </div>

            <div>
              <h4 className="text-[13px] font-semibold">Email liên hệ:</h4>
              <p className="text-[12px]">cskh@icondenim.com</p>
            </div>
            <div>
              <h4 className="text-[13px] font-semibold">Liên hệ hợp tác:</h4>
              <p className="text-[12px]">0386.336.111</p>
            </div>
          </div>
          {/* block2
      
          {/* block3 */}
          <div className="text-left  xl:w-[15%] lg:w-[20%] md:w-[30%] sm:w-[45%]">
            <h3 className="text-base font-semibold uppercase mb-3">
              thông tin chính sách
            </h3>
            <p className="text-[12px] mb-1" onClick={handleOntop}>
              <Link
                to="/chinh-sach-bao-hanh"
                onClick={() => dispatch(isFalseMenu())}
              >
                Chính sách bảo hành
              </Link>
            </p>
            <p className="text-[12px] mb-1" onClick={handleOntop}>
              {" "}
              <Link
                to="/chinh-sach-van-chuyen"
                onClick={() => dispatch(isFalseMenu())}
              >
                Chính sách vận chuyển
              </Link>
            </p>
            <p className="text-[12px] mb-1" onClick={handleOntop}>
              {" "}
              <Link
                to="/huong-dan-tra-gop"
                onClick={() => dispatch(isFalseMenu())}
              >
                Hướng dẫn trả góp
              </Link>
            </p>
            <p className="text-[12px] mb-1" onClick={handleOntop}>
              {" "}
              <Link
                to="/huong-dan-thanh-toan"
                onClick={() => dispatch(isFalseMenu())}
              >
                Hướng dẫn thanh toán
              </Link>
            </p>
          </div>
          {/* block3 */}
          {/* block4 */}
          <div className="text-left  xl:w-[15%] lg:w-[20%] md:w-[33%] sm:w-[45%]">
            <h3 className="text-base font-semibold uppercase mb-3">liên hệ</h3>
            <div>
              <p className="text-[13px] uppercase font-semibold">
                tư vấn bán hàng (9:00-21:30)
              </p>
              <div className="flex items-center">
                <BsFillTelephoneFill className="mr-2" />
                <span>0941099503</span>
              </div>
              <p className="text-[12px]">Phím 1 - Tất cả các ngày trong tuần</p>
            </div>

            <div className="mt-2">
              <p className="text-[13px] uppercase font-semibold">
                chăm sóc khách hàng (9:00-21:00)
              </p>
              <div className="flex items-center">
                <BsFillTelephoneFill className="mr-2" />
                <span>0941099975</span>
              </div>
              <p className="text-[12px]">Phím 2 - Tất cả các ngày trong tuần</p>
            </div>
            <div className="mt-2 text-[13px] uppercase font-semibold">
              <h4>phương thức thanh toán</h4>
              <div className="flex flex-wrap justify-between items-center mt-4">
                <div className="w-[30%]">
                  <img src="https://theme.hstatic.net/1000360022/1000759577/14/ft_img_payment_1_img.png?v=549" />
                </div>
                <div className="w-[30%]">
                  <img src="https://theme.hstatic.net/1000360022/1000759577/14/ft_img_payment_2_img.png?v=549" />
                </div>
                <div className="w-[30%]">
                  <img src="	https://theme.hstatic.net/1000360022/1000759577/14/ft_img_payment_3_img.png?v=549" />
                </div>
                <div className="w-[30%]">
                  <img src="https://theme.hstatic.net/1000360022/1000759577/14/ft_img_payment_4_img.png?v=549" />
                </div>
                <div className="w-[30%]">
                  <img src="https://theme.hstatic.net/1000360022/1000759577/14/ft_img_payment_5_img.png?v=549" />
                </div>
                <div className="w-[30%]">
                  <img src="https://theme.hstatic.net/1000360022/1000759577/14/ft_img_payment_6_img.png?v=549" />
                </div>
              </div>
            </div>
          </div>
          {/* block4 */}
          {/* block5 */}
          <div className="text-left  xl:w-[30%] lg:w-[30%] md:w-[30%] sm:w[30%]">
            <h3 className="text-base font-semibold uppercase mb-3">
              đóng góp ý kiến cho CnShop
            </h3>
            <div>
              <p className="text-[14px]">
                CnShop luôn lắng nghe mọi đóng góp ý kiến từ khách hàng để hoàn
                thiện sản phẩm, dịch vụ mỗi ngày.
              </p>
              <div className=" mt-3 aspect-video relative">
                <img
                  className="w-[80%] h-[80%]"
                  src="https://cdn.tgdd.vn/hoi-dap/1358128/pc-personal-computer-la-gi-pc-co-phai-la-may-tinh-de-ban-7-800x560.jpg "
                />
                <div className="absolute top-2 left-2">
                  <div className="flex">
                    <img src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t1.6435-1/61713215_842366782823091_324946982118359040_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=1&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=xyviH_v5jZ4AX8WuGnj&_nc_ht=scontent.fsgn5-14.fna&edm=ADwmN6EEAAAA&oh=00_AT_FB_uaNAouFEHZLxnNbwsEjwtHVQbcQLAAfEgiCeiAuw&oe=6266C24E" />
                    <div className="text-white ml-3">
                      <span className="block uppercase">CnShop</span>
                      <span className="text-sm">254K likes</span>
                    </div>
                  </div>
                </div>
                <a
                  href="https://www.facebook.com/TrangNemo2021"
                  target="_blank"
                >
                  <div className="absolute bottom-[25%] left-2 flex items-center bg-white px-2 py-1 rounded-sm">
                    <BsFacebook className="mr-2" />
                    Like page
                  </div>
                </a>
              </div>
            </div>
            <div className="w-1/2">
              <img
                className="w-full"
                src="https://theme.hstatic.net/1000360022/1000759577/14/logo-bct.png?v=549"
              />
            </div>
          </div>
          {/* block5 */}
        </div>
      </div>
      {/* footer block 2 */}
    </div>
  );
};

export default Footer;
