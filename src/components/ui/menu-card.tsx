import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MenuCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  className?: string;
}

export const MenuCard = ({ title, description, price, image, className }: MenuCardProps) => {
  return (
    <Card className={cn(
      "group overflow-hidden border-0 shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105 animate-scale-in",
      className
    )}>
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <CardContent className="p-4 bg-card">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg text-card-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <span className="font-bold text-primary bg-gradient-coffee bg-clip-text text-transparent">
            {price}
          </span>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};