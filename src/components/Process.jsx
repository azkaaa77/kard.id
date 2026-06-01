import React, { useEffect, useRef, useState } from 'react';

const steps = [
  {
    number: '01',
    title: 'Discovery & Brief',
    description: 'Kami mulai dengan memahami bisnis, target audiens, dan goals Anda secara mendalam melalui sesi konsultasi.',
    icon: '🔍',
    duration: '1–2 Hari',
    accent: '#4338CA',
  },
  {
    number: '02',
    title: 'Desain & Prototyping',
    description: 'Tim desainer kami merancang wireframe dan mockup high-fidelity yang bisa Anda review dan feedback sebelum development.',
    icon: '🎨',
    duration: '3–5 Hari',
    accent: '#7C3AED',
  },
  {
    number: '03',
    title: 'Development',
    description: 'Pengembangan dilakukan dengan teknologi modern, clean code, dan daily progress update agar Anda selalu in-the-loop.',
    icon: '⚙️',
    duration: '7–21 Hari',
    accent: '#1D4ED8',
  },
  {
    number: '04',
    title: 'Testing & Revisi',
    description: 'QA menyeluruh di berbagai device dan browser. Anda mendapat 2 putaran revisi gratis hingga benar-benar puas.',
    icon: '✅',
    duration: '2–3 Hari',
    accent: '#4338CA',
  },
  {
    number: '05',
    title: 'Launch & Support',
    description: 'Deploy ke server Anda atau rekomendasi kami, dilengkapi 30 hari free support paska-launch.',
    icon: '🚀',
    duration: '1 Hari',
    accent: '#7C3AED',
  },
];

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);
  const lineRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="proses" style={{ position: 'relative', overflow: 'hidden', background: '#080c18', padding: '100px 0' }}>

      {/* ── Fading divider top ── */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(229,222,255,0.06), transparent)' }} />

      {/* ── Grid texture ── */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(to right, #111827 1px, transparent 1px), linear-gradient(to bottom, #111827 1px, transparent 1px)', backgroundSize: '4rem 4rem', opacity: 0.3, pointerEvents: 'none' }} />

      {/* ── Ambient blobs ── */}
      <div style={{ position: 'absolute', top: '5%', left: '-100px', width: '480px', height: '480px', borderRadius: '50%', background: '#4338CA', opacity: 0.09, filter: 'blur(120px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '10%', right: '-80px', width: '400px', height: '400px', borderRadius: '50%', background: '#1D4ED8', opacity: 0.08, filter: 'blur(120px)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div className="section-label reveal">Cara Kerja</div>
          <h2 className="section-title reveal reveal-delay-1">
            Proses            <span className="gradient-text-blue">Transparan & Efisien</span>
          </h2>
          <p className="section-subtitle reveal reveal-delay-2" style={{ margin: '0 auto' }}>
            Setiap langkah dirancang untuk memastikan hasil terbaik dengan komunikasi yang jelas dan timeline yang terstruktur.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }} className="process-grid">
          {/* Steps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {steps.map((step, i) => (
              <div
                key={step.number}
                onClick={() => setActiveStep(i)}
                className={`reveal reveal-delay-${i + 1}`}
                style={{
                  display: 'flex',
                  gap: '20px',
                  padding: '24px',
                  borderRadius: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                  background: activeStep === i ? 'rgba(67,56,202,0.07)' : 'transparent',
                  position: 'relative',
                }}
              >
                {/* Line connector */}
                {i < steps.length - 1 && (
                  <div style={{
                    position: 'absolute',
                    left: '43px',
                    top: '76px',
                    width: '2px',
                    height: '40px',
                    background: i < activeStep ? steps[i].accent : 'rgba(255,255,255,0.08)',
                    transition: 'background 0.4s ease',
                    borderRadius: '2px',
                  }} />
                )}

                {/* Number badge */}
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: activeStep === i ? step.accent : 'rgba(255,255,255,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  fontWeight: '800',
                  color: activeStep === i ? 'white' : 'var(--text-muted)',
                  transition: 'all 0.4s ease',
                  flexShrink: 0,
                  border: activeStep === i ? 'none' : '1px solid rgba(255,255,255,0.06)',
                }}>
                  {activeStep > i ? (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8L6.5 11.5L13 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : step.number}
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <h3 style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '16px',
                      fontWeight: '700',
                      color: activeStep === i ? 'var(--text-heading)' : 'var(--text-body)',
                      transition: 'color 0.3s',
                    }}>
                      {step.title}
                    </h3>
                    <span style={{
                      fontSize: '11px',
                      color: step.accent,
                      background: step.accent + '15',
                      borderRadius: '100px',
                      padding: '2px 8px',
                      fontWeight: '600',
                      opacity: activeStep === i ? 1 : 0,
                      transition: 'opacity 0.3s',
                    }}>
                      {step.duration}
                    </span>
                  </div>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    color: 'var(--text-body)',
                    lineHeight: '1.6',
                    maxHeight: activeStep === i ? '80px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.4s ease, opacity 0.4s ease',
                    opacity: activeStep === i ? 1 : 0,
                  }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Visual Preview */}
          <div className="reveal reveal-delay-3" style={{ position: 'relative' }}>
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-card)',
              borderRadius: '24px',
              padding: '40px',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Glow */}
              <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                background: `radial-gradient(circle, ${steps[activeStep].accent}20, transparent 70%)`,
                transition: 'background 0.4s ease',
                pointerEvents: 'none',
              }} />

              <div style={{ position: 'relative' }}>
                <div style={{
                  fontSize: '48px',
                  marginBottom: '20px',
                  filter: 'drop-shadow(0 0 20px rgba(108,99,255,0.3))',
                }}>
                  {steps[activeStep].icon}
                </div>

                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: '800', marginBottom: '16px', letterSpacing: '-0.02em', color: 'var(--text-heading)' }}>
                  {steps[activeStep].title}
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--text-body)', lineHeight: '1.7', marginBottom: '32px' }}>
                  {steps[activeStep].description}
                </p>

                {/* Progress indicator */}
                <div style={{ display: 'flex', gap: '8px' }}>
                  {steps.map((s, i) => (
                    <div
                      key={i}
                      onClick={() => setActiveStep(i)}
                      style={{
                        height: '4px',
                        flex: i === activeStep ? 3 : 1,
                        background: i === activeStep ? steps[activeStep].accent : 'rgba(255,255,255,0.1)',
                        borderRadius: '4px',
                        transition: 'all 0.4s ease',
                        cursor: 'pointer',
                      }}
                    />
                  ))}
                </div>

                {/* Duration badge */}
                <div style={{
                  marginTop: '24px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: `${steps[activeStep].accent}15`,
                  border: `1px solid ${steps[activeStep].accent}30`,
                  borderRadius: '10px',
                  padding: '8px 16px',
                }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="6" stroke={steps[activeStep].accent} strokeWidth="1.5"/>
                    <path d="M7 4V7L9 9" stroke={steps[activeStep].accent} strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <span style={{ fontSize: '13px', color: steps[activeStep].accent, fontWeight: '600' }}>
                    Estimasi: {steps[activeStep].duration}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .process-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
};

export default Process;
