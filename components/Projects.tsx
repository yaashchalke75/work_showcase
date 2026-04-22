"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { projects } from "@/lib/data";
import { Github, ArrowUpRight, TrendingUp } from "lucide-react";

const H: React.CSSProperties = { fontFamily:"var(--font-head)", fontSynthesis:"none", fontStretch:"normal", fontStyle:"normal" };
const B: React.CSSProperties = { fontFamily:"var(--font-body)", fontSynthesis:"none", fontStretch:"normal", fontStyle:"normal" };

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display:"inline-flex", alignItems:"center", gap:"10px", marginBottom:"16px" }}>
      <div style={{ width:20, height:1.5, background:"var(--accent)", flexShrink:0 }}/>
      <span style={{ ...B, fontSize:"10px", color:"var(--accent)", letterSpacing:".18em",
        textTransform:"uppercase", fontWeight:600 }}>{children}</span>
    </div>
  );
}

/* ── Custom SVG illustrations per project ── */
function EcommerceIllustration({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 260 160" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      {/* Browser frame */}
      <rect x="20" y="12" width="220" height="136" rx="10" fill="rgba(255,255,255,.04)" stroke={accent} strokeWidth="1.2" strokeOpacity=".3"/>
      {/* Address bar */}
      <rect x="32" y="22" width="196" height="12" rx="4" fill="rgba(255,255,255,.06)"/>
      <circle cx="42" cy="28" r="3" fill="#ff6b6b" opacity=".7"/>
      <circle cx="52" cy="28" r="3" fill="#f59e0b" opacity=".7"/>
      <circle cx="62" cy="28" r="3" fill="#00d4aa" opacity=".7"/>
      <rect x="80" y="24" width="100" height="8" rx="2" fill="rgba(255,255,255,.08)"/>
      {/* Globe icon for i18n */}
      <circle cx="200" cy="28" r="4" stroke={accent} strokeWidth="1" fill="none" opacity=".7"/>
      <line x1="196" y1="28" x2="204" y2="28" stroke={accent} strokeWidth=".8" opacity=".6"/>
      <path d="M200 24 Q202 28 200 32" stroke={accent} strokeWidth=".8" fill="none" opacity=".6"/>
      {/* Product grid */}
      <rect x="32" y="42" width="60" height="60" rx="6" fill={`${accent}18`} stroke={accent} strokeWidth="1" strokeOpacity=".25"/>
      <rect x="100" y="42" width="60" height="60" rx="6" fill={`${accent}12`} stroke={accent} strokeWidth="1" strokeOpacity=".2"/>
      <rect x="168" y="42" width="60" height="60" rx="6" fill={`${accent}18`} stroke={accent} strokeWidth="1" strokeOpacity=".25"/>
      {/* Product icons */}
      <rect x="44" y="54" width="36" height="28" rx="4" fill={`${accent}30`}/>
      <line x1="62" y1="54" x2="62" y2="82" stroke={accent} strokeWidth=".8" opacity=".5"/>
      <rect x="112" y="54" width="36" height="28" rx="4" fill={`${accent}22`}/>
      <circle cx="130" cy="68" r="8" stroke={accent} strokeWidth="1" fill="none" opacity=".5"/>
      <rect x="180" y="54" width="36" height="28" rx="4" fill={`${accent}30`}/>
      <path d="M190 68 L196 74 L206 60" stroke={accent} strokeWidth="1.5" fill="none"/>
      {/* Price tags */}
      <rect x="36" y="86" width="52" height="10" rx="3" fill="rgba(255,255,255,.07)"/>
      <rect x="104" y="86" width="52" height="10" rx="3" fill="rgba(255,255,255,.07)"/>
      <rect x="172" y="86" width="52" height="10" rx="3" fill="rgba(255,255,255,.07)"/>
      {/* Cart button */}
      <rect x="32" y="112" width="60" height="20" rx="5" fill={`${accent}30`} stroke={accent} strokeWidth="1" strokeOpacity=".5"/>
      <rect x="100" y="112" width="60" height="20" rx="5" fill={`${accent}22`} stroke={accent} strokeWidth="1" strokeOpacity=".35"/>
      <rect x="168" y="112" width="60" height="20" rx="5" fill={`${accent}30`} stroke={accent} strokeWidth="1" strokeOpacity=".5"/>
      {/* Language flags row */}
      <rect x="32" y="138" width="16" height="10" rx="2" fill="#b91c1c" opacity=".7"/>
      <rect x="52" y="138" width="16" height="10" rx="2" fill="#1d4ed8" opacity=".7"/>
      <rect x="72" y="138" width="16" height="10" rx="2" fill="#065f46" opacity=".7"/>
      <text x="95" y="147" fill={accent} fontSize="7" opacity=".6" fontFamily="system-ui">EN / ES / PT</text>
    </svg>
  );
}

