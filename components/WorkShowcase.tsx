"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { education } from "@/lib/data";

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

const works = [
  {
    title: "Zeux LifeSciences Portal",
    category: "E-Commerce · React.js",
    year: "2025",
    color: "#6c63ff",
    tags: ["React.js", "Tailwind CSS", "REST API"],
    size: "large",
    stat: "~35% faster load",
  },
  {
    title: "React Native Mobile App",
    category: "Mobile Development",
    year: "2025",
    color: "#00d4aa",
    tags: ["React Native", "Expo", "Redux"],
    size: "small",
    stat: "Sub-2s screen load",
  },
  {
    title: "RBAC Dashboard",
    category: "Admin Panel",
    year: "2025",
    color: "#ff6b6b",
    tags: ["React.js", "JWT", "MongoDB"],
    size: "small",
    stat: "5+ modules",
  },
  {
    title: "REST API Architecture",
    category: "Backend · Node.js",
    year: "2025",
    color: "#f59e0b",
    tags: ["Node.js", "Express", "Mongoose"],
    size: "large",
    stat: "15+ endpoints",
  },
  {
    title: "Component Library",
    category: "Open Source",
    year: "2025",
    color: "#818cf8",
    tags: ["React.js", "Tailwind CSS"],
    size: "small",
    stat: "25+ components",
  },
  {
    title: "Performance Optimisation",
    category: "Web Perf",
    year: "2025",
    color: "#34d399",
    tags: ["Code Splitting", "Lazy Load"],
    size: "small",
    stat: "~35% improvement",
  },
];

