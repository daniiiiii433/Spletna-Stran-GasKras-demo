import React from 'react';
import { Music, Users, Sparkles, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import PlaceholderImage from '../components/PlaceholderImage';

const About = () => {
  const { t } = useLanguage();

  const members = [1, 2, 3, 4, 5];

  return (
    <div data-testid="about-page" className="min-h-screen bg-stone-50 pt-24">
      {/* Header */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-gradient-to-br from-stone-50 to-orange-50">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-sm font-medium tracking-widest uppercase text-orange-600 mb-4 block">
            Gas Kras
          </span>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-stone-900 tracking-tight mb-6">
            {t('about.title')}
          </h1>
        </div>
      </section>

      {/* Band Story */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-orange-700" />
                </div>
                <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-stone-900">
                  {t('about.story')}
                </h2>
              </div>
              <div className="bg-white rounded-2xl border-2 border-dashed border-stone-300 p-8 min-h-[200px]">
                <p className="text-stone-500 italic">
                  {t('about.story_placeholder')}
                </p>
              </div>
            </div>
            <PlaceholderImage 
              text={`${t('gallery.placeholder')} - Band`}
              aspectRatio="aspect-[4/3]"
              icon={<Users className="w-16 h-16" />}
            />
          </div>
        </div>
      </section>

      {/* Band Members */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-gradient-to-br from-stone-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 justify-center mb-12">
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
              <Users className="w-5 h-5 text-orange-700" />
            </div>
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-stone-900">
              {t('about.members')}
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {members.map((member) => (
              <div 
                key={member}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-stone-100 group hover:-translate-y-2 text-center"
              >
                <PlaceholderImage 
                  text={`${t('gallery.placeholder')}`}
                  aspectRatio="aspect-square"
                  className="rounded-none border-0 border-b-2"
                />
                <div className="p-4">
                  <h4 className="font-playfair text-lg font-semibold text-stone-900 mb-1">
                    {t('about.member_placeholder')} {member}
                  </h4>
                  <span className="text-sm text-orange-600">
                    {t('about.role_placeholder')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artistic Vision */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <PlaceholderImage 
              text={`${t('gallery.placeholder')} - Live`}
              aspectRatio="aspect-[4/3]"
              icon={<Sparkles className="w-16 h-16" />}
            />
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-orange-700" />
                </div>
                <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-stone-900">
                  {t('about.vision')}
                </h2>
              </div>
              <div className="bg-white rounded-2xl border-2 border-dashed border-stone-300 p-8 min-h-[200px]">
                <p className="text-stone-500 italic">
                  {t('about.vision_placeholder')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Musical Influences */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-gradient-to-br from-stone-50 to-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center gap-3 justify-center mb-8">
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
              <Music className="w-5 h-5 text-orange-700" />
            </div>
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-stone-900">
              {t('about.influences')}
            </h2>
          </div>
          <div className="bg-white rounded-2xl border-2 border-dashed border-stone-300 p-8 min-h-[150px]">
            <p className="text-stone-500 italic">
              {t('about.influences_placeholder')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
