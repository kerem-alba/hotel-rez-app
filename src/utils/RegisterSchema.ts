import * as Yup from "yup";

export const RegisterSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required field"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .max(10, "Password must be at most 10 characters")
    .required("Required field"),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref("password")], "Şifreler eşleşmiyor")
    .required("Şifre onayı zorunludur"),
});
