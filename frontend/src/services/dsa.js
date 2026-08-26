import apiClient from './api';

export const dsaService = {
  async getProblems(filters = {}) {
    try {
      // return await apiClient.get('/dsa/problems', { params: filters });
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            { id: 'p_01', title: 'Two Sum', difficulty: 'Easy', category: 'Arrays & Hashing', acceptance: '49.2%', solved: true },
            { id: 'p_02', title: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', category: 'Sliding Window', acceptance: '34.8%', solved: true },
            { id: 'p_03', title: 'Trapping Rain Water', difficulty: 'Hard', category: 'Two Pointers', acceptance: '60.1%', solved: false },
            { id: 'p_04', title: 'Course Schedule II', difficulty: 'Medium', category: 'Graph Topological Sort', acceptance: '48.5%', solved: false },
            { id: 'p_05', title: 'Merge k Sorted Lists', difficulty: 'Hard', category: 'Heap / Priority Queue', acceptance: '51.3%', solved: false },
          ]);
        }, 300);
      });
    } catch (error) {
      throw error;
    }
  },

  async getProblemById(id) {
    try {
      // return await apiClient.get(`/dsa/problems/${id}`);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            id,
            title: 'Two Sum',
            difficulty: 'Easy',
            category: 'Arrays & Hashing',
            description: `Given an array of integers \`nums\` and an integer \`target\`, return indices of the two numbers such that they add up to \`target\`.

You may assume that each input would have exactly one solution, and you may not use the same element twice.`,
            starterCode: {
              javascript: `function twoSum(nums, target) {\n  // Your code here\n};`,
              cpp: `class Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        \n    }\n};`,
              python: `def twoSum(nums: List[int], target: int) -> List[int]:\n    pass`,
            },
            testCases: [
              { input: 'nums = [2,7,11,15], target = 9', expected: '[0,1]' },
              { input: 'nums = [3,2,4], target = 6', expected: '[1,2]' },
            ],
          });
        }, 250);
      });
    } catch (error) {
      throw error;
    }
  },

  async submitSolution(problemId, solutionData) {
    try {
      // return await apiClient.post(`/dsa/problems/${problemId}/submit`, solutionData);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            status: 'Accepted',
            runtime: '48 ms',
            memory: '42.1 MB',
            passedTestCases: 57,
            totalTestCases: 57,
          });
        }, 600);
      });
    } catch (error) {
      throw error;
    }
  },

  async getContests() {
    try {
      // return await apiClient.get('/dsa/contests');
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            { id: 'c_42', title: 'Weekly Speedrun #42', startTime: '2026-09-01T18:00:00Z', duration: '90m', participants: 480, status: 'UPCOMING' },
            { id: 'c_41', title: 'Sprint Marathon #12', startTime: '2026-08-20T12:00:00Z', duration: '180m', participants: 1200, status: 'COMPLETED' },
          ]);
        }, 300);
      });
    } catch (error) {
      throw error;
    }
  },
};