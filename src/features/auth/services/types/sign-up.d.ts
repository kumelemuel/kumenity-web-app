export interface SignUpRequest {
    email: string;
    username: string;
    password: string;
}

export interface SignUpResponse {
    username: string;
    status: string;
}