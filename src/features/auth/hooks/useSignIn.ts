import {useMutation} from "@tanstack/react-query";
import {signInRequest} from "../services/authService.ts";

export function useSignIn() {
    // const navigate = useNavigate();
    // const setToken = useUserStore((s) => s.setToken);

    return useMutation({
        mutationFn: signInRequest,
        onSuccess: (data) => {
            console.log(data);
            // setToken(data.token);
            // navigate("/dashboard");
        },
    });
}
