"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { personalInfo, skills, marqueeItems } from "@/lib/data";
import { MapPin, Mail, Phone, Code2 } from "lucide-react";

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

const CAREER_START = new Date("2026-01-01");

function useExperience() {
  const [label, setLabel] = useState("");
  const [months, setMonths] = useState(0);

  useEffect(() => {
    function calc() {
      const now = new Date();
      const diff = now.getTime() - CAREER_START.getTime();
      const totalMonths = Math.max(
        0,
        Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44)),
      );
      setMonths(totalMonths);

      if (totalMonths < 1) setLabel("< 1 Month");
      else if (totalMonths === 1) setLabel("1 Month");
      else if (totalMonths < 12) setLabel(`${totalMonths} Months`);
      else {
        const yrs = Math.floor(totalMonths / 12);
        const rem = totalMonths % 12;
        setLabel(rem > 0 ? `${yrs} Year ${rem} Month` : `${yrs} Year`);
      }
    }
    calc();
    const id = setInterval(calc, 1000 * 60 * 60 * 24);
    return () => clearInterval(id);
  }, []);

  return { label, months };
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "16px",
      }}
    >
      <div
        style={{
          width: 20,
          height: 1.5,
          background: "var(--accent)",
          flexShrink: 0,
        }}
      />
      <span
        style={{
          ...B,
          fontSize: "10px",
          color: "var(--accent)",
          letterSpacing: ".18em",
          textTransform: "uppercase",
          fontWeight: 600,
        }}
      >
        {children}
      </span>
    </div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { label: expLabel, months } = useExperience();

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, delay },
  });

  const expDisplay = expLabel || "...";
  const expSublabel = months < 12 ? "Experience" : "Yr Experience";

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: "clamp(64px,9vw,112px) clamp(16px,4vw,24px)",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "-180px",
          top: "40%",
          width: 440,
          height: 440,
          background:
            "radial-gradient(circle,rgba(108,99,255,.06) 0%,transparent 70%)",
          pointerEvents: "none",
          transform: "translateY(-50%)",
        }}
      />

      <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,460px),1fr))",
            gap: "clamp(40px,6vw,80px)",
            alignItems: "start",
          }}
        >
          {/* ── Left: Bio ── */}
          <motion.div {...fadeUp(0)}>
            <Label>About Me</Label>
            <h2
              style={{
                ...H,
                fontWeight: 700,
                fontSize: "clamp(30px,5vw,48px)",
                letterSpacing: "-0.025em",
                color: "var(--text)",
                marginBottom: "20px",
              }}
            >
              Building things that{" "}
              <span className="grad" style={{ display: "inline" }}>
                people love to use
              </span>
            </h2>

            <p
              style={{
                ...B,
                color: "var(--muted)",
                lineHeight: 1.8,
                marginBottom: "14px",
                fontSize: "clamp(14px,1.8vw,15px)",
              }}
            >
              {personalInfo.bio}
            </p>
            <p
              style={{
                ...B,
                color: "rgba(238,238,242,.35)",
                lineHeight: 1.8,
                fontSize: "clamp(13px,1.6vw,14px)",
                fontStyle: "italic",
              }}
            >
              {personalInfo.bio2}
            </p>

            {/* Contact info */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginTop: "28px",
              }}
            >
              {[
                { icon: MapPin, text: personalInfo.location },
                { icon: Mail, text: personalInfo.email },
                { icon: Phone, text: personalInfo.phone },
                {
                  icon: Code2,
                  text: "Production experience · MyVyay Botmatic",
                },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "9px",
                      flexShrink: 0,
                      background: "rgba(108,99,255,.1)",
                      border: "1px solid rgba(108,99,255,.22)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon size={14} color="var(--accent)" />
                  </div>
                  <span
                    style={{
                      ...B,
                      color: "var(--muted)",
                      fontSize: "clamp(12px,1.7vw,14px)",
                      wordBreak: "break-all",
                    }}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: "10px",
                marginTop: "32px",
              }}
            >
              {/* Experience — live */}
              <motion.div
                key={expDisplay}
                initial={{ scale: 0.92, opacity: 0.5 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                style={{
                  padding: "16px 10px",
                  textAlign: "center",
                  background: "rgba(255,255,255,.025)",
                  border: "1px solid rgba(255,255,255,.07)",
                  borderRadius: "12px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.15, 0, 0.15] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    margin: "auto",
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "rgba(108,99,255,.2)",
                    pointerEvents: "none",
                  }}
                />
                <div
                  style={{
                    ...H,
                    fontWeight: 700,
                    fontSize: "clamp(18px,3.5vw,26px)",
                    color: "var(--accent)",
                    lineHeight: 1,
                    marginBottom: "5px",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {expDisplay}
                </div>
                <div
                  style={{
                    ...B,
                    fontSize: "11px",
                    color: "var(--dim)",
                    fontWeight: 500,
                    letterSpacing: ".04em",
                  }}
                >
                  {expSublabel}
                </div>
              </motion.div>

              {/* APIs */}
              <div
                style={{
                  padding: "16px 10px",
                  textAlign: "center",
                  background: "rgba(255,255,255,.025)",
                  border: "1px solid rgba(255,255,255,.07)",
                  borderRadius: "12px",
                }}
              >
                <div
                  style={{
                    ...H,
                    fontWeight: 700,
                    fontSize: "clamp(22px,4vw,30px)",
                    color: "var(--accent)",
                    lineHeight: 1,
                    marginBottom: "5px",
                  }}
                >
                  72+
                </div>
                <div
                  style={{
                    ...B,
                    fontSize: "11px",
                    color: "var(--dim)",
                    fontWeight: 500,
                    letterSpacing: ".04em",
                  }}
                >
                  APIs Built
                </div>
              </div>

              {/* Modules */}
              <div
                style={{
                  padding: "16px 10px",
                  textAlign: "center",
                  background: "rgba(255,255,255,.025)",
                  border: "1px solid rgba(255,255,255,.07)",
                  borderRadius: "12px",
                }}
              >
                <div
                  style={{
                    ...H,
                    fontWeight: 700,
                    fontSize: "clamp(22px,4vw,30px)",
                    color: "var(--accent)",
                    lineHeight: 1,
                    marginBottom: "5px",
                  }}
                >
                  2
                </div>
                <div
                  style={{
                    ...B,
                    fontSize: "11px",
                    color: "var(--dim)",
                    fontWeight: 500,
                    letterSpacing: ".04em",
                  }}
                >
                  Projects
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Right: Skills ── */}
          <motion.div {...fadeUp(0.14)}>
            <Label>Tech Stack</Label>
            <h2
              style={{
                ...H,
                fontWeight: 700,
                fontSize: "clamp(26px,4.5vw,40px)",
                letterSpacing: "-0.025em",
                color: "var(--text)",
                marginBottom: "28px",
              }}
            >
              Tools I work with
            </h2>

            {Object.entries(skills).map(([cat, items]) => (
              <div key={cat} style={{ marginBottom: "22px" }}>
                <h3
                  style={{
                    ...B,
                    fontSize: "10px",
                    fontWeight: 600,
                    color: "var(--dim)",
                    letterSpacing: ".18em",
                    textTransform: "uppercase",
                    marginBottom: "10px",
                  }}
                >
                  {cat}
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
                  {items.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="pill"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Marquee strip */}
      <div style={{ marginTop: "72px", overflow: "hidden" }}>
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,.05)",
            borderBottom: "1px solid rgba(255,255,255,.05)",
            padding: "16px 0",
            position: "relative",
          }}
        >
          {(["left", "right"] as const).map((side) => (
            <div
              key={side}
              style={{
                position: "absolute",
                [side]: 0,
                top: 0,
                bottom: 0,
                width: 80,
                zIndex: 1,
                pointerEvents: "none",
                background: `linear-gradient(${side === "left" ? "90deg" : "-90deg"},#060608,transparent)`,
              }}
            />
          ))}
          <div
            className="anim-marquee"
            style={{ display: "flex", gap: "52px", width: "max-content" }}
          >
            {[...marqueeItems, ...marqueeItems].map((t, i) => (
              <span
                key={i}
                style={{
                  ...B,
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "rgba(238,238,242,.18)",
                  whiteSpace: "nowrap",
                  letterSpacing: ".06em",
                }}
              >
                {t}
                <span
                  style={{
                    marginLeft: "52px",
                    color: "var(--accent)",
                    opacity: 0.4,
                  }}
                >
                  ◆
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
