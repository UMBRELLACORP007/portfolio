import React, { useState } from 'react';

const LEARNING_ITEMS = [
  {
    title: 'Advanced React Development',
    description: 'Hooks, Context API, performance optimization, and custom hook patterns.',
    icon: '⚛️',
    progress: 65,
    color: '#4f8eff',
  },
  {
    title: 'Backend Architecture',
    description: 'REST API design, microservices concepts, authentication patterns.',
    icon: '⚙️',
    progress: 55,
    color: '#a8ff3e',
  },
  {
    title: 'API Integration',
    description: 'Third-party APIs, OAuth flows, webhooks, and rate limiting strategies.',
    icon: '🔌',
    progress: 70,
    color: '#ff8c42',
  },
  {
    title: 'Cloud Deployment',
    description: 'Deploying apps with Railway, Vercel, and exploring AWS fundamentals.',
    icon: '☁️',
    progress: 45,
    color: '#c084fc',
  },
  {
    title: 'Database Optimization',
    description: 'MongoDB indexing, aggregation pipelines, and query performance tuning.',
    icon: '🗄️',
    progress: 40,
    color: '#34d399',
  },
  {
    title: 'Modern Full Stack Development',
    description: 'End-to-end application architecture, CI/CD workflows, and best practices.',
    icon: '🚀',
    progress: 50,
    color: '#fb7185',
  },
];

export default function Learning() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="learning"
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
          <div className="section-tag">04. Currently Learning</div>
          <h2 className="section-title">
            Always in <span className="accent">progress</span>.
          </h2>
          <p
            style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '14px',
              color: '#4a5a6e',
              marginTop: '16px',
              maxWidth: '480px',
              lineHeight: 1.8,
            }}
          >
            Technologies and concepts I'm actively studying and building with right now.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {LEARNING_ITEMS.map((item) => (
            <div
              key={item.title}
              style={{
                padding: '24px',
                border: `1px solid ${hovered === item.title ? item.color + '40' : '#1e2d44'}`,
                borderRadius: '14px',
                background: hovered === item.title ? '#111827' : '#0d1220',
                transition: 'all 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={() => setHovered(item.title)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Icon + title row */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '12px',
                }}
              >
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    background: `${item.color}15`,
                    border: `1px solid ${item.color}30`,
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18px',
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <h3
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#e8edf5',
                    lineHeight: 1.2,
                  }}
                >
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p
                style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '12px',
                  color: '#4a5a6e',
                  lineHeight: 1.7,
                  marginBottom: '18px',
                }}
              >
                {item.description}
              </p>

              {/* Progress bar */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '7px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'DM Mono, monospace',
                      fontSize: '10px',
                      color: '#4a5a6e',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Progress
                  </span>
                  <span
                    style={{
                      fontFamily: 'DM Mono, monospace',
                      fontSize: '10px',
                      color: item.color,
                    }}
                  >
                    {item.progress}%
                  </span>
                </div>
                <div
                  style={{
                    height: '3px',
                    background: '#1e2d44',
                    borderRadius: '100px',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      width: `${item.progress}%`,
                      background: item.color,
                      borderRadius: '100px',
                      transition: 'width 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  />
                </div>
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
