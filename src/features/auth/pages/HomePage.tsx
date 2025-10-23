import {Button} from "@app/components/ui/button.tsx";

export function HomePage() {
    return (
        <div className="min-h-screen flex flex-col gap-3 items-center justify-center">
            <h1 className="text-4xl font-semibold text-center mb-4">Kumenity.org</h1>
            <div className="flex text-xl font-medium space-x-3">
                <Button variant="link">
                    <a href="/auth/sign-in">Sign in</a>
                </Button>
                <span>|</span>
                <Button variant="link">
                    <a href="/auth/sign-up">Sign up</a>
                </Button>
            </div>
        </div>
    );
}
