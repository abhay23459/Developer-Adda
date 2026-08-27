import { useState } from 'react';
import { ArrowRight, Check, CheckCircle2, Clock3, Crown, FolderGit2, MessageSquare, Send, ShieldCheck, UserPlus, X } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import SkillBadge from '../components/SkillBadge';
import { useAuthStore } from '../store/useAuthStore';
import './Community.css';
import './CommunityCreate.css';

const members = [
  { name: 'Alex Rivera', role: 'Leader', skills: ['React', 'Node.js'], color: 'coral' },
  { name: 'Sarah Chen', role: 'Member', skills: ['Python', 'Django'], color: 'sage' },
  { name: 'Rahul Sharma', role: 'Member', skills: ['React Native', 'Firebase'], color: 'gold' },
  { name: 'Priya Patel', role: 'Member', skills: ['MongoDB', 'AWS'], color: 'blue' },
  { name: 'Vikram Singh', role: 'Member', skills: ['C++', 'Algorithms'], color: 'lavender' },
  { name: 'Anita Desai', role: 'Member', skills: ['Figma', 'Tailwind'], color: 'peach' },
  { name: 'Karan Kumar', role: 'Member', skills: ['Java', 'Spring'], color: 'mint' },
  { name: 'Neha Gupta', role: 'Member', skills: ['Docker', 'Kubernetes'], color: 'rose' },
];

const initialMessages = [
  { author: 'Sarah Chen', text: 'I pushed the first API draft. Can someone take a look?', time: '10:42 AM', color: 'sage' },
  { author: 'Alex Rivera', text: 'On it. I will review the auth flow before lunch.', time: '10:45 AM', color: 'coral' },
  { author: 'Rahul Sharma', text: 'The mobile screens are ready for a quick sync.', time: '10:51 AM', color: 'gold' },
];

