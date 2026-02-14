import { useRef } from 'react';
import { useScrollProgress } from './useScrollProgress';

export function BiographyScrollytelling() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const progress = useScrollProgress(sectionRef);

  const bioSteps = [
    {
      title: 'Origins',
      content: 'Born and raised in Jaimini 2, Damek, Baglung, a place where mountains meet ambition and dreams take flight.',
      threshold: 0.2,
    },
    {
      title: 'Education',
      content: 'Studied at Shree Shanti Secondary School, where the foundation of knowledge and curiosity was built.',
      threshold: 0.4,
    },
    {
      title: 'Journey',
      content: 'From the hills of Baglung to the digital frontier, a journey of continuous learning and innovation.',
      threshold: 0.6,
    },
    {
      title: 'Present',
      content: 'Now crafting immersive digital experiences, blending technology with creativity to build the future.',
      threshold: 0.8,
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-32 md:py-48">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 
            className="text-4xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
            style={{
              opacity: Math.min(1, progress * 2),
              transform: `translateY(${Math.max(0, 50 - progress * 100)}px)`,
            }}
          >
            The Journey
          </h2>

          <div className="space-y-24">
            {bioSteps.map((step, index) => {
              const stepProgress = Math.max(0, Math.min(1, (progress - step.threshold) / 0.15));
              
              return (
                <div
                  key={index}
                  className="glass rounded-2xl p-8 md:p-12 border border-primary/20"
                  style={{
                    opacity: stepProgress,
                    transform: `translateY(${Math.max(0, 30 - stepProgress * 30)}px)`,
                    backdropFilter: `blur(${8 + stepProgress * 8}px)`,
                    transition: 'all 0.3s ease-out',
                  }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
                    {step.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.content}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
