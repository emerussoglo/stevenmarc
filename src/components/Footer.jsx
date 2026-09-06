import React from 'react';

export default function Footer() {
  return (
    <footer className="footer-section">
      {/* Ligne d'accent supérieure rouge animée */}
      <div className="footer-top-border"></div>

      <div className="footer-container">
        {/* Monogramme / Logo */}
        <div className="footer-brand">
          <span className="brand-letters">SM</span>
          <span className="brand-dot">.</span>
        </div>

        {/* Sous-titre / Slogan (Taille affinée) */}
        <p className="footer-tagline">
          For live performances, sessions<br />and collaborations.
        </p>

        {/* Adresse email avec animation de survol */}
        <a 
          href="mailto:stevenmarc.music@gmail.com" 
          className="footer-email-link"
        >
          <span>stevenmarc.music@gmail.com</span>
          <i className="fa-solid fa-arrow-up-right-from-square email-icon"></i>
        </a>

        {/* Boîte des réseaux sociaux animée */}
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

        {/* Bas de page / Mentions légales & Auteur */}
        <div className="footer-bottom">
          <span className="footer-credit">DESIGNED FOR STEVEN MARC</span>
          
          {/* Credit Auteur - Emérus SOGLO */}
          <a 
            href="https://emerussoglo.vercel.app/" 
            target="_blank" 
            rel="noreferrer" 
            className="footer-author"
          >
            MADE WITH <span className="author-heart">♥</span> BY <span className="author-name">EMÉRUS SOGLO</span>
          </a>

          <span className="footer-copyright">© 2026 · BENIN</span>
        </div>
      </div>
    </footer>
  );
}