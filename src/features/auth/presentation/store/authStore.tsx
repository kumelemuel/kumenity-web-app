import {create} from "zustand";
import {persist} from "zustand/middleware";

interface User {
    username: string;
    status: string;
}

interface AuthState {
    user: User | null;
    setUser: (user: User | null) => void;
    updateUser: (partialUser: Partial<User>) => void;
    resetAuth: () => void;
    token: string | null;
    setToken: (token: string | null) => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            setUser: (user) => set({user}),
            updateUser: (partialUser) =>
                set((state) => ({
                    user: state.user ? {...state.user, ...partialUser} : null,
                })),
            resetAuth: () => set({user: null}),
            token: null,
            setToken: (token) => set({token}),
        }),
        {
            name: "auth-storage",
            partialize: (state) => ({user: state.user}),
        }
    )
);
