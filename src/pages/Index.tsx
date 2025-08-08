import { Hero } from "@/components/sections/Hero";
import { CoffeeMenu } from "@/components/sections/CoffeeMenu";
import { FoodMenu } from "@/components/sections/FoodMenu";
import { About } from "@/components/sections/About";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <CoffeeMenu />
      <FoodMenu />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
