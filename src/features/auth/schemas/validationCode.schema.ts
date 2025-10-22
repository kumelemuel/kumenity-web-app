import * as yup from "yup";

export const validationCodeSchema = yup.object({
    code: yup.string().required("Validation code required")
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(6, 'Must be exactly 6 digits')
        .max(6, 'Must be exactly 6 digits'),
});