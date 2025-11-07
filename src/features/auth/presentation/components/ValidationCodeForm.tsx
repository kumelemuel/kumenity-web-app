import {useForm} from "@tanstack/react-form";
import {useValidationCode} from "@features/auth/presentation/hooks/useValidationCode.ts";
import {useAuthStore} from "@features/auth/presentation/store/authStore.tsx";
import {validationCodeSchema} from "@features/auth/presentation/schemas/validationCode.schema.ts";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@shared/presentation/components/ui/card.tsx";
import {Field, FieldError, FieldGroup} from "@shared/presentation/components/ui/field.tsx";
import {Input} from "@shared/presentation/components/ui/input.tsx";
import {Button} from "@shared/presentation/components/ui/button.tsx";
import {Spinner} from "@shared/presentation/components/ui/spinner.tsx";
import {Alert, AlertTitle} from "@shared/presentation/components/ui/alert.tsx";
import {AlertCircleIcon} from "lucide-react";

export function ValidationCodeForm() {
    const {mutate, isPending, isError, error} = useValidationCode();
    const form = useForm({
        defaultValues: {
            code: "",
        },
        validators: {
            onSubmit: validationCodeSchema,
        },
        onSubmit: async ({value}) => {
            mutate(value);
        },
    })
    const user = useAuthStore((state) => state.user);

    return (
        <Card className="w-full sm:max-w-md">
            <CardHeader>
                <CardTitle>Welcome {user?.username}!</CardTitle>
                <CardDescription>
                    You will receive an email with an validation code so you can validate your account.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form id="validation-code-form" onSubmit={(e) => {
                    e.preventDefault()
                    form.handleSubmit().then(() => null)
                }}>
                    <FieldGroup>
                        <form.Field
                            name="code"
                            children={(field) => {
                                const isInvalid =
                                    field.state.meta.isTouched && !field.state.meta.isValid
                                return (
                                    <Field data-invalid={isInvalid}>
                                        <Input
                                            id={field.name}
                                            name={field.name}
                                            value={field.state.value}
                                            onBlur={field.handleBlur}
                                            onChange={(e) => field.handleChange(e.target.value)}
                                            aria-invalid={isInvalid}
                                            placeholder="Enter your validation code"
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
                    {isPending ? <Spinner className="size-6"/> : "Validate"}
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
