import React from 'react';

const techStack = [
  'React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL',
  'MongoDB', 'Laravel', 'Mysql', 'Bootstrap', 'Tailwind', 'CSS', 'Javascript',
  'React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL',
  'MongoDB', 'Stripe', 'Supabase', 'Vercel', 'AWS', 'Figma', 'GSAP',
];

const TechTicker = () => (
  <div style={{
    overflow: 'hidden',
    padding: '24px 0',
    position: 'relative',
    borderTop: '1px solid rgba(255,255,255,0.06)',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
    background: 'linear-gradient(90deg, var(--bg-secondary) 0%, transparent 10%, transparent 90%, var(--bg-secondary) 100%)',
  }}>
    <div style={{
      display: 'flex',
      gap: '0',
      width: 'max-content',
      animation: 'ticker 20s linear infinite',
    }}>
      {techStack.map((tech, i) => (
        <div key={i} style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          padding: '0 24px',
          whiteSpace: 'nowrap',
        }}>
          <span style={{
            fontSize: '14px',
            color: 'var(--text-muted)',
            fontWeight: '500',
            letterSpacing: '0.03em',
          }}>{tech}</span>
          <span style={{ color: 'rgba(255,255,255,0.15)', marginLeft: '20px' }}>·</span>
        </div>
      ))}
    </div>
  </div>
);

const Footer = () => (
  <footer style={{ background: 'var(--bg-secondary)', paddingTop: '80px' }}>
    {/* CTA Banner */}
    <div className="container" style={{ marginBottom: '80px' }}>
      <div className="reveal" style={{
        background: 'linear-gradient(135deg, #111, #161616)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '28px',
        padding: '64px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Orbs */}
        <div style={{
          position: 'absolute',
          top: '-100px',
          left: '-100px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(108,99,255,0.15), transparent)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-100px',
          right: '-100px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(236,72,153,0.1), transparent)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative' }}>
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: '800',
            letterSpacing: '-0.03em',
            marginBottom: '16px',
          }}>
            Siap Membangun<br /><span className="gradient-text">Sesuatu yang Luar Biasa?</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '18px', marginBottom: '40px', maxWidth: '480px', margin: '0 auto 40px' }}>
            Bergabunglah dengan 50+ bisnis yang telah merasakan manfaat website premium dari kard.id.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="#kontak"
              onClick={(e) => { e.preventDefault(); document.querySelector('#kontak').scrollIntoView({ behavior: 'smooth' }); }}
              className="btn-primary"
              style={{ fontSize: '16px', padding: '18px 40px' }}
            >
              Mulai Sekarang, Gratis →
            </a>
            <a
              href="https://wa.me/6288973046705?text=Saya%20mau%20beli%20website"
              target="_blank" rel="noreferrer"
              className="btn-secondary"
              style={{ fontSize: '16px', padding: '18px 32px' }}
            >
              💬 Chat WhatsApp 
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Tech Ticker */}
    <TechTicker />

    {/* Main Footer */}
    <div className="container" style={{ padding: '48px 24px 0' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr 1fr',
        gap: '48px',
        paddingBottom: '48px',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }} className="footer-grid">
        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <img
              src="/images/logo.png"
              alt="kard.id logo"
              style={{
                height: '100px',
                width: 'auto',
                // filter: 'invert(1) brightness(1.2)',
                objectFit: 'contain',
              }}
            />
          </div>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.7', maxWidth: '280px', marginBottom: '24px' }}>
            Studio digital yang menghadirkan website premium untuk bisnis yang ingin tampil beda di dunia digital.
          </p>
          <div style={{ display: 'flex', gap: '10px' }}>
            {['instagram', 'twitter', 'linkedin', 'github'].map((social) => (
              <a
                key={social}
                href="#"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  fontSize: '14px',
                  color: 'var(--text-muted)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => { e.target.style.background = 'rgba(108,99,255,0.15)'; e.target.style.borderColor = 'rgba(108,99,255,0.3)'; e.target.style.color = '#6C63FF'; }}
                onMouseLeave={(e) => { e.target.style.background = 'rgba(255,255,255,0.05)'; e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.color = 'var(--text-muted)'; }}
              >
                {social === 'instagram' && 'IG'}
                {social === 'twitter' && 'X'}
                {social === 'linkedin' && 'in'}
                {social === 'github' && 'GH'}
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        {[
          {
            title: 'Layanan',
            links: ['Landing Page', 'Website', 'Web App', 'Konsultasi', 'Maintenance'],
          },
          {
            title: 'Perusahaan',
            links: ['Tentang Kami', 'Portofolio', 'Blog', 'Karir', 'Press'],
          },
          {
            title: 'Support',
            links: ['FAQ', 'Status', 'Kebijakan Privasi', 'Syarat & Ketentuan', 'Kontak'],
          },
        ].map((col) => (
          <div key={col.title}>
            <h4 style={{ fontSize: '13px', fontWeight: '700', color: 'white', marginBottom: '16px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              {col.title}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {col.links.map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    fontSize: '14px',
                    color: 'var(--text-muted)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => { e.target.style.color = 'white'; }}
                  onMouseLeave={(e) => { e.target.style.color = 'var(--text-muted)'; }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '24px 0',
        flexWrap: 'wrap',
        gap: '16px',
      }}>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
          © 2026 kard.id. All rights reserved. Made with Azka.
        </p>
        <div style={{ display: 'flex', gap: '24px' }}>
          {['Privacy', 'Terms', 'Sitemap'].map((item) => (
            <a
              key={item}
              href="#"
              style={{ fontSize: '13px', color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => { e.target.style.color = 'white'; }}
              onMouseLeave={(e) => { e.target.style.color = 'var(--text-muted)'; }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
