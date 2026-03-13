import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Facebook, Music2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const socialLinks = [
    { 
      icon: Instagram, 
      href: 'https://www.instagram.com/skupina_gas_kras/', 
      label: 'Instagram' 
    },
    { 
      icon: Music2, 
      href: 'https://open.spotify.com/intl-it/artist/6KK6O5FGa22AsnYwwRWrrA', 
      label: 'Spotify' 
    },
    { 
      icon: Youtube, 
      href: 'https://www.youtube.com/@skupinagaskras', 
      label: 'YouTube' 
    },
    { 
      icon: Facebook, 
      href: 'https://www.facebook.com/profile.php?id=61566816576466', 
      label: 'Facebook' 
    },
  ];

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

  return (
    <footer data-testid="footer" className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-stone-800 border-2 border-dashed border-stone-600 flex items-center justify-center">
                <span className="text-xs text-stone-500 font-medium">Logo</span>
              </div>
              <span className="font-playfair text-2xl font-bold text-stone-50">Gas Kras</span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed max-w-xs">
              Skupina iz Krasa / Gruppo dal Carso / Band from Karst
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h4 className="font-playfair text-lg font-semibold text-stone-50">Navigation</h4>
            <div className="grid grid-cols-2 gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-stone-400 hover:text-orange-500 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="space-y-6">
            <h4 className="font-playfair text-lg font-semibold text-stone-50">{t('contact.follow_us')}</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`footer-social-${social.label.toLowerCase()}`}
                  className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:bg-orange-700 hover:text-white transition-all duration-300 hover:-translate-y-1"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-500 text-sm">
            © {new Date().getFullYear()} Gas Kras. {t('footer.rights')}.
          </p>
          <p className="text-stone-600 text-xs">
            Made with love from Karst
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
