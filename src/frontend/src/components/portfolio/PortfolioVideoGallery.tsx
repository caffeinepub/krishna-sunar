import { Card, CardContent } from '@/components/ui/card';
import { Play } from 'lucide-react';

interface VideoItem {
  src: string;
  title: string;
  poster?: string;
}

export function PortfolioVideoGallery() {
  const videos: VideoItem[] = [
    {
      src: '/assets/videos/1f158a6b951e1b75afea5d89dc5f91db_1769272394160.mp4',
      title: 'Portfolio Video 1',
    },
    {
      src: '/assets/videos/1f158a6b951e1b75afea5d89dc5f91db_1769272394160-1.mp4',
      title: 'Portfolio Video 2',
    },
    {
      src: '/assets/videos/1f158a6b951e1b75afea5d89dc5f91db_1769272394160-2.mp4',
      title: 'Portfolio Video 3',
    },
    {
      src: '/assets/videos/1f158a6b951e1b75afea5d89dc5f91db_1769272394160-3.mp4',
      title: 'Portfolio Video 4',
    },
    {
      src: '/assets/videos/b872a184a2fc47ae8ead6c0556390941_1770473082261.mp4',
      title: 'Portfolio Video 5',
    },
    {
      src: '/assets/videos/b872a184a2fc47ae8ead6c0556390941_1770473082261-1.mp4',
      title: 'Portfolio Video 6',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video, index) => (
        <Card
          key={index}
          className="glass border-primary/20 hover:border-primary/40 transition-all duration-300 hover:glow-sapphire group overflow-hidden"
        >
          <CardContent className="p-0">
            <div className="relative aspect-video bg-muted/20">
              <video
                src={video.src}
                controls
                preload="metadata"
                className="w-full h-full object-cover"
                aria-label={video.title}
                poster={video.poster}
              >
                <track kind="captions" />
                Your browser does not support the video tag.
              </video>
              
              {/* Fallback placeholder overlay (shown before video loads) */}
              <div className="absolute inset-0 flex items-center justify-center bg-muted/10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Play className="h-12 w-12 text-primary/50" />
              </div>
            </div>
            
            {/* Video title */}
            <div className="p-4">
              <p className="text-sm font-medium text-muted-foreground">
                {video.title}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
