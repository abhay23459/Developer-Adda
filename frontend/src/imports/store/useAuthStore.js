import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuthStore = create(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,

      login: (userData) =>
        set({ isAuthenticated: true, user: userData }),

      logout: () =>
        set({ isAuthenticated: false, user: null }),

      updateUser: (updates) =>
        set((state) => ({ user: { ...state.user, ...updates } })),
    }),
    { name: 'tier-connect-auth' }
  )
);
