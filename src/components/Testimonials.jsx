import React, { useState } from 'react';

const testimonials = [
  { name:'Reza Mahardika', role:'CEO, TechFlow', avatar:'RM', avatarBg:'#6C63FF', rating:5, content:'kard.id bener-bener mengubah cara pandang saya soal web development. Landing page kami meningkatkan konversi 340% dalam sebulan pertama. Tim mereka responsif, fast, dan hasilnya selalu melebihi ekspektasi.', result:'+340% konversi' },
  { name:'Siti Nuraini', role:'Founder, BeautyBox ID', avatar:'SN', avatarBg:'#EC4899', rating:5, content:'Website e-commerce kami selesai tepat waktu dan tampilannya sangat premium! Fitur CMS-nya mudah banget dipake, saya bisa update produk sendiri tanpa perlu minta bantuan developer lagi.', result:'2x penjualan online' },
  { name:'Dimas Prasetyo', role:'Co-founder, PropNest', avatar:'DP', avatarBg:'#00D9A5', rating:5, content:'Web app properti kami yang kompleks berhasil dibangun dalam waktu 3 minggu. Fitur real-time search, peta interaktif, semua jalan mulus. Tim kard.id paham banget kebutuhan teknis kami.', result:'10k+ listing aktif' },
  { name:'Maya Handayani', role:'Marketing Director, GreenLife', avatar:'MH', avatarBg:'#FFB347', rating:5, content:'Dari brief pertama sampai launch, prosesnya sangat profesional. Mereka kasih update setiap hari, dan hasilnya... website kami sekarang di halaman 1 Google!', result:'#1 Google Page' },
  { name:'Arif Budiman', role:'Owner, KulinerNusantara', avatar:'AB', avatarBg:'#6C63FF', rating:5, content:'Budget kami terbatas tapi kard.id tetap memberikan kualitas premium. Landing page-nya kece abis, loading super cepat, dan desainnya bikin dilirik orang.', result:'+420% traffic' },
  { name:'Lisa Cahyani', role:'HR Manager, CorpSolutions', avatar:'LC', avatarBg:'#EC4899', rating:5, content:'Platform rekrutmen internal kami sekarang jauh lebih efisien. kard.id berhasil membuat sistem yang user-friendly untuk 500+ karyawan kami.', result:'4x efisiensi HR' },
];

const Testimonials = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section id="testimoni" className="section">
      <div className="container">
        <div style={{ textAlign:'center', marginBottom:'56px' }}>
          <div className="section-label reveal">Testimoni</div>
          <h2 className="section-title reveal reveal-delay-1">
            Apa Kata<br /><span className="gradient-text-warm">Klien Kami</span>
          </h2>
          <p className="section-subtitle reveal reveal-delay-2" style={{ margin:'0 auto' }}>
            Lebih dari 50 klien telah mempercayakan proyek digital mereka kepada kami.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`reveal reveal-delay-${(i % 3) + 1}`}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              style={{
                background:'var(--bg-card)', border:'1px solid var(--border-subtle)', borderRadius:'20px', padding:'clamp(20px, 3vw, 28px)',
                transition:'all 0.4s ease',
                transform: hoveredIdx===i ? 'translateY(-6px)' : 'none',
                borderColor: hoveredIdx===i ? 'rgba(108,99,255,0.2)' : 'var(--border-subtle)',
                boxShadow: hoveredIdx===i ? '0 20px 60px rgba(0,0,0,0.4)' : 'none',
              }}
            >
              <div style={{ display:'flex', gap:'4px', marginBottom:'14px' }}>
                {Array.from({ length:t.rating }).map((_,j) => (
                  <svg key={j} width="13" height="13" viewBox="0 0 14 14" fill="#FFB347">
                    <path d="M7 1L8.803 4.728L13 5.355L10 8.28L10.706 12.5L7 10.5L3.294 12.5L4 8.28L1 5.355L5.197 4.728L7 1Z"/>
                  </svg>
                ))}
              </div>
              <p style={{ fontSize:'clamp(13px, 1.5vw, 14px)', color:'var(--text-secondary)', lineHeight:'1.7', marginBottom:'20px', fontStyle:'italic' }}>
                "{t.content}"
              </p>
              <div style={{ display:'flex', alignItems:'center', gap:'12px', justifyContent:'space-between', flexWrap:'wrap', gap:'10px' }}>
                <div style={{ display:'flex', alignItems:'center', gap:'10px' }}>
                  <div style={{ width:'38px', height:'38px', borderRadius:'11px', background:t.avatarBg, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'12px', fontWeight:'700', color:'white', flexShrink:0 }}>
                    {t.avatar}
                  </div>
                  <div>
                    <div style={{ fontSize:'13px', fontWeight:'700' }}>{t.name}</div>
                    <div style={{ fontSize:'11px', color:'var(--text-muted)' }}>{t.role}</div>
                  </div>
                </div>
                <div style={{ fontSize:'11px', fontWeight:'600', color:'#00D9A5', background:'rgba(0,217,165,0.1)', border:'1px solid rgba(0,217,165,0.2)', borderRadius:'8px', padding:'4px 8px', whiteSpace:'nowrap' }}>
                  {t.result}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="reveal trust-stats">
          {[
            { value:'50+', label:'Proyek Selesai' },
            { value:'5.0', label:'Rating Rata-rata' },
            { value:'98%', label:'Klien Balik Lagi' },
            { value:'< 3 Minggu', label:'Rata-rata Delivery' },
          ].map(stat => (
            <div key={stat.label} style={{ textAlign:'center' }}>
              <div style={{ fontSize:'clamp(24px, 4vw, 32px)', fontWeight:'900', letterSpacing:'-0.03em', background:'linear-gradient(135deg, #6C63FF, #EC4899)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>{stat.value}</div>
              <div style={{ fontSize:'12px', color:'var(--text-muted)', marginTop:'4px' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
