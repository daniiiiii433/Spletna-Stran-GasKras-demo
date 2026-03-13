import React from 'react';
import { Camera, Image } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import PlaceholderImage from '../components/PlaceholderImage';

const Gallery = () => {
  const { t } = useLanguage();

  const promotionalPhotos = [1, 2, 3, 4, 5, 6];
  const backstagePhotos = [1, 2, 3, 4];

  return (
    <div data-testid="gallery-page" className="min-h-screen bg-stone-50 pt-24">
      {/* Header */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-gradient-to-br from-stone-50 to-orange-50">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-sm font-medium tracking-widest uppercase text-orange-600 mb-4 block">
            Gas Kras
          </span>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-stone-900 tracking-tight mb-6">
            {t('gallery.title')}
          </h1>
        </div>
      </section>

      {/* Promotional Photos */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
              <Camera className="w-5 h-5 text-orange-700" />
            </div>
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-stone-900">
              {t('gallery.promotional')}
            </h2>
          </div>
          
          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {promotionalPhotos.map((photo, index) => {
              // Bento grid pattern: first 2 items span 2 columns on larger screens
              const isLarge = index < 2;
              return (
                <div 
                  key={photo}
                  className={`${isLarge ? 'md:col-span-1 md:row-span-1' : ''} group cursor-pointer`}
                >
                  <div className={`bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-stone-100 group-hover:-translate-y-2 ${isLarge ? 'h-[300px] md:h-[400px]' : 'h-[300px]'}`}>
                    <div className="h-full bg-stone-100 border-2 border-dashed border-stone-300 flex flex-col items-center justify-center gap-3">
                      <Image className="w-12 h-12 text-stone-400 group-hover:scale-110 transition-transform" />
                      <span className="text-stone-500 text-sm font-medium">{t('gallery.placeholder')}</span>
                      <span className="text-stone-400 text-xs">Photo {photo}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Backstage Photos */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-gradient-to-br from-stone-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
              <Camera className="w-5 h-5 text-orange-700" />
            </div>
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-stone-900">
              {t('gallery.backstage')}
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {backstagePhotos.map((photo) => (
              <div 
                key={photo}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-stone-100 group-hover:-translate-y-2">
                  <div className="aspect-square bg-stone-100 border-2 border-dashed border-stone-300 flex flex-col items-center justify-center gap-3">
                    <Image className="w-10 h-10 text-stone-400 group-hover:scale-110 transition-transform" />
                    <span className="text-stone-500 text-xs font-medium">{t('gallery.placeholder')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
