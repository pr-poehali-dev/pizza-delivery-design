import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Order = () => {
  const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    comment: '',
  });

  const totalPrice = getTotalPrice();
  const deliveryFee = totalPrice > 1000 ? 0 : 200;
  const finalPrice = totalPrice + deliveryFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) {
      toast({
        title: 'Заполните все поля',
        description: 'Имя, телефон и адрес обязательны для оформления заказа',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'Заказ оформлен! 🎉',
      description: 'Ожидайте звонка оператора для подтверждения',
    });

    clearCart();
    navigate('/');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center animate-fade-in">
          <div className="text-8xl mb-6">🍕</div>
          <h2 className="text-3xl font-bold mb-4">Корзина пуста</h2>
          <p className="text-muted-foreground mb-8">Добавьте пиццу из меню</p>
          <Button size="lg" onClick={() => navigate('/')}>
            Перейти в меню
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Оформление заказа</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Ваш заказ</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 pb-4 border-b last:border-0 animate-fade-in">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Icon name="Minus" size={16} />
                      </Button>
                      <span className="font-semibold w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Icon name="Plus" size={16} />
                      </Button>
                      <span className="font-bold text-lg ml-auto">{item.price * item.quantity} ₽</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-destructive"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Icon name="Trash2" size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Контактные данные</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Имя *</Label>
                  <Input
                    id="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="address">Адрес доставки *</Label>
                  <Input
                    id="address"
                    placeholder="Улица, дом, квартира"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="comment">Комментарий к заказу</Label>
                  <Textarea
                    id="comment"
                    placeholder="Дополнительные пожелания"
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                  />
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle>Итого</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between text-lg">
                <span>Сумма заказа:</span>
                <span className="font-semibold">{totalPrice} ₽</span>
              </div>
              <div className="flex justify-between text-lg">
                <span>Доставка:</span>
                <span className={`font-semibold ${deliveryFee === 0 ? 'text-green-600' : ''}`}>
                  {deliveryFee === 0 ? 'Бесплатно' : `${deliveryFee} ₽`}
                </span>
              </div>
              {totalPrice < 1000 && (
                <p className="text-sm text-muted-foreground">
                  Добавьте ещё на {1000 - totalPrice} ₽ для бесплатной доставки
                </p>
              )}
              <Separator />
              <div className="flex justify-between text-2xl font-bold">
                <span>К оплате:</span>
                <span className="text-primary">{finalPrice} ₽</span>
              </div>
              <Button 
                className="w-full" 
                size="lg"
                onClick={handleSubmit}
              >
                Оформить заказ
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                Нажимая кнопку, вы соглашаетесь с условиями обработки персональных данных
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Order;
