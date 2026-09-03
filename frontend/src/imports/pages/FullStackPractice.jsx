import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppLayout from '../components/AppLayout';

const tracks = {
  frontend: {
    label: 'Frontend Practice',
    description: 'Build accessible, responsive interfaces from the ground up.',
    tasks: [
      { title: 'Responsive Profile Card', topic: 'HTML & CSS', difficulty: 'Basic', time: '30 min', description: 'Create a profile card that adapts cleanly to mobile, tablet, and desktop screens.', status: 'Completed' },
      { title: 'Interactive Todo List', topic: 'JavaScript', difficulty: 'Basic', time: '45 min', description: 'Build a todo list with add, complete, delete, and local storage functionality.', status: 'In progress' },
      { title: 'Product Search and Filters', topic: 'React', difficulty: 'Intermediate', time: '90 min', description: 'Create a product catalog with debounced search, category filters, and sorting.', status: 'Start task' },
      { title: 'Accessible Multi-step Form', topic: 'Accessibility', difficulty: 'Intermediate', time: '90 min', description: 'Build a validated multi-step form with keyboard navigation and accessible errors.', status: 'Start task' },
      { title: 'Real-time Analytics Dashboard', topic: 'React & Charts', difficulty: 'Hard', time: '3 hr', description: 'Build a responsive dashboard that streams data and renders interactive charts.', status: 'Start task' },
    ],
  },
  backend: {
    label: 'Backend Practice',
    description: 'Design reliable APIs, data models, and production-ready services.',
    tasks: [
      { title: 'Build a CRUD API', topic: 'REST & HTTP', difficulty: 'Basic', time: '45 min', description: 'Create endpoints to create, read, update, and delete a collection of resources.', status: 'Completed' },
      { title: 'User Authentication Service', topic: 'Auth & Security', difficulty: 'Basic', time: '60 min', description: 'Implement registration, login, password hashing, and protected API routes.', status: 'Start task' },
      { title: 'Paginated Search API', topic: 'Databases', difficulty: 'Intermediate', time: '90 min', description: 'Design a searchable API with pagination, validation, sorting, and useful error responses.', status: 'Start task' },
      { title: 'Background Job Queue', topic: 'Workers & Redis', difficulty: 'Intermediate', time: '2 hr', description: 'Move slow work into a queue and expose an endpoint to monitor job status.', status: 'Start task' },
      { title: 'Rate-limited Scalable API', topic: 'Systems Design', difficulty: 'Hard', time: '3 hr', description: 'Design a resilient API with rate limiting, caching, logging, and horizontal scaling.', status: 'Start task' },
    ],
  },
};

const difficultyColors = {
  Basic: 'var(--green)',
  Intermediate: 'var(--accent)',
  Hard: 'var(--red)',
};

