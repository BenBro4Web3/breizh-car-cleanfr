import { useState } from 'react';
import { Eye, X } from 'lucide-react';

import gallery1 from '@/assets/gallery-1.jpeg';
import gallery2 from '@/assets/gallery-2.jpeg';
import gallery3 from '@/assets/gallery-3.jpeg';
import gallery4 from '@/assets/gallery-4.jpeg';
import gallery5 from '@/assets/gallery-5.jpeg';
import gallery6 from '@/assets/gallery-6.jpeg';
import gallery7 from '@/assets/gallery-7.jpeg';

const images = [
  { src: gallery1, alt: 'Intérieur BMW nettoyé' },
  { src: gallery2, alt: 'Intérieur Nissan Juke nettoyé' },
  { src: gallery3, alt: 'Banquette arrière nettoyée' },
  { src: gallery4, alt: 'Habitacle Nissan Juke' },
  { src: gallery5, alt: 'Volant Mercedes AMG' },
  { src: gallery6, alt: 'Intérieur Peugeot nettoyé' },
  { src: gallery7, alt: 'Coffre véhicule nettoyé' },
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');

  return (
    <section id="galerie" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Notre Galerie</h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('photos')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'photos'
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            Photos
          </button>
          <button
            onClick={() => setActiveTab('videos')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'videos'
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            Vidéos
          </button>
        </div>

        {/* Gallery Grid */}
        {activeTab === 'photos' && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl cursor-pointer hover-lift"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <Eye className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'videos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: '/videos/gallery-video-1.mp4', alt: 'Nettoyage véhicule 1' },
              { src: '/videos/gallery-video-2.mp4', alt: 'Nettoyage véhicule 2' },
              { src: '/videos/gallery-video-3.mp4', alt: 'Nettoyage véhicule 3' },
            ].map((video, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl bg-muted"
              >
                <video
                  src={video.src}
                  className="w-full aspect-video object-cover"
                  controls
                  playsInline
                  muted
                  preload="metadata"
                >
                  Votre navigateur ne supporte pas la lecture vidéo.
                </video>
              </div>
            ))}
          </div>
        )}

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-muted/80 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            <img
              src={selectedImage}
              alt="Image agrandie"
              className="max-w-full max-h-[90vh] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
};
