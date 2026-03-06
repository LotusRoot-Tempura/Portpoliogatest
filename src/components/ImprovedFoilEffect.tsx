import React, { useState, useRef, ReactNode, useEffect } from 'react';
import { motion } from "framer-motion";

interface ImprovedFoilEffectProps {
  children: ReactNode;
  intensity?: number;
  shine?: number;
  isFlipped?: boolean;
  animateProps?: any;
  initialTransform?: any;
  className?: string;
  dampingFactor?: number;
}

export function ImprovedFoilEffect({
  children,
  intensity = 5, // Reduced from 20 to 5 for more subtle tilt
  shine = 0.5,
  isFlipped = false,
  animateProps,
  initialTransform,
  className = "",
  dampingFactor = 0.5, // Added damping factor to smooth out movements
}: ImprovedFoilEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tiltPosition, setTiltPosition] = useState({ x: 0, y: 0 });
  const [targetTiltPosition, setTargetTiltPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Calculate tilt based on mouse position
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || isFlipped) return;

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    
    // Calculate mouse position relative to the center of the element (from -0.5 to 0.5)
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Distance from center, normalized to -1 to 1
    const x = (e.clientX - centerX) / (rect.width / 2);
    const y = (e.clientY - centerY) / (rect.height / 2);
    
    // Store actual mouse position for lighting effect
    setMousePosition({ 
      x: (e.clientX - rect.left) / rect.width, 
      y: (e.clientY - rect.top) / rect.height 
    });
    
    // Update target tilt with proper values - negative values give a "following" effect
    // where the card tilts toward the mouse position
    setTargetTiltPosition({ x: -x, y: y });
  };

  // Reset position when mouse leaves
  const handleMouseLeave = () => {
    setIsHovered(false);
    // Smooth transition back to flat
    setTargetTiltPosition({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    if (!isFlipped) {
      setIsHovered(true);
    }
  };

  // Apply damping effect to smooth out tilt movements
  useEffect(() => {
    if (isFlipped) {
      setTiltPosition({ x: 0, y: 0 });
      return;
    }

    // Simple damping for smoother transitions
    const smoothTilt = () => {
      setTiltPosition(prev => ({
        x: prev.x + (targetTiltPosition.x - prev.x) * dampingFactor,
        y: prev.y + (targetTiltPosition.y - prev.y) * dampingFactor,
      }));
      
      animationFrameId = requestAnimationFrame(smoothTilt);
    };
    
    let animationFrameId = requestAnimationFrame(smoothTilt);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [targetTiltPosition, isFlipped, dampingFactor]);

  // Calculate rotation angles - we apply the intensity here
  const rotateX = tiltPosition.y * (isFlipped ? 0 : intensity); 
  const rotateY = tiltPosition.x * (isFlipped ? 0 : intensity);

  // Calculate light position based on mouse position (0-100%)
  const lightPosX = mousePosition.x * 100;
  const lightPosY = mousePosition.y * 100;

  // Style for the light reflection effect
  const lightStyle = {
    background: isHovered && !isFlipped
      ? `radial-gradient(circle at ${lightPosX}% ${lightPosY}%, rgba(255,255,255,${shine}), transparent 80%)`
      : `radial-gradient(circle at 50% 50%, rgba(255,255,255,${shine/2}), transparent 80%)`
  };

  // The transform to apply to the card
  const cardTransform = isHovered && !isFlipped
    ? `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    : 'perspective(1200px) rotateX(0deg) rotateY(0deg)';

  // When flipped state changes, reset the tilt
  useEffect(() => {
    if (isFlipped) {
      setTargetTiltPosition({ x: 0, y: 0 });
      setTiltPosition({ x: 0, y: 0 });
    }
  }, [isFlipped]);

  return (
    <motion.div
      ref={containerRef}
      className={`absolute w-full h-full backface-hidden ${className}`}
      style={initialTransform}
      animate={animateProps}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: isFlipped ? 1 : 1.01 }} // Reduced from 1.02 to 1.01 for subtler hover effect
      transition={{ 
        duration: 0.6,
        ease: "easeOut",
        scale: { duration: 0.3 } // Slightly increased duration for smoother scale
      }}
    >
      <div 
        style={{ 
          transform: cardTransform,
          transition: isHovered && !isFlipped
            ? 'transform 0.15s ease-out' // Slightly increased for smoother transitions
            : 'transform 0.5s ease-out'
        }}
        className="size-full"
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
    </motion.div>
  );
}