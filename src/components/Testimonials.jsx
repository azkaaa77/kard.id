import React, { useState } from 'react';

const testimonials = [
  { name: 'Reza Mahardika',   role: 'CEO, TechFlow',              avatar: 'RM', avatarColor: '#4338CA', rating: 5, content: 'kard.id bener-bener mengubah cara pandang saya soal web development. Landing page kami meningkatkan konversi 340% dalam sebulan pertama. Tim mereka responsif, fast, dan hasilnya selalu melebihi ekspektasi.', result: '+340% konversi' },
  { name: 'Siti Nuraini',     role: 'Founder, BeautyBox ID',      avatar: 'SN', avatarColor: '#7C3AED', rating: 5, content: 'Website e-commerce kami selesai tepat waktu dan tampilannya sangat premium! Fitur CMS-nya mudah banget dipake, saya bisa update produk sendiri tanpa perlu minta bantuan developer lagi.', result: '2x penjualan online' },
  { name: 'Dimas Prasetyo',   role: 'Co-founder, PropNest',       avatar: 'DP', avatarColor: '#1D4ED8', rating: 5, content: 'Web app properti kami yang kompleks berhasil dibangun dalam waktu 3 minggu. Fitur real-time search, peta interaktif, semua jalan mulus. Tim kard.id paham banget kebutuhan teknis kami.', result: '10k+ listing aktif' },
  { name: 'Maya Handayani',   role: 'Marketing Director, GreenLife', avatar: 'MH', avatarColor: '#EC4899', rating: 5, content: 'Dari brief pertama sampai launch, prosesnya sangat profesional. Mereka kasih update setiap hari, dan hasilnya... website kami sekarang di halaman 1 Google!', result: '#1 Google Page' },
  { name: 'Arif Budiman',     role: 'Owner, KulinerNusantara',    avatar: 'AB', avatarColor: '#4338CA', rating: 5, content: 'Budget kami terbatas tapi kard.id tetap memberikan kualitas premium. Landing page-nya kece abis, loading super cepat, dan desainnya bikin dilirik orang.', result: '+420% traffic' },
  { name: 'Lisa Cahyani',     role: 'HR Manager, CorpSolutions',  avatar: 'LC', avatarColor: '#7C3AED', rating: 5, content: 'Platform rekrutmen internal kami sekarang jauh lebih efisien. kard.id berhasil membuat sistem yang user-friendly untuk 500+ karyawan kami.', result: '4x efisiensi HR' },
];

const Star = () => (
  <svg width="13" height="13" viewBox="0 0 14 14" fill="#FBBF24">
    <path d="M7 1L8.803 4.728L13 5.355L10 8.28L10.706 12.5L7 10.5L3.294 12.5L4 8.28L1 5.355L5.197 4.728L7 1Z"/>
  </svg>
);

const Testimonials = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="testimoni" style={{ position: 'relative', overflow: 'hidden', background: '#080c18', padding: '100px 0' }}>

      {/* ── Fading divider top ── */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(229,222,255,0.06), transparent)' }} />

      {/* ── Grid texture ── */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(to right, #111827 1px, transparent 1px), linear-gradient(to bottom, #111827 1px, transparent 1px)', backgroundSize: '4rem 4rem', opacity: 0.3, pointerEvents: 'none' }} />

      {/* ── Ambient blobs ── */}
      <div style={{ position: 'absolute', top: '10%', left: '-80px', width: '480px', height: '480px', borderRadius: '50%', background: '#7C3AED', opacity: 0.09, filter: 'blur(120px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '5%', right: '-80px', width: '400px', height: '400px', borderRadius: '50%', background: '#4338CA', opacity: 0.08, filter: 'blur(120px)', pointerEvents: 'none' }} />

      {/* ── Content ── */}
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="section-label reveal">Testimoni</div>
          <h2 className="section-title reveal reveal-delay-1">
            Apa Kata<br /><span className="gradient-text">Klien Kami</span>
          </h2>
          <p className="section-subtitle reveal reveal-delay-2" style={{ margin: '0 auto' }}>
            Lebih dari 50 klien telah mempercayakan proyek digital mereka kepada kami.
          </p>
        </div>

        {/* Grid */}
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`reveal reveal-delay-${(i % 3) + 1}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: hovered === i ? 'rgba(17,24,39,0.9)' : '#111827',
                border: `1px solid ${hovered === i ? 'rgba(67,56,202,0.45)' : 'rgba(229,222,255,0.07)'}`,
                borderRadius: '20px',
                padding: 'clamp(20px, 3vw, 28px)',
                transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
                transform: hovered === i ? 'translateY(-6px)' : 'none',
                boxShadow: hovered === i ? '0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(67,56,202,0.15)' : 'none',
                backdropFilter: 'blur(12px)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Card inner glow on hover */}
              {hovered === i && (
                <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '120px', height: '120px', borderRadius: '50%', background: '#4338CA', opacity: 0.08, filter: 'blur(40px)', pointerEvents: 'none' }} />
              )}

              <div style={{ display: 'flex', gap: '4px', marginBottom: '14px' }}>
                {Array.from({ length: t.rating }).map((_, j) => <Star key={j} />)}
              </div>

              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(13px, 1.5vw, 14px)', color: '#94A3B8', lineHeight: '1.7', marginBottom: '20px', fontStyle: 'italic' }}>
                "{t.content}"
              </p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '11px', background: t.avatarColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-heading)', fontSize: '12px', fontWeight: '700', color: 'white', flexShrink: 0 }}>
                    {t.avatar}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '13px', fontWeight: '700', color: '#E5DEFF' }}>{t.name}</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'var(--text-muted)' }}>{t.role}</div>
                  </div>
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: '600', color: '#34D399', background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.18)', borderRadius: '8px', padding: '4px 8px', whiteSpace: 'nowrap' }}>
                  {t.result}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust stats */}
        <div className="reveal trust-stats">
          {[
            { value: '50+',        label: 'Proyek Selesai' },
            { value: '5.0',        label: 'Rating Rata-rata' },
            { value: '98%',        label: 'Klien Balik Lagi' },
            { value: '< 3 Minggu', label: 'Rata-rata Delivery' },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: '900', letterSpacing: '-0.03em', background: 'linear-gradient(135deg, #4338CA, #7C3AED, #EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{s.value}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
