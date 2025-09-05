import React, { useEffect } from 'react';

const ParticleBackground: React.FC = () => {
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 20 + 's';
      particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
      
      const particles = document.querySelector('.particles');
      if (particles) {
        particles.appendChild(particle);
        
        setTimeout(() => {
          particle.remove();
        }, 20000);
      }
    };

    const interval = setInterval(createParticle, 300);
    
    return () => clearInterval(interval);
  }, []);

  return <div className="particles"></div>;
};

export default ParticleBackground;