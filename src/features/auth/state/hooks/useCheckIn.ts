import {useMutation} from "@tanstack/react-query";
import {checkInService} from "@features/auth/services/auth.service.ts";
import {useAuthStore} from "@features/auth/state/stores/auth.store.tsx";

export function useCheckIn() {
    const setUser = useAuthStore((state) => state.setUser);

    return useMutation({
        mutationFn: checkInService,
        onSuccess: (userData) => {
            setUser(userData);
        },
    });
}
