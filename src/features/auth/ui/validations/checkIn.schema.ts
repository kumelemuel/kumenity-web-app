import * as z from "zod"

export const checkInSchema = z.object({
    identifier: z.string().min(5, "Must have at least 5 characters"),
});