import React from 'react';

const brands = [
  { name: 'TechFlow',     initial: 'TF', hue: 230 },
  { name: 'BeautyBox',   initial: 'BB', hue: 270 },
  { name: 'PropNest',    initial: 'PN', hue: 220 },
  { name: 'MediConnect', initial: 'MC', hue: 250 },
  { name: 'ZenCoach',    initial: 'ZC', hue: 260 },
  { name: 'FleetTrack',  initial: 'FT', hue: 215 },
  { name: 'GreenLife',   initial: 'GL', hue: 240 },
  { name: 'CorpSol',     initial: 'CS', hue: 275 },
];

const SocialProof = () => (
  <div style={{ position: 'relative', overflow: 'hidden', background: '#080c18', padding: '40px 0' }}>

    {/* ── Fading divider top ── */}
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(229,222,255,0.06), transparent)' }} />
    {/* ── Fading divider bottom ── */}
    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(229,222,255,0.06), transparent)' }} />

    {/* ── Grid texture ── */}
    <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(to right, #111827 1px, transparent 1px), linear-gradient(to bottom, #111827 1px, transparent 1px)', backgroundSize: '4rem 4rem', opacity: 0.35, pointerEvents: 'none' }} />

    {/* ── Ambient blob ── */}
    <div style={{ position: 'absolute', top: '-60px', right: '15%', width: '300px', height: '300px', borderRadius: '50%', background: '#4338CA', opacity: 0.08, filter: 'blur(100px)', pointerEvents: 'none' }} />

    {/* ── Content ── */}
    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
      <p className="reveal" style={{ fontFamily: 'var(--font-body)', textAlign: 'center', fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: '600', marginBottom: '28px' }}>
        Dipercaya oleh bisnis-bisnis terkemuka
      </p>

      <div className="social-brands">
        {brands.map((brand, i) => (
          <div
            key={brand.name}
            className={`reveal reveal-delay-${(i % 4) + 1}`}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '7px 16px', background: 'rgba(17,24,39,0.6)', border: '1px solid rgba(229,222,255,0.06)', borderRadius: '100px', backdropFilter: 'blur(8px)', transition: 'all 0.3s ease', cursor: 'default' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(67,56,202,0.45)'; e.currentTarget.style.background = 'rgba(67,56,202,0.1)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(229,222,255,0.06)'; e.currentTarget.style.background = 'rgba(17,24,39,0.6)'; }}
          >
            <div style={{ width: '22px', height: '22px', borderRadius: '6px', background: `hsl(${brand.hue}, 65%, 52%)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-heading)', fontSize: '8px', fontWeight: '800', color: 'white', flexShrink: 0 }}>
              {brand.initial}
            </div>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#94A3B8', fontWeight: '500' }}>{brand.name}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default SocialProof;
