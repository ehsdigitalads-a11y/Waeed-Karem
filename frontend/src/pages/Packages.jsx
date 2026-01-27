import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { packages } from '../../data/mock';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader } from '../../components/ui/card';
import ScrollReveal from '../../components/common/ScrollReveal';
import { CheckCircle, ArrowRight, Clock } from 'lucide-react';

const Packages = () => {
  const { t, language, isRTL } = useLanguage();

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
                {t.packages.title}
              </h1>
              <p className="text-xl text-white/80">{t.packages.subtitle}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <ScrollReveal key={pkg.id} delay={index * 150}>
                <Card className="h-full border-0 shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                  <CardHeader
                    className="p-6 text-white"
                    style={{ backgroundColor: pkg.color }}
                  >
                    <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
                      <Clock className="h-4 w-4" />
                      <span>
                        {language === 'en' ? pkg.duration : pkg.durationAr}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold">
                      {language === 'en' ? pkg.titleEn : pkg.titleAr}
                    </h3>
                    <p className="text-white/80 text-sm mt-1">
                      {language === 'en' ? pkg.subtitleEn : pkg.subtitleAr}
                    </p>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle
                            className="h-5 w-5 flex-shrink-0 mt-0.5"
                            style={{ color: pkg.color }}
                          />
                          <span className="text-gray-700 text-sm">
                            {language === 'en' ? feature.en : feature.ar}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="border-t pt-4">
                      <p className="text-sm font-semibold text-gray-900 mb-2">
                        {t.packages.outcome}
                      </p>
                      <p className="text-sm text-gray-600">
                        {language === 'en' ? pkg.outcomeEn : pkg.outcomeAr}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={500}>
            <div className="text-center mt-12">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-[#1F4E8D] hover:bg-[#163d6e] text-white px-8"
                >
                  {language === 'en' ? 'Get Started Today' : 'ابدأ اليوم'}
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

export default Packages;
