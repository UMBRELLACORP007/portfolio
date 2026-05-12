import React, { useState } from 'react';
import { submitContact } from '../services/api';

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/UMBRELLACORP007',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    color: '#a8ff3e',
  },
  {
    label: 'Email',
    href: 'mailto:dikshant2426D@gmail.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    color: '#4f8eff',
  },
  {
    label: 'LinkedIn',
    href: ' https://in.linkedin.com/in/dikshant-shinde',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    color: '#c084fc',
  },
];

const INPUT_STYLE = {
  width: '100%',
  padding: '13px 16px',
  background: '#111827',
  border: '1px solid #1e2d44',
  borderRadius: '8px',
  fontFamily: 'DM Mono, monospace',
  fontSize: '13px',
  color: '#e8edf5',
  outline: 'none',
  transition: 'border-color 0.2s ease',
  boxSizing: 'border-box',
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');
  const [focused, setFocused] = useState(null);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setErrorMsg('Name, email, and message are required.');
      setStatus('error');
      return;
    }
    try {
      setStatus('loading');
      await submitContact(form);
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err?.response?.data?.message || 'Something went wrong. Please try again.'
      );
    }
  };

  const inputStyle = (field) => ({
    ...INPUT_STYLE,
    borderColor: focused === field ? '#a8ff3e' : '#1e2d44',
  });

  return (
    <section
      id="contact"
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
        {/* Header */}
        <div style={{ marginBottom: '60px' }}>
          <div className="section-tag">06. Contact</div>
          <h2 className="section-title">
            Let's <span className="accent">connect</span>.
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
            Have a project idea, want to collaborate, or just want to say hi?
            Drop a message and I'll get back to you.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr',
            gap: '60px',
            alignItems: 'start',
          }}
        >
          {/* Left: info + links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {/* Social links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '16px 20px',
                    border: '1px solid #1e2d44',
                    borderRadius: '10px',
                    background: '#111827',
                    color: '#8899aa',
                    transition: 'all 0.25s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = link.color + '60';
                    e.currentTarget.style.color = link.color;
                    e.currentTarget.style.background = link.color + '08';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#1e2d44';
                    e.currentTarget.style.color = '#8899aa';
                    e.currentTarget.style.background = '#111827';
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  <span>{link.icon}</span>
                  <div>
                    <div
                      style={{
                        fontFamily: 'Syne, sans-serif',
                        fontSize: '14px',
                        fontWeight: 700,
                        lineHeight: 1,
                        marginBottom: '3px',
                      }}
                    >
                      {link.label}
                    </div>
                    {link.label === 'Email' && (
                      <div
                        style={{
                          fontFamily: 'DM Mono, monospace',
                          fontSize: '11px',
                          color: '#4a5a6e',
                        }}
                      >
                        dikshant2426D@gmail.com
                      </div>
                    )}
                    {link.label === 'GitHub' && (
                      <div
                        style={{
                          fontFamily: 'DM Mono, monospace',
                          fontSize: '11px',
                          color: '#4a5a6e',
                        }}
                      >
                        github.com/UMBRELLACORP007
                      </div>
                    )}
                    {link.label === 'LinkedIn' && (
                      <div
                        style={{
                          fontFamily: 'DM Mono, monospace',
                          fontSize: '11px',
                          color: '#4a5a6e',
                        }}
                      >
                        www.linkedin.com/in/dikshant-shinde
                    </div>
                    )}
                  </div>
                </a>
              ))}
            </div>

            {/* Availability note */}
            <div
              style={{
                padding: '20px',
                border: '1px solid rgba(168,255,62,0.2)',
                borderRadius: '10px',
                background: 'rgba(168,255,62,0.04)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '8px',
                }}
              >
                <span
                  style={{
                    width: '7px', height: '7px',
                    background: '#a8ff3e',
                    borderRadius: '50%',
                    display: 'inline-block',
                    animation: 'pulse-glow 2s ease-in-out infinite',
                  }}
                />
                <span
                  style={{
                    fontFamily: 'DM Mono, monospace',
                    fontSize: '12px',
                    color: '#a8ff3e',
                    letterSpacing: '0.06em',
                  }}
                >
                  Available for work
                </span>
              </div>
              <p
                style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '12px',
                  color: '#4a5a6e',
                  lineHeight: 1.7,
                }}
              >
                Open to freelance projects, internships, and collaboration opportunities.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div
            style={{
              padding: '36px',
              border: '1px solid #1e2d44',
              borderRadius: '16px',
              background: '#111827',
            }}
          >
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
                <h3
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    fontSize: '20px',
                    fontWeight: 700,
                    color: '#a8ff3e',
                    marginBottom: '10px',
                  }}
                >
                  Message sent!
                </h3>
                <p
                  style={{
                    fontFamily: 'DM Mono, monospace',
                    fontSize: '13px',
                    color: '#4a5a6e',
                    lineHeight: 1.7,
                  }}
                >
                  Thanks for reaching out. I'll get back to you as soon as possible.
                </p>
                <button
                  style={{
                    marginTop: '24px',
                    padding: '10px 24px',
                    background: 'transparent',
                    border: '1px solid #1e2d44',
                    borderRadius: '8px',
                    fontFamily: 'DM Mono, monospace',
                    fontSize: '13px',
                    color: '#8899aa',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onClick={() => setStatus('idle')}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <h3
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#e8edf5',
                    marginBottom: '4px',
                  }}
                >
                  Send a message
                </h3>

                {/* Error */}
                {status === 'error' && (
                  <div
                    style={{
                      padding: '12px 16px',
                      background: 'rgba(255,107,107,0.08)',
                      border: '1px solid rgba(255,107,107,0.25)',
                      borderRadius: '8px',
                      fontFamily: 'DM Mono, monospace',
                      fontSize: '12px',
                      color: '#ff6b6b',
                    }}
                  >
                    ⚠ {errorMsg}
                  </div>
                )}

                {/* Name + Email row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontFamily: 'DM Mono, monospace',
                        fontSize: '11px',
                        color: '#4a5a6e',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        marginBottom: '7px',
                      }}
                    >
                      Name *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      style={inputStyle('name')}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontFamily: 'DM Mono, monospace',
                        fontSize: '11px',
                        color: '#4a5a6e',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        marginBottom: '7px',
                      }}
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      style={inputStyle('email')}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'DM Mono, monospace',
                      fontSize: '11px',
                      color: '#4a5a6e',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      marginBottom: '7px',
                    }}
                  >
                    Subject
                  </label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    style={inputStyle('subject')}
                    onFocus={() => setFocused('subject')}
                    onBlur={() => setFocused(null)}
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'DM Mono, monospace',
                      fontSize: '11px',
                      color: '#4a5a6e',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      marginBottom: '7px',
                    }}
                  >
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hi..."
                    rows={5}
                    style={{
                      ...inputStyle('message'),
                      resize: 'vertical',
                      minHeight: '120px',
                    }}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  style={{
                    padding: '14px 28px',
                    background: status === 'loading' ? '#1e2d44' : '#a8ff3e',
                    color: status === 'loading' ? '#4a5a6e' : '#080c14',
                    border: 'none',
                    borderRadius: '8px',
                    fontFamily: 'DM Mono, monospace',
                    fontSize: '13px',
                    fontWeight: 500,
                    cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                    transition: 'all 0.2s ease',
                    letterSpacing: '0.05em',
                    alignSelf: 'flex-start',
                  }}
                  onMouseEnter={(e) => {
                    if (status !== 'loading') {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 8px 24px rgba(168,255,62,0.25)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'none';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
