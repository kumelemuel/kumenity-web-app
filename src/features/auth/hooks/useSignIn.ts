import {useMutation} from "@tanstack/react-query";
import {signInRequest} from "../services/authService.ts";
import {useAuthStore} from "@app/store/authStore.tsx";
import type {SignInPayload} from "@features/auth/types/SignInPayload.type.ts";
import {useNavigate} from "react-router";

export function useSignIn() {
    const navigate = useNavigate();
    const user = useAuthStore((s) => s.user);
    const setToken = useAuthStore((s) => s.setToken);

    return useMutation({
        mutationFn: (payload: SignInPayload) =>
            signInRequest(user!.username!, payload),
        onSuccess: (data) => {
            setToken(data.token);
            navigate("/dashboard");
        },
    });
}
