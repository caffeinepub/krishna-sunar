import { useState, useEffect } from 'react';

export function useHeroPerformanceMode() {
  const [shouldRenderFull, setShouldRenderFull] = useState(true);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Simple device detection
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    
    // Check for low-end device indicators
    const isLowEnd = navigator.hardwareConcurrency ? navigator.hardwareConcurrency < 4 : false;

    // Disable full 3D hero if reduced motion, mobile, or low-end device
    if (prefersReducedMotion || isMobile || isLowEnd) {
      setShouldRenderFull(false);
    }
  }, []);

  return { shouldRenderFull };
}
