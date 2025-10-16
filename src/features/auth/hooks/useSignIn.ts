import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { useUserStore } from "../../../app/store/userStore";
import {signInRequest} from "../services/authService.ts";

export function useSignIn() {
    const navigate = useNavigate();
    const setToken = useUserStore((s) => s.setToken);

    return useMutation({
        mutationFn: signInRequest,
        onSuccess: (data) => {
            setToken(data.token);
            navigate("/dashboard");
        },
    });
}
