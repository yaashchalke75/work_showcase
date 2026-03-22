"use client";
import {
  motion,
  useScroll,
  useTransform,
  type Variants,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Download,
  FileText,
} from "lucide-react";
import { personalInfo } from "@/lib/data";
import { useRef, useState, useEffect } from "react";

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

/* Floating particle */
function Particle({
  delay,
  x,
  y,
  size,
}: {
  delay: number;
  x: string;
  y: string;
  size: number;
}) {
  return (
    <motion.div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: size,
        height: size,
        borderRadius: "50%",
        background: "rgba(108,99,255,.5)",
        pointerEvents: "none",
      }}
      animate={{ y: [0, -30, 0], opacity: [0, 0.6, 0], scale: [0, 1, 0] }}
      transition={{
        duration: 3 + delay,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

/* Animated typewriter role switcher */
function RoleBadge() {
  const roles = personalInfo.roles;
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const t = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % roles.length);
        setVisible(true);
      }, 350);
    }, 2400);
    return () => clearInterval(t);
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "8px",
        justifyContent: "center",
        margin: "16px 0 20px",
      }}
    >
      {roles.map((r, i) => (
        <motion.span
          key={r}
          initial={{ opacity: 0, scale: 0.9, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.6 + i * 0.1 }}
          style={{
            ...B,
            fontSize: "12px",
            padding: "5px 14px",
            background:
              i === idx ? "rgba(108,99,255,.18)" : "rgba(255,255,255,.04)",
            border:
              i === idx
                ? "1px solid rgba(108,99,255,.45)"
                : "1px solid rgba(255,255,255,.1)",
            borderRadius: "100px",
            color: i === idx ? "#a78bfa" : "var(--muted)",
            fontWeight: 500,
            transition: "all .4s ease",
            boxShadow: i === idx ? "0 0 14px rgba(108,99,255,.2)" : "none",
          }}
        >
          {r}
        </motion.span>
      ))}
    </div>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  const wrap: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const particles = [
    { delay: 0.3, x: "8%", y: "25%", size: 4 },
    { delay: 0.9, x: "88%", y: "18%", size: 3 },
    { delay: 1.5, x: "15%", y: "72%", size: 5 },
    { delay: 2.1, x: "78%", y: "65%", size: 3 },
    { delay: 0.6, x: "52%", y: "12%", size: 4 },
    { delay: 1.8, x: "92%", y: "48%", size: 3 },
    { delay: 1.2, x: "5%", y: "50%", size: 4 },
    { delay: 2.4, x: "65%", y: "80%", size: 3 },
  ];

  return (
    <section
      ref={ref}
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "100px 20px 60px",
      }}
    >
      {/* ── Background layers ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        {/* Grid */}
        <div
          className="bg-grid"
          style={{ position: "absolute", inset: 0, opacity: 0.4 }}
        />

        {/* Main glow */}
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.22, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: "-20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "min(720px,110vw)",
            height: "560px",
            background:
              "radial-gradient(ellipse,rgba(108,99,255,.22) 0%,transparent 68%)",
          }}
        />

        {/* Secondary orbs */}
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            bottom: "-5%",
            right: "-8%",
            width: "min(400px,65vw)",
            height: "min(400px,65vw)",
            background:
              "radial-gradient(ellipse,rgba(0,212,170,.07) 0%,transparent 70%)",
          }}
        />
        <motion.div
          animate={{ x: [0, -15, 0], y: [0, 20, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          style={{
            position: "absolute",
            top: "30%",
            left: "-10%",
            width: "min(320px,55vw)",
            height: "min(320px,55vw)",
            background:
              "radial-gradient(ellipse,rgba(255,107,107,.06) 0%,transparent 70%)",
          }}
        />

        {/* Floating particles */}
        {particles.map((p, i) => (
          <Particle key={i} {...p} />
        ))}

        {/* Animated rings */}
        {[160, 240, 320].map((r, i) => (
          <motion.div
            key={r}
            animate={{ rotate: 360 * (i % 2 === 0 ? 1 : -1) }}
            transition={{
              duration: 20 + i * 8,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: r,
              height: r,
              marginLeft: -r / 2,
              marginTop: -r / 2,
              borderRadius: "50%",
              border: `1px solid rgba(108,99,255,${0.04 - i * 0.01})`,
              pointerEvents: "none",
            }}
          />
        ))}
      </div>

      {/* ── Content ── */}
      <motion.div
        style={{
          y,
          opacity,
          position: "relative",
          zIndex: 1,
          maxWidth: "820px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
        variants={wrap}
        initial="hidden"
        animate="visible"
      >
        {/* Status pill */}
        <motion.div variants={item}>
          <motion.span
            whileHover={{ scale: 1.04 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(108,99,255,.1)",
              border: "1px solid rgba(108,99,255,.3)",
              borderRadius: "100px",
              padding: "7px 18px",
              marginBottom: "28px",
              cursor: "default",
            }}
          >
            <motion.span
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#00d4aa",
                boxShadow: "0 0 10px #00d4aa",
                flexShrink: 0,
                display: "block",
              }}
            />
            <span
              style={{
                ...B,
                fontSize: "12px",
                color: "rgba(238,238,242,.75)",
                fontWeight: 500,
              }}
            >
              {personalInfo.availability}
            </span>
          </motion.span>
        </motion.div>

        {/* Name */}
        <motion.div variants={item} style={{ marginBottom: "4px" }}>
          <motion.h1
            style={{
              ...H,
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "-0.03em",
              fontSize: "clamp(44px,11vw,96px)",
              color: "var(--text)",
              margin: 0,
            }}
          >
            {personalInfo.name.split("").map((ch, i) => (
              <motion.span
                key={i}
                style={{ display: "inline-block" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.03, duration: 0.4 }}
              >
                {ch === " " ? "\u00A0" : ch}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>

        {/* Gradient title */}
        <motion.div variants={item} style={{ marginBottom: "4px" }}>
          <h2
            className="grad-tri anim-grad"
            style={{
              ...H,
              fontWeight: 700,
              fontSize: "clamp(24px,7vw,62px)",
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            {personalInfo.title}
          </h2>
        </motion.div>

        {/* Role pills */}
        <motion.div variants={item} style={{ width: "100%" }}>
          <RoleBadge />
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={item}
          style={{
            ...B,
            fontSize: "clamp(14px,2.2vw,17px)",
            color: "var(--muted)",
            maxWidth: "500px",
            lineHeight: 1.75,
            fontWeight: 300,
            margin: "0 0 36px",
          }}
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "36px",
          }}
        >
          <motion.a
            href="#projects"
            whileHover={{
              scale: 1.04,
              boxShadow: "0 10px 40px rgba(108,99,255,.55)",
            }}
            whileTap={{ scale: 0.96 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "13px 28px",
              background: "linear-gradient(135deg,#6c63ff 0%,#8b5cf6 100%)",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "12px",
              ...H,
              fontSize: "14px",
              fontWeight: 700,
              boxShadow: "0 4px 24px rgba(108,99,255,.4)",
            }}
          >
            View My Work <ArrowDown size={14} />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04, background: "rgba(255,255,255,.08)" }}
            whileTap={{ scale: 0.96 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "13px 28px",
              background: "rgba(255,255,255,.05)",
              border: "1px solid rgba(255,255,255,.12)",
              color: "var(--text)",
              textDecoration: "none",
              borderRadius: "12px",
              ...H,
              fontSize: "14px",
              fontWeight: 700,
            }}
          >
            Let's Talk
          </motion.a>
          {/* Resume button */}
          <motion.a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.04,
              boxShadow: "0 6px 24px rgba(0,212,170,.25)",
            }}
            whileTap={{ scale: 0.96 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "13px 22px",
              background: "rgba(0,212,170,.08)",
              border: "1px solid rgba(0,212,170,.3)",
              color: "#00d4aa",
              textDecoration: "none",
              borderRadius: "12px",
              ...B,
              fontSize: "13px",
              fontWeight: 600,
            }}
          >
            <FileText size={14} /> Resume
          </motion.a>
        </motion.div>

        {/* Social row */}
        <motion.div
          variants={item}
          style={{ display: "flex", gap: "18px", justifyContent: "center" }}
        >
          {[
            { icon: Github, href: personalInfo.github, label: "GitHub" },
            { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
            {
              icon: Mail,
              href: `mailto:${personalInfo.email}`,
              label: "Email",
            },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.15 }}
              style={{
                width: 38,
                height: 38,
                borderRadius: "10px",
                background: "rgba(255,255,255,.04)",
                border: "1px solid rgba(255,255,255,.09)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(238,238,242,.4)",
                transition: "color .2s, border-color .2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(108,99,255,.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color =
                  "rgba(238,238,242,.4)";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(255,255,255,.09)";
              }}
            >
              <Icon size={16} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          variants={item}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{
            marginTop: "60px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <span
            style={{
              ...B,
              fontSize: "10px",
              letterSpacing: ".15em",
              textTransform: "uppercase",
              color: "var(--dim)",
            }}
          >
            scroll
          </span>
          <div
            style={{
              width: 1,
              height: 32,
              background:
                "linear-gradient(180deg,rgba(108,99,255,.5) 0%,transparent 100%)",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
