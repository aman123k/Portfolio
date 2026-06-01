import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Components
import { ParticlesBg } from './components/ParticlesBg';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const pathRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // 1. Initialize Lenis Smooth Scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // 2. Custom Cursor Follower using GSAP
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
          ease: 'power2.out',
        });
      }
    };

    window.addEventListener('mousemove', moveCursor);

    // 3. Hover effects for links and buttons to expand cursor
    const handleMouseEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.add('hovered');
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.remove('hovered');
      }
    };

    const interactiveElements = document.querySelectorAll('a, button, input, textarea');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // 4. Global Scroll Path progress line animation
    let scrollTween: gsap.core.Tween | null = null;
    if (pathRef.current) {
      scrollTween = gsap.to(pathRef.current, {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.3,
        },
      });
    }

    // 5. Magnetic Hover Effect inspired by Lusion.co
    const magneticElements = document.querySelectorAll('.magnetic');
    const handleMagneticMove = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const el = mouseEvent.currentTarget as HTMLElement;
      const rect = el.getBoundingClientRect();
      const x = mouseEvent.clientX - rect.left - rect.width / 2;
      const y = mouseEvent.clientY - rect.top - rect.height / 2;
      
      gsap.to(el, {
        x: x * 0.35,
        y: y * 0.35,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMagneticLeave = (e: Event) => {
      const el = e.currentTarget as HTMLElement;
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)',
      });
    };

    magneticElements.forEach((el) => {
      el.addEventListener('mousemove', handleMagneticMove);
      el.addEventListener('mouseleave', handleMagneticLeave);
    });

    // Clean up
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      magneticElements.forEach((el) => {
        el.removeEventListener('mousemove', handleMagneticMove);
        el.removeEventListener('mouseleave', handleMagneticLeave);
      });
      if (scrollTween) {
        scrollTween.scrollTrigger?.kill();
        scrollTween.kill();
      }
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {/* Custom Cursor Dot */}
      <div ref={cursorRef} className="custom-cursor" />

      {/* High-quality Canvas Interactive Particles */}
      <ParticlesBg />

      {/* Decorative Blur Orbs */}
      <div className="glow-orb orb-cyan" />
      <div className="glow-orb orb-purple" />

      {/* Sticky Header Navbar */}
      <Navbar />

      {/* Layout Content */}
      <main style={{ position: 'relative', zIndex: 10 }}>
        {/* Global Scroll Indicator Line */}
        <div className="scroll-path-container">
          <div ref={pathRef} className="scroll-path-progress" />
        </div>

        {/* Sections */}
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
