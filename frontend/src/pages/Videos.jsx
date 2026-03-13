import React from 'react';
import { Play, Youtube, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Videos = () => {
  const { t } = useLanguage();

  const videos = [1, 2, 3, 4, 5, 6];

  return (
    <div data-testid="videos-page" className="min-h-screen bg-stone-50 pt-24">
      {/* Header */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-gradient-to-br from-stone-50 to-orange-50">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-sm font-medium tracking-widest uppercase text-orange-600 mb-4 block">
            Gas Kras
          </span>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-stone-900 tracking-tight mb-6">
            {t('videos.title')}
          </h1>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto mb-8">
            {t('videos.official_videos')}
          </p>
          
          <a
            href="https://www.youtube.com/@skupinagaskras"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="youtube-channel-link"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white rounded-full px-6 py-3 font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <Youtube size={20} />
            YouTube Channel
            <ExternalLink size={14} />
          </a>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-stone-100">
            <div className="aspect-video bg-stone-900 flex items-center justify-center relative group cursor-pointer">
              <div className="absolute inset-0 bg-stone-800 border-2 border-dashed border-stone-600 flex flex-col items-center justify-center gap-4">
                <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-10 h-10 text-white ml-1" fill="currentColor" />
                </div>
                <span className="text-stone-400 text-lg font-medium">Featured Video / YouTube Embed</span>
                <span className="text-stone-500 text-sm">1920 x 1080 px</span>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <span className="text-xs text-orange-600 uppercase tracking-wide font-medium">
                Latest • 2024
              </span>
              <h3 className="font-playfair text-2xl md:text-3xl font-semibold text-stone-900 mt-2">
                {t('videos.placeholder')} - Featured
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-gradient-to-br from-stone-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-stone-900 mb-12 text-center">
            {t('videos.official_videos')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div 
                key={video}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-stone-100 group hover:-translate-y-2"
              >
                <div className="aspect-video bg-stone-800 flex items-center justify-center relative cursor-pointer">
                  <div className="absolute inset-0 bg-stone-200 border-2 border-dashed border-stone-400 flex flex-col items-center justify-center gap-3">
                    <div className="w-14 h-14 rounded-full bg-red-600/90 flex items-center justify-center group-hover:scale-110 group-hover:bg-red-600 transition-all duration-300">
                      <Play className="w-7 h-7 text-white ml-0.5" fill="currentColor" />
                    </div>
                    <span className="text-stone-500 text-sm font-medium">{t('videos.placeholder')} {video}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-playfair text-lg font-semibold text-stone-900 mb-1 group-hover:text-orange-700 transition-colors">
                    {t('videos.placeholder')} {video}
                  </h4>
                  <span className="text-sm text-stone-500">
                    Official Music Video • 2024
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Videos;
