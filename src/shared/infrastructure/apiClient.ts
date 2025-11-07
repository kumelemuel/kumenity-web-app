import axios from "axios";

export const apiClient = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
        "Content-Type": "application/json",
    },
});

apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            const { status, data } = error.response;

            console.error(`API Error [${status}]:`, data.message || data.error);

            if (status === 401) {
                // window.location.href = "/login";
            }

            return Promise.reject({
                status,
                message: data.message || "Unexpected error occurred",
                data,
            });
        }

        if (error.request) {
            return Promise.reject({
                status: 0,
                message: "Network error: unable to reach the server",
            });
        }

        return Promise.reject({
            status: -1,
            message: error.message || "Unknown client error",
        });
    }
);
