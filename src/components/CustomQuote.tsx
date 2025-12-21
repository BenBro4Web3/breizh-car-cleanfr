import { Button } from '@/components/ui/button';
import { Camera, Car, Wrench, Calendar } from 'lucide-react';

const steps = [
  { icon: Camera, text: 'Photos du véhicule (Int. / Ext.)' },
  { icon: Car, text: 'Type de véhicule (SUV, Berline, Citadine...)' },
  { icon: Wrench, text: 'Prestation souhaitée : Int. / Ext. / Complet' },
  { icon: Calendar, text: 'Disponibilité et lieu' },
];

export const CustomQuote = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title mb-4">
            <span className="text-primary">PRESTATION</span> SUR MESURE
          </h2>
          <p className="section-subtitle mb-12">
            Votre voiture mérite une attention particulière. Envoyez-nous quelques infos et nous vous proposerons un devis personnalisé !
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {steps.map((step, index) => (
              <div key={index} className="glass-card p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">{step.text}</p>
              </div>
            ))}
          </div>

          <Button variant="hero" asChild>
            <a
              href="https://wa.me/33784542082?text=Bonjour%2C%20je%20souhaite%20un%20devis%20personnalis%C3%A9%20pour%20mon%20v%C3%A9hicule"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demander un devis sur WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
