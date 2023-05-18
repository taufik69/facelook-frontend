import React from "react";
import Images from "../../Component/commonlayouts/Images";
import InputField from "../../Component/signUp/InputField";
import CommonButton from "../../Component/commonlayouts/CommonButton";
import { useFormik } from "formik";
import { signinValidation } from "../../validationSchema/SigninvalidatonSchema";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux_featurs/AllSlicer/LoginSlicer";
import axios from "axios";
const loginPicture = "../images/login.png";
const loginAvatar = "../images/login_avatar.png";

const Login = () => {
  const dispatch = useDispatch();
  const Signin = async () => {
    try {
      let backendData = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/signin`,
        {
          email: formik.values.email,
          password: formik.values.password,
        }
      );

      dispatch(loginUser(backendData));
      localStorage.setItem("loginUser", JSON.stringify(backendData));
    } catch (error) {
      return error.response.data.message;
    }
  };
  const signIninitialValues = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: signIninitialValues,
    validationSchema: signinValidation,
    onSubmit: async (values, actions) => {
      try {
        const err = await Signin();
        if (err) {
          toast.error(err, {
            position: "bottom-center",
            autoClose: 10000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          actions.resetForm();
        }
      } catch (error) {
        console.log("from onsubmit formik funtion error :", error);
      }
    },
  });

  return (
    <div className="bg-page_body_color">
      <div className="container">
        <ToastContainer />
        <div className="flex min-h-screen  w-full content-center items-center justify-center ">
          <div className="grid  items-center gap-10 lg:grid-cols-2">
            <div>
              <picture>
                <Images imgsrc={loginPicture} />
              </picture>
            </div>
            <div>
              <form onSubmit={formik.handleSubmit}>
                <div>
                  <picture>
                    <Images
                      className="mx-auto mb-6 w-28  "
                      imgsrc={loginAvatar}
                    />
                  </picture>
                </div>
                <div>
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
                  <p className="text-right ">
                    <Link
                      to="/registration"
                      className="ml-1 font-popins text-sm text-primary_color hover:underline"
                    >
                      don't have an acoutns sign up
                    </Link>
                  </p>
                  <div className=" mt-10 mb-5 w-full ">
                    <CommonButton
                      className="w-full rounded-lg bg-primary_color  py-3 font-popins text-xl font-normal text-normal_white_color transition-all duration-100 ease-linear hover:bg-secondary_color"
                      btninside="Login"
                      type="submit"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
