import * as z from "zod"

export const signInSchema = z.object({
    password: z.string().min(8, "Must have at least 8 characters"),
});