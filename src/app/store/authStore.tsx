import {create} from "zustand";
import {persist} from "zustand/middleware";

interface User {
    id: string;
    email: string;
    username: string;
    status: string;
}

interface AuthState {
    user: User | null;
    setUser: (user: User | null) => void;
    updateUser: (partialUser: Partial<User>) => void;
    resetAuth: () => void;
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
        }),
        {
            name: "auth-storage",
            partialize: (state) => ({user: state.user}),
        }
    )
);
