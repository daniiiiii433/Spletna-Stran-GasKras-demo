export const translations = {
  sl: {
    nav: {
      home: 'Domov',
      music: 'Glasba',
      videos: 'Videi',
      about: 'O nas',
      gallery: 'Galerija',
      merch: 'Trgovina',
      news: 'Novice',
      contact: 'Kontakt'
    },
    hero: {
      subtitle: 'Skupina iz Krasa',
      cta_listen: 'Poslušaj',
      cta_watch: 'Poglej'
    },
    music: {
      title: 'Glasba',
      albums: 'Albumi',
      singles: 'Singli',
      listen_on: 'Poslušaj na',
      placeholder_album: 'Vaš album',
      placeholder_single: 'Vaš singel'
    },
    videos: {
      title: 'Videi',
      official_videos: 'Uradni videospoti',
      placeholder: 'Vaš video'
    },
    about: {
      title: 'O nas',
      story: 'Naša zgodba',
      members: 'Člani',
      vision: 'Umetniška vizija',
      influences: 'Glasbene vplivi',
      story_placeholder: 'Tukaj napišite zgodbo vaše skupine...',
      vision_placeholder: 'Opišite vašo umetniško vizijo...',
      influences_placeholder: 'Navedite vaše glasbene vplive...',
      member_placeholder: 'Ime člana',
      role_placeholder: 'Vloga v skupini'
    },
    gallery: {
      title: 'Galerija',
      promotional: 'Promocijske fotografije',
      backstage: 'V zaodrju',
      placeholder: 'Slika po želji'
    },
    merch: {
      title: 'Trgovina',
      subtitle: 'Naši izdelki',
      item_placeholder: 'Vaše artikle',
      price_placeholder: 'Cena',
      coming_soon: 'Kmalu na voljo'
    },
    news: {
      title: 'Novice',
      latest: 'Najnovejše',
      placeholder_title: 'Naslov novice',
      placeholder_content: 'Vsebina novice...',
      read_more: 'Preberi več'
    },
    contact: {
      title: 'Kontakt',
      follow_us: 'Spremljajte nas',
      booking: 'Za rezervacije',
      press: 'Za medije',
      management: 'Management'
    },
    footer: {
      rights: 'Vse pravice pridržane'
    }
  },
  it: {
    nav: {
      home: 'Home',
      music: 'Musica',
      videos: 'Video',
      about: 'Chi siamo',
      gallery: 'Galleria',
      merch: 'Shop',
      news: 'News',
      contact: 'Contatti'
    },
    hero: {
      subtitle: 'Gruppo dal Carso',
      cta_listen: 'Ascolta',
      cta_watch: 'Guarda'
    },
    music: {
      title: 'Musica',
      albums: 'Album',
      singles: 'Singoli',
      listen_on: 'Ascolta su',
      placeholder_album: 'Il vostro album',
      placeholder_single: 'Il vostro singolo'
    },
    videos: {
      title: 'Video',
      official_videos: 'Videoclip ufficiali',
      placeholder: 'Il vostro video'
    },
    about: {
      title: 'Chi siamo',
      story: 'La nostra storia',
      members: 'Membri',
      vision: 'Visione artistica',
      influences: 'Influenze musicali',
      story_placeholder: 'Scrivi qui la storia del gruppo...',
      vision_placeholder: 'Descrivi la vostra visione artistica...',
      influences_placeholder: 'Elenca le vostre influenze musicali...',
      member_placeholder: 'Nome membro',
      role_placeholder: 'Ruolo nel gruppo'
    },
    gallery: {
      title: 'Galleria',
      promotional: 'Foto promozionali',
      backstage: 'Dietro le quinte',
      placeholder: 'Immagine a scelta'
    },
    merch: {
      title: 'Shop',
      subtitle: 'I nostri prodotti',
      item_placeholder: 'I vostri articoli',
      price_placeholder: 'Prezzo',
      coming_soon: 'Prossimamente'
    },
    news: {
      title: 'News',
      latest: 'Ultime novità',
      placeholder_title: 'Titolo notizia',
      placeholder_content: 'Contenuto notizia...',
      read_more: 'Leggi di più'
    },
    contact: {
      title: 'Contatti',
      follow_us: 'Seguici',
      booking: 'Per prenotazioni',
      press: 'Per la stampa',
      management: 'Management'
    },
    footer: {
      rights: 'Tutti i diritti riservati'
    }
  },
  en: {
    nav: {
      home: 'Home',
      music: 'Music',
      videos: 'Videos',
      about: 'About',
      gallery: 'Gallery',
      merch: 'Merch',
      news: 'News',
      contact: 'Contact'
    },
    hero: {
      subtitle: 'Band from Karst',
      cta_listen: 'Listen',
      cta_watch: 'Watch'
    },
    music: {
      title: 'Music',
      albums: 'Albums',
      singles: 'Singles',
      listen_on: 'Listen on',
      placeholder_album: 'Your album',
      placeholder_single: 'Your single'
    },
    videos: {
      title: 'Videos',
      official_videos: 'Official music videos',
      placeholder: 'Your video'
    },
    about: {
      title: 'About',
      story: 'Our story',
      members: 'Members',
      vision: 'Artistic vision',
      influences: 'Musical influences',
      story_placeholder: 'Write your band story here...',
      vision_placeholder: 'Describe your artistic vision...',
      influences_placeholder: 'List your musical influences...',
      member_placeholder: 'Member name',
      role_placeholder: 'Role in the band'
    },
    gallery: {
      title: 'Gallery',
      promotional: 'Promotional photos',
      backstage: 'Behind the scenes',
      placeholder: 'Image placeholder'
    },
    merch: {
      title: 'Merch',
      subtitle: 'Our products',
      item_placeholder: 'Your items',
      price_placeholder: 'Price',
      coming_soon: 'Coming soon'
    },
    news: {
      title: 'News',
      latest: 'Latest news',
      placeholder_title: 'News title',
      placeholder_content: 'News content...',
      read_more: 'Read more'
    },
    contact: {
      title: 'Contact',
      follow_us: 'Follow us',
      booking: 'For bookings',
      press: 'For press',
      management: 'Management'
    },
    footer: {
      rights: 'All rights reserved'
    }
  }
};

export const getTranslation = (lang, key) => {
  const keys = key.split('.');
  let value = translations[lang];
  for (const k of keys) {
    value = value?.[k];
  }
  return value || key;
};
