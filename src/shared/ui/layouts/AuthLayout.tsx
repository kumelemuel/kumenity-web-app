import { Outlet } from "react-router";

export function AuthLayout() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-indigo-950">
            <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-12">
                <Outlet />
            </div>
        </div>
    );
}
