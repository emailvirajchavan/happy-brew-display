import { Hero } from "@/components/sections/Hero";
import { CoffeeMenu } from "@/components/sections/CoffeeMenu";
import { FoodMenu } from "@/components/sections/FoodMenu";
import { About } from "@/components/sections/About";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppChat } from "@/components/ui/whatsapp-chat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <CoffeeMenu />
      <FoodMenu />
      <About />
      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default Index;
