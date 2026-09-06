import React, { useEffect, useRef, useState } from 'react';

export default function Formation() {
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const timelineItems = [
    {
      year: "2011—2017",
      title: "Hermann Gmeiner Secondary School",
      description: "A formative period where discipline and musicianship grew side by side.",
      icon: "fa-solid fa-graduation-cap"
    },
    {
      year: "2014",
      title: "CAP Diploma",
      description: "Achieved the CAP diploma while developing a distinctive musical voice.",
      icon: "fa-solid fa-award"
    },
    {
      year: "2017",
      title: "Music Graduation",
      description: "Graduated with a focus on guitar performance and musical expression.",
      icon: "fa-solid fa-music"
    }
  ];

  return (
    <section 
      id="formation" 
      ref={sectionRef} 
      className={`formation-section ${isVisible ? 'animate-in' : ''}`}
    >
      {/* En-tête de section */}
      <div className="formation-header fade-up">
        <span className="formation-subtitle">03 · FOUNDATION</span>
        <h2 className="formation-title">FORMATION</h2>
      </div>

      <div className="formation-container">
        {/* Colonne Gauche - Image avec ligne d'accent & légende */}
        <div className="formation-image-column slide-right">
          <div className="formation-image-wrapper">
            <div className="formation-accent-line"></div>
            <img src="/img/steven-practice.jpeg" alt="Steven Marc Practice" />
            <div className="image-overlay-glow"></div>
          </div>
          <span className="formation-image-caption">PRACTICE SHAPES INSTINCT</span>
        </div>

        {/* Colonne Droite - Timeline */}
        <div className="formation-timeline slide-left">
          <div className="timeline-line"></div>

          {timelineItems.map((item, index) => (
            <div 
              key={index} 
              className="timeline-item"
              style={{ animationDelay: `${0.3 + index * 0.2}s` }}
            >
              <div className="timeline-icon-box">
                <i className={item.icon}></i>
              </div>
              <div className="timeline-content">
                <span className="timeline-year">{item.year}</span>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}