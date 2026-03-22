"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/lib/data";
import { MapPin, Calendar, Briefcase } from "lucide-react";

const H: React.CSSProperties = { fontFamily:"var(--font-head)", fontSynthesis:"none", fontStretch:"normal", fontStyle:"normal" };
const B: React.CSSProperties = { fontFamily:"var(--font-body)", fontSynthesis:"none", fontStretch:"normal", fontStyle:"normal" };

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display:"inline-flex", alignItems:"center", gap:"10px", marginBottom:"16px" }}>
      <div style={{ width:20, height:1.5, background:"var(--accent)", flexShrink:0 }} />
      <span style={{ ...B, fontSize:"10px", color:"var(--accent)", letterSpacing:".18em",
        textTransform:"uppercase", fontWeight:600 }}>{children}</span>
    </div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-60px" });

  return (
    <section id="experience" ref={ref}
      style={{ padding:"clamp(64px,9vw,112px) clamp(16px,4vw,24px)", position:"relative" }}>

      <div style={{ position:"absolute", right:"-80px", top:"20%", width:360, height:360,
        background:"radial-gradient(circle,rgba(255,107,107,.06) 0%,transparent 70%)",
        pointerEvents:"none" }} />

      <div style={{ maxWidth:"860px", margin:"0 auto" }}>

        <motion.div initial={{ opacity:0, y:24 }} animate={inView?{opacity:1,y:0}:{}}
          transition={{ duration:.6 }} style={{ textAlign:"center", marginBottom:"60px" }}>
          <Label>Experience</Label>
          <h2 style={{ ...H, fontWeight:700, fontSize:"clamp(28px,5vw,48px)",
            letterSpacing:"-0.025em", color:"var(--text)" }}>
            Where I've worked
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position:"relative" }}>
          {/* vertical line */}
          <div style={{ position:"absolute", left:0, top:0, bottom:0, width:1.5,
            background:"linear-gradient(180deg,var(--accent) 0%,rgba(108,99,255,.08) 100%)" }} />

          <div style={{ display:"flex", flexDirection:"column", gap:"48px" }}>
            {experience.map((exp, i)=>(
              <motion.div key={exp.id}
                initial={{ opacity:0, x:-24 }}
                animate={inView?{opacity:1,x:0}:{}}
                transition={{ duration:.6, delay:i*.15 }}
                style={{ paddingLeft:"clamp(28px,5vw,40px)", position:"relative" }}>

                {/* Dot */}
                <div style={{ position:"absolute", left:-7, top:22, width:14, height:14,
                  borderRadius:"50%", background:exp.color,
                  border:"2.5px solid var(--bg)",
                  boxShadow:`0 0 0 3px ${exp.color}28, 0 0 18px ${exp.color}40` }} />

                {/* Card */}
                <motion.div whileHover={{ x:5 }} transition={{ duration:.2 }}
                  style={{ background:"rgba(255,255,255,.025)", border:"1px solid rgba(255,255,255,.07)",
                    borderRadius:"18px", padding:"clamp(20px,4vw,28px)",
                    transition:"border-color .3s ease" }}
                  onMouseEnter={e=>(e.currentTarget.style.borderColor=`${exp.color}38`)}
                  onMouseLeave={e=>(e.currentTarget.style.borderColor="rgba(255,255,255,.07)")}>

                  {/* Header row */}
                  <div style={{ display:"flex", justifyContent:"space-between",
                    alignItems:"flex-start", flexWrap:"wrap", gap:"10px", marginBottom:"14px" }}>
                    <div>
                      <h3 style={{ ...H, fontWeight:700, fontSize:"clamp(17px,2.5vw,20px)",
                        color:"var(--text)", marginBottom:"3px", letterSpacing:"-.02em" }}>
                        {exp.role}
                      </h3>
                      <div style={{ display:"flex", alignItems:"center", gap:"10px", flexWrap:"wrap" }}>
                        <span style={{ ...H, fontWeight:600, fontSize:"clamp(13px,2vw,15px)",
                          color:exp.color }}>{exp.company}</span>
                        <span style={{ ...B, fontSize:"10px", padding:"2px 9px",
                          background:`${exp.color}18`, border:`1px solid ${exp.color}30`,
                          borderRadius:"100px", color:exp.color, fontWeight:600 }}>{exp.type}</span>
                      </div>
                    </div>
                    <div style={{ display:"flex", flexDirection:"column", gap:"5px", alignItems:"flex-end" }}>
                      <div style={{ display:"flex", alignItems:"center", gap:"5px",
                        color:"var(--dim)", ...B, fontSize:"12px" }}>
                        <Calendar size={11} />{exp.period}
                      </div>
                      <div style={{ display:"flex", alignItems:"center", gap:"5px",
                        color:"var(--dim)", ...B, fontSize:"12px" }}>
                        <MapPin size={11} />{exp.location}
                      </div>
                    </div>
                  </div>

                  <p style={{ ...B, color:"var(--muted)", fontSize:"clamp(12px,1.8vw,14px)",
                    lineHeight:1.75, marginBottom:"16px" }}>{exp.description}</p>

                  {/* Achievements */}
                  <ul style={{ listStyle:"none", display:"flex", flexDirection:"column",
                    gap:"8px", marginBottom:"18px" }}>
                    {exp.achievements.map(a=>(
                      <li key={a} style={{ display:"flex", alignItems:"flex-start", gap:"9px",
                        ...B, fontSize:"clamp(11px,1.7vw,13px)", color:"var(--muted)", lineHeight:1.65 }}>
                        <span style={{ color:exp.color, marginTop:"3px", flexShrink:0, fontWeight:700 }}>→</span>
                        {a}
                      </li>
                    ))}
                  </ul>

                  {/* Tech pills */}
                  <div style={{ display:"flex", flexWrap:"wrap", gap:"7px" }}>
                    {exp.tech.map(t=>(
                      <span key={t} style={{ ...B, fontSize:"11px", padding:"4px 11px",
                        background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.08)",
                        borderRadius:"7px", color:"var(--dim)" }}>{t}</span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
