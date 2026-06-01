import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const cursorRef = useRef(null);
  const cursorRingRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
      if (cursorRingRef.current) {
        setTimeout(() => {
          if (cursorRingRef.current) {
            cursorRingRef.current.style.left = e.clientX + 'px';
            cursorRingRef.current.style.top = e.clientY + 'px';
          }
        }, 80);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={cursorRingRef} className="custom-cursor-ring" />

      <section
        id="home"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          paddingTop: '100px',
          background: 'var(--bg-base)',
        }}
      >
        {/* Radial orbs */}
        <div style={{ position: 'absolute', width: '700px', height: '700px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(67,56,202,0.14) 0%, transparent 70%)', top: '-200px', right: '-200px', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.09) 0%, transparent 70%)', bottom: '-100px', left: '-100px', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(236,72,153,0.07) 0%, transparent 70%)', top: '40%', left: '40%', pointerEvents: 'none' }} />

        {/* Grid */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />

        <div className="container" style={{ width: '100%' }}>
          <div className="hero-grid">
            {/* TEXT */}
            <div>
              {/* Badge */}
              <div className="reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(67,56,202,0.12)', border: '1px solid rgba(67,56,202,0.28)', borderRadius: '100px', padding: '6px 16px', marginBottom: '28px' }}>
                <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#4338CA', animation: 'pulse-dot 2s infinite' }} />
                <span style={{ fontSize: '13px', color: 'var(--text-body)', fontFamily: 'var(--font-body)', fontWeight: '500' }}>Tersedia untuk proyek baru · 2026</span>
              </div>

              {/* Headline */}
              <h1 className="reveal reveal-delay-1" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(36px, 6vw, 76px)', fontWeight: '800', lineHeight: '1.05', letterSpacing: '-0.03em', marginBottom: '20px', color: 'var(--text-heading)' }}>
                Kami Bangun<br />
                <span className="gradient-text-hero">Digital Experience</span><br />
                yang Berkesan
              </h1>

              <p className="reveal reveal-delay-2" style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(15px, 2vw, 18px)', color: 'var(--text-body)', lineHeight: '1.7', marginBottom: '32px', maxWidth: '480px' }}>
                Dari landing page yang mengkonversi, website yang elegan, hingga web app yang powerful — kard.id hadir sebagai partner digital terpercaya untuk bisnis Anda.
              </p>

              {/* CTAs */}
              <div className="reveal reveal-delay-3 hero-cta">
                <a href="#kontak" onClick={(e) => { e.preventDefault(); document.querySelector('#kontak')?.scrollIntoView({ behavior: 'smooth' }); }} className="btn-primary" style={{ fontSize: '16px', padding: '16px 32px' }}>
                  Mulai Sekarang →
                </a>
                <a href="#portofolio" onClick={(e) => { e.preventDefault(); document.querySelector('#portofolio')?.scrollIntoView({ behavior: 'smooth' }); }} className="btn-secondary" style={{ fontSize: '16px', padding: '16px 32px' }}>
                  Lihat Portofolio
                </a>
              </div>

              {/* Stats */}
              <div className="reveal reveal-delay-4 hero-stats" style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                {[
                  { number: '50+', label: 'Proyek Selesai' },
                  { number: '98%', label: 'Klien Puas' },
                  { number: '3x',  label: 'Rata-rata ROI' },
                ].map((s) => (
                  <div key={s.label}>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: '800', letterSpacing: '-0.02em', color: 'var(--text-heading)', marginBottom: '4px' }}>{s.number}</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-muted)', fontWeight: '500' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* VISUAL */}
            <div className="reveal reveal-delay-2 hero-visual">
              <HeroVisual />
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', opacity: 0.4 }}>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '10px', letterSpacing: '0.1em', color: 'var(--text-body)' }}>SCROLL</span>
          <div style={{ width: '1px', height: '32px', background: 'linear-gradient(to bottom, white, transparent)', animation: 'float 2s ease-in-out infinite' }} />
        </div>
      </section>
    </>
  );
};

