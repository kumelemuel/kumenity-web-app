import {createBrowserRouter} from "react-router";
import {SignInPage} from "@features/auth/ui/pages/SignInPage.tsx";
import {SignUpPage} from "@features/auth/ui/pages/SignUpPage.tsx";
import {HomePage} from "@features/auth/ui/pages/HomePage.tsx";
import {HomeLayout} from "@features/auth/ui/layouts/HomeLayout.tsx";
import {AuthLayout} from "@features/auth/ui/layouts/AuthLayout.tsx";

export const router = createBrowserRouter([
    {
        element: <HomeLayout/>,
        children: [
            {
                path: "/",
                element: <HomePage/>,
            },
        ],
    },
    {
        path: "/auth",
        element: <AuthLayout/>,
        children: [
            {
                path: "sign-in",
                element: <SignInPage/>,
            },
            {
                path: "sign-up",
                element: <SignUpPage/>,
            },
        ],
    },


]);
