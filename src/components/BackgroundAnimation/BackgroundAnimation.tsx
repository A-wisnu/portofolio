import './BackgroundAnimation.css';
import { useEffect, useState } from 'react';

const BackgroundAnimation = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Generate reduced elements for mobile
  const generateMatrixChars = () => {
    const chars = '0123456789ABCDEF><[]{}()+=*&^%$#@!?';
    const count = isMobile ? 20 : 50; // Reduce elements on mobile
    return Array.from({ length: count }, (_, i) => (
      <div key={i} className={`matrix-char matrix-char-${i % 5 + 1}`}>
        {chars[Math.floor(Math.random() * chars.length)]}
      </div>
    ));
  };

  const generatePixelGrid = () => {
    const count = isMobile ? 40 : 100; // Reduce elements on mobile
    return Array.from({ length: count }, (_, i) => (
      <div key={i} className={`pixel-dot pixel-dot-${i % 4 + 1}`}></div>
    ));
  };

  return (
    <div className="background-animation">
      {/* Matrix rain effect */}
      <div className="matrix-rain">
        {generateMatrixChars()}
      </div>
      
      {/* Floating pixel grid */}
      <div className="pixel-grid">
        {generatePixelGrid()}
      </div>
      
      {/* Glitch overlay lines - Reduced on mobile */}
      <div className="glitch-lines">
        <div className="glitch-line glitch-line-1"></div>
        {!isMobile && <div className="glitch-line glitch-line-2"></div>}
        {!isMobile && <div className="glitch-line glitch-line-3"></div>}
      </div>
      
      {/* Floating geometric shapes - Reduced on mobile */}
      <div className="retro-shapes">
        <div className="retro-shape triangle"></div>
        {!isMobile && <div className="retro-shape square"></div>}
        {!isMobile && <div className="retro-shape diamond"></div>}
        {!isMobile && <div className="retro-shape hexagon"></div>}
      </div>
    </div>
  );
};

export default BackgroundAnimation; 