const HeroVisual = () => (
  <div style={{ position: 'relative', height: '500px' }}>
    {/* Browser mockup */}
    <div style={{ position: 'absolute', top: 0, right: 0, width: '100%', maxWidth: '460px', background: '#111827', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)', overflow: 'hidden', boxShadow: '0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)', animation: 'float 6s ease-in-out infinite' }}>
      {/* Browser bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.06)', background: '#0d1526' }}>
        {['#FF5F57', '#FEBC2E', '#28C840'].map((c, i) => <div key={i} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c }} />)}
        <div style={{ flex: 1, marginLeft: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '6px', padding: '5px 12px', fontFamily: 'var(--font-body)', fontSize: '11px', color: '#475569' }}>kard.id/client-project</div>
      </div>
      {/* Browser content */}
      <div style={{ padding: '24px' }}>
        <div style={{ height: '110px', background: 'linear-gradient(135deg, rgba(67,56,202,0.2), rgba(124,58,237,0.15))', borderRadius: '12px', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
          <div style={{ textAlign: 'center', position: 'relative' }}>
            <div style={{ height: '10px', width: '140px', background: 'linear-gradient(90deg, #4338CA, #7C3AED, #EC4899)', borderRadius: '5px', margin: '0 auto 8px' }} />
            <div style={{ height: '6px', width: '100px', background: 'rgba(255,255,255,0.12)', borderRadius: '3px', margin: '0 auto' }} />
          </div>
        </div>
        {[70, 50, 60, 40].map((w, i) => <div key={i} style={{ height: '7px', width: `${w}%`, background: 'rgba(255,255,255,0.07)', borderRadius: '4px', marginBottom: '9px' }} />)}
        <div style={{ display: 'flex', gap: '8px', marginTop: '14px' }}>
          <div style={{ height: '32px', flex: 1, background: 'linear-gradient(135deg, rgba(67,56,202,0.5), rgba(124,58,237,0.4))', borderRadius: '8px' }} />
          <div style={{ height: '32px', flex: 1, background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }} />
        </div>
      </div>
    </div>

    {/* Floating — Lighthouse */}
    <div style={{ position: 'absolute', bottom: '60px', left: '-20px', background: '#111827', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '14px', padding: '16px 20px', boxShadow: '0 16px 40px rgba(0,0,0,0.6)', animation: 'float 5s ease-in-out infinite 1s', zIndex: 2, minWidth: '170px', backdropFilter: 'blur(10px)' }}>
      <div style={{ fontFamily: 'var(--font-body)', fontSize: '10px', color: 'var(--text-muted)', marginBottom: '8px', fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Performa</div>
      <div style={{ fontFamily: 'var(--font-heading)', fontSize: '26px', fontWeight: '800', color: '#34D399', letterSpacing: '-0.02em' }}>98 / 100</div>
      <div style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px' }}>Google Lighthouse</div>
      <div style={{ marginTop: '10px', display: 'flex', gap: '4px' }}>
        {[95, 98, 92, 100].map((v, i) => (
          <div key={i} style={{ flex: 1 }}>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '9px', color: '#34D399', fontWeight: '600', marginBottom: '2px' }}>{v}</div>
            <div style={{ height: '3px', background: 'rgba(255,255,255,0.06)', borderRadius: '2px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${v}%`, background: '#34D399', borderRadius: '2px' }} />
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Floating — Conversion */}
    <div style={{ position: 'absolute', top: '20px', left: '-10px', background: '#111827', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '14px', padding: '14px 18px', boxShadow: '0 16px 40px rgba(0,0,0,0.6)', animation: 'float 7s ease-in-out infinite 2s', zIndex: 2, backdropFilter: 'blur(10px)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(67,56,202,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>📈</div>
        <div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '10px', color: 'var(--text-muted)', fontWeight: '600', letterSpacing: '0.05em' }}>KONVERSI</div>
          <div style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: '800', color: 'var(--text-heading)' }}>+340%</div>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
