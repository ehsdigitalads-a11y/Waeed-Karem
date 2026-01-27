import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../data/mock';
import ScrollReveal from '../components/common/ScrollReveal';
import {
  CheckCircle,
} from 'lucide-react';

const About = () => {
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
                {t.about.title}
              </h1>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <ScrollReveal>
              <div className="relative">
                <img
                  src={siteConfig.profileImage}
                  alt={siteConfig.name}
                  className="rounded-2xl shadow-xl w-full object-cover max-h-[500px]"
                />
                <div className="absolute -bottom-6 -right-6 bg-[#1F4E8D] text-white p-6 rounded-xl shadow-lg max-w-xs">
                  <p className="text-lg font-medium italic">
                    "{t.about.quote}"
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Content */}
            <ScrollReveal delay={200}>
              <div>
                <h2
                  className="text-3xl font-bold text-[#1F4E8D] mb-6"
                  style={{ fontFamily: 'Lato, sans-serif' }}
                >
                  {siteConfig.name}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {t.about.description}
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {t.about.approach}
                </h3>
                <ul className="space-y-3">
                  {t.about.expertise.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-[#1F4E8D] flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '10+', labelEn: 'Years Experience', labelAr: 'سنوات خبرة' },
              { value: '50+', labelEn: 'Projects Completed', labelAr: 'مشروع مكتمل' },
              { value: '100+', labelEn: 'Happy Clients', labelAr: 'عميل سعيد' },
              { value: '26%', labelEn: 'Avg. Cost Reduction', labelAr: 'متوسط تخفيض التكلفة' },
            ].map((stat, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-[#1F4E8D] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">
                    {language === 'en' ? stat.labelEn : stat.labelAr}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
