import {useMutation} from "@tanstack/react-query";
import {checkInRequest} from "../services/authService.ts";
import {useAuthStore} from "../../../app/store/authStore.tsx";

export function useCheckIn() {
    const setUser = useAuthStore((state) => state.setUser);

    return useMutation({
        mutationFn: checkInRequest,
        onSuccess: (userData) => {
            setUser(userData);
        },
    });
}
