"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { projects } from "@/lib/data";
import { Github, ArrowUpRight, TrendingUp, Globe, Smartphone } from "lucide-react";

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

function FinTechIllustration({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 260 160" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      {/* Phone frame */}
      <rect x="80" y="8" width="100" height="144" rx="16" fill="rgba(255,255,255,.04)" stroke={accent} strokeWidth="1.2" strokeOpacity=".35"/>
      <rect x="106" y="14" width="48" height="6" rx="3" fill="rgba(255,255,255,.1)"/>
      {/* Screen */}
      <rect x="86" y="26" width="88" height="118" rx="8" fill="rgba(255,255,255,.03)"/>
      {/* Balance card */}
      <rect x="92" y="32" width="76" height="36" rx="7" fill={`${accent}22`} stroke={accent} strokeWidth=".8" strokeOpacity=".4"/>
      <text x="104" y="45" fill="rgba(255,255,255,.4)" fontSize="6" fontFamily="system-ui">Balance</text>
      <text x="100" y="60" fill={accent} fontSize="10" fontWeight="700" fontFamily="system-ui">₹24,580</text>
      {/* Transaction list */}
      {[0,1,2,3].map(i=>(
        <g key={i}>
          <circle cx="100" cy={82+i*14} r="5" fill={`${accent}28`} stroke={accent} strokeWidth=".7" strokeOpacity=".4"/>
          <rect x="110" y={77+i*14} width="32" height="5" rx="2" fill="rgba(255,255,255,.1)"/>
          <rect x="110" y={84+i*14} width="20" height="4" rx="2" fill="rgba(255,255,255,.05)"/>
          <rect x="146" y={79+i*14} width="14" height="8" rx="2" fill={i%2===0 ? "rgba(0,212,170,.2)" : "rgba(255,107,107,.15)"}/>
        </g>
      ))}
      {/* Bottom nav */}
      <rect x="86" y="130" width="88" height="14" rx="4" fill="rgba(255,255,255,.04)"/>
      {[0,1,2,3].map(i=>(
        <circle key={i} cx={98+i*22} cy={137} r="3"
          fill={i===0 ? `${accent}80` : "rgba(255,255,255,.15)"}/>
      ))}
      {/* API connections — floating dots */}
      {[[-28,20],[28,20],[-32,70],[32,70],[-26,120],[26,120]].map(([dx,dy],i)=>(
        <g key={i}>
          <motion.circle
            cx={130+dx} cy={8+dy} r="3"
            fill={accent} opacity=".45"
            style={{
              animationName:"none",
            }}>
            <animate attributeName="opacity" values=".2;.6;.2" dur={`${1.5+i*.3}s`} repeatCount="indefinite"/>
          </motion.circle>
          <line x1={130+dx} y1={8+dy} x2={80+(dx>0?88:0)} y2={8+dy}
            stroke={accent} strokeWidth=".5" strokeOpacity=".18" strokeDasharray="3,3"/>
        </g>
      ))}
      {/* 30+ API label */}
      <rect x="16" y="68" width="48" height="20" rx="6" fill={`${accent}15`} stroke={accent} strokeWidth=".8" strokeOpacity=".35"/>
      <text x="40" y="81" textAnchor="middle" fill={accent} fontSize="7" fontFamily="system-ui" fontWeight="600">30+ APIs</text>
    </svg>
  );
}

function APIIllustration({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 260 160" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      {/* Central node */}
      <circle cx="130" cy="80" r="24" fill={`${accent}18`} stroke={accent} strokeWidth="1.5" strokeOpacity=".45"/>
      <text x="130" y="85" textAnchor="middle" fill={accent} fontSize="11" fontFamily="system-ui" fontWeight="700">API</text>
      {/* Satellite nodes */}
      {[
        [50,30,"GET"],  [210,30,"POST"],
        [28,100,"PUT"], [232,100,"DEL"],
        [80,145,"JWT"], [180,145,"DB"],
      ].map(([cx,cy,label],i)=>(
        <g key={i}>
          <line x1={Number(cx)} y1={Number(cy)} x2="130" y2="80"
            stroke={accent} strokeWidth=".8" strokeOpacity=".2" strokeDasharray="4,4"/>
          <circle cx={Number(cx)} cy={Number(cy)} r="16"
            fill={`${accent}12`} stroke={accent} strokeWidth="1" strokeOpacity=".3">
            <animate attributeName="stroke-opacity" values=".15;.45;.15" dur={`${1.8+i*.25}s`} repeatCount="indefinite"/>
          </circle>
          <text x={Number(cx)} y={Number(cy)+4} textAnchor="middle"
            fill={accent} fontSize="7" fontFamily="system-ui" fontWeight="600" opacity=".8">{label}</text>
        </g>
      ))}
      {/* Pulse ring */}
      <circle cx="130" cy="80" r="36" stroke={accent} strokeWidth=".5" strokeOpacity=".15" fill="none">
        <animate attributeName="r" values="28;44;28" dur="2.5s" repeatCount="indefinite"/>
        <animate attributeName="stroke-opacity" values=".2;0;.2" dur="2.5s" repeatCount="indefinite"/>
      </circle>
    </svg>
  );
}

