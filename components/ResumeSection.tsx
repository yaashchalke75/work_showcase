"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { personalInfo } from "@/lib/data";
import { FileText, Download, X, Maximize2, ChevronRight } from "lucide-react";

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

export default function ResumeSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [open, setOpen] = useState(false);

  return (
    <>
      <section
        ref={ref}
        style={{ padding: "clamp(48px,7vw,88px) clamp(16px,4vw,24px)" }}
      >
        <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "24px",
              background: "rgba(255,255,255,.025)",
              border: "1px solid rgba(255,255,255,.08)",
              borderRadius: "20px",
              padding: "clamp(24px,4vw,40px)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Background shimmer */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                opacity: 0.4,
                background:
                  "linear-gradient(135deg,rgba(108,99,255,.06) 0%,transparent 50%,rgba(0,212,170,.04) 100%)",
              }}
            />
            <div
              className="shimmer"
              style={{ position: "absolute", inset: 0 }}
            />

            <div style={{ position: "relative", zIndex: 1 }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "14px",
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
                  Resume
                </span>
              </div>
              <h2
                style={{
                  ...H,
                  fontWeight: 700,
                  fontSize: "clamp(22px,4vw,36px)",
                  color: "var(--text)",
                  letterSpacing: "-.025em",
                  marginBottom: "10px",
                }}
              >
                My Full Resume
              </h2>
              <p
                style={{
                  ...B,
                  color: "var(--muted)",
                  fontSize: "clamp(12px,1.8vw,14px)",
                  lineHeight: 1.7,
                  maxWidth: "420px",
                }}
              >
                View or download my complete resume covering experience, skills,
                education, and projects.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                position: "relative",
                zIndex: 1,
              }}
            >
              <motion.button
                onClick={() => setOpen(true)}
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 8px 32px rgba(108,99,255,.4)",
                }}
                whileTap={{ scale: 0.96 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "13px 24px",
                  background: "linear-gradient(135deg,#6c63ff,#8b5cf6)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "12px",
                  ...H,
                  fontSize: "14px",
                  fontWeight: 700,
                  cursor: "pointer",
                  boxShadow: "0 4px 20px rgba(108,99,255,.35)",
                }}
              >
                <FileText size={15} /> View Resume
              </motion.button>
              <motion.a
                href={personalInfo.resumeUrl}
                download="Yash_Chalke_Resume.pdf"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "13px 22px",
                  background: "rgba(0,212,170,.1)",
                  border: "1px solid rgba(0,212,170,.3)",
                  color: "#00d4aa",
                  textDecoration: "none",
                  borderRadius: "12px",
                  ...B,
                  fontSize: "13px",
                  fontWeight: 600,
                }}
              >
                <Download size={14} /> Download
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Modal viewer ── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,.85)",
                backdropFilter: "blur(8px)",
                zIndex: 999,
              }}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 32 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 32 }}
              transition={{ duration: 0.3 }}
              style={{
                position: "fixed",
                inset: "20px",
                zIndex: 1000,
                background: "#0c0c10",
                border: "1px solid rgba(255,255,255,.1)",
                borderRadius: "20px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Modal header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "16px 20px",
                  borderBottom: "1px solid rgba(255,255,255,.08)",
                  background: "rgba(255,255,255,.02)",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "8px",
                      background: "rgba(108,99,255,.15)",
                      border: "1px solid rgba(108,99,255,.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FileText size={15} color="var(--accent)" />
                  </div>
                  <div>
                    <div
                      style={{
                        ...H,
                        fontWeight: 700,
                        fontSize: "14px",
                        color: "var(--text)",
                      }}
                    >
                      Yash Chalke — Resume
                    </div>
                    <div
                      style={{ ...B, fontSize: "11px", color: "var(--dim)" }}
                    >
                      Full-Stack Developer
                    </div>
                  </div>
                </div>
                <div
                  style={{ display: "flex", gap: "8px", alignItems: "center" }}
                >
                  <motion.a
                    href={personalInfo.resumeUrl}
                    download="Yash_Chalke_Resume.pdf"
                    whileHover={{ scale: 1.06 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "8px 14px",
                      background: "rgba(0,212,170,.1)",
                      border: "1px solid rgba(0,212,170,.3)",
                      color: "#00d4aa",
                      textDecoration: "none",
                      borderRadius: "9px",
                      ...B,
                      fontSize: "12px",
                      fontWeight: 600,
                    }}
                  >
                    <Download size={12} /> Download
                  </motion.a>
                  <motion.button
                    onClick={() => setOpen(false)}
                    whileHover={{ scale: 1.08 }}
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "9px",
                      background: "rgba(255,107,107,.1)",
                      border: "1px solid rgba(255,107,107,.25)",
                      color: "#ff6b6b",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <X size={16} />
                  </motion.button>
                </div>
              </div>

              {/* PDF iframe */}
              <div style={{ flex: 1, overflow: "hidden" }}>
                <iframe
                  src={`${personalInfo.resumeUrl}#view=FitH`}
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    background: "#fff",
                  }}
                  title="Yash Chalke Resume"
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
