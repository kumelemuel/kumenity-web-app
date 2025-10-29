import {act, renderHook, waitFor} from '@testing-library/react'
import {useSignUp} from './useSignUp'
import {useAuthStore} from '@app/store/authStore'
import {signUpRequest} from '../services/authService'
import type {Mock} from 'vitest'
import {afterEach, beforeEach, describe, expect, it, vi} from 'vitest'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'


// 🧩 1. Mocks de dependencias externas
vi.mock('../services/authService', () => ({
    signUpRequest: vi.fn(),
}))

vi.mock('@app/store/authStore', () => ({
    useAuthStore: vi.fn(),
}))

// 🧱 Helper para envolver el hook en el QueryClientProvider
const wrapper = ({children}: { children: React.ReactNode }) => {
    const queryClient = new QueryClient()
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

describe('useSignUp', () => {
    const mockSetUser = vi.fn()
    const mockOnSuccess = vi.fn()

    beforeEach(() => {
        vi.clearAllMocks()

        // Zustand mock
        ;(useAuthStore as unknown as Mock).mockReturnValue(mockSetUser)

        // React Query mock response
        ;(signUpRequest as unknown as Mock).mockResolvedValue({
            username: 'kume',
            status: 'active',
        })
    })

    afterEach(() => {
        vi.restoreAllMocks()
    })

    it('should call signUpRequest, setUser and onSuccess on success', async () => {
        const {result} = renderHook(() => useSignUp(mockOnSuccess), {wrapper})

        // act: ejecutamos la mutación
        await act(async () => {
            await result.current.mutateAsync({username: 'kume', email: 'test@test.cl', password: '1234'})
        })

        // expect: se llamó signUpRequest con los datos correctos
        expect(signUpRequest).toHaveBeenCalledWith(
            expect.objectContaining({username: 'kume', email: 'test@test.cl', password: '1234'}),
            expect.any(Object)
        )

        // expect: se llamó setUser con el userData retornado
        expect(mockSetUser).toHaveBeenCalledWith({username: 'kume', status: 'active'})

        // expect: se ejecutó el callback onSuccess
        expect(mockOnSuccess).toHaveBeenCalled()
    })

    it('should handle API errors', async () => {
        ;(signUpRequest as unknown as Mock).mockRejectedValueOnce(new Error('Network error'))

        const {result} = renderHook(() => useSignUp(mockOnSuccess), {wrapper})

        await act(async () => {
            result.current.mutate({username: 'fail', email: 'test@test.cl', password: '1234'})
        })

        await waitFor(() => {
            expect(result.current.isError).toBe(true)
        })
    })
})
