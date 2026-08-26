import apiClient from './api';

export const authService = {
  async login(credentials) {
    try {
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
    } catch (error) {
      throw error;
    }
  },

  async register(userData) {
    try {
      // return await apiClient.post('/auth/register', userData);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ success: true, message: 'Account created successfully.' });
        }, 400);
      });
    } catch (error) {
      throw error;
    }
  },

  async submitAssessment(answers) {
    try {
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
    } catch (error) {
      throw error;
    }
  },

  async getCurrentUser() {
    try {
      return await apiClient.get('/auth/me');
    } catch (error) {
      throw error;
    }
  },

  logout() {
    localStorage.removeItem('devconnect_auth_token');
  },
};