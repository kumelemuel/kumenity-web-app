import {useForm} from "@tanstack/react-form";
import {useAuthStore} from "@features/auth/state/stores/auth.store.tsx";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@app/components/ui/card.tsx";
import {Field, FieldError, FieldGroup, FieldLabel} from "@app/components/ui/field.tsx";
import {Input} from "@app/components/ui/input.tsx";
import {Alert, AlertTitle} from "@app/components/ui/alert.tsx";
import {AlertCircleIcon} from "lucide-react";
import {Button} from "@app/components/ui/button.tsx";
import {Spinner} from "@app/components/ui/spinner.tsx";
import {signInSchema} from "@features/auth/ui/validations/signIn.schema.ts";
import {useSignIn} from "@features/auth/state/hooks/useSignIn.ts";

export function SignInForm() {
    const {mutate, isPending, isError, error} = useSignIn();
    const form = useForm({
        defaultValues: {
            password: "",
        },
        validators: {
            onSubmit: signInSchema,
        },
        onSubmit: async ({value}) => {
            mutate(value);
        },
    })
    const user = useAuthStore((state) => state.user);
    const {resetAuth} = useAuthStore();

    return (
        <Card className="w-full sm:max-w-md">
            <CardHeader>
                <CardTitle>Welcome {user?.username}!</CardTitle>
            </CardHeader>
            <CardContent>
                <form id="validation-code-form" onSubmit={(e) => {
                    e.preventDefault()
                    form.handleSubmit().then(() => null)
                }}>
                    <FieldGroup>
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
                                            name={field.name}
                                            type="password"
                                            value={field.state.value}
                                            onBlur={field.handleBlur}
                                            onChange={(e) => field.handleChange(e.target.value)}
                                            aria-invalid={isInvalid}
                                            placeholder="********"
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
                    form="validation-code-form"
                    disabled={isPending}
                >
                    {isPending ? <Spinner className="size-6"/> : "Sign in"}
                </Button>
                <div className="text-center mt-4">
                    <Button variant="link">
                        <a href="#" onClick={resetAuth}>Sign in with another account</a>
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
