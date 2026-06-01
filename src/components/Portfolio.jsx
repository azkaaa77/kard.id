import React, { useState } from "react";

const projects = [
  {
    title: "Kedai Backburner",
    category: "Web App",
    tags: ["Laravel 12", "Tailwind 4", "Filament"],
    description:
      "Sistem Management Point of Sales (POS) modern untuk UMKM kuliner dengan fitur manajemen stok, laporan penjualan otomatis, dan admin panel Filament.",
    accent: "#4338CA",
    result: "Efisiensi stok +150%",
    image: "/images/sando.png",
  },
  {
    title: "Hotel Management",
    category: "Web App",
    tags: ["Laravel 10", "Bootstrap"],
    description:
      "Aplikasi pemesanan kamar hotel (Booking System) yang mencakup manajemen reservasi, cek ketersediaan real-time, dan sistem billing tamu.",
    accent: "#7C3AED",
    result: "Booking rate +200%",
    image: "/images/hotel.png",
  },
  {
    title: "EQUIL.",
    category: "Web App",
    tags: ["Next.js", "Tailwind", "AI"],
    description:
      "Dashboard personal (System Archive) yang mengintegrasikan manajemen produktivitas, mental well-being, dan arsip karier dalam satu antarmuka minimalis.",
    accent: "#7C3AED",
    result: "70% fokus meningkat",
    image: "/images/equil.png",
    href: "https://equil-sanctuary-221944059136.asia-southeast2.run.app/",
  },
  {
    title: "UKM Basket MNC",
    category: "Website",
    tags: ["WordPress", "Tailwind", "Vanilla JS"],
    description:
      "Website komunitas berkonsep Sporty Minimalism & Dark Mode Premium dengan layout Bento Grid responsif dan interaksi mobile drawer berbasis Vanilla JS murni.",
    accent: "#1D4ED8",
    result: "500+ anggota aktif terintegrasi",
    image: "/images/ukm.png",
    href: "https://dev-ukmbasketmnc.pantheonsite.io/",
  },
  {
    title: "Slicing Brawl",
    category: "Website",
    tags: ["HTML", "Bootstrap"],
    description:
      "Implementasi desain UI kompleks ke dalam kode (Slicing) yang sangat responsif, memastikan presisi pixel yang sempurna antara desain dan web.",
    accent: "#1D4ED8",
    result: "Speed Index < 1.2s",
    image: "/images/slicing.png",
    href: "https://slicingbrawl.vercel.app/",
  },
  {
    title: "Kard",
    category: "Website",
    tags: ["WordPress", "Tailwind", "Vanilla JS"],
    description:
      "Landing Page / Portofolio Hub interaktif untuk agensi rekayasa digital bernama KARD.ID. Website ini dirancang dengan konsep visual ala Cybersecurity Operations Center.",
    accent: "#7C3AED",
    result: "12ms latency optimal",
    image: "/images/kard.png",
    href: "https://azkaaa77.github.io/kard/",
  },
  {
    title: "About Bandung",
    category: "Landing Page",
    tags: ["HTML", "CSS"],
    description:
      "Website portal informasi kota (City Guide & Cultural Platform) dengan visual dark mode premium yang merangkum sejarah asal-usul, topografi geografi, hingga destinasi wisata ikonik.",
    accent: "#4338CA",
    result: "562+ titik data kultural terarsip",
    image: "/images/bandung.png",
    href: "https://azkaaa77.github.io/aboutbandung/",
  },
  {
    title: "Nailong Fan Page",
    category: "Landing Page",
    tags: ["React"],
    description:
      "Landing page bertema karakter populer dengan animasi interaktif berbasis React, didesain khusus untuk engagement audiens yang tinggi.",
    accent: "#1D4ED8",
    result: "40% efisiensi meningkat",
    image: "/images/nailong.png",
  },
  {
    title: "AzzzK SPACE",
    category: "Landing Page",
    tags: ["HTML", "CSS"],
    description:
      "ebsite ensiklopedia astronomi (Space Hub) berkonsep Sci-Fi dengan fitur eksplorasi objek antariksa interaktif dan tata letak data semesta yang futuristik.",
    accent: "#7C3AED",
    result: "2,000+ objek kosmis terpetakan",
    image: "/images/galaxy.png",
    href: "https://azkaaa77.github.io/galaxy/",
  },
];

const categories = ["Semua", "Web App", "Website", "Landing Page"];

