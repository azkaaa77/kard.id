import React, { useRef } from 'react';

const services = [
  {
    icon: '⚡',
    title: 'Landing Page',
    description: 'Halaman yang dirancang untuk mengkonversi pengunjung menjadi pelanggan. Desain persuasif, CTA yang tepat, dan loading ultra-cepat.',
    features: ['Desain Konversi Tinggi', 'A/B Testing Ready', 'Mobile-First', 'Analytics Terintegrasi'],
    accent: '#4338CA',
    badge: 'Populer',
  },
  {
    icon: '🌐',
    title: 'Website',
    description: 'Website profesional yang mencerminkan identitas brand Anda. Responsif, cepat, dan mudah dikelola melalui CMS.',
    features: ['CMS Custom', 'SEO Optimal', 'Multi-bahasa', 'Panel Admin'],
    accent: '#7C3AED',
    badge: 'Terlaris',
  },
  {
    icon: '🚀',
    title: 'Web App',
    description: 'Aplikasi web kompleks dengan fitur-fitur canggih. Dari SaaS, marketplace, hingga platform internal perusahaan.',
    features: ['Arsitektur Scalable', 'API Integration', 'Real-time Features', 'Dashboard Analitik'],
    accent: '#1D4ED8',
    badge: 'Premium',
  },
];

const ServiceCard = ({ service, index }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = (y - rect.height / 2) / 25;
    const rotateY = (rect.width / 2 - x) / 25;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    cardRef.current.style.borderColor = 'rgba(229,222,255,0.07)';
    cardRef.current.style.boxShadow = 'none';
  };

  const handleMouseEnter = () => {
    if (!cardRef.current) return;
    cardRef.current.style.borderColor = `${service.accent}60`;
    cardRef.current.style.boxShadow = `0 0 48px ${service.accent}18, 0 24px 48px rgba(0,0,0,0.5)`;
  };

  return (
    <div
      ref={cardRef}
      className={`reveal reveal-delay-${index + 1}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        background: '#111827',
        border: '1px solid rgba(229,222,255,0.07)',
        borderRadius: '20px',
        padding: 'clamp(24px, 3vw, 36px)',
        cursor: 'default',
        transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
        backdropFilter: 'blur(12px)',
      }}
    >
      {/* Inner glow top */}
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '200px', height: '1px', background: `linear-gradient(90deg, transparent, ${service.accent}80, transparent)` }} />
      {/* Card ambient */}
      <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '160px', height: '160px', borderRadius: '50%', background: service.accent, opacity: 0.06, filter: 'blur(50px)', pointerEvents: 'none' }} />

      {/* Badge */}
      <div style={{ position: 'absolute', top: '18px', right: '18px', background: `${service.accent}18`, border: `1px solid ${service.accent}35`, borderRadius: '100px', padding: '4px 10px', fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: '600', color: service.accent }}>
        {service.badge}
      </div>

      {/* Icon */}
      <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: `${service.accent}18`, border: `1px solid ${service.accent}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginBottom: '20px' }}>
        {service.icon}
      </div>

      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(18px, 2vw, 22px)', fontWeight: '700', marginBottom: '12px', color: '#E5DEFF' }}>
        {service.title}
      </h3>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: '#94A3B8', lineHeight: '1.7', marginBottom: '24px' }}>
        {service.description}
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
        {service.features.map((f) => (
          <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: `${service.accent}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 5L4 7L8 3" stroke={service.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: '#94A3B8' }}>{f}</span>
          </div>
        ))}
      </div>

      <a
        href="#kontak"
        onClick={(e) => { e.preventDefault(); document.querySelector('#kontak')?.scrollIntoView({ behavior: 'smooth' }); }}
        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-heading)', fontSize: '14px', fontWeight: '600', color: service.accent, textDecoration: 'none', transition: 'gap 0.2s' }}
        onMouseEnter={(e) => { e.currentTarget.style.gap = '12px'; }}
        onMouseLeave={(e) => { e.currentTarget.style.gap = '8px'; }}
      >
        Diskusikan Proyek
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 8H13M9 4l4 4-4 4" stroke={service.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </div>
  );
};

const Services = () => (
  <section id="layanan" style={{ position: 'relative', overflow: 'hidden', background: '#080c18', padding: '100px 0' }}>

    {/* ── Fading divider top ── */}
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(229,222,255,0.06), transparent)' }} />

    {/* ── Grid texture ── */}
    <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(to right, #111827 1px, transparent 1px), linear-gradient(to bottom, #111827 1px, transparent 1px)', backgroundSize: '4rem 4rem', opacity: 0.3, pointerEvents: 'none' }} />

    {/* ── Ambient blobs ── */}
    <div style={{ position: 'absolute', top: '-100px', right: '-60px', width: '500px', height: '500px', borderRadius: '50%', background: '#4338CA', opacity: 0.09, filter: 'blur(120px)', pointerEvents: 'none' }} />
    <div style={{ position: 'absolute', bottom: '-80px', left: '-60px', width: '400px', height: '400px', borderRadius: '50%', background: '#1D4ED8', opacity: 0.08, filter: 'blur(120px)', pointerEvents: 'none' }} />

    {/* ── Content ── */}
    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
      <div style={{ textAlign: 'center', marginBottom: '56px' }}>
        <div className="section-label reveal">Layanan Kami</div>
        <h2 className="section-title reveal reveal-delay-1">
          Solusi Digital<br /><span className="gradient-text">Sesuai Kebutuhan</span>
        </h2>
        <p className="section-subtitle reveal reveal-delay-2" style={{ margin: '0 auto' }}>
          Kami menawarkan tiga layanan utama yang dirancang untuk memaksimalkan potensi bisnis Anda di dunia digital.
        </p>
      </div>
      <div className="services-grid">
        {services.map((s, i) => <ServiceCard key={s.title} service={s} index={i} />)}
      </div>
    </div>
  </section>
);

export default Services;
