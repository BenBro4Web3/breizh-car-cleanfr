import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Gallery } from '@/components/Gallery';
import { Pricing } from '@/components/Pricing';
import { CustomQuote } from '@/components/CustomQuote';
import { GoogleReviews } from '@/components/GoogleReviews';
import { InstagramFeed } from '@/components/InstagramFeed';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Pricing />
      <CustomQuote />
      <GoogleReviews />
      <InstagramFeed />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
