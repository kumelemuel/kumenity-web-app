import {useMutation} from "@tanstack/react-query";
import {signUpRequest} from "../services/authService.ts";
import {useAuthStore} from "@features/auth/presentation/store/authStore.tsx";

export function useSignUp(onSuccess: () => void) {

    const setUser = useAuthStore((state) => state.setUser);

    return useMutation({
        mutationFn: signUpRequest,
        onSuccess: (userData) => {
            setUser(userData);
            onSuccess();
        }
    });
}
