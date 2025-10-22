import {useAuthStore} from "../../../app/store/authStore.tsx";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {validationCodeSchema} from "../schemas/validationCode.schema.ts";
import type {ValidationCodePayload} from "../types/ValidationCodePayload.type.ts";
import {useValidationCode} from "../hooks/useValidationCode.ts";

export function ValidationCodeForm() {
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(validationCodeSchema)
    })
    const {mutate, isPending, isError, error} = useValidationCode();
    const onSubmit = (data: ValidationCodePayload) => mutate(data);
    const user = useAuthStore((state) => state.user);

    return (
        <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">Welcome {user?.username}!</h2>
            <p className="text-gray-700 mb-4">
                You will receive an email with an validation code so you can validate your account.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 my-8">
                <div className="flex flex-col gap-2">
                    <input
                        {...register("code")}
                        placeholder="Validation code"
                        className="border p-2 rounded"
                    />
                    <p className="text-red-700 text-xs" role="alert">{errors.code?.message}</p>
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
                    {isPending ? "Loading..." : "Validate"}
                </button>
            </form>

            <a href="/" className="text-indigo-700 hover:underline">
                Go to home
            </a>
        </div>
    );
}
