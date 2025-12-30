import { useEffect } from 'react';

// Declare global window type for Elfsight
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

export const GoogleReviews = () => {
  useEffect(() => {
    // Charger le script Elfsight
    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    document.body.appendChild(script);

    // Initialiser le widget Elfsight quand le script est chargé
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
    <section id="avis" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">
            Nos <span className="text-primary">AVIS</span> Clients
          </h2>
          <p className="section-subtitle">
            Découvrez ce que nos clients disent de nos prestations
          </p>
        </div>

        {/* Widget Elfsight Google Reviews */}
        <div className="flex justify-center">
          <div className="elfsight-app-d6194560-187d-46d0-aa88-ff9fee2900c8" data-elfsight-app-lazy></div>
        </div>
      </div>
    </section>
  );
};
