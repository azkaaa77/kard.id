import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef(null);
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

      <section id="home" ref={heroRef} style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '100px',
      }}>
        {/* Background Orbs */}
        <div style={{ position:'absolute', width:'600px', height:'600px', borderRadius:'50%', background:'radial-gradient(circle, rgba(108,99,255,0.12) 0%, transparent 70%)', top:'-200px', right:'-150px', pointerEvents:'none' }} />
        <div style={{ position:'absolute', width:'400px', height:'400px', borderRadius:'50%', background:'radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 70%)', bottom:'-80px', left:'-80px', pointerEvents:'none' }} />

        {/* Grid Lines */}
        <div style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize:'60px 60px', pointerEvents:'none' }} />

        <div className="container" style={{ width: '100%' }}>
          <div className="hero-grid">
            {/* ===== TEXT COLUMN ===== */}
            <div>
              {/* Badge */}
              <div className="reveal" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'rgba(108,99,255,0.1)', border: '1px solid rgba(108,99,255,0.25)',
                borderRadius: '100px', padding: '6px 14px', marginBottom: '28px',
              }}>
                <div style={{ width:'7px', height:'7px', borderRadius:'50%', background:'#00D9A5', animation:'pulse-glow 2s infinite' }} />
                <span style={{ fontSize:'13px', color:'#A0A0A0', fontWeight:'500' }}>Tersedia untuk proyek baru · 2026</span>
              </div>

              <h1 className="reveal reveal-delay-1" style={{
                fontSize: 'clamp(36px, 6vw, 76px)',
                fontWeight: '800', lineHeight: '1.05',
                letterSpacing: '-0.03em', marginBottom: '20px',
              }}>
                Kami Bangun<br />
                <span className="gradient-text">Digital Experience</span><br />
                yang Berkesan
              </h1>

              <p className="reveal reveal-delay-2" style={{
                fontSize: 'clamp(15px, 2vw, 18px)',
                color: 'var(--text-secondary)', lineHeight: '1.7',
                marginBottom: '32px', maxWidth: '480px',
              }}>
                Dari landing page yang mengkonversi, website yang elegan, hingga web app yang powerful — kard.id hadir sebagai partner digital terpercaya untuk bisnis Anda.
              </p>

              <div className="reveal reveal-delay-3 hero-cta">
                <a
                  href="#kontak"
                  onClick={(e) => { e.preventDefault(); document.querySelector('#kontak')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="btn-primary"
                  style={{ fontSize: '16px', padding: '16px 32px' }}
                >
                  Mulai Sekarang →
                </a>
                <a
                  href="#portofolio"
                  onClick={(e) => { e.preventDefault(); document.querySelector('#portofolio')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="btn-secondary"
                  style={{ fontSize: '16px', padding: '16px 32px' }}
                >
                  Lihat Portofolio
                </a>
              </div>

              {/* Stats */}
              <div className="reveal reveal-delay-4 hero-stats" style={{
                marginTop: '48px', paddingTop: '32px',
                borderTop: '1px solid rgba(255,255,255,0.06)',
              }}>
                {[
                  { number: '50+', label: 'Proyek Selesai' },
                  { number: '98%', label: 'Klien Puas' },
                  { number: '3x', label: 'Rata-rata ROI' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div style={{ fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: '800', letterSpacing: '-0.02em', marginBottom: '4px' }}>
                      {stat.number}
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: '500' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ===== VISUAL COLUMN (hidden on mobile via CSS) ===== */}
            <div className="reveal reveal-delay-2 hero-visual">
              <HeroVisual />
            </div>
          </div>
        </div>

        {/* Scroll Hint */}
        <div style={{ position:'absolute', bottom:'32px', left:'50%', transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:'8px', opacity:0.4 }}>
          <span style={{ fontSize:'10px', letterSpacing:'0.1em', color:'var(--text-secondary)' }}>SCROLL</span>
          <div style={{ width:'1px', height:'32px', background:'linear-gradient(to bottom, white, transparent)', animation:'float 2s ease-in-out infinite' }} />
        </div>
      </section>
    </>
  );
};

const HeroVisual = () => (
  <div style={{ position:'relative', height:'500px' }}>
    {/* Main Browser Mockup */}
    <div style={{
      position:'absolute', top:'0', right:'0',
      width:'100%', maxWidth:'460px',
      background:'#111111', borderRadius:'16px',
      border:'1px solid rgba(255,255,255,0.08)', overflow:'hidden',
      boxShadow:'0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)',
      animation:'float 6s ease-in-out infinite',
    }}>
      <div style={{ display:'flex', alignItems:'center', gap:'8px', padding:'12px 16px', borderBottom:'1px solid rgba(255,255,255,0.06)', background:'#0D0D0D' }}>
        {['#FF5F57','#FEBC2E','#28C840'].map((c,i) => <div key={i} style={{ width:'10px', height:'10px', borderRadius:'50%', background:c }} />)}
        <div style={{ flex:1, marginLeft:'8px', background:'#1A1A1A', borderRadius:'6px', padding:'5px 12px', fontSize:'11px', color:'#555' }}>kard.id/client-project</div>
      </div>
      <div style={{ padding:'24px' }}>
        <div style={{ height:'110px', background:'linear-gradient(135deg, #6C63FF22, #EC489922)', borderRadius:'12px', marginBottom:'16px', display:'flex', alignItems:'center', justifyContent:'center', position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize:'20px 20px' }} />
          <div style={{ textAlign:'center', position:'relative' }}>
            <div style={{ height:'10px', width:'140px', background:'linear-gradient(90deg, #6C63FF, #EC4899)', borderRadius:'5px', margin:'0 auto 8px' }} />
            <div style={{ height:'6px', width:'100px', background:'rgba(255,255,255,0.15)', borderRadius:'3px', margin:'0 auto' }} />
          </div>
        </div>
        {[70,50,60,40].map((w,i) => <div key={i} style={{ height:'7px', width:`${w}%`, background:'rgba(255,255,255,0.08)', borderRadius:'4px', marginBottom:'9px' }} />)}
        <div style={{ display:'flex', gap:'8px', marginTop:'14px' }}>
          <div style={{ height:'32px', flex:1, background:'linear-gradient(135deg, #6C63FF55, #8B5CF655)', borderRadius:'8px' }} />
          <div style={{ height:'32px', flex:1, background:'rgba(255,255,255,0.06)', borderRadius:'8px' }} />
        </div>
      </div>
    </div>

    {/* Floating card - metrics */}
    <div style={{ position:'absolute', bottom:'60px', left:'-20px', background:'#111', border:'1px solid rgba(255,255,255,0.1)', borderRadius:'14px', padding:'16px 20px', boxShadow:'0 16px 40px rgba(0,0,0,0.5)', animation:'float 5s ease-in-out infinite 1s', zIndex:2, minWidth:'170px' }}>
      <div style={{ fontSize:'10px', color:'#555', marginBottom:'8px', fontWeight:'600', letterSpacing:'0.05em', textTransform:'uppercase' }}>Performa</div>
      <div style={{ fontSize:'26px', fontWeight:'800', color:'#00D9A5', letterSpacing:'-0.02em' }}>98 / 100</div>
      <div style={{ fontSize:'11px', color:'#555', marginTop:'4px' }}>Google Lighthouse</div>
      <div style={{ marginTop:'10px', display:'flex', gap:'4px' }}>
        {[95,98,92,100].map((v,i) => (
          <div key={i} style={{ flex:1 }}>
            <div style={{ fontSize:'9px', color:'#00D9A5', fontWeight:'600', marginBottom:'2px' }}>{v}</div>
            <div style={{ height:'3px', background:'#1A1A1A', borderRadius:'2px', overflow:'hidden' }}>
              <div style={{ height:'100%', width:`${v}%`, background:'#00D9A5', borderRadius:'2px' }} />
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Floating card - conversion */}
    <div style={{ position:'absolute', top:'20px', left:'-10px', background:'#111', border:'1px solid rgba(255,255,255,0.1)', borderRadius:'14px', padding:'14px 18px', boxShadow:'0 16px 40px rgba(0,0,0,0.5)', animation:'float 7s ease-in-out infinite 2s', zIndex:2 }}>
      <div style={{ display:'flex', alignItems:'center', gap:'10px' }}>
        <div style={{ width:'36px', height:'36px', borderRadius:'10px', background:'rgba(255,179,71,0.15)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'18px' }}>📈</div>
        <div>
          <div style={{ fontSize:'10px', color:'#555', fontWeight:'600' }}>KONVERSI</div>
          <div style={{ fontSize:'20px', fontWeight:'800', color:'#FFB347' }}>+340%</div>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
