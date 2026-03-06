import React, { useState, useRef, ReactNode } from 'react';

interface FoilEffectProps {
  children: ReactNode;
  intensity?: number; // Controls how strong the tilt effect is
  shine?: number; // Controls the intensity of the shine effect
  className?: string;
}

export function FoilEffect({
  children,
  intensity = 15, // Default tilt intensity
  shine = 0.5, // Default shine intensity
  className = ""
}: FoilEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Calculate rotation and lighting based on mouse position
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    
    // Calculate mouse position relative to the center of the element (from -1 to 1)
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    
    setPosition({ x, y });
  };

  // Reset position when mouse leaves
  const handleMouseLeave = () => {
    setIsHovered(false);
    // Smoothly reset to original position
    setTimeout(() => {
      setPosition({ x: 0, y: 0 });
    }, 100);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Apply the rotation and shine effect styles
  const rotateX = -position.y * intensity; // Invert Y for natural tilt
  const rotateY = position.x * intensity;
  
  // Calculate light position (0-100%)
  const lightPosX = (position.x * 0.5 + 0.5) * 100;
  const lightPosY = (position.y * 0.5 + 0.5) * 100;

  // Style for the light reflection effect
  const lightStyle = {
    background: isHovered 
      ? `radial-gradient(circle at ${lightPosX}% ${lightPosY}%, rgba(255,255,255,${shine}), transparent 60%)`
      : 'none'
  };

  return (
    <div 
      ref={containerRef}
      className={`${className} relative transition-transform will-change-transform foil-shadow`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1, 1, 1)`,
        transition: isHovered ? 'transform 0.1s ease' : 'transform 0.5s ease-out'
      }}
    >
      {/* Apply foil-card class to the first child if it's a single element */}
      {React.Children.map(children, (child, index) => {
        if (index === 0 && React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement, {
            className: `${(child as React.ReactElement).props.className || ''} foil-card`
          });
        }
        return child;
      })}
      
      {/* Light reflection effect layer */}
      <div 
        className="absolute inset-0 pointer-events-none z-10 transition-opacity"
        style={lightStyle}
      />
    </div>
  );
}