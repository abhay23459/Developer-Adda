import { ArrowRight, Search, Star } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './Landing.css';

const tables = [
  { category: 'DSA & Interview Prep', title: 'The DSA Grind', colleges: 'NIT Rourkela · GEC Thrissur · Thapar Patiala', description: 'Daily 6am problems, weekly mock interviews, zero tolerance for ghosting.', seats: 7 },
  { category: 'UI/UX & Product', title: 'Figma to Founders', colleges: 'MSRIT Bangalore · SRM Chennai', description: 'Weekly critique sessions and one shipped case study a month.', seats: 4 },
  { category: 'Robotics & IoT', title: 'Bare-Metal Robotics', colleges: 'IIT Mandi · NIT Jalandhar · IIIT Kota', description: 'Soldering irons, ROS, and a competition entry by March.', seats: 10 },
  { category: 'Full-Stack & Startups', title: 'Ship One SaaS', colleges: 'Chandigarh University · Bennett University', description: 'Zero to a paying customer in one semester. No side quests.', seats: 5 },
  { category: 'Machine Learning', title: 'ML From Scratch', colleges: "IIT Bhubaneswar · KIIT · Vignan's University", description: 'No shortcuts - building every model from first principles.', seats: 8 },
  { category: 'Content & Writing', title: 'Words That Work', colleges: 'Amity Lucknow · DIT Dehradun', description: 'Technical writing, newsletters, and portfolios that actually convert.', seats: 3 },
];

