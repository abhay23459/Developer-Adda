 
import { Routes, Route, Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useAuthStore } from './store/useAuthStore';

import Landing from './pages/Landing';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Onboarding from './pages/onboarding/Onboarding';
import Assessment from './pages/onboarding/Assessment';

import Dashboard from './pages/Dashboard';
import Community from './pages/Community';
import CommunityDetails from './pages/CommunityDetails';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import DSA from './pages/DSA';
import Contests from './pages/Contests';
import Hackathons from './pages/Hackathons';
import Leaderboard from './pages/Leaderboard';
import Compiler from './pages/Compiler';
import Chat from './pages/Chat';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import FullStackPractice from './pages/FullStackPractice';

// Protected Route Guard
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const location = useLocation();
  return isAuthenticated ? children : <Navigate to="/auth/login" state={{ from: location }} replace />;
};

export default function AppRoutes() {
  return (
     
    <Routes>
      {/* Public Pages */}
      <Route path="/" element={<Landing />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/onboarding/assessment" element={<Assessment />} />

      {/* Protected App Pages */}
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/community" element={<ProtectedRoute><Community /></ProtectedRoute>} />
      <Route path="/community/details" element={<ProtectedRoute><CommunityDetails /></ProtectedRoute>} />
      <Route path="/projects" element={<ProtectedRoute><Projects /></ProtectedRoute>} />
      <Route path="/projects/details" element={<ProtectedRoute><ProjectDetails /></ProtectedRoute>} />
      <Route path="/dsa" element={<ProtectedRoute><DSA /></ProtectedRoute>} />
          <Route path="/practice/full-stack" element={<ProtectedRoute><FullStackPractice /></ProtectedRoute>} />
      <Route path="/contests" element={<ProtectedRoute><Contests /></ProtectedRoute>} />
      <Route path="/hackathons" element={<ProtectedRoute><Hackathons /></ProtectedRoute>} />
      <Route path="/leaderboard" element={<ProtectedRoute><Leaderboard /></ProtectedRoute>} />
      <Route path="/compiler" element={<ProtectedRoute><Compiler /></ProtectedRoute>} />
      <Route path="/chat" element={<ProtectedRoute><Chat /></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />

      {/* Fallback Catch-all Route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
 
  );
}