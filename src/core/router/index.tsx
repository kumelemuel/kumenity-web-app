import {createBrowserRouter} from "react-router";
import {SignInPage} from "@features/auth/presentation/pages/SignInPage.tsx";
import {SignUpPage} from "@features/auth/presentation/pages/SignUpPage.tsx";
import {HomePage} from "@features/auth/presentation/pages/HomePage.tsx";
import {HomeLayout} from "@shared/presentation/layouts/HomeLayout.tsx";
import {AuthLayout} from "@shared/presentation/layouts/AuthLayout.tsx";

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
        path: "/auth_dirty",
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
