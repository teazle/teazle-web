import React, { useEffect, useRef } from 'react';

interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  amplitude?: number;
  duration?: number;
}

export const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  className = '',
  delay = 0,
  amplitude = 10,
  duration = 3000
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let animationId: number;
    let startTime: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp + delay;
      
      const elapsed = timestamp - startTime;
      const progress = (elapsed % duration) / duration;
      const yOffset = Math.sin(progress * Math.PI * 2) * amplitude;
      
      element.style.transform = `translateY(${yOffset}px)`;
      
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [delay, amplitude, duration]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

interface ParallaxElementProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export const ParallaxElement: React.FC<ParallaxElementProps> = ({
  children,
  className = '',
  speed = 0.5
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallax = scrolled * speed;
      element.style.transform = `translateY(${parallax}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  maxTilt = 15
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const rotateX = (mouseY / (rect.height / 2)) * maxTilt;
    const rotateY = (mouseX / (rect.width / 2)) * maxTilt;
    
    card.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <div
      ref={cardRef}
      className={`transition-transform duration-300 ease-out ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
};

interface GlowEffectProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  intensity?: number;
}

export const GlowEffect: React.FC<GlowEffectProps> = ({
  children,
  className = '',
  color = 'rgb(59, 130, 246)',
  intensity = 0.5
}) => {
  return (
    <div 
      className={`relative ${className}`}
      style={{
        filter: `drop-shadow(0 0 20px ${color}${Math.round(intensity * 255).toString(16).padStart(2, '0')})`
      }}
    >
      {children}
    </div>
  );
};

interface MorphingShapeProps {
  className?: string;
  color?: string;
  size?: number;
  duration?: number;
}

export const MorphingShape: React.FC<MorphingShapeProps> = ({
  className = '',
  color = 'currentColor',
  size = 100,
  duration = 4000
}) => {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className="absolute inset-0"
      >
        <path
          d="M20,50 C20,20 50,20 50,50 C50,20 80,20 80,50 C80,80 50,80 50,50 C50,80 20,80 20,50 Z"
          fill={color}
          opacity="0.1"
        >
          <animate
            attributeName="d"
            values="M20,50 C20,20 50,20 50,50 C50,20 80,20 80,50 C80,80 50,80 50,50 C50,80 20,80 20,50 Z;
                    M30,50 C30,30 50,10 70,50 C90,30 70,70 50,50 C30,70 10,30 30,50 Z;
                    M20,50 C20,20 50,20 50,50 C50,20 80,20 80,50 C80,80 50,80 50,50 C50,80 20,80 20,50 Z"
            dur={`${duration}ms`}
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );
};