import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useCart } from '@/context/CartContext';

const Header = () => {
  const location = useLocation();
  const { items } = useCart();
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="text-3xl">🍕</div>
            <div>
              <h1 className="text-2xl font-bold text-primary">PizzaTime</h1>
              <p className="text-xs text-muted-foreground">Доставка за 30 минут</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link 
              to="/" 
              className={`font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Меню
            </Link>
            <Link 
              to="/contacts" 
              className={`font-medium transition-colors hover:text-primary ${
                isActive('/contacts') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Контакты
            </Link>
          </nav>

          <Link to="/order">
            <Button className="relative gap-2 hover-scale">
              <Icon name="ShoppingCart" size={20} />
              <span className="hidden sm:inline">Корзина</span>
              {totalItems > 0 && (
                <Badge variant="destructive" className="absolute -top-2 -right-2 h-6 w-6 flex items-center justify-center p-0">
                  {totalItems}
                </Badge>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
