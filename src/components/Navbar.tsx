import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 100 + '%',
        zIndex: 1000,
        padding: isScrolled ? '10px 5%' : '18px 5%',
        background: isScrolled ? 'rgba(8, 8, 12, 0.85)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid transparent',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
      }}
    >
      {/* Brand logo */}
      <a
        href="#home"
        className="magnetic"
        style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 800,
          fontSize: '24px',
          letterSpacing: '-1px',
          color: 'var(--text-highlight)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <span style={{ color: 'var(--accent-cyan)' }}>S</span>
        <span style={{ fontSize: '18px', opacity: 0.8 }}>Kumar</span>
        <span style={{ color: 'var(--accent-purple)' }}>.</span>
      </a>

      {/* Desktop navigation links */}
      <div
        className="nav-links-desktop"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="magnetic"
            style={{
              fontSize: '14px',
              fontWeight: 500,
              color: 'var(--text-muted)',
              position: 'relative',
              padding: '6px 0',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--text-highlight)';
              const line = e.currentTarget.querySelector('.nav-line') as HTMLElement;
              if (line) line.style.width = '100%';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-muted)';
              const line = e.currentTarget.querySelector('.nav-line') as HTMLElement;
              if (line) line.style.width = '0';
            }}
          >
            {link.name}
            <span
              className="nav-line"
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: 0,
                height: '2px',
                background: 'var(--accent-gradient)',
                transition: 'width 0.3s ease',
              }}
            />
          </a>
        ))}
      </div>

      {/* Desktop Social icons */}
      <div
        className="social-desktop"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        <a
          href="https://github.com/aman123k"
          target="_blank"
          rel="noopener noreferrer"
          className="magnetic"
          style={{ color: 'var(--text-muted)' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-cyan)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
        >
          <GithubIcon size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/sudeesh-kumar-a1a1b4260/"
          target="_blank"
          rel="noopener noreferrer"
          className="magnetic"
          style={{ color: 'var(--text-muted)' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-purple)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
        >
          <LinkedinIcon size={20} />
        </a>
      </div>

      {/* Mobile menu toggle */}
      <button
        className="menu-toggle"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        style={{
          background: 'none',
          border: 'none',
          color: 'var(--text-highlight)',
          cursor: 'pointer',
          display: 'none',
        }}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* CSS stylesheet addition inside the component for responsiveness */}
      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop, .social-desktop {
            display: none !important;
          }
          .menu-toggle {
            display: block !important;
          }
        }
      `}</style>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '70px',
            left: 0,
            width: '100%',
            background: 'rgba(8, 8, 12, 0.95)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '30px 5%',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            zIndex: 999,
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '18px',
                fontWeight: 600,
                color: 'var(--text-main)',
                padding: '10px 0',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              {link.name}
            </a>
          ))}
          <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
            <a
              href="https://github.com/aman123k"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--text-muted)' }}
            >
              <GithubIcon size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/sudeesh-kumar-a1a1b4260/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--text-muted)' }}
            >
              <LinkedinIcon size={22} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
