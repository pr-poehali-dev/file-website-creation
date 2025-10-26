import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Icon name="Gamepad2" size={32} className="text-primary" />
              <span className="text-xl font-bold">ARIZONA RP</span>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              <button 
                onClick={() => setActiveSection('home')}
                className={`hover:text-primary transition-colors ${activeSection === 'home' ? 'text-primary' : ''}`}
              >
                Главная
              </button>
              <button 
                onClick={() => setActiveSection('news')}
                className={`hover:text-primary transition-colors ${activeSection === 'news' ? 'text-primary' : ''}`}
              >
                Новости
              </button>
              <button 
                onClick={() => setActiveSection('donate')}
                className={`hover:text-primary transition-colors ${activeSection === 'donate' ? 'text-primary' : ''}`}
              >
                Донат
              </button>
              <button 
                onClick={() => setActiveSection('help')}
                className={`hover:text-primary transition-colors ${activeSection === 'help' ? 'text-primary' : ''}`}
              >
                Помощь
              </button>
            </div>

            <div className="w-4"></div>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        {activeSection === 'home' && (
          <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-background"></div>
            <div className="relative z-10 text-center px-4">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-green-400 bg-clip-text text-transparent">
                ARIZONA ROLE PLAY
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Лучший ролевой сервер на просторах GTA
              </p>
              <div className="flex gap-4 justify-center">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Icon name="Download" size={20} className="mr-2" />
                  Начать играть
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Users" size={20} className="mr-2" />
                  Наше сообщество
                </Button>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'home' && (
          <section className="py-16 px-4">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Особенности сервера</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 bg-card border-border hover:border-primary transition-colors">
                  <Icon name="Trophy" size={40} className="text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Уникальный игровой процесс</h3>
                  <p className="text-muted-foreground">Авторские фракции, бизнесы и система развития персонажа</p>
                </Card>
                <Card className="p-6 bg-card border-border hover:border-primary transition-colors">
                  <Icon name="Shield" size={40} className="text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Честная игра</h3>
                  <p className="text-muted-foreground">Активная администрация и защита от читеров</p>
                </Card>
                <Card className="p-6 bg-card border-border hover:border-primary transition-colors">
                  <Icon name="Heart" size={40} className="text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Дружное сообщество</h3>
                  <p className="text-muted-foreground">Более 50,000 активных игроков ежедневно</p>
                </Card>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'news' && (
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-4xl font-bold mb-8">Новости сервера</h2>
              <div className="space-y-6">
                {[1, 2, 3].map((item) => (
                  <Card key={item} className="p-6 bg-card border-border hover:border-primary transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-24 h-24 bg-primary/20 rounded flex items-center justify-center flex-shrink-0">
                        <Icon name="Newspaper" size={40} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">ОБНОВЛЕНИЕ</span>
                          <span className="text-xs text-muted-foreground">26 октября 2025</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Обновление 3.0 уже доступно!</h3>
                        <p className="text-muted-foreground mb-3">
                          Встречайте крупнейшее обновление года: новые фракции, обновленная карта города, 
                          система достижений и многое другое
                        </p>
                        <Button variant="ghost" size="sm" className="text-primary">
                          Читать полностью
                          <Icon name="ArrowRight" size={16} className="ml-2" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeSection === 'donate' && (
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-4xl font-bold mb-4 text-center">Магазин донат-услуг</h2>
              <p className="text-muted-foreground text-center mb-8">
                Поддержите развитие сервера и получите эксклюзивные преимущества
              </p>
              
              <Tabs defaultValue="currency" className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-8">
                  <TabsTrigger value="currency">Игровая валюта</TabsTrigger>
                  <TabsTrigger value="vip">VIP статусы</TabsTrigger>
                  <TabsTrigger value="transport">Транспорт</TabsTrigger>
                  <TabsTrigger value="other">Прочее</TabsTrigger>
                </TabsList>

                <TabsContent value="currency">
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      { amount: '100,000$', price: '99₽', popular: false },
                      { amount: '500,000$', price: '399₽', popular: true },
                      { amount: '1,000,000$', price: '699₽', popular: false }
                    ].map((pack, idx) => (
                      <Card key={idx} className={`p-6 bg-card border-border relative ${pack.popular ? 'border-primary' : ''}`}>
                        {pack.popular && (
                          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                            <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                              ПОПУЛЯРНОЕ
                            </span>
                          </div>
                        )}
                        <Icon name="Coins" size={40} className="text-primary mb-4" />
                        <h3 className="text-2xl font-bold mb-2">{pack.amount}</h3>
                        <p className="text-3xl font-bold text-primary mb-6">{pack.price}</p>
                        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                          <Icon name="ShoppingCart" size={16} className="mr-2" />
                          Купить
                        </Button>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="vip">
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      { name: 'VIP Bronze', price: '199₽/мес', features: ['x1.5 к опыту', 'Уникальный цвет ника', 'Приоритет в очереди'] },
                      { name: 'VIP Silver', price: '399₽/мес', features: ['x2 к опыту', 'Эксклюзивные скины', 'Бесплатный спавн авто', 'Приоритетная поддержка'] },
                      { name: 'VIP Gold', price: '699₽/мес', features: ['x3 к опыту', 'Все VIP преимущества', 'Личный дом', 'Эксклюзивные команды'] }
                    ].map((vip, idx) => (
                      <Card key={idx} className="p-6 bg-card border-border">
                        <Icon name="Crown" size={40} className="text-primary mb-4" />
                        <h3 className="text-2xl font-bold mb-2">{vip.name}</h3>
                        <p className="text-2xl font-bold text-primary mb-4">{vip.price}</p>
                        <ul className="space-y-2 mb-6">
                          {vip.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                          Приобрести
                        </Button>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="transport">
                  <div className="grid md:grid-cols-4 gap-4">
                    {['Спортивный автомобиль', 'Мотоцикл', 'Вертолёт', 'Яхта', 'Грузовик', 'Лимузин', 'Квадроцикл', 'Самолёт'].map((vehicle, idx) => (
                      <Card key={idx} className="p-4 bg-card border-border hover:border-primary transition-colors cursor-pointer">
                        <Icon name="Car" size={32} className="text-primary mb-2" />
                        <h4 className="font-bold text-sm mb-1">{vehicle}</h4>
                        <p className="text-xs text-muted-foreground mb-3">от 299₽</p>
                        <Button size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                          Выбрать
                        </Button>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="other">
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      { name: 'Смена никнейма', icon: 'Edit', price: '99₽' },
                      { name: 'Разбан аккаунта', icon: 'Unlock', price: '499₽' },
                      { name: 'Эксклюзивный скин', icon: 'Shirt', price: '199₽' },
                      { name: 'Дополнительный слот', icon: 'UserPlus', price: '149₽' },
                      { name: 'Смена пола персонажа', icon: 'Users', price: '299₽' },
                      { name: 'Премиум оружие', icon: 'Sword', price: '399₽' }
                    ].map((item, idx) => (
                      <Card key={idx} className="p-6 bg-card border-border hover:border-primary transition-colors">
                        <Icon name={item.icon as any} size={40} className="text-primary mb-4" />
                        <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                        <p className="text-2xl font-bold text-primary mb-4">{item.price}</p>
                        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                          Купить
                        </Button>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>
        )}

        {activeSection === 'help' && (
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-4xl font-bold mb-8">Центр помощи</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="p-6 bg-card border-border hover:border-primary transition-colors cursor-pointer">
                  <Icon name="BookOpen" size={40} className="text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">База знаний</h3>
                  <p className="text-muted-foreground">Руководства и инструкции для новичков</p>
                </Card>
                <Card className="p-6 bg-card border-border hover:border-primary transition-colors cursor-pointer">
                  <Icon name="MessageCircle" size={40} className="text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Техническая поддержка</h3>
                  <p className="text-muted-foreground">Свяжитесь с нашей командой поддержки</p>
                </Card>
              </div>

              <Card className="p-6 bg-card border-border">
                <h3 className="text-2xl font-bold mb-6">Часто задаваемые вопросы</h3>
                <div className="space-y-4">
                  {[
                    { q: 'Как начать играть на сервере?', a: 'Скачайте лаунчер, зарегистрируйтесь и следуйте инструкциям в игре' },
                    { q: 'Как получить донат-валюту?', a: 'Перейдите в раздел "Донат" и выберите нужный пакет' },
                    { q: 'Что делать если меня забанили?', a: 'Создайте апелляцию на форуме или приобретите разбан' },
                    { q: 'Как связаться с администрацией?', a: 'Используйте команду /report в игре или напишите в Discord' }
                  ].map((faq, idx) => (
                    <div key={idx} className="border-b border-border pb-4 last:border-0">
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <Icon name="HelpCircle" size={18} className="text-primary" />
                        {faq.q}
                      </h4>
                      <p className="text-muted-foreground pl-6">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </section>
        )}
      </main>

      <footer className="bg-card border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <Icon name="Gamepad2" size={20} className="text-primary" />
                ARIZONA RP
              </h4>
              <p className="text-sm text-muted-foreground">
                Лучший ролевой сервер GTA с уникальным игровым процессом
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Разделы</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => setActiveSection('home')} className="hover:text-primary">Главная</button></li>
                <li><button onClick={() => setActiveSection('news')} className="hover:text-primary">Новости</button></li>
                <li><button onClick={() => setActiveSection('donate')} className="hover:text-primary">Донат</button></li>
                <li><button onClick={() => setActiveSection('help')} className="hover:text-primary">Помощь</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Сообщество</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Discord</a></li>
                <li><a href="#" className="hover:text-primary">ВКонтакте</a></li>
                <li><a href="#" className="hover:text-primary">YouTube</a></li>
                <li><a href="#" className="hover:text-primary">Форум</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Правила сервера</a></li>
                <li><a href="#" className="hover:text-primary">Пользовательское соглашение</a></li>
                <li><a href="#" className="hover:text-primary">Политика конфиденциальности</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 Arizona RP. Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;