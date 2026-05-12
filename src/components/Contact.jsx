import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name:'', email:'', service:'', budget:'', message:'' });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  const inputStyle = (name) => ({
    width: '100%', background: focused===name ? 'rgba(108,99,255,0.05)' : 'rgba(255,255,255,0.03)',
    border: `1px solid ${focused===name ? 'rgba(108,99,255,0.4)' : 'rgba(255,255,255,0.08)'}`,
    borderRadius: '12px', padding: '13px 15px', color: 'white',
    fontSize: '15px', fontFamily: 'var(--font-primary)', outline: 'none',
    transition: 'all 0.3s ease',
    boxShadow: focused===name ? '0 0 20px rgba(108,99,255,0.1)' : 'none',
  });

  const labelStyle = { display:'block', fontSize:'13px', fontWeight:'600', color:'var(--text-secondary)', marginBottom:'8px' };

  return (
    <section id="kontak" className="section" style={{ background:'var(--bg-secondary)' }}>
      <div className="container">
        <div className="contact-grid">
          {/* Left */}
          <div>
            <div className="section-label reveal">Kontak</div>
            <h2 className="section-title reveal reveal-delay-1">
              Mulai Proyek<br /><span className="gradient-text">Impian Anda</span>
            </h2>
            <p className="reveal reveal-delay-2" style={{ color:'var(--text-secondary)', lineHeight:'1.7', marginBottom:'40px', fontSize:'clamp(14px, 1.8vw, 16px)' }}>
              Ceritakan proyek Anda kepada kami. Kami akan merespons dalam waktu kurang dari 24 jam.
            </p>

            <div className="reveal reveal-delay-3" style={{ display:'flex', flexDirection:'column', gap:'14px', marginBottom:'36px' }}>
              {[
                { icon:'💬', label:'WhatsApp', value:'+62 889-7304-6705', href:'https://wa.me/+62-889-7304-6705' },
                { icon:'📧', label:'Email', value:'ridho245678@gmail.com', href:'mailto:ridho245678@gmail.com' },
                { icon:'📍', label:'Lokasi', value:'Jakarta, Indonesia', href:'#' },
              ].map(item => (
                <a key={item.label} href={item.href} style={{ display:'flex', alignItems:'center', gap:'14px', padding:'14px 18px', background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.06)', borderRadius:'14px', textDecoration:'none', transition:'all 0.3s ease' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor='rgba(108,99,255,0.3)'; e.currentTarget.style.transform='translateX(4px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor='rgba(255,255,255,0.06)'; e.currentTarget.style.transform='translateX(0)'; }}
                >
                  <span style={{ fontSize:'20px' }}>{item.icon}</span>
                  <div>
                    <div style={{ fontSize:'11px', color:'var(--text-muted)', fontWeight:'600', letterSpacing:'0.05em' }}>{item.label}</div>
                    <div style={{ fontSize:'14px', color:'white', fontWeight:'500' }}>{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="reveal reveal-delay-4" style={{ padding:'18px', background:'rgba(0,217,165,0.06)', border:'1px solid rgba(0,217,165,0.15)', borderRadius:'14px' }}>
              <div style={{ display:'flex', alignItems:'center', gap:'12px' }}>
                <span style={{ fontSize:'22px' }}>⚡</span>
                <div>
                  <div style={{ fontSize:'13px', fontWeight:'700', color:'#00D9A5' }}>Rata-rata response time</div>
                  <div style={{ fontSize:'12px', color:'var(--text-secondary)' }}>Kami biasanya membalas dalam <strong style={{ color:'white' }}>2–4 jam</strong> pada hari kerja</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="reveal reveal-delay-2">
            {submitted ? (
              <div style={{ background:'#111', border:'1px solid rgba(0,217,165,0.3)', borderRadius:'24px', padding:'clamp(32px, 5vw, 56px)', textAlign:'center' }}>
                <div style={{ fontSize:'48px', marginBottom:'20px' }}>🎉</div>
                <h3 style={{ fontSize:'22px', fontWeight:'800', marginBottom:'12px' }}>Pesan Terkirim!</h3>
                <p style={{ color:'var(--text-secondary)', lineHeight:'1.7' }}>Tim kami akan segera merespons dalam 2–4 jam.</p>
                <div style={{ marginTop:'28px' }}>
                  <button onClick={() => { setSubmitted(false); setFormData({ name:'', email:'', service:'', budget:'', message:'' }); }} className="btn-secondary" style={{ fontFamily:'var(--font-primary)' }}>
                    Kirim Pesan Lagi
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ background:'#111', border:'1px solid rgba(255,255,255,0.06)', borderRadius:'24px', padding:'clamp(24px, 4vw, 40px)' }}>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'14px', marginBottom:'14px' }} className="form-row">
                  <div>
                    <label style={labelStyle}>Nama Lengkap *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} onFocus={() => setFocused('name')} onBlur={() => setFocused(null)} placeholder="Nama" required style={inputStyle('name')} />
                  </div>
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} onFocus={() => setFocused('email')} onBlur={() => setFocused(null)} placeholder="email@gmail.com" required style={inputStyle('email')} />
                  </div>
                </div>

                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'14px', marginBottom:'14px' }} className="form-row">
                  <div>
                    <label style={labelStyle}>Jenis Layanan *</label>
                    <select name="service" value={formData.service} onChange={handleChange} onFocus={() => setFocused('service')} onBlur={() => setFocused(null)} required style={{ ...inputStyle('service'), cursor:'pointer' }}>
                      <option value="" style={{ background:'#111' }}>Pilih layanan...</option>
                      <option value="landing" style={{ background:'#111' }}>Landing Page</option>
                      <option value="website" style={{ background:'#111' }}>Website</option>
                      <option value="webapp" style={{ background:'#111' }}>Web App</option>
                      <option value="konsultasi" style={{ background:'#111' }}>Konsultasi</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Budget</label>
                    <select name="budget" value={formData.budget} onChange={handleChange} onFocus={() => setFocused('budget')} onBlur={() => setFocused(null)} style={{ ...inputStyle('budget'), cursor:'pointer' }}>
                      <option value="" style={{ background:'#111' }}>Pilih budget...</option>
                      <option value="1-3" style={{ background:'#111' }}>1 – 3 juta</option>
                      <option value="3-7" style={{ background:'#111' }}>3 – 7 juta</option>
                      <option value="7-15" style={{ background:'#111' }}>7 – 15 juta</option>
                      <option value="15+" style={{ background:'#111' }}>15 juta+</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom:'20px' }}>
                  <label style={labelStyle}>Ceritakan Proyek Anda *</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} onFocus={() => setFocused('message')} onBlur={() => setFocused(null)} placeholder="Ceritakan goals, fitur yang diinginkan, timeline, dan detail proyek Anda..." required rows="4" style={{ ...inputStyle('message'), resize:'vertical', minHeight:'110px' }} />
                </div>

                <button type="submit" className="btn-primary" style={{ width:'100%', justifyContent:'center', padding:'15px', fontSize:'15px', fontFamily:'var(--font-primary)' }}>
                  Kirim Pesan Sekarang 🚀
                </button>
                <p style={{ textAlign:'center', fontSize:'12px', color:'var(--text-muted)', marginTop:'14px' }}>
                  Konsultasi pertama gratis · Tidak ada komitmen
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
        select option { background: #111 !important; color: white !important; }
      `}</style>
    </section>
  );
};

export default Contact;
