import React, { useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { resumeData, siteConfig } from '../../data/mock';
import { Button } from '../../components/ui/button';
import ScrollReveal from '../../components/common/ScrollReveal';
import { Printer, Download, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

const Resume = () => {
  const { t, language } = useLanguage();
  const printRef = useRef(null);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      {/* Header */}
      <section className="pt-32 pb-10 bg-[#1F4E8D] print:hidden">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1
                className="text-4xl md:text-5xl font-bold mb-6"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                {t.resume.title}
              </h1>
              <div className="flex justify-center gap-4">
                <Button
                  onClick={handlePrint}
                  className="bg-white text-[#1F4E8D] hover:bg-white/90"
                >
                  <Printer className="h-4 w-4 mr-2" />
                  {t.resume.print}
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Resume Content */}
      <section className="py-10 bg-gray-50 print:bg-white print:py-0">
        <div className="container mx-auto px-4">
          <div
            ref={printRef}
            className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden print:shadow-none print:rounded-none"
          >
            {/* Resume Header */}
            <div className="bg-[#1F4E8D] text-white p-8 print:p-6">
              <h1
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                {resumeData.name}
              </h1>
              <p className="text-xl text-white/90 mb-1">{resumeData.title}</p>
              <p className="text-white/70">{resumeData.tagline}</p>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-4 mt-6 text-sm">
                <a
                  href={`tel:${resumeData.contact.phone}`}
                  className="flex items-center gap-2 text-white/80 hover:text-white"
                >
                  <Phone className="h-4 w-4" />
                  {resumeData.contact.phone}
                </a>
                <a
                  href={`mailto:${resumeData.contact.email}`}
                  className="flex items-center gap-2 text-white/80 hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                  {resumeData.contact.email}
                </a>
                <span className="flex items-center gap-2 text-white/80">
                  <MapPin className="h-4 w-4" />
                  {resumeData.contact.location}
                </span>
              </div>
            </div>

            {/* Resume Body */}
            <div className="p-8 print:p-6">
              {/* Summary */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[#1F4E8D] mb-3 border-b-2 border-[#1F4E8D] pb-2">
                  {language === 'en' ? 'Professional Summary' : 'الملخص المهني'}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {resumeData.summary}
                </p>
              </div>

              {/* Core Expertise */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[#1F4E8D] mb-3 border-b-2 border-[#1F4E8D] pb-2">
                  {language === 'en' ? 'Core Expertise' : 'الخبرات الأساسية'}
                </h2>
                <div className="grid grid-cols-2 gap-2">
                  {resumeData.expertise.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-[#1F4E8D] flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Achievements */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-[#1F4E8D] mb-3 border-b-2 border-[#1F4E8D] pb-2">
                  {language === 'en' ? 'Key Achievements' : 'الإنجازات الرئيسية'}
                </h2>
                <ul className="space-y-2">
                  {resumeData.achievements.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-[#1F4E8D] font-bold">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services Offered */}
              <div>
                <h2 className="text-xl font-bold text-[#1F4E8D] mb-3 border-b-2 border-[#1F4E8D] pb-2">
                  {language === 'en' ? 'Consulting Packages' : 'باقات الاستشارات'}
                </h2>
                <ul className="space-y-2">
                  {resumeData.services.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#1F4E8D] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Print Styles */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .print\\:hidden {
            display: none !important;
          }
          .container {
            max-width: 100% !important;
            padding: 0 !important;
          }
          section {
            padding: 0 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Resume;
