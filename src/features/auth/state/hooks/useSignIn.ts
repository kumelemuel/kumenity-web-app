import {useMutation} from "@tanstack/react-query";
import {signInService} from "@features/auth/services/auth.service.ts";
import {useAuthStore} from "@features/auth/state/stores/auth.store.tsx";
import type {SignInRequest} from "@features/auth/services/types/sign-in.d.ts";
import {useNavigate} from "react-router";

export function useSignIn() {
    const navigate = useNavigate();
    const user = useAuthStore((s) => s.user);
    const setToken = useAuthStore((s) => s.setToken);

    return useMutation({
        mutationFn: (payload: SignInRequest) =>
            signInService(user!.username!, payload),
        onSuccess: (data) => {
            setToken(data.token);
            navigate("/dashboard");
        },
    });
}
