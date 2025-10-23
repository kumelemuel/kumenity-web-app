import {Outlet} from "react-router";

export function AuthLayout() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-indigo-100">
            <Outlet/>
        </div>
    );
}
