import {useMutation} from "@tanstack/react-query";
import {useAuthStore} from "@features/auth/state/stores/auth.store.tsx";
import {validationCodeService} from "@features/auth/services/auth.service.ts";
import type {ValidationCodeRequest} from "@features/auth/services/types/validation-code.d.ts";
import {useLocation} from "react-router";

export function useValidationCode() {
    const updateUser = useAuthStore((state) => state.updateUser);
    const user = useAuthStore((s) => s.user);
    const location = useLocation();

    return useMutation({
        mutationFn: (payload: ValidationCodeRequest) =>
            validationCodeService(user!.username, payload),
        onSuccess: (userData) => {
            updateUser(userData);
            if (location.pathname === "/auth/sign-up") {
                window.location.href = "/auth/sign-in";
            }

        },
    });
}
