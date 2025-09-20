import { useState, useEffect } from 'react';

const LuxuryGallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Données de médias (à remplacer par les vraies données)
  const mediaItems = [
    {
      type: 'image',
      url: '/M1.jpg',
      alt: 'Vue extérieure de la résidence'
    },
    {
      type: 'image',
      url: '/M2.jpg',
      alt: 'Suite présidentielle'
    },
    {
      type: 'image',
      url: '/M24.jpg',
      alt: 'Chambre deluxe'
    },
    {
      type: 'image',
      url: '/M11.jpg',
      alt: 'Chambre deluxe'
    },
    {
      type: 'image',
      url: '/M34.jpg',
      alt: 'Chambre deluxe'
    },
    {
      type: 'image',
      url: '/M21.jpg',
      alt: 'Chambre deluxe'
    },

    {
      type: 'image',
      url: '/M26.jpg',
      alt: 'Chambre deluxe'
    },{
      type: 'image',
      url: '/M5.jpg',
      alt: 'Chambre deluxe'
    },
    {
      type: 'image',
      url: '/M7.jpg',
      alt: 'Chambre deluxe'
    },
    {
      type: 'image',
      url: '/M15.jpg',
      alt: 'Chambre deluxe'
    },
    {
      type: 'image',
      url: '/M18.jpg',
      alt: 'Chambre deluxe'
    },
    {
      type: 'image',
      url: '/M13.jpg',
      alt: 'Chambre deluxe'
    },
    {
      type: 'image',
      url: '/M22.jpg',
      alt: 'Chambre deluxe'
    },
    {
      type: 'image',
      url: '/M30.jpg',
      alt: 'Chambre deluxe'
    },
    {
      type: 'image',
      url: '/M12.jpg',
      alt: 'Chambre deluxe'
    },
    {
      type: 'image',
      url: '/M9.jpg',
      alt: 'Chambre deluxe'
    },
    {
      type: 'image',
      url: '/M25.jpg',
      alt: 'Chambre deluxe'
    },
    {
      type: 'image',
      url: '/M38.jpg',
      alt: 'Chambre deluxe'
    }
  ];

  // Gestion des vidéos en plein écran
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement !== null);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const openLightbox = (index) => {
    setSelectedMedia(index);
  };

  const closeLightbox = () => {
    setSelectedMedia(null);
  };

  const navigateMedia = (direction) => {
    setSelectedMedia(prev => {
      if (direction === 'next') {
        return (prev + 1) % mediaItems.length;
      } else {
        return (prev - 1 + mediaItems.length) % mediaItems.length;
      }
    });
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  return (
    <div className="min-h-screen bg-cream-white py-20">
      {/* En-tête de la galerie */}
      <div className="container mx-auto px-6 mb-16">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal-black mb-6">
            Galerie d'Exception
          </h2>
          <div className="w-24 h-0.5 bg-prussian-red mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez l'univers raffiné de Flamboyant Résidence à travers une expérience visuelle immersive
          </p>
        </div>
      </div>

      {/* Grille de la galerie */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mediaItems.map((item, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden cursor-pointer bg-charcoal-black"
              onClick={() => openLightbox(index)}
            >
              {/* Overlay au survol */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-700 z-10"></div>
              
              {/* Indicateur de type de média */}
              <div className="absolute top-4 right-4 z-20 bg-black/40 rounded-full p-2 backdrop-blur-sm">
                {item.type === 'video' ? (
                  <svg className="w-5 h-5 text-cream-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-cream-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                )}
              </div>

              {/* Élément média */}
              {item.type === 'image' ? (
                <img 
                  src={item.url} 
                  alt={item.alt}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                />
              ) : (
                <div className="relative w-full h-80 overflow-hidden">
                  <img 
                    src={item.poster} 
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-prussian-red/80 rounded-full flex items-center justify-center group-hover:bg-prussian-red group-hover:scale-110 transition-all duration-300">
                      <svg className="w-8 h-8 text-cream-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedMedia !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <button 
            className="absolute top-6 right-6 text-cream-white z-50"
            onClick={closeLightbox}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button 
            className="absolute left-6 top-1/2 transform -translate-y-1/2 text-cream-white z-50"
            onClick={() => navigateMedia('prev')}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            className="absolute right-6 top-1/2 transform -translate-y-1/2 text-cream-white z-50"
            onClick={() => navigateMedia('next')}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <button 
            className="absolute top-6 left-6 text-cream-white z-50"
            onClick={toggleFullscreen}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isFullscreen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8V4m0 0h4M3 4l4 4m8 0V4m0 0h-4m4 0l-4 4m-8 4v4m0 0h4m-4 0l4-4m8 4l-4-4m4 4v-4m0 4h-4" />
              )}
            </svg>
          </button>

          <div className="relative w-full max-w-6xl h-full max-h-[80vh] flex items-center justify-center">
            {mediaItems[selectedMedia].type === 'image' ? (
              <img 
                src={mediaItems[selectedMedia].url} 
                alt={mediaItems[selectedMedia].alt}
                className="max-w-full max-h-full object-contain"
              />
            ) : (
              <iframe 
                src={mediaItems[selectedMedia].url}
                className="w-full h-full max-h-[80vh]"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={mediaItems[selectedMedia].alt}
              ></iframe>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LuxuryGallery;