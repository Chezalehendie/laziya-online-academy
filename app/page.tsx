'use client';
import { Home } from './pages/Home'
import Lenis from '@studio-freight/lenis';
import { useEffect } from "react";

export default function HomePage() {

  // lenis
  useEffect(() => {
    // Create a new Lenis instance
    const lenis = new Lenis({
      duration: 8,  // Duration of the smooth scroll
      easing: (t) => t,  // Easing function
      lerp: 0.1,  // The rate of interpolation
      wheelEventsTarget: document.documentElement,  // Listen to scroll events on the document element
      infinite: false,
      smoothWheel: true,
    });

    // Function for animation frame
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    // Start the animation frame loop
    requestAnimationFrame(raf);

    // Cleanup when the component is unmounted
    return () => {
      lenis.destroy();
    };
  }, []);

  return <Home />
}
