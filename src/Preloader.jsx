import React, { useState, useEffect } from 'react';

export default function Preloader({ onComplete }) {
  const [progress, setProgress]     = useState(0);
  const [fading,   setFading]       = useState(false);
  const [mounted,  setMounted]      = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const step = Math.floor(Math.random() * 7) + 2; // +2..+8 organik
        const next = prev + step;

        if (next >= 100) {
          clearInterval(interval);
          // Tahan sebentar di 100% supaya user sempat lihat
          setTimeout(() => {
            setFading(true);
            // Tunggu transisi fade selesai baru unmount
            setTimeout(() => {
              setMounted(false);
              onComplete?.();
            }, 600);
          }, 350);
          return 100;
        }
        return next;
      });
    }, 38);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#030712',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        opacity: fading ? 0 : 1,
        transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        pointerEvents: fading ? 'none' : 'all',
      }}
    >
      {/* Ambient orb — top right */}
      <div style={{ position: 'absolute', top: '-120px', right: '-120px', width: '420px', height: '420px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(67,56,202,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
      {/* Ambient orb — bottom left */}
      <div style={{ position: 'absolute', bottom: '-100px', left: '-100px', width: '320px', height: '320px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.11) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', width: '100%', maxWidth: '320px', textAlign: 'center' }}>

        {/* Wordmark */}
        <h1
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 'clamp(40px, 10vw, 56px)',
            fontWeight: 900,
            letterSpacing: '-0.04em',
            color: '#E5DEFF',
            marginBottom: '12px',
            lineHeight: 1,
          }}
        >
          kard<span style={{ color: '#4338CA' }}>.id</span>
        </h1>

        {/* Visi misi */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '13px',
            fontWeight: 400,
            color: '#94A3B8',
            letterSpacing: '0.04em',
            lineHeight: 1.6,
            marginBottom: '36px',
          }}
        >
          Membangun Pengalaman Digital<br />yang Berkesan & Berdampak.
        </p>

        {/* Bar + Counter row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          {/* Track */}
          <div
            style={{
              flex: 1,
              height: '3px',
              background: 'rgba(229,222,255,0.06)',
              borderRadius: '100px',
              overflow: 'hidden',
            }}
          >
            {/* Fill */}
            <div
              style={{
                height: '100%',
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #4338CA, #1D4ED8)',
                borderRadius: '100px',
                transition: 'width 75ms ease-out',
                boxShadow: '0 0 10px rgba(67,56,202,0.5)',
              }}
            />
          </div>

          {/* Percentage */}
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '13px',
              fontWeight: 600,
              color: '#94A3B8',
              minWidth: '38px',
              textAlign: 'right',
              letterSpacing: '-0.01em',
              tabularNums: true,
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            {progress}%
          </span>
        </div>

      </div>
    </div>
  );
}
