import { useEffect } from 'react';

declare global {
  interface Window {
    elfsight?: {
      platform: {
        Core: {
          load: () => void;
        };
      };
    };
  }
}

export const InstagramFeed = () => {
  useEffect(() => {
    // Check if script already loaded
    const existingScript = document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]');
    if (existingScript) return;

    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.referrerPolicy = 'no-referrer';
    document.body.appendChild(script);

    const handleScriptLoad = () => {
      if (window.elfsight) {
        window.elfsight.platform.Core.load();
      }
    };

    script.addEventListener('load', handleScriptLoad);

    return () => {
      script.removeEventListener('load', handleScriptLoad);
    };
  }, []);

  return (
    <section id="instagram" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">
            Suivez-nous sur <span className="text-primary">INSTAGRAM</span>
          </h2>
          <p className="section-subtitle">
            Découvrez nos dernières réalisations en photos
          </p>
        </div>

        {/* Elfsight Instagram Feed Widget */}
        <div className="flex justify-center">
          <div className="elfsight-app-2bc873b6-eea0-4443-ac64-347f88556230" data-elfsight-app-lazy></div>
        </div>
      </div>
    </section>
  );
};