function OpsFlowIllustration({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 260 160" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      {/* Dashboard frame */}
      <rect x="16" y="10" width="228" height="140" rx="12" fill="rgba(255,255,255,.04)" stroke={accent} strokeWidth="1.2" strokeOpacity=".35"/>
      {/* Top bar */}
      <rect x="28" y="20" width="204" height="12" rx="3" fill="rgba(255,255,255,.06)"/>
      <circle cx="36" cy="26" r="2.4" fill="#ff6b6b" opacity=".8"/>
      <circle cx="44" cy="26" r="2.4" fill={accent} opacity=".85"/>
      <circle cx="52" cy="26" r="2.4" fill="#00d4aa" opacity=".8"/>
      <rect x="72" y="22" width="90" height="8" rx="2" fill="rgba(255,255,255,.08)"/>
      {/* Command palette hint */}
      <rect x="186" y="22" width="40" height="8" rx="2" fill={`${accent}25`} stroke={accent} strokeWidth=".6" strokeOpacity=".5"/>
      <text x="206" y="28" textAnchor="middle" fill={accent} fontSize="6" fontFamily="system-ui" fontWeight="700" letterSpacing=".1em">⌘K</text>
      {/* Sidebar */}
      <rect x="24" y="38" width="44" height="104" rx="6" fill="rgba(255,255,255,.03)" stroke={accent} strokeWidth=".8" strokeOpacity=".25"/>
      {[0,1,2,3,4].map(i=>(
        <g key={i}>
          <rect x="30" y={46+i*18} width="4" height="4" rx="1" fill={i===1 ? accent : `${accent}50`}/>
          <rect x="38" y={46+i*18} width="24" height="4" rx="1" fill={i===1 ? "rgba(255,255,255,.6)" : "rgba(255,255,255,.2)"}/>
        </g>
      ))}
      {/* Incident card */}
      <rect x="76" y="38" width="72" height="46" rx="6" fill="rgba(255,107,107,.12)" stroke="#ff6b6b" strokeWidth=".8" strokeOpacity=".5"/>
      <circle cx="84" cy="46" r="2.4" fill="#ff6b6b">
        <animate attributeName="opacity" values=".4;1;.4" dur="1.4s" repeatCount="indefinite"/>
      </circle>
      <text x="92" y="49" fill="#ff6b6b" fontSize="6.5" fontFamily="system-ui" fontWeight="700" letterSpacing=".06em">INCIDENT</text>
      <rect x="82" y="56" width="60" height="3" rx="1" fill="rgba(255,255,255,.5)"/>
      <rect x="82" y="63" width="40" height="2.5" rx="1" fill="rgba(255,255,255,.25)"/>
      <rect x="82" y="70" width="30" height="8" rx="3" fill="rgba(255,107,107,.3)"/>
      <text x="97" y="76" textAnchor="middle" fill="#ff6b6b" fontSize="5.5" fontFamily="system-ui" fontWeight="700">P1</text>
      {/* Deployment card */}
      <rect x="156" y="38" width="72" height="46" rx="6" fill={`${accent}14`} stroke={accent} strokeWidth=".8" strokeOpacity=".5"/>
      <circle cx="164" cy="46" r="2.4" fill={accent}/>
      <text x="172" y="49" fill={accent} fontSize="6.5" fontFamily="system-ui" fontWeight="700" letterSpacing=".06em">DEPLOY</text>
      <rect x="162" y="56" width="60" height="3" rx="1" fill="rgba(255,255,255,.5)"/>
      <rect x="162" y="63" width="44" height="2.5" rx="1" fill="rgba(255,255,255,.25)"/>
      {/* Progress bar */}
      <rect x="162" y="72" width="60" height="4" rx="2" fill="rgba(255,255,255,.08)"/>
      <rect x="162" y="72" width="42" height="4" rx="2" fill={accent} opacity=".85">
        <animate attributeName="width" values="0;42;42" dur="2.4s" repeatCount="indefinite"/>
      </rect>
      {/* Analytics graph */}
      <rect x="76" y="90" width="152" height="52" rx="6" fill="rgba(255,255,255,.03)" stroke={accent} strokeWidth=".8" strokeOpacity=".3"/>
      <text x="82" y="100" fill={accent} fontSize="6" fontFamily="system-ui" fontWeight="700" letterSpacing=".1em">ANALYTICS</text>
      <polyline points="82,132 98,124 114,128 130,116 146,120 162,108 178,112 194,100 210,106 222,96"
        stroke={accent} strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="82,132 98,124 114,128 130,116 146,120 162,108 178,112 194,100 210,106 222,96"
        stroke={accent} strokeWidth="1.4" fill="none" strokeOpacity=".25">
        <animate attributeName="stroke-dasharray" values="0,400;400,0" dur="2.8s" repeatCount="indefinite"/>
      </polyline>
      {/* Data points */}
      {[[98,124],[130,116],[162,108],[194,100],[222,96]].map(([cx,cy],i)=>(
        <circle key={i} cx={cx} cy={cy} r="1.8" fill={accent}/>
      ))}
      {/* RBAC role chips */}
      <rect x="82" y="106" width="30" height="9" rx="4" fill={`${accent}22`} stroke={accent} strokeWidth=".5" strokeOpacity=".5"/>
      <text x="97" y="112" textAnchor="middle" fill={accent} fontSize="5.5" fontFamily="system-ui" fontWeight="700" letterSpacing=".08em">ADMIN</text>
    </svg>
  );
}

