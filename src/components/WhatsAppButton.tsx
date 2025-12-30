import { MessageCircle } from 'lucide-react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const WhatsAppButton = () => {
  const handleClick = () => {
    // Track WhatsApp click for analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'whatsapp_floating_click', {
        event_category: 'engagement',
        event_label: 'Floating WhatsApp Button'
      });
    }
    window.open('https://wa.me/33784542082', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5C] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse hover:animate-none"
      aria-label="Contacter via WhatsApp"
    >
      <MessageCircle size={28} fill="currentColor" />
    </button>
  );
};
