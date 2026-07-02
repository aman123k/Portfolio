import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

interface NavbarProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        left: 0,
        width: "100%",
        zIndex: 1000,
        display: "flex",
        justifyContent: "center",
        padding: "0 5%",
        pointerEvents: "none", // Allow clicks behind outer container, but enable on the navbar card itself
      }}
    >
      <nav
        className="glass-panel"
        style={{
          pointerEvents: "auto",
          width: "100%",
          maxWidth: "1040px",
          padding: isScrolled ? "12px 28px" : "16px 36px",
          background: "var(--bg-navbar)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1.5px solid var(--border-color)",
          borderRadius: "100px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: isScrolled ? "var(--shadow-medium)" : "var(--shadow-soft)",
          transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
        }}
      >
        {/* Left Side: Logo & Theme Toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <a
            href="#home"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 900,
              fontSize: "22px",
              color: "var(--text-highlight)",
              display: "flex",
              alignItems: "center",
              letterSpacing: "-0.5px",
            }}
          >
            Sudeesh<span style={{ color: "var(--accent-primary)" }}>.</span>
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            style={{
              background: "var(--bg-tertiary)",
              border: "none",
              borderRadius: "50%",
              width: "36px",
              height: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "var(--text-highlight)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.08)";
              e.currentTarget.style.color = "var(--accent-primary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.color = "var(--text-highlight)";
            }}
            aria-label="Toggle Theme Mode"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>

        {/* Center: Desktop Menu Links */}
        <div
          className="nav-links-desktop"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "28px",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "var(--text-main)",
                position: "relative",
                padding: "6px 0",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--accent-primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-main)";
              }}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Side: Hire Me Button / Mobile Menu Toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <a
            href="#contact"
            className="hire-me-btn"
            style={{
              background: "var(--bg-secondary)",
              border: "1.5px solid var(--accent-primary)",
              borderRadius: "100px",
              padding: "8px 22px",
              fontSize: "14px",
              fontWeight: 700,
              color: "var(--accent-primary)",
              display: "inline-flex",
              alignItems: "center",
              boxShadow: "var(--shadow-soft)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--accent-primary)";
              e.currentTarget.style.color = "#ffffff";
              e.currentTarget.style.boxShadow = "var(--shadow-accent)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--bg-secondary)";
              e.currentTarget.style.color = "var(--accent-primary)";
              e.currentTarget.style.boxShadow = "var(--shadow-soft)";
              e.currentTarget.style.transform = "none";
            }}
          >
            Hire Me
          </a>

          {/* Mobile menu toggle */}
          <button
            className="menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: "none",
              border: "none",
              color: "var(--text-highlight)",
              cursor: "pointer",
              display: "none",
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div
          className="glass-panel"
          style={{
            position: "absolute",
            top: "calc(100% + 10px)",
            left: "5%",
            width: "90%",
            background: "var(--bg-secondary)",
            border: "1.5px solid var(--border-color)",
            borderRadius: "24px",
            padding: "24px 30px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            zIndex: 999,
            pointerEvents: "auto",
            boxShadow: "var(--shadow-medium)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: "16px",
                fontWeight: 700,
                color: "var(--text-main)",
                padding: "8px 0",
                borderBottom: "1.5px solid var(--bg-tertiary)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--accent-primary)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-main)")
              }
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              background: "var(--accent-gradient)",
              color: "#ffffff",
              borderRadius: "100px",
              padding: "12px",
              textAlign: "center",
              fontWeight: 700,
              fontSize: "15px",
              boxShadow: "var(--shadow-accent)",
              marginTop: "8px",
            }}
          >
            Hire Me
          </a>
        </div>
      )}

      {/* Media Queries */}
      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop {
            display: none !important;
          }
          .hire-me-btn {
            display: none !important;
          }
          .menu-toggle {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
};
