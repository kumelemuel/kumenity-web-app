import {SignInForm} from "../components/SignInForm.tsx";
import {useAuthStore} from "../../../app/store/authStore.tsx";
import {Welcome} from "../components/Welcome.tsx";

export function SignInPage() {
    const user = useAuthStore((state) => state.user);
    const {resetAuth} = useAuthStore();
    return (
        <>
            {!user ? (
                <>
                    <h1 className="text-xl text-indigo-950 font-black text-center">Sign in</h1>
                    <SignInForm/>
                    <div className="text-center mb-4">
                        <a className="text-indigo-700 underline" href="/auth/sign-up">Don't have an account yet? Sign
                            up</a>
                    </div>
                    <div className="text-center">
                        <a className="text-indigo-700 underline" href="/">Go back to Home</a>
                    </div>
                </>
            ) : (
                <>
                    <Welcome/>
                    <div className="text-center mt-4">
                        <a className="text-indigo-700 underline" href="#" onClick={resetAuth}>Sign in with another
                            account</a>
                    </div>
                </>
            )}
        </>
    );
}
