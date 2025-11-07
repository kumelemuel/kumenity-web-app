import * as z from "zod"

export const validationCodeSchema = z.object({
    code: z.string()
        // .matches(/^[0-9]+$/, "Must be only digits")
        .min(6, 'Must be exactly 6 digits')
        .max(6, 'Must be exactly 6 digits'),
});