import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">Контакты</h1>
          <p className="text-xl opacity-95 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Мы всегда рады вашим вопросам и предложениям
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="animate-fade-in hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Phone" size={24} className="text-primary" />
                Телефон
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a href="tel:+78001234567" className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
                +7 (800) 123-45-67
              </a>
              <p className="text-muted-foreground mt-2">Бесплатный звонок по России</p>
              <p className="text-sm text-muted-foreground mt-1">Ежедневно с 10:00 до 23:00</p>
            </CardContent>
          </Card>

          <Card className="animate-fade-in hover:shadow-xl transition-shadow" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Mail" size={24} className="text-primary" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a href="mailto:order@pizzatime.ru" className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
                order@pizzatime.ru
              </a>
              <p className="text-muted-foreground mt-2">Ответим в течение часа</p>
              <p className="text-sm text-muted-foreground mt-1">Вопросы о заказах и сотрудничестве</p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="MapPin" size={24} className="text-primary" />
              Наши адреса
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-muted/50 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Центральная кухня</h3>
                <p className="text-muted-foreground mb-3">г. Москва, ул. Пиццерийная, д. 1</p>
                <p className="text-sm font-medium">Пн-Вс: 10:00 - 23:00</p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Филиал на Юге</h3>
                <p className="text-muted-foreground mb-3">г. Москва, ул. Южная, д. 15</p>
                <p className="text-sm font-medium">Пн-Вс: 10:00 - 23:00</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="text-center animate-fade-in hover:shadow-xl transition-shadow" style={{ animationDelay: '0.3s' }}>
            <CardHeader>
              <div className="text-5xl mb-2">⚡</div>
              <CardTitle>Быстрая доставка</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Доставляем горячую пиццу за 30 минут или возвращаем деньги
              </p>
              <Button variant="outline" className="mt-4">
                Зона доставки
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center animate-fade-in hover:shadow-xl transition-shadow" style={{ animationDelay: '0.4s' }}>
            <CardHeader>
              <div className="text-5xl mb-2">💳</div>
              <CardTitle>Удобная оплата</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Наличными, картой курьеру или онлайн на сайте
              </p>
              <Button variant="outline" className="mt-4">
                Способы оплаты
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center animate-fade-in hover:shadow-xl transition-shadow" style={{ animationDelay: '0.5s' }}>
            <CardHeader>
              <div className="text-5xl mb-2">🎁</div>
              <CardTitle>Акции и скидки</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Регулярные акции, скидки постоянным клиентам и программа лояльности
              </p>
              <Button variant="outline" className="mt-4">
                Все акции
              </Button>
            </CardContent>
          </Card>
        </div>

        <section className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Следите за нами</h2>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button size="lg" variant="outline" className="gap-2">
              <Icon name="Instagram" size={20} />
              Instagram
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Icon name="Facebook" size={20} />
              Facebook
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Icon name="Twitter" size={20} />
              Twitter
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contacts;
