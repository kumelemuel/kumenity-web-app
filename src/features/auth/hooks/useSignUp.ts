import {useMutation} from "@tanstack/react-query";
import {signUpRequest} from "../services/authService";
import {useAuthStore} from "../../../app/store/authStore.tsx";

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
