import { MenuCard } from "@/components/ui/menu-card";
import cappuccinoImage from "@/assets/coffee-cappuccino.jpg";
import espressoImage from "@/assets/coffee-espresso.jpg";
import icedCoffeeImage from "@/assets/coffee-iced.jpg";

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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coffeeItems.map((item, index) => (
            <div key={item.title} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <MenuCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};