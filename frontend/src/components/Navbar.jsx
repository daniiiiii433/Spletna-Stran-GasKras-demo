import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const { t, language, changeLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/music', label: t('nav.music') },
    { path: '/videos', label: t('nav.videos') },
    { path: '/about', label: t('nav.about') },
    { path: '/gallery', label: t('nav.gallery') },
    { path: '/merch', label: t('nav.merch') },
    { path: '/news', label: t('nav.news') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const languages = [
    { code: 'sl', label: 'SLO' },
    { code: 'it', label: 'ITA' },
    { code: 'en', label: 'ENG' },
  ];

  return (
    <nav 
      data-testid="navbar"
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-stone-50/95 backdrop-blur-md shadow-sm border-b border-stone-200' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo placeholder */}
          <Link 
            to="/" 
            data-testid="navbar-logo"
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-full bg-stone-200 border-2 border-dashed border-stone-400 flex items-center justify-center">
              <span className="text-xs text-stone-500 font-medium">Logo</span>
            </div>
            <span className="font-playfair text-2xl font-bold text-stone-900">Gas Kras</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`nav-link-${link.path.replace('/', '') || 'home'}`}
                className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-orange-700'
                    : 'text-stone-600 hover:text-orange-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Language Switcher + Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="hidden sm:flex items-center gap-1 bg-stone-100 rounded-full p-1" data-testid="language-switcher">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  data-testid={`lang-${lang.code}`}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${
                    language === lang.code
                      ? 'bg-orange-700 text-white'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="mobile-menu-toggle"
              className="lg:hidden p-2 text-stone-700 hover:text-orange-700 transition-colors"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-stone-50/98 backdrop-blur-lg border-b border-stone-200 shadow-lg transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        data-testid="mobile-menu"
      >
        <div className="px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block py-2 text-lg font-medium transition-colors ${
                location.pathname === link.path
                  ? 'text-orange-700'
                  : 'text-stone-700 hover:text-orange-600'
              }`}
            >
              {link.label}
            </Link>
          ))}
          {/* Mobile Language Switcher */}
          <div className="flex items-center gap-2 pt-4 border-t border-stone-200">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                  language === lang.code
                    ? 'bg-orange-700 text-white'
                    : 'bg-stone-200 text-stone-600'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
