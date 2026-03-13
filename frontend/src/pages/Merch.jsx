import React from 'react';
import { ShoppingBag, Tag } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Merch = () => {
  const { t } = useLanguage();

  const merchItems = [1, 2, 3, 4, 5, 6];

  return (
    <div data-testid="merch-page" className="min-h-screen bg-stone-50 pt-24">
      {/* Header */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-gradient-to-br from-stone-50 to-orange-50">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-sm font-medium tracking-widest uppercase text-orange-600 mb-4 block">
            Gas Kras
          </span>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-stone-900 tracking-tight mb-6">
            {t('merch.title')}
          </h1>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto">
            {t('merch.subtitle')}
          </p>
        </div>
      </section>

      {/* Coming Soon Banner */}
      <section className="py-8 px-6 md:px-12 bg-orange-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white font-medium text-lg">
            {t('merch.coming_soon')} ✨
          </p>
        </div>
      </section>

      {/* Merch Grid */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {merchItems.map((item) => (
              <div 
                key={item}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-stone-100 group hover:-translate-y-2"
              >
                {/* Product Image Placeholder */}
                <div className="aspect-square bg-stone-100 border-b-2 border-dashed border-stone-200 flex flex-col items-center justify-center gap-4 relative">
                  <ShoppingBag className="w-16 h-16 text-stone-400 group-hover:scale-110 transition-transform" />
                  <span className="text-stone-500 text-sm font-medium">{t('merch.item_placeholder')}</span>
                  <span className="text-stone-400 text-xs">Item {item}</span>
                  
                  {/* Sale Badge Example */}
                  {item === 1 && (
                    <div className="absolute top-4 right-4 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      NEW
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-semibold text-stone-900 mb-2 group-hover:text-orange-700 transition-colors">
                    {t('merch.item_placeholder')} {item}
                  </h3>
                  <p className="text-stone-500 text-sm mb-4">
                    Product description placeholder
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4 text-orange-600" />
                      <span className="font-bold text-stone-900">{t('merch.price_placeholder')}</span>
                    </div>
                    <button 
                      className="bg-stone-100 hover:bg-orange-700 hover:text-white text-stone-700 font-medium px-4 py-2 rounded-full text-sm transition-all duration-300"
                      disabled
                    >
                      {t('merch.coming_soon')}
                    </button>
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

export default Merch;
