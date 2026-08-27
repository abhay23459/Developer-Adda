import { useMemo, useState } from 'react';
import { Award, Bookmark, CalendarDays, Check, Heart, MessageCircle, MoreHorizontal, Plus, Search, Send, Sparkles, TrendingUp, UsersRound, X } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { useAuthStore } from '../store/useAuthStore';
import './Community.css';
import './CommunityCreate.css';

const topics = ['All posts', 'Show & tell', 'Help desk', 'Study rooms', 'Opportunities'];

const initialPosts = [
  { id: 1, author: 'Maya Patel', initials: 'MP', role: 'Frontend builder', time: '18 min ago', topic: 'Show & tell', title: 'I made my first accessible component library', body: 'After three weeks of learning ARIA patterns, I finally shipped a tiny library for our campus projects. The hardest part was making the API feel simple.', tags: ['React', 'Accessibility'], likes: 42, comments: 8, color: 'coral', liked: false, saved: false },
  { id: 2, author: 'Theo Brooks', initials: 'TB', role: 'Community mentor', time: '1 hr ago', topic: 'Help desk', title: 'What is your go-to way to learn a new codebase?', body: 'I am putting together a lightweight onboarding guide for our next build sprint. Looking for the rituals that help you find your footing quickly.', tags: ['Learning', 'Open question'], likes: 28, comments: 14, color: 'teal', liked: false, saved: false },
  { id: 3, author: 'Aisha Khan', initials: 'AK', role: 'Backend builder', time: '3 hrs ago', topic: 'Study rooms', title: 'Sunday system design room is open', body: 'We will sketch a notification system together, compare tradeoffs, and leave with one clean diagram. Beginners are very welcome.', tags: ['System design', 'This Sunday'], likes: 19, comments: 6, color: 'violet', liked: false, saved: false },
];

const people = [
  { name: 'Jordan Lee', detail: 'React + TypeScript', initials: 'JL', color: 'gold' },
  { name: 'Nia Okafor', detail: 'Python + Data', initials: 'NO', color: 'blue' },
  { name: 'Sam Wilson', detail: 'Product design', initials: 'SW', color: 'peach' },
];

