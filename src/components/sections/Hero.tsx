import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-coffee.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Coffee shop atmosphere" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 animate-fade-in">
        <div className="animate-float">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Bean There
            <span className="block text-4xl md:text-6xl text-cream font-light">Cafe & Roastery</span>
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-cream/90 mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up">
          Discover the perfect blend of comfort and flavor. From expertly crafted coffee to fresh, delicious meals.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <Button 
            size="lg" 
            className="bg-warm-orange hover:bg-warm-orange/90 text-primary-foreground font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-warm"
          >
            View Menu
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-cream text-cream hover:bg-cream hover:text-primary font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            Visit Us
          </Button>
        </div>
      </div>
    </section>
  );
};