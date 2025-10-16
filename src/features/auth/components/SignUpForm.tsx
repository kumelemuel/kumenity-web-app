import {useForm} from "react-hook-form"
import {useSignUp} from "../hooks/useSignUp.ts";
import {yupResolver} from "@hookform/resolvers/yup";
import {signUpSchema} from "../schemas/signUp.schema.ts";
import type {SignUpPayload} from "../types/SignUpPayload.type.ts";

export function SignUpForm({ onSuccess }: { onSuccess: () => void }) {
    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(signUpSchema)
    })
    const { mutate, isPending, isError, error } = useSignUp(onSuccess);
    const onSubmit = (data: SignUpPayload) => mutate(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 my-8">
            <div className="flex flex-col gap-2">
                <input
                    {...register("email")}
                    placeholder="E-mail"
                    className="border p-2 rounded"
                />
                <p className="text-red-700 text-xs" role="alert">{errors.email?.message}</p>
            </div>
            <div className="flex flex-col gap-2">
                <input
                    {...register("password")}
                    type="password"
                    placeholder="Password"
                    className="border p-2 rounded"
                />
                <p className="text-red-700 text-xs" role="alert">{errors.password?.message}</p>
            </div>
            <div className="flex flex-col gap-2">
                <input
                    {...register("confirmPassword")}
                    type="password"
                    placeholder="Confirm password"
                    className="border p-2 rounded"
                />
                <p className="text-red-700 text-xs" role="alert">{errors.confirmPassword?.message}</p>
            </div>

            {isError && (
                <p className="bg-red-100 text-red-800 border text-md p-3 text-center">
                    {error?.message || "An unexpected error occurred"}
                </p>
            )}

            <button
                type="submit"
                className="bg-indigo-800 text-white py-2 mt-4 rounded hover:bg-indigo-900 hover:cursor-pointer"
            >
                {isPending ? "Loading..." : "Create account"}
            </button>
        </form>
    );
}
