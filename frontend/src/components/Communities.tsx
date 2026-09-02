import { useState } from 'react';

type Category = 'All' | 'Projects' | 'Skills' | 'Research' | 'Startup';
type CollegeTier = 'All Tiers' | 'IIT' | 'Tier 2' | 'Tier 3';

interface Community {
  id: number;
  name: string;
  description: string;
  category: Exclude<Category, 'All'>;
  members: number;
  maxMembers: number;
  college: string;
  tier: Exclude<CollegeTier, 'All Tiers'>;
  tags: string[];
  avatar: string;
  lead: string;
  featured?: boolean;
}

const communities: Community[] = [
  {
    id: 1,
    name: 'ML Explorers',
    description: 'Building a real-world crop disease detection model using satellite imagery. Weekly paper readings + coding sessions.',
    category: 'Research',
    members: 8,
    maxMembers: 10,
    college: 'NIT Warangal',
    tier: 'Tier 2',
    tags: ['PyTorch', 'Computer Vision', 'Agriculture'],
    avatar: '🧠',
    lead: 'Arjun Mehta',
    featured: true,
  },
  {
    id: 2,
    name: 'Zero to SaaS',
    description: 'First-time founders learning to ship fast. Currently building a B2B invoicing tool for small businesses.',
    category: 'Startup',
    members: 6,
    maxMembers: 10,
    college: 'BITS Pilani',
    tier: 'Tier 2',
    tags: ['React', 'Stripe', 'Growth'],
    avatar: '🚀',
    lead: 'Priya Sharma',
    featured: true,
  },
  {
    id: 3,
    name: 'DSA War Room',
    description: 'Cracking placement season together. Daily LeetCode targets, mock interviews, and mental health check-ins.',
    category: 'Skills',
    members: 10,
    maxMembers: 10,
    college: 'VIT Vellore',
    tier: 'Tier 2',
    tags: ['LeetCode', 'System Design', 'Placement'],
    avatar: '⚔️',
    lead: 'Rohit Nair',
  },
  {
    id: 4,
    name: 'Open Web Guild',
    description: 'Contributing to OSS projects as a team. Currently working on a VS Code extension and a React component library.',
    category: 'Projects',
    members: 7,
    maxMembers: 10,
    college: 'IIT Bombay',
    tier: 'IIT',
    tags: ['TypeScript', 'Open Source', 'Dev Tools'],
    avatar: '🌐',
    lead: 'Sneha Iyer',
    featured: true,
  },
  {
    id: 5,
    name: 'Blockchain Builders',
    description: 'Exploring DeFi protocols and building on Solana. No hype — just deep dives into actual technical challenges.',
    category: 'Research',
    members: 5,
    maxMembers: 10,
    college: 'IIT Delhi',
    tier: 'IIT',
    tags: ['Solana', 'Rust', 'DeFi'],
    avatar: '⛓️',
    lead: 'Karan Verma',
  },
  {
    id: 6,
    name: 'Design Systems Lab',
    description: 'Learning UI/UX through doing. We\'re redesigning real apps used by college students — from UPI apps to LMS.',
    category: 'Skills',
    members: 9,
    maxMembers: 10,
    college: 'Manipal Institute',
    tier: 'Tier 2',
    tags: ['Figma', 'Design Tokens', 'Accessibility'],
    avatar: '🎨',
    lead: 'Anika Rao',
  },
  {
    id: 7,
    name: 'Robotics Crew',
    description: 'Building an autonomous bot for Smart India Hackathon 2025. Embedded systems + ROS + computer vision fusion.',
    category: 'Projects',
    members: 10,
    maxMembers: 10,
    college: 'JNTU Hyderabad',
    tier: 'Tier 3',
    tags: ['ROS', 'Arduino', 'Python'],
    avatar: '🤖',
    lead: 'Vijay Kumar',
  },
  {
    id: 8,
    name: 'FinTech for Bharat',
    description: 'Researching and prototyping financial products for underserved rural communities in India.',
    category: 'Startup',
    members: 4,
    maxMembers: 10,
    college: 'IIT Madras',
    tier: 'IIT',
    tags: ['Product', 'UPI', 'Rural India'],
    avatar: '💰',
    lead: 'Divya Pillai',
  },
  {
    id: 9,
    name: 'Content Creators Hub',
    description: 'Tech content creators helping each other grow. Peer reviews, video editing tips, and collab on YouTube/LinkedIn.',
    category: 'Skills',
    members: 3,
    maxMembers: 10,
    college: 'Amity University',
    tier: 'Tier 3',
    tags: ['YouTube', 'LinkedIn', 'Writing'],
    avatar: '📹',
    lead: 'Meera Singh',
  },
];

