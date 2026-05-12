import React from 'react';

const brands = [
  { name:'TechFlow', initial:'TF' }, { name:'BeautyBox', initial:'BB' },
  { name:'PropNest', initial:'PN' }, { name:'MediConnect', initial:'MC' },
  { name:'ZenCoach', initial:'ZC' }, { name:'FleetTrack', initial:'FT' },
  { name:'GreenLife', initial:'GL' }, { name:'CorpSol', initial:'CS' },
];

const SocialProof = () => (
  <div style={{ background:'var(--bg-secondary)', borderTop:'1px solid rgba(255,255,255,0.04)', borderBottom:'1px solid rgba(255,255,255,0.04)', padding:'36px 0' }}>
    <div className="container">
      <p className="reveal" style={{ textAlign:'center', fontSize:'12px', color:'var(--text-muted)', letterSpacing:'0.12em', textTransform:'uppercase', fontWeight:'600', marginBottom:'28px' }}>
        Dipercaya oleh bisnis-bisnis terkemuka
      </p>
      <div className="social-brands">
        {brands.map((brand, i) => (
          <div key={brand.name} className={`reveal reveal-delay-${(i % 4) + 1}`}
            style={{ display:'flex', alignItems:'center', gap:'8px', padding:'7px 14px', background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.06)', borderRadius:'100px', transition:'all 0.3s ease', cursor:'default' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor='rgba(108,99,255,0.3)'; e.currentTarget.style.background='rgba(108,99,255,0.06)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor='rgba(255,255,255,0.06)'; e.currentTarget.style.background='rgba(255,255,255,0.03)'; }}
          >
            <div style={{ width:'22px', height:'22px', borderRadius:'6px', background:`hsl(${i*45}, 60%, 50%)`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'8px', fontWeight:'800', color:'white' }}>{brand.initial}</div>
            <span style={{ fontSize:'13px', color:'var(--text-muted)', fontWeight:'500' }}>{brand.name}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default SocialProof;
