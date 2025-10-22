import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import type {CheckInPayload} from "../types/CheckInPayload.type.ts";
import {signInSchema} from "../schemas/signIn.schema.ts";
import {useCheckIn} from "../hooks/useCheckIn.ts";

export function SignInForm() {
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(signInSchema)
    })
    const {mutate, isPending, isError, error} = useCheckIn();
    const onSubmit = (data: CheckInPayload) => mutate(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 my-8">
            <div className="flex flex-col gap-2">
                <input
                    {...register("identifier")}
                    placeholder="E-mail or username"
                    className="border p-2 rounded"
                />
                <p className="text-red-700 text-xs" role="alert">{errors.identifier?.message}</p>
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
                {isPending ? "Loading..." : "Next"}
            </button>
        </form>
    );
}
