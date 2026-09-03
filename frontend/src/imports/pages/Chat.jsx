import AppLayout from '../components/AppLayout';
import { useState, useRef, useEffect } from 'react';
import { useAuthStore } from '../store/useAuthStore';

const channels = [
  { id: 1, name: 'ML Explorers', avatar: '🧠', type: 'community', unread: 3, last: 'Sneha: The baseline results look great!' },
  { id: 2, name: 'Zero to SaaS', avatar: '🚀', type: 'community', unread: 0, last: 'Priya: MVP is live! 🎉' },
  { id: 3, name: 'Sneha Iyer', avatar: 'SI', type: 'dm', unread: 1, last: 'Are you free for a code review?' },
  { id: 4, name: 'Rohit Nair', avatar: 'RN', type: 'dm', unread: 0, last: 'Thanks for the help yesterday' },
  { id: 5, name: 'Open Web Guild', avatar: '🌐', type: 'community', unread: 0, last: 'Karan: PR merged ✓' },
];

const initialMessages = [
  { id: 1, sender: 'Sneha Iyer', avatar: 'SI', text: 'Hey team! The baseline ResNet model is done. F1 score: 0.81 on validation set.', time: '10:12 AM', mine: false },
  { id: 2, sender: 'Arjun Mehta', avatar: 'AM', text: 'That\'s solid! We need to hit 0.85 to proceed. What\'s the bottleneck?', time: '10:14 AM', mine: true },
  { id: 3, sender: 'Rohit Nair', avatar: 'RN', text: 'Probably the imbalanced dataset. Some crop classes have very few samples.', time: '10:17 AM', mine: false },
  { id: 4, sender: 'Sneha Iyer', avatar: 'SI', text: 'Agreed. I\'ll apply SMOTE and mosaic augmentation. Should improve by end of day.', time: '10:20 AM', mine: false },
  { id: 5, sender: 'Arjun Mehta', avatar: 'AM', text: 'Perfect! Let\'s sync tonight at 9 PM for the sprint retrospective.', time: '10:22 AM', mine: true },
  { id: 6, sender: 'Priya Sharma', avatar: 'PS', text: 'I\'ll also bring the EfficientNet comparison results. Should be interesting.', time: '10:25 AM', mine: false },
];

export default function Chat() {
  const user = useAuthStore((s) => s.user);
  const [activeChannel, setActiveChannel] = useState(channels[0]);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const bottomRef = useRef(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { id: Date.now(), sender: user?.name ?? 'You', avatar: (user?.name ?? 'Y')[0] + ((user?.name ?? 'Y').split(' ')[1]?.[0] ?? ''), text: input.trim(), time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), mine: true }]);
    setInput('');
  };

  return (
    <AppLayout>
      <div className="chat-layout" style={{ display: 'flex', height: 'calc(100vh - 0px)', overflow: 'hidden' }}>
        {/* Channel list */}
        <div className="chat-channel-list" style={{ width: 260, borderRight: '1px solid var(--border)', background: 'var(--surface)', display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
          <div style={{ padding: '16px 16px 8px', borderBottom: '1px solid var(--border)' }}>
            <h2 style={{ fontSize: 15, fontWeight: 700 }}>Messages</h2>
          </div>
          <div style={{ overflowY: 'auto', flex: 1, padding: '8px' }}>
            {['Communities', 'Direct Messages'].map((section) => {
              const items = channels.filter((c) => (section === 'Communities' ? c.type === 'community' : c.type === 'dm'));
              return (
                <div key={section} style={{ marginBottom: 12 }}>
                  <div style={{ fontSize: 10, color: 'var(--faint)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '4px 8px 6px' }}>{section}</div>
                  {items.map((ch) => (
                    <button key={ch.id} onClick={() => setActiveChannel(ch)} style={{ width: '100%', display: 'flex', gap: 10, padding: '9px 10px', borderRadius: 9, background: activeChannel.id === ch.id ? 'rgba(124,58,237,0.15)' : 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', transition: 'background 0.15s', alignItems: 'center' }}>
                      <div style={{ width: 34, height: 34, borderRadius: 9, background: 'var(--surface-2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: ch.type === 'community' ? 16 : 11, fontWeight: 700, color: 'var(--primary-light)', flexShrink: 0, border: '1px solid var(--border)', position: 'relative' }}>
                        {ch.avatar}
                        {ch.unread > 0 && <div style={{ position: 'absolute', top: -4, right: -4, width: 16, height: 16, borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, color: '#fff', fontWeight: 700, border: '2px solid var(--surface)' }}>{ch.unread}</div>}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 12, fontWeight: activeChannel.id === ch.id ? 700 : 500, color: 'var(--text)', marginBottom: 1 }}>{ch.name}</div>
                        <div style={{ fontSize: 10, color: 'var(--faint)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{ch.last}</div>
                      </div>
                    </button>
                  ))}
                </div>
              );
            })}
          </div>
        </div>

        {/* Chat area */}
        <div className="chat-main" style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
          {/* Header */}
          <div style={{ padding: '12px 20px', borderBottom: '1px solid var(--border)', background: 'var(--surface)', display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--surface-2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>{activeChannel.avatar}</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700 }}>{activeChannel.name}</div>
              <div style={{ fontSize: 10, color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>{activeChannel.type === 'community' ? '8 members · 3 online' : 'Direct message'}</div>
            </div>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 14 }}>
            {messages.map((m) => (
              <div key={m.id} style={{ display: 'flex', gap: 10, flexDirection: m.mine ? 'row-reverse' : 'row' }}>
                {!m.mine && (
                  <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700, color: '#fff', flexShrink: 0, alignSelf: 'flex-end' }}>{m.avatar}</div>
                )}
                <div style={{ maxWidth: '65%' }}>
                  {!m.mine && <div style={{ fontSize: 10, color: 'var(--muted)', marginBottom: 3, fontWeight: 600 }}>{m.sender}</div>}
                  <div style={{ padding: '9px 13px', borderRadius: m.mine ? '14px 4px 14px 14px' : '4px 14px 14px 14px', background: m.mine ? 'linear-gradient(135deg,var(--primary),var(--primary-light))' : 'var(--surface)', border: m.mine ? 'none' : '1px solid var(--border)', fontSize: 13, color: 'var(--text)', lineHeight: 1.55 }}>
                    {m.text}
                  </div>
                  <div style={{ fontSize: 9, color: 'var(--faint)', marginTop: 3, textAlign: m.mine ? 'right' : 'left', fontFamily: 'var(--font-mono)' }}>{m.time}</div>
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div style={{ padding: '12px 20px', borderTop: '1px solid var(--border)', background: 'var(--surface)' }}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <input
                className="field"
                placeholder={`Message ${activeChannel.name}…`}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), sendMessage())}
                style={{ flex: 1 }}
              />
              <button className="btn-primary" style={{ padding: '10px 16px', fontSize: 13, flexShrink: 0 }} onClick={sendMessage}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
