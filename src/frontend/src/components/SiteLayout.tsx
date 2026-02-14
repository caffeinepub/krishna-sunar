import { Link, useNavigate } from '@tanstack/react-router';
import { Menu, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Magnetic } from './motion/Magnetic';

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Portfolio', path: '/' },
    { label: 'About', path: '/about' },
  ];

  return (
    <div className="relative flex min-h-screen flex-col">
      {/* Fixed Cyber Background */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url(/assets/generated/cyber-obsidian-bg.dim_1920x1080.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
        aria-hidden="true"
      />
      
      {/* Obsidian Overlay */}
      <div 
        className="fixed inset-0 z-0 bg-background/95"
        aria-hidden="true"
      />

      {/* Content Wrapper */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Header */}
        <header 
          className={`sticky top-0 z-50 w-full transition-all duration-300 ${
            scrolled 
              ? 'glass-strong border-b border-primary/20 shadow-glow-sm' 
              : 'glass border-b border-border/20'
          }`}
        >
          <div className="container flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 glow-sapphire rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Sparkles className="h-8 w-8 text-primary relative z-10" />
              </div>
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Krishna Sunar
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex md:items-center md:gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm font-medium transition-all hover:text-primary relative group"
                  activeProps={{ className: 'text-primary' }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="glass-strong border-l border-primary/20">
                <div className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="text-lg font-medium transition-colors hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="glass-strong border-t border-primary/20 mt-auto">
          <div className="container py-8 md:py-12">
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <span className="font-bold">Krishna Sunar</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Cyber-Minimalism Portfolio • Developer & Designer
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-4 text-primary">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                      About
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4 text-primary">Contact</h3>
                <p className="text-sm text-muted-foreground">
                  Jaimini 2, Damek, Baglung
                  <br />
                  bkk449433@gmail.com
                </p>
              </div>
            </div>
            <div className="mt-8 border-t border-border/20 pt-8 text-center text-sm text-muted-foreground">
              <p>© {new Date().getFullYear()} Krishna Sunar. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
