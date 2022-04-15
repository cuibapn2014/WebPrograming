import { useEffect, useState } from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import ButtonWrapper from "../ButtonWrapper";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { MdOutlinePayment } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import Select from "react-select";

// This values are the props in the UI
// const amount = "5";
const currency = "USD";

export default function Paypal() {
  const [payment, setPayment] = useState(false);
  const [data, setData] = useState([]);
  const [citys, setCitys] = useState([]);

  // console.log("check data: >>", data);
  // console.log("check city: >>", citys);
  // console.log("check district: >>", districts);

  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  // console.log("payment", payment);

  const options = [
    // { value: "", label: "Select chooose" },
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const handleHome = () => {
    setPayment(false);
  };

  const handlePayment = () => {
    setPayment(true);
  };

  useEffect(async () => {
    let res = await axios.get("https://provinces.open-api.vn/api/?depth=3");
    // console.log("check res district", res.data);
    if (res && res.data) {
      setData(res.data);
      const city = res.data.map((item) => {
        return {
          value: item.codename,
          label: item.name,
          code: item.code,
        };
      });
      setCitys(city);
      localStorage.setItem("select", JSON.stringify(res.data));
    }
  }, []);

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
      city: "",
      district: "",
      ward: "",
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
      city: Yup.string().required("Required"),
      district: Yup.string().required("Required"),
      ward: Yup.string().required("Required"),
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

  const handleChangeCity = (e) => {
    const { code } = e;
    // console.log("check code", code);
    const district = data.find((item) => item.code === code);
    if (district.districts.length > 0) {
      const customDistrict = district.districts.map((item) => {
        return {
          value: item.codename,
          label: item.name,
          code: item.code,
          wards: item.wards,
        };
      });
      console.log("check district", customDistrict);
      setDistricts(customDistrict);
    }

    return formik.setFieldValue("city", e.label);
  };
  const handleChangeDistrict = (e) => {
    const { code } = e;
    console.log("check code", code);

    const ward = districts.find((item) => item.code === code);
    console.log("check ward ", ward);

    if (ward.wards.length > 0) {
      const customWard = ward.wards.map((item) => {
        return {
          value: item.codename,
          label: item.name,
          code: item.code,
        };
      });
      console.log("check customWard", customWard);
      setWards(customWard);
    }

    return formik.setFieldValue("district", e.label);
  };

  const handleChangeWard = (e) => {
    const { code } = e;
    console.log("check code", code);

    // const ward = districts.find((item) => (item.code = code));
    // console.log("check ward ", ward);

    // if (ward.wards.length > 0) {
    //   const customWard = ward.wards.map((item) => {
    //     return {
    //       value: item.codename,
    //       label: item.name,
    //       code: item.code,
    //     };
    //   });
    //   console.log("check customWard", customWard);
    //   setWards(customWard);
    // }

    return formik.setFieldValue("ward", e.label);
  };

  const defaultValueCity = (options, value) => {
    return options ? options.find((option) => option.codename === value) : "";
  };
  const defaultValueDistrict = (options, value) => {
    return options ? options.find((option) => option.codename === value) : "";
  };

  const defaultValueWard = (options, value) => {
    return options ? options.find((option) => option.codename === value) : "";
  };

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
                {/* option address */}
                <div>
                  {/* options city */}
                  <div className="mb-10 relative z-50">
                    <Select
                      options={citys || []}
                      value={defaultValueCity(citys || [], formik.values.city)}
                      placeholder="choose select city"
                      onChange={(e) => handleChangeCity(e)}
                    />
                    <span className="block mt-1 text-[red]">
                      {formik.errors.city}
                    </span>
                  </div>
                  {/* options city */}
                  {/* options district */}
                  <div className="mb-10">
                    <Select
                      options={districts || []}
                      value={defaultValueDistrict(
                        districts || [],
                        formik.values.district
                      )}
                      placeholder="choose select district"
                      onChange={(e) => handleChangeDistrict(e)}
                    />
                    <span className="block mt-1 text-[red]">
                      {formik.errors.district}
                    </span>
                  </div>
                  {/* options district */}
                  {/* options ward */}
                  <div className="mb-10 z-[999]">
                    <Select
                      options={wards || []}
                      value={defaultValueWard(wards || [], formik.values.ward)}
                      placeholder="choose select ward"
                      onChange={(e) => handleChangeWard(e)}
                    />
                    <span className="block mt-1 text-[red]">
                      {formik.errors.ward}
                    </span>
                  </div>
                  {/* options ward */}
                </div>
                {/* option address */}

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
                <div
                  style={{
                    maxWidth: "750px",
                    minHeight: "200px",
                    zIndex: "100",
                  }}
                >
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
            {/* <Select
              options={options}
              value={defaultValue(options, formik.values.city)}
              placeholder="choose select city"
              onChange={(e) => handleChange(e)}
              // onChange={(value) => formik.setFieldValue("city", value.value)}
            /> */}
          </div>
          {/* block 2 */}
        </div>
      </div>
    </>
  );
}