export default function Landing() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const categories = ['All', ...tables.map((table) => table.category)];
  const visibleTables = useMemo(() => tables.filter((table) => {
    const matchesCategory = category === 'All' || table.category === category;
    const searchable = `${table.title} ${table.colleges} ${table.category}`.toLowerCase();
    return matchesCategory && searchable.includes(query.toLowerCase());
  }), [category, query]);

  return (
    <div className="landing-page">
      <Navbar homePath="/" />

      <main>
        <section className="hero-section">
          <div className="hero-inner"><div className="hero-content"><span className="eyebrow cyan">Built for tier 2 & 3 campuses</span><h1>Ten minds. One table.<br /><span>No IIT tag required.</span></h1><p>Decad is where students outside the metro circuit find nine others who think the same way - to ship a project, crack a skill, or build something worth showing up for.</p><div className="hero-actions"><Link className="orange-button" to="/auth/register">Start a Decad <ArrowRight size={16} /></Link><a className="outline-button dark" href="#explore">Find an open table</a></div><div className="hero-stats"><b>10<small>SEATS PER TABLE</small></b><b>340+<small>COLLEGES REPRESENTED</small></b><b>1,900+<small>TABLES SEATED</small></b></div></div><div className="seat-chart"><div className="seat-ring"><strong>6/10</strong><small>seats open</small></div>{Array.from({ length: 10 }, (_, index) => <span className={`seat seat-${index + 1}`} key={index}>{index % 3 === 0 ? <Star size={11} fill="currentColor" /> : ''}</span>)}<p>click a seat to see who's building</p></div></div>
        </section>

        <section className="gap-section"><div className="section-inner"><span className="eyebrow gold">The gap</span><h2>Great ideas don't check your<br />college's ranking.</h2><p>Students at tier 2 and tier 3 colleges are just as ambitious as anyone on a metro campus - they just don't have ten driven people down the hallway to build with. Decad closes that distance.</p><div className="gap-cards"><article><strong>2,500<span>+</span></strong><p>Tier 2 & 3 engineering and arts colleges in India - most with no structured peer-project culture at all.</p></article><article><strong><span>400</span>-member</strong><p>WhatsApp groups where every project idea goes to die. Nobody ships anything when everyone's a bystander.</p></article><article><strong>10 is <span>enough</span></strong><p>Small enough that every seat matters, large enough to cover every role a real project or study track needs.</p></article></div></div></section>

        <section className="works-section" id="how-it-works"><div className="section-inner"><span className="eyebrow cyan">How it works</span><h2>Three steps to a full table.</h2><p className="section-lead">No lengthy applications. No algorithm deciding who you get to build with.</p><div className="step-cards">{[['01 / Pick', 'Pick your table', 'Choose a skill track or project idea - DSA, web dev, ML, design, robotics, content, a startup - and tag your college.'], ['02 / Seat', 'Claim a seat, or open one', "Join a Decad with empty seats, or start your own and set the topic. Either way, you're one of exactly ten."], ['03 / Build', 'Fill it, then close the door', 'Once ten are seated, the table locks. No lurkers, no 400-member group chats - just nine people who showed up.']].map(([label, title, copy]) => <article key={label}><b>{label}</b><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

        <section className="explore-section" id="explore"><div className="section-inner"><span className="eyebrow gold">Explore</span><h2>Open tables looking for their last<br />few seats.</h2><p className="section-lead">Filter by what you want to build, or search by college.</p><div className="table-controls"><label><Search size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by track, college, or Decad name..." /></label><div className="filter-row">{categories.map((item) => <button className={category === item ? 'selected' : ''} onClick={() => setCategory(item)} key={item}>{item}</button>)}</div></div><div className="table-grid">{visibleTables.map((table) => <article className="table-card" key={table.title}><span className="category-tag">{table.category}</span><h3>{table.title}</h3><code>{table.colleges}</code><p>{table.description}</p><div className="seat-dots">{Array.from({ length: 10 }, (_, index) => <i className={index < table.seats ? 'filled' : ''} key={index} />)}</div><div className="table-footer"><span>{table.seats}/10 seated{table.seats === 10 ? ' · full' : ''}</span><Link className={table.seats === 10 ? 'disabled' : ''} to={table.seats === 10 ? '#' : '/auth/register'}>{table.seats === 10 ? 'Table full' : 'Join table'}</Link></div></article>)}</div><div className="start-banner"><div><span className="eyebrow gold">Start your own</span><h3>Got an idea nobody at your<br />college is chasing yet?</h3><p>Open a table, set the topic, and watch the other nine seats fill.</p></div><Link className="orange-button" to="/auth/register">Create a Decad</Link></div></div></section>

        <section className="stories-section"><div className="section-inner"><span className="eyebrow gold">From the tables</span><h2>People who found their nine.</h2><div className="story-grid"><article>"My college had no ML club, no seniors doing research, nothing. Four weeks into our Decad we'd shipped a working crop-disease classifier."<b>Ritika S.</b><code>GEC Thrissur · Machine Learning</code></article><article>"Ten people, real deadlines, no dead weight. It felt more like a startup than a college project group."<b>Aman V.</b><code>LNCT Bhopal · Full-Stack & Startups</code></article><article>"I stopped comparing my campus to the IITs the day our robotics table filled up with people who cared as much as I did."<b>Farhan K.</b><code>NIT Jalandhar · Robotics & IoT</code></article></div></div></section>
        <section className="colleges-section" id="colleges"><div className="section-inner"><span className="eyebrow cyan">Every table welcome</span><h2>From IITs to institutes nobody's<br />heard of yet.</h2><p>When you create a Decad, you tag your own college - IIT, NIT, IIIT, state, private, all of it.<br />The table doesn't care about the rankings.</p><div className="college-list">{['IIT (BHU) Varanasi', 'IIT Dhanbad (ISM)', 'IIT Bhubaneswar', 'IIT Mandi', 'IIT Ropar', 'IIT Jodhpur', 'IIT Patna', 'NIT Warangal', 'NIT Suratkal', 'NIT Rourkela', 'NIT Durgapur', 'NIT Jalandhar', 'NIT Raipur', 'IIIT Kalyani', 'IIIT Kota', 'IIIT Una', 'IIIT Sonepat', 'VJTI Mumbai', 'Thapar Institute, Patiala', 'JIIT Noida', 'MSRIT Bangalore', 'PSG Tech, Coimbatore', 'SRM Chennai', "Vignan's University, Guntur", 'GEC Thrissur', 'Government Engineering College, Rewa', 'DIT Dehradun', 'LNCT Bhopal', 'Chandigarh University', 'Amity University, Lucknow', 'Bennett University, Greater Noida', 'KIIT Bhubaneswar', 'Manipal Institute of Technology', 'RGPV Bhopal', 'UPES Dehradun'].map((college) => <span key={college}>{college}</span>)}</div></div></section>
      </main>
      <footer className="site-footer" id="about"><div><Link className="brand" to="/"><span className="brand-mark" /><span className="brand-name">Decad</span></Link><p>Ten-person tables for students building<br />outside the metro circuit.</p></div><div><b>Platform</b><a href="#explore">Explore Decads</a><a href="#how-it-works">How it works</a><Link to="/auth/register">Create a Decad</Link></div><div><b>Community</b><a href="#colleges">Colleges</a><a href="#about">Stories</a><a href="#about">Guidelines</a></div><div><b>Company</b><a href="#about">About</a><a href="mailto:hello@decad.build">Contact</a><a href="#about">Privacy</a></div></footer>
    </div>
  );
}
