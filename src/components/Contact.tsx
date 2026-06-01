import React, { useState } from 'react';
import { Mail, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const emailAddress = 'sude8920esh@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submit
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      style={{
        paddingTop: '80px',
        paddingBottom: '40px',
      }}
      className="section"
    >
      {/* Title */}
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 style={{ fontSize: '36px', marginBottom: '16px' }}>
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '16px' }}>
          Feel free to reach out for project opportunities, job offers, or just to say hello.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1.8fr',
          gap: '50px',
        }}
        className="contact-layout"
      >
        {/* Left Column: Direct Links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' }}>
          <h3 style={{ fontSize: '22px', marginBottom: '10px' }}>Let's build something amazing together.</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.6, marginBottom: '20px' }}>
            I am currently open to Frontend Engineer roles, contracts, and collaboration opportunities. Let me know how I can help!
          </p>

          {/* Email Copy Card */}
          <div
            className="glass-panel"
            style={{
              padding: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '15px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div
                style={{
                  background: 'rgba(0, 242, 254, 0.08)',
                  padding: '12px',
                  borderRadius: '10px',
                  display: 'flex',
                }}
              >
                <Mail color="var(--accent-cyan)" size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 500, marginBottom: '2px' }}>Email Address</h4>
                <p style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-highlight)' }}>{emailAddress}</p>
              </div>
            </div>
            <button
              onClick={handleCopyEmail}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '8px',
                padding: '10px',
                color: 'var(--text-main)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent-cyan)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
            >
              {copied ? <Check size={18} color="var(--accent-neon-green)" /> : <Copy size={18} />}
            </button>
          </div>

          {/* Social connection links */}
          <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
            <a
              href="https://www.linkedin.com/in/sudeesh-kumar-a1a1b4260/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel"
              style={{
                flex: 1,
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                fontSize: '15px',
                fontWeight: 600,
              }}
            >
              <LinkedinIcon size={18} color="var(--accent-blue)" /> LinkedIn
            </a>
            <a
              href="https://github.com/aman123k"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel"
              style={{
                flex: 1,
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                fontSize: '15px',
                fontWeight: 600,
              }}
            >
              <GithubIcon size={18} color="var(--text-highlight)" /> GitHub
            </a>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="glass-panel" style={{ padding: '40px' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Your Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
                style={{
                  width: '100%',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '8px',
                  padding: '14px 18px',
                  color: 'var(--text-highlight)',
                  fontSize: '15px',
                  outline: 'none',
                  transition: 'border-color 0.3s ease',
                }}
                onFocus={(e) => (e.target.style.borderColor = 'var(--accent-cyan)')}
                onBlur={(e) => (e.target.style.borderColor = 'var(--border-color)')}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Email Address
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@example.com"
                style={{
                  width: '100%',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '8px',
                  padding: '14px 18px',
                  color: 'var(--text-highlight)',
                  fontSize: '15px',
                  outline: 'none',
                  transition: 'border-color 0.3s ease',
                }}
                onFocus={(e) => (e.target.style.borderColor = 'var(--accent-cyan)')}
                onBlur={(e) => (e.target.style.borderColor = 'var(--border-color)')}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Message
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Hi Sudeesh, let's connect..."
                style={{
                  width: '100%',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '8px',
                  padding: '14px 18px',
                  color: 'var(--text-highlight)',
                  fontSize: '15px',
                  outline: 'none',
                  resize: 'vertical',
                  transition: 'border-color 0.3s ease',
                }}
                onFocus={(e) => (e.target.style.borderColor = 'var(--accent-cyan)')}
                onBlur={(e) => (e.target.style.borderColor = 'var(--border-color)')}
              />
            </div>

            <button
              type="submit"
              style={{
                background: 'var(--accent-gradient)',
                color: '#000',
                border: 'none',
                borderRadius: '8px',
                padding: '16px',
                fontSize: '15px',
                fontWeight: 700,
                cursor: 'pointer',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(0,242,254,0.2)',
                marginTop: '10px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,242,254,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,242,254,0.2)';
              }}
            >
              Send Message
            </button>

            {submitted && (
              <p style={{ color: 'var(--accent-neon-green)', fontSize: '14px', textAlign: 'center', marginTop: '10px' }}>
                Thank you! Your message has been sent successfully.
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Footer copyright */}
      <footer
        style={{
          marginTop: '100px',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          paddingTop: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          fontSize: '13px',
          color: 'var(--text-muted)',
        }}
      >
        <p>© 2026 Sudeesh Kumar. All rights reserved.</p>
        <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          Designed and built with React, GSAP, and 💙
        </p>
      </footer>

      <style>{`
        @media (max-width: 850px) {
          .contact-layout {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
};
