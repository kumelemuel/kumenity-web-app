import {CheckInForm} from "@features/auth/ui/components/CheckInForm.tsx";
import {useAuthStore} from "@features/auth/state/stores/auth.store.tsx";
import {ValidationCodeForm} from "@features/auth/ui/components/ValidationCodeForm.tsx";
import {SignInForm} from "@features/auth/ui/components/SignInForm.tsx";

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
