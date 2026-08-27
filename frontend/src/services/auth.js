import apiClient from './api';

export const authService = {
  async login(credentials) {
      // Real API Endpoint call:
      // const response = await apiClient.post('/auth/login', credentials);
      // return response;

      // Mock Response Fallback:
      return new Promise((resolve) => {
        setTimeout(() => {
          const user = {
            id: 'usr_101',
            name: credentials.email ? credentials.email.split('@')[0] : 'Alex Rivera',
            email: credentials.email || 'alex@example.com',
            role: 'COMMUNITY_LEADER',
            community: 'Async-Devs-Alpha',
            token: 'mock_jwt_token_devconnect_2026',
          };
          localStorage.setItem('devconnect_auth_token', user.token);
          resolve({ success: true, user });
        }, 400);
      });
  },

  async register() {
      // return await apiClient.post('/auth/register', userData);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ success: true, message: 'Account created successfully.' });
        }, 400);
      });
  },

  async submitAssessment() {
      // return await apiClient.post('/user/assessment', answers);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            assignedCommunity: 'Async-Devs-Alpha',
            initialDsaRating: 1420,
            tier: 'Tier 2 (Intermediate)',
          });
        }, 500);
      });
  },

  async getCurrentUser() {
    return await apiClient.get('/auth/me');
  },

  logout() {
    localStorage.removeItem('devconnect_auth_token');
  },
};