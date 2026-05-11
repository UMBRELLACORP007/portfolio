import React, { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'About',     href: '#about' },
  { label: 'Skills',    href: '#skills' },
  { label: 'Projects',  href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact',   href: '#contact' },
];

const styles = {
  nav: (scrolled) => ({
    position: 'fixed',
    top: 0, left: 0, right: 0,
    zIndex: 1000,
    padding: '0 24px',
    height: '70px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    transition: 'all 0.3s ease',
    background: scrolled
      ? 'rgba(8, 12, 20, 0.92)'
      : 'transparent',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    borderBottom: scrolled ? '1px solid #1e2d44' : '1px solid transparent',
  }),
  logo: {
    fontFamily: 'Syne, sans-serif',
    fontSize: '18px',
    fontWeight: 800,
    color: '#e8edf5',
    letterSpacing: '-0.02em',
  },
  logoAccent: { color: '#a8ff3e' },
  links: {
    display: 'flex',
    gap: '32px',
    alignItems: 'center',
  },
  link: {
    fontFamily: 'DM Mono, monospace',
    fontSize: '13px',
    color: '#8899aa',
    transition: 'color 0.2s ease',
    cursor: 'pointer',
  },
  cta: {
    fontFamily: 'DM Mono, monospace',
    fontSize: '12px',
    fontWeight: 500,
    padding: '8px 18px',
    background: 'transparent',
    border: '1px solid #a8ff3e',
    color: '#a8ff3e',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    letterSpacing: '0.05em',
  },
  hamburger: {
    display: 'none',
    flexDirection: 'column',
    gap: '5px',
    cursor: 'pointer',
    padding: '4px',
    background: 'none',
    border: 'none',
  },
  bar: {
    width: '22px',
    height: '2px',
    background: '#e8edf5',
    borderRadius: '2px',
    transition: 'all 0.3s ease',
  },
  mobileMenu: (open) => ({
    position: 'fixed',
    top: '70px', left: 0, right: 0,
    background: 'rgba(8, 12, 20, 0.97)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid #1e2d44',
    padding: open ? '24px' : '0 24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    maxHeight: open ? '400px' : '0',
    overflow: 'hidden',
    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
    opacity: open ? 1 : 0,
    zIndex: 999,
  }),
  mobileLink: {
    fontFamily: 'DM Mono, monospace',
    fontSize: '15px',
    color: '#8899aa',
    cursor: 'pointer',
    transition: 'color 0.2s ease',
    paddingBottom: '12px',
    borderBottom: '1px solid #1e2d44',
  },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav style={styles.nav(scrolled)}>
        {/* Logo */}
        <div style={styles.logo}>
          DS<span style={styles.logoAccent}>.</span>
        </div>

        {/* Desktop links */}
        <div className="desktop-nav" style={styles.links}>
          {NAV_LINKS.map((l) => (
            <span
              key={l.label}
              style={{
                ...styles.link,
                color: hoveredLink === l.label ? '#e8edf5' : '#8899aa',
              }}
              onMouseEnter={() => setHoveredLink(l.label)}
              onMouseLeave={() => setHoveredLink(null)}
              onClick={() => handleNavClick(l.href)}
            >
              {l.label}
            </span>
          ))}
          <button
            style={styles.cta}
            onMouseEnter={(e) => {
              e.target.style.background = '#a8ff3e';
              e.target.style.color = '#080c14';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = '#a8ff3e';
            }}
            onClick={() => handleNavClick('#contact')}
          >
            Hire Me
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="hamburger-btn"
          style={{ ...styles.hamburger, display: 'flex' }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            style={{
              ...styles.bar,
              transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
            }}
          />
          <span style={{ ...styles.bar, opacity: menuOpen ? 0 : 1 }} />
          <span
            style={{
              ...styles.bar,
              transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
            }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div style={styles.mobileMenu(menuOpen)}>
        {NAV_LINKS.map((l) => (
          <span
            key={l.label}
            style={styles.mobileLink}
            onClick={() => handleNavClick(l.href)}
          >
            {l.label}
          </span>
        ))}
        <button
          style={{ ...styles.cta, width: 'fit-content' }}
          onClick={() => handleNavClick('#contact')}
        >
          Hire Me
        </button>
      </div>

      <style>{`
        @media (min-width: 769px) {
          .hamburger-btn { display: none !important; }
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </>
  );
}
