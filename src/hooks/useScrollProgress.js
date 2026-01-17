import { useState, useEffect, useCallback, useRef } from "react";

export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  const rafId = useRef(null);

  const calculateProgress = useCallback(() => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    
    // Calculate total scrollable height
    const totalHeight = scrollHeight - clientHeight;
    
    // Prevent division by zero
    if (totalHeight <= 0) {
      setProgress(0);
      return;
    }
    
    // Calculate current progress (0 to 100)
    const currentProgress = (scrollTop / totalHeight) * 100;
    
    // Clamp value between 0 and 100
    const clampedProgress = Math.min(Math.max(currentProgress, 0), 100);
    
    setProgress(clampedProgress);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      
      rafId.current = requestAnimationFrame(calculateProgress);
    };

    // Initial calculation
    calculateProgress();
    
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", calculateProgress, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", calculateProgress);
      
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [calculateProgress]);

  return progress;
};