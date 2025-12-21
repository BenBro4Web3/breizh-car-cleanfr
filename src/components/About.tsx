import { Button } from '@/components/ui/button';
import { MapPin, Award, Sparkles, Eye } from 'lucide-react';

import about1 from '@/assets/about-1.jpeg';
import about2 from '@/assets/about-2.jpeg';

const features = [
  { icon: MapPin, text: 'Service à domicile dans toute la Bretagne' },
  { icon: Award, text: 'Équipement professionnel Kärcher' },
  { icon: Sparkles, text: 'Produits de qualité premium' },
  { icon: Eye, text: 'Attention aux détails' },
];

export const About = () => {
  return (
    <section id="apropos" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">À Propos</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Votre spécialiste du nettoyage automobile en Bretagne
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Breizh Car Clean est votre partenaire de confiance pour le nettoyage et le detailing automobile dans le département 35 et ses alentours. Nous nous déplaçons directement chez vous pour offrir un service professionnel et pratique.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Passionné par l'automobile et le souci du détail, notre objectif est de redonner à votre véhicule son éclat d'origine. Que ce soit pour un nettoyage intérieur complet, un traitement extérieur ou un detailing premium, nous utilisons des produits professionnels et des techniques éprouvées.
            </p>

            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground/90">{feature.text}</span>
                </li>
              ))}
            </ul>

            <Button variant="default" size="lg" asChild>
              <a href="https://wa.me/33784542082" target="_blank" rel="noopener noreferrer">
                Prendre rendez-vous
              </a>
            </Button>
          </div>

          {/* Images */}
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src={about1}
                alt="Breizh Car Clean - Nettoyage professionnel"
                className="w-full h-64 object-cover rounded-2xl hover-lift"
              />
            </div>
            <div className="pt-8">
              <img
                src={about2}
                alt="Breizh Car Clean - Équipement professionnel"
                className="w-full h-64 object-cover rounded-2xl hover-lift"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
