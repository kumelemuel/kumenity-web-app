import {useMutation} from "@tanstack/react-query";
import {useAuthStore} from "@app/store/authStore.tsx";
import {validationCodeRequest} from "../services/authService.ts";
import type {ValidationCodePayload} from "../types/ValidationCodePayload.type.ts";

export function useValidationCode() {
    const updateUser = useAuthStore((state) => state.updateUser);
    const user = useAuthStore((s) => s.user);

    return useMutation({
        mutationFn: (payload: ValidationCodePayload) =>
            validationCodeRequest(user!.id, payload),
        onSuccess: (userData) => {
            updateUser(userData);
        },
    });
}
