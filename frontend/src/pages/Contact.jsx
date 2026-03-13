import React from 'react';
import { Instagram, Youtube, Facebook, Music2, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  const socialLinks = [
    { 
      icon: Instagram, 
      href: 'https://www.instagram.com/skupina_gas_kras/', 
      label: 'Instagram',
      handle: '@skupina_gas_kras',
      color: 'hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-500 hover:to-orange-400'
    },
    { 
      icon: Music2, 
      href: 'https://open.spotify.com/intl-it/artist/6KK6O5FGa22AsnYwwRWrrA', 
      label: 'Spotify',
      handle: 'Gas Kras',
      color: 'hover:bg-green-600'
    },
    { 
      icon: Youtube, 
      href: 'https://www.youtube.com/@skupinagaskras', 
      label: 'YouTube',
      handle: '@skupinagaskras',
      color: 'hover:bg-red-600'
    },
    { 
      icon: Facebook, 
      href: 'https://www.facebook.com/profile.php?id=61566816576466', 
      label: 'Facebook',
      handle: 'Gas Kras',
      color: 'hover:bg-blue-600'
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: t('contact.booking'),
      value: 'booking@gaskras.com',
      placeholder: true
    },
    {
      icon: Mail,
      title: t('contact.press'),
      value: 'press@gaskras.com',
      placeholder: true
    },
    {
      icon: Phone,
      title: t('contact.management'),
      value: '+386 XX XXX XXXX',
      placeholder: true
    },
  ];

  return (
    <div data-testid="contact-page" className="min-h-screen bg-stone-50 pt-24">
      {/* Header */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-gradient-to-br from-stone-50 to-orange-50">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-sm font-medium tracking-widest uppercase text-orange-600 mb-4 block">
            Gas Kras
          </span>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-stone-900 tracking-tight mb-6">
            {t('contact.title')}
          </h1>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-stone-900 mb-12 text-center">
            {t('contact.follow_us')}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`contact-social-${social.label.toLowerCase()}`}
                className={`bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 border border-stone-100 group hover:-translate-y-2 ${social.color} hover:text-white`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-stone-100 group-hover:bg-white/20 flex items-center justify-center transition-colors">
                    <social.icon className="w-7 h-7 text-stone-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-stone-900 group-hover:text-white transition-colors">
                      {social.label}
                    </h3>
                    <p className="text-stone-500 group-hover:text-white/80 transition-colors">
                      {social.handle}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-gradient-to-br from-stone-50 to-orange-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-stone-900 mb-12 text-center">
            {t('contact.booking')} & {t('contact.press')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-sm p-6 border border-stone-100 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-7 h-7 text-orange-700" />
                </div>
                <h3 className="font-playfair text-lg font-semibold text-stone-900 mb-2">
                  {info.title}
                </h3>
                {info.placeholder ? (
                  <div className="bg-stone-100 border-2 border-dashed border-stone-300 rounded-lg py-2 px-4">
                    <span className="text-stone-500 text-sm">{info.value}</span>
                  </div>
                ) : (
                  <p className="text-orange-700 font-medium">{info.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location (Optional) */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-6">
            <MapPin className="w-8 h-8 text-orange-700" />
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-stone-900 mb-4">
            Kras / Carso / Karst
          </h2>
          <p className="text-stone-600 text-lg">
            Slovenia & Italia
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
