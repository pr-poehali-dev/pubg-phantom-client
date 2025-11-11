import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      icon: 'Crosshair',
      title: 'ESP Wallhack',
      description: 'Видимость врагов сквозь стены с информацией о здоровье, дистанции и оружии'
    },
    {
      icon: 'Target',
      title: 'Aimbot Pro',
      description: 'Интеллектуальная система автоприцеливания с настройкой точности и скорости'
    },
    {
      icon: 'Zap',
      title: 'No Recoil',
      description: 'Полное устранение отдачи оружия для максимальной точности стрельбы'
    },
    {
      icon: 'Eye',
      title: 'Radar Hack',
      description: 'Мини-карта с отображением всех игроков и важных объектов в реальном времени'
    },
    {
      icon: 'Shield',
      title: 'Anti-Ban',
      description: 'Многоуровневая защита от античита с автообновлениями сигнатур'
    },
    {
      icon: 'Gauge',
      title: 'Speed Boost',
      description: 'Настраиваемое увеличение скорости передвижения персонажа'
    }
  ];

  const plans = [
    {
      name: 'Basic',
      price: '₽499',
      period: '7 дней',
      features: ['ESP Wallhack', 'Radar Hack', 'No Recoil', 'Базовая поддержка'],
      popular: false
    },
    {
      name: 'Pro',
      price: '₽1299',
      period: '30 дней',
      features: ['Все функции Basic', 'Aimbot Pro', 'Speed Boost', 'Приоритетная поддержка', 'Обновления'],
      popular: true
    },
    {
      name: 'Elite',
      price: '₽2999',
      period: '90 дней',
      features: ['Все функции Pro', 'VIP статус', '24/7 поддержка', 'Ранний доступ к новым функциям', 'Персональная настройка'],
      popular: false
    }
  ];

  const faqs = [
    {
      q: 'Безопасно ли использовать Phantom?',
      a: 'Phantom использует передовые технологии защиты от античита, включая HWID спуфинг и обфускацию кода. Мы регулярно обновляем защиту для минимизации рисков бана.'
    },
    {
      q: 'На каких устройствах работает Phantom?',
      a: 'Phantom поддерживает Android 7.0+ и iOS 13+ (с джейлбрейком). Требуется минимум 2GB RAM для стабильной работы.'
    },
    {
      q: 'Как часто выходят обновления?',
      a: 'Обновления выходят еженедельно или при выходе патчей PUBG Mobile. Все обновления бесплатны для активных подписчиков.'
    },
    {
      q: 'Можно ли вернуть деньги?',
      a: 'Возврат средств возможен в течение 24 часов с момента покупки при условии, что софт не был активирован.'
    },
    {
      q: 'Работает ли Phantom в рейтинговых матчах?',
      a: 'Да, Phantom работает во всех режимах игры, включая рейтинговые матчи. Однако мы рекомендуем использовать софт аккуратно.'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-primary/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center border-glow-cyan">
              <Icon name="Ghost" className="text-background" size={24} />
            </div>
            <h1 className="text-2xl font-bold glow-cyan">PHANTOM</h1>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            {['home', 'features', 'pricing', 'faq', 'support'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm font-medium transition-all hover:text-primary ${
                  activeSection === section ? 'text-primary glow-cyan' : 'text-muted-foreground'
                }`}
              >
                {section === 'home' ? 'Главная' : 
                 section === 'features' ? 'Возможности' :
                 section === 'pricing' ? 'Цены' :
                 section === 'faq' ? 'FAQ' : 'Поддержка'}
              </button>
            ))}
          </div>
          
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground border-glow-cyan font-semibold">
            <Icon name="Download" size={18} className="mr-2" />
            Скачать
          </Button>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/50 text-sm px-4 py-1 animate-pulse-glow">
            v2.8.5 — Последнее обновление
          </Badge>
          
          <h2 className="text-6xl md:text-8xl font-black mb-6 glow-cyan animate-slide-up">
            PHANTOM
          </h2>
          
          <p className="text-xl md:text-2xl text-secondary glow-purple mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            PUBG MOBILE Advanced Client
          </p>
          
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Профессиональный софт для доминирования в PUBG Mobile. Передовые функции, непробиваемая защита, регулярные обновления.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground border-glow-cyan text-lg px-8 py-6">
              <Icon name="Download" size={24} className="mr-2" />
              Скачать сейчас
            </Button>
            
            <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 border-glow-purple text-lg px-8 py-6">
              <Icon name="Play" size={24} className="mr-2" />
              Смотреть демо
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl font-bold text-primary glow-cyan mb-2">50K+</div>
              <div className="text-muted-foreground text-sm">Активных пользователей</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <div className="text-4xl font-bold text-secondary glow-purple mb-2">99.8%</div>
              <div className="text-muted-foreground text-sm">Защита от бана</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-4xl font-bold text-accent glow-pink mb-2">24/7</div>
              <div className="text-muted-foreground text-sm">Поддержка</div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 glow-cyan">Возможности</h3>
            <p className="text-muted-foreground text-lg">Полный арсенал для победы</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <Card 
                key={idx} 
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:border-glow-cyan group"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                    <Icon name={feature.icon as any} className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 glow-purple">Тарифы</h3>
            <p className="text-muted-foreground text-lg">Выберите подходящий план</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, idx) => (
              <Card 
                key={idx}
                className={`relative bg-card border-border transition-all duration-300 hover:scale-105 ${
                  plan.popular ? 'border-secondary border-glow-purple scale-105' : 'hover:border-primary/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-secondary text-secondary-foreground border-glow-purple">
                      Популярный
                    </Badge>
                  </div>
                )}
                
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">{plan.period}</CardDescription>
                  <div className="mt-4">
                    <span className={`text-5xl font-bold ${plan.popular ? 'text-secondary glow-purple' : 'text-primary'}`}>
                      {plan.price}
                    </span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-secondary hover:bg-secondary/90 text-secondary-foreground border-glow-purple' 
                        : 'bg-primary hover:bg-primary/90 text-primary-foreground border-glow-cyan'
                    }`}
                  >
                    Купить {plan.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 glow-cyan">FAQ</h3>
            <p className="text-muted-foreground text-lg">Часто задаваемые вопросы</p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem 
                key={idx} 
                value={`item-${idx}`}
                className="bg-card border border-border rounded-lg px-6 hover:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left hover:text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="support" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 glow-pink">Поддержка</h3>
            <p className="text-muted-foreground text-lg">Мы всегда на связи</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-card border-border hover:border-accent/50 transition-all hover:border-glow-pink">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="MessageCircle" className="text-accent" size={24} />
                </div>
                <CardTitle>Telegram</CardTitle>
                <CardDescription>Быстрая поддержка в мессенджере</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent/10">
                  Открыть чат
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border hover:border-primary/50 transition-all hover:border-glow-cyan">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Mail" className="text-primary" size={24} />
                </div>
                <CardTitle>Email</CardTitle>
                <CardDescription>support@phantom-pubgm.com</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                  Написать письмо
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border bg-card/30">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center border-glow-cyan">
              <Icon name="Ghost" className="text-background" size={18} />
            </div>
            <h4 className="text-xl font-bold glow-cyan">PHANTOM</h4>
          </div>
          
          <p className="text-muted-foreground text-sm mb-4">
            © 2024 Phantom PubgM. Все права защищены.
          </p>
          
          <p className="text-muted-foreground text-xs max-w-2xl mx-auto">
            Phantom — образовательный проект. Использование читов в многопользовательских играх нарушает правила сервиса и может привести к блокировке аккаунта.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
