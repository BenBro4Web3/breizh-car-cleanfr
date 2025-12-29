import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const videos = [
  { src: '/videos/hero-video-1.mp4', alt: 'Nettoyage intérieur professionnel' },
  { src: '/videos/hero-video-2.mp4', alt: 'Résultat nettoyage automobile' },
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % videos.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentSlide) {
          video.currentTime = 0;
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      }
    });
  }, [currentSlide]);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % videos.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + videos.length) % videos.length);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/33784542082', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="accueil" className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Videos */}
      {videos.map((video, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <video
            ref={(el) => (videoRefs.current[index] = el)}
            src={video.src}
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            aria-label={video.alt}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/90" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up">
          <span className="text-foreground">BREIZH</span>{' '}
          <span className="text-primary">CAR</span>
          <br />
          <span className="text-primary">CLEAN</span>
        </h1>
        <p className="text-foreground/80 text-lg md:text-xl lg:text-2xl mb-10 max-w-2xl animate-fade-up stagger-1 opacity-0">
          Nettoyage automobile professionnel à domicile en Bretagne
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-up stagger-2 opacity-0">
          <Button variant="hero" onClick={handleWhatsAppClick}>
            Réserver maintenant
          </Button>
          <Button variant="heroOutline" asChild>
            <a href="#tarifs">Voir les tarifs</a>
          </Button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-foreground/10 backdrop-blur-sm border border-foreground/20 flex items-center justify-center text-foreground hover:bg-foreground/20 transition-all"
        aria-label="Diapositive précédente"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-foreground/10 backdrop-blur-sm border border-foreground/20 flex items-center justify-center text-foreground hover:bg-foreground/20 transition-all"
        aria-label="Diapositive suivante"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-primary w-8'
                : 'bg-foreground/30 hover:bg-foreground/50'
            }`}
            aria-label={`Aller à la diapositive ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
