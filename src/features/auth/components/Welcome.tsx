import {useAuthStore} from "../../../app/store/authStore.tsx";

export function Welcome() {
    const user = useAuthStore((state) => state.user);

    return (
        <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">Welcome {user?.username}!</h2>
            <p className="text-gray-700 mb-4">
                You will receive an email with an authorization code so you can validate your account.
            </p>
            <a href="/" className="text-indigo-700 hover:underline">
                Go to home
            </a>
        </div>
    );
}
