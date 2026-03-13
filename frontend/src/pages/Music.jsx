import React from 'react';
import { Music2, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import PlaceholderImage from '../components/PlaceholderImage';

const Music = () => {
  const { t } = useLanguage();

  const streamingPlatforms = [
    { name: 'Spotify', url: 'https://open.spotify.com/intl-it/artist/6KK6O5FGa22AsnYwwRWrrA', color: 'bg-green-600 hover:bg-green-700' },
    { name: 'YouTube Music', url: 'https://www.youtube.com/@skupinagaskras', color: 'bg-red-600 hover:bg-red-700' },
  ];

  const albums = [1, 2];
  const singles = [1, 2, 3, 4];

  return (
    <div data-testid="music-page" className="min-h-screen bg-stone-50 pt-24">
      {/* Header */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-gradient-to-br from-stone-50 to-orange-50">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-sm font-medium tracking-widest uppercase text-orange-600 mb-4 block">
            Gas Kras
          </span>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-stone-900 tracking-tight mb-6">
            {t('music.title')}
          </h1>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto mb-8">
            {t('music.listen_on')}
          </p>
          
          {/* Streaming Links */}
          <div className="flex flex-wrap gap-4 justify-center">
            {streamingPlatforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`streaming-${platform.name.toLowerCase().replace(' ', '-')}`}
                className={`${platform.color} text-white rounded-full px-6 py-3 font-medium flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
              >
                <Music2 size={18} />
                {platform.name}
                <ExternalLink size={14} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Spotify Player Embed */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-stone-100">
            <h3 className="font-playfair text-2xl font-semibold text-stone-900 mb-6 text-center">
              Spotify Player
            </h3>
            <div className="aspect-[2/1] bg-stone-100 border-2 border-dashed border-stone-300 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <Music2 className="w-16 h-16 text-stone-400 mx-auto mb-4" />
                <span className="text-stone-500 text-lg font-medium block">Spotify Embed</span>
                <code className="text-stone-400 text-xs mt-2 block">
                  &lt;iframe src="spotify_embed_url"&gt;
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Albums */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-stone-900 mb-12 text-center">
            {t('music.albums')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {albums.map((album) => (
              <div 
                key={album}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-stone-100 group"
              >
                <PlaceholderImage 
                  text={`${t('music.placeholder_album')} ${album}`}
                  aspectRatio="aspect-square"
                  className="rounded-none border-0 border-b-2"
                  icon={<Music2 className="w-16 h-16" />}
                />
                <div className="p-6 md:p-8">
                  <span className="text-xs text-orange-600 uppercase tracking-wide font-medium">
                    Album • 2024
                  </span>
                  <h3 className="font-playfair text-2xl font-semibold text-stone-900 mt-2 mb-3 group-hover:text-orange-700 transition-colors">
                    {t('music.placeholder_album')} {album}
                  </h3>
                  <p className="text-stone-500 text-sm mb-4">
                    10 tracks • 35 min
                  </p>
                  <a 
                    href="#"
                    className="inline-flex items-center gap-2 text-orange-700 hover:text-orange-800 font-medium transition-colors"
                  >
                    {t('music.listen_on')} Spotify
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Singles */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-gradient-to-br from-stone-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-stone-900 mb-12 text-center">
            {t('music.singles')}
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {singles.map((single) => (
              <div 
                key={single}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-stone-100 group hover:-translate-y-2"
              >
                <PlaceholderImage 
                  text={`${t('music.placeholder_single')} ${single}`}
                  aspectRatio="aspect-square"
                  className="rounded-none border-0 border-b-2"
                />
                <div className="p-4">
                  <h4 className="font-medium text-stone-900 text-sm truncate group-hover:text-orange-700 transition-colors">
                    {t('music.placeholder_single')} {single}
                  </h4>
                  <span className="text-xs text-stone-500">
                    Single • 2024
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

export default Music;
