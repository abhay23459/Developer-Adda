import { create } from 'zustand';
import { authService } from '../services/auth';

const STORAGE_KEY = 'devconnect_user_session';

export const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem(STORAGE_KEY)) || null,
  isAuthenticated: !!localStorage.getItem(STORAGE_KEY),
  isLoading: false,
  error: null,

  login: async (credentials) => {
    set({ isLoading: true, error: null });
    try {
      const response = await authService.login(credentials);
      const user = response.user || credentials;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
      set({ user, isAuthenticated: true, isLoading: false });
      return user;
    } catch (err) {
      set({ error: err.message || 'Login failed', isLoading: false });
      throw err;
    }
  },

  register: async (userData) => {
    set({ isLoading: true, error: null });
    try {
      const response = await authService.register(userData);
      set({ isLoading: false });
      return response;
    } catch (err) {
      set({ error: err.message || 'Registration failed', isLoading: false });
      throw err;
    }
  },

  logout: () => {
    authService.logout();
    localStorage.removeItem(STORAGE_KEY);
    set({ user: null, isAuthenticated: false, error: null });
  },

  setUser: (user) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    set({ user, isAuthenticated: true });
  },
}));