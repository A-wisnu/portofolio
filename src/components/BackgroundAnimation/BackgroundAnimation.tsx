import './BackgroundAnimation.css';

const BackgroundAnimation = () => {
  // Generate random digital characters for matrix effect
  const generateMatrixChars = () => {
    const chars = '0123456789ABCDEF><[]{}()+=*&^%$#@!?';
    return Array.from({ length: 50 }, (_, i) => (
      <div key={i} className={`matrix-char matrix-char-${i % 5 + 1}`}>
        {chars[Math.floor(Math.random() * chars.length)]}
      </div>
    ));
  };

  const generatePixelGrid = () => {
    return Array.from({ length: 100 }, (_, i) => (
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
      
      {/* Glitch overlay lines */}
      <div className="glitch-lines">
        <div className="glitch-line glitch-line-1"></div>
        <div className="glitch-line glitch-line-2"></div>
        <div className="glitch-line glitch-line-3"></div>
      </div>
      
      {/* Floating geometric shapes */}
      <div className="retro-shapes">
        <div className="retro-shape triangle"></div>
        <div className="retro-shape square"></div>
        <div className="retro-shape diamond"></div>
        <div className="retro-shape hexagon"></div>
      </div>
    </div>
  );
};

export default BackgroundAnimation; 