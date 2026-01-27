import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { services, consultingProcess, deliverables } from '../data/mock';
import { Card, CardContent } from '../components/ui/card';
import ScrollReveal from '../components/common/ScrollReveal';
import {
  Lightbulb,
  Calculator,
  Truck,
  ChefHat,
  Camera,
  Megaphone,
  CheckCircle,
  FileText,
} from 'lucide-react';

const iconMap = {
  Lightbulb,
  Calculator,
  Truck,
  ChefHat,
  Camera,
  Megaphone,
};

const Services = () => {
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
                {t.services.title}
              </h1>
              <p className="text-xl text-white/80">{t.services.subtitle}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <ScrollReveal key={service.id} delay={index * 100}>
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-14 h-14 bg-[#1F4E8D] rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="h-7 w-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {language === 'en'
                              ? service.titleEn
                              : service.titleAr}
                          </h3>
                          <p className="text-gray-600">
                            {language === 'en'
                              ? service.descriptionEn
                              : service.descriptionAr}
                          </p>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-gray-700"
                          >
                            <CheckCircle className="h-4 w-4 text-[#1F4E8D] flex-shrink-0" />
                            <span className="text-sm">
                              {language === 'en' ? feature.en : feature.ar}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold text-[#1F4E8D] mb-4"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                {language === 'en' ? 'The Consulting Process' : 'عملية الاستشارة'}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {language === 'en'
                  ? 'Clear process builds trust instantly. Our structured approach ensures transparency and effective results.'
                  : 'العملية الواضحة تبني الثقة فورًا. نهجنا المنظم يضمن الشفافية والنتائج الفعالة.'}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {consultingProcess.map((step, index) => (
              <ScrollReveal key={step.step} delay={index * 100}>
                <div className="bg-white rounded-xl p-6 shadow-md h-full">
                  <div className="w-10 h-10 bg-[#1F4E8D] text-white rounded-full flex items-center justify-center font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {language === 'en' ? step.titleEn : step.titleAr}
                  </h3>
                  <ul className="space-y-2">
                    {(language === 'en' ? step.itemsEn : step.itemsAr).map(
                      (item, i) => (
                        <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                          <span className="text-[#1F4E8D]">•</span>
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold text-[#1F4E8D] mb-4"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                {language === 'en' ? 'Key Deliverables Provided' : 'المخرجات الرئيسية المقدمة'}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {language === 'en'
                  ? 'Clients receive comprehensive documentation and strategic tools tailored to their specific needs.'
                  : 'يحصل العملاء على وثائق شاملة وأدوات استراتيجية مصممة خصيصًا لاحتياجاتهم.'}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {deliverables.map((item, index) => (
              <ScrollReveal key={index} delay={index * 50}>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <FileText className="h-5 w-5 text-[#1F4E8D] flex-shrink-0" />
                  <span className="text-gray-700">
                    {language === 'en' ? item.en : item.ar}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
