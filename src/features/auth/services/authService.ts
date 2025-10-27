import {apiClient} from "@shared/lib/apiClient.ts";
import type {SignUpPayload} from "../types/SignUpPayload.type.ts";
import type {ApiResponse} from "@shared/types/ApiResponse.type.ts";
import type {SignUpResponse} from "../types/SignUpResponse.type.ts";
import type {CheckInPayload} from "../types/CheckInPayload.type.ts";
import type {CheckInResponse} from "../types/CheckInResponse.type.ts";
import type {ValidationCodePayload} from "../types/ValidationCodePayload.type.ts";
import type {ValidationCodeResponse} from "../types/ValidationCodeResponse.type.ts";
import type {SignInPayload} from "@features/auth/types/SignInPayload.type.ts";
import type {SignInResponse} from "@features/auth/types/SignInResponse.type.ts";

export async function checkInRequest(payload: CheckInPayload): Promise<CheckInResponse> {
    await new Promise((r) => setTimeout(r, 1000));
    const {data} = await apiClient.post<ApiResponse<CheckInResponse>>("/auth/check-in", payload);
    return data.data;
}

export async function signUpRequest(payload: SignUpPayload): Promise<SignUpResponse> {
    await new Promise((r) => setTimeout(r, 1000));
    const {data} = await apiClient.post<ApiResponse<SignUpResponse>>("/auth/sign-up", payload);
    return data.data;
}

export async function validationCodeRequest(username: string, payload: ValidationCodePayload): Promise<ValidationCodeResponse> {
    await new Promise((r) => setTimeout(r, 1000));
    const {data} = await apiClient.post<ApiResponse<ValidationCodeResponse>>("/auth/validate-user", {username, ...payload});
    return data.data;
}

export async function signInRequest(username: string, payload: SignInPayload): Promise<SignInResponse> {
    await new Promise((r) => setTimeout(r, 1000));
    const {data} = await apiClient.post<ApiResponse<SignInResponse>>("/auth/sign-in", {username, ...payload});
    return data.data;
}
