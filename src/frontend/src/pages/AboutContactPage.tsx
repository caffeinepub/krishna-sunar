import { Mail, MapPin, User, GraduationCap, Video } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { MediaPortraits } from '@/components/portfolio/MediaPortraits';
import { PortfolioVideoGallery } from '@/components/portfolio/PortfolioVideoGallery';

export default function AboutContactPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            About Krishna Sunar
          </h1>
          <p className="text-lg text-muted-foreground">
            Developer, Designer, and Digital Craftsman
          </p>
        </div>

        {/* Media Portraits */}
        <div className="mb-16">
          <MediaPortraits />
        </div>

        {/* Videos Section */}
        <div className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-3 text-primary flex items-center gap-3">
              <Video className="h-8 w-8" />
              Videos
            </h2>
            <p className="text-muted-foreground">
              Explore my work through video showcases and demonstrations
            </p>
          </div>
          <PortfolioVideoGallery />
        </div>

        <div className="space-y-8">
          <Card className="glass border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary">Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Dedicated to crafting immersive digital experiences that blend cutting-edge technology with 
                thoughtful design. From the hills of Baglung to the digital frontier, my journey is driven by 
                curiosity, innovation, and a passion for creating meaningful solutions.
              </p>
            </CardContent>
          </Card>

          <Card className="glass border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary">Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Full-stack development with modern frameworks and technologies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>3D graphics and immersive web experiences</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Cloud architecture and scalable infrastructure</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>UI/UX design with focus on accessibility and performance</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Separator className="bg-primary/20" />

          <div>
            <h2 className="text-3xl font-bold mb-8 text-primary">Contact Information</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <Card className="glass border-primary/20 hover:border-primary/40 transition-all hover:glow-sapphire">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <User className="h-5 w-5 text-primary" />
                    Name
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium">Krishna Sunar</p>
                </CardContent>
              </Card>

              <Card className="glass border-primary/20 hover:border-primary/40 transition-all hover:glow-sapphire">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Mail className="h-5 w-5 text-primary" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="mailto:bkk449433@gmail.com"
                    className="font-medium text-primary hover:underline"
                  >
                    bkk449433@gmail.com
                  </a>
                </CardContent>
              </Card>

              <Card className="glass border-primary/20 hover:border-primary/40 transition-all hover:glow-sapphire">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium">Jaimini 2, Damek, Baglung</p>
                </CardContent>
              </Card>

              <Card className="glass border-primary/20 hover:border-primary/40 transition-all hover:glow-sapphire">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium">Shree Shanti Secondary School</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
