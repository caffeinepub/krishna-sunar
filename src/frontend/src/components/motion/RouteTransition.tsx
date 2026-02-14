import { useEffect, useState } from 'react';
import { useRouter } from '@tanstack/react-router';

interface RouteTransitionProps {
  children: React.ReactNode;
}

export function RouteTransition({ children }: RouteTransitionProps) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      setIsTransitioning(true);
      setTimeout(() => setIsTransitioning(false), 300);
    };

    // Listen to router state changes
    const unsubscribe = router.subscribe('onBeforeLoad', handleRouteChange);
    
    return () => {
      if (typeof unsubscribe === 'function') {
        unsubscribe();
      }
    };
  }, [router]);

  return (
    <div
      className={`transition-all duration-300 ${
        isTransitioning 
          ? 'opacity-0 translate-y-4' 
          : 'opacity-100 translate-y-0'
      }`}
      style={{
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {children}
    </div>
  );
}
