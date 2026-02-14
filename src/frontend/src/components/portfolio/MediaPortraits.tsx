export function MediaPortraits() {
  const images = [
    {
      src: '/assets/IMG_20251129_100401.jpg',
      alt: 'Krishna Sunar Portrait 1',
    },
    {
      src: '/assets/IMG_20251129_100401-1.jpg',
      alt: 'Krishna Sunar Portrait 2',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {images.map((image, index) => (
        <div
          key={index}
          className="glass rounded-2xl overflow-hidden border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:glow-sapphire group"
        >
          <div className="aspect-[3/4] relative overflow-hidden">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      ))}
    </div>
  );
}
