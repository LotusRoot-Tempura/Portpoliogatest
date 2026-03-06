import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const jobTitles = [
  "서비스 기획자",
  "Product Manager",
  "Product Owner",
  "웹/앱 기획자"
];

// Animation variants for job titles
const titleVariants = {
  enter: { 
    y: 20, 
    opacity: 0 
  },
  center: { 
    y: 0, 
    opacity: 1,
    transition: {
      y: { type: "spring", stiffness: 200, damping: 25 },
      opacity: { duration: 0.6 }
    }
  },
  exit: { 
    y: -20, 
    opacity: 0,
    transition: {
      y: { type: "spring", stiffness: 200, damping: 25 },
      opacity: { duration: 0.6 }
    }
  }
};

export function RollingJobTitles() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    // Set up interval to cycle through job titles every 2500ms
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
    }, 2500);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[34px] overflow-hidden relative shrink-0 w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={titleIndex}
          initial="enter"
          animate="center"
          exit="exit"
          variants={titleVariants}
          className="absolute left-0 top-0 w-full"
          style={{ 
            color: "#111827",
            fontFamily: "'Noto Sans', sans-serif",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "1",
            letterSpacing: "-0.96px"
          }}
        >
          {jobTitles[titleIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}