import { MenuCard } from "@/components/ui/menu-card";
import cappuccinoImage from "@/assets/coffee-cappuccino.jpg";
import espressoImage from "@/assets/coffee-espresso.jpg";
import icedCoffeeImage from "@/assets/coffee-iced.jpg";
import latteImage from "@/assets/coffee-latte.jpg";
import americanoImage from "@/assets/coffee-americano.jpg";
import mochaImage from "@/assets/coffee-mocha.jpg";

const coffeeItems = [
  {
    title: "Signature Cappuccino",
    description: "Rich espresso topped with perfectly steamed milk and velvety microfoam, finished with beautiful latte art.",
    price: "$4.50",
    image: cappuccinoImage
  },
  {
    title: "House Espresso",
    description: "Our signature blend of premium beans, expertly roasted for a bold, smooth flavor with notes of chocolate and caramel.",
    price: "$3.25",
    image: espressoImage
  },
  {
    title: "Cold Brew Delight",
    description: "Smooth, refreshing cold brew coffee served over ice with a touch of cream and natural sweeteners.",
    price: "$4.75",
    image: icedCoffeeImage
  },
  {
    title: "Classic Latte",
    description: "Smooth espresso combined with steamed milk, creating the perfect balance of coffee and creaminess.",
    price: "$4.25",
    image: latteImage
  },
  {
    title: "Americano",
    description: "Bold espresso shots diluted with hot water for a clean, strong coffee experience.",
    price: "$3.75",
    image: americanoImage
  },
  {
    title: "Decadent Mocha",
    description: "Rich espresso blended with chocolate, steamed milk, and topped with whipped cream.",
    price: "$5.25",
    image: mochaImage
  }
];

export const CoffeeMenu = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Coffee Selection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Each cup is crafted with passion using the finest beans, roasted to perfection for an unforgettable experience.
          </p>
        </div>
        
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6 w-max">
            {coffeeItems.map((item, index) => (
              <div key={item.title} className="w-80 flex-shrink-0 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <MenuCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};