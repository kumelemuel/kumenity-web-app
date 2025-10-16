import * as yup from "yup";

export const signUpSchema = yup.object({
    email: yup.string().email("Invalid e-mail").required("E-mail required"),
    password: yup.string().required("Password required").min(8, "Must have at least 8 characters"),
    confirmPassword: yup.string().oneOf([yup.ref("password")], 'Passwords must match')
});