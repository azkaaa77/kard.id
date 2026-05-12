import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Global IntersectionObserver for .reveal elements
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    const revealEls = document.querySelectorAll('.reveal');
    revealEls.forEach((el) => observer.observe(el));

    return () => {
      revealEls.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Re-run observer when DOM updates (for dynamic content)
  useEffect(() => {
    const mutationObserver = new MutationObserver(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: 0.08 }
      );
      document.querySelectorAll('.reveal:not(.visible)').forEach((el) => observer.observe(el));
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });
    return () => mutationObserver.disconnect();
  }, []);

  return (
    <>
      {/* Noise texture overlay */}
      <div className="noise" />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <Portfolio />
        <Process />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
