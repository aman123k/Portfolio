import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';

// Custom SVG components for brand icons since lucide-react v1.x doesn't export them
const Instagram: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Github: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const XIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const Leetcode: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414 0-1.954l-2.396-2.392c-.742-.741-1.696-.639-2.443.088l-1.127 1.128c-.54.54-1.414.54-1.954 0-.54-.54-.54-1.414 0-1.954l1.127-1.128c1.373-1.373 3.407-1.745 5.22-.647 1.813 1.099 2.653 3.033 2.053 4.885-.599 1.852-2.305 3.097-4.223 3.097H8.537c-.752 0-1.363.611-1.363 1.364 0 .753.611 1.364 1.363 1.364h7.054c2.612 0 4.939-1.695 5.753-4.214.814-2.519-.102-5.32-2.285-6.848-2.183-1.528-5.051-1.554-7.265-.052l-.039-.038L14.444 1.35C14.855.776 14.364 0 13.483 0z" />
  </svg>
);

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const socialLinks = [
    { name: 'Instagram', url: 'https://www.instagram.com/aman_0124k/', icon: <Instagram size={18} /> },
    { name: 'GitHub', url: 'https://github.com/aman123k', icon: <Github size={18} /> },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sudeesh-kumar-a1a1b4260/', icon: <Linkedin size={18} /> },
    { name: 'X', url: 'https://x.com/Sudeesh76639641', icon: <XIcon size={18} /> },
    { name: 'LeetCode', url: 'https://leetcode.com/u/sudeesh123k/', icon: <Leetcode size={18} /> },
  ];


  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1.5px solid var(--border-color)',
        paddingTop: '64px',
        paddingBottom: '32px',
        position: 'relative',
        zIndex: 10,
        marginTop: '80px',
      }}
    >
      <div
        className="section"
        style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1fr',
          gap: '48px',
          marginBottom: '48px',
          textAlign: 'left',
        }}
        id="footer-grid"
      >
        {/* Column 1: Brand & Tagline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h3
            style={{
              fontSize: '24px',
              fontWeight: 900,
              fontFamily: 'var(--font-heading)',
              letterSpacing: '-0.5px',
            }}
          >
            Portfolio<span className="text-gradient">.</span>
          </h3>
          <p
            style={{
              fontSize: '14.5px',
              color: 'var(--text-main)',
              lineHeight: 1.6,
              opacity: 0.85,
              maxWidth: '320px',
            }}
          >
            A premium developer portfolio showcasing high-performance web applications, clean responsive layouts, and modern architecture.
          </p>
          {/* Social Icons */}
          <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-highlight)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--accent-primary)';
                  e.currentTarget.style.borderColor = 'var(--accent-primary)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-highlight)';
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.transform = 'none';
                }}
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Navigation Links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <h4
            style={{
              fontSize: '14px',
              fontWeight: 800,
              color: 'var(--text-highlight)',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
          >
            Navigation
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  style={{
                    fontSize: '14px',
                    color: 'var(--text-main)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    opacity: 0.9,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-main)')}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <h4
            style={{
              fontSize: '14px',
              fontWeight: 800,
              color: 'var(--text-highlight)',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
          >
            Contact
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '14px', color: 'var(--text-main)' }}>
            <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Mail size={16} style={{ color: 'var(--accent-primary)' }} />
              <a
                href="mailto:sude8920esh@gmail.com"
                style={{ color: 'inherit', textDecoration: 'none', fontWeight: 600 }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'inherit')}
              >
                sude8920esh@gmail.com
              </a>
            </p>
            <p style={{ opacity: 0.85 }}>
              The Gold Technologies
            </p>
            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              style={{
                alignSelf: 'flex-start',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'var(--bg-tertiary)',
                border: '1.5px solid var(--border-color)',
                color: 'var(--text-highlight)',
                fontSize: '12px',
                fontWeight: 700,
                padding: '8px 14px',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                marginTop: '8px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-primary)';
                e.currentTarget.style.color = 'var(--accent-primary)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.color = 'var(--text-highlight)';
                e.currentTarget.style.transform = 'none';
              }}
            >
              Back to Top <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Details */}
      <div
        className="section"
        style={{
          borderTop: '1.5px solid var(--border-color)',
          paddingTop: '32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '13px',
          color: 'var(--text-muted)',
        }}
      >
        <p>© 2026 Sudeesh Kumar. All rights reserved.</p>
        <p style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          Designed and built with React & 🧡
        </p>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 768px) {
          #footer-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </footer>
  );
};
