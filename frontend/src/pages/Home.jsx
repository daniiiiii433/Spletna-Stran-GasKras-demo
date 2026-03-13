import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Music2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import PlaceholderImage from '../components/PlaceholderImage';

const Home = () => {
  const { t } = useLanguage();

  return (
    <div data-testid="home-page" className="min-h-screen">
      {/* Hero Section */}
      <section 
        data-testid="hero-section"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-100 to-orange-50">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full max-w-4xl mx-auto p-8 flex items-center justify-center">
              <div className="w-full h-[60vh] bg-stone-200 border-2 border-dashed border-stone-400 rounded-3xl flex flex-col items-center justify-center gap-4">
                <div className="w-24 h-24 rounded-full bg-stone-300 border-2 border-dashed border-stone-500 flex items-center justify-center">
                  <Play className="w-10 h-10 text-stone-500" />
                </div>
                <span className="text-stone-500 text-lg font-medium">Hero Video / Slika</span>
                <span className="text-stone-400 text-sm">1920 x 1080 px</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* Logo Placeholder */}
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto bg-white/80 backdrop-blur-sm rounded-full border-2 border-dashed border-stone-400 flex items-center justify-center shadow-xl">
              <span className="text-stone-500 text-sm font-medium">Logo</span>
            </div>
          </div>

          <h1 
            data-testid="hero-title"
            className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-stone-900 tracking-tight mb-4"
          >
            Gas Kras
          </h1>
          <p className="font-caveat text-2xl md:text-3xl text-orange-700 mb-8">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/music"
              data-testid="hero-cta-listen"
              className="group flex items-center gap-3 rounded-full bg-orange-700 text-white hover:bg-orange-800 transition-all duration-300 px-8 py-4 font-medium text-lg shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <Music2 size={22} />
              {t('hero.cta_listen')}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/videos"
              data-testid="hero-cta-watch"
              className="flex items-center gap-3 rounded-full border-2 border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300 px-8 py-4 font-medium text-lg"
            >
              <Play size={22} />
              {t('hero.cta_watch')}
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-stone-400 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-stone-400 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Quick Music Preview */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-widest uppercase text-orange-600 mb-4 block">
              {t('music.listen_on')} Spotify
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-stone-900">
              {t('music.title')}
            </h2>
          </div>

          {/* Spotify Embed Placeholder */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-stone-100">
            <div className="aspect-[3/1] bg-stone-100 border-2 border-dashed border-stone-300 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <Music2 className="w-16 h-16 text-stone-400 mx-auto mb-4" />
                <span className="text-stone-500 text-lg font-medium block">Spotify Embed</span>
                <span className="text-stone-400 text-sm">Player integrato</span>
              </div>
            </div>
          </div>

          {/* View More */}
          <div className="text-center mt-12">
            <Link
              to="/music"
              className="inline-flex items-center gap-2 text-orange-700 hover:text-orange-800 font-medium transition-colors"
            >
              {t('news.read_more')}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News Preview */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-gradient-to-br from-stone-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-widest uppercase text-orange-600 mb-4 block">
              {t('news.latest')}
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-stone-900">
              {t('news.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-stone-100 group"
              >
                <PlaceholderImage 
                  text={`${t('gallery.placeholder')} ${item}`}
                  aspectRatio="aspect-video"
                  className="rounded-none border-0 border-b-2"
                />
                <div className="p-6">
                  <span className="text-xs text-stone-400 uppercase tracking-wide">
                    {new Date().toLocaleDateString()}
                  </span>
                  <h3 className="font-playfair text-xl font-semibold text-stone-900 mt-2 mb-3 group-hover:text-orange-700 transition-colors">
                    {t('news.placeholder_title')} {item}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {t('news.placeholder_content')}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-orange-700 hover:text-orange-800 font-medium transition-colors"
            >
              {t('news.read_more')}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
