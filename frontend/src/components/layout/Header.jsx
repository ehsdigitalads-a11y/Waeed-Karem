import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { siteConfig } from '../../data/mock';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Menu, Globe, Phone } from 'lucide-react';

const Header = () => {
  const { t, language, toggleLanguage, isRTL } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: t.nav.home },
    { path: '/about', label: t.nav.about },
    { path: '/brands', label: t.nav.brands },
    { path: '/services', label: t.nav.services },
    { path: '/packages', label: t.nav.packages },
    { path: '/blog', label: t.nav.blog },
    { path: '/resume', label: t.nav.resume },
    { path: '/contact', label: t.nav.contact },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span
              className={`text-xl font-bold transition-colors ${
                isScrolled ? 'text-[#1F4E8D]' : 'text-white'
              }`}
              style={{ fontFamily: 'Lato, sans-serif' }}
            >
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? isScrolled
                      ? 'text-[#1F4E8D] bg-[#1F4E8D]/10'
                      : 'text-white bg-white/20'
                    : isScrolled
                    ? 'text-gray-600 hover:text-[#1F4E8D] hover:bg-gray-100'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className={`gap-2 ${
                isScrolled
                  ? 'text-gray-600 hover:text-[#1F4E8D]'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">
                {language === 'en' ? 'العربية' : 'English'}
              </span>
            </Button>

            {/* WhatsApp Button - Desktop */}
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex"
            >
              <Button
                size="sm"
                className="bg-[#25D366] hover:bg-[#128C7E] text-white gap-2"
              >
                <Phone className="h-4 w-4" />
                <span className="ltr-text">{siteConfig.phone}</span>
              </Button>
            </a>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className={isScrolled ? 'text-gray-600' : 'text-white'}
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side={isRTL ? 'left' : 'right'} className="w-80">
                <nav className="flex flex-col gap-2 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                        isActive(link.path)
                          ? 'text-[#1F4E8D] bg-[#1F4E8D]/10'
                          : 'text-gray-600 hover:text-[#1F4E8D] hover:bg-gray-100'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="border-t mt-4 pt-4">
                    <a
                      href={siteConfig.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white gap-2">
                        <Phone className="h-4 w-4" />
                        <span className="ltr-text">{siteConfig.phone}</span>
                      </Button>
                    </a>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