const MockupDisplay = ({ accent, image }) => {
  if (!image) {
    return (
      <div
        style={{
          height: "180px",
          borderRadius: "12px",
          background: `linear-gradient(135deg, ${accent}20, ${accent}10)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <span style={{ color: accent, fontSize: "10px", opacity: 0.5 }}>
          No Preview
        </span>
      </div>
    );
  }

  return (
    <div
      style={{
        width: "100%",
        aspectRatio: "16 / 10", // Mengunci rasio kotak agar selalu rapi
        borderRadius: "12px",
        background: "#0f172a",
        border: "1px solid rgba(255,255,255,0.08)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 1. Browser Header Bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "26px",
          background: "rgba(0,0,0,0.5)",
          display: "flex",
          alignItems: "center",
          gap: "5px",
          padding: "0 10px",
          zIndex: 10,
          backdropFilter: "blur(4px)",
        }}
      >
        {["#FF5F57", "#FEBC2E", "#28C840"].map((c, i) => (
          <div
            key={i}
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: c,
            }}
          />
        ))}
        <div
          style={{
            flex: 1,
            marginLeft: "6px",
            height: "10px",
            background: "rgba(255,255,255,0.05)",
            borderRadius: "3px",
          }}
        />
      </div>

      {/* 2. Gambar Menggunakan Tag <img> */}
      <img
        src={image}
        alt="Project Preview"
        style={{
          position: "absolute",
          top: "26px", // Mulai tepat di bawah header bar
          left: 0,
          width: "100%",
          height: "calc(100% - 26px)", // Mengisi sisa ruang yang ada
          objectFit: "cover", // INI KUNCINYA: Gambar akan memenuhi kotak tanpa gepeng
          objectPosition: "top", // Selalu perlihatkan bagian atas website
        }}
      />

      {/* 3. Overlay Gradasi untuk Estetika */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.4))",
          pointerEvents: "none",
        }}
      />

      {/* 4. Live Tag */}
      <div
        style={{
          position: "absolute",
          bottom: "12px",
          right: "12px",
          background: "rgba(0,0,0,0.7)",
          border: `1px solid ${accent}40`,
          borderRadius: "6px",
          padding: "4px 8px",
          fontSize: "9px",
          color: accent,
          fontWeight: "700",
          zIndex: 20,
        }}
      >
        LIVE ●
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const filtered =
    activeCategory === "Semua"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="portofolio"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#080c18",
        padding: "100px 0",
      }}
    >
      {/* ── Fading divider top ── */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(to right, transparent, rgba(229,222,255,0.06), transparent)",
        }}
      />

      {/* ── Grid texture ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(to right, #111827 1px, transparent 1px), linear-gradient(to bottom, #111827 1px, transparent 1px)",
          backgroundSize: "4rem 4rem",
          opacity: 0.3,
          pointerEvents: "none",
        }}
      />

      {/* ── Ambient blobs ── */}
      <div
        style={{
          position: "absolute",
          top: "-80px",
          right: "-60px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "#4338CA",
          opacity: 0.09,
          filter: "blur(120px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-60px",
          left: "-80px",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background: "#1D4ED8",
          opacity: 0.08,
          filter: "blur(120px)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ marginBottom: "40px" }}>
          <div className="section-label reveal">Portofolio</div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            <h2
              className="section-title reveal reveal-delay-1"
              style={{ marginBottom: 0 }}
            >
              Karya yang
              <br />
              <span className="gradient-text">Berbicara Sendiri</span>
            </h2>
            {/* Filter */}
            <div
              className="reveal reveal-delay-2"
              style={{
                display: "flex",
                gap: "6px",
                background: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "12px",
                padding: "4px",
                flexWrap: "wrap",
              }}
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: "8px 14px",
                    borderRadius: "8px",
                    border: "none",
                    background:
                      activeCategory === cat
                        ? "linear-gradient(135deg, #4338CA, #1D4ED8)"
                        : "transparent",
                    color:
                      activeCategory === cat ? "white" : "var(--text-muted)",
                    fontSize: "13px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="portfolio-grid">
          {filtered.map((project, i) => (
            <div
              key={project.title}
              className={`reveal reveal-delay-${(i % 3) + 1}`}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "20px",
                padding: "14px",
                cursor: "pointer",
                transition: "all 0.4s var(--ease-smooth)",
                transform:
                  hoveredIdx === i ? "translateY(-6px)" : "translateY(0)",
                boxShadow:
                  hoveredIdx === i
                    ? `0 20px 60px ${project.accent}20, 0 0 0 1px ${project.accent}30`
                    : "none",
                borderColor:
                  hoveredIdx === i
                    ? `${project.accent}40`
                    : "var(--border-card)",
              }}
            >
              <MockupDisplay accent={project.accent} image={project.image} />
              <div style={{ marginTop: "18px" }}>
                <div
                  style={{
                    display: "flex",
                    gap: "6px",
                    marginBottom: "10px",
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: "600",
                      color: project.accent,
                      background: project.accent + "15",
                      border: `1px solid ${project.accent}25`,
                      borderRadius: "100px",
                      padding: "3px 10px",
                    }}
                  >
                    {project.category}
                  </span>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: "11px",
                        color: "var(--text-muted)",
                        background: "rgba(255,255,255,0.04)",
                        borderRadius: "100px",
                        padding: "3px 10px",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(15px, 2vw, 18px)",
                    fontWeight: "700",
                    marginBottom: "8px",
                    color: "var(--text-heading)",
                  }}
                >
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.color = project.accent)
                    }
                    onMouseLeave={(e) => (e.target.style.color = "inherit")}
                  >
                    {project.title}
                  </a>
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "13px",
                    color: "var(--text-body)",
                    lineHeight: "1.6",
                    marginBottom: "14px",
                  }}
                >
                  {project.description}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "8px 12px",
                    background: project.accent + "10",
                    borderRadius: "8px",
                    border: `1px solid ${project.accent}20`,
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M1 10L5 6L8 9L13 3"
                      stroke={project.accent}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span
                    style={{
                      fontSize: "12px",
                      color: project.accent,
                      fontWeight: "600",
                    }}
                  >
                    {project.result}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="reveal"
          style={{ textAlign: "center", marginTop: "48px" }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              color: "var(--text-body)",
              marginBottom: "16px",
            }}
          >
            Tertarik dengan hasil seperti ini?
          </p>
          <a
            href="#kontak"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#kontak")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary"
          >
            Diskusikan Proyek Anda →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
