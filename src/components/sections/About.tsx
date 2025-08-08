import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <section className="py-16 px-4 bg-gradient-warm">
      <div className="max-w-4xl mx-auto">
        <Card className="border-0 shadow-card bg-card/95 backdrop-blur-sm animate-fade-in">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Our Story
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Founded in 2019, Bean There Cafe & Roastery began as a dream to create a warm, 
                welcoming space where coffee lovers could gather and experience the perfect cup. 
                Our passion for exceptional coffee drives everything we do.
              </p>
              
              <p>
                We source our beans directly from sustainable farms around the world, ensuring 
                fair trade practices while bringing you the most flavorful and ethically-sourced 
                coffee possible. Each batch is roasted in-house to perfection.
              </p>
              
              <p>
                More than just a cafe, we're a community hub where friends meet, work gets done, 
                and memories are made over the simple pleasure of great coffee and delicious food. 
                Come experience the Bean There difference.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center gap-8 text-center">
              <div className="animate-scale-in">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Years of Excellence</div>
              </div>
              <div className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Coffee Origins</div>
              </div>
              <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-3xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Happy Customers</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};