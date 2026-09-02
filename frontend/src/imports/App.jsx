import './index.css';
import './App.css';
import AppRoutes from './routes';

export default function App() {
  return (
    <div style={{ minHeight: '100svh', background: 'var(--bg)', color: 'var(--text)' }}>
      <AppRoutes />
    </div>
  );
}
