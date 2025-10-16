import { useState } from "react";
import {useSignIn} from "../hooks/useSignIn.ts";

export function SignInForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { mutate, isPending } = useSignIn();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutate({ email, password });
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
                type="email"
                placeholder="Email"
                className="border p-2 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                className="border p-2 rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                type="submit"
                className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                disabled={isPending}
            >
                {isPending ? "Loading..." : "Login"}
            </button>
        </form>
    );
}
