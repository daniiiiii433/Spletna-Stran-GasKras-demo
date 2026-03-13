import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import PlaceholderImage from '../components/PlaceholderImage';

const News = () => {
  const { t } = useLanguage();

  const newsItems = [1, 2, 3, 4, 5, 6];

  return (
    <div data-testid="news-page" className="min-h-screen bg-stone-50 pt-24">
      {/* Header */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-gradient-to-br from-stone-50 to-orange-50">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-sm font-medium tracking-widest uppercase text-orange-600 mb-4 block">
            Gas Kras
          </span>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-stone-900 tracking-tight mb-6">
            {t('news.title')}
          </h1>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto">
            {t('news.latest')}
          </p>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-stone-100 group">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <PlaceholderImage 
                text={`${t('gallery.placeholder')} - Featured`}
                aspectRatio="aspect-[4/3] lg:aspect-auto lg:h-full"
                className="rounded-none border-0 border-r-2"
              />
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-orange-600 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium uppercase tracking-wide">
                    {new Date().toLocaleDateString()} • Featured
                  </span>
                </div>
                <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-stone-900 mb-4 group-hover:text-orange-700 transition-colors">
                  {t('news.placeholder_title')} - Featured
                </h2>
                <p className="text-stone-600 leading-relaxed mb-6">
                  {t('news.placeholder_content')} Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="inline-flex items-center gap-2 text-orange-700 hover:text-orange-800 font-medium transition-colors self-start group/btn">
                  {t('news.read_more')}
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-gradient-to-br from-stone-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-stone-900 mb-12">
            {t('news.latest')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((news) => (
              <article 
                key={news}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-stone-100 group hover:-translate-y-2"
              >
                <PlaceholderImage 
                  text={`${t('gallery.placeholder')} ${news}`}
                  aspectRatio="aspect-video"
                  className="rounded-none border-0 border-b-2"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-stone-400 mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    <span className="text-xs uppercase tracking-wide">
                      {new Date().toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-stone-900 mb-3 group-hover:text-orange-700 transition-colors">
                    {t('news.placeholder_title')} {news}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {t('news.placeholder_content')}
                  </p>
                  <button className="inline-flex items-center gap-2 text-orange-700 hover:text-orange-800 font-medium text-sm transition-colors group/btn">
                    {t('news.read_more')}
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
