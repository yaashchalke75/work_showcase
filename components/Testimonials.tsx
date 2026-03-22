"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { testimonials } from "@/lib/data";
import { Quote, Star } from "lucide-react";

const H: React.CSSProperties = { fontFamily:"var(--font-head)", fontSynthesis:"none", fontStretch:"normal", fontStyle:"normal" };
const B: React.CSSProperties = { fontFamily:"var(--font-body)", fontSynthesis:"none", fontStretch:"normal", fontStyle:"normal" };

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-60px" });

  return (
    <section ref={ref} style={{ padding:"clamp(48px,8vw,96px) clamp(16px,4vw,24px)", position:"relative" }}>
      <div style={{ maxWidth:"1160px", margin:"0 auto" }}>
        <motion.div initial={{ opacity:0, y:22 }} animate={inView?{opacity:1,y:0}:{}}
          transition={{ duration:.6 }} style={{ textAlign:"center", marginBottom:"52px" }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:"10px", marginBottom:"14px" }}>
            <div style={{ width:20, height:1.5, background:"var(--accent)", flexShrink:0 }}/>
            <span style={{ ...B, fontSize:"10px", color:"var(--accent)", letterSpacing:".18em",
              textTransform:"uppercase", fontWeight:600 }}>Testimonials</span>
          </div>
          <h2 style={{ ...H, fontWeight:700, fontSize:"clamp(24px,4vw,40px)",
            letterSpacing:"-.025em", color:"var(--text)" }}>What people say</h2>
        </motion.div>

        <div style={{ display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,300px),1fr))", gap:"18px" }}>
          {testimonials.map((t,i)=>(
            <motion.div key={t.name}
              initial={{ opacity:0, y:28, scale:.97 }}
              animate={inView?{opacity:1,y:0,scale:1}:{}}
              transition={{ duration:.55, delay:i*.12 }}
              whileHover={{ y:-6, boxShadow:`0 18px 48px ${t.color}14` } as any}
              style={{ background:"rgba(255,255,255,.025)",
                border:`1px solid rgba(255,255,255,.07)`,
                borderRadius:"18px", padding:"clamp(20px,3.5vw,28px)",
                display:"flex", flexDirection:"column", gap:"16px",
                transition:"border-color .3s, transform .3s, box-shadow .3s",
                position:"relative", overflow:"hidden" }}
              onMouseEnter={e=>(e.currentTarget.style.borderColor=`${t.color}35`)}
              onMouseLeave={e=>(e.currentTarget.style.borderColor="rgba(255,255,255,.07)")}>

              {/* Background tint */}
              <div style={{ position:"absolute", top:0, right:0, width:80, height:80,
                background:`radial-gradient(circle,${t.color}12 0%,transparent 70%)`,
                pointerEvents:"none" }}/>

              {/* Stars */}
              <div style={{ display:"flex", gap:"3px" }}>
                {[...Array(5)].map((_,si)=>(
                  <motion.div key={si}
                    initial={{ opacity:0, scale:0 }}
                    animate={inView?{opacity:1,scale:1}:{}}
                    transition={{ delay:.3+i*.12+si*.05 }}>
                    <Star size={12} color={t.color} fill={t.color}/>
                  </motion.div>
                ))}
              </div>

              <Quote size={20} color={`${t.color}70`}/>

              <p style={{ ...B, color:"var(--muted)", fontSize:"clamp(12px,1.7vw,14px)",
                lineHeight:1.78, flex:1 }}>
                "{t.content}"
              </p>

              <div style={{ display:"flex", alignItems:"center", gap:"12px" }}>
                <div style={{ width:40, height:40, borderRadius:"50%", flexShrink:0,
                  background:`linear-gradient(135deg,${t.color},${t.color}88)`,
                  display:"flex", alignItems:"center", justifyContent:"center",
                  ...H, fontWeight:700, fontSize:"13px", color:"#fff",
                  boxShadow:`0 4px 12px ${t.color}40` }}>{t.avatar}</div>
                <div>
                  <div style={{ ...H, fontWeight:700, color:"var(--text)", fontSize:"13px" }}>{t.name}</div>
                  <div style={{ ...B, color:"var(--dim)", fontSize:"11px" }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
