import React from 'react';

const TIMELINE = [
  {
    year: '2023 — Present',
    degree: 'Diploma in Computer Engineering',
    institution: 'Parul Polytechnic Institute',
    sub: 'Parul University, Vadodara, Gujarat',
    semester: '3rd Year · 5th Semester',
    status: 'Ongoing',
    statusColor: '#a8ff3e',
    highlights: [
      'Full Stack Web Development',
      'Data Structures & Algorithms',
      'Database Management Systems',
      'Object-Oriented Programming',
      'Computer Networks',
      'Operating Systems',
    ],
    icon: '🎓',
  },
];

export default function Education() {
  return (
    <section id="education" style={{ padding: '100px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '60px' }}>
          <div className="section-tag">05. Education</div>
          <h2 className="section-title">
            Where I'm <span className="accent">learning</span>.
          </h2>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div
            style={{
              position: 'absolute',
              top: 0, bottom: 0,
              left: '20px',
              width: '1px',
              background: 'linear-gradient(to bottom, #a8ff3e, #1e2d44)',
            }}
          />

          {TIMELINE.map((item, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                gap: '40px',
                paddingLeft: '60px',
                position: 'relative',
                marginBottom: '40px',
              }}
            >
              {/* Timeline dot */}
              <div
                style={{
                  position: 'absolute',
                  left: '12px',
                  top: '24px',
                  width: '18px',
                  height: '18px',
                  background: '#a8ff3e',
                  borderRadius: '50%',
                  border: '3px solid #080c14',
                  boxShadow: '0 0 0 3px rgba(168,255,62,0.2)',
                }}
              />

              {/* Card */}
              <div
                style={{
                  flex: 1,
                  padding: '32px',
                  border: '1px solid #1e2d44',
                  borderRadius: '16px',
                  background: '#0d1220',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#a8ff3e40';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#1e2d44';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Top row */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: '12px',
                    marginBottom: '20px',
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: 'DM Mono, monospace',
                        fontSize: '11px',
                        color: '#4a5a6e',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        marginBottom: '8px',
                      }}
                    >
                      {item.year}
                    </div>
                    <h3
                      style={{
                        fontFamily: 'Syne, sans-serif',
                        fontSize: '22px',
                        fontWeight: 800,
                        color: '#e8edf5',
                        marginBottom: '6px',
                        lineHeight: 1.2,
                      }}
                    >
                      {item.degree}
                    </h3>
                    <div
                      style={{
                        fontFamily: 'DM Mono, monospace',
                        fontSize: '14px',
                        color: '#4f8eff',
                        marginBottom: '4px',
                      }}
                    >
                      {item.institution}
                    </div>
                    <div
                      style={{
                        fontFamily: 'DM Mono, monospace',
                        fontSize: '12px',
                        color: '#4a5a6e',
                      }}
                    >
                      {item.sub}
                    </div>
                  </div>

                  {/* Status + semester badges */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      alignItems: 'flex-end',
                    }}
                  >
                    <span
                      style={{
                        padding: '5px 14px',
                        background: 'rgba(168,255,62,0.1)',
                        border: '1px solid rgba(168,255,62,0.3)',
                        borderRadius: '100px',
                        fontFamily: 'DM Mono, monospace',
                        fontSize: '11px',
                        color: item.statusColor,
                        letterSpacing: '0.06em',
                      }}
                    >
                      {item.status}
                    </span>
                    <span
                      style={{
                        padding: '5px 14px',
                        background: '#111827',
                        border: '1px solid #1e2d44',
                        borderRadius: '100px',
                        fontFamily: 'DM Mono, monospace',
                        fontSize: '11px',
                        color: '#8899aa',
                      }}
                    >
                      {item.semester}
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div
                  style={{
                    height: '1px',
                    background: '#1e2d44',
                    marginBottom: '20px',
                  }}
                />

                {/* Academic focus */}
                <div>
                  <div
                    style={{
                      fontFamily: 'DM Mono, monospace',
                      fontSize: '11px',
                      color: '#4a5a6e',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      marginBottom: '14px',
                    }}
                  >
                    Academic Focus
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px',
                    }}
                  >
                    {item.highlights.map((h) => (
                      <span
                        key={h}
                        style={{
                          padding: '6px 14px',
                          background: '#111827',
                          border: '1px solid #1e2d44',
                          borderRadius: '6px',
                          fontFamily: 'DM Mono, monospace',
                          fontSize: '12px',
                          color: '#8899aa',
                          transition: 'all 0.2s ease',
                          cursor: 'default',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = '#4f8eff50';
                          e.currentTarget.style.color = '#4f8eff';
                          e.currentTarget.style.background = 'rgba(79,142,255,0.06)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = '#1e2d44';
                          e.currentTarget.style.color = '#8899aa';
                          e.currentTarget.style.background = '#111827';
                        }}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
