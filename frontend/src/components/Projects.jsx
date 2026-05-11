import React, { useState, useEffect } from 'react';
import { getProjects } from '../services/api';

const CATEGORIES = ['all', 'fullstack', 'frontend', 'backend', 'bot', 'tool', 'other'];

const STATUS_COLORS = {
  completed: { bg: 'rgba(52, 211, 153, 0.1)', border: '#34d399', text: '#34d399' },
  'in-progress': { bg: 'rgba(251, 191, 36, 0.1)', border: '#fbbf24', text: '#fbbf24' },
  archived: { bg: 'rgba(100, 116, 139, 0.1)', border: '#64748b', text: '#64748b' },
};

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);
  const status = STATUS_COLORS[project.status] || STATUS_COLORS.completed;
  const date = new Date(project.createdAt).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });

  return (
    <div
      style={{
        border: `1px solid ${hovered ? '#a8ff3e40' : '#1e2d44'}`,
        borderRadius: '14px',
        background: hovered ? '#161f30' : '#111827',
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-6px)' : 'none',
        boxShadow: hovered ? '0 16px 40px rgba(0,0,0,0.3)' : 'none',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Featured indicator */}
      {project.featured && (
        <div
          style={{
            position: 'absolute',
            top: '16px', right: '16px',
            padding: '3px 10px',
            background: 'rgba(168,255,62,0.12)',
            border: '1px solid rgba(168,255,62,0.3)',
            borderRadius: '100px',
            fontFamily: 'DM Mono, monospace',
            fontSize: '10px',
            color: '#a8ff3e',
            letterSpacing: '0.08em',
          }}
        >
          Featured
        </div>
      )}

      {/* Image placeholder / color block */}
      <div
        style={{
          height: '160px',
          background: project.imageUrl
            ? `url(${project.imageUrl}) center/cover no-repeat`
            : 'linear-gradient(135deg, #111827 0%, #1a2436 100%)',
          borderBottom: '1px solid #1e2d44',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '40px',
          letterSpacing: '-0.04em',
          fontFamily: 'Syne, sans-serif',
          fontWeight: 800,
          color: '#1e2d44',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {!project.imageUrl && (
          <span style={{ opacity: 0.4, userSelect: 'none' }}>
            {project.title.charAt(0).toUpperCase()}
          </span>
        )}
        {/* Category tag bottom-left */}
        <div
          style={{
            position: 'absolute',
            bottom: '12px', left: '16px',
            padding: '3px 10px',
            background: 'rgba(13,18,32,0.8)',
            border: '1px solid #1e2d44',
            borderRadius: '100px',
            fontFamily: 'DM Mono, monospace',
            fontSize: '10px',
            color: '#4a5a6e',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}
        >
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {/* Title + status */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
          <h3
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: '17px',
              fontWeight: 700,
              color: '#e8edf5',
              lineHeight: 1.2,
            }}
          >
            {project.title}
          </h3>
          <span
            style={{
              flexShrink: 0,
              padding: '3px 9px',
              background: status.bg,
              border: `1px solid ${status.border}`,
              borderRadius: '100px',
              fontFamily: 'DM Mono, monospace',
              fontSize: '10px',
              color: status.text,
              whiteSpace: 'nowrap',
            }}
          >
            {project.status}
          </span>
        </div>

        {/* Description */}
        <p
          style={{
            fontFamily: 'DM Mono, monospace',
            fontSize: '13px',
            color: '#8899aa',
            lineHeight: 1.75,
            flex: 1,
          }}
        >
          {project.description}
        </p>

        {/* Tech stack */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              style={{
                padding: '3px 9px',
                background: '#0d1220',
                border: '1px solid #1e2d44',
                borderRadius: '4px',
                fontFamily: 'DM Mono, monospace',
                fontSize: '11px',
                color: '#4f8eff',
              }}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span
              style={{
                padding: '3px 9px',
                fontFamily: 'DM Mono, monospace',
                fontSize: '11px',
                color: '#4a5a6e',
              }}
            >
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        {/* Footer: links + date */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '12px',
            borderTop: '1px solid #1e2d44',
          }}
        >
          <div style={{ display: 'flex', gap: '12px' }}>
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '12px',
                  color: '#8899aa',
                  transition: 'color 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#a8ff3e'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#8899aa'; }}
              >
                GitHub ↗
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '12px',
                  color: '#8899aa',
                  transition: 'color 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#4f8eff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#8899aa'; }}
              >
                Live ↗
              </a>
            )}
          </div>
          <span
            style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '11px',
              color: '#4a5a6e',
            }}
          >
            {date}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const params = activeCategory !== 'all' ? { category: activeCategory } : {};
        const res = await getProjects(params);
        setProjects(res.data.data);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch projects:', err);
        setError('Could not load projects. Make sure the backend server is running.');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [activeCategory]);

  return (
    <section id="projects" style={{ padding: '100px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '24px',
            marginBottom: '48px',
          }}
        >
          <div>
            <div className="section-tag">03. Projects</div>
            <h2 className="section-title">
              Things I've <span className="accent">built</span>.
            </h2>
          </div>

          {/* Filter tabs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
            }}
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '7px 14px',
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '12px',
                  letterSpacing: '0.06em',
                  textTransform: 'capitalize',
                  border: `1px solid ${activeCategory === cat ? '#a8ff3e' : '#1e2d44'}`,
                  background: activeCategory === cat ? 'rgba(168,255,62,0.1)' : 'transparent',
                  color: activeCategory === cat ? '#a8ff3e' : '#4a5a6e',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Loading */}
        {loading && <div className="spinner" />}

        {/* Error */}
        {error && !loading && (
          <div
            style={{
              padding: '28px',
              border: '1px solid #ff6b6b30',
              borderRadius: '12px',
              background: 'rgba(255,107,107,0.06)',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontFamily: 'DM Mono, monospace',
                fontSize: '14px',
                color: '#ff6b6b',
                marginBottom: '8px',
              }}
            >
              ⚠ {error}
            </p>
            <p
              style={{
                fontFamily: 'DM Mono, monospace',
                fontSize: '12px',
                color: '#4a5a6e',
              }}
            >
              Run: <code style={{ color: '#a8ff3e' }}>cd backend && npm run dev</code>
            </p>
          </div>
        )}

        {/* Projects grid */}
        {!loading && !error && (
          <>
            {projects.length === 0 ? (
              <div
                style={{
                  textAlign: 'center',
                  padding: '60px',
                  color: '#4a5a6e',
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '14px',
                }}
              >
                No projects found in this category.
                <br />
                <span style={{ color: '#2a3a4e', fontSize: '12px' }}>
                  Run <code style={{ color: '#a8ff3e' }}>npm run seed</code> in the backend to add sample projects.
                </span>
              </div>
            ) : (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                  gap: '24px',
                }}
              >
                {projects.map((project) => (
                  <ProjectCard key={project._id} project={project} />
                ))}
              </div>
            )}
          </>
        )}

        {/* GitHub CTA */}
        {!loading && !error && projects.length > 0 && (
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <a
              href="https://github.com/UMBRELLACORP007"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 28px',
                border: '1px solid #1e2d44',
                borderRadius: '8px',
                fontFamily: 'DM Mono, monospace',
                fontSize: '13px',
                color: '#8899aa',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#a8ff3e';
                e.currentTarget.style.color = '#a8ff3e';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#1e2d44';
                e.currentTarget.style.color = '#8899aa';
              }}
            >
              View all on GitHub ↗
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
