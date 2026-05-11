import React, { useState, useEffect } from 'react';

const ROLES = [
  'Full Stack Developer',
  'CS Diploma Student',
  'Discord Bot Builder',
  'UI/UX Enthusiast',
  'Problem Solver',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  // Typewriter effect
  useEffect(() => {
    const current = ROLES[roleIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < current.length) {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      } else if (!isDeleting && charIndex === current.length) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((r) => (r + 1) % ROLES.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  const scrollTo = (id) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '100px 24px 60px',
      }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        top: '20%', left: '5%',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(168,255,62,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
        borderRadius: '50%',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%', right: '5%',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(79,142,255,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
        borderRadius: '50%',
      }} />

      {/* Grid background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(30,45,68,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(30,45,68,0.25) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          width: '100%',
          position: 'relative',
        }}
      >
        {/* Status badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            border: '1px solid #1e2d44',
            borderRadius: '100px',
            marginBottom: '36px',
            animation: 'fadeInUp 0.6s ease forwards',
            opacity: 0,
          }}
        >
          <span
            style={{
              width: '6px', height: '6px',
              background: '#a8ff3e',
              borderRadius: '50%',
              animation: 'pulse-glow 2s ease-in-out infinite',
              display: 'inline-block',
            }}
          />
          <span
            style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '12px',
              color: '#8899aa',
              letterSpacing: '0.06em',
            }}
          >
            Open to opportunities
          </span>
        </div>

        {/* Name */}
        <h1
          style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(44px, 8vw, 88px)',
            fontWeight: 800,
            lineHeight: 1.0,
            letterSpacing: '-0.03em',
            color: '#e8edf5',
            marginBottom: '12px',
            animation: 'fadeInUp 0.7s 0.1s ease forwards',
            opacity: 0,
          }}
        >
          Dikshant<br />
          <span style={{ color: '#a8ff3e' }}>Shinde</span>
          <span style={{ color: '#4f8eff' }}>.</span>
        </h1>

        {/* Typewriter role */}
        <div
          style={{
            fontFamily: 'DM Mono, monospace',
            fontSize: 'clamp(16px, 2.5vw, 22px)',
            color: '#8899aa',
            marginBottom: '28px',
            minHeight: '34px',
            animation: 'fadeInUp 0.7s 0.2s ease forwards',
            opacity: 0,
          }}
        >
          <span style={{ color: '#a8ff3e' }}>{'>'}</span>{' '}
          {displayed}
          <span
            style={{
              display: 'inline-block',
              width: '2px',
              height: '1em',
              background: '#a8ff3e',
              marginLeft: '3px',
              verticalAlign: 'middle',
              animation: 'blink 1s step-end infinite',
            }}
          />
        </div>

        {/* Tagline */}
        <p
          style={{
            fontFamily: 'DM Mono, monospace',
            fontSize: 'clamp(13px, 1.5vw, 15px)',
            color: '#4a5a6e',
            maxWidth: '520px',
            lineHeight: 1.8,
            marginBottom: '48px',
            animation: 'fadeInUp 0.7s 0.3s ease forwards',
            opacity: 0,
          }}
        >
          Building modern web apps, bots, and creative digital
          experiences while learning and growing every day.
        </p>

        {/* CTA buttons */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
            flexWrap: 'wrap',
            animation: 'fadeInUp 0.7s 0.4s ease forwards',
            opacity: 0,
          }}
        >
          <button
            onClick={() => scrollTo('#projects')}
            style={{
              padding: '14px 32px',
              background: '#a8ff3e',
              color: '#080c14',
              border: 'none',
              borderRadius: '8px',
              fontFamily: 'DM Mono, monospace',
              fontSize: '13px',
              fontWeight: 500,
              cursor: 'pointer',
              letterSpacing: '0.05em',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 24px rgba(168,255,62,0.25)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'none';
              e.target.style.boxShadow = 'none';
            }}
          >
            View Projects →
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            style={{
              padding: '14px 32px',
              background: 'transparent',
              color: '#e8edf5',
              border: '1px solid #1e2d44',
              borderRadius: '8px',
              fontFamily: 'DM Mono, monospace',
              fontSize: '13px',
              fontWeight: 500,
              cursor: 'pointer',
              letterSpacing: '0.05em',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = '#a8ff3e';
              e.target.style.color = '#a8ff3e';
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = '#1e2d44';
              e.target.style.color = '#e8edf5';
            }}
          >
            Contact Me
          </button>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: '-80px',
            left: 0,
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            animation: 'fadeIn 1s 1s ease forwards',
            opacity: 0,
          }}
        >
          <div
            style={{
              width: '1px',
              height: '48px',
              background: 'linear-gradient(to bottom, transparent, #4a5a6e)',
            }}
          />
          <span
            style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '10px',
              color: '#4a5a6e',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              writingMode: 'vertical-lr',
            }}
          >
            Scroll
          </span>
        </div>

        {/* Location tag */}
        <div
          style={{
            position: 'absolute',
            top: 0, right: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '8px',
            animation: 'fadeIn 1s 0.6s ease forwards',
            opacity: 0,
          }}
        >
          <span
            style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '11px',
              color: '#4a5a6e',
              letterSpacing: '0.08em',
            }}
          >
            📍 Vadodara, Gujarat
          </span>
          <span
            style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '11px',
              color: '#4a5a6e',
              letterSpacing: '0.08em',
            }}
          >
            CS Student @ Parul University
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #hero > div > div:last-child { display: none; }
        }
      `}</style>
    </section>
  );
}
