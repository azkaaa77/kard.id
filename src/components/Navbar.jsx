import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Layanan', href: '#layanan' },
    { label: 'Portofolio', href: '#portofolio' },
    { label: 'Proses', href: '#proses' },
    { label: 'Harga', href: '#harga' },
    { label: 'Testimoni', href: '#testimoni' },
  ];

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? '8px 0' : '16px 0',
        background: scrolled ? 'rgba(5,5,5,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}
          >
            <img
              src="/images/logo.png"
              alt="kard.id"
              style={{
                height: '75px',
                width: 'auto',
                // filter: 'invert(1) brightness(1.2)',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </a>

          {/* Desktop Nav Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="nav-desktop">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                style={{
                  color: '#A0A0A0',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: '500',
                  padding: '8px 14px',
                  borderRadius: '8px',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = 'white';
                  e.target.style.background = 'rgba(255,255,255,0.06)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#A0A0A0';
                  e.target.style.background = 'transparent';
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontak"
              onClick={(e) => { e.preventDefault(); scrollTo('#kontak'); }}
              className="btn-primary"
              style={{ padding: '10px 20px', fontSize: '14px', marginLeft: '15rem' }}
            >
              Mulai Proyek →
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="hamburger-btn"
            style={{
              background: 'none',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              padding: '8px',
              cursor: 'pointer',
              color: 'white',
              display: 'none',
            }}
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 4L16 16M16 4L4 16" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 5H17M3 10H17M3 15H17" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{
          position: 'fixed',
          top: '120px',
          left: '16px',
          right: '16px',
          zIndex: 999,
          background: '#0D0D0D',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '16px',
          padding: '16px',
          backdropFilter: 'blur(20px)',
        }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              style={{
                display: 'block',
                color: '#A0A0A0',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: '500',
                padding: '12px 16px',
                borderRadius: '8px',
                transition: 'all 0.2s',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontak"
            onClick={(e) => { e.preventDefault(); scrollTo('#kontak'); }}
            className="btn-primary"
            style={{ display: 'block', textAlign: 'center', marginTop: '8px' }}
          >
            Mulai Proyek →
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
