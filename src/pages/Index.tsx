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
              <span className="text-xl font-bold">PHANTOM RP</span>
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
                onClick={() => window.open('https://t.me/why_BEZDUSHNI', '_blank')}
                className="hover:text-primary transition-colors"
              >
                Донат
              </button>

            </div>

            <div className="w-4"></div>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        {activeSection === 'home' && (
          <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{ backgroundImage: 'url(https://cdn.poehali.dev/files/0acec638-30a6-4c3b-be30-5094be13a3b4.jpg)' }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-background"></div>
            <div className="relative z-10 text-center px-4">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-green-400 bg-clip-text text-transparent">
                PHANTOM ROLEPLAY
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Лучший ролевой сервер на просторах GTA
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => window.open('https://drive.google.com/file/d/15LMmMlD3fqsAB5k8cvY4RLMpoamFKQoM/view?usp=drive_link', '_blank')}
                >
                  <Icon name="Download" size={20} className="mr-2" />
                  Начать играть
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => window.open('https://t.me/arz_phantom', '_blank')}
                >
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
                  <p className="text-muted-foreground">Более десятка активных игроков ежедневно</p>
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
                <Card className="p-6 bg-card border-border">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-500/10 p-3 rounded-lg">
                      <Icon name="Ghost" size={32} className="text-orange-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold">Обновление 1.1 — Хэллоуин</h3>
                        <span className="text-sm text-muted-foreground">26 октября 2025</span>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        Мистическое обновление уже здесь! Празднуйте Хэллоуин в мире PHANTOM RP с уникальными событиями и наградами.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={16} className="text-orange-500" />
                          Тематические локации и декорации
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={16} className="text-orange-500" />
                          Эксклюзивные костюмы и маски
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={16} className="text-orange-500" />
                          Специальные квесты и награды
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={16} className="text-orange-500" />
                          Ночные рейды и мистические события
                        </li>
                      </ul>

                    </div>
                  </div>
                </Card>
                <Card className="p-6 bg-card border-border">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon name="Rocket" size={32} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold">Открытие сервера 1.0</h3>
                        <span className="text-sm text-muted-foreground">26 октября 2025</span>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        Мы рады объявить об официальном открытии PHANTOM RP! Встречайте полностью обновленный игровой мир с уникальными механиками, новыми фракциями и бизнесами.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={16} className="text-primary" />
                          Новая экономическая система
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={16} className="text-primary" />
                          15+ уникальных фракций
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={16} className="text-primary" />
                          Система достижений и рейтингов
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={16} className="text-primary" />
                          Обновленная карта с новыми локациями
                        </li>
                      </ul>
                      <div className="mt-4 pt-4 border-t border-border">
                        <p className="text-sm font-medium text-primary">
                          Присоединяйтесь к нашему сообществу и станьте частью истории!
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
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
              
              <div className="text-center py-12">
                <Icon name="ShoppingCart" size={64} className="text-muted-foreground mx-auto mb-4" />
                <p className="text-xl text-muted-foreground">Скоро здесь появится магазин</p>
              </div>
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
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <Icon name="Gamepad2" size={20} className="text-primary" />
                PHANTOM RP
              </h4>
              <p className="text-sm text-muted-foreground">
                Лучший ролевой сервер GTA с уникальным игровым процессом
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Разделы</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => { setActiveSection('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-primary">Главная</button></li>
                <li><button onClick={() => { setActiveSection('news'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-primary">Новости</button></li>
                <li><button onClick={() => window.open('https://t.me/why_BEZDUSHNI', '_blank')} className="hover:text-primary">Донат</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Сообщество</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => window.open('https://t.me/arz_phantom', '_blank')} className="hover:text-primary">Telegram</button></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 Phantom RP. Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;