"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  r: number;
  baseAlpha: number;
  phase: number;
  speed: number;
}

/**
 * Procedural drifting starfield on a canvas — used behind the hero only.
 * Subtle by design: slow parallax drift and faint twinkle, no shooting
 * stars, no color. Disabled entirely under prefers-reduced-motion.
 */
export function Starfield({ density = 0.00012 }: { density?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let stars: Star[] = [];
    let raf = 0;
    let width = 0;
    let height = 0;

    const seed = (w: number, h: number) => {
      const count = Math.floor(w * h * density);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.1 + 0.3,
        baseAlpha: Math.random() * 0.5 + 0.15,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.03 + 0.008,
      }));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed(width, height);
    };

    const draw = (t: number) => {
      // Theme-aware star color: light specks on dark sky, dark on light.
      const light = document.documentElement.classList.contains("light");
      const starColor = light ? "#3b4a63" : "#cdd8e8";
      ctx.clearRect(0, 0, width, height);
      for (const s of stars) {
        // Slow leftward drift with wraparound; sinusoidal twinkle.
        s.x -= s.speed;
        if (s.x < -2) s.x = width + 2;
        const alpha = reduced
          ? s.baseAlpha
          : s.baseAlpha * (0.7 + 0.3 * Math.sin(t * 0.0008 + s.phase));
        ctx.globalAlpha = light ? alpha * 0.55 : alpha;
        ctx.fillStyle = starColor;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      if (!reduced) raf = requestAnimationFrame(draw);
    };

    resize();
    if (reduced) {
      draw(0); // single static frame
    } else {
      raf = requestAnimationFrame(draw);
    }

    // Under reduced motion there's no animation loop, so redraw the static
    // frame when the theme class changes on <html>.
    const themeObserver = new MutationObserver(() => {
      if (reduced) draw(0);
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      themeObserver.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