function MediCareIllustration({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 260 160" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      {/* Browser / dashboard frame */}
      <rect x="16" y="10" width="228" height="140" rx="12" fill="rgba(255,255,255,.04)" stroke={accent} strokeWidth="1.2" strokeOpacity=".35"/>
      <rect x="28" y="20" width="204" height="10" rx="3" fill="rgba(255,255,255,.06)"/>
      <circle cx="36" cy="25" r="2.4" fill="#ff6b6b" opacity=".7"/>
      <circle cx="44" cy="25" r="2.4" fill="#f59e0b" opacity=".7"/>
      <circle cx="52" cy="25" r="2.4" fill={accent} opacity=".85"/>
      {/* Medical cross badge */}
      <circle cx="40" cy="56" r="16" fill={`${accent}22`} stroke={accent} strokeWidth="1.2" strokeOpacity=".55"/>
      <rect x="37" y="47" width="6" height="18" rx="1.5" fill={accent}/>
      <rect x="31" y="53" width="18" height="6" rx="1.5" fill={accent}/>
      {/* Heartbeat line */}
      <path d="M66 56 L80 56 L86 44 L94 68 L102 50 L110 60 L124 60"
        stroke={accent} strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <animate attributeName="stroke-dasharray" values="0,200;200,0" dur="2.2s" repeatCount="indefinite"/>
      </path>
      {/* Calendar / appointment card */}
      <rect x="132" y="40" width="96" height="52" rx="8" fill={`${accent}14`} stroke={accent} strokeWidth="1" strokeOpacity=".4"/>
      <rect x="132" y="40" width="96" height="12" rx="8" fill={`${accent}30`}/>
      <rect x="132" y="48" width="96" height="4" fill={`${accent}30`}/>
      <text x="180" y="49" textAnchor="middle" fill="#fff" fontSize="7" fontFamily="system-ui" fontWeight="700" opacity=".9">APPOINTMENTS</text>
      {/* Calendar dots */}
      {[0,1,2,3,4,5,6].map(i=>{
        const col=i%7; const row=Math.floor(i/7);
        return (
          <circle key={i} cx={142+col*13} cy={64+row*10} r="2.6"
            fill={i===3 ? accent : `${accent}35`}>
            {i===3 && <animate attributeName="r" values="2.6;3.6;2.6" dur="1.6s" repeatCount="indefinite"/>}
          </circle>
        );
      })}
      {[7,8,9,10,11,12,13].map(i=>{
        const col=(i-7)%7;
        return (
          <circle key={i} cx={142+col*13} cy={78} r="2.6" fill={`${accent}22`}/>
        );
      })}
      {/* Patient rows (record list) — two rows only, leaves room for chips */}
      {[0,1].map(i=>(
        <g key={i}>
          <rect x="28" y={96+i*13} width="200" height="10" rx="4" fill="rgba(255,255,255,.04)"/>
          <circle cx="36" cy={101+i*13} r="3.2" fill={`${accent}55`}/>
          <rect x="44" y={98+i*13} width="60" height="3" rx="1.5" fill="rgba(255,255,255,.18)"/>
          <rect x="44" y={103+i*13} width="40" height="2.5" rx="1" fill="rgba(255,255,255,.08)"/>
          <rect x="180" y={98+i*13} width="40" height="6" rx="2"
            fill={i===0 ? `${accent}40` : "rgba(245,158,11,.28)"}/>
        </g>
      ))}
      {/* Role badge chips — centered, well inside frame */}
      <rect x="40"  y="128" width="52" height="14" rx="6" fill={`${accent}22`} stroke={accent} strokeWidth=".7" strokeOpacity=".55"/>
      <text x="66"  y="137" textAnchor="middle" fill={accent} fontSize="7" fontFamily="system-ui" fontWeight="700" letterSpacing=".04em">PATIENT</text>
      <rect x="104" y="128" width="52" height="14" rx="6" fill="rgba(245,158,11,.22)" stroke="#f59e0b" strokeWidth=".7" strokeOpacity=".55"/>
      <text x="130" y="137" textAnchor="middle" fill="#f59e0b" fontSize="7" fontFamily="system-ui" fontWeight="700" letterSpacing=".04em">DOCTOR</text>
      <rect x="168" y="128" width="52" height="14" rx="6" fill="rgba(108,99,255,.24)" stroke="#6c63ff" strokeWidth=".7" strokeOpacity=".55"/>
      <text x="194" y="137" textAnchor="middle" fill="#8b82ff" fontSize="7" fontFamily="system-ui" fontWeight="700" letterSpacing=".04em">ADMIN</text>
    </svg>
  );
}

