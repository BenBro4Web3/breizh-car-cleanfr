import { Car, Sparkles, Home } from 'lucide-react';

const services = [
  {
    icon: Car,
    title: 'Nettoyage Intérieur',
    description: 'Aspiration, plastiques, vitres, coffre... Redonnez une seconde vie à l\'habitacle de votre véhicule.',
  },
  {
    icon: Sparkles,
    title: 'Nettoyage Extérieur',
    description: 'Lavage à la main, jantes, décontamination, cire brillante pour une carrosserie éclatante.',
  },
  {
    icon: Home,
    title: 'Service à Domicile',
    description: 'Nous venons chez vous ! Gagnez du temps avec notre service de nettoyage mobile en Bretagne.',
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            <span className="text-primary">NOS</span> SERVICES
          </h2>
          <p className="section-subtitle">
            Un service professionnel de nettoyage automobile qui se déplace directement chez vous
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-8 text-center hover-lift group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
