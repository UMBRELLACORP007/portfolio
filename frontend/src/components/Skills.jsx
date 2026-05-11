import React, { useState } from 'react';

const SKILL_CATEGORIES = [
  {
    title: 'Frontend',
    icon: '⬡',
    color: '#a8ff3e',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    icon: '⬡',
    color: '#4f8eff',
    skills: ['Node.js', 'Express.js'],
  },
  {
    title: 'Database',
    icon: '⬡',
    color: '#ff8c42',
    skills: ['MongoDB', 'MySQL'],
  },
  {
    title: 'Languages',
    icon: '⬡',
    color: '#c084fc',
    skills: ['JavaScript', 'Python', 'C', 'C++'],
  },
  {
    title: 'Tools & Platforms',
    icon: '⬡',
    color: '#34d399',
    skills: ['Git', 'GitHub', 'Railway', 'Vercel', 'VS Code', 'Cloudflare', 'Postman'],
  },
];

const SKILL_ICONS = {
  HTML: '🟧', CSS: '🟦', JavaScript: '🟨', React: '⚛️', 'Tailwind CSS': '🌊',
  'Node.js': '🟢', 'Express.js': '⚡', MongoDB: '🍃', MySQL: '🐬',
  Python: '🐍', C: '©️', 'C++': '➕', Git: '🌿', GitHub: '🐙',
  Railway: '🚂', Vercel: '▲', 'VS Code': '💙', Cloudflare: '☁️', Postman: '📮',
};

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section
      id="skills"
      style={{
        padding: '100px 24px',
        background: '#0d1220',
        position: 'relative',
      }}
    >
      {/* Top edge */}
      <div
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #1e2d44 30%, #1e2d44 70%, transparent)',
        }}
      />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ marginBottom: '60px' }}>
          <div className="section-tag">02. Skills</div>
          <h2 className="section-title">
            Tools I work <span className="accent">with</span>.
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
          }}
        >
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              style={{
                padding: '28px 24px',
                border: '1px solid #1e2d44',
                borderRadius: '14px',
                background: '#111827',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = cat.color;
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = `0 12px 32px ${cat.color}12`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#1e2d44';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Top accent line */}
              <div
                style={{
                  position: 'absolute',
                  top: 0, left: '24px', right: '24px',
                  height: '2px',
                  background: cat.color,
                  borderRadius: '0 0 4px 4px',
                }}
              />

              {/* Category title */}
              <div
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontSize: '13px',
                  fontWeight: 700,
                  color: cat.color,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '20px',
                  marginTop: '8px',
                }}
              >
                {cat.title}
              </div>

              {/* Skills list */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                {cat.skills.map((skill) => (
                  <div
                    key={skill}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '8px 10px',
                      borderRadius: '8px',
                      background: hoveredSkill === skill ? `${cat.color}10` : 'transparent',
                      border: `1px solid ${hoveredSkill === skill ? cat.color + '40' : 'transparent'}`,
                      transition: 'all 0.2s ease',
                      cursor: 'default',
                    }}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <span style={{ fontSize: '14px' }}>
                      {SKILL_ICONS[skill] || '◇'}
                    </span>
                    <span
                      style={{
                        fontFamily: 'DM Mono, monospace',
                        fontSize: '13px',
                        color: hoveredSkill === skill ? '#e8edf5' : '#8899aa',
                        transition: 'color 0.2s ease',
                      }}
                    >
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom edge */}
      <div
        style={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #1e2d44 30%, #1e2d44 70%, transparent)',
        }}
      />
    </section>
  );
}
