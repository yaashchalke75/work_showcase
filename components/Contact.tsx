"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { personalInfo } from "@/lib/data";
import emailjs from "@emailjs/browser";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowUpRight,
} from "lucide-react";

const EMAILJS_SERVICE_ID = "service_pcgs7lf";
const EMAILJS_TEMPLATE_ID = "template_ywbn93k";
const EMAILJS_PUBLIC_KEY = "6TJj1NbiBJudKGyFy";

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

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSend] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSend(true);
    setError("");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
          title: "Portfolio Contact Form",
          time: new Date().toLocaleString(),
        },
        EMAILJS_PUBLIC_KEY,
      );
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setSend(false);
    }
  };

  const inp: React.CSSProperties = {
    width: "100%",
    background: "rgba(255,255,255,.03)",
    border: "1px solid rgba(255,255,255,.09)",
    borderRadius: "12px",
    padding: "13px 16px",
    color: "var(--text)",
    fontSize: "14px",
    ...B,
    outline: "none",
    display: "block",
    transition: "border-color .2s, box-shadow .2s",
  };

  const socials = [
    {
      icon: Github,
      label: "GitHub",
      href: personalInfo.github,
      sub: "github.com/yashchalke",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: personalInfo.linkedin,
      sub: "linkedin.com/in/yashchalke",
    },
    {
      icon: Mail,
      label: "Email",
      href: `mailto:${personalInfo.email}`,
      sub: personalInfo.email,
    },
    {
      icon: Phone,
      label: "Phone",
      href: `tel:${personalInfo.phone}`,
      sub: personalInfo.phone,
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding:
          "clamp(64px,9vw,112px) clamp(16px,4vw,24px) clamp(80px,10vw,140px)",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: "10%",
          transform: "translateX(-50%)",
          width: "min(600px,90vw)",
          height: 320,
          background:
            "radial-gradient(ellipse,rgba(108,99,255,.07) 0%,transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
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
              Contact
            </span>
          </div>
          <h2
            style={{
              ...H,
              fontWeight: 700,
              fontSize: "clamp(26px,5vw,48px)",
              letterSpacing: "-.025em",
              color: "var(--text)",
              marginBottom: "16px",
            }}
          >
            Let's build something{" "}
            <span className="grad" style={{ display: "inline" }}>
              great together
            </span>
          </h2>
          <p
            style={{
              ...B,
              color: "var(--muted)",
              maxWidth: "440px",
              margin: "0 auto",
              lineHeight: 1.75,
              fontSize: "clamp(13px,1.8vw,15px)",
            }}
          >
            Let's Work Together.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,360px),1fr))",
            gap: "40px",
            alignItems: "start",
          }}
        >
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div
              style={{
                background: "rgba(255,255,255,.025)",
                border: "1px solid rgba(255,255,255,.07)",
                borderRadius: "20px",
                padding: "clamp(20px,4vw,32px)",
              }}
            >
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ textAlign: "center", padding: "36px 16px" }}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      margin: "0 auto 16px",
                      background: "rgba(0,212,170,.15)",
                      border: "2px solid rgba(0,212,170,.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "22px",
                    }}
                  >
                    ✓
                  </div>
                  <h3
                    style={{
                      ...H,
                      fontWeight: 700,
                      color: "var(--text)",
                      marginBottom: "10px",
                      fontSize: "18px",
                    }}
                  >
                    Message sent!
                  </h3>
                  <p style={{ ...B, color: "var(--muted)", fontSize: "14px" }}>
                    Thanks for reaching out. I'll get back to you soon.
                  </p>
                  <motion.button
                    onClick={() => setSent(false)}
                    whileHover={{ scale: 1.03 }}
                    style={{
                      marginTop: "20px",
                      padding: "10px 24px",
                      background: "rgba(108,99,255,.12)",
                      border: "1px solid rgba(108,99,255,.3)",
                      borderRadius: "10px",
                      color: "var(--accent)",
                      ...B,
                      fontSize: "13px",
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    Send another
                  </motion.button>
                </motion.div>
              ) : (
                <form
                  onSubmit={submit}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  {[
                    {
                      label: "Name",
                      key: "name",
                      type: "text",
                      ph: "Your name",
                    },
                    {
                      label: "Email",
                      key: "email",
                      type: "email",
                      ph: "your@email.com",
                    },
                  ].map((f) => (
                    <div key={f.key}>
                      <label
                        style={{
                          ...B,
                          display: "block",
                          fontSize: "12px",
                          color: "var(--muted)",
                          marginBottom: "7px",
                          fontWeight: 500,
                        }}
                      >
                        {f.label}
                      </label>
                      <input
                        type={f.type}
                        required
                        placeholder={f.ph}
                        value={form[f.key as keyof typeof form]}
                        onChange={(e) =>
                          setForm({ ...form, [f.key]: e.target.value })
                        }
                        style={inp}
                        onFocus={(e) => {
                          e.target.style.borderColor = "rgba(108,99,255,.55)";
                          e.target.style.boxShadow =
                            "0 0 0 3px rgba(108,99,255,.1)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "rgba(255,255,255,.09)";
                          e.target.style.boxShadow = "none";
                        }}
                      />
                    </div>
                  ))}
                  <div>
                    <label
                      style={{
                        ...B,
                        display: "block",
                        fontSize: "12px",
                        color: "var(--muted)",
                        marginBottom: "7px",
                        fontWeight: 500,
                      }}
                    >
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about your project or opportunity..."
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      style={{ ...inp, resize: "none", lineHeight: 1.6 }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "rgba(108,99,255,.55)";
                        e.target.style.boxShadow =
                          "0 0 0 3px rgba(108,99,255,.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(255,255,255,.09)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  {/* Error */}
                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      style={{
                        ...B,
                        fontSize: "13px",
                        color: "#ff6b6b",
                        background: "rgba(255,107,107,.08)",
                        border: "1px solid rgba(255,107,107,.2)",
                        borderRadius: "8px",
                        padding: "10px 14px",
                        margin: 0,
                      }}
                    >
                      {error}
                    </motion.p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={sending}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 8px 36px rgba(108,99,255,.45)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      width: "100%",
                      padding: "14px",
                      background: sending
                        ? "rgba(108,99,255,.5)"
                        : "linear-gradient(135deg,#6c63ff 0%,#7c6ffc 100%)",
                      border: "none",
                      borderRadius: "12px",
                      color: "#fff",
                      fontSize: "14px",
                      fontWeight: 600,
                      ...H,
                      cursor: sending ? "wait" : "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      boxShadow: "0 4px 24px rgba(108,99,255,.28)",
                    }}
                  >
                    {sending ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          style={{ display: "inline-block", fontSize: "16px" }}
                        >
                          ⟳
                        </motion.span>
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message <Send size={14} />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Right info */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            {/* Location card */}
            <div
              style={{
                background: "rgba(255,255,255,.025)",
                border: "1px solid rgba(255,255,255,.07)",
                borderRadius: "16px",
                padding: "22px",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: "11px",
                    flexShrink: 0,
                    background: "rgba(108,99,255,.1)",
                    border: "1px solid rgba(108,99,255,.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MapPin size={18} color="var(--accent)" />
                </div>
                <div>
                  <div
                    style={{
                      ...H,
                      fontWeight: 700,
                      color: "var(--text)",
                      fontSize: "15px",
                    }}
                  >
                    {personalInfo.location}
                  </div>
                  <div
                    style={{
                      ...B,
                      color: "var(--muted)",
                      fontSize: "12px",
                      marginTop: "3px",
                    }}
                  >
                    Based in India
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <h3
                style={{
                  ...H,
                  fontWeight: 700,
                  fontSize: "16px",
                  color: "var(--text)",
                  marginBottom: "14px",
                }}
              >
                Find me online
              </h3>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "9px" }}
              >
                {socials.map(({ icon: Icon, label, href, sub }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "13px 16px",
                      background: "rgba(255,255,255,.025)",
                      border: "1px solid rgba(255,255,255,.07)",
                      borderRadius: "12px",
                      textDecoration: "none",
                      transition: "border-color .2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.borderColor =
                        "rgba(108,99,255,.3)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.borderColor =
                        "rgba(255,255,255,.07)")
                    }
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "11px",
                      }}
                    >
                      <Icon size={15} color="var(--muted)" />
                      <div>
                        <div
                          style={{
                            ...H,
                            fontSize: "13px",
                            fontWeight: 600,
                            color: "var(--text)",
                          }}
                        >
                          {label}
                        </div>
                        <div
                          style={{
                            ...B,
                            fontSize: "11px",
                            color: "var(--dim)",
                            wordBreak: "break-all",
                          }}
                        >
                          {sub}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight size={13} color="var(--dim)" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