const categoryFilters: Category[] = ['All', 'Projects', 'Skills', 'Research', 'Startup'];
const tierFilters: CollegeTier[] = ['All Tiers', 'IIT', 'Tier 2', 'Tier 3'];

const categoryColors: Record<string, { bg: string; text: string }> = {
  Projects: { bg: 'rgba(124,58,237,0.15)', text: '#9D5CF0' },
  Skills: { bg: 'rgba(16,185,129,0.15)', text: '#10B981' },
  Research: { bg: 'rgba(249,115,22,0.15)', text: '#F97316' },
  Startup: { bg: 'rgba(239,68,68,0.12)', text: '#F87171' },
};

const tierBadge: Record<string, { bg: string; text: string }> = {
  IIT: { bg: 'rgba(249,115,22,0.15)', text: '#FB923C' },
  'Tier 2': { bg: 'rgba(124,58,237,0.12)', text: '#A78BFA' },
  'Tier 3': { bg: 'rgba(16,185,129,0.12)', text: '#34D399' },
};

function MemberBar({ count, max }: { count: number; max: number }) {
  const pct = (count / max) * 100;
  const isFull = count >= max;
  const isAlmost = count >= max - 2;

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-xs text-[#8B8DA8]">
          <span className={`font-semibold ${isFull ? 'text-[#F87171]' : isAlmost ? 'text-[#F97316]' : 'text-[#F1F0FF]'}`}>
            {count}
          </span>
          /{max} members
        </span>
        {isFull && (
          <span className="badge px-2 py-0.5 rounded-full text-[10px] bg-[rgba(239,68,68,0.12)] text-[#F87171]">
            Full
          </span>
        )}
        {!isFull && isAlmost && (
          <span className="badge px-2 py-0.5 rounded-full text-[10px] bg-[rgba(249,115,22,0.12)] text-[#F97316]">
            {max - count} spots left
          </span>
        )}
      </div>
      <div className="h-1.5 rounded-full bg-[#1A1D2E] overflow-hidden">
        <div
          className="h-full rounded-full member-fill"
          style={{
            width: `${pct}%`,
            background: isFull
              ? '#F87171'
              : isAlmost
              ? 'linear-gradient(90deg, #7C3AED, #F97316)'
              : 'linear-gradient(90deg, #7C3AED, #9D5CF0)',
          }}
        />
      </div>
    </div>
  );
}