export default function Community() {
  const [searchParams] = useSearchParams();
  const user = useAuthStore((state) => state.user);
  const setCommunity = useAuthStore((state) => state.setCommunity);
  const [messages, setMessages] = useState(initialMessages);
  const [message, setMessage] = useState('');
  const [assessmentOpen, setAssessmentOpen] = useState(false);
  const [applicantStatus, setApplicantStatus] = useState('pending');
  const [createOpen, setCreateOpen] = useState(searchParams.get('create') === '1');
  const [community, setLocalCommunity] = useState(user?.community ? { name: user.community, technologies: user.communityTechnologies || [], description: user.communityDescription || 'A focused group for builders who want to learn in public, pair on useful projects, and ship together.' } : null);
  const [draftCommunity, setDraftCommunity] = useState({ name: '', technologies: '', description: '' });

  const sendMessage = (event) => {
    event.preventDefault();
    if (!message.trim()) return;
    setMessages([...messages, { author: 'You', text: message.trim(), time: 'Just now', color: 'coral' }]);
    setMessage('');
  };

  const createCommunity = (event) => {
    event.preventDefault();
    const nextCommunity = { name: draftCommunity.name.trim(), technologies: draftCommunity.technologies.split(',').map((technology) => technology.trim()).filter(Boolean), description: draftCommunity.description.trim() };
    setLocalCommunity(nextCommunity);
    setCommunity(nextCommunity);
    setDraftCommunity({ name: '', technologies: '', description: '' });
    setCreateOpen(false);
  };

  return (
    <div className="app-page community-page">
      {community && <Sidebar />}
      <div className={`app-content ${community ? '' : 'community-precreate'}`}><Navbar />
        <main className="community-main">
          {!community && <section className="community-empty-state"><span className="community-kicker">Your community space</span><h1>Create your community</h1><p>Start a focused space where up to 10 members can meet, take an entry test, chat, and build projects together.</p><button className="create-community-button" type="button" onClick={() => setCreateOpen(true)}>Open your table <ArrowRight size={15} /></button></section>}
          {community && <>
            <section className="community-hero"><div><span className="community-kicker">Your table / live workspace</span><h1>{community.name}</h1><p>{community.description}</p><div className="community-tech-list">{community.technologies.map((technology) => <SkillBadge key={technology} skill={technology} level={null} />)}</div></div><div className="community-hero-actions"><button className="create-community-button" type="button" onClick={() => setCreateOpen(true)}>New community <ArrowRight size={15} /></button><span className="last-sync"><i /> Synced just now</span></div></section>
            <section className="community-pulse"><div><span>Seats filled</span><strong>08 <small>/ 10</small></strong><i className="pulse-bar"><b /></i></div><div><span>Active today</span><strong>06</strong><em>members online</em></div><div><span>Build streak</span><strong>12 <small>days</small></strong><em className="warm">Keep it going</em></div><div className="pulse-note"><span>Next table check-in</span><strong>Today, 6:30 PM</strong><em>Weekly build review</em></div></section>
            <section className="community-layout">
              <div className="members-board"><div className="board-heading"><div><span className="panel-eyebrow">01 / The circle</span><h2>People at the table</h2></div><span className="online-count"><i /> 6 online</span></div><div className="member-list">{members.map((member) => <div className="member-row" key={member.name}><div className={`member-avatar ${member.color}`}>{member.name.split(' ').map((part) => part[0]).join('')}</div><div className="member-info"><strong>{member.name}{member.role === 'Leader' && <Crown size={13} />}</strong><span>{member.role}</span></div><div className="member-skills">{member.skills.map((skill) => <SkillBadge key={skill} skill={skill} />)}</div><button className="member-message" type="button" title={`Message ${member.name}`}><MessageSquare size={15} /></button></div>)}</div><div className="open-slot"><UserPlus size={16} /><span>2 spaces left for the right builders</span><ArrowRight size={15} /></div></div>
              <aside className="activity-rail"><div className="board-heading"><div><span className="panel-eyebrow">02 / Talk it out</span><h2>Live activity</h2></div><MessageSquare className="panel-icon" size={19} /></div><div className="message-list">{messages.map((item, index) => <div className="message-row" key={`${item.author}-${index}`}><div className={`message-avatar ${item.color}`}>{item.author === 'You' ? 'YO' : item.author.split(' ').map((part) => part[0]).join('')}</div><div><div className="message-meta"><strong>{item.author}</strong><time>{item.time}</time></div><p>{item.text}</p></div></div>)}</div><form className="chat-form" onSubmit={sendMessage}><input value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Message your circle..." aria-label="Message your circle" /><button type="submit" title="Send message"><Send size={16} /></button></form></aside>
            </section>
            <section className="community-bottom"><div className="project-deck"><div className="board-heading"><div><span className="panel-eyebrow">03 / Make together</span><h2>Projects in motion</h2></div><Link className="panel-link" to="/projects">View all <ArrowRight size={15} /></Link></div><div className="project-cards"><article><div className="project-symbol"><FolderGit2 size={18} /></div><div><strong>Campus Connect</strong><span>Community discovery platform</span><i><b style={{ width: '72%' }} /></i><small>72% complete · 3 contributors</small></div><em>Active</em></article><article><div className="project-symbol amber"><FolderGit2 size={18} /></div><div><strong>Open Source Starter</strong><span>A friendly first contribution guide</span><i><b style={{ width: '38%' }} /></i><small>38% complete · 5 contributors</small></div><em className="planning">Planning</em></article></div></div><div className="review-card"><div className="board-heading"><div><span className="panel-eyebrow">04 / Gate the circle</span><h2>One application</h2></div><ShieldCheck className="panel-icon" size={19} /></div><p>Every new member completes a short skill and collaboration test before joining.</p>{applicantStatus === 'pending' ? <div className="applicant-row"><div className="member-avatar violet">JM</div><div><strong>Jordan Miller</strong><span>Frontend track · applied 2h ago</span></div><button className="review-button" type="button" onClick={() => setAssessmentOpen(true)}>Review <ArrowRight size={14} /></button></div> : <div className={`decision-note ${applicantStatus}`}><CheckCircle2 size={17} /> Jordan Miller {applicantStatus === 'approved' ? 'approved.' : 'application declined.'}</div>}</div></section>
          </>}
        </main>
      </div>
      {assessmentOpen && <div className="assessment-overlay" role="dialog" aria-modal="true" aria-labelledby="assessment-title"><div className="assessment-modal"><button className="close-assessment" type="button" onClick={() => setAssessmentOpen(false)} aria-label="Close assessment"><X size={18} /></button><span className="panel-eyebrow">Applicant review / 01</span><h2 id="assessment-title">Jordan's entry test</h2><p className="modal-subtitle">A leader reviews the same three prompts for every applicant before approving a new member.</p><div className="test-question"><span>01</span><p>How would you split the first version of a team project?</p><strong>Answered: Define the smallest useful feature, assign clear owners, and ship it in a short loop.</strong></div><div className="test-question"><span>02</span><p>Which part of the stack would you contribute first?</p><strong>Answered: React and accessible UI, with a willingness to pair on backend work.</strong></div><div className="test-score"><Clock3 size={15} /> Collaboration score <strong>8.6 / 10</strong></div><div className="modal-actions"><button className="decline-button" type="button" onClick={() => { setApplicantStatus('declined'); setAssessmentOpen(false); }}>Decline</button><button className="approve-button" type="button" onClick={() => { setApplicantStatus('approved'); setAssessmentOpen(false); }}><Check size={16} /> Approve member</button></div></div></div>}
      {createOpen && <div className="assessment-overlay" role="dialog" aria-modal="true" aria-labelledby="create-community-title"><div className="assessment-modal create-modal"><button className="close-assessment" type="button" onClick={() => setCreateOpen(false)} aria-label="Close create community form"><X size={18} /></button><span className="panel-eyebrow">Community setup / 01</span><h2 id="create-community-title">Create your community</h2><p className="modal-subtitle">Tell future members what you are building and who they will build it with.</p><form className="create-community-form" onSubmit={createCommunity}><label>Community name<input required value={draftCommunity.name} onChange={(event) => setDraftCommunity({ ...draftCommunity, name: event.target.value })} placeholder="e.g. Campus Builders" /></label><label>Technologies used<input required value={draftCommunity.technologies} onChange={(event) => setDraftCommunity({ ...draftCommunity, technologies: event.target.value })} placeholder="React, Python, Firebase" /><small>Separate technologies with commas.</small></label><label>Community description<textarea required rows="4" value={draftCommunity.description} onChange={(event) => setDraftCommunity({ ...draftCommunity, description: event.target.value })} placeholder="What will members learn and build together?" /></label><button className="approve-button" type="submit"><Check size={16} /> Publish community</button></form></div></div>}
    </div>
  );
}
