import React, { useEffect, useRef, useState } from 'react';


export default function Collaborations() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const conexTracks = [
    { number: "01", title: "Dougbè", link: "https://youtu.be/ryqAVbJhb-4?si=TByaW_PaKbNb7Fod" },
    { number: "02", title: "Alcool", link: "https://youtu.be/q-UbFBKsXEk?si=7NaAkzH_wVsbEqgN" },
    { number: "03", title: "Aventurier", link: "https://youtu.be/pENWPm-0bCM?si=rFkQ_gwKYFf0vJKh" },
    { number: "04", title: "Trahison", link: "https://youtu.be/vrjuM8o9SQ4?si=oEyBY-LJNuwbje3k" }
  ];

  const frydaosTracks = [
    { number: "01", title: "Codicodico", link: "https://youtu.be/yJS1Lk3OBk8?si=vh-ctkU8unkSYW81" },
    { number: "02", title: "Noukon Yiyi", link: "https://youtu.be/EZHXnT3BkDI?si=iBTXUnknbqnP5edo" },
    { number: "03", title: "Vê Nan", link: "https://youtu.be/6CIL9VPcJNo?si=XgYT3oMpSNbRWvra" },
    // { number: "04", title: "Living", link: "#" }
  ];

  return (
    <section 
      id="collaborations" 
      ref={sectionRef} 
      className={`collab-section ${isVisible ? 'animate-in' : ''}`}
    >
      {/* En-tête de section */}
      <div className="collab-header fade-up">
        <span className="collab-subtitle">05 · SHARED FREQUENCIES</span>
        <h2 className="collab-title">COLLABORATIONS</h2>
        <p className="collab-description">
          Different artists, distinct worlds, one commitment: serving the song with honesty.
        </p>
      </div>

      <div className="collab-container">
        {/* Ligne du haut : Conex et Don + Frydaos */}
        <div className="collab-grid-top">
          
          {/* Card 1 : Conex et Don */}
          <div className="collab-card slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="collab-card-image">
              <img src="/img/conex-don.jpg" alt="Conex et Don" />
              <div className="badge-icon red-badge">
                <i className="fa-solid fa-guitar"></i>
              </div>
            </div>
            <div className="collab-card-content">
              <span className="collab-card-tag">A SIGNIFICANT COLLABORATION IN MY CAREER</span>
              <h3 className="collab-card-title">CONEX ET DON</h3>
              <p className="collab-card-text">
                A defining creative chapter built on instinct, trust and a shared love of bold, contemporary Beninese sound.
              </p>
              
              <div className="track-list">
                {conexTracks.map((track, i) => (
                  <a key={i} href={track.link} className="track-item">
                    <span className="track-number">{track.number}</span>
                    <span className="track-name">{track.title}</span>
                    <i className="fa-solid fa-arrow-up-right-from-square track-icon"></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2 : Frydaos */}
          <div className="collab-card slide-up" style={{ animationDelay: '0.25s' }}>
            <div className="collab-card-image">
              <img src="/img/frydaos-cover.jpg" alt="Frydaos" />
              <div className="badge-icon black-badge">
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
            <div className="collab-card-content">
              <span className="collab-card-tag">THE FORBIDDEN FRUIT BY FRYDAOS</span>
              <h3 className="collab-card-title">FRYDAOS</h3>
              <p className="collab-card-text">
                An enriching studio experience that invited a more textured, expressive approach to every guitar line.
              </p>

              <div className="track-list">
                {frydaosTracks.map((track, i) => (
                  <a key={i} href={track.link} className="track-item">
                    <span className="track-number">{track.number}</span>
                    <span className="track-name">{track.title}</span>
                    <i className="fa-solid fa-arrow-up-right-from-square track-icon"></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Ligne du bas : Don Metok (Large Card) */}
        <div className="collab-card-large slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="large-card-image">
            <img src="/img/don-metok-cover.jpg" alt="Don Metok" />
            <div className="youtube-overlay-btn">
              <i className="fa-brands fa-youtube"></i>
            </div>
          </div>
          <div className="large-card-content">
            <span className="collab-card-tag">THE MONUMENTAL STRIDE</span>
            <h3 className="collab-card-title">DON METOK</h3>
            <p className="collab-card-text">
              A vibrant guitar contribution to the title "I love you my baby," created to lift the melody and deepen its emotional pulse.
            </p>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="collab-btn-link">
              Listen on YouTube <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}