export default function FullStackPractice() {
  const navigate = useNavigate();
  const [track, setTrack] = useState('frontend');
  const [difficulty, setDifficulty] = useState('All');
  const [githubRepo, setGithubRepo] = useState(() => localStorage.getItem('practice-github-repo') ?? '');
  const [githubData, setGithubData] = useState(null);
  const [githubCommits, setGithubCommits] = useState([]);
  const [githubLoading, setGithubLoading] = useState(false);
  const [githubError, setGithubError] = useState('');
  const [completedTasks, setCompletedTasks] = useState(() => JSON.parse(localStorage.getItem('practice-completed-tasks') ?? '[]'));
  const [syncMessage, setSyncMessage] = useState('');
  const taskKey = (task) => `${track}:${task.title}`;
  const currentTrack = tracks[track];
  const tasks = currentTrack.tasks.filter((task) => difficulty === 'All' || task.difficulty === difficulty);
  const completed = currentTrack.tasks.filter((task) => task.status === 'Completed' || completedTasks.includes(taskKey(task))).length;
  const openTask = (task) => navigate('/compiler', { state: { problem: { ...task, track: currentTrack.label } } });

  useEffect(() => {
    localStorage.setItem('practice-github-repo', githubRepo);
    localStorage.setItem('practice-completed-tasks', JSON.stringify(completedTasks));
  }, [githubRepo, completedTasks]);

  const syncGithubProgress = async () => {
    setGithubError('');
    setSyncMessage('');
    let repositoryUrl;
    try {
      repositoryUrl = new URL(githubRepo.trim());
    } catch {
      setGithubError('Enter a valid public GitHub repository URL.');
      return;
    }

    const parts = repositoryUrl.pathname.split('/').filter(Boolean);
    if (repositoryUrl.hostname !== 'github.com' || parts.length < 2) {
      setGithubError('Use a URL like https://github.com/username/repository.');
      return;
    }

    const [owner, repository] = parts;
    const repoPath = `${owner}/${repository.replace(/\.git$/, '')}`;
    setGithubLoading(true);
    try {
      const [repoResponse, commitsResponse] = await Promise.all([
        fetch(`https://api.github.com/repos/${repoPath}`),
        fetch(`https://api.github.com/repos/${repoPath}/commits?per_page=5`),
      ]);
      if (!repoResponse.ok || !commitsResponse.ok) throw new Error('GitHub could not find that public repository.');
      const repo = await repoResponse.json();
      const commits = await commitsResponse.json();
      const commitMessages = commits.map((commit) => commit.commit.message.toLowerCase());
      const verifiedTasks = currentTrack.tasks
        .filter((task) => commitMessages.some((message) => message.includes(task.title.toLowerCase())))
        .map(taskKey);
      setGithubData(repo);
      setGithubCommits(commits);
      setCompletedTasks((current) => [...new Set([...current, ...verifiedTasks])]);
      setSyncMessage(verifiedTasks.length > 0
        ? `Connected to ${repo.full_name}. ${verifiedTasks.length} task${verifiedTasks.length === 1 ? '' : 's'} verified from commit messages.`
        : `Connected to ${repo.full_name}. Add a task title to a commit message to verify it automatically.`);
    } catch (error) {
      setGithubData(null);
      setGithubCommits([]);
      setGithubError(error.message || 'Unable to connect to GitHub right now.');
    } finally {
      setGithubLoading(false);
    }
  };

  const toggleCompleted = (task) => {
    const key = taskKey(task);
    setCompletedTasks((current) => current.includes(key) ? current.filter((item) => item !== key) : [...current, key]);
  };

  return (
    <AppLayout>
      <div className="page-body practice-page">
        <div className="practice-page-header">
          <div>
            <p className="practice-eyebrow">Practice track</p>
            <h1 style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 4 }}>Full Stack Web Development</h1>
            <p style={{ fontSize: 13, color: 'var(--muted)' }}>{currentTrack.description}</p>
          </div>
          <div className="practice-progress card">
            <div className="practice-progress-top"><span>Track progress</span><strong>{Math.round((completed / currentTrack.tasks.length) * 100)}%</strong></div>
            <div className="practice-progress-bar"><span style={{ width: `${(completed / currentTrack.tasks.length) * 100}%` }} /></div>
            <small>{completed} of {currentTrack.tasks.length} tasks completed</small>
          </div>
        </div>

        <section className="github-progress card" aria-labelledby="github-progress-title">
          <div className="github-progress-copy">
            <p className="practice-eyebrow">GitHub progress</p>
            <h2 id="github-progress-title">Keep your build history here</h2>
            <p>Save your repository and update your commit count after pushing a task.</p>
            <div className="github-commit-stat"><strong>{githubData ? githubData.stargazers_count : '—'}</strong><span>{githubData ? 'stars' : 'connect to sync'}</span></div>
          </div>
          <div className="github-progress-form">
            <label>
              Repository URL
              <input className="field" type="url" placeholder="https://github.com/you/project" value={githubRepo} onChange={(event) => setGithubRepo(event.target.value)} />
            </label>
            <button type="button" className="btn-primary" onClick={syncGithubProgress} disabled={githubLoading}>{githubLoading ? 'Connecting…' : 'Connect GitHub'}</button>
          </div>
          {githubData && <div className="github-repo-details"><span>{githubData.language || 'Code'} · {githubData.forks_count} forks</span><a className="github-repo-link" href={githubData.html_url} target="_blank" rel="noreferrer">Open repository ↗</a></div>}
          {githubCommits.length > 0 && <div className="github-activity"><strong>Recent commits</strong>{githubCommits.map((commit) => <a key={commit.sha} href={commit.html_url} target="_blank" rel="noreferrer"><span>{commit.commit.message.split('\n')[0]}</span><small>{commit.commit.author?.name || 'GitHub contributor'}</small></a>)}</div>}
          {githubError && <span className="github-error" role="alert">{githubError}</span>}
          {syncMessage && <span className="github-sync-message" role="status">{syncMessage}</span>}
        </section>

        <div className="practice-track-tabs" role="tablist" aria-label="Practice tracks">
          {Object.entries(tracks).map(([key, value]) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={track === key}
              className={track === key ? 'active' : ''}
              onClick={() => { setTrack(key); setDifficulty('All'); }}
            >
              {value.label}
            </button>
          ))}
        </div>

        <div className="practice-toolbar">
          <div>
            <p className="practice-eyebrow">Curriculum</p>
            <h2 style={{ fontSize: 16, fontWeight: 700 }}>Tasks</h2>
            <p style={{ fontSize: 12, color: 'var(--muted)' }}>Start with the basics and work toward production-level challenges.</p>
          </div>
          <div className="practice-filters" aria-label="Filter tasks by difficulty">
            {['All', 'Basic', 'Intermediate', 'Hard'].map((level) => (
              <button key={level} type="button" className={difficulty === level ? 'active' : ''} onClick={() => setDifficulty(level)}>
                {level}
              </button>
            ))}
          </div>
        </div>

        <div className="practice-task-list">
          {tasks.map((task) => (
            <article className="practice-task card" key={task.title} onClick={() => openTask(task)} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') openTask(task); }} role="button" tabIndex={0}>
              <div className="practice-task-index" style={{ color: difficultyColors[task.difficulty] }}>
                {task.difficulty === 'Basic' ? '01' : task.difficulty === 'Intermediate' ? '02' : '03'}
              </div>
              <div className="practice-task-content">
                <div className="practice-task-heading">
                  <h3>{task.title}</h3>
                  <span style={{ color: difficultyColors[task.difficulty] }}>{task.difficulty}</span>
                </div>
                <p className="practice-task-description">{task.description}</p>
                <div className="practice-task-meta">
                  <span>{task.topic}</span>
                  <span>{task.time}</span>
                </div>
              </div>
              <button type="button" onClick={(event) => { event.stopPropagation(); toggleCompleted(task); }} className={task.status === 'Completed' || completedTasks.includes(taskKey(task)) ? 'practice-task-status completed' : 'practice-task-status'}>
                {task.status === 'Completed' || completedTasks.includes(taskKey(task)) ? 'Completed' : 'Mark complete'}
              </button>
            </article>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
