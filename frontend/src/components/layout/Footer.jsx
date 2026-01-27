import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { siteConfig } from '../../data/mock';
import { Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: t.nav.home },
    { path: '/about', label: t.nav.about },
    { path: '/services', label: t.nav.services },
    { path: '/packages', label: t.nav.packages },
    { path: '/contact', label: t.nav.contact },
  ];

  return (
    <footer className="bg-[#1F4E8D] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: 'Lato, sans-serif' }}
            >
              {siteConfig.name}
            </h3>
            <p className="text-white/80 text-sm leading-relaxed">
              {language === 'en'
                ? 'F&B Operations & Food Business Consultant specializing in cloud kitchens, menu engineering, and delivery platform optimization in Kuwait.'
                : 'استشاري عمليات الأغذية والمشروبات متخصص في المطابخ السحابية وهندسة القائمة وتحسين منصات التوصيل في الكويت.'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.contactInfo}</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={siteConfig.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm"
                >
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span className="ltr-text">{siteConfig.phone}</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/80 text-sm">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>{siteConfig.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © {currentYear} {siteConfig.name}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
