import {apiClient} from "../../../shared/lib/apiClient.ts";
import type {SignUpPayload} from "../types/SignUpPayload.type.ts";
import type {ApiResponse} from "../../../shared/types/ApiResponse.type.ts";
import type {SignUpResponse} from "../types/SignUpResponse.type.ts";
import type {CheckInPayload} from "../types/CheckInPayload.type.ts";

export async function checkInRequest(payload: CheckInPayload) {
    await new Promise((r) => setTimeout(r, 1000));
    const {data} = await apiClient.post<SignUpResponse>("/auth/check-in", payload);
    return data;
}

export async function signUpRequest(payload: SignUpPayload): Promise<SignUpResponse> {
    await new Promise((r) => setTimeout(r, 1000));
    const {data} = await apiClient.post<ApiResponse<SignUpResponse>>("/auth/sign-up", payload);
    return data.data;
}
