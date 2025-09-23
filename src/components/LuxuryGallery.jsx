import { useState, useEffect } from 'react';

const LuxuryGallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Icônes SVG premium
  const LuxuryIcons = {
    close: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    ),
    prev: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
      </svg>
    ),
    next: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
      </svg>
    ),
    fullscreen: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8V4m0 0h4M3 4l4 4m8 0V4m0 0h-4m4 0l-4 4m-8 4v4m0 0h4m-4 0l4-4m8 4l-4-4m4 4v-4m0 4h-4"/>
      </svg>
    ),
    fullscreenExit: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25"/>
      </svg>
    ),
    image: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
      </svg>
    ),
    video: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7z"/>
      </svg>
    ),
    play: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7z"/>
      </svg>
    ),
    grid: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
      </svg>
    ),
    list: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
    )
  };

  // Données de médias
  const mediaItems = [
    { type: 'image', url: '/M1.jpg', alt: 'Vue extérieure de la résidence', category: 'appartements' },
    { type: 'image', url: '/M2.jpg', alt: 'Suite présidentielle', category: 'chambres' },
    { type: 'image', url: '/M24.jpg', alt: 'Chambre deluxe', category: 'appartements' },
    { type: 'image', url: '/M11.jpg', alt: 'Salon VIP', category: 'appartements' },
    { type: 'image', url: '/M34.jpg', alt: 'Salle de bain luxueuse', category: 'chambres' },
    { type: 'image', url: '/M21.jpg', alt: 'Restaurant panoramique', category: 'appartements' },
    { type: 'image', url: '/M26.jpg', alt: 'Piscine privée', category: 'salons' },
    { type: 'image', url: '/M5.jpg', alt: 'Suite junior', category: 'salons' },
    { type: 'image', url: '/M7.jpg', alt: 'Chambre standard', category: 'chambres' },
    { type: 'image', url: '/M15.jpg', alt: 'Salle de réunion', category: 'salons' },
    { type: 'image', url: '/M18.jpg', alt: 'Vue sur la ville', category: 'appartements' },
    { type: 'image', url: '/M13.jpg', alt: 'Détail architectural', category: 'salons' },
    { type: 'image', url: '/M22.jpg', alt: 'Chambre familiale', category: 'chambres' },
    { type: 'image', url: '/M30.jpg', alt: 'Terrasse privative', category: 'chambres' },
    { type: 'image', url: '/M12.jpg', alt: 'Spa et bien-être', category: 'appartements' },
    { type: 'image', url: '/M9.jpg', alt: 'Suite executive', category: 'appartements' },
    { type: 'image', url: '/M25.jpg', alt: 'Hall d entrée', category: 'chambres' },
    { type: 'image', url: '/M38.jpg', alt: 'Jardin tropical', category: 'appartements' }
  ];

  // Catégories disponibles
  const categories = ['tous', ...new Set(mediaItems.map(item => item.category))];
  const [selectedCategory, setSelectedCategory] = useState('tous');

  // Filtrage des médias par catégorie
  const filteredMedia = selectedCategory === 'tous' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === selectedCategory);

  // Pagination
  const totalPages = Math.ceil(filteredMedia.length / itemsPerPage);
  const currentItems = filteredMedia.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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
        return (prev + 1) % filteredMedia.length;
      } else {
        return (prev - 1 + filteredMedia.length) % filteredMedia.length;
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

  // Navigation par clavier
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedMedia !== null) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') navigateMedia('prev');
        if (e.key === 'ArrowRight') navigateMedia('next');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedMedia]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF7F2] to-[#F5F2EC] py-20">
      {/* En-tête de la galerie */}
      <div className="container mx-auto px-6 mb-16">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#2C2C2C] mb-6">
            Galerie d'Exception
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#7C3030] to-[#D4AF37] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Immersion visuelle dans l'univers raffiné de Flamboyant Résidence, où chaque détail raconte une histoire d'excellence
          </p>
        </div>

        {/* Filtres par catégorie */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentPage(1);
              }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-[#7C3030] to-[#9C5050] text-white shadow-lg'
                  : 'bg-white text-[#2C2C2C] border border-[#E5E1D9] hover:border-[#7C3030]'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Grille de la galerie */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentItems.map((item, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden cursor-pointer bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 border border-[#E5E1D9]"
              onClick={() => openLightbox(index)}
            >
              {/* Badge de catégorie */}
              <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-[#7C3030] to-[#D4AF37] text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg backdrop-blur-sm">
                {item.category}
              </div>
              
              {/* Overlay au survol */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10"></div>
              
              {/* Indicateur de type de média */}
              <div className="absolute top-4 right-4 z-20 bg-black/40 rounded-full p-2 backdrop-blur-sm transform group-hover:scale-110 transition-transform duration-300">
                <div className="text-white">
                  {item.type === 'video' ? LuxuryIcons.video : LuxuryIcons.image}
                </div>
              </div>

              {/* Bouton de visualisation au survol */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                <div className="bg-gradient-to-r from-[#7C3030] to-[#D4AF37] rounded-full p-4 transform group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                  {item.type === 'video' ? (
                    <div className="text-white">{LuxuryIcons.play}</div>
                  ) : (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  )}
                </div>
              </div>

              {/* Élément média */}
              <div className="w-full h-80 overflow-hidden">
                <img 
                  src={item.url} 
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Légende */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white z-10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-sm font-medium">{item.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-12 space-x-4">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-3 rounded-full bg-white border border-[#E5E1D9] hover:border-[#7C3030] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              {LuxuryIcons.prev}
            </button>
            
            <div className="flex space-x-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-full font-medium transition-all duration-300 ${
                    currentPage === page
                      ? 'bg-gradient-to-r from-[#7C3030] to-[#D4AF37] text-white shadow-lg'
                      : 'bg-white text-[#2C2C2C] border border-[#E5E1D9] hover:border-[#7C3030]'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-3 rounded-full bg-white border border-[#E5E1D9] hover:border-[#7C3030] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              {LuxuryIcons.next}
            </button>
          </div>
        )}
      </div>

      {/* Lightbox amélioré */}
      {selectedMedia !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-lg">
          {/* Bouton fermer */}
          <button 
            className="absolute top-8 right-8 text-white z-50 bg-black/30 rounded-full p-3 hover:bg-[#7C3030] transition-all duration-300 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            {LuxuryIcons.close}
          </button>

          {/* Bouton précédent */}
          <button 
            className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white z-50 bg-black/30 rounded-full p-3 hover:bg-[#7C3030] transition-all duration-300 backdrop-blur-sm"
            onClick={() => navigateMedia('prev')}
          >
            {LuxuryIcons.prev}
          </button>

          {/* Bouton suivant */}
          <button 
            className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white z-50 bg-black/30 rounded-full p-3 hover:bg-[#7C3030] transition-all duration-300 backdrop-blur-sm"
            onClick={() => navigateMedia('next')}
          >
            {LuxuryIcons.next}
          </button>

          {/* Bouton plein écran */}
          <button 
            className="absolute top-8 left-8 text-white z-50 bg-black/30 rounded-full p-3 hover:bg-[#7C3030] transition-all duration-300 backdrop-blur-sm"
            onClick={toggleFullscreen}
          >
            {isFullscreen ? LuxuryIcons.fullscreenExit : LuxuryIcons.fullscreen}
          </button>

          {/* Compteur d'images */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-white z-50 bg-black/30 rounded-full px-4 py-2 backdrop-blur-sm">
            <span className="font-medium">{selectedMedia + 1} / {filteredMedia.length}</span>
          </div>

          {/* Contenu média */}
          <div className="relative w-full max-w-6xl h-full max-h-[85vh] flex items-center justify-center">
            {filteredMedia[selectedMedia].type === 'image' ? (
              <img 
                src={filteredMedia[selectedMedia].url} 
                alt={filteredMedia[selectedMedia].alt}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="bg-black/50 rounded-lg p-8">
                  <p className="text-white text-lg">Lecture vidéo</p>
                </div>
              </div>
            )}
          </div>

          {/* Légende en bas */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white z-50 bg-black/30 rounded-lg px-6 py-3 backdrop-blur-sm max-w-2xl text-center">
            <p className="font-medium">{filteredMedia[selectedMedia].alt}</p>
            <p className="text-sm opacity-80 capitalize">{filteredMedia[selectedMedia].category}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LuxuryGallery;