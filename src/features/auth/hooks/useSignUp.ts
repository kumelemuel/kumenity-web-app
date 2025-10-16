import { useMutation } from "@tanstack/react-query";
import { signUpRequest} from "../services/authService";

export function useSignUp(onSuccess: () => void) {

    return useMutation({
        mutationFn: signUpRequest,
        onSuccess: () => onSuccess
    });
}
