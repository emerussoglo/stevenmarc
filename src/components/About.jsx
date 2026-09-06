import React from 'react';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Colonne Gauche - Image avec bordure verticale & légende */}
        <div className="about-image-column">
          <div className="about-image-wrapper">
            <div className="vertical-accent-line"></div>
            <img src="/img/steven-live.jpeg" alt="Steven Marc Live in Cotonou" />
          </div>
          <span className="about-image-caption">LIVE IN COTONOU</span>
        </div>

        {/* Colonne Droite - Contenu Texte */}
        <div className="about-content">
          <span className="about-subtitle">THE STORY BEHIND THE STRINGS</span>
          <h2 className="about-title">WHO AM I?</h2>

          <p className="about-paragraph">
            I am <span className="highlight-red">Steven Marc</span>, a guitarist born on July 6, 2001, in Godomey, Benin.
          </p>

          <p className="about-paragraph">
            Music became my language early. With <span className="highlight-red">more than 10 years of experience</span>, I have developed a sound rooted in precision, feeling and the rich pulse of West African music.
          </p>

          <p className="about-paragraph">
            From intimate studio sessions to major stages, every performance is a chance to listen, connect and make the guitar speak.
          </p>

          {/* Statistiques */}
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Years playing</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">20+</span>
              <span className="stat-label">Live stages</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">03</span>
              <span className="stat-label">Featured projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}