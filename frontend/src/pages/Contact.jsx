import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../data/mock';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import ScrollReveal from '../components/common/ScrollReveal';
import { Phone, MapPin, MessageCircle } from 'lucide-react';

const Contact = () => {
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
                {t.contact.title}
              </h1>
              <p className="text-xl text-white/80">{t.contact.subtitle}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2
                  className="text-2xl font-bold text-gray-900 mb-4"
                  style={{ fontFamily: 'Lato, sans-serif' }}
                >
                  {language === 'en' ? 'Get in Touch' : 'تواصل معنا'}
                </h2>
                <p className="text-gray-600">
                  {language === 'en'
                    ? 'Ready to transform your food business? Contact me directly via WhatsApp for a quick response.'
                    : 'هل أنت مستعد لتحويل أعمالك الغذائية؟ تواصل معي مباشرة عبر واتساب للحصول على رد سريع.'}
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              {/* Phone/WhatsApp */}
              <ScrollReveal delay={100}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center mb-4">
                        <Phone className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-900 text-lg mb-2">
                        {t.contact.phone}
                      </h3>
                      <a
                        href={siteConfig.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1F4E8D] hover:underline font-bold text-2xl ltr-text"
                      >
                        {siteConfig.phone}
                      </a>
                      <a
                        href={siteConfig.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4"
                      >
                        <Button className="bg-[#25D366] hover:bg-[#128C7E] text-white gap-2 px-8">
                          <MessageCircle className="h-5 w-5" />
                          {language === 'en' ? 'Chat on WhatsApp' : 'محادثة عبر واتساب'}
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* Location */}
              <ScrollReveal delay={200}>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-[#1F4E8D] rounded-full flex items-center justify-center mb-4">
                        <MapPin className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-900 text-lg mb-2">
                        {t.contact.location}
                      </h3>
                      <p className="text-gray-600 text-xl">
                        {siteConfig.location}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
