import {useMutation} from "@tanstack/react-query";
import {signUpService} from "@features/auth/services/auth.service.ts";
import {useAuthStore} from "@features/auth/state/stores/auth.store.tsx";

export function useSignUp(onSuccess: () => void) {

    const setUser = useAuthStore((state) => state.setUser);

    return useMutation({
        mutationFn: signUpService,
        onSuccess: (userData) => {
            setUser(userData);
            onSuccess();
        }
    });
}
