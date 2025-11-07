import {useMutation} from "@tanstack/react-query";
import {useAuthStore} from "@features/auth/presentation/store/authStore.tsx";
import {validationCodeRequest} from "../services/authService.ts";
import type {ValidationCodePayload} from "../types/ValidationCodePayload.type.ts";
import {useLocation} from "react-router";

export function useValidationCode() {
    const updateUser = useAuthStore((state) => state.updateUser);
    const user = useAuthStore((s) => s.user);
    const location = useLocation();

    return useMutation({
        mutationFn: (payload: ValidationCodePayload) =>
            validationCodeRequest(user!.username, payload),
        onSuccess: (userData) => {
            updateUser(userData);
            if (location.pathname === "/auth_dirty/sign-up") {
                window.location.href = "/auth_dirty/sign-in";
            }

        },
    });
}
