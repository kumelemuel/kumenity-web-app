export function SignUpSuccess() {
    return (
        <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">🎉 Account created!</h2>
            <p className="text-gray-700 mb-4">
                Your account has been successfully registered.
            </p>
            <a href="/auth/sign-in" className="text-indigo-700 hover:underline">
                Go to Login
            </a>
        </div>
    );
}
