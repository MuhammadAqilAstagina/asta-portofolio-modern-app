"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

const PARTICLE_COUNT = 70;
const CONNECTION_DISTANCE = 120;
const MOUSE_RADIUS = 100;
const MOUSE_FORCE = 0.02;
const PARTICLE_SPEED = 0.3;

function createParticle(w: number, h: number): Particle {
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * PARTICLE_SPEED * 2,
    vy: (Math.random() - 0.5) * PARTICLE_SPEED * 2,
    radius: 1.5 + Math.random(),
    opacity: 0.3 + Math.random() * 0.4,
  };
}

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const particlesRef = useRef<Particle[]>([]);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const getColors = () => {
      const dark = document.documentElement.classList.contains("dark");
      return {
        r: dark ? 96 : 59,
        g: dark ? 165 : 130,
        b: dark ? 250 : 246,
      };
    };

    let colors = getColors();

    function resize() {
      const rect = canvas!.parentElement!.getBoundingClientRect();
      canvas!.width = rect.width * window.devicePixelRatio;
      canvas!.height = rect.height * window.devicePixelRatio;
      canvas!.style.width = `${rect.width}px`;
      canvas!.style.height = `${rect.height}px`;
      ctx!.scale(window.devicePixelRatio, window.devicePixelRatio);
    }

    resize();

    const w = () => canvas!.parentElement!.getBoundingClientRect().width;
    const h = () => canvas!.parentElement!.getBoundingClientRect().height;

    particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () =>
      createParticle(w(), h())
    );

    function handleMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    }

    function handleMouseLeave() {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    }

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", resize);

    function animate() {
      const W = w();
      const H = h();

      ctx!.clearRect(0, 0, W, H);

      colors = getColors();

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) { p.x = 0; p.vx *= -1; }
        if (p.x > W) { p.x = W; p.vx *= -1; }
        if (p.y < 0) { p.y = 0; p.vy *= -1; }
        if (p.y > H) { p.y = H; p.vy *= -1; }

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
          p.vx += (dx / dist) * force * MOUSE_FORCE;
          p.vy += (dy / dist) * force * MOUSE_FORCE;
        }

        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > PARTICLE_SPEED * 2) {
          p.vx *= 0.98;
          p.vy *= 0.98;
        }
      }

      ctx!.lineCap = "round";

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DISTANCE) {
            const alpha = 1 - dist / CONNECTION_DISTANCE;
            ctx!.strokeStyle = `rgba(${colors.r},${colors.g},${colors.b},${alpha * 0.15})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.stroke();
          }
        }
      }

      for (const p of particles) {
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${colors.r},${colors.g},${colors.b},${p.opacity})`;
        ctx!.fill();

        const mdx = mouse.x - p.x;
        const mdy = mouse.y - p.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mDist < MOUSE_RADIUS) {
          const glow = 1 - mDist / MOUSE_RADIUS;
          ctx!.beginPath();
          ctx!.arc(p.x, p.y, p.radius + glow * 4, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(${colors.r},${colors.g},${colors.b},${glow * 0.3})`;
          ctx!.fill();
        }
      }

      animRef.current = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animRef.current);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-auto absolute inset-0 h-full w-full background"
      aria-hidden="true"
    />
  );
}
