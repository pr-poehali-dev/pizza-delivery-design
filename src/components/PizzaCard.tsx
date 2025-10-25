import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Pizza } from '@/context/CartContext';

interface PizzaCardProps {
  pizza: Pizza;
  onAddToCart: (pizza: Pizza) => void;
}

const PizzaCard = ({ pizza, onAddToCart }: PizzaCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in group">
      <div className="relative overflow-hidden">
        <img
          src={pizza.image}
          alt={pizza.name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
          {pizza.category}
        </Badge>
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl">{pizza.name}</CardTitle>
        <CardDescription className="text-base">{pizza.description}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-primary">{pizza.price} ₽</span>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button 
          className="w-full gap-2 hover-scale" 
          size="lg"
          onClick={() => onAddToCart(pizza)}
        >
          <Icon name="Plus" size={20} />
          В корзину
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PizzaCard;
