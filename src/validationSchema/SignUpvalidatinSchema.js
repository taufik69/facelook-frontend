import * as Yup from "yup";
let mailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
let passwordFormat =
  /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;

export let Signupvalidation = Yup.object({
  fristName: Yup.string()
    .min(3, "Must be 3 chracter or higher")
    .max(16, "Must be 16 characters or less")
    .required("Please enter your frist name"),
  lastName: Yup.string()
    .min(3, "Must be 3 chracter or higher")
    .max(16, "Must be 16 characters or less")
    .required("please enter your last name"),

  email: Yup.string()
    .email()
    .matches(mailFormat, "Invalid email address")
    .required("Please enter your email"),
  password: Yup.string()
    .min(8, "Must be 8 chracter or higher")
    .max(20, "Must be 20 characters or less")
    .matches(
      passwordFormat,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    )
    .required("Password must required"),
  brithDay: Yup.number().required("Brithday missing"),
  brithMonth: Yup.number().required("Brithmonth missing"),
  brithYear: Yup.number().required("brithYear missing"),
  gender: Yup.string().required("gender missing"),
});
