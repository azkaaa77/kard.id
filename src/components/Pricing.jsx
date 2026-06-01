import React, { useState } from 'react';

const plans = [
  {
    name: 'Starter',
    tagline: 'Untuk bisnis yang baru mulai',
    price: { landing: '1.5', website: '3', app: '7' },
    accentFrom: '#4338CA',
    accentTo: '#1D4ED8',
    features: ['Desain Custom', '5 halaman / 1 LP', 'Mobile Responsive', 'SEO Dasar', 'Revisi 2x', 'Domain & Hosting Setup', '14 hari support'],
    notIncluded: ['CMS/Admin Panel', 'Animasi Custom', 'Integrasi API'],
  },
  {
    name: 'Growth',
    tagline: 'Paling populer untuk bisnis berkembang',
    price: { landing: '3', website: '6', app: '15' },
    accentFrom: '#7C3AED',
    accentTo: '#EC4899',
    popular: true,
    features: ['Semua fitur Starter', 'CMS / Admin Panel', 'Animasi & Micro-interaction', 'SEO Lanjutan + Analytics', 'Revisi Unlimited', 'Integrasi 3rd Party', '30 hari support'],
    notIncluded: ['Fitur Real-time', 'Multi-user System'],
  },
  {
    name: 'Enterprise',
    tagline: 'Solusi penuh untuk bisnis besar',
    price: { landing: '6', website: '12', app: '30' },
    accentFrom: '#1D4ED8',
    accentTo: '#4338CA',
    features: ['Semua fitur Growth', 'Fitur Real-time & WebSocket', 'Multi-user & Role Management', 'Custom API Development', 'Performance Audit', 'Load Testing', '90 hari support prioritas'],
    notIncluded: [],
  },
];

const serviceTypes = [
  { key: 'landing', label: 'Landing Page' },
  { key: 'website', label: 'Website' },
  { key: 'app',     label: 'Web App' },
];

