import {SignUpForm} from "../components/SignUpForm.tsx";
import {useState} from "react";
import {SignUpSuccess} from "../components/SignUpSuccess.tsx";

export function SignUpPage() {
    const [success, setSuccess] = useState(false);
    return (
        <>
            {!success ? (
                <>
                    <h1 className="text-xl text-indigo-950 font-black text-center">Create a new account</h1>
                    <SignUpForm onSuccess={() => setSuccess(true)}/>
                    <div className="text-center">
                        <a className="text-indigo-950 underline" href="/auth/sign-in">Already have an account?</a>
                    </div>
                </>
            ) : (
                <SignUpSuccess/>
            )}
        </>
    );
}
