export function HomePage() {
    return (
        <div className="min-h-screen text-white flex flex-col gap-3 items-center justify-center">
            <h1 className="text-4xl font-semibold text-center mb-4">Kumenity.org</h1>
            <div className="flex text-xl font-medium space-x-3">
                <a href="/auth/sign-in" className="hover:underline">Sign in</a> <span>|</span>
                <a href="/auth/sign-up" className="hover:underline">Sign up</a>
            </div>
        </div>
    );
}
