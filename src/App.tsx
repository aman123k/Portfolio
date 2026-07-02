import { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Components
import { ParticlesBg } from './components/ParticlesBg';
import { LightBg } from './components/LightBg';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  
  // Theme state lifted to App level
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('theme');
    return (saved as 'light' | 'dark') || 'light';
  });

  useEffect(() => {
    // Write theme attributes to HTML
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

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

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

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

    // 4. Magnetic Hover Effect inspired by Lusion.co
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

    // Recalculate ScrollTrigger parameters on load and dynamic render
    const handleLoad = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('load', handleLoad);

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000);

    // Clean up
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('load', handleLoad);
      clearTimeout(refreshTimer);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      magneticElements.forEach((el) => {
        el.removeEventListener('mousemove', handleMagneticMove);
        el.removeEventListener('mouseleave', handleMagneticLeave);
      });
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {/* Custom Cursor Dot */}
      <div ref={cursorRef} className="custom-cursor" />

      {/* High-quality Canvas Interactive Particles - Only rendered in Dark Mode */}
      {theme === 'dark' && <ParticlesBg />}

      {/* Light Mode Sun Background */}
      {theme === 'light' && <LightBg />}

      {/* Decorative Blur Orbs - Only rendered in Dark Mode */}
      {theme === 'dark' && (
        <>
          <div className="glow-orb orb-cyan" />
          <div className="glow-orb orb-purple" />
        </>
      )}

      {/* Sticky Header Navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Layout Content */}
      <main style={{ position: 'relative', zIndex: 10 }}>

        {/* Sections */}
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
