import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const interiorPrices = [
  {
    title: 'INTÉRIEUR EXPRESS',
    price: '35€',
    features: ['Aspiration Tapis et Moquettes', 'Nettoyage Plastiques'],
    popular: false,
  },
  {
    title: 'INTÉRIEUR PREMIUM',
    price: '60€',
    features: [
      'Aspiration Tapis et Moquettes',
      'Nettoyage Plastiques',
      'Nettoyage des Vitres',
      'Nettoyage Contour des Portes',
      'Nettoyage du Coffre',
    ],
    popular: true,
  },
  {
    title: 'INTÉRIEUR PRESTIGE',
    price: '90€',
    features: [
      'Aspiration Tapis et Moquettes',
      'Nettoyage Plastiques',
      'Nettoyage des Vitres',
      'Nettoyage Contour des Portes',
      'Nettoyage du Coffre',
      'Rénovation Plastiques et Cuirs',
      'Nettoyage des Joints de Portes',
      'Nettoyage Vapeur',
    ],
    popular: false,
  },
];

const exteriorPrices = [
  {
    title: 'EXTÉRIEUR EXPRESS',
    price: '30€',
    features: ['Lavage carrosserie', 'Rinçage'],
    popular: false,
  },
  {
    title: 'EXTÉRIEUR PREMIUM',
    price: '50€',
    features: [
      'Lavage carrosserie',
      'Rinçage',
      'Nettoyage Jantes',
      'Nettoyage Vitres',
      'Cire brillante',
    ],
    popular: true,
  },
  {
    title: 'EXTÉRIEUR PRESTIGE',
    price: '70€',
    features: [
      'Lavage carrosserie',
      'Rinçage',
      'Nettoyage Jantes',
      'Nettoyage Vitres',
      'Cire brillante',
      'Décontamination',
      'Polish carrosserie',
      'Traitement céramique',
    ],
    popular: false,
  },
];

const supplements = [
  { name: 'Shampoing Sièges', price: '30€' },
  { name: 'Traitement Sièges Cuir', price: '30€' },
  { name: 'Shampoing Tapis', price: '20€' },
  { name: 'Supplément Sable', price: '15€' },
  { name: 'Supplément Poils Animaux', price: '20€' },
];

const displacement = [
  { distance: 'Entre 0km et 5km', price: 'OFFERT' },
  { distance: 'Entre 5km et 15km', price: '5€' },
  { distance: 'Entre 15km et 30km', price: '10€' },
  { distance: 'Plus de 30km', price: 'Sur devis' },
];

export const Pricing = () => {
  const [activeTab, setActiveTab] = useState<'interieur' | 'exterieur'>('interieur');
  const prices = activeTab === 'interieur' ? interiorPrices : exteriorPrices;

  return (
    <section id="tarifs" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">
            <span className="text-primary">NOS</span> TARIFS
          </h2>
          <p className="section-subtitle">
            Des formules adaptées à tous vos besoins, du rafraîchissement express à la remise à neuf complète
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('interieur')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'interieur'
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            Intérieur
          </button>
          <button
            onClick={() => setActiveTab('exterieur')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'exterieur'
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            Extérieur
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {prices.map((plan, index) => (
            <div
              key={index}
              className={`glass-card p-8 relative hover-lift ${
                plan.popular ? 'border-primary' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Populaire
                </div>
              )}
              <h3 className="text-xl font-bold mb-4 text-center">{plan.title}</h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-primary">{plan.price}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.popular ? 'default' : 'outline'}
                className="w-full"
                asChild
              >
                <a href="https://wa.me/33784542082" target="_blank" rel="noopener noreferrer">
                  Réserver
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Supplements & Displacement */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Supplements */}
          <div className="glass-card p-8">
            <h3 className="text-xl font-bold mb-6">SUPPLÉMENTS</h3>
            <div className="space-y-4">
              {supplements.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                  <span className="text-muted-foreground">{item.name}</span>
                  <span className="font-semibold text-primary">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Displacement */}
          <div className="glass-card p-8">
            <h3 className="text-xl font-bold mb-6">DÉPLACEMENT</h3>
            <div className="space-y-4">
              {displacement.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                  <span className="text-muted-foreground">{item.distance}</span>
                  <span className={`font-semibold ${item.price === 'OFFERT' ? 'text-green-500' : 'text-primary'}`}>
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
