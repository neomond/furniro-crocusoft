import * as Yup from "yup";

const contactValidationSchema = Yup.object({
  name: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  subject: Yup.string().max(50, "Must be 50 characters or less"),
  message: Yup.string()
    .min(20, "Must be 20 characters or more")
    .required("Required"),
});

export default contactValidationSchema;
