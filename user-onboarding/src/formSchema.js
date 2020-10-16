import * as yup from "yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Name must be at least 3 characters long")
    .required("Must fill out all requirements (Name)"),
  email: yup
    .string()
    .email("Must be a valid email address.")
    .required("Must fill out all requirements (Email)"),
  password: yup
    .string()
    .min(3, "Password must be at least 3 characters long")
    .required("Must fill out all requirements (Password)"),
  terms: yup
    .boolean()
    .oneOf([true], "You must accept Terms and Conditions")
    .required("Must fill out all requirements (Terms and Conditions)"),
});
export default schema;