function MedCheckAIIllustration({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 260 160" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      {/* Dashboard frame */}
      <rect x="16" y="10" width="228" height="140" rx="12" fill="rgba(255,255,255,.04)" stroke={accent} strokeWidth="1.2" strokeOpacity=".35"/>
      {/* AI brain node (left) */}
      <circle cx="58" cy="60" r="24" fill={`${accent}18`} stroke={accent} strokeWidth="1.3" strokeOpacity=".55"/>
      <path d="M50 54 Q50 48 56 48 Q58 44 62 46 Q68 45 68 52 Q72 54 70 60 Q72 66 66 68 Q62 72 58 68 Q52 70 50 64 Q46 60 50 54 Z"
        fill="none" stroke={accent} strokeWidth="1.1" strokeOpacity=".85"/>
      <circle cx="55" cy="56" r="1.4" fill={accent}/>
      <circle cx="62" cy="58" r="1.4" fill={accent}/>
      <circle cx="58" cy="64" r="1.4" fill={accent}/>
      <line x1="55" y1="56" x2="62" y2="58" stroke={accent} strokeWidth=".6" opacity=".6"/>
      <line x1="62" y1="58" x2="58" y2="64" stroke={accent} strokeWidth=".6" opacity=".6"/>
      <line x1="55" y1="56" x2="58" y2="64" stroke={accent} strokeWidth=".6" opacity=".6"/>
      <text x="58" y="92" textAnchor="middle" fill={accent} fontSize="7" fontFamily="system-ui" fontWeight="700" letterSpacing=".1em">AI ENGINE</text>
      {/* Connecting pulse lines */}
      <line x1="82" y1="60" x2="128" y2="48" stroke={accent} strokeWidth=".7" strokeOpacity=".35" strokeDasharray="3,3"/>
      <line x1="82" y1="60" x2="128" y2="72" stroke={accent} strokeWidth=".7" strokeOpacity=".35" strokeDasharray="3,3"/>
      <circle cx="105" cy="54" r="1.8" fill={accent}>
        <animate attributeName="opacity" values=".3;1;.3" dur="1.8s" repeatCount="indefinite"/>
      </circle>
      <circle cx="105" cy="66" r="1.8" fill={accent}>
        <animate attributeName="opacity" values="1;.3;1" dur="1.8s" repeatCount="indefinite"/>
      </circle>
      {/* Results panel (right) */}
      <rect x="128" y="28" width="100" height="80" rx="8" fill={`${accent}10`} stroke={accent} strokeWidth="1" strokeOpacity=".4"/>
      <text x="178" y="40" textAnchor="middle" fill={accent} fontSize="7" fontFamily="system-ui" fontWeight="700" letterSpacing=".08em">PREDICTIONS</text>
      {/* Probability bars */}
      {[
        {label:"Migraine",  pct:88, color:accent,              y:48},
        {label:"Tension",   pct:62, color:"#f59e0b",           y:64},
        {label:"Sinusitis", pct:34, color:"#6c63ff",           y:80},
        {label:"Flu",       pct:18, color:"rgba(255,255,255,.3)", y:96},
      ].map((b,i)=>(
        <g key={i}>
          <rect x="134" y={b.y} width="88" height="8" rx="3" fill="rgba(255,255,255,.06)"/>
          <rect x="134" y={b.y} width={88*b.pct/100} height="8" rx="3" fill={b.color} opacity=".85">
            <animate attributeName="width" from="0" to={88*b.pct/100} dur={`${1 + i*.2}s`} fill="freeze"/>
          </rect>
          <text x="138" y={b.y+6} fill="#fff" fontSize="5.5" fontFamily="system-ui" fontWeight="600" opacity=".9">{b.label}</text>
          <text x="218" y={b.y+6} textAnchor="end" fill="#fff" fontSize="5.5" fontFamily="system-ui" fontWeight="700" opacity=".85">{b.pct}%</text>
        </g>
      ))}
      {/* Symptom chips (bottom row) */}
      <text x="28" y="122" fill="rgba(255,255,255,.45)" fontSize="6" fontFamily="system-ui" fontWeight="600" letterSpacing=".12em">SYMPTOMS</text>
      {[
        {x:28,  w:38, label:"Headache"},
        {x:70,  w:30, label:"Fever"},
        {x:104, w:32, label:"Nausea"},
        {x:140, w:30, label:"Cough"},
        {x:174, w:42, label:"Dizziness"},
      ].map((s,i)=>(
        <g key={i}>
          <rect x={s.x} y="128" width={s.w} height="14" rx="7" fill={`${accent}1a`} stroke={accent} strokeWidth=".6" strokeOpacity=".5"/>
          <text x={s.x+s.w/2} y="137" textAnchor="middle" fill="#fff" fontSize="6" fontFamily="system-ui" fontWeight="600" opacity=".85">{s.label}</text>
        </g>
      ))}
      {/* Risk level badge (top-right corner of results) */}
      <rect x="188" y="14" width="44" height="12" rx="6" fill="rgba(255,107,107,.22)" stroke="#ff6b6b" strokeWidth=".6" strokeOpacity=".55"/>
      <circle cx="196" cy="20" r="1.8" fill="#ff6b6b">
        <animate attributeName="opacity" values=".4;1;.4" dur="1.4s" repeatCount="indefinite"/>
      </circle>
      <text x="213" y="23" textAnchor="middle" fill="#ff6b6b" fontSize="6.5" fontFamily="system-ui" fontWeight="700" letterSpacing=".05em">HIGH RISK</text>
    </svg>
  );
}

