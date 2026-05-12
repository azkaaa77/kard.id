import React, { useState } from 'react';

const plans = [
  {
    name: 'Starter',
    tagline: 'Untuk bisnis yang baru mulai',
    price: { landing: '1.5', website: '3', app: '7' },
    accent: '#6C63FF',
    features: ['Desain Custom', '5 halaman / 1 LP', 'Mobile Responsive', 'SEO Dasar', 'Revisi 2x', 'Domain & Hosting Setup', '14 hari support'],
    notIncluded: ['CMS/Admin Panel', 'Animasi Custom', 'Integrasi API'],
  },
  {
    name: 'Growth',
    tagline: 'Paling populer untuk bisnis berkembang',
    price: { landing: '3', website: '6', app: '15' },
    accent: '#EC4899',
    popular: true,
    features: ['Semua fitur Starter', 'CMS / Admin Panel', 'Animasi & Micro-interaction', 'SEO Lanjutan + Analytics', 'Revisi Unlimited', 'Integrasi 3rd Party', '30 hari support'],
    notIncluded: ['Fitur Real-time', 'Multi-user System'],
  },
  {
    name: 'Enterprise',
    tagline: 'Solusi penuh untuk bisnis besar',
    price: { landing: '6', website: '12', app: '30' },
    accent: '#00D9A5',
    features: ['Semua fitur Growth', 'Fitur Real-time & WebSocket', 'Multi-user & Role Management', 'Custom API Development', 'Performance Audit', 'Load Testing', '90 hari support prioritas'],
    notIncluded: [],
  },
];

const serviceTypes = [
  { key: 'landing', label: 'Landing Page' },
  { key: 'website', label: 'Website' },
  { key: 'app', label: 'Web App' },
];

const Pricing = () => {
  const [activeService, setActiveService] = useState('landing');

  return (
    <section id="harga" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="section-label reveal">Harga</div>
          <h2 className="section-title reveal reveal-delay-1">
            Transparan &<br /><span className="gradient-text">Tanpa Biaya Tersembunyi</span>
          </h2>
          <p className="section-subtitle reveal reveal-delay-2" style={{ margin: '0 auto 36px' }}>
            Pilih paket yang sesuai dengan kebutuhan dan anggaran Anda.
          </p>

          {/* Service Toggle */}
          <div className="reveal reveal-delay-3 pricing-toggle">
            {serviceTypes.map((type) => (
              <button
                key={type.key}
                onClick={() => setActiveService(type.key)}
                style={{
                  padding: '10px 18px',
                  borderRadius: '8px',
                  border: 'none',
                  background: activeService === type.key ? 'var(--accent-primary)' : 'transparent',
                  color: activeService === type.key ? 'white' : 'var(--text-muted)',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontFamily: 'var(--font-primary)',
                  whiteSpace: 'nowrap',
                }}
              >
                {type.label}
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
                background: plan.popular ? '#111' : 'var(--bg-card)',
                border: `1px solid ${plan.popular ? plan.accent + '40' : 'var(--border-subtle)'}`,
                borderRadius: '24px',
                padding: 'clamp(24px, 3vw, 36px)',
                position: 'relative',
                transition: 'all 0.4s ease',
                boxShadow: plan.popular ? `0 0 60px ${plan.accent}20` : 'none',
              }}
            >
              {plan.popular && (
                <div style={{ position:'absolute', top:'-40px', left:'50%', transform:'translateX(-50%)', background:`linear-gradient(135deg, ${plan.accent}, #8B5CF6)`, color:'white', fontSize:'12px', fontWeight:'700', padding:'4px 16px', borderRadius:'100px', whiteSpace:'nowrap' }}>
                  ⭐ TERPOPULER
                </div>
              )}
              <div style={{ position:'absolute', top:0, left:'50%', transform:'translateX(-50%)', width:'60%', height:'2px', background:`linear-gradient(90deg, transparent, ${plan.accent}, transparent)` }} />

              <h3 style={{ fontSize:'20px', fontWeight:'800', marginBottom:'4px' }}>{plan.name}</h3>
              <p style={{ fontSize:'13px', color:'var(--text-muted)', marginBottom:'24px' }}>{plan.tagline}</p>

              <div style={{ marginBottom:'28px' }}>
                <div style={{ display:'flex', alignItems:'baseline', gap:'4px', flexWrap:'wrap' }}>
                  <span style={{ fontSize:'13px', color:'var(--text-muted)' }}>Mulai </span>
                  <span style={{ fontSize:'clamp(32px, 4vw, 40px)', fontWeight:'900', letterSpacing:'-0.03em', color: plan.popular ? plan.accent : 'white' }}>
                    {plan.price[activeService]}
                  </span>
                  <span style={{ fontSize:'15px', color:'var(--text-muted)', fontWeight:'600' }}> juta</span>
                </div>
                <div style={{ fontSize:'11px', color:'var(--text-muted)', marginTop:'4px' }}>* Tergantung kompleksitas proyek</div>
              </div>

              <a
                href="#kontak"
                onClick={(e) => { e.preventDefault(); document.querySelector('#kontak')?.scrollIntoView({ behavior:'smooth' }); }}
                style={{
                  display:'block', textAlign:'center', padding:'14px', borderRadius:'12px',
                  background: plan.popular ? `linear-gradient(135deg, ${plan.accent}, #8B5CF6)` : 'rgba(255,255,255,0.06)',
                  border: plan.popular ? 'none' : '1px solid rgba(255,255,255,0.1)',
                  color:'white', fontSize:'14px', fontWeight:'700', textDecoration:'none',
                  marginBottom:'28px', transition:'all 0.3s ease', fontFamily:'var(--font-primary)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85'; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
              >
                Mulai dengan {plan.name} →
              </a>

              <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
                {plan.features.map((feature) => (
                  <div key={feature} style={{ display:'flex', gap:'10px', alignItems:'flex-start' }}>
                    <div style={{ width:'18px', height:'18px', borderRadius:'50%', background:plan.accent+'20', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, marginTop:'1px' }}>
                      <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                        <path d="M1.5 4.5L3.5 6.5L7.5 2.5" stroke={plan.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span style={{ fontSize:'13px', color:'var(--text-secondary)' }}>{feature}</span>
                  </div>
                ))}
                {plan.notIncluded.map((feature) => (
                  <div key={feature} style={{ display:'flex', gap:'10px', alignItems:'flex-start', opacity:0.3 }}>
                    <div style={{ width:'18px', height:'18px', borderRadius:'50%', background:'rgba(255,255,255,0.05)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, marginTop:'1px' }}>
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M2 2L6 6M6 2L2 6" stroke="#555" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <span style={{ fontSize:'13px', color:'var(--text-muted)', textDecoration:'line-through' }}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ textAlign:'center', marginTop:'40px' }}>
          <div style={{ display:'inline-flex', alignItems:'center', gap:'10px', color:'var(--text-muted)', fontSize:'14px' }}>
            <span style={{ fontSize:'20px' }}>🛡️</span>
            Konsultasi awal <strong style={{ color:'white' }}>GRATIS</strong> · Contract terjamin · Revisi inklusif
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
