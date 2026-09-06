import React, { useEffect, useState } from 'react';


export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Déclenche les animations après le montage du composant
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`hero-section ${isLoaded ? 'hero-animated' : ''}`}>
      {/* Compteur à gauche */}
      <div className="hero-counter animate-side-left">01/07</div>

      <div className="hero-container">
        {/* Image circulaire avec arc rouge */}
        <div className="hero-image-wrapper animate-pop">
          <div className="hero-image-circle">
            <img src="/img/steven.jpeg" alt="Steven Marc" />
          </div>
          <svg className="red-arc-svg" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="48" />
          </svg>
        </div>

        {/* Contenu Texte */}
        <div className="hero-content">
          <span className="hero-location animate-fade-down">
            BENIN · WEST AFRICA
          </span>

          <h1 className="hero-title animate-fade-up-1">
            Jeacques-Steven <br />
            <span className="text-red">Marc</span>
          </h1>

          <p className="hero-subtitle animate-fade-up-2">
            Guitarist Musician
          </p>

          <p className="hero-description animate-fade-up-3">
            A decade of shaping emotion into sound—on stage, in the studio, and in collaboration.
          </p>

          <div className="hero-actions animate-fade-up-4">
            <div className="social-box">
              <a 
                href="https://www.tiktok.com/@iamstevenmarc" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="TikTok"
              >
                <i className="fa-brands fa-tiktok"></i>
              </a>
              <a 
                href="https://www.facebook.com/stevblues" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
            </div>

            <a href="#about" className="hero-btn-story">
              Discover my story <i className="fa-solid fa-arrow-down"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Texte vertical PORTFOLIO */}
      <div className="hero-vertical-text animate-side-right">PORTFOLIO</div>
    </section>
  );
}