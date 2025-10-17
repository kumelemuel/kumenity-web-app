import {useMutation} from "@tanstack/react-query";
import {checkInRequest} from "../services/authService.ts";

export function useSignIn() {
    // const navigate = useNavigate();
    // const setToken = useUserStore((s) => s.setToken);

    return useMutation({
        mutationFn: checkInRequest,
        onSuccess: (data) => {
            console.log(data);
            // setToken(data.token);
            // navigate("/dashboard");
        },
    });
}
