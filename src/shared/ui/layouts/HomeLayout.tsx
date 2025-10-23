import {Outlet} from "react-router";

export function HomeLayout() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-indigo-100">
            <Outlet/>
        </div>
    );
}