function WorkCell({
  w,
  i,
  inView,
}: {
  w: (typeof works)[0];
  i: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.07 }}
      whileHover={{ scale: 1.02, zIndex: 2 }}
      style={{
        gridColumn: w.size === "large" ? "span 2" : "span 1",
        borderRadius: "18px",
        border: "1px solid rgba(255,255,255,.07)",
        background: "rgba(255,255,255,.02)",
        overflow: "hidden",
        position: "relative",
        cursor: "default",
        transition: "border-color .3s, box-shadow .3s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${w.color}35`;
        e.currentTarget.style.boxShadow = `0 12px 36px ${w.color}12`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,.07)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* bg tint */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(135deg,${w.color}10 0%,transparent 55%)`,
        }}
      />
      {/* grid lines */}
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.25,
        }}
      >
        {[20, 40, 60, 80].map((y) => (
          <line
            key={y}
            x1="0"
            y1={`${y}%`}
            x2="100%"
            y2={`${y}%`}
            stroke={w.color}
            strokeWidth=".5"
          />
        ))}
        {[20, 40, 60, 80].map((x) => (
          <line
            key={x}
            x1={`${x}%`}
            y1="0"
            x2={`${x}%`}
            y2="100%"
            stroke={w.color}
            strokeWidth=".5"
          />
        ))}
      </svg>
      {/* content */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top,rgba(6,6,8,.92) 0%,rgba(6,6,8,.3) 55%,transparent 100%)",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <div style={{ marginBottom: "8px" }}>
          {w.tags.map((t) => (
            <span
              key={t}
              style={{
                ...B,
                display: "inline-block",
                marginRight: "5px",
                marginBottom: "5px",
                fontSize: "9px",
                padding: "2px 7px",
                background: `${w.color}20`,
                border: `1px solid ${w.color}30`,
                borderRadius: "5px",
                color: w.color,
                fontWeight: 600,
                letterSpacing: ".05em",
              }}
            >
              {t}
            </span>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div>
            <h3
              style={{
                ...H,
                fontWeight: 700,
                fontSize:
                  w.size === "large"
                    ? "clamp(15px,2.5vw,18px)"
                    : "clamp(13px,2vw,15px)",
                color: "var(--text)",
                marginBottom: "3px",
                letterSpacing: "-.02em",
              }}
            >
              {w.title}
            </h3>
            <div style={{ ...B, fontSize: "11px", color: "var(--dim)" }}>
              {w.category} · {w.year}
            </div>
            <div
              style={{
                ...B,
                fontSize: "10px",
                color: w.color,
                fontWeight: 600,
                marginTop: "4px",
              }}
            >
              {w.stat}
            </div>
          </div>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              background: `${w.color}20`,
              border: `1px solid ${w.color}40`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <ArrowUpRight size={12} color={w.color} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function WorkShowcase() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      style={{
        padding: "clamp(48px,8vw,96px) clamp(16px,4vw,24px)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "16px",
            marginBottom: "36px",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "12px",
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
                Portfolio
              </span>
            </div>
            <h2
              style={{
                ...H,
                fontWeight: 700,
                fontSize: "clamp(24px,4vw,40px)",
                letterSpacing: "-.025em",
                color: "var(--text)",
              }}
            >
              Selected work
            </h2>
          </div>
          <motion.a
            href="#projects"
            whileHover={{ x: 4 }}
            style={{
              ...B,
              display: "flex",
              alignItems: "center",
              gap: "6px",
              color: "var(--accent)",
              fontSize: "13px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            All projects <ArrowUpRight size={14} />
          </motion.a>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))",
            gridAutoRows: "clamp(140px,20vw,210px)",
            gap: "14px",
          }}
        >
          {works.map((w, i) => (
            <WorkCell key={w.title} w={w} i={i} inView={inView} />
          ))}
        </div>

        {/* Education section */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ marginTop: "64px" }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "28px",
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
              Education
            </span>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(min(100%,320px),1fr))",
              gap: "16px",
            }}
          >
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
                whileHover={{ y: -3 }}
                style={{
                  background: "rgba(255,255,255,.025)",
                  border: "1px solid rgba(255,255,255,.07)",
                  borderRadius: "16px",
                  padding: "clamp(18px,3vw,24px)",
                  transition: "border-color .3s, transform .3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = `${edu.color}38`)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(255,255,255,.07)")
                }
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "10px",
                    marginBottom: "14px",
                    background: `${edu.color}18`,
                    border: `1px solid ${edu.color}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    ...H,
                    fontWeight: 700,
                    fontSize: "14px",
                    color: edu.color,
                  }}
                >
                  🎓
                </div>
                {/* <h3
                  style={{
                    ...H,
                    fontWeight: 700,
                    fontSize: "clamp(14px,2vw,16px)",
                    color: "var(--text)",
                    marginBottom: "5px",
                    letterSpacing: "-.02em",
                  }}
                >
                  {edu.degree}
                </h3>
                <div
                  style={{
                    ...B,
                    fontSize: "12px",
                    color: "var(--dim)",
                    marginBottom: "12px",
                  }}
                >
                  {edu.period}
                </div> */}

                <h3
                  style={{
                    ...H,
                    fontWeight: 700,
                    fontSize: "clamp(14px,2vw,16px)",
                    color: "var(--text)",
                    marginBottom: "3px",
                    letterSpacing: "-.02em",
                  }}
                >
                  {edu.degree}
                </h3>
                <div
                  style={{
                    ...B,
                    fontSize: "11px",
                    color: "var(--accent)",
                    fontWeight: 600,
                    marginBottom: "4px",
                    letterSpacing: ".02em",
                  }}
                >
                  {edu.sub}
                </div>
                <div
                  style={{
                    ...B,
                    fontSize: "12px",
                    color: "var(--dim)",
                    marginBottom: "12px",
                  }}
                >
                  {edu.period}
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {edu.topics.map((t) => (
                    <span
                      key={t}
                      style={{
                        ...B,
                        fontSize: "10px",
                        padding: "3px 9px",
                        background: `${edu.color}12`,
                        border: `1px solid ${edu.color}22`,
                        borderRadius: "6px",
                        color: edu.color,
                        fontWeight: 500,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
