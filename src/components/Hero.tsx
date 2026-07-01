import React from "react";
import { Download, Mail } from "lucide-react";

export const Hero: React.FC = () => {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://instagram.com",
      bg: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
      icon: (
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      url: "https://tiktok.com",
      bg: "#000000",
      icon: (
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.03 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.99-1.72-.08-.07-.17-.17-.25-.26V14c0 1.71-.37 3.49-1.39 4.88-1.39 1.9-3.79 3.07-6.14 2.93-2.48-.15-4.88-1.89-5.63-4.29-.88-2.82.26-6.17 2.91-7.39 1.14-.53 2.45-.63 3.68-.42v4.06c-.84-.24-1.79-.19-2.54.3-.96.63-1.4 1.89-1.12 2.99.31 1.25 1.51 2.2 2.81 2.1 1.4-.11 2.5-1.38 2.4-2.79V0h.52z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      url: "https://github.com/aman123k",
      bg: "#24292e",
      icon: (
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      url: "https://youtube.com",
      bg: "#ff0000",
      icon: (
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.516 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.872.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: "110px",
        paddingBottom: "40px",
        position: "relative",
        zIndex: 10,
        gap: "40px",
      }}
      className="section"
    >
      {/* Left Column: Socials, Greeting, CTAs */}
      <div
        style={{
          flex: 1.1,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          textAlign: "left",
        }}
      >
        {/* Floating Social Media Icons */}
        <div
          style={{
            display: "flex",
            gap: "14px",
            marginBottom: "28px",
          }}
          className="socials-container"
        >
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: social.bg,
                color: "#ffffff",
                width: "38px",
                height: "38px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "var(--shadow-soft)",
                transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px) scale(1.05)";
                e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "var(--shadow-soft)";
              }}
              aria-label={`Follow on ${social.name}`}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Big Greeting */}
        <h1
          style={{
            fontSize: "clamp(44px, 6.5vw, 76px)",
            fontFamily: "var(--font-heading)",
            lineHeight: 1.1,
            marginBottom: "20px",
            fontWeight: 900,
            letterSpacing: "-1.5px",
          }}
        >
          Hi, I'm{" "}
          <span className="text-gradient" style={{ fontWeight: 900 }}>
            Sudeesh Kumar
          </span>
        </h1>

        {/* Short Bio Description */}
        <p
          style={{
            fontSize: "clamp(16px, 1.8vw, 18px)",
            color: "var(--text-main)",
            lineHeight: 1.7,
            maxWidth: "540px",
            marginBottom: "36px",
            opacity: 0.9,
          }}
        >
          I am a Full Stack Developer specializing in building modern, interactive, and high-performance web applications using React, Next.js, TypeScript, and Tailwind CSS.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            width: "100%",
          }}
        >
          <a
            href="/resume.pdf"
            download="Sudeesh_Kumar_Resume.pdf"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "var(--accent-gradient)",
              color: "#ffffff",
              fontWeight: 700,
              padding: "14px 28px",
              borderRadius: "100px",
              boxShadow: "var(--shadow-accent)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 12px 24px rgba(255, 122, 0, 0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "var(--shadow-accent)";
            }}
          >
            <Download size={18} /> Download CV
          </a>
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "var(--bg-secondary)",
              border: "1.5px solid var(--accent-primary)",
              color: "var(--accent-primary)",
              fontWeight: 700,
              padding: "14px 28px",
              borderRadius: "100px",
              boxShadow: "var(--shadow-soft)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--accent-light)";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "var(--shadow-medium)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--bg-secondary)";
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "var(--shadow-soft)";
            }}
          >
            <Mail size={18} /> Contact Me
          </a>
        </div>
      </div>

      {/* Right Column: 3D Male Avatar Image with CSS floating developer badges */}
      <div
        style={{
          flex: 0.9,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "min(500px, 115vw)",
          width: "min(440px, 90vw)",
          position: "relative",
        }}
        className="hero-avatar-container"
      >
        {/* Main 3D Avatar Image */}
        <img
          src="/hero_avatar_man.png"
          alt="Sudeesh Kumar - Developer 3D Avatar"
          style={{
            width: "85%",
            height: "auto",
            objectFit: "contain",
            zIndex: 2,
          }}
        />

        {/* Floating Badge 1: Hi Speech Bubble */}
        <div
          className="floating-badge hi-bubble"
          style={{
            position: "absolute",
            top: "14%",
            left: "-2%",
            background: "linear-gradient(135deg, #e05300 0%, #ff7a00 100%)",
            color: "#ffffff",
            padding: "8px 18px",
            borderRadius: "20px 20px 20px 0px",
            fontWeight: 800,
            fontSize: "14px",
            boxShadow: "0 10px 20px rgba(255, 122, 0, 0.25)",
            zIndex: 3,
          }}
        >
          Hi 👋
        </div>

        {/* Floating Badge 2: React */}
        <div
          className="floating-badge react-badge"
          style={{
            position: "absolute",
            top: "5%",
            right: "12%",
            background: "#e0f2fe",
            color: "#0284c7",
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 10px 15px rgba(2, 132, 199, 0.15)",
            zIndex: 3,
            border: "2px solid #ffffff",
          }}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
            <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(30 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(90 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(150 12 12)" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
          </svg>
        </div>

        {/* Floating Badge 3: JavaScript (JS) */}
        <div
          className="floating-badge js-badge"
          style={{
            position: "absolute",
            top: "32%",
            left: "-8%",
            background: "#fef9c3",
            color: "#a16207",
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 900,
            fontSize: "13px",
            boxShadow: "0 10px 15px rgba(234, 179, 8, 0.2)",
            zIndex: 3,
            border: "2px solid #ffffff",
          }}
        >
          JS
        </div>

        {/* Floating Badge 4: Node.js */}
        <div
          className="floating-badge node-badge"
          style={{
            position: "absolute",
            top: "28%",
            right: "-8%",
            background: "#dcfce7",
            color: "#15803d",
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 10px 15px rgba(21, 128, 61, 0.15)",
            zIndex: 3,
            border: "2px solid #ffffff",
          }}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
            <path d="M12 2.1l7.8 4.5v9l-7.8 4.5-7.8-4.5v-9L12 2.1zm0-2.1L2.6 5.4v13.2L12 24l9.4-5.4V5.4L12 0z"/>
          </svg>
        </div>

        {/* Floating Badge 5: VS Code */}
        <div
          className="floating-badge vscode-badge"
          style={{
            position: "absolute",
            bottom: "22%",
            left: "-4%",
            background: "#e0f2fe",
            color: "#007acc",
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 10px 15px rgba(0, 122, 204, 0.15)",
            zIndex: 3,
            border: "2px solid #ffffff",
          }}
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M23.986 6.567a.514.514 0 00-.181-.366L18.423.824a.526.526 0 00-.737.009l-7.79 7.643-4.526-3.414a.517.517 0 00-.671.047L.178 9.387a.52.52 0 000 .736l3.523 3.522L.178 17.167a.52.52 0 000 .736l4.52 4.279a.517.517 0 00.672.047l4.526-3.414 7.79 7.643c.2.2.527.206.737.01l5.382-5.377a.514.514 0 00.181-.366V6.567zM18.067 12L12 18.067V5.933L18.067 12z"/>
          </svg>
        </div>

        {/* Floating Badge 6: HTML */}
        <div
          className="floating-badge html-badge"
          style={{
            position: "absolute",
            bottom: "24%",
            right: "-4%",
            background: "#ffedd5",
            color: "#ea580c",
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 10px 15px rgba(234, 88, 12, 0.15)",
            zIndex: 3,
            border: "2px solid #ffffff",
          }}
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm15.7 6.2H7.3l.3 3.4h9.3l-.3 3.7-4.6 1.3-4.6-1.3-.3-3H4.1l.6 6.8 7.3 2.4 7.3-2.4 1-10.9H17.2z"/>
          </svg>
        </div>

        {/* Floating Badge 7: Git */}
        <div
          className="floating-badge git-badge"
          style={{
            position: "absolute",
            bottom: "5%",
            left: "10%",
            background: "#fee2e2",
            color: "#dc2626",
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 10px 15px rgba(220, 38, 38, 0.15)",
            zIndex: 3,
            border: "2px solid #ffffff",
          }}
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="18" r="3" />
            <circle cx="6" cy="6" r="3" />
            <circle cx="6" cy="18" r="3" />
            <path d="M6 9v6" />
            <path d="M9 15l-3-3" />
            <path d="M12 12a9 9 0 0 0-6-6" />
          </svg>
        </div>

        {/* Floating Badge 8: GitHub */}
        <div
          className="floating-badge github-badge"
          style={{
            position: "absolute",
            bottom: "5%",
            right: "12%",
            background: "#f3f4f6",
            color: "#1f2937",
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 10px 15px rgba(31, 41, 55, 0.15)",
            zIndex: 3,
            border: "2px solid #ffffff",
          }}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
          </svg>
        </div>

        {/* Floating Badge 9: Antigravity */}
        <div
          className="floating-badge antigravity-badge"
          style={{
            position: "absolute",
            top: "-5%",
            left: "44%",
            background: "var(--accent-light)",
            color: "var(--accent-primary)",
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "var(--shadow-accent)",
            zIndex: 3,
            border: "2.5px solid var(--accent-primary)",
          }}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <circle cx="12" cy="12" r="10" strokeDasharray="4 3" />
            <path d="M12 7v10M8 11l4-4 4 4" />
          </svg>
        </div>

        {/* Floating Badge 10: Express */}
        <div
          className="floating-badge express-badge"
          style={{
            position: "absolute",
            top: "52%",
            right: "5%",
            background: "#f3f4f6",
            color: "#1f2937",
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 800,
            fontSize: "12px",
            boxShadow: "0 10px 15px rgba(0, 0, 0, 0.08)",
            zIndex: 3,
            border: "2px solid #ffffff",
          }}
        >
          ex
        </div>
      </div>

      {/* CSS Styles for Floating Badge animations */}
      <style>{`
        @keyframes float-badge-up {
          0% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0); }
        }
        @keyframes float-badge-down {
          0% { transform: translateY(0); }
          50% { transform: translateY(8px); }
          100% { transform: translateY(0); }
        }
        .hi-bubble {
          animation: float-badge-up 4s ease-in-out infinite;
        }
        .react-badge {
          animation: float-badge-down 4.8s ease-in-out 0.5s infinite;
        }
        .js-badge {
          animation: float-badge-up 3.8s ease-in-out 0.2s infinite;
        }
        .node-badge {
          animation: float-badge-down 5.2s ease-in-out 0.8s infinite;
        }
        .vscode-badge {
          animation: float-badge-up 4.2s ease-in-out 0.3s infinite;
        }
        .html-badge {
          animation: float-badge-down 4.6s ease-in-out 0.6s infinite;
        }
        .git-badge {
          animation: float-badge-up 5s ease-in-out 0.1s infinite;
        }
        .github-badge {
          animation: float-badge-down 4.4s ease-in-out 0.4s infinite;
        }
        .antigravity-badge {
          animation: float-badge-up 5.5s ease-in-out 0.7s infinite;
        }
        .express-badge {
          animation: float-badge-down 3.9s ease-in-out 0.9s infinite;
        }

        @media (max-width: 991px) {
          #home {
            flex-direction: column;
            text-align: center;
            justify-content: center;
            padding-top: 130px;
            gap: 40px;
          }
          #home > div {
            align-items: center !important;
            text-align: center !important;
          }
          .socials-container {
            justify-content: center;
            width: 100%;
          }
          .hero-avatar-container {
            height: 380px !important;
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};
