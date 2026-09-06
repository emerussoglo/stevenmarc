import React from 'react';

export default function Footer() {
  return (
    <footer className="footer-section">
      {/* Ligne d'accent supérieure rouge */}
      <div className="footer-top-border"></div>

      <div className="footer-container">
        {/* Monogramme / Logo */}
        <div className="footer-brand">
          <span className="brand-letters">SM</span>
          <span className="brand-dot">.</span>
        </div>

        {/* Sous-titre / Slogan */}
        <p className="footer-tagline">
          For live performances, sessions<br />and collaborations.
        </p>

        {/* Adresse email avec icône externe */}
        <a 
          href="mailto:stevenmarc.music@gmail.com" 
          className="footer-email-link"
        >
          stevenmarc.music@gmail.com
          <i className="fa-solid fa-arrow-up-right-from-square email-icon"></i>
        </a>

        {/* Boîte des réseaux sociaux avec bordures carrées */}
        <div className="social-box">
          <a 
            href="https://www.tiktok.com/@iamstevenmarc" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="TikTok"
            className="social-btn"
          >
            <i className="fa-brands fa-tiktok"></i>
          </a>
          <a 
            href="https://www.facebook.com/stevblues" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="Facebook"
            className="social-btn"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
        </div>

        {/* Ligne de séparation inférieure */}
        <div className="footer-divider"></div>

        {/* Bas de page / Mentions légales */}
        <div className="footer-bottom">
          <span className="footer-credit">DESIGNED FOR STEVEN MARC</span>
          <span className="footer-copyright">© 2026 · BENIN</span>
        </div>
      </div>
    </footer>
  );
}