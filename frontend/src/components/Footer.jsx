import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        padding: '40px 24px',
        borderTop: '1px solid #1e2d44',
        background: '#080c14',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        {/* Logo + credit */}
        <div>
          <div
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: '16px',
              fontWeight: 800,
              color: '#e8edf5',
              marginBottom: '6px',
            }}
          >
            DS<span style={{ color: '#a8ff3e' }}>.</span>
          </div>
          <div
            style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '12px',
              color: '#2a3a4e',
            }}
          >
            Designed & built by Dikshant Shinde · {year}
          </div>
        </div>

        {/* Stack used */}
        <div
          style={{
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          {['React', 'Node.js', 'MongoDB', 'Express'].map((tech) => (
            <span
              key={tech}
              style={{
                padding: '4px 10px',
                border: '1px solid #1e2d44',
                borderRadius: '4px',
                fontFamily: 'DM Mono, monospace',
                fontSize: '11px',
                color: '#2a3a4e',
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '20px' }}>
          {[
            { label: 'GitHub', href: 'https://github.com/UMBRELLACORP007' },
            { label: 'Email', href: 'mailto:dikshant2426D@gmail.com' },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'DM Mono, monospace',
                fontSize: '12px',
                color: '#2a3a4e',
                transition: 'color 0.2s ease',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#a8ff3e'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#2a3a4e'; }}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
