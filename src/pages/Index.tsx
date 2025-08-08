import { Hero } from "@/components/sections/Hero";
import { CoffeeMenu } from "@/components/sections/CoffeeMenu";
import { FoodMenu } from "@/components/sections/FoodMenu";
import { About } from "@/components/sections/About";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <CoffeeMenu />
      <FoodMenu />
      <About />
    </div>
  );
};

export default Index;