const illustrations: Record<string, React.FC<{accent:string}>> = {
  "Zeux LifeSciences":                                EcommerceIllustration,
  "OpsFlow — DevOps Team Collaboration Platform":     OpsFlowIllustration,
  "MediCare Health & Appointments":                   MediCareIllustration,
  "MedCheck AI":                                      MedCheckAIIllustration,
};

function FeaturedCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hov, setHov] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-50px" });
  const Illus = illustrations[project.title] || EcommerceIllustration;

  return (
    <motion.div ref={ref}
      initial={{ opacity:0, y:40 }} animate={inView?{opacity:1,y:0}:{}}
      transition={{ duration:.7, delay:index*.14 }}
      onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{ borderRadius:"20px",
        border:`1px solid ${hov?project.accent+"45":"rgba(255,255,255,.07)"}`,
        background:"rgba(255,255,255,.025)",
        display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,280px),1fr))",
        overflow:"hidden",
        transition:"border-color .3s, transform .32s, box-shadow .32s",
        transform:hov?"translateY(-6px)":"translateY(0)",
        boxShadow:hov?`0 20px 60px ${project.accent}16`:"none" }}>

      {/* Illustration */}
      <div style={{ background:`linear-gradient(135deg,${project.accent}10 0%,rgba(0,0,0,0) 60%)`,
        padding:"clamp(24px,4vw,40px)", display:"flex", alignItems:"center",
        justifyContent:"center", position:"relative", minHeight:"180px" }}>
        <div style={{ position:"absolute", inset:0,
          background:`radial-gradient(circle at 50% 50%,${project.accent}0e 0%,transparent 70%)` }}/>
        {/* shimmer overlay on hover */}
        {hov && <div className="shimmer" style={{ position:"absolute", inset:0, borderRadius:0 }}/>}
        <motion.div animate={hov?{scale:1.04}:{scale:1}} transition={{ duration:.35 }}
          style={{ width:"100%", maxWidth:240, position:"relative", zIndex:1 }}>
          <Illus accent={project.accent}/>
        </motion.div>
      </div>

      {/* Content */}
      <div style={{ padding:"clamp(20px,4vw,32px)", display:"flex", flexDirection:"column", justifyContent:"space-between" }}>
        <div>
          <div style={{ ...B, fontSize:"10px", color:project.accent, fontWeight:600,
            letterSpacing:".14em", textTransform:"uppercase", marginBottom:"10px" }}>
            {project.category}
          </div>
          <h3 style={{ ...H, fontWeight:700, fontSize:"clamp(20px,3vw,26px)",
            color:"var(--text)", marginBottom:"12px", letterSpacing:"-.025em" }}>
            {project.title}
          </h3>
          <p style={{ ...B, color:"var(--muted)", fontSize:"clamp(12px,1.7vw,13px)",
            lineHeight:1.75, marginBottom:"18px" }}>{project.description}</p>

          {project.highlights.length > 0 && (
            <div style={{ display:"flex", flexDirection:"column", gap:"7px", marginBottom:"18px" }}>
              {project.highlights.map(h=>(
                <div key={h} style={{ display:"flex", alignItems:"flex-start", gap:"8px",
                  ...B, fontSize:"12px", color:"var(--muted)", lineHeight:1.65 }}>
                  <TrendingUp size={11} color={project.accent} style={{ marginTop:2, flexShrink:0 }}/>
                  {h}
                </div>
              ))}
            </div>
          )}

          <div style={{ display:"flex", flexWrap:"wrap", gap:"7px", marginBottom:"22px" }}>
            {project.tech.map(t=>(
              <span key={t} style={{ ...B, fontSize:"11px", padding:"4px 11px",
                background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.08)",
                borderRadius:"7px", color:"var(--dim)" }}>{t}</span>
            ))}
          </div>
        </div>

        <div style={{ display:"flex", gap:"14px", alignItems:"center" }}>
          {project.links.github && project.links.github !== "#" && (
            <a href={project.links.github} target="_blank" rel="noopener noreferrer"
              style={{ display:"flex", alignItems:"center", gap:"6px",
                color:"var(--muted)", ...B, fontSize:"13px", fontWeight:500,
                textDecoration:"none", transition:"color .2s" }}
              onMouseEnter={e=>(e.currentTarget.style.color="#fff")}
              onMouseLeave={e=>(e.currentTarget.style.color="var(--muted)")}>
              <Github size={14}/> Code
            </a>
          )}
          {project.status ? (
            <span style={{ display:"inline-flex", alignItems:"center", gap:"7px",
              ...B, fontSize:"12px", fontWeight:600, letterSpacing:".04em",
              padding:"5px 11px", borderRadius:"999px",
              color:project.accent,
              background:`${project.accent}18`,
              border:`1px solid ${project.accent}40` }}>
              <span style={{ width:6, height:6, borderRadius:"50%",
                background:project.accent, boxShadow:`0 0 0 3px ${project.accent}22` }}/>
              {project.status}
            </span>
          ) : (
            <a href={project.links.live} target="_blank" rel="noopener noreferrer"
              style={{ display:"flex", alignItems:"center", gap:"6px",
                color:project.accent, ...B, fontSize:"13px", fontWeight:500,
                textDecoration:"none", transition:"opacity .2s" }}
              onMouseEnter={e=>(e.currentTarget.style.opacity=".65")}
              onMouseLeave={e=>(e.currentTarget.style.opacity="1")}>
              <ArrowUpRight size={14}/> View Project
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-60px" });
  const featured = projects.filter(p=>p.featured);

  return (
    <section id="projects" ref={ref}
      style={{ padding:"clamp(64px,9vw,112px) clamp(16px,4vw,24px)", position:"relative" }}>
      <div style={{ position:"absolute", left:"50%", top:"8%", transform:"translateX(-50%)",
        width:"min(540px,90vw)", height:320,
        background:"radial-gradient(ellipse,rgba(108,99,255,.06) 0%,transparent 70%)", pointerEvents:"none" }}/>

      <div style={{ maxWidth:"1160px", margin:"0 auto" }}>
        <motion.div initial={{ opacity:0, y:22 }} animate={inView?{opacity:1,y:0}:{}}
          transition={{ duration:.6 }} style={{ textAlign:"center", marginBottom:"56px" }}>
          <Label>Projects</Label>
          <h2 style={{ ...H, fontWeight:700, fontSize:"clamp(28px,5vw,48px)",
            letterSpacing:"-.025em", color:"var(--text)" }}>Things I've built</h2>
        </motion.div>

        <div style={{ display:"flex", flexDirection:"column", gap:"18px" }}>
          {featured.map((p,i)=><FeaturedCard key={p.id} project={p} index={i}/>)}
        </div>
      </div>
    </section>
  );
}
