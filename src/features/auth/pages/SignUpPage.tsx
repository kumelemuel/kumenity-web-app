import {SignUpForm} from "../components/SignUpForm.tsx";
import {useState} from "react";
import {ValidationCodeForm} from "../components/ValidationCodeForm.tsx";

export function SignUpPage() {
    const [success, setSuccess] = useState(false);
    return (
        <>
            {!success ? (
                <>
                    <h1 className="text-xl text-indigo-950 font-black text-center">Create a new account</h1>
                    <SignUpForm onSuccess={() => setSuccess(true)}/>
                    <div className="text-center mb-4">
                        <a className="text-indigo-700 underline" href="/auth/sign-in">Already have an account?</a>
                    </div>
                    <div className="text-center">
                        <a className="text-indigo-700 underline" href="/">Go back to Home</a>
                    </div>
                </>
            ) : (
                <ValidationCodeForm/>
            )}
        </>
    );
}
