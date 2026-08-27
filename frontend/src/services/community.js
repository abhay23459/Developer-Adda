export const communityService = {
  async getCommunityDetails(communityId = 'Async-Devs-Alpha') {
      // return await apiClient.get(`/communities/${communityId}`);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            id: communityId,
            name: 'Async-Devs-Alpha',
            tier: 'Tier 2',
            membersCount: 10,
            leader: 'Alex Rivera',
            stats: {
              dsaRank: 4,
              completedSprints: 12,
              activeProjects: 2,
              contestsWon: 3,
            },
            techStack: ['React', 'Node.js', 'C++', 'PostgreSQL', 'Docker'],
          });
        }, 300);
      });
  },

  async getMembers() {
      // return await apiClient.get(`/communities/${communityId}/members`);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            { id: 1, name: 'Alex Rivera', role: 'Leader', dsaRating: 1540, avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80', status: 'Online' },
            { id: 2, name: 'Elena Rostova', role: 'Core Dev', dsaRating: 1610, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80', status: 'In Contest' },
            { id: 3, name: 'Marcus Chen', role: 'Contributor', dsaRating: 1480, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80', status: 'Offline' },
            { id: 4, name: 'Sarah Jenkins', role: 'Contributor', dsaRating: 1390, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80', status: 'Online' },
          ]);
        }, 300);
      });
  },

  async getLeaderboard() {
      // return await apiClient.get('/communities/leaderboard');
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            { rank: 1, name: 'ByteBusters Hub', tier: 'Tier 1', totalPoints: 12450, members: 10, leader: 'Karan Patel' },
            { rank: 2, name: 'Async-Devs-Alpha', tier: 'Tier 2', totalPoints: 10890, members: 10, leader: 'Alex Rivera' },
            { rank: 3, name: 'AlgoKnights', tier: 'Tier 2', totalPoints: 9750, members: 10, leader: 'Sophia Martinez' },
            { rank: 4, name: 'KernelPanics', tier: 'Tier 3', totalPoints: 8900, members: 10, leader: 'David Kim' },
          ]);
        }, 350);
      });
  },
};