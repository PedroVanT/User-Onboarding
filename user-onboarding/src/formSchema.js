import * as yup from "yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Must fill out all requirements (Name)")
    .min(3, "Name must be at least 3 characters long"),
  email: yup
    .string()
    .required("Must fill out all requirements (Email)")
    .email("Must be a valid email address."),
  password: yup
    .string()
    .required("Must fill out all requirements (Password)")
    .min(3, "Password must be at least 3 characters long"),
  terms: yup
    .boolean()
    .required("Must fill out all requirements (Terms and Conditions)")
    .oneOf([true], "You must accept Terms and Conditions"),
});
export default schema;
