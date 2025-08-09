import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./App.css";

function BannerCarousel({ banners }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (!banners.length) return;
    const interval = setInterval(() => setCurrentIndex(i => (i + 1) % banners.length), 4000);
    return () => clearInterval(interval);
  }, [banners]);
  if (!banners.length) return null;
  const banner = banners[currentIndex];
  return (
    <div className="hero-banner" style={{ backgroundImage: `url(${banner.bannerImage})` }}>
      <div className="banner-gradient" />
      <img className="hero-title" src={banner.coverImage} alt={banner.title} />
      <div className="banner-info">
        <h1>{banner.title}</h1>
        <p>{banner.description}</p>
        <button className="banner-play btn btn-warning" onClick={() => alert(`${banner.title}\nThis is a demo website. No video playback.`)}>▶ Play</button>
      </div>
      <div className="banner-dots">
        {banners.map((_, idx) => <span key={idx} className={`dot${idx === currentIndex ? " active" : ""}`} />)}
      </div>
    </div>
  );
}

function App() {
  const [animeList, setAnimeList] = useState([]);
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    axios.get("https://responsive-anime-website.onrender.com/api/anime")
      .then(res => setAnimeList(res.data))
      .catch(() => setAnimeList([]));
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    function handleClick(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [menuOpen]);

  // Find unique sections
  const allSections = Array.from(
    new Set(
      animeList
        .map(a => a.section && a.section.trim())
        .filter(Boolean)
        .sort((a, b) => a.localeCompare(b))
    )
  );

  const grouped = {};
  allSections.forEach(sec => {
    grouped[sec] = animeList
      .filter(a => a.section && a.section.trim() === sec)
      .filter(a => a.title.toLowerCase().includes(search.trim().toLowerCase()));
  });

  const featured = grouped["Featured"] || [];
  const NAV_LINKS = [
    { label: "Home", href: "#home" }
  ].concat(
    allSections.map(sec => ({
      label: sec,
      href: `#${sec.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`
    }))
  );
  const misplacedAnime = animeList.filter(a => !a.section);

  const scrollToId = id => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="cr-navbar navbar d-flex justify-content-between align-items-center px-3">
        <span className="navbar-brand d-flex align-items-center">
          <span className="logo me-2" role="img" aria-label="Anime-Roll Logo">🍥</span> Anime-Roll
        </span>
        <div ref={menuRef} className="dropdown" style={{ position: "relative" }}>
          <button
            type="button"
            aria-label="Show Sections"
            className="dropdown-toggle btn"
            style={{
              fontSize: "2rem",
              color: "#f47521",
              background: "transparent",
              border: "none",
              boxShadow: "none",
            }}
            onClick={() => setMenuOpen(open => !open)}
          >
            &#9776;
          </button>
          {menuOpen && (
            <div
              className="dropdown-menu show"
              style={{
                right: 0,
                left: "auto",
                minWidth: "12rem",
                background: "#232323",
                border: "1px solid #f47521",
                position: "absolute",
                zIndex: 2000,
                marginTop: "0.5rem",
              }}
            >
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  className="dropdown-item"
                  href={href}
                  style={{ color: "#f47521", fontWeight: "bold" }}
                  onClick={e => {
                    e.preventDefault();
                    scrollToId(href.slice(1));
                  }}
                >
                  {label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Debug warning if any anime has blank 'section' */}
      {misplacedAnime.length > 0 && (
        <div className="container my-3">
          <div className="alert alert-warning">
            <b>Warning:</b> Some anime have missing <code>section</code> value!
            <ul>
              {misplacedAnime.map(a => (
                <li key={a._id || a.title}><b>{a.title}</b></li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Scroll anchor for Home */}
      <div id="home"></div>

      {/* Banner Carousel (if any Featured anime) */}
      {featured.length > 0 && (
        <section id="featured"><BannerCarousel banners={featured} /></section>
      )}

      {/* Search Bar */}
      <div className="container mt-3 mb-4">
        <input
          type="search"
          className="form-control mx-auto"
          placeholder="Search your favorite anime…"
          style={{ maxWidth: "500px" }}
          aria-label="Search anime"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {/* All grouped sections */}
      {Object.entries(grouped)
        .filter(([section]) => section !== "Featured")
        .map(([section, animes]) =>
          animes.length > 0 ? (
            <section
              className="anime-section"
              id={section.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
              key={section}
            >
              <div className="container">
                <h2 className="section-title my-3">{section}</h2>
                <div className="row flex-nowrap overflow-auto">
                  {animes.map(anime => (
                    <div className="col-10 col-sm-7 col-md-4 col-lg-3 mb-3" key={anime._id || anime.title}>
                      <div className="anime-card">
                        <div className="cover-container">
                          <img
                            src={anime.coverImage}
                            alt={anime.title}
                            style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center"}}
                          />
                          <button
                            className="play-button btn btn-warning btn-sm"
                            onClick={() => alert(`${anime.title}\nThis is a demo website. No video playback.`)}
                          >▶ Play</button>
                        </div>
                        <div className="anime-info">
                          <h3>{anime.title}</h3>
                          <div className="genres">{(anime.genres||[]).join(", ")}</div>
                          <div className="stats"><b>Episodes:</b> {anime.episodes}</div>
                          <div className="desc">{anime.description}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ) : null
        )}

      {/* Debug: list all loaded anime in a table */}
      <section className="container my-5 text-light">
        <details>
          <summary style={{cursor:"pointer"}}>🛠️ Debug: View all loaded anime</summary>
          <table className="table table-dark table-striped mt-3">
            <thead>
              <tr>
                <th>Title</th>
                <th>Section</th>
                <th>Genres</th>
                <th>Episodes</th>
              </tr>
            </thead>
            <tbody>
              {animeList.map(anime => (
                <tr key={anime._id || anime.title}>
                  <td>{anime.title}</td>
                  <td>{anime.section || "N/A"}</td>
                  <td>{(anime.genres || []).join(", ")}</td>
                  <td>{anime.episodes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </details>
      </section>
    </div>
  );
}

export default App;
