import {useForm} from "@tanstack/react-form";
import {checkInSchema} from "@features/auth/ui/validations/checkIn.schema.ts";
import {useCheckIn} from "@features/auth/state/hooks/useCheckIn.ts";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@app/components/ui/card.tsx";
import {Field, FieldError, FieldGroup, FieldLabel} from "@app/components/ui/field.tsx";
import {Input} from "@app/components/ui/input.tsx";
import {Button} from "@app/components/ui/button.tsx";
import {Spinner} from "@app/components/ui/spinner.tsx";
import {Alert, AlertTitle} from "@app/components/ui/alert.tsx";
import {AlertCircleIcon} from "lucide-react";

export function CheckInForm() {
    const {mutate, isPending, isError, error} = useCheckIn();
    const form = useForm({
        defaultValues: {
            identifier: "",
        },
        validators: {
            onSubmit: checkInSchema,
        },
        onSubmit: async ({value}) => {
            mutate(value);
        },
    })

    return (
        <Card className="w-full sm:max-w-md">
            <CardHeader>
                <CardTitle>Sign in</CardTitle>
                {/*<CardDescription>*/}
                {/*    You will receive an email with an validation code so you can validate your account.*/}
                {/*</CardDescription>*/}
            </CardHeader>
            <CardContent>
                <form id="check-in-form" onSubmit={(e) => {
                    e.preventDefault()
                    form.handleSubmit().then(() => null)
                }}>
                    <FieldGroup>
                        <form.Field
                            name="identifier"
                            children={(field) => {
                                const isInvalid =
                                    field.state.meta.isTouched && !field.state.meta.isValid
                                return (
                                    <Field data-invalid={isInvalid}>
                                        <FieldLabel htmlFor={field.name}>Identifier</FieldLabel>
                                        <Input
                                            id={field.name}
                                            name={field.name}
                                            value={field.state.value}
                                            onBlur={field.handleBlur}
                                            onChange={(e) => field.handleChange(e.target.value)}
                                            aria-invalid={isInvalid}
                                            placeholder="Enter your e-mail or username"
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
                    form="check-in-form"
                    disabled={isPending}
                >
                    {isPending ? <Spinner className="size-6"/> : "Next"}
                </Button>
                <div className="text-center mt-4">
                    <Button variant="link">
                        <a href="/auth/sign-up">Don't have an account yet? Sign up</a>
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
