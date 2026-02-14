import { Link } from '@tanstack/react-router';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useSectors, useAllProducts } from '@/hooks/useCatalog';
import { Skeleton } from '@/components/ui/skeleton';
import { Hero3D } from '@/components/portfolio/Hero3D';
import { BiographyScrollytelling } from '@/components/portfolio/BiographyScrollytelling';
import { SkillsHubBento } from '@/components/portfolio/SkillsHubBento';
import { Magnetic } from '@/components/motion/Magnetic';
import { useInertialScroll } from '@/components/motion/useInertialScroll';

export default function HomePage() {
  const { data: sectors, isLoading: sectorsLoading } = useSectors();
  const { data: products, isLoading: productsLoading } = useAllProducts();
  
  useInertialScroll();

  const featuredProducts = products?.slice(0, 3) || [];

  return (
    <div className="flex flex-col">
      {/* Hero Section with 3D Particle Sphere */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 3D Background */}
        <div className="absolute inset-0 z-0">
          <Hero3D />
        </div>

        {/* Kinetic Typography */}
        <div className="relative z-10 container text-center space-y-8 py-20">
          <div className="space-y-4 animate-fade-in">
            <Badge className="bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 glow-sapphire">
              Portfolio • Developer • Designer
            </Badge>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter">
              <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-float text-glow">
                Krishna
              </span>
              <span className="block bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent animate-float text-glow" style={{ animationDelay: '0.2s' }}>
                Sunar
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Crafting immersive digital experiences with cutting-edge technology
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Magnetic>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow-sapphire group"
                asChild
              >
                <a href="#biography">
                  Explore Journey 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </Magnetic>
            
            <Magnetic>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/30 hover:bg-primary/10 hover:border-primary/50"
                asChild
              >
                <Link to="/about">View Projects</Link>
              </Button>
            </Magnetic>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-glow-pulse" />
          </div>
        </div>
      </section>

      {/* Biography Scrollytelling */}
      <div id="biography">
        <BiographyScrollytelling />
      </div>

      {/* Skills Hub */}
      <SkillsHubBento />

      {/* Sectors Section */}
      <section id="sectors" className="py-24 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Explore Categories
            </h2>
            <p className="text-lg text-muted-foreground">
              Browse through our curated collection
            </p>
          </div>

          {sectorsLoading ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="glass">
                  <CardHeader>
                    <Skeleton className="h-6 w-32 mb-2" />
                    <Skeleton className="h-4 w-full" />
                  </CardHeader>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sectors?.map((sector) => (
                <Magnetic key={sector.id}>
                  <Link to="/sector/$sectorId" params={{ sectorId: sector.id.toString() }}>
                    <Card className="glass h-full border-primary/20 hover:border-primary/40 transition-all duration-300 hover:glow-sapphire group cursor-pointer">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 group-hover:text-primary transition-colors">
                          <Sparkles className="h-5 w-5" />
                          {sector.name}
                        </CardTitle>
                        <CardDescription>{sector.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="w-full group-hover:bg-primary/10 group-hover:text-primary"
                        >
                          Browse <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                </Magnetic>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Featured Products */}
      {featuredProducts.length > 0 && (
        <section className="py-24 md:py-32 glass-strong">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Featured Items
              </h2>
              <p className="text-lg text-muted-foreground">
                Handpicked selections from our catalog
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredProducts.map((product) => (
                <Magnetic key={product.id}>
                  <Link to="/product/$productId" params={{ productId: product.id.toString() }}>
                    <Card className="glass h-full border-primary/20 hover:border-primary/40 transition-all duration-300 hover:glow-sapphire group cursor-pointer">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <CardTitle className="line-clamp-1 group-hover:text-primary transition-colors">
                            {product.name}
                          </CardTitle>
                          <Badge variant="secondary" className="flex-shrink-0 bg-primary/20 text-primary">
                            ${Number(product.price)}
                          </Badge>
                        </div>
                        <CardDescription className="line-clamp-2">
                          {product.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="w-full group-hover:bg-primary/10 group-hover:text-primary"
                        >
                          View Details <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                </Magnetic>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
