import {CheckInForm} from "../components/CheckInForm.tsx";
import {useAuthStore} from "@features/auth/presentation/store/authStore.tsx";
import {ValidationCodeForm} from "../components/ValidationCodeForm.tsx";
import {SignInForm} from "../components/SignInForm.tsx";

export function SignInPage() {
    const user = useAuthStore((state) => state.user);
    return (
        <>
            {!user ? (
                <CheckInForm/>
            ) : user.status === "pending" ? (
                <ValidationCodeForm/>
            ) : (
                <SignInForm/>
            )}
        </>
    );
}
