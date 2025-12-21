import { MessageCircle, Instagram, Mail, MapPin } from 'lucide-react';

const contacts = [
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: '07 84 54 20 82',
    href: 'https://wa.me/33784542082',
  },
  {
    icon: Instagram,
    title: 'Instagram',
    value: '@breizh_car_clean',
    href: 'https://www.instagram.com/breizh_car_clean/',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'breizhcarclean@gmail.com',
    href: 'mailto:breizhcarclean@gmail.com',
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">
            <span className="text-primary">CONTACTEZ</span> NOUS
          </h2>
          <p className="section-subtitle">
            Disponible pour vous servir dans toute la Bretagne
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto mb-12">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-8 text-center hover-lift group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <contact.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">{contact.title}</h3>
              <p className="text-muted-foreground">{contact.value}</p>
            </a>
          ))}
        </div>

        {/* Zone d'intervention */}
        <div className="max-w-md mx-auto glass-card p-8 text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <MapPin className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-2">Zone d'intervention</h3>
          <p className="text-muted-foreground mb-2">Bretagne (35)</p>
          <p className="text-sm text-muted-foreground">Service à domicile ou sur place</p>
        </div>
      </div>
    </section>
  );
};