function CommunityCard({ community }: { community: Community }) {
  const isFull = community.members >= community.maxMembers;
  const cat = categoryColors[community.category];
  const tier = tierBadge[community.tier];

  return (
    <div
      className={`relative flex flex-col rounded-2xl border bg-[#0F1221] p-5 hover-lift overflow-hidden ${
        community.featured
          ? 'border-[rgba(124,58,237,0.4)]'
          : 'border-[rgba(124,58,237,0.12)]'
      }`}
    >
      {community.featured && (
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent" />
      )}

      {/* Header */}
      <div className="flex items-start gap-3 mb-3">
        <div className="w-11 h-11 rounded-xl bg-[#151829] flex items-center justify-center text-2xl flex-shrink-0">
          {community.avatar}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-0.5">
            <h3
              style={{ fontFamily: 'var(--font-display)' }}
              className="font-bold text-[#F1F0FF] text-base leading-tight"
            >
              {community.name}
            </h3>
            {community.featured && (
              <span className="badge px-2 py-0.5 rounded-full text-[9px] bg-[rgba(124,58,237,0.2)] text-[#9D5CF0]">
                ✦ Featured
              </span>
            )}
          </div>
          <div className="flex items-center gap-1.5 flex-wrap">
            <span
              className="badge px-2 py-0.5 rounded-full text-[10px]"
              style={{ background: cat.bg, color: cat.text }}
            >
              {community.category}
            </span>
            <span
              className="badge px-2 py-0.5 rounded-full text-[10px]"
              style={{ background: tier.bg, color: tier.text }}
            >
              {community.tier}
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-[#8B8DA8] leading-relaxed mb-3 flex-1">{community.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-1">
        {community.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] px-2 py-0.5 rounded-md bg-[#1A1D2E] text-[#8B8DA8] border border-[rgba(124,58,237,0.1)]"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Member bar */}
      <MemberBar count={community.members} max={community.maxMembers} />

      {/* Footer */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-[rgba(124,58,237,0.1)]">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-[#7C3AED] flex items-center justify-center text-[10px] text-white font-bold">
            {community.lead[0]}
          </div>
          <span className="text-xs text-[#8B8DA8]">{community.lead}</span>
          <span className="text-xs text-[#2A2D45]">· {community.college}</span>
        </div>
        <button
          className={`text-xs font-semibold px-4 py-1.5 rounded-lg ${
            isFull
              ? 'bg-[#1A1D2E] text-[#8B8DA8] hover:bg-[#2A2D45]'
              : 'bg-[#7C3AED] hover:bg-[#9D5CF0] text-white'
          }`}
        >
          {isFull ? 'Waitlist' : 'Request Join'}
        </button>
      </div>
    </div>
  );
}

export default function Communities() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [activeTier, setActiveTier] = useState<CollegeTier>('All Tiers');
  const [search, setSearch] = useState('');

  const filtered = communities.filter((c) => {
    const matchCat = activeCategory === 'All' || c.category === activeCategory;
    const matchTier = activeTier === 'All Tiers' || c.tier === activeTier;
    const matchSearch =
      search === '' ||
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase()) ||
      c.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchTier && matchSearch;
  });

  const openSpots = filtered.filter((c) => c.members < c.maxMembers).length;

  return (
    <section id="communities" className="py-24 px-4" style={{ background: '#080B14' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <span className="badge inline-block px-3 py-1 rounded-full border border-[rgba(124,58,237,0.35)] bg-[rgba(124,58,237,0.08)] text-[#9D5CF0] mb-4">
              Browse Communities
            </span>
            <h2
              style={{ fontFamily: 'var(--font-display)' }}
              className="text-4xl sm:text-5xl font-extrabold text-[#F1F0FF]"
            >
              Find your{' '}
              <span style={{ color: '#F97316' }}>people</span>
            </h2>
          </div>
          <div className="text-sm text-[#8B8DA8]">
            <span className="text-[#10B981] font-semibold">{openSpots}</span> communities with open spots
          </div>
        </div>

        {/* Filters row */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8B8DA8]"
              width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search by name, skill, or topic..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0F1221] border border-[rgba(124,58,237,0.18)] text-[#F1F0FF] text-sm placeholder-[#2A2D45] focus:outline-none focus:border-[rgba(124,58,237,0.5)]"
            />
          </div>

          {/* Category pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {categoryFilters.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-[#7C3AED] text-white'
                    : 'bg-[#0F1221] border border-[rgba(124,58,237,0.18)] text-[#8B8DA8] hover:text-[#F1F0FF] hover:border-[rgba(124,58,237,0.4)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Tier filter */}
          <div className="flex items-center gap-2 flex-wrap">
            {tierFilters.map((tier) => (
              <button
                key={tier}
                onClick={() => setActiveTier(tier)}
                className={`px-3 py-2 rounded-lg text-xs font-semibold badge transition-all ${
                  activeTier === tier
                    ? 'bg-[rgba(249,115,22,0.2)] text-[#F97316] border border-[rgba(249,115,22,0.4)]'
                    : 'bg-[#0F1221] border border-[rgba(124,58,237,0.12)] text-[#8B8DA8] hover:border-[rgba(249,115,22,0.3)]'
                }`}
              >
                {tier}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((c) => (
              <CommunityCard key={c.id} community={c} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-[#2A2D45]">
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-lg font-semibold text-[#8B8DA8]">No communities match your filters</p>
            <p className="text-sm mt-1">Try broadening your search or be the first to create one!</p>
          </div>
        )}

        {/* Load more / create CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-6 py-3 rounded-xl border border-[rgba(124,58,237,0.25)] text-[#8B8DA8] hover:text-[#F1F0FF] hover:border-[rgba(124,58,237,0.5)] text-sm font-medium">
            Load More Communities
          </button>
          <span className="text-[#2A2D45] text-sm">or</span>
          <button
            className="px-6 py-3 rounded-xl text-sm font-semibold text-white"
            style={{ background: 'linear-gradient(135deg, #7C3AED, #F97316)' }}
          >
            + Create Your Community
          </button>
        </div>
      </div>
    </section>
  );
}
