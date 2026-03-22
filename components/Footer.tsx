"use client";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { Github, Linkedin, Heart, Mail } from "lucide-react";

const H: React.CSSProperties = {
  fontFamily: "var(--font-head)",
  fontSynthesis: "none",
  fontStretch: "normal",
  fontStyle: "normal",
};
const B: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSynthesis: "none",
  fontStretch: "normal",
  fontStyle: "normal",
};

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,.06)",
        padding: "40px clamp(16px,4vw,24px) 28px",
      }}
    >
      <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
            marginBottom: "32px",
          }}
        >
          <a
            href="#"
            style={{
              ...H,
              fontWeight: 700,
              fontSize: "17px",
              color: "var(--text)",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span
              style={{
                width: 26,
                height: 26,
                background: "linear-gradient(135deg,#6c63ff,#ff6b6b)",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
                fontWeight: 700,
                color: "#fff",
              }}
            >
              Y
            </span>
            Yash Chalke
          </a>
          <nav style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                style={{
                  ...B,
                  color: "var(--dim)",
                  textDecoration: "none",
                  fontSize: "13px",
                  padding: "7px 12px",
                  borderRadius: "8px",
                  transition: "color .2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--text)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--dim)")
                }
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div style={{ display: "flex", gap: "14px" }}>
            {[
              { icon: Github, href: personalInfo.github },
              { icon: Linkedin, href: personalInfo.linkedin },
              { icon: Mail, href: `mailto:${personalInfo.email}` },
            ].map(({ icon: Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: "var(--accent)" }}
                style={{ color: "rgba(238,238,242,.25)", display: "flex" }}
              >
                <Icon size={17} />
              </motion.a>
            ))}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "10px",
            paddingTop: "20px",
            borderTop: "1px solid rgba(255,255,255,.04)",
          }}
        >
          <span
            style={{ ...B, color: "rgba(238,238,242,.22)", fontSize: "12px" }}
          >
            © {year} Yash Chalke. All rights reserved.
          </span>
          {/* <span
            style={{
              ...B,
              color: "rgba(238,238,242,.22)",
              fontSize: "12px",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            Built with <Heart size={11} color="#ff6b6b" fill="#ff6b6b" /> React
            & Next.js
          </span> */}
        </div>
      </div>
    </footer>
  );
}
