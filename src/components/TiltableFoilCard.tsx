import React, { useState, useRef, ReactNode } from 'react';
import { motion } from "framer-motion";
import { FoilEffect } from './FoilEffect';

interface TiltableFoilCardProps {
  children: ReactNode;
  isFlipped: boolean;
  intensity?: number;
  shine?: number;
  animateProps: any;
  initialTransform?: any;
}

export function TiltableFoilCard({
  children,
  isFlipped,
  intensity = 10,
  shine = 0.4,
  animateProps,
  initialTransform
}: TiltableFoilCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tiltPosition, setTiltPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Calculate tilt based on mouse position
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || isFlipped) return;

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    
    // Calculate mouse position relative to the center of the element (from -1 to 1)
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    
    setTiltPosition({ x, y });
  };

  // Reset position when mouse leaves
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTimeout(() => {
      setTiltPosition({ x: 0, y: 0 });
    }, 100);
  };

  const handleMouseEnter = () => {
    if (!isFlipped) {
      setIsHovered(true);
    }
  };

  // Calculate rotation angles
  const rotateX = -tiltPosition.y * (isFlipped ? 0 : intensity);
  const rotateY = tiltPosition.x * (isFlipped ? 0 : intensity);

  // Apply custom transform
  const customTransform = isHovered && !isFlipped
    ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    : '';
  
  return (
    <motion.div
      ref={containerRef}
      className="absolute w-full h-full backface-hidden"
      style={initialTransform}
      animate={animateProps}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: isFlipped ? 1 : 1.02 }}
      transition={{ 
        duration: 0.6, 
        ease: "easeOut",
        scale: { duration: 0.2 }
      }}
    >
      <div 
        style={{ 
          transform: customTransform,
          transition: isHovered && !isFlipped
            ? 'transform 0.1s ease' 
            : 'transform 0.5s ease-out'
        }}
        className="size-full"
      >
        <FoilEffect 
          intensity={0} // We're handling the tilt separately now
          shine={shine}
        >
          {children}
        </FoilEffect>
      </div>
    </motion.div>
  );
}