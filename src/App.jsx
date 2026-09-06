import React, { useState } from 'react';
import './style.css';
import Hero from './components/Hero';
import About from './components/About';
import Formation from './components/Formation';
import Work from './components/Work';
import Collaborations from './components/Collaborations';
import ImageCollection from './components/ImageCollection';
import Footer from './components/Footer';



export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div>
      <header>
        <nav className="navbar">
          <a href="#home" className="nav-logo">
            SM<span className="logo-dot">.</span>
          </a>

          <div className={`nav-menu-wrapper ${isMenuOpen ? 'open' : ''}`}>
            <ul className="nav-links">
              <li><a href="#about" className="nav-link" onClick={closeMenu}>About</a></li>
              <li><a href="#formation" className="nav-link" onClick={closeMenu}>Formation</a></li>
              <li><a href="#work" className="nav-link" onClick={closeMenu}>Work</a></li>
              <li><a href="#collaborations" className="nav-link" onClick={closeMenu}>Collaborations</a></li>
              <li><a href="#gallery" className="nav-link" onClick={closeMenu}>Gallery</a></li>
            </ul>

            <a href="#contact" className="nav-btn-contact" onClick={closeMenu}>
              Contact <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Navigation">
            <i className={isMenuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
          </button>
        </nav>
      </header>

      <main>
        <Hero />
        <About />
        <Formation />
        <Work />
        <Collaborations />
        <ImageCollection />
        <Footer />
      </main>
    </div>
  );
}