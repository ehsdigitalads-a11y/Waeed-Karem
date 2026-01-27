import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { businessCategories, restaurants } from '../data/mock';
import { Card, CardContent } from '../components/ui/card';
import ScrollReveal from '../components/common/ScrollReveal';
import {
  Cloud,
  Sandwich,
  Salad,
  UtensilsCrossed,
  Bike,
  CalendarDays,
  TrendingUp,
  Star,
  Package,
  DollarSign,
  Instagram,
} from 'lucide-react';

const iconMap = {
  Cloud,
  Sandwich,
  Salad,
  UtensilsCrossed,
  Bike,
  CalendarDays,
  TrendingUp,
};

const Brands = () => {
  const { t, language } = useLanguage();

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#1F4E8D]">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1
                className="text-4xl md:text-5xl font-bold mb-6"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                {t.brands.title}
              </h1>
              <p className="text-xl text-white/80">{t.brands.subtitle}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Business Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2
              className="text-3xl font-bold text-[#1F4E8D] text-center mb-12"
              style={{ fontFamily: 'Lato, sans-serif' }}
            >
              {t.brands.categories}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {businessCategories.map((category, index) => {
              const Icon = iconMap[category.icon];
              return (
                <ScrollReveal key={index} delay={index * 50}>
                  <div className="p-6 bg-gray-50 rounded-xl text-center hover:bg-[#1F4E8D]/5 transition-colors">
                    <div className="w-12 h-12 bg-[#1F4E8D]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-[#1F4E8D]" />
                    </div>
                    <h3 className="font-medium text-gray-900">
                      {language === 'en' ? category.en : category.ar}
                    </h3>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2
              className="text-3xl font-bold text-[#1F4E8D] text-center mb-12"
              style={{ fontFamily: 'Lato, sans-serif' }}
            >
              {t.brands.featured}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {restaurants.map((restaurant, index) => (
              <ScrollReveal key={restaurant.id} delay={index * 100}>
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <img
                      src={restaurant.image}
                      alt={language === 'en' ? restaurant.nameEn : restaurant.nameAr}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-[#1F4E8D] text-white text-xs px-3 py-1 rounded-full">
                      {language === 'en'
                        ? restaurant.categoryEn
                        : restaurant.categoryAr}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {language === 'en'
                        ? restaurant.nameEn
                        : restaurant.nameAr}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {language === 'en'
                        ? restaurant.descriptionEn
                        : restaurant.descriptionAr}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 text-[#1F4E8D] font-bold">
                          <Package className="h-4 w-4" />
                          {restaurant.stats.ordersPerDay}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {language === 'en' ? 'Orders/Day' : 'طلب/يوم'}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 text-green-600 font-bold">
                          <DollarSign className="h-4 w-4" />
                          {restaurant.stats.foodCost}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {language === 'en' ? 'Food Cost' : 'تكلفة الطعام'}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 text-yellow-500 font-bold">
                          <Star className="h-4 w-4" />
                          {restaurant.stats.rating}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {language === 'en' ? 'Rating' : 'التقييم'}
                        </div>
                      </div>
                    </div>

                    {/* Instagram Link */}
                    {restaurant.instagram && (
                      <div className="mt-4 pt-4 border-t">
                        <a
                          href={restaurant.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[#E4405F] hover:text-[#C13584] font-medium transition-colors"
                        >
                          <Instagram className="h-5 w-5" />
                          {language === 'en' ? 'Follow on Instagram' : 'تابع على انستغرام'}
                        </a>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brands;
