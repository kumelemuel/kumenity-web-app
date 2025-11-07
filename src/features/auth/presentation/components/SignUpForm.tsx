import {useSignUp} from "../hooks/useSignUp.ts";
import {signUpSchema} from "../schemas/signUp.schema.ts";
import {useForm} from "@tanstack/react-form"
import {Field, FieldError, FieldGroup, FieldLabel} from "@shared/presentation/components/ui/field.tsx";
import {Input} from "@shared/presentation/components/ui/input.tsx";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@shared/presentation/components/ui/card.tsx";
import {Button} from "@shared/presentation/components/ui/button.tsx";
import {Spinner} from "@shared/presentation/components/ui/spinner.tsx";
import {Alert, AlertTitle} from "@shared/presentation/components/ui/alert.tsx";
import {AlertCircleIcon} from "lucide-react";

export function SignUpForm({onSuccess}: { onSuccess: () => void }) {
    const {mutate, isPending, isError, error} = useSignUp(onSuccess);
    const form = useForm({
        defaultValues: {
            email: "",
            username: "",
            password: "",
            confirmPassword: "",
        },
        validators: {
            onSubmit: signUpSchema,
        },
        onSubmit: async ({value}) => {
            mutate(value);
        },
    })

    return (
        <Card className="w-full sm:max-w-md">
            <CardHeader>
                <CardTitle>Create a new account</CardTitle>
                <CardDescription>
                    Be part of the community and start your journey with us.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form id="sign-up-form" onSubmit={(e) => {
                    e.preventDefault()
                    form.handleSubmit()
                }}>
                    <FieldGroup>
                        <form.Field
                            name="email"
                            children={(field) => {
                                const isInvalid =
                                    field.state.meta.isTouched && !field.state.meta.isValid
                                return (
                                    <Field data-invalid={isInvalid}>
                                        <FieldLabel htmlFor={field.name}>E-mail</FieldLabel>
                                        <Input
                                            id={field.name}
                                            name={field.name}
                                            value={field.state.value}
                                            onBlur={field.handleBlur}
                                            onChange={(e) => field.handleChange(e.target.value)}
                                            aria-invalid={isInvalid}
                                            placeholder="E-mail"
                                            autoComplete="off"
                                        />
                                        {isInvalid && (
                                            <FieldError errors={field.state.meta.errors}/>
                                        )}
                                    </Field>
                                )
                            }}
                        />
                        <form.Field
                            name="username"
                            children={(field) => {
                                const isInvalid =
                                    field.state.meta.isTouched && !field.state.meta.isValid
                                return (
                                    <Field data-invalid={isInvalid}>
                                        <FieldLabel htmlFor={field.name}>Username</FieldLabel>
                                        <Input
                                            id={field.name}
                                            name={field.name}
                                            value={field.state.value}
                                            onBlur={field.handleBlur}
                                            onChange={(e) => field.handleChange(e.target.value)}
                                            aria-invalid={isInvalid}
                                            placeholder="Username"
                                            autoComplete="off"
                                        />
                                        {isInvalid && (
                                            <FieldError errors={field.state.meta.errors}/>
                                        )}
                                    </Field>
                                )
                            }}
                        />
                        <form.Field
                            name="password"
                            children={(field) => {
                                const isInvalid =
                                    field.state.meta.isTouched && !field.state.meta.isValid
                                return (
                                    <Field data-invalid={isInvalid}>
                                        <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                                        <Input
                                            id={field.name}
                                            type="password"
                                            name={field.name}
                                            value={field.state.value}
                                            onBlur={field.handleBlur}
                                            onChange={(e) => field.handleChange(e.target.value)}
                                            aria-invalid={isInvalid}
                                            placeholder="Password"
                                            autoComplete="off"
                                        />
                                        {isInvalid && (
                                            <FieldError errors={field.state.meta.errors}/>
                                        )}
                                    </Field>
                                )
                            }}
                        />
                        <form.Field
                            name="confirmPassword"
                            children={(field) => {
                                const isInvalid =
                                    field.state.meta.isTouched && !field.state.meta.isValid
                                return (
                                    <Field data-invalid={isInvalid}>
                                        <FieldLabel htmlFor={field.name}>Confirm password</FieldLabel>
                                        <Input
                                            id={field.name}
                                            name={field.name}
                                            type="password"
                                            value={field.state.value}
                                            onBlur={field.handleBlur}
                                            onChange={(e) => field.handleChange(e.target.value)}
                                            aria-invalid={isInvalid}
                                            placeholder="Confirm password"
                                            autoComplete="off"
                                        />
                                        {isInvalid && (
                                            <FieldError errors={field.state.meta.errors}/>
                                        )}
                                    </Field>
                                )
                            }}
                        />
                    </FieldGroup>
                </form>
            </CardContent>
            <CardFooter className="flex-col gap">
                {isError && (
                    <Alert variant="destructive" className="mb-4">
                        <AlertCircleIcon/>
                        <AlertTitle>{error?.message || "An unexpected error occurred"}</AlertTitle>
                    </Alert>
                )}
                <Button
                    type="submit"
                    variant="outline"
                    className="w-full"
                    form="sign-up-form"
                    disabled={isPending}
                >
                    {isPending ? <Spinner className="size-6"/> : "Create account"}
                </Button>
                <div className="text-center mt-4">
                    <Button variant="link">
                        <a href="/auth/sign-in">Already have an account?</a>
                    </Button>
                </div>
                <div className="text-center">
                    <Button variant="link">
                        <a href="/public">Go back to Home</a>
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}
