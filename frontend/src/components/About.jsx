import React from 'react';

const interests = [
  'Full Stack Web Development',
  'Cloud Computing',
  'Database Management',
  'UI/UX Design',
  'Discord Bot Development',
  'Modern Web Technologies',
];

export default function About() {
  return (
    <section
      id="about"
      style={{ padding: '100px 24px', position: 'relative' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '60px' }}>
          <div className="section-tag">01. About</div>
          <h2 className="section-title">
            Building with curiosity,<br />
            shipping with <span className="accent">purpose</span>.
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'start',
          }}
        >
          {/* Left column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <p
              style={{
                fontFamily: 'DM Mono, monospace',
                fontSize: '14px',
                color: '#8899aa',
                lineHeight: 1.9,
              }}
            >
              Started with curiosity about how websites and apps work, then
              gradually moved into building full stack projects, Discord bots,
              and modern web applications.
            </p>
            <p
              style={{
                fontFamily: 'DM Mono, monospace',
                fontSize: '14px',
                color: '#8899aa',
                lineHeight: 1.9,
              }}
            >
              Continuously learning new technologies, improving problem-solving
              skills, and gaining hands-on experience through real-world
              projects and deployments.
            </p>
            <p
              style={{
                fontFamily: 'DM Mono, monospace',
                fontSize: '14px',
                color: '#8899aa',
                lineHeight: 1.9,
              }}
            >
              Aspiring to become a skilled Full Stack Developer and Software
              Engineer — building impactful real-world applications and
              contributing to innovative tech projects.
            </p>

            {/* Stats row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '16px',
                marginTop: '16px',
              }}
            >
              {[
                { value: '5th', label: 'Semester' },
                { value: '5+', label: 'Projects' },
                { value: '∞', label: 'Learning' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    padding: '20px 16px',
                    border: '1px solid #1e2d44',
                    borderRadius: '10px',
                    textAlign: 'center',
                    background: '#0d1220',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#a8ff3e';
                    e.currentTarget.style.background = 'rgba(168,255,62,0.04)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#1e2d44';
                    e.currentTarget.style.background = '#0d1220';
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'Syne, sans-serif',
                      fontSize: '28px',
                      fontWeight: 800,
                      color: '#a8ff3e',
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontFamily: 'DM Mono, monospace',
                      fontSize: '11px',
                      color: '#4a5a6e',
                      marginTop: '6px',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {/* Education card */}
            <div
              style={{
                padding: '24px',
                border: '1px solid #1e2d44',
                borderRadius: '12px',
                background: '#0d1220',
              }}
            >
              <div
                style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '11px',
                  color: '#a8ff3e',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '12px',
                }}
              >
                Currently studying
              </div>
              <div
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontSize: '17px',
                  fontWeight: 700,
                  color: '#e8edf5',
                  marginBottom: '6px',
                }}
              >
                Diploma in Computer Science
              </div>
              <div
                style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '13px',
                  color: '#8899aa',
                }}
              >
                Parul University · 5th Semester
              </div>
            </div>

            {/* Interests */}
            <div>
              <div
                style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '11px',
                  color: '#4a5a6e',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                }}
              >
                Technical Interests
              </div>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                }}
              >
                {interests.map((interest) => (
                  <span
                    key={interest}
                    style={{
                      padding: '6px 12px',
                      border: '1px solid #1e2d44',
                      borderRadius: '100px',
                      fontFamily: 'DM Mono, monospace',
                      fontSize: '12px',
                      color: '#8899aa',
                      transition: 'all 0.2s ease',
                      cursor: 'default',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#a8ff3e';
                      e.currentTarget.style.color = '#a8ff3e';
                      e.currentTarget.style.background = 'rgba(168,255,62,0.06)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#1e2d44';
                      e.currentTarget.style.color = '#8899aa';
                      e.currentTarget.style.background = 'transparent';
                    }}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about > div > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
