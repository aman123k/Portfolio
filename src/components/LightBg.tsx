import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const LightBg: React.FC = () => {
  const sunRef = useRef<HTMLDivElement | null>(null);
  const floatingRef = useRef<HTMLDivElement | null>(null);
  const interactiveRef = useRef<HTMLDivElement | null>(null);
  const sunsetCoreRef = useRef<HTMLDivElement | null>(null);
  const sunsetGlowRef = useRef<HTMLDivElement | null>(null);
  const ring1Ref = useRef<HTMLDivElement | null>(null);
  const ring2Ref = useRef<HTMLDivElement | null>(null);
  const ring3Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sun = sunRef.current;
    const sunsetCore = sunsetCoreRef.current;
    const sunsetGlow = sunsetGlowRef.current;
    if (!sun) return;

    // Set initial GSAP states
    gsap.set(sun, { x: '0vw', y: '0vh', scale: 1 });
    if (sunsetCore) gsap.set(sunsetCore, { opacity: 0 });
    if (sunsetGlow) gsap.set(sunsetGlow, { opacity: 0 });

    // GSAP ScrollTrigger Animation for the Sun tracking scroll
    // 0% Scroll (Hero): Top-right (0vw, 0vh)
    // 50% Scroll (Skills/Experience): Mid-right (-25vw, 35vh) and scaled up
    // 100% Scroll (Contact/Footer): Settles behind footer content (-45vw, 80vh)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5, // smooth scrubbing with a delay for elegance
      }
    });

    tl.to(sun, {
      x: '-22vw',
      y: '32vh',
      scale: 1.2,
      ease: 'power1.inOut',
    })
    .to(sun, {
      x: '-45vw',
      y: '80vh',
      scale: 1.1,
      ease: 'power1.inOut',
    });

    // Cross-fade the golden core/glow into sunset-coral core/glow as scroll progress approaches footer
    if (sunsetCore && sunsetGlow) {
      tl.to([sunsetCore, sunsetGlow], {
        opacity: 1,
        ease: 'none',
      }, 0); // Spans across the entire scroll timeline
    }

    // Gentle wave floating motion wrapper
    const floating = floatingRef.current;
    const floatTween = gsap.to(floating, {
      y: 12,
      duration: 4.5,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
    });

    // Slow rotation of atmospheric orbit rings to keep the sun alive and premium
    const r1 = ring1Ref.current;
    const r2 = ring2Ref.current;
    const r3 = ring3Ref.current;

    const r1Tween = gsap.to(r1, {
      rotation: 360,
      duration: 30,
      repeat: -1,
      ease: 'none',
    });

    const r2Tween = gsap.to(r2, {
      rotation: -360,
      duration: 40,
      repeat: -1,
      ease: 'none',
    });

    const r3Tween = gsap.to(r3, {
      rotation: 360,
      duration: 60,
      repeat: -1,
      ease: 'none',
    });

    // Mouse tracking parallax effect for the inner sun system
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPercent = (clientX / window.innerWidth - 0.5) * 35; // displacement of up to 35px
      const yPercent = (clientY / window.innerHeight - 0.5) * 35;

      if (interactiveRef.current) {
        gsap.to(interactiveRef.current, {
          x: xPercent,
          y: yPercent,
          duration: 0.8,
          ease: 'power2.out',
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      tl.kill();
      floatTween.kill();
      r1Tween.kill();
      r2Tween.kill();
      r3Tween.kill();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="light-bg-container">
      {/* Subtle grid and dot patterns */}
      <div className="light-bg-grid" />

      {/* Stylized Sun System */}
      <div className="sun-system" ref={sunRef}>
        {/* Floating wrapper adds organic vertical waving */}
        <div className="sun-floating-wrapper" ref={floatingRef} style={{ width: '100%', height: '100%' }}>
          {/* Interactive wrapper responds to mouse movement */}
          <div 
            ref={interactiveRef} 
            style={{ 
              width: '100%', 
              height: '100%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              position: 'relative' 
            }}
          >
            {/* Soft atmospheric glow: Gold */}
            <div className="sun-glow gold-glow" />

            {/* Soft atmospheric glow: Sunset Red (faded in on scroll) */}
            <div className="sun-glow sunset-glow" ref={sunsetGlowRef} />

            {/* Orbit Rings */}
            <div className="sun-ring ring-3" ref={ring3Ref} />
            <div className="sun-ring ring-2" ref={ring2Ref}>
              {/* Satellite planet orbiting the sun */}
              <div className="sun-satellite" />
            </div>
            <div className="sun-ring ring-1" ref={ring1Ref} />

            {/* Inner Sun Disk: Golden Core */}
            <div className="sun-core gold-core" />

            {/* Inner Sun Disk: Sunset Core (faded in on scroll) */}
            <div className="sun-core sunset-core" ref={sunsetCoreRef} />
          </div>
        </div>
      </div>
    </div>
  );
};
