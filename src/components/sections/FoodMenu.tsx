import { MenuCard } from "@/components/ui/menu-card";
import avocadoToastImage from "@/assets/food-avocado-toast.jpg";
import paniniImage from "@/assets/food-panini.jpg";
import saladImage from "@/assets/food-salad.jpg";

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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {foodItems.map((item, index) => (
            <div key={item.title} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <MenuCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};