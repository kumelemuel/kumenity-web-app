import {SignUpForm} from "../components/SignUpForm.tsx";
import {useState} from "react";
import {ValidationCodeForm} from "../components/ValidationCodeForm.tsx";

export function SignUpPage() {
    const [success, setSuccess] = useState(false);
    return (
        <>
            {!success ? (
                <SignUpForm onSuccess={() => setSuccess(true)}/>
            ) : (
                <ValidationCodeForm/>
            )}
        </>
    );
}
