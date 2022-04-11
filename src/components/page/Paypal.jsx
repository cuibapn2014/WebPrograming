import { useEffect, useState } from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import ButtonWrapper from "../ButtonWrapper";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { MdOutlinePayment } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";

// This values are the props in the UI
// const amount = "5";
const currency = "USD";

export default function Paypal() {
  const [payment, setPayment] = useState(false);
  // console.log("payment", payment);
  const handleHome = () => {
    setPayment(false);
  };

  const handlePayment = () => {
    setPayment(true);
  };

  useEffect(() => {
    window.scrollTo({
      top: 162,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      address: "",
    },

    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("Required")
        .min(4, "Must be 4 characters or more"),
      lastName: Yup.string()
        .required("Required")
        .min(4, "Must be 4 characters or more"),
      phone: Yup.string()
        .required("required")
        .matches(
          /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
          "Phone number is not valid"
        )
        .min(10, "to short")
        .max(10, "to long"),
      address: Yup.string()
        .required("Required")
        .min(10, "Must be at least 10 characters"),
    }),

    onSubmit: (values) => {
      const res = {
        value: values,
        payment: payment,
      };
      console.log(res);

      toast.success("Create account success");
    },
  });
  return (
    <>
      <div className="bg-slate-50  lg:p-10 p-5 ">
        <div className="flex items-center bg-white">
          {/* block 1 */}
          <div className="w-[40%] hidden lg:block">
            <img
              src="https://www.pngall.com/wp-content/uploads/5/Online-Payment-PNG-HD-Image.png"
              className="rounded-l-lg"
            />
          </div>
          {/* block 1 */}

          {/* block 2 */}
          <div className="lg:w-[60%] w-full  rounded-r-lg">
            <div className="px-10">
              <div className="text-base mb-5 mt-3">
                <h4>Thông tin đặt hàng</h4>
              </div>

              <form
                className="px-1 py-5 pb-9 lg:w-full  w-[100%] sm:w-4/5 mx-auto"
                onSubmit={formik.handleSubmit}
              >
                {/* <h2 className="text-center font-medium text-lg my-5">
                Login your account
              </h2> */}
                <div className="mb-10 flex items-center justify-between">
                  <div className="w-[49%]">
                    <div className="form-field">
                      <input
                        id="firstName"
                        name="firstName"
                        onChange={formik.handleChange}
                        value={formik.values.firstName || ""}
                        type="text"
                        placeholder=" "
                        className="form-input"
                      />
                      <label className="form-label" htmlFor="firstName">
                        FirstName
                      </label>
                    </div>
                    <span className="block mt-1 text-[red]">
                      {formik.errors.firstName}
                    </span>
                  </div>
                  <div className="w-[49%]">
                    <div className="form-field">
                      <input
                        id="lastName"
                        name="lastName"
                        onChange={formik.handleChange}
                        value={formik.values.lastName || ""}
                        type="text"
                        placeholder=" "
                        className="form-input"
                      />
                      <label className="form-label" htmlFor="lastName">
                        Lastname
                      </label>
                    </div>
                    <span className="block mt-1 text-[red]">
                      {formik.errors.lastName}
                    </span>
                  </div>
                </div>
                <div className="mb-10">
                  <div className="form-field">
                    <input
                      id="phone"
                      name="phone"
                      onChange={formik.handleChange}
                      value={formik.values.phone || ""}
                      type="text"
                      placeholder=" "
                      className="form-input"
                    />
                    <label className="form-label" htmlFor="phone">
                      Phone
                    </label>
                  </div>
                  <span className="block mt-1 text-[red]">
                    {formik.errors.phone}
                  </span>
                </div>
                <div>
                  <div className="mb-10">
                    <div className="form-field">
                      <input
                        id="address"
                        name="address"
                        onChange={formik.handleChange}
                        value={formik.values.address || ""}
                        placeholder=" "
                        className="form-input"
                      />
                      <label className="form-label" htmlFor="address">
                        Address
                      </label>
                    </div>
                    <span className="block mt-1 text-[red]">
                      {formik.errors.address}
                    </span>
                  </div>
                </div>
                {/* option choose paymnet */}
                <div>
                  <h4>Lựa chọn phương thức thanh toán</h4>
                  <div className="flex my-3">
                    <div
                      className={`
                      flex items-center p-3 border border-[#ddd] rounded-lg cursor-pointer ${
                        payment ? "" : "border-[#1435c3]"
                      }`}
                      onClick={handleHome}
                    >
                      <AiOutlineHome size={"24px"} className="mr-1" />
                      <span>Thanh toán khi nhận hàng</span>
                    </div>
                    <div
                      className={`flex items-center p-3 border border-[#ddd] rounded-lg cursor-pointer ml-3  ${
                        payment ? "border-[#1435c3]" : ""
                      }`}
                      onClick={handlePayment}
                    >
                      <MdOutlinePayment size={"24px"} className="mr-1" />
                      <span>Payment</span>
                    </div>
                  </div>
                </div>
                {/* option choose paymnet */}

                <div className="bg-[#1435c3] text-center py-3 rounded-lg text-white mt-5">
                  <button type="submit" className="block w-full">
                    Đặt hàng
                  </button>
                </div>
              </form>
              {payment && (
                <div style={{ maxWidth: "750px", minHeight: "200px" }}>
                  <PayPalScriptProvider
                    options={{
                      "client-id":
                        "AV8VmmTzbrChSpu6x-HJ_wkDuY8oA9KExgf8SKoLhv8hReZ3xGAu64vSMIHfrzE0bwItqh0C3CUq9wvc",
                      components: "buttons",
                      currency: "USD",
                    }}
                  >
                    <ButtonWrapper currency={currency} showSpinner={false} />
                  </PayPalScriptProvider>
                </div>
              )}
            </div>
          </div>
          {/* block 2 */}
        </div>
      </div>
    </>
  );
}
