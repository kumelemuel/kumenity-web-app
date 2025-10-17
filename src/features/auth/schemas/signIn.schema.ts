import * as yup from "yup";

export const signInSchema = yup.object({
    identifier: yup.string().required("Identifier required").min(5, "Must have at least 5 characters"),
});