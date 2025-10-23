import {createBrowserRouter} from "react-router";
import {SignInPage} from "@features/auth/pages/SignInPage.tsx";
import {SignUpPage} from "@features/auth/pages/SignUpPage.tsx";
import {HomePage} from "@features/auth/pages/HomePage.tsx";
import {HomeLayout} from "@shared/ui/layouts/HomeLayout.tsx";
import {AuthLayout} from "@shared/ui/layouts/AuthLayout.tsx";

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
