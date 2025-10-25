import { useState } from 'react';
import PizzaCard from '@/components/PizzaCard';
import { useCart, Pizza } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

const pizzas: Pizza[] = [
  {
    id: 1,
    name: 'Пепперони',
    description: 'Острая пепперони, моцарелла, томатный соус',
    price: 599,
    image: 'https://cdn.poehali.dev/projects/7f751186-5989-4ede-9d38-5151a7954a5a/files/82989312-1995-47ba-966e-db25b1f58139.jpg',
    category: 'Острые',
  },
  {
    id: 2,
    name: 'Маргарита',
    description: 'Свежие томаты, моцарелла, базилик, оливковое масло',
    price: 499,
    image: 'https://cdn.poehali.dev/projects/7f751186-5989-4ede-9d38-5151a7954a5a/files/f01239c1-3a3e-452c-b15b-7986f19d74e3.jpg',
    category: 'Классические',
  },
  {
    id: 3,
    name: 'Мясная',
    description: 'Бекон, ветчина, колбаски, пепперони, моцарелла',
    price: 699,
    image: 'https://cdn.poehali.dev/projects/7f751186-5989-4ede-9d38-5151a7954a5a/files/fd482778-667d-4cd4-8556-10cfecfdcf9b.jpg',
    category: 'Мясные',
  },
  {
    id: 4,
    name: 'Четыре сыра',
    description: 'Моцарелла, пармезан, горгонзола, дор блю',
    price: 649,
    image: 'https://cdn.poehali.dev/projects/7f751186-5989-4ede-9d38-5151a7954a5a/files/f01239c1-3a3e-452c-b15b-7986f19d74e3.jpg',
    category: 'Сырные',
  },
  {
    id: 5,
    name: 'Гавайская',
    description: 'Ветчина, ананасы, моцарелла, сливочный соус',
    price: 579,
    image: 'https://cdn.poehali.dev/projects/7f751186-5989-4ede-9d38-5151a7954a5a/files/82989312-1995-47ba-966e-db25b1f58139.jpg',
    category: 'Экзотические',
  },
  {
    id: 6,
    name: 'Барбекю',
    description: 'Курица, бекон, лук, соус BBQ, моцарелла',
    price: 629,
    image: 'https://cdn.poehali.dev/projects/7f751186-5989-4ede-9d38-5151a7954a5a/files/fd482778-667d-4cd4-8556-10cfecfdcf9b.jpg',
    category: 'Мясные',
  },
];

const Home = () => {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const categories = ['Все', ...Array.from(new Set(pizzas.map((p) => p.category)))];

  const filteredPizzas = selectedCategory === 'Все' 
    ? pizzas 
    : pizzas.filter((p) => p.category === selectedCategory);

  const handleAddToCart = (pizza: Pizza) => {
    addToCart(pizza);
    toast({
      title: 'Добавлено в корзину! 🍕',
      description: `${pizza.name} — ${pizza.price} ₽`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <section className="bg-gradient-to-r from-primary via-secondary to-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl animate-pulse">🍕</div>
          <div className="absolute bottom-10 right-10 text-9xl animate-pulse" style={{ animationDelay: '1s' }}>🍕</div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Горячая пицца за 30 минут!
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-95 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Свежие ингредиенты, сочный вкус, быстрая доставка
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="text-lg px-8 py-6 hover-scale animate-scale-in"
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Выбрать пиццу
          </Button>
        </div>
      </section>

      <section id="menu" className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Наше меню</h2>
        
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
          <TabsList className="w-full justify-start overflow-x-auto flex-wrap h-auto gap-2 bg-muted/50">
            {categories.map((category) => (
              <TabsTrigger 
                key={category} 
                value={category}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPizzas.map((pizza) => (
            <PizzaCard key={pizza.id} pizza={pizza} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </section>

      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Почему мы?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow animate-fade-in">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Быстрая доставка</h3>
              <p className="text-muted-foreground">Привезём горячую пиццу за 30 минут или вернём деньги</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-5xl mb-4">🌟</div>
              <h3 className="text-xl font-bold mb-2">Свежие продукты</h3>
              <p className="text-muted-foreground">Только качественные ингредиенты от проверенных поставщиков</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl mb-4">👨‍🍳</div>
              <h3 className="text-xl font-bold mb-2">Опытные повара</h3>
              <p className="text-muted-foreground">Наши пиццайоло прошли обучение в Италии</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
