import apiClient from './api';

export const projectsService = {
  async getProjects() {
    try {
      // return await apiClient.get('/projects');
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            {
              id: 'proj_01',
              title: 'DevConnect Real-Time Collaboration Suite',
              description: 'Building an interactive multi-user WebSockets compiler engine.',
              progress: 68,
              sprintDeadline: '2026-09-10',
              repoUrl: 'https://github.com/async-devs/devconnect-suite',
              techStack: ['React', 'Node.js', 'Socket.io', 'Tailwind'],
              tasks: { todo: 4, inProgress: 3, done: 9 },
            },
            {
              id: 'proj_02',
              title: 'Distributed System Rate-Limiter Middleware',
              description: 'Redis sliding-window rate-limiter built in Go & C++.',
              progress: 35,
              sprintDeadline: '2026-09-25',
              repoUrl: 'https://github.com/async-devs/rate-limiter',
              techStack: ['Go', 'C++', 'Redis', 'Docker'],
              tasks: { todo: 8, inProgress: 2, done: 4 },
            },
          ]);
        }, 300);
      });
    } catch (error) {
      throw error;
    }
  },

  async getProjectById(projectId) {
    try {
      // return await apiClient.get(`/projects/${projectId}`);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            id: projectId,
            title: 'DevConnect Real-Time Collaboration Suite',
            description: 'Production-ready full-stack application built during 4-week community sprint.',
            readme: `# DevConnect Realtime Architecture\n\nMain features:\n- Low latency WebSockets\n- Shared code editor instance\n- Collaborative cursor state sync`,
            membersAssigned: ['Alex Rivera', 'Elena Rostova', 'Marcus Chen'],
          });
        }, 250);
      });
    } catch (error) {
      throw error;
    }
  },

  async updateTaskStatus(projectId, taskId, status) {
    try {
      // return await apiClient.patch(`/projects/${projectId}/tasks/${taskId}`, { status });
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ success: true, taskId, status });
        }, 200);
      });
    } catch (error) {
      throw error;
    }
  },
};