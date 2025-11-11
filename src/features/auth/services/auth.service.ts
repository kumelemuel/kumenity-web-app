import {apiClient} from "@shared/lib/apiClient.ts";
import type {ApiResponse} from "@shared/types/ApiResponse.type.ts";
import type {
    CheckInRequest,
    CheckInResponse,
    SignInRequest,
    SignInResponse,
    SignUpRequest,
    SignUpResponse,
    ValidationCodeRequest,
    ValidationCodeResponse
} from "@features/auth/services/types";

export async function checkInService(payload: CheckInRequest): Promise<CheckInResponse> {
    await new Promise((r) => setTimeout(r, 1000));
    const {data} = await apiClient.post<ApiResponse<CheckInResponse>>("/auth/check-in", payload);
    return data.data;
}

export async function signUpService(payload: SignUpRequest): Promise<SignUpResponse> {
    await new Promise((r) => setTimeout(r, 1000));
    const {data} = await apiClient.post<ApiResponse<SignUpResponse>>("/auth/sign-up", payload);
    return data.data;
}

export async function validationCodeService(username: string, payload: ValidationCodeRequest): Promise<ValidationCodeResponse> {
    await new Promise((r) => setTimeout(r, 1000));
    const {data} = await apiClient.post<ApiResponse<ValidationCodeResponse>>("/auth/validate-user", {username, ...payload});
    return data.data;
}

export async function signInService(username: string, payload: SignInRequest): Promise<SignInResponse> {
    await new Promise((r) => setTimeout(r, 1000));
    const {data} = await apiClient.post<ApiResponse<SignInResponse>>("/auth/sign-in", {username, ...payload});
    return data.data;
}
