import { SiReact, SiPython, SiThreedotjs, SiTailwindcss } from 'react-icons/si';
import { Cloud } from 'lucide-react';

export function SkillsHubBento() {
  const skills = [
    {
      name: 'React.js',
      icon: SiReact,
      color: '#61DAFB',
      description: 'Modern UI Development',
    },
    {
      name: 'Python',
      icon: SiPython,
      color: '#3776AB',
      description: 'Backend & AI',
    },
    {
      name: 'Three.js',
      icon: SiThreedotjs,
      color: '#000000',
      description: '3D Graphics',
    },
    {
      name: 'Tailwind CSS',
      icon: SiTailwindcss,
      color: '#06B6D4',
      description: 'Utility-First Styling',
    },
    {
      name: 'Cloud Architecture',
      icon: Cloud,
      color: '#60A5FA',
      description: 'Scalable Infrastructure',
    },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Skills Hub
          </h2>
          <p className="text-lg text-muted-foreground">
            Technologies & Expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            
            return (
              <div
                key={skill.name}
                className="glass rounded-2xl p-8 border border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:glow-sapphire"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:glow-sapphire"
                    style={{
                      backgroundColor: `${skill.color}20`,
                      border: `2px solid ${skill.color}40`,
                    }}
                  >
                    <Icon 
                      className="w-8 h-8 transition-all duration-300 group-hover:animate-float" 
                      style={{ color: skill.color }}
                    />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-foreground group-hover:text-primary transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
