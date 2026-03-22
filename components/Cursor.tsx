"use client";
import { useEffect, useState } from "react";

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [ring, setRing] = useState({ x: 0, y: 0 });
  const [isHover, setIsHover] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ringX = 0, ringY = 0;
    let animFrame: number;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      ringX = lerp(ringX, pos.x, 0.12);
      ringY = lerp(ringY, pos.y, 0.12);
      setRing({ x: ringX, y: ringY });
      animFrame = requestAnimationFrame(animate);
    };

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleHoverStart = () => setIsHover(true);
    const handleHoverEnd = () => setIsHover(false);

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
      el.addEventListener("mouseenter", handleHoverStart);
      el.addEventListener("mouseleave", handleHoverEnd);
    });

    animFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(animFrame);
    };
  }, [pos.x, pos.y, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <div
        style={{
          position: "fixed",
          left: pos.x - 4,
          top: pos.y - 4,
          width: 8,
          height: 8,
          background: "#6c63ff",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          transition: "transform 0.1s ease",
          transform: isHover ? "scale(2)" : "scale(1)",
        }}
      />
      <div
        style={{
          position: "fixed",
          left: ring.x - (isHover ? 24 : 16),
          top: ring.y - (isHover ? 24 : 16),
          width: isHover ? 48 : 32,
          height: isHover ? 48 : 32,
          border: "1px solid rgba(108, 99, 255, 0.5)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9998,
          transition: "width 0.3s ease, height 0.3s ease, border-color 0.3s ease",
          borderColor: isHover ? "rgba(108, 99, 255, 0.8)" : "rgba(108, 99, 255, 0.4)",
        }}
      />
    </>
  );
}
