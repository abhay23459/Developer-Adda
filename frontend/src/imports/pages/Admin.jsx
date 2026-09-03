import { useState } from 'react';
import AppLayout from '../components/AppLayout';

const taskStorageKey = 'practice-admin-tasks';
const controlStorageKey = 'platform-admin-controls';

const emptyTask = { title: '', track: 'frontend', topic: '', difficulty: 'Basic', time: '45 min', description: '' };

export default function Admin() {
  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem(taskStorageKey) ?? '[]'));
  const [task, setTask] = useState(emptyTask);
  const [controls, setControls] = useState(() => JSON.parse(localStorage.getItem(controlStorageKey) ?? '{"maintenance":false,"registrations":true}'));
  const [message, setMessage] = useState('');

  const saveTasks = (nextTasks) => {
    setTasks(nextTasks);
    localStorage.setItem(taskStorageKey, JSON.stringify(nextTasks));
  };

  const addTask = (event) => {
    event.preventDefault();
    if (!task.title.trim() || !task.topic.trim() || !task.description.trim()) {
      setMessage('Add a title, topic, and task brief first.');
      return;
    }
    saveTasks([...tasks, { ...task, id: `${Date.now()}-${task.title}` }]);
    setTask(emptyTask);
    setMessage('Task published to the practice curriculum.');
  };

  const updateControl = (key) => {
    const nextControls = { ...controls, [key]: !controls[key] };
    setControls(nextControls);
    localStorage.setItem(controlStorageKey, JSON.stringify(nextControls));
  };

  const resetProgress = () => {
    localStorage.removeItem('practice-completed-tasks');
    setMessage('Learner practice progress has been reset.');
  };

  return (
    <AppLayout>
      <div className="page-body admin-page">
        <div className="admin-header">
          <div>
            <p className="practice-eyebrow">Control center</p>
            <h1>Admin Console</h1>
            <p>Manage the curriculum and platform settings from one place.</p>
          </div>
          <span className="admin-status"><i /> Admin access enabled</span>
        </div>

        <div className="admin-grid">
          <section className="card admin-panel">
            <div className="admin-section-heading">
              <div><p className="practice-eyebrow">Curriculum</p><h2>Add a practice task</h2></div>
              <span className="admin-count">{tasks.length} custom</span>
            </div>
            <form className="admin-task-form" onSubmit={addTask}>
              <label>Task title<input className="field" value={task.title} onChange={(event) => setTask({ ...task, title: event.target.value })} placeholder="Build a weather dashboard" /></label>
              <label>Track<select className="field" value={task.track} onChange={(event) => setTask({ ...task, track: event.target.value })}><option value="frontend">Frontend Practice</option><option value="backend">Backend Practice</option></select></label>
              <label>Topic<input className="field" value={task.topic} onChange={(event) => setTask({ ...task, topic: event.target.value })} placeholder="React & APIs" /></label>
              <label>Difficulty<select className="field" value={task.difficulty} onChange={(event) => setTask({ ...task, difficulty: event.target.value })}><option>Basic</option><option>Intermediate</option><option>Hard</option></select></label>
              <label>Estimated time<input className="field" value={task.time} onChange={(event) => setTask({ ...task, time: event.target.value })} placeholder="90 min" /></label>
              <label className="admin-full-field">Task brief<textarea className="field" rows="3" value={task.description} onChange={(event) => setTask({ ...task, description: event.target.value })} placeholder="Describe what the learner needs to build..." /></label>
              <button className="btn-primary admin-publish-button" type="submit">Publish task</button>
            </form>
            {message && <p className="admin-message" role="status">{message}</p>}
          </section>

          <section className="card admin-panel">
            <div className="admin-section-heading"><div><p className="practice-eyebrow">Platform</p><h2>Global controls</h2></div></div>
            <div className="admin-controls">
              <button type="button" className="admin-control" onClick={() => updateControl('maintenance')}><span><strong>Maintenance mode</strong><small>Show a maintenance state to non-admin users.</small></span><b className={controls.maintenance ? 'on' : ''}>{controls.maintenance ? 'On' : 'Off'}</b></button>
              <button type="button" className="admin-control" onClick={() => updateControl('registrations')}><span><strong>New registrations</strong><small>Allow new learners to create accounts.</small></span><b className={controls.registrations ? 'on' : ''}>{controls.registrations ? 'Open' : 'Closed'}</b></button>
              <button type="button" className="admin-control danger" onClick={resetProgress}><span><strong>Reset learner progress</strong><small>Clear locally stored task completion records.</small></span><b>Reset</b></button>
            </div>
          </section>
        </div>

        <section className="card admin-panel admin-task-library">
          <div className="admin-section-heading"><div><p className="practice-eyebrow">Published by admins</p><h2>Custom task library</h2></div></div>
          {tasks.length === 0 ? <p className="admin-empty">No custom tasks yet. Publish the first challenge above.</p> : <div className="admin-task-table">{tasks.map((item) => <div className="admin-task-row" key={item.id}><div><strong>{item.title}</strong><span>{item.track === 'frontend' ? 'Frontend' : 'Backend'} · {item.topic}</span></div><span className="admin-difficulty">{item.difficulty}</span><button type="button" onClick={() => saveTasks(tasks.filter((taskItem) => taskItem.id !== item.id))} aria-label={`Delete ${item.title}`}>Delete</button></div>)}</div>}
        </section>
      </div>
    </AppLayout>
  );
}
