import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import Images from "../../Component/commonlayouts/Images";
import InputField from "../../Component/signUp/InputField";
import Brithdate from "../../Component/signUp/Brithdate";
import CommonButton from "../../Component/commonlayouts/CommonButton";
import { Signupvalidation } from "../../validationSchema/SignUpvalidatinSchema";

const RegistrationPng = "../images/registration.png";

const Registration = () => {
  const [imgchange, setimgchange] = useState(true);
  let [AgeRangeError, setAgeRangeError] = useState(null);
  const navigate = useNavigate();
  const initialValues = {
    fristName: "",
    lastName: "",
    email: "",
    password: "",
    brithYear: "",
    brithMonth: "",
    brithDay: "",
    gender: "",
  };
  // send signup informaton via axios
  // console.log(process.env.REACT_APP_BACKEND_URL);
  const senderSignupInfo = async () => {
    try {
      let afterSendingData = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/signup`,
        {
          fristName: formik.values.fristName,
          lastName: formik.values.lastName,
          email: formik.values.email,
          password: formik.values.password,
          brithDay: formik.values.brithDay,
          brithMonth: formik.values.brithMonth,
          brithYear: formik.values.brithYear,
          gender: formik.values.gender,
        }
      );
      console.log("form axios post method function vlaue:", afterSendingData);
    } catch (error) {
      return error;
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Signupvalidation,
    onSubmit: async (values, action) => {
      const currentDate = new Date();
      const pickDate = new Date(
        formik.values.brithYear,
        formik.values.brithMonth,
        formik.values.brithDay
      );
      const over14 = new Date(1970 + 14, 0, 1);
      const max70 = new Date(1970 + 70, 0, 1);
      if (currentDate - pickDate < over14 || currentDate - pickDate > max70) {
        setAgeRangeError("age must under 14 and less 70");
      } else if (formik.handleChange) {
        setAgeRangeError(null);
        const errorCode = await senderSignupInfo();
        action.resetForm();

        navigate("/login");
        if (errorCode.request.status) {
          console.log("from return error code : ", errorCode.message);
        }
      }
    },
  });

  // just random array making using constructor
  const fullYear = new Date().getFullYear();
  const Yeararr = [];
  for (let i = fullYear; i >= 1930; i--) {
    Yeararr.push(i);
  }

  // work for month :)
  const MonthArr = [];
  function getMonthShortName(monthNo) {
    const date = new Date();
    date.setMonth(monthNo);

    MonthArr.push(date.toLocaleString("en-us", { month: "long" }));
  }
  for (let i = 0; i < 12; i++) {
    getMonthShortName(i);
  }

  // days functon

  const days = () => {
    return new Date(
      formik.values.brithYear,
      formik.values.brithMonth,
      0
    ).getDate();
  };
  const dateValues = Array.from(new Array(days()), (value, index) => index + 1);

  return (
    <div className="bg-page_body_color">
      <div className="container ">
        <div className="flex min-h-screen  w-full content-center items-center justify-center ">
          <div className="grid  items-center gap-10 lg:grid-cols-2">
            <div
              className="rounded-lg bg-primary_color  "
              onMouseOver={() => setimgchange(!imgchange)}
            >
              {imgchange ? (
                <Images
                  className="  rounded-lg bg-primary_color"
                  imgsrc={RegistrationPng}
                />
              ) : (
                <Images
                  className="rounded-lg bg-secondary_color "
                  imgsrc={RegistrationPng}
                />
              )}
            </div>

            <form onSubmit={formik.handleSubmit}>
              <div>
                <h1 className="mb-5 font-popins text-2xl font-semibold text-primary_text_color">
                  Registration
                </h1>
                <InputField
                  className="mb-5 w-full p-3 placeholder:font-popins focus:outline-none"
                  type="text"
                  placeholder="Frist Name"
                  id="fristName"
                  name="fristName"
                  onChange={formik.handleChange}
                  value={formik.values.fristName}
                />
                {formik.errors.fristName && formik.touched.fristName ? (
                  <p className="mb-1 text-sm text-error_color">
                    {formik.errors.fristName}
                  </p>
                ) : null}
                <InputField
                  className="mb-5 w-full p-3 placeholder:font-popins focus:outline-none"
                  type="text"
                  placeholder="Last Name"
                  id="lastName"
                  name="lastName"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                />
                {formik.errors.lastName && formik.touched.lastName ? (
                  <p className="mb-1 text-sm text-error_color">
                    {formik.errors.lastName}
                  </p>
                ) : null}
                <InputField
                  className="mb-5 w-full p-3 placeholder:font-popins focus:outline-none"
                  type="email"
                  placeholder="Email adress"
                  id="email"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                {formik.errors.email && formik.touched.email ? (
                  <p className="mb-1 text-sm text-error_color">
                    {formik.errors.email}
                  </p>
                ) : null}
                <InputField
                  className="mb-6 w-full p-3 placeholder:font-popins focus:outline-none "
                  type="password"
                  placeholder="Enter a password"
                  id="password"
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                {formik.errors.password && formik.touched.password ? (
                  <p className="mb-1 text-sm text-error_color">
                    {formik.errors.password}
                  </p>
                ) : null}
              </div>
              <div>
                <h2 className="mb-5 font-popins text-lg text-primary_text_color">
                  Brith of date
                </h2>
                <div className="mb-5 flex   justify-between gap-2 sm:gap-10">
                  <Brithdate
                    className="w-full cursor-pointer rounded bg-normal_white_color p-3 focus:outline-none "
                    datearr={Yeararr}
                    onChange={formik.handleChange}
                    value={formik.values.brithYear}
                    name="brithYear"
                  />

                  <Brithdate
                    className="w-full cursor-pointer rounded bg-normal_white_color p-3  focus:outline-none"
                    datearr={MonthArr}
                    onChange={formik.handleChange}
                    value={formik.values.brithMonth}
                    name="brithMonth"
                  />
                  <Brithdate
                    className="w-full cursor-pointer rounded bg-normal_white_color p-3 focus:outline-none "
                    datearr={dateValues}
                    onChange={formik.handleChange}
                    value={formik.values.brithDay}
                    name="brithDay"
                  />
                </div>
                {formik.errors.brithDay && formik.touched.brithDay ? (
                  <p className="my-2 text-sm text-error_color">
                    {formik.errors.brithDay}
                  </p>
                ) : formik.errors.brithMonth && formik.touched.brithMonth ? (
                  <p className="mb-1 text-sm text-error_color">
                    {formik.errors.brithMonth}
                  </p>
                ) : formik.errors.brithYear && formik.touched.brithYear ? (
                  <p className="mb-1 text-sm text-error_color">
                    {formik.errors.brithYear}
                  </p>
                ) : AgeRangeError ? (
                  <p className="mb-1 text-sm text-error_color">
                    {AgeRangeError}
                  </p>
                ) : null}
              </div>
              <div>
                <h2 className="mb-5 font-popins text-lg text-primary_text_color">
                  Gender
                </h2>
                <div className="flex items-center justify-between gap-2 sm:gap-10">
                  <div className=" w-full cursor-pointer rounded  bg-normal_white_color p-3  focus:outline-none">
                    <input
                      id="male"
                      name="gender"
                      type="radio"
                      className="scale-125 cursor-pointer"
                      onChange={formik.handleChange}
                      value="Male"
                    />
                    <label htmlFor="male" className="ml-2 font-popins">
                      male
                    </label>
                  </div>
                  <div className=" w-full cursor-pointer rounded  bg-normal_white_color p-3  focus:outline-none">
                    <input
                      id="Female"
                      name="gender"
                      type="radio"
                      className="scale-125 cursor-pointer"
                      onChange={formik.handleChange}
                      value="Female"
                      // defaultChecked={formik.values.gender === "Female"}
                    />
                    <label htmlFor="Female" className="ml-2 font-popins">
                      Female
                    </label>
                  </div>

                  <div className=" w-full cursor-pointer rounded  bg-normal_white_color p-3  focus:outline-none">
                    <input
                      id="Others"
                      name="gender"
                      type="radio"
                      className="scale-125 cursor-pointer"
                      onChange={formik.handleChange}
                      value="Others"
                    />
                    <label htmlFor="Others" className="ml-2 font-popins">
                      others
                    </label>
                  </div>
                </div>
              </div>
              {formik.errors.gender && formik.touched.gender ? (
                <p className="mt-3 text-sm text-error_color">
                  {formik.errors.gender}
                </p>
              ) : null}
              <div className=" mb-5 mt-10 w-full ">
                <CommonButton
                  className="w-full rounded-lg bg-primary_color  py-3 font-popins text-xl font-normal text-normal_white_color transition-all duration-100 ease-linear hover:bg-secondary_color"
                  btninside="Registration"
                  type="submit"
                />
              </div>
              <div className="border-b-2 border-b-[#ffff] pt-3"></div>
              <div className=" mb-5 mt-2 w-full ">
                <p className="text-right ">
                  <Link
                    to="/login"
                    className="ml-1 font-popins text-sm text-primary_color hover:underline"
                  >
                    Already have an acoutns signIn
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Registration;
