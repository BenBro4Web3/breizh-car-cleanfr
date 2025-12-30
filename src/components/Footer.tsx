export const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="/logo.jpg" alt="Breizh Car Clean" className="w-10 h-10 rounded-full object-cover" />
            <span className="font-bold">Breizh Car Clean</span>
          </div>
          <p className="text-muted-foreground text-sm text-center">
            © {new Date().getFullYear()} Breizh Car Clean. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};