const Pricing = () => {
  const [activeService, setActiveService] = useState('landing');

  return (
    <section id="harga" style={{ position: 'relative', overflow: 'hidden', background: '#060a14', padding: '100px 0' }}>

      {/* ── Fading divider top ── */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(229,222,255,0.06), transparent)' }} />

      {/* ── Grid texture ── */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(to right, #111827 1px, transparent 1px), linear-gradient(to bottom, #111827 1px, transparent 1px)', backgroundSize: '4rem 4rem', opacity: 0.28, pointerEvents: 'none' }} />

      {/* ── Ambient blobs ── */}
      <div style={{ position: 'absolute', top: '20%', right: '-80px', width: '500px', height: '500px', borderRadius: '50%', background: '#4338CA', opacity: 0.1, filter: 'blur(120px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '10%', left: '25%', width: '360px', height: '360px', borderRadius: '50%', background: '#7C3AED', opacity: 0.08, filter: 'blur(120px)', pointerEvents: 'none' }} />

      {/* ── Content ── */}
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="section-label reveal">Harga</div>
          <h2 className="section-title reveal reveal-delay-1">
            Transparan &<br /><span className="gradient-text-blue">Tanpa Biaya Tersembunyi</span>
          </h2>
          <p className="section-subtitle reveal reveal-delay-2" style={{ margin: '0 auto 36px' }}>
            Pilih paket yang sesuai dengan kebutuhan dan anggaran Anda.
          </p>

          {/* Toggle */}
          <div className="reveal reveal-delay-3 pricing-toggle" style={{ background: 'rgba(17,24,39,0.8)', border: '1px solid rgba(229,222,255,0.07)', backdropFilter: 'blur(12px)' }}>
            {serviceTypes.map((t) => (
              <button
                key={t.key}
                onClick={() => setActiveService(t.key)}
                style={{
                  padding: '10px 18px',
                  borderRadius: '8px',
                  border: 'none',
                  background: activeService === t.key ? 'linear-gradient(135deg, #4338CA, #1D4ED8)' : 'transparent',
                  color: activeService === t.key ? 'white' : 'var(--text-muted)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap',
                  boxShadow: activeService === t.key ? '0 0 20px rgba(67,56,202,0.35)' : 'none',
                }}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`reveal reveal-delay-${i + 1}`}
              style={{
                background: plan.popular ? 'rgba(17,24,39,0.95)' : 'rgba(17,24,39,0.6)',
                border: `1px solid ${plan.popular ? `${plan.accentFrom}50` : 'rgba(229,222,255,0.07)'}`,
                borderRadius: '24px',
                padding: 'clamp(24px, 3vw, 36px)',
                position: 'relative',
                overflow: 'hidden',
                backdropFilter: 'blur(16px)',
                transition: 'all 0.4s ease',
                boxShadow: plan.popular ? `0 0 80px ${plan.accentFrom}18, 0 32px 64px rgba(0,0,0,0.5)` : 'none',
              }}
            >
              {/* Card ambient glow */}
              <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', borderRadius: '50%', background: plan.accentFrom, opacity: 0.07, filter: 'blur(60px)', pointerEvents: 'none' }} />

              {plan.popular && (
                <div style={{ position: 'absolute', top: '-40px', left: '50%', transform: 'translateX(-50%)', background: `linear-gradient(135deg, ${plan.accentFrom}, ${plan.accentTo})`, color: 'white', fontFamily: 'var(--font-heading)', fontSize: '12px', fontWeight: '700', padding: '4px 16px', borderRadius: '100px', whiteSpace: 'nowrap', boxShadow: `0 0 20px ${plan.accentFrom}50` }}>
                  ⭐ TERPOPULER
                </div>
              )}
              <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '60%', height: '1px', background: `linear-gradient(90deg, transparent, ${plan.accentFrom}, transparent)` }} />

              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: '800', marginBottom: '4px', color: '#E5DEFF', position: 'relative' }}>{plan.name}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-muted)', marginBottom: '24px', position: 'relative' }}>{plan.tagline}</p>

              <div style={{ marginBottom: '28px', position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-muted)' }}>Mulai </span>
                  <span style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 4vw, 40px)', fontWeight: '900', letterSpacing: '-0.03em', background: `linear-gradient(135deg, ${plan.accentFrom}, ${plan.accentTo})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {plan.price[activeService]}
                  </span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--text-muted)', fontWeight: '600' }}> juta</span>
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px' }}>* Tergantung kompleksitas proyek</div>
              </div>

              <a
                href="#kontak"
                onClick={(e) => { e.preventDefault(); document.querySelector('#kontak')?.scrollIntoView({ behavior: 'smooth' }); }}
                style={{
                  display: 'block', textAlign: 'center', padding: '14px', borderRadius: '12px',
                  background: plan.popular ? `linear-gradient(135deg, ${plan.accentFrom}, ${plan.accentTo})` : 'rgba(229,222,255,0.05)',
                  border: plan.popular ? 'none' : '1px solid rgba(229,222,255,0.08)',
                  color: 'white', fontFamily: 'var(--font-heading)', fontSize: '14px', fontWeight: '700',
                  textDecoration: 'none', marginBottom: '28px', transition: 'all 0.3s ease',
                  boxShadow: plan.popular ? `0 8px 32px ${plan.accentFrom}40` : 'none',
                  position: 'relative',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'none'; }}
              >
                Mulai dengan {plan.name} →
              </a>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', position: 'relative' }}>
                {plan.features.map((f) => (
                  <div key={f} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: `${plan.accentFrom}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                      <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                        <path d="M1.5 4.5L3.5 6.5L7.5 2.5" stroke={plan.accentFrom} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#94A3B8' }}>{f}</span>
                  </div>
                ))}
                {plan.notIncluded.map((f) => (
                  <div key={f} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', opacity: 0.28 }}>
                    <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M2 2L6 6M6 2L2 6" stroke="#475569" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-muted)', textDecoration: 'line-through' }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ textAlign: 'center', marginTop: '40px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-body)', color: 'var(--text-muted)', fontSize: '14px', padding: '12px 24px', background: 'rgba(17,24,39,0.6)', border: '1px solid rgba(229,222,255,0.07)', borderRadius: '100px', backdropFilter: 'blur(8px)' }}>
            <span style={{ fontSize: '18px' }}>🛡️</span>
            Konsultasi awal <strong style={{ color: '#E5DEFF', fontFamily: 'var(--font-heading)' }}>GRATIS</strong> · Contract terjamin · Revisi inklusif
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