function ComponentIllustration({ accent }: { accent: string }) {
  const items = [
    {x:30, y:12, w:80, h:24, label:"Button"},
    {x:120,y:12, w:110,h:24, label:"Input Field"},
    {x:30, y:44, w:200,h:14, label:"Card Header"},
    {x:30, y:62, w:200,h:34, label:"Data Table"},
    {x:30, y:104,w:90, h:20, label:"Badge"},
    {x:130,y:104,w:100,h:20, label:"Progress Bar"},
    {x:30, y:132,w:60, h:16, label:"Tag"},
    {x:100,y:132,w:60, h:16, label:"Tag"},
    {x:170,y:132,w:60, h:16, label:"Tag"},
  ];
  return (
    <svg viewBox="0 0 260 160" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      {items.map((it,i)=>(
        <g key={i}>
          <rect x={it.x} y={it.y} width={it.w} height={it.h} rx="5"
            fill={`${accent}${i%3===0?"20":i%3===1?"14":"0a"}`}
            stroke={accent} strokeWidth=".8" strokeOpacity={i%3===0?.35:.2}/>
          <text x={it.x+it.w/2} y={it.y+it.h/2+3} textAnchor="middle"
            fill={accent} fontSize="6.5" fontFamily="system-ui" opacity=".65">{it.label}</text>
        </g>
      ))}
    </svg>
  );
}

const illustrations: Record<string, React.FC<{accent:string}>> = {
  "Zeux LifeSciences":      EcommerceIllustration,
  "MyVyay FinTech App":     FinTechIllustration,
  "REST API Architecture":  APIIllustration,
  "Reusable Component Library": ComponentIllustration,
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

        <div style={{ display:"flex", gap:"14px" }}>
          <a href={project.links.github}
            style={{ display:"flex", alignItems:"center", gap:"6px",
              color:"var(--muted)", ...B, fontSize:"13px", fontWeight:500,
              textDecoration:"none", transition:"color .2s" }}
            onMouseEnter={e=>(e.currentTarget.style.color="#fff")}
            onMouseLeave={e=>(e.currentTarget.style.color="var(--muted)")}>
            <Github size={14}/> Code
          </a>
          <a href={project.links.live}
            style={{ display:"flex", alignItems:"center", gap:"6px",
              color:project.accent, ...B, fontSize:"13px", fontWeight:500,
              textDecoration:"none", transition:"opacity .2s" }}
            onMouseEnter={e=>(e.currentTarget.style.opacity=".65")}
            onMouseLeave={e=>(e.currentTarget.style.opacity="1")}>
            <ArrowUpRight size={14}/> Live
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function SmallCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hov, setHov] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-40px" });
  const Illus = illustrations[project.title] || ComponentIllustration;

  return (
    <motion.div ref={ref}
      initial={{ opacity:0, y:28 }} animate={inView?{opacity:1,y:0}:{}}
      transition={{ duration:.55, delay:index*.09 }}
      onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{ borderRadius:"16px",
        border:`1px solid ${hov?project.accent+"38":"rgba(255,255,255,.06)"}`,
        background:"rgba(255,255,255,.02)", padding:"clamp(18px,3.5vw,24px)",
        display:"flex", flexDirection:"column",
        transition:"all .3s ease",
        transform:hov?"translateY(-4px)":"translateY(0)",
        boxShadow:hov?`0 12px 36px ${project.accent}12`:"none" }}>
      <div style={{ height:100, marginBottom:"20px", borderRadius:"10px",
        background:`linear-gradient(135deg,${project.accent}12 0%,transparent 100%)`,
        display:"flex", alignItems:"center", justifyContent:"center", overflow:"hidden" }}>
        <div style={{ width:"85%", maxWidth:180 }}><Illus accent={project.accent}/></div>
      </div>
      <div style={{ ...B, fontSize:"10px", color:project.accent, fontWeight:600,
        letterSpacing:".14em", textTransform:"uppercase", marginBottom:"7px" }}>{project.category}</div>
      <h3 style={{ ...H, fontWeight:700, fontSize:"clamp(15px,2.5vw,18px)",
        color:"var(--text)", marginBottom:"10px", letterSpacing:"-.02em" }}>{project.title}</h3>
      <p style={{ ...B, color:"var(--muted)", fontSize:"clamp(11px,1.6vw,13px)",
        lineHeight:1.7, flex:1, marginBottom:"16px" }}>{project.description}</p>
      <div style={{ display:"flex", flexWrap:"wrap", gap:"6px", marginBottom:"14px" }}>
        {project.tech.slice(0,3).map(t=>(
          <span key={t} style={{ ...B, fontSize:"10px", padding:"3px 9px",
            background:"rgba(255,255,255,.04)", border:"1px solid rgba(255,255,255,.07)",
            borderRadius:"6px", color:"var(--dim)" }}>{t}</span>
        ))}
      </div>
      <div style={{ display:"flex", gap:"12px" }}>
        <a href={project.links.github} style={{ color:"var(--dim)", display:"flex" }}><Github size={14}/></a>
        <a href={project.links.live} style={{ color:project.accent, display:"flex" }}><ArrowUpRight size={14}/></a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-60px" });
  const featured = projects.filter(p=>p.featured);
  const rest     = projects.filter(p=>!p.featured);

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

        <div style={{ display:"flex", flexDirection:"column", gap:"18px", marginBottom:"18px" }}>
          {featured.map((p,i)=><FeaturedCard key={p.id} project={p} index={i}/>)}
        </div>
        <div style={{ display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,300px),1fr))", gap:"16px" }}>
          {rest.map((p,i)=><SmallCard key={p.id} project={p} index={i}/>)}
        </div>
      </div>
    </section>
  );
}
