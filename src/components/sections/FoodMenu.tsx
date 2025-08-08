import { MenuCard } from "@/components/ui/menu-card";
import avocadoToastImage from "@/assets/food-avocado-toast.jpg";
import paniniImage from "@/assets/food-panini.jpg";
import saladImage from "@/assets/food-salad.jpg";
import wrapImage from "@/assets/food-wrap.jpg";
import sandwichImage from "@/assets/food-sandwich.jpg";
import bowlImage from "@/assets/food-bowl.jpg";

const foodItems = [
  {
    title: "Artisan Avocado Toast",
    description: "Fresh avocado on toasted sourdough with cherry tomatoes, feta cheese, and a drizzle of olive oil.",
    price: "$12.95",
    image: avocadoToastImage
  },
  {
    title: "Grilled Panini",
    description: "Crispy panini with melted mozzarella, fresh basil, tomatoes, and prosciutto on artisanal bread.",
    price: "$13.50",
    image: paniniImage
  },
  {
    title: "Garden Fresh Salad",
    description: "Mixed greens, seasonal vegetables, quinoa, and house-made vinaigrette for a healthy, satisfying meal.",
    price: "$11.75",
    image: saladImage
  },
  {
    title: "Breakfast Wrap",
    description: "Scrambled eggs, fresh vegetables, cheese, and herbs wrapped in a warm tortilla.",
    price: "$10.95",
    image: wrapImage
  },
  {
    title: "Gourmet Sandwich",
    description: "Premium ingredients layered on freshly baked artisanal bread with seasonal accompaniments.",
    price: "$14.25",
    image: sandwichImage
  },
  {
    title: "Power Bowl",
    description: "Nutritious quinoa bowl with roasted vegetables, nuts, seeds, and tahini dressing.",
    price: "$13.75",
    image: bowlImage
  }
];

export const FoodMenu = () => {
  return (
    <section className="py-16 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Savoury Delights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Fresh, locally-sourced ingredients come together in our carefully crafted dishes that perfectly complement your coffee.
          </p>
        </div>
        
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6 w-max">
            {foodItems.map((item, index) => (
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