export default function Community() {
  const [searchParams] = useSearchParams();
  const user = useAuthStore((state) => state.user);
  const setCommunity = useAuthStore((state) => state.setCommunity);
  const [community, setLocalCommunity] = useState(user?.community ? { name: user.community, technologies: user.communityTechnologies || [], description: user.communityDescription || 'A focused space for builders learning in public.' } : null);
  const [createOpen, setCreateOpen] = useState(searchParams.get('create') === '1');
  const [activeTopic, setActiveTopic] = useState('All posts');
  const [search, setSearch] = useState('');
  const [posts, setPosts] = useState(initialPosts);
  const [draft, setDraft] = useState('');
  const [following, setFollowing] = useState([]);
  const [draftCommunity, setDraftCommunity] = useState({ name: '', technologies: '', description: '' });

  const visiblePosts = useMemo(() => posts.filter((post) => {
    const matchesTopic = activeTopic === 'All posts' || post.topic === activeTopic;
    const searchText = `${post.title} ${post.body} ${post.author} ${post.tags.join(' ')}`.toLowerCase();
    return matchesTopic && searchText.includes(search.toLowerCase());
  }), [activeTopic, posts, search]);

  const togglePostValue = (postId, key) => {
    setPosts((current) => current.map((post) => {
      if (post.id !== postId) return post;
      const nextValue = !post[key];
      return { ...post, [key]: nextValue, ...(key === 'liked' ? { likes: post.likes + (nextValue ? 1 : -1) } : {}) };
    }));
  };

  const publishPost = (event) => {
    event.preventDefault();
    if (!draft.trim()) return;
    setPosts((current) => [{ id: Date.now(), author: 'You', initials: 'YO', role: 'Community member', time: 'Just now', topic: 'Show & tell', title: 'A fresh note from the community', body: draft.trim(), tags: ['New post'], likes: 0, comments: 0, color: 'orange', liked: false, saved: false }, ...current]);
    setDraft('');
  };

  const createCommunity = (event) => {
    event.preventDefault();
    const nextCommunity = { name: draftCommunity.name.trim(), technologies: draftCommunity.technologies.split(',').map((technology) => technology.trim()).filter(Boolean), description: draftCommunity.description.trim() };
    setLocalCommunity(nextCommunity);
    setCommunity(nextCommunity);
    setDraftCommunity({ name: '', technologies: '', description: '' });
    setCreateOpen(false);
  };

  const toggleFollow = (name) => setFollowing((current) => current.includes(name) ? current.filter((item) => item !== name) : [...current, name]);

  return (
    <div className="app-page community-page">
      {community && <Sidebar />}
      <div className={`app-content ${community ? '' : 'community-precreate'}`}>
        <Navbar pageTitle={community ? 'Community' : ''} />
        <main className="community-main">
          {!community ? <section className="community-empty-state"><div className="empty-orbit"><Sparkles size={22} /></div><span className="community-kicker">Your people, in one place</span><h1>Create your community</h1><p>Start a focused space where curious builders can meet, learn out loud, and ship useful things together.</p><button className="community-primary" type="button" onClick={() => setCreateOpen(true)}>Create a community <Plus size={16} /></button></section> : <>
            <section className="community-welcome"><div><span className="community-kicker">{community.name} / community hub</span><h1>Good ideas travel<br /><em>faster together.</em></h1><p>{community.description}</p><div className="welcome-meta"><span><UsersRound size={15} /> 128 builders</span><span><TrendingUp size={15} /> 12 day streak</span><span><CalendarDays size={15} /> Next meetup Sunday</span></div></div><div className="welcome-art"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><span>08<br /><small>online now</small></span></div></section>
            <section className="community-toolbar"><div className="topic-tabs">{topics.map((topic) => <button className={activeTopic === topic ? 'is-active' : ''} key={topic} type="button" onClick={() => setActiveTopic(topic)}>{topic}</button>)}</div><label className="community-search"><Search size={16} /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search discussions" aria-label="Search discussions" /></label></section>
            <div className="community-grid">
              <section className="community-feed"><form className="post-composer" onSubmit={publishPost}><div className="composer-avatar">YO</div><div className="composer-body"><textarea value={draft} onChange={(event) => setDraft(event.target.value)} placeholder="Share a win, ask a question, or start a conversation..." aria-label="Create a community post" rows="2" /><div className="composer-footer"><span>Be generous with context.</span><button type="submit"><Send size={15} /> Publish</button></div></div></form>{visiblePosts.length ? visiblePosts.map((post) => <article className="community-post" key={post.id}><div className={`post-avatar ${post.color}`}>{post.initials}</div><div className="post-content"><div className="post-heading"><div><strong>{post.author}</strong><span>{post.role} · {post.time}</span></div><button className="icon-button" type="button" aria-label={`More options for ${post.author}`}><MoreHorizontal size={18} /></button></div><span className="post-topic">{post.topic}</span><h2>{post.title}</h2><p>{post.body}</p><div className="post-tags">{post.tags.map((tag) => <span key={tag}>#{tag}</span>)}</div><div className="post-actions"><button className={post.liked ? 'selected' : ''} type="button" onClick={() => togglePostValue(post.id, 'liked')}><Heart size={16} fill={post.liked ? 'currentColor' : 'none'} /> {post.likes}</button><button type="button"><MessageCircle size={16} /> {post.comments}</button><button className={post.saved ? 'selected' : ''} type="button" onClick={() => togglePostValue(post.id, 'saved')}><Bookmark size={16} fill={post.saved ? 'currentColor' : 'none'} /> {post.saved ? 'Saved' : 'Save'}</button></div></div></article>) : <div className="no-results"><Search size={20} /><strong>No conversations found</strong><span>Try another topic or search term.</span></div>}</section>
              <aside className="community-aside"><section className="aside-card next-event"><div className="aside-heading"><span>Coming up</span><CalendarDays size={16} /></div><div className="event-date"><strong>24</strong><span>JUN<br /><small>SUN</small></span></div><h3>Build together: API design</h3><p>60 min · Live room · 14 going</p><button type="button" className="event-button">Reserve a seat <Plus size={15} /></button></section><section className="aside-card"><div className="aside-heading"><span>People to meet</span><button type="button" className="text-button">View all</button></div><div className="people-list">{people.map((person) => <div className="person-row" key={person.name}><div className={`post-avatar small ${person.color}`}>{person.initials}</div><div><strong>{person.name}</strong><span>{person.detail}</span></div><button className={following.includes(person.name) ? 'following' : ''} type="button" onClick={() => toggleFollow(person.name)}>{following.includes(person.name) ? 'Following' : 'Follow'}</button></div>)}</div></section><section className="aside-card trending-card"><div className="aside-heading"><span>Trending this week</span><TrendingUp size={16} /></div><ol><li><span>#buildinpublic</span><small>84 conversations</small></li><li><span>#firstjob</span><small>51 conversations</small></li><li><span>#opensource</span><small>38 conversations</small></li></ol></section><section className="aside-card achievement-card"><div className="achievement-icon"><Award size={19} /></div><div><span className="achievement-label">Community win</span><h3>100 builders shipped</h3><p>Our members launched 24 projects this month.</p></div><div className="achievement-progress"><i><b /></i><span>82% to the next milestone</span></div></section></aside>
            </div>
          </>}
        </main>
      </div>
      {createOpen && <div className="assessment-overlay" role="dialog" aria-modal="true" aria-labelledby="create-community-title"><div className="assessment-modal create-modal"><button className="close-assessment" type="button" onClick={() => setCreateOpen(false)} aria-label="Close create community form"><X size={18} /></button><span className="panel-eyebrow">Community setup / 01</span><h2 id="create-community-title">Create your community</h2><p className="modal-subtitle">Tell future members what you are building and who they will build it with.</p><form className="create-community-form" onSubmit={createCommunity}><label>Community name<input required value={draftCommunity.name} onChange={(event) => setDraftCommunity({ ...draftCommunity, name: event.target.value })} placeholder="e.g. Campus Builders" /></label><label>Technologies used<input required value={draftCommunity.technologies} onChange={(event) => setDraftCommunity({ ...draftCommunity, technologies: event.target.value })} placeholder="React, Python, Firebase" /><small>Separate technologies with commas.</small></label><label>Community description<textarea required rows="4" value={draftCommunity.description} onChange={(event) => setDraftCommunity({ ...draftCommunity, description: event.target.value })} placeholder="What will members learn and build together?" /></label><button className="approve-button" type="submit"><Check size={16} /> Publish community</button></form></div></div>}
    </div>
  );
}
