import React, { useState, useEffect, useRef } from "react";
import { Mail, Check, Copy, Send, Loader2 } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Contact: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        ".contact-avatar-container",
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" },
      ).fromTo(
        ".contact-grid > div:last-child",
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.6",
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const emailAddress = "sude8920esh@gmail.com";

  // Web3Forms Access Key loaded from environment
  const WEB3FORMS_ACCESS_KEY =
    (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string) ||
    "YOUR_ACCESS_KEY_HERE";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    if (
      WEB3FORMS_ACCESS_KEY === "YOUR_ACCESS_KEY_HERE" ||
      !WEB3FORMS_ACCESS_KEY
    ) {
      console.warn(
        "Web3Forms Access Key is not configured. Simulating successful form submission.",
      );
      setTimeout(() => {
        setSubmitting(false);
        setSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
        setTimeout(() => setSubmitted(false), 4000);
      }, 1200);
      return;
    }

    // Submit payload to Web3Forms API
    const formDataObj = new FormData();
    formDataObj.append("access_key", WEB3FORMS_ACCESS_KEY);
    formDataObj.append(
      "from_name",
      `${formData.firstName} ${formData.lastName} (via Website)`,
    );
    formDataObj.append(
      "subject",
      `A new person is trying to hire or contact you through your website!`,
    );
    formDataObj.append("replyto", formData.email);

    // Custom formatted fields for structured display in your email body
    formDataObj.append(
      "Notice",
      "A new person is trying to hire you or talk with you through your website.",
    );
    formDataObj.append(
      "Sender Name",
      `${formData.firstName} ${formData.lastName}`,
    );
    formDataObj.append("Sender Email", formData.email);
    formDataObj.append("Phone Number", formData.phone || "Not provided");
    formDataObj.append("Message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj,
      });
      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert("Form submission failed: " + data.message);
      }
    } catch (error: any) {
      console.error("Error submitting form:", error);
      alert("An error occurred during submission. Please try again.");
    } finally {
      setSubmitting(false);
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      style={{
        paddingTop: "80px",
        paddingBottom: "40px",
      }}
      className="section"
    >
      {/* Redesigned grid container matching mockup */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.3fr",
          gap: "60px",
          alignItems: "center",
        }}
        className="contact-grid"
      >
        {/* Left Column: 3D Male Contact Avatar & Quick Info */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              height: "min(400px, 100vw)",
              width: "100%",
              position: "relative",
              marginBottom: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="contact-avatar-container"
          >
            {/* Main 3D Avatar Image */}
            <img
              src="/contact_avatar_man.png"
              alt="Sudeesh Kumar - Contact 3D Avatar"
              loading="lazy"
              style={{
                width: "85%",
                height: "auto",
                objectFit: "contain",
                zIndex: 2,
              }}
            />

            {/* Floating Mail Envelope Badge with Notification Badge */}
            <div
              className="floating-badge mail-badge-contact"
              style={{
                position: "absolute",
                top: "15%",
                right: "15%",
                background: "#ffffff",
                border: "2px solid var(--accent-primary)",
                padding: "10px",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "var(--shadow-accent)",
                zIndex: 3,
              }}
            >
              <Mail size={22} color="var(--accent-primary)" />
              {/* Notification Bubble "1" */}
              <span
                style={{
                  position: "absolute",
                  top: "-8px",
                  right: "-8px",
                  background: "#ef4444",
                  color: "#ffffff",
                  borderRadius: "50%",
                  width: "18px",
                  height: "18px",
                  fontSize: "10px",
                  fontWeight: 900,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 5px rgba(239, 68, 68, 0.4)",
                }}
              >
                1
              </span>
            </div>
          </div>

          {/* Direct Email Copy Card */}
          <div
            className="glass-panel"
            style={{
              width: "100%",
              maxWidth: "360px",
              padding: "16px 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "15px",
              border: "1.5px solid var(--border-color)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  background: "var(--accent-light)",
                  padding: "8px",
                  borderRadius: "8px",
                  display: "flex",
                  color: "var(--accent-primary)",
                }}
              >
                <Mail size={16} />
              </div>
              <div style={{ textAlign: "left" }}>
                <h4
                  style={{
                    fontSize: "11px",
                    color: "var(--text-muted)",
                    fontWeight: 600,
                    textTransform: "uppercase",
                  }}
                >
                  Email
                </h4>
                <p
                  style={{
                    fontSize: "13.5px",
                    fontWeight: 700,
                    color: "var(--text-highlight)",
                  }}
                >
                  {emailAddress}
                </p>
              </div>
            </div>
            <button
              onClick={handleCopyEmail}
              style={{
                background: "var(--bg-tertiary)",
                border: "none",
                borderRadius: "6px",
                padding: "6px",
                color: "var(--text-highlight)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--accent-primary)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-highlight)")
              }
            >
              {copied ? (
                <Check size={14} color="#10b981" />
              ) : (
                <Copy size={14} />
              )}
            </button>
          </div>
        </div>

        {/* Right Column: Contact Form Panel */}
        <div
          className="glass-panel contact-form-panel"
          style={{
            padding: "40px",
            border: "1.5px solid var(--border-color)",
            width: "100%",
          }}
        >
          <div style={{ textAlign: "left", marginBottom: "32px" }}>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 36px)",
                fontWeight: 900,
                marginBottom: "8px",
                fontFamily: "var(--font-heading)",
              }}
            >
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p
              style={{
                color: "var(--text-main)",
                opacity: 0.8,
                fontSize: "15px",
              }}
            >
              Let's discuss your project
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              textAlign: "left",
            }}
          >
            {/* First Name & Last Name Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
              }}
              className="form-row-2col"
            >
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "var(--text-muted)",
                    marginBottom: "6px",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  First Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  placeholder="John"
                  style={{
                    width: "100%",
                    background: "var(--bg-tertiary)",
                    border: "1.5px solid var(--border-color)",
                    borderRadius: "10px",
                    padding: "12px 16px",
                    color: "var(--text-highlight)",
                    fontSize: "14px",
                    outline: "none",
                    transition: "all 0.3s ease",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "var(--accent-primary)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "var(--border-color)")
                  }
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "var(--text-muted)",
                    marginBottom: "6px",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  Last Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  placeholder="Doe"
                  style={{
                    width: "100%",
                    background: "var(--bg-tertiary)",
                    border: "1.5px solid var(--border-color)",
                    borderRadius: "10px",
                    padding: "12px 16px",
                    color: "var(--text-highlight)",
                    fontSize: "14px",
                    outline: "none",
                    transition: "all 0.3s ease",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "var(--accent-primary)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "var(--border-color)")
                  }
                />
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "var(--text-muted)",
                  marginBottom: "6px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                Email Address
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="john@example.com"
                style={{
                  width: "100%",
                  background: "var(--bg-tertiary)",
                  border: "1.5px solid var(--border-color)",
                  borderRadius: "10px",
                  padding: "12px 16px",
                  color: "var(--text-highlight)",
                  fontSize: "14px",
                  outline: "none",
                  transition: "all 0.3s ease",
                }}
                onFocus={(e) =>
                  (e.target.style.borderColor = "var(--accent-primary)")
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = "var(--border-color)")
                }
              />
            </div>

            {/* Phone Number */}
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "var(--text-muted)",
                  marginBottom: "6px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                Phone Number
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                placeholder="+1 (555) 000-0000"
                style={{
                  width: "100%",
                  background: "var(--bg-tertiary)",
                  border: "1.5px solid var(--border-color)",
                  borderRadius: "10px",
                  padding: "12px 16px",
                  color: "var(--text-highlight)",
                  fontSize: "14px",
                  outline: "none",
                  transition: "all 0.3s ease",
                }}
                onFocus={(e) =>
                  (e.target.style.borderColor = "var(--accent-primary)")
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = "var(--border-color)")
                }
              />
            </div>

            {/* Your Message */}
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "var(--text-muted)",
                  marginBottom: "6px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                Your Message
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Type your message here..."
                style={{
                  width: "100%",
                  background: "var(--bg-tertiary)",
                  border: "1.5px solid var(--border-color)",
                  borderRadius: "10px",
                  padding: "12px 16px",
                  color: "var(--text-highlight)",
                  fontSize: "14px",
                  outline: "none",
                  resize: "vertical",
                  transition: "all 0.3s ease",
                }}
                onFocus={(e) =>
                  (e.target.style.borderColor = "var(--accent-primary)")
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = "var(--border-color)")
                }
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitting}
              style={{
                background: "var(--accent-gradient)",
                color: "#ffffff",
                border: "none",
                borderRadius: "100px",
                padding: "16px",
                fontSize: "15px",
                fontWeight: 700,
                cursor: "pointer",
                textAlign: "center",
                transition: "all 0.3s ease",
                boxShadow: "var(--shadow-accent)",
                marginTop: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
              onMouseEnter={(e) => {
                if (!submitting) {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 24px rgba(255, 122, 0, 0.35)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "var(--shadow-accent)";
              }}
            >
              {submitting ? (
                <>
                  <Loader2 className="animate-spin" size={18} /> Submitting...
                </>
              ) : (
                <>
                  Send Message <Send size={16} />
                </>
              )}
            </button>

            {submitted && (
              <p
                style={{
                  color: "#10b981",
                  fontSize: "14px",
                  fontWeight: 700,
                  textAlign: "center",
                  marginTop: "10px",
                }}
              >
                Thank you! Your message has been sent successfully.
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Responsive adjustments */}
      <style>{`
        @keyframes float-badge-contact {
          0% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
          100% { transform: translateY(0); }
        }
        .mail-badge-contact {
          animation: float-badge-contact 4.8s ease-in-out infinite;
        }
        
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @media (max-width: 850px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .contact-avatar-container {
            height: 340px !important;
          }
          .contact-form-panel {
            padding: 30px 24px !important;
          }
        }
        @media (max-width: 500px) {
          .form-row-2col {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
};
