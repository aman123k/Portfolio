import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Star {
  x: number; y: number;
  vx: number; vy: number;
  radius: number;
  baseOpacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  parallaxFactor: number;
  colorTemp: number;
}

interface ShootingStar {
  x: number; y: number;
  vx: number; vy: number;
  length: number; opacity: number;
  life: number; maxLife: number;
  active: boolean;
}

interface GalaxyParticle {
  distance: number;
  angle: number;
  speed: number;
  size: number;
  color: string;
  opacity: number;
}

export const SpaceBg: React.FC = () => {
  const canvasRef   = useRef<HTMLCanvasElement | null>(null);
  const mouseRef    = useRef({ x: 0.5, y: 0.5 });

  // Layer 1: scroll movement
  const p2ScrollRef = useRef<HTMLDivElement | null>(null);
  const p3ScrollRef = useRef<HTMLDivElement | null>(null);

  // Layer 2: mouse parallax
  const p2MouseRef  = useRef<HTMLDivElement | null>(null);
  const p3MouseRef  = useRef<HTMLDivElement | null>(null);

  // Layer 3: continuous float animation
  const p2FloatRef  = useRef<HTMLDivElement | null>(null);
  const p3FloatRef  = useRef<HTMLDivElement | null>(null);

  const nebula1Ref  = useRef<HTMLDivElement | null>(null);
  const nebula2Ref  = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrameId: number;
    let stars: Star[] = [];
    let shootingStars: ShootingStar[] = [];
    let galaxyStars: GalaxyParticle[] = [];
    let width  = (canvas.width  = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // ── Build star field ──────────────────────────────────────────────
    const buildStars = () => {
      stars = [];
      const count = Math.min(Math.floor((width * height) / 2000), 380);
      for (let i = 0; i < count; i++) {
        const layer = Math.random();
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (0.08 + layer * 0.55) * (Math.random() > 0.5 ? 1 : -1) * 0.6,
          vy: (0.04 + layer * 0.30) * (Math.random() > 0.5 ? 1 : -1) * 0.4,
          radius:       0.3 + layer * 1.8,
          baseOpacity:  0.25 + layer * 0.6,
          twinkleSpeed: 0.6 + Math.random() * 3.0,
          twinkleOffset: Math.random() * Math.PI * 2,
          parallaxFactor: layer,
          colorTemp: Math.random(),
        });
      }
    };

    // ── Build Milky Way Galaxy ─────────────────────────────────────────
    const buildGalaxy = () => {
      galaxyStars = [];
      const numParticles = Math.min(Math.floor((width * height) / 900), 1600);
      const numArms = 4; // 4-arm spiral (like the Milky Way!)
      const galaxyColorTemps = [
        "rgba(255, 140, 255, ", // magenta/purple
        "rgba(140, 190, 255, ", // light blue
        "rgba(255, 220, 170, ", // warm golden/core
        "rgba(255, 255, 255, "  // white
      ];
      
      const maxRadius = Math.min(width, height) * 0.26;

      for (let i = 0; i < numParticles; i++) {
        let distance = 0;
        let angle = 0;
        let colorPrefix = galaxyColorTemps[3]; // default white
        const randType = Math.random();
        
        // Split particles: 20% core stars, 65% arm stars, 15% ambient disk stars
        if (randType < 0.2) {
          // 1. Core bulge stars (densely packed center)
          distance = Math.pow(Math.random(), 2) * maxRadius * 0.18;
          angle = Math.random() * 2 * Math.PI;
          colorPrefix = Math.random() > 0.45 ? galaxyColorTemps[2] : galaxyColorTemps[3];
        } else if (randType < 0.85) {
          // 2. Main spiral arm stars
          distance = Math.pow(Math.random(), 1.4) * maxRadius;
          const arm = i % numArms;
          const armAngle = (arm * 2 * Math.PI) / numArms;
          // Moderate dispersion for natural arm thickness
          const dispersion = (Math.random() - 0.5) * (0.24 + 40 / (distance + 10));
          angle = armAngle + dispersion;
          
          const colorRand = Math.random();
          if (colorRand < 0.35) colorPrefix = galaxyColorTemps[0]; // magenta/purple
          else if (colorRand < 0.7) colorPrefix = galaxyColorTemps[1]; // blue
          else colorPrefix = galaxyColorTemps[3]; // white
        } else {
          // 3. Ambient disk stars (fills the gaps between arms with a faint glow)
          distance = Math.pow(Math.random(), 1.2) * maxRadius;
          angle = Math.random() * 2 * Math.PI;
          colorPrefix = Math.random() > 0.5 ? galaxyColorTemps[1] : galaxyColorTemps[3];
        }

        galaxyStars.push({
          distance,
          angle,
          speed: 0.7 + Math.random() * 0.5,
          size: 0.35 + Math.random() * 1.8 * (1 - distance / maxRadius),
          color: colorPrefix,
          opacity: (randType >= 0.85 ? 0.08 : 0.15) + (1 - distance / maxRadius) * 0.85,
        });
      }
    };

    const spawnShootingStar = () => {
      const angle = (Math.random() * 30 + 10) * (Math.PI / 180);
      const speed = 8 + Math.random() * 12;
      shootingStars.push({
        x: Math.random() * width,
        y: Math.random() * (height * 0.4),
        vx:  Math.cos(angle) * speed,
        vy:  Math.sin(angle) * speed,
        length:  80 + Math.random() * 120,
        opacity: 0, life: 0,
        maxLife: 60 + Math.random() * 60,
        active: true,
      });
    };

    let shootingStarTimer = 0;
    const INTERVAL = 180;

    const handleResize = () => {
      width  = canvas.width  = window.innerWidth;
      height = canvas.height = window.innerHeight;
      buildStars();
      buildGalaxy();
    };
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX / window.innerWidth;
      mouseRef.current.y = e.clientY / window.innerHeight;
    };
    window.addEventListener('mousemove', handleMouseMove);

    buildStars();
    buildGalaxy();

    const starColor = (temp: number, alpha: number) => {
      if (temp < 0.25)  return `rgba(160,185,255,${alpha.toFixed(3)})`;
      if (temp < 0.65)  return `rgba(255,255,255,${alpha.toFixed(3)})`;
      return                   `rgba(255,240,200,${alpha.toFixed(3)})`;
    };

    // ── Canvas render loop ─────────────────────────────────────────────
    const draw = (timestamp: number) => {
      ctx.clearRect(0, 0, width, height);
      const t = timestamp / 1000;

      const mx = (mouseRef.current.x - 0.5) * 30;
      const my = (mouseRef.current.y - 0.5) * 30;

      stars.forEach((s) => {
        s.x += s.vx;
        s.y += s.vy;
        if (s.x < -4)          s.x = width + 4;
        else if (s.x > width  + 4) s.x = -4;
        if (s.y < -4)          s.y = height + 4;
        else if (s.y > height + 4) s.y = -4;

        const tw    = Math.sin(t * s.twinkleSpeed + s.twinkleOffset);
        const alpha = Math.max(0.05, Math.min(1, s.baseOpacity + tw * 0.38));
        const px    = s.x + mx * s.parallaxFactor * 0.4;
        const py    = s.y + my * s.parallaxFactor * 0.4;

        if (s.radius > 1.2) {
          const haloR = s.radius * 4.5;
          const grd   = ctx.createRadialGradient(px, py, 0, px, py, haloR);
          grd.addColorStop(0, starColor(s.colorTemp, alpha * 0.55));
          grd.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.beginPath();
          ctx.arc(px, py, haloR, 0, Math.PI * 2);
          ctx.fillStyle = grd;
          ctx.fill();
        }
        ctx.beginPath();
        ctx.arc(px, py, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = starColor(s.colorTemp, alpha);
        ctx.fill();
      });

      // ── Draw Milky Way Galaxy ───────────────────────────────────────
      // Center of the galaxy has scroll parallax (deep-space slow drift) and mouse parallax
      const gcx = width * 0.82 + mx * 0.35 - (window.scrollY * 0.02);
      const gcy = height * 0.18 + my * 0.35 - (window.scrollY * 0.06);

      // 1. Draw core glow
      const coreGrd = ctx.createRadialGradient(gcx, gcy, 0, gcx, gcy, Math.min(width, height) * 0.1);
      coreGrd.addColorStop(0, 'rgba(255, 220, 170, 0.35)'); // warm golden glow
      coreGrd.addColorStop(0.35, 'rgba(255, 140, 255, 0.12)'); // purple glow
      coreGrd.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.beginPath();
      ctx.arc(gcx, gcy, Math.min(width, height) * 0.1, 0, Math.PI * 2);
      ctx.fillStyle = coreGrd;
      ctx.fill();

      // 1.5 Draw swirling gas clouds (nebula arms)
      const numNebulae = 4;
      const nebulaColors = [
        "rgba(255, 100, 255, 0.025)", // magenta
        "rgba(100, 150, 255, 0.025)", // blue
        "rgba(255, 180, 100, 0.02)",  // gold
        "rgba(180, 100, 255, 0.025)"  // purple
      ];
      for (let i = 0; i < numNebulae; i++) {
        // Slow gas arm rotation (0.1 rad/sec)
        const nebAngle = t * 0.1 + (i * Math.PI) / 2;
        const nebDist = Math.min(width, height) * 0.08;
        const nebX = gcx + Math.cos(nebAngle) * nebDist;
        const nebY = gcy + Math.sin(nebAngle) * nebDist * 0.35; // follow the same tilt
        
        const nebGrd = ctx.createRadialGradient(nebX, nebY, 0, nebX, nebY, Math.min(width, height) * 0.2);
        nebGrd.addColorStop(0, nebulaColors[i]);
        nebGrd.addColorStop(1, 'rgba(0,0,0,0)');
        
        ctx.beginPath();
        ctx.arc(nebX, nebY, Math.min(width, height) * 0.2, 0, Math.PI * 2);
        ctx.fillStyle = nebGrd;
        ctx.fill();
      }

      // 2. Draw galaxy particles
      // Rotate the entire spiral system as one structure at a smooth visible rate (0.2 rad/sec)
      const baseRotationSpeed = 0.2; 
      
      galaxyStars.forEach((gs) => {
        const spiralFactor = 0.012; // tightness of the arms
        
        // Calculate the current angle: static base angle + spiral arm twist + global rotation
        // Using a uniform rotation speed keeps the spiral arm structure intact forever
        const angle = gs.angle + gs.distance * spiralFactor + t * baseRotationSpeed;

        const tiltFactor = 0.35; // compress Y for 3D tilted disk effect
        const galaxyRotation = -0.4; // rotation of the galaxy disk on the screen

        const cosRot = Math.cos(galaxyRotation);
        const sinRot = Math.sin(galaxyRotation);

        const rawX = gs.distance * Math.cos(angle);
        const rawY = gs.distance * Math.sin(angle) * tiltFactor;

        // Apply tilt and rotation
        const px = gcx + (rawX * cosRot - rawY * sinRot);
        const py = gcy + (rawX * sinRot + rawY * cosRot);

        // Twinkle factor
        const tw = Math.sin(t * 1.5 + gs.distance * 0.1);
        const alpha = Math.max(0.05, Math.min(1, gs.opacity + tw * 0.15));

        ctx.beginPath();
        ctx.arc(px, py, gs.size, 0, Math.PI * 2);
        ctx.fillStyle = `${gs.color}${alpha.toFixed(3)})`;
        ctx.fill();
      });

      shootingStarTimer++;
      if (shootingStarTimer >= INTERVAL) { shootingStarTimer = 0; spawnShootingStar(); }
      shootingStars = shootingStars.filter((ss) => ss.active);
      shootingStars.forEach((ss) => {
        ss.x += ss.vx; ss.y += ss.vy; ss.life += 1;
        const prog = ss.life / ss.maxLife;
        if      (prog < 0.2)  ss.opacity = prog / 0.2;
        else if (prog < 0.7)  ss.opacity = 1;
        else                  ss.opacity = 1 - (prog - 0.7) / 0.3;
        if (ss.life >= ss.maxLife) { ss.active = false; return; }

        const mag  = Math.hypot(ss.vx, ss.vy);
        const tailX = ss.x - (ss.vx / mag) * ss.length;
        const tailY = ss.y - (ss.vy / mag) * ss.length;
        const grad  = ctx.createLinearGradient(tailX, tailY, ss.x, ss.y);
        grad.addColorStop(0,   'rgba(255,255,255,0)');
        grad.addColorStop(0.6, `rgba(255,255,255,${(ss.opacity * 0.5).toFixed(3)})`);
        grad.addColorStop(1,   `rgba(255,255,255,${ss.opacity.toFixed(3)})`);
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(ss.x, ss.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth   = 1.5;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(ss.x, ss.y, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${ss.opacity.toFixed(3)})`;
        ctx.fill();
      });

      animFrameId = requestAnimationFrame(draw);
    };
    animFrameId = requestAnimationFrame(draw);

    // ── Layer 3: GSAP float on inner wrappers (never conflicts) ──────
    [
      { ref: p2FloatRef, y: 18, x: -6, dur: 4.6 },
      { ref: p3FloatRef, y: 12, x: 4,  dur: 8.8 },
    ].forEach(({ ref, y, x, dur }) => {
      if (!ref.current) return;
      gsap.fromTo(ref.current,
        { y: -y / 2, x: -x / 2 },
        { y:  y / 2, x:  x / 2, duration: dur, yoyo: true, repeat: -1, ease: 'sine.inOut' }
      );
    });

    // ── Nebula pulse ──────────────────────────────────────────────────
    if (nebula1Ref.current)
      gsap.fromTo(nebula1Ref.current,
        { opacity: 0.07, scale: 0.96 },
        { opacity: 0.15, scale: 1.1, duration: 7, yoyo: true, repeat: -1, ease: 'sine.inOut' }
      );
    if (nebula2Ref.current)
      gsap.fromTo(nebula2Ref.current,
        { opacity: 0.04, scale: 0.94 },
        { opacity: 0.12, scale: 1.14, duration: 10, yoyo: true, repeat: -1, ease: 'sine.inOut', delay: 2.5 }
      );

    // ── Layer 1: Scroll movement — clean scrubbed timelines ───────────
    // Planet 2 (ice, bottom-left): rises and drifts right
    gsap.to(p2ScrollRef.current, {
      x: 90, y: -130,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 2.8,
      },
    });

    // Planet 3 (red, center-left): drifts right & down — smaller movement
    gsap.to(p3ScrollRef.current, {
      x: 55, y: 140,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 3.5,
      },
    });

    // ── Layer 2: Mouse parallax on middle wrappers ────────────────────
    const mouseRefs  = [p2MouseRef,  p3MouseRef];
    const depths     = [14, -28];

    const handlePlanetParallax = (e: MouseEvent) => {
      const rx = e.clientX / window.innerWidth  - 0.5;
      const ry = e.clientY / window.innerHeight - 0.5;
      mouseRefs.forEach(({ current: el }, i) => {
        if (!el) return;
        gsap.to(el, {
          x: rx * depths[i],
          y: ry * depths[i] * 0.7,
          duration: 1.4 + i * 0.35,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      });
    };
    window.addEventListener('mousemove', handlePlanetParallax);

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousemove', handlePlanetParallax);
      ScrollTrigger.getAll().forEach((st) => st.kill());
      [p2FloatRef, p3FloatRef].forEach(({ current }) => { if (current) gsap.killTweensOf(current); });
      mouseRefs.forEach(({ current }) => { if (current) gsap.killTweensOf(current); });
      if (nebula1Ref.current) gsap.killTweensOf(nebula1Ref.current);
      if (nebula2Ref.current) gsap.killTweensOf(nebula2Ref.current);
    };
  }, []);

  return (
    <div className="space-bg-container">
      <canvas ref={canvasRef} className="space-canvas" />
      <div ref={nebula1Ref} className="nebula nebula-1" />
      <div ref={nebula2Ref} className="nebula nebula-2" />

      {/* Planet 2 – Ice/Ocean Planet (bottom-left) */}
      <div ref={p2ScrollRef} className="planet planet-2">
        <div ref={p2MouseRef} className="planet-layer">
          <div ref={p2FloatRef} className="planet-layer">
            <div className="planet-body planet-2-body" />
            <div className="planet-glow planet-2-glow" />
          </div>
        </div>
      </div>

      {/* Planet 3 – Tiny Distant Red Planet (center-left) */}
      <div ref={p3ScrollRef} className="planet planet-3">
        <div ref={p3MouseRef} className="planet-layer">
          <div ref={p3FloatRef} className="planet-layer">
            <div className="planet-body planet-3-body" />
            <div className="planet-glow planet-3-glow" />
          </div>
        </div>
      </div>
    </div>
  );
};
