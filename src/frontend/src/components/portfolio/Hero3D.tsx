import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo, useState } from 'react';
import * as THREE from 'three';
import { useHeroPerformanceMode } from './useHeroPerformanceMode';

function ParticleSphere() {
  const meshRef = useRef<THREE.Points>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Create particle positions
  const particlesCount = 2000;
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    const radius = 3;
    
    for (let i = 0; i < particlesCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }
    
    return pos;
  }, []);

  // Handle mouse movement
  const handlePointerMove = (event: any) => {
    setMousePosition({
      x: (event.point.x / window.innerWidth) * 2,
      y: -(event.point.y / window.innerHeight) * 2,
    });
  };

  // Animate particles
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
      meshRef.current.rotation.x = mousePosition.y * 0.1;
      meshRef.current.rotation.z = mousePosition.x * 0.1;
    }
  });

  return (
    <points ref={meshRef} onPointerMove={handlePointerMove}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={particlesCount}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#60a5fa"
        sizeAttenuation
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function FallbackHero() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-background" />
      <div className="relative z-10 text-center space-y-4 animate-fade-in">
        <div className="w-32 h-32 mx-auto rounded-full border-4 border-primary/30 flex items-center justify-center glow-sapphire">
          <div className="w-24 h-24 rounded-full border-2 border-primary/50 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-primary/20" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero3D() {
  const { shouldRenderFull } = useHeroPerformanceMode();

  if (!shouldRenderFull) {
    return <FallbackHero />;
  }

  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#60a5fa" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
        <ParticleSphere />
      </Canvas>
    </div>
  );
}
