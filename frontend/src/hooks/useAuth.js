import { useAuthStore } from '../store/useAuthStore';

export function useAuth() {
  const { user, isAuthenticated, isLoading, error, login, register, logout, setUser } = useAuthStore();

  return {
    user,
    isAuthenticated,
    isLoading,
    error,
    login,
    register,
    logout,
    setUser,
    role: user?.role || 'DEVELOPER',
    community: user?.community || 'Unassigned',
  };
}