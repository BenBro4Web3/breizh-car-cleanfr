import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Maxime',
    rating: 5,
    text: 'Maxime est très sérieux, pro, sympathique et arrangeant.',
    date: 'Récemment',
  },
  {
    name: 'Julie G.',
    rating: 5,
    text: 'Excellent travail, ma voiture est comme neuve. Je recommande vivement !',
    date: 'Récemment',
  },
  {
    name: 'Jen S.',
    rating: 5,
    text: 'Service impeccable et ponctuel. Le nettoyage intérieur est impressionnant.',
    date: 'Récemment',
  },
  {
    name: 'Brad C.',
    rating: 5,
    text: 'Très professionnel, rapport qualité/prix imbattable sur le secteur.',
    date: 'Récemment',
  },
  {
    name: 'Amanda W.',
    rating: 5,
    text: 'Ma voiture avait besoin d\'un gros rafraîchissement, le résultat est bluffant. Merci !',
    date: 'Récemment',
  },
];

export const GoogleReviews = () => {
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

        {/* Static Google Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
              <div className="flex justify-between items-center text-sm">
                <span className="font-semibold text-foreground">{review.name}</span>
                <span className="text-muted-foreground">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Link */}
        <div className="text-center mt-8">
          <a
            href="https://g.page/r/CbIiqSlJLF1kEAE/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            Voir tous nos avis sur Google
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
