import React, { useEffect, useRef, useState } from 'react';

export default function Work() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Anime une seule fois
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const events = [
    {
      icon: "fa-solid fa-microphone-lines",
      name: "Festichill",
      year: "2023"
    },
    {
      icon: "fa-solid fa-star",
      name: "Cotonou Barbecue Festival",
      year: "2023"
    },
    {
      icon: "fa-solid fa-music",
      name: "Benin Symphony Concert",
      year: "2024"
    },
    {
      icon: "fa-solid fa-calendar-days",
      name: "Dibi Dobo Concert",
      year: "2024"
    }
  ];

  return (
    <section 
      id="work" 
      ref={sectionRef} 
      className={`work-section ${isVisible ? 'animate-in' : ''}`}
    >
      {/* En-tête centré */}
      <div className="work-header fade-up">
        <span className="work-subtitle">04 · ON THE STAGE</span>
        <h2 className="work-title">
          PROFESSIONAL<br />BACKGROUND
        </h2>
      </div>

      <div className="work-container">
        {/* Colonne Gauche - Image avec accentuation et légende */}
        <div className="work-image-column slide-right">
          <div className="work-image-wrapper">
            <div className="work-accent-line"></div>
            <img src="/img/steven-stage.jpeg" alt="Steven Marc Live Stage" />
            <div className="image-overlay-glow"></div>
          </div>
          <span className="work-image-caption">FESTIVAL SEASON · 2023—2024</span>
        </div>

        {/* Colonne Droite - Liste des événements & Projet à la une */}
        <div className="work-content-column slide-left">
          {/* Liste des événements */}
          <div className="events-list">
            {events.map((event, index) => (
              <div 
                key={index} 
                className="event-item" 
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="event-left">
                  <i className={`${event.icon} event-icon`}></i>
                  <span className="event-name">{event.name}</span>
                </div>
                <span className="event-year">{event.year}</span>
              </div>
            ))}
          </div>

          {/* Carte Featured Project */}
          <div className="featured-project-card">
            <div className="project-thumbnail">
              <img src="/img/conex-don.jpg" alt="Conex et Don L'Apéro" />
            </div>
            <div className="project-info">
              <span className="project-badge">FEATURED PROJECT · 2024</span>
              <h3 className="project-title">Conex et Don<br />L'Apéro</h3>
              <p className="project-description">Guitar performance & musical collaboration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}