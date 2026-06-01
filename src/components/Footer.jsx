import React from 'react';

const techStack = [
  'React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL',
  'MongoDB', 'Laravel', 'MySQL', 'Bootstrap', 'Tailwind', 'CSS', 'Javascript',
  'React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL',
  'MongoDB', 'Stripe', 'Supabase', 'Vercel', 'AWS', 'Figma', 'GSAP',
];

const TechTicker = () => (
  <div style={{
    overflow: 'hidden', padding: '24px 0', position: 'relative',
    borderTop: '1px solid rgba(255,255,255,0.06)',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
    background: 'linear-gradient(90deg, var(--bg-base) 0%, transparent 10%, transparent 90%, var(--bg-base) 100%)',
  }}>
    <div style={{ display: 'flex', gap: '0', width: 'max-content', animation: 'ticker 20s linear infinite' }}>
      {techStack.map((tech, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '0 24px', whiteSpace: 'nowrap' }}>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-muted)', fontWeight: '500', letterSpacing: '0.03em' }}>{tech}</span>
          <span style={{ color: 'rgba(255,255,255,0.12)', marginLeft: '20px' }}>·</span>
        </div>
      ))}
    </div>
  </div>
);

const Footer = () => (
  <footer style={{ background: 'var(--bg-base)', paddingTop: '80px' }}>
    {/* CTA Banner */}
    <div className="container" style={{ marginBottom: '80px' }}>
      <div className="reveal" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-card)', borderRadius: '28px', padding: 'clamp(40px, 6vw, 64px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        {/* Orbs */}
        <div style={{ position: 'absolute', top: '-100px', left: '-100px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(67,56,202,0.18), transparent)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-100px', right: '-100px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.12), transparent)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '40%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(67,56,202,0.6), transparent)' }} />

        <div style={{ position: 'relative' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: '800', letterSpacing: '-0.03em', marginBottom: '16px', color: 'var(--text-heading)' }}>
            Siap Membangun<br /><span className="gradient-text">Sesuatu yang Luar Biasa?</span>
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-body)', fontSize: '18px', marginBottom: '40px', maxWidth: '480px', margin: '0 auto 40px' }}>
            Bergabunglah dengan 50+ bisnis yang telah merasakan manfaat website premium dari kard.id.
          </p>
          <div className="footer-cta-buttons">
            <a href="#kontak" onClick={(e) => { e.preventDefault(); document.querySelector('#kontak').scrollIntoView({ behavior: 'smooth' }); }} className="btn-primary" style={{ fontSize: '16px', padding: '18px 40px' }}>
              Mulai Sekarang, Gratis →
            </a>
            <a href="https://wa.me/6288973046705?text=Saya%20mau%20beli%20website" target="_blank" rel="noreferrer" className="btn-secondary" style={{ fontSize: '16px', padding: '18px 32px' }}>
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
      <div className="footer-grid">
        {/* Brand */}
        <div>
          <div style={{ marginBottom: '16px' }}>
            <img src="/images/logo.png" alt="kard.id logo" style={{ height: '100px', width: 'auto', objectFit: 'contain' }} />
          </div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-body)', lineHeight: '1.7', maxWidth: '280px', marginBottom: '24px' }}>
            Studio digital yang menghadirkan website premium untuk bisnis yang ingin tampil beda di dunia digital.
          </p>
          <div style={{ display: 'flex', gap: '10px' }}>
            {['IG', 'X', 'in', 'GH'].map((label) => (
              <a key={label} href="#" style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-card)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', fontFamily: 'var(--font-heading)', fontSize: '12px', fontWeight: '700', color: 'var(--text-muted)', transition: 'all 0.2s' }}
                onMouseEnter={(e) => { e.target.style.background = 'rgba(67,56,202,0.18)'; e.target.style.borderColor = 'rgba(67,56,202,0.4)'; e.target.style.color = '#818CF8'; }}
                onMouseLeave={(e) => { e.target.style.background = 'rgba(255,255,255,0.04)'; e.target.style.borderColor = 'var(--border-card)'; e.target.style.color = 'var(--text-muted)'; }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        {[
          { title: 'Layanan',     links: ['Landing Page', 'Website', 'Web App', 'Konsultasi', 'Maintenance'] },
          { title: 'Perusahaan', links: ['Tentang Kami', 'Portofolio', 'Blog', 'Karir', 'Press'] },
          { title: 'Support',    links: ['FAQ', 'Status', 'Kebijakan Privasi', 'Syarat & Ketentuan', 'Kontak'] },
        ].map((col) => (
          <div key={col.title}>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '13px', fontWeight: '700', color: 'var(--text-heading)', marginBottom: '16px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              {col.title}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {col.links.map((link) => (
                <a key={link} href="#" style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => { e.target.style.color = 'var(--text-heading)'; }}
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
      <div className="footer-bottom">
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-muted)' }}>
          © 2026 kard.id. All rights reserved. Made with ❤️ by Azka.
        </p>
        <div className="footer-bottom-links">
          {['Privacy', 'Terms', 'Sitemap'].map((item) => (
            <a key={item} href="#" style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => { e.target.style.color = 'var(--text-heading)'; }}
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
