import React, { useEffect, useRef, useState } from 'react';



export default function ImageCollection() {
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

  const galleryImages = [
    {
      id: 1,
      src: "/img/gallery-4.jpeg",
      alt: "Steven Marc Live On Stage",
      aspect: "tall" // Colonne 1 - Image 1 (Haute)
    },
    {
      id: 2,
      src: "/img/steven-practice.jpeg",
      alt: "Studio Practice Session",
      aspect: "normal" // Colonne 2 - Image 1
    },
    {
      id: 3,
      src: "/img/steven-stage.jpeg",
      alt: "Backstage Portrait",
      aspect: "tall" // Colonne 3 - Image 1 (Haute)
    },
    {
      id: 4,
      src: "/img/gallery-5.jpeg",
      alt: "Concert Audience & Performance",
      aspect: "normal" // Colonne 1 - Image 2
    },
    {
      id: 5,
      src: "/img/gallery-6.jpeg",
      alt: "Guitar Close Up Live",
      aspect: "normal" // Colonne 2 - Image 2
    },
    {
      id: 6,
      src: "/img/gallery-7.jpeg",
      alt: "Acoustic Portrait",
      aspect: "normal" // Colonne 3 - Image 2
    }
  ];

  return (
    <section 
      id="gallery" 
      ref={sectionRef} 
      className={`gallery-section ${isVisible ? 'animate-in' : ''}`}
    >
      {/* En-tête centré */}
      <div className="gallery-header fade-up">
        <span className="gallery-subtitle">06 · FROM THE ARCHIVE</span>
        <h2 className="gallery-title">IMAGE COLLECTION</h2>
      </div>

      {/* Grille d'images */}
      <div className="gallery-container">
        {galleryImages.map((img, index) => (
          <div 
            key={img.id} 
            className={`gallery-item ${img.aspect} scale-up`}
            style={{ animationDelay: `${0.1 + index * 0.1}s` }}
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
            <div className="gallery-overlay">
              <i className="fa-solid fa-expand expand-icon"></i>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}