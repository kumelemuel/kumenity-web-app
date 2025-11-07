import * as z from "zod"

export const signUpSchema = z.object({
    email: z.email(),
    username: z.string().min(5, "Must have at least 5 characters").max(20, "Must have a maximum 20 characters"),
    password: z.string().min(8, "Must have at least 8 characters"),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
});