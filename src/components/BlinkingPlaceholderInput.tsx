import React, { useState, useEffect } from "react";

type BlinkingPlaceholderInputProps = {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  style?: React.CSSProperties;
};

export function BlinkingPlaceholderInput({
  placeholder,
  value,
  onChange,
  className = "",
  style = {}
}: BlinkingPlaceholderInputProps) {
  // Track focus state to know when to hide placeholder
  const [isFocused, setIsFocused] = useState(false);
  // Track if we've started typing
  const [hasValue, setHasValue] = useState(false);

  // Update hasValue when value changes
  useEffect(() => {
    setHasValue(value.length > 0);
  }, [value]);

  // Create keyframes for blinking animation
  const blinkingCss = `
    @keyframes blinkPlaceholder {
      0% { opacity: 0.3; }
      50% { opacity: 1; }
      100% { opacity: 0.3; }
    }
  `;

  // Placeholder styling that matches input
  const placeholderStyle = {
    ...style,
    color: "#D4D4D6", /* White-200 color */
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    pointerEvents: "none",
    textAlign: "right",
    animation: "blinkPlaceholder 3s ease-in-out infinite",
    display: hasValue || isFocused ? "none" : "block",
    userSelect: "none"
  };

  // Create an input handler that updates parent state and local state
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    setHasValue(e.target.value.length > 0);
  };

  // Handle focus and blur events
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className="relative w-full">
      {/* Include blinking animation styles */}
      <style>{blinkingCss}</style>
      
      {/* The actual input field */}
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        spellCheck="false"
        autoCorrect="off"
        autoCapitalize="off"
        className={`bg-transparent border-none outline-none w-full ${className}`}
        style={style}
      />
      
      {/* Custom blinking placeholder that appears when input is empty and not focused */}
      {!hasValue && !isFocused && (
        <div style={placeholderStyle as React.CSSProperties}>
          {placeholder}
        </div>
      )}
    </div>
  );
}