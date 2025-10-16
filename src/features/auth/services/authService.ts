import {apiClient} from "../../../shared/lib/apiClient.ts";
import type {SignUpPayload} from "../types/SignUpPayload.type.ts";

interface SignInPayload {
    email: string;
    password: string;
}

interface SignUpResponse {
    status: string;
}

export async function signInRequest(payload: SignInPayload) {
    // Aquí simulas una API externa
    await new Promise((r) => setTimeout(r, 1000));

    if (payload.email === "admin@test.com" && payload.password === "1234") {
        return { token: "fake-jwt-token" };
    }

    throw new Error("Invalid credentials");
}

export async function signUpRequest(payload: SignUpPayload) {
    const { data } = await apiClient.post<SignUpResponse>("/auth/sign-up", payload);
    return data;
}
