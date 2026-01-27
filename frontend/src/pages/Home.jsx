import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig, services, testimonials, whyChooseReasons } from '../data/mock';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import ScrollReveal from '../components/common/ScrollReveal';
import {
  Lightbulb,
  Calculator,
  Truck,
  ChefHat,
  Camera,
  Megaphone,
  Wrench,
  Wallet,
  Cloud,
  MapPin,
  Zap,
  CheckCircle,
  Quote,
  ArrowRight,
} from 'lucide-react';

const iconMap = {
  Lightbulb,
  Calculator,
  Truck,
  ChefHat,
  Camera,
  Megaphone,
  Wrench,
  Wallet,
  Cloud,
  MapPin,
  Zap,
  CheckCircle,
};

const Home = () => {
  const { t, language, isRTL } = useLanguage();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[#1F4E8D]">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?w=1920)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1F4E8D]/80 to-[#1F4E8D]" />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 pt-20">
          <div className="max-w-3xl mx-auto text-center text-white">
            <ScrollReveal>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                {siteConfig.name}
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-xl md:text-2xl text-white/90 mb-4">
                {t.hero.subtitle}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-lg text-white/70 mb-8">{t.hero.tagline}</p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-white text-[#1F4E8D] hover:bg-white/90 px-8"
                  >
                    {t.hero.cta}
                    <ArrowRight className={`h-5 w-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 px-8"
                  >
                    {t.hero.learnMore}
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold text-[#1F4E8D] mb-4"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                {t.services.title}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t.services.subtitle}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <ScrollReveal key={service.id} delay={index * 100}>
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 bg-white">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-[#1F4E8D]/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-[#1F4E8D]" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {language === 'en' ? service.titleEn : service.titleAr}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {language === 'en'
                          ? service.descriptionEn
                          : service.descriptionAr}
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal delay={600}>
            <div className="text-center mt-10">
              <Link to="/services">
                <Button variant="outline" className="border-[#1F4E8D] text-[#1F4E8D] hover:bg-[#1F4E8D] hover:text-white">
                  {language === 'en' ? 'View All Services' : 'عرض جميع الخدمات'}
                  <ArrowRight className={`h-4 w-4 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold text-[#1F4E8D] mb-4"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                {t.whyChoose.title}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t.whyChoose.subtitle}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseReasons.map((reason, index) => {
              const Icon = iconMap[reason.icon];
              return (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#1F4E8D]/5 transition-colors">
                    <div className="w-10 h-10 bg-[#1F4E8D] rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {language === 'en' ? reason.titleEn : reason.titleAr}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {language === 'en'
                        ? reason.descriptionEn
                        : reason.descriptionAr}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#1F4E8D]">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2
              className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
              style={{ fontFamily: 'Lato, sans-serif' }}
            >
              {t.testimonials.title}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={testimonial.id} delay={index * 100}>
                <Card className="bg-white/10 border-0 backdrop-blur-sm h-full">
                  <CardContent className="p-6">
                    <Quote className="h-8 w-8 text-white/50 mb-4" />
                    <p className="text-white text-lg mb-4 leading-relaxed">
                      {language === 'en'
                        ? testimonial.quoteEn
                        : testimonial.quoteAr}
                    </p>
                    <p className="text-white/70 text-sm font-medium">
                      —{' '}
                      {language === 'en'
                        ? testimonial.authorEn
                        : testimonial.authorAr}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2
                className="text-3xl md:text-4xl font-bold text-[#1F4E8D] mb-4"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                {language === 'en'
                  ? 'Ready to Transform Your Food Business?'
                  : 'هل أنت مستعد لتحويل أعمالك الغذائية؟'}
              </h2>
              <p className="text-gray-600 mb-8">
                {language === 'en'
                  ? 'Let\'s discuss how I can help you build a profitable, operationally smooth, and market-ready brand.'
                  : 'دعنا نناقش كيف يمكنني مساعدتك في بناء علامة تجارية مربحة وسلسة تشغيلياً وجاهزة للسوق.'}
              </p>
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-[#1F4E8D] hover:bg-[#163d6e] text-white px-8"
                >
                  {t.hero.cta}
                  <ArrowRight className={`h-5 w-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
