"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  // { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const s = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", s);
    return () => window.removeEventListener("scroll", s);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { threshold: 0.3 },
    );
    document.querySelectorAll("section[id]").forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const r = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", r);
    return () => window.removeEventListener("resize", r);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55 }}
        style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}
      >
        <div
          style={{
            margin: scrolled ? "10px 14px" : "16px 20px",
            borderRadius: "15px",
            background: scrolled ? "rgba(6,6,8,.9)" : "transparent",
            backdropFilter: scrolled ? "blur(20px)" : "none",
            border: scrolled ? "1px solid rgba(255,255,255,.08)" : "none",
            transition: "all .35s ease",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "12px 18px",
            }}
          >
            {/* Logo */}
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
                  flexShrink: 0,
                }}
              >
                Y
              </span>
              Yash Chalke
            </a>

            {/* Desktop */}
            <div className="desk" style={{ alignItems: "center", gap: "4px" }}>
              {links.map((l) => {
                const on = active === l.href.slice(1);
                return (
                  <a
                    key={l.label}
                    href={l.href}
                    style={{
                      ...B,
                      color: on ? "var(--accent)" : "rgba(238,238,242,.55)",
                      textDecoration: "none",
                      fontSize: "13px",
                      fontWeight: 500,
                      padding: "8px 13px",
                      borderRadius: "10px",
                      background: on ? "rgba(108,99,255,.1)" : "transparent",
                      transition: "all .2s ease",
                    }}
                    onMouseEnter={(e) => {
                      if (!on) {
                        (e.currentTarget as HTMLElement).style.color =
                          "var(--text)";
                        (e.currentTarget as HTMLElement).style.background =
                          "rgba(255,255,255,.05)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!on) {
                        (e.currentTarget as HTMLElement).style.color =
                          "rgba(238,238,242,.55)";
                        (e.currentTarget as HTMLElement).style.background =
                          "transparent";
                      }
                    }}
                  >
                    {l.label}
                  </a>
                );
              })}
              <a
                href="#contact"
                style={{
                  ...H,
                  marginLeft: "6px",
                  padding: "9px 17px",
                  background: "linear-gradient(135deg,#6c63ff,#7c6ffc)",
                  color: "#fff",
                  textDecoration: "none",
                  borderRadius: "11px",
                  fontSize: "13px",
                  fontWeight: 700,
                  boxShadow: "0 3px 18px rgba(108,99,255,.32)",
                  transition: "all .3s ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(-2px)";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 8px 28px rgba(108,99,255,.5)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 3px 18px rgba(108,99,255,.32)";
                }}
              >
                CONTACT ME
              </a>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              aria-label="Menu"
              className="mob"
              style={{
                background: "rgba(255,255,255,.05)",
                border: "1px solid rgba(255,255,255,.1)",
                borderRadius: "10px",
                padding: "8px",
                color: "var(--text)",
                cursor: "pointer",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {open ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            style={{
              position: "fixed",
              top: "78px",
              left: "10px",
              right: "10px",
              background: "rgba(10,10,16,.97)",
              backdropFilter: "blur(24px)",
              border: "1px solid rgba(255,255,255,.09)",
              borderRadius: "18px",
              padding: "14px",
              zIndex: 99,
            }}
          >
            {links.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setOpen(false)}
                style={{
                  ...H,
                  display: "block",
                  color: "rgba(238,238,242,.85)",
                  textDecoration: "none",
                  padding: "12px 14px",
                  borderRadius: "11px",
                  fontSize: "16px",
                  fontWeight: 600,
                  marginBottom: "3px",
                  transition: "background .2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(108,99,255,.1)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
              >
                {l.label}
              </motion.a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              style={{
                ...H,
                display: "block",
                textAlign: "center",
                marginTop: "8px",
                padding: "13px",
                background: "linear-gradient(135deg,#6c63ff,#7c6ffc)",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "11px",
                fontSize: "15px",
                fontWeight: 700,
              }}
            >
              CONTACT ME
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
