import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  // Icône SVG personnalisée pour la flèche
  const LuxuryArrowIcon = () => (
    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 5v14m0 0l-7-7m7 7l7-7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  // Icône étoile décorative
  const StarIcon = () => (
    <svg className="w-4 h-4 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
    </svg>
  );

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Overlay avec dégradé sophistiqué */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7C3030]/90 via-[#7C3030]/70 to-[#2C2C2C]/50 z-10"></div>
      
      {/* Effet de lumière ambiante */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7C3030]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Image de fond avec effet parallax */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed transition-all duration-1000"
        style={{ 
          backgroundImage: "url('/M8.jpg')",
          filter: "brightness(0.8) contrast(1.1)"
        }}
      ></div>
      
      {/* Contenu principal */}
      <div className="relative z-20 text-center text-white px-4 max-w-6xl">
        {/* Badge de luxe */}
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-[#2C2C2C] px-6 py-2 rounded-full font-semibold text-sm uppercase tracking-widest shadow-2xl flex items-center transform">
            <StarIcon />
            <span className="mx-2">Expérience Luxueuse</span>
            <StarIcon />
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-playfair font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white to-[#F5F2EC] bg-clip-text text-transparent">
            Flamboyant
          </span>
          <br />
          <span className="text-4xl md:text-6xl font-light mt-2 block">Résidence</span>
        </h1>
        
        <div className="relative mb-8">
          <div className="w-32 h-1 bg-gradient-to-r from-[#D4AF37] to-[#7C3030] mx-auto mb-4"></div>
          <p className="text-xl md:text-3xl font-cormorant mb-8 max-w-3xl mx-auto leading-relaxed">
            L'excellence d'un séjour luxueux au cœur de <span className="text-[#D4AF37]">Cotonou</span>
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-[#7C3030] to-[#D4AF37] mx-auto mt-4"></div>
        </div>
        
        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <button 
            className="group relative px-10 py-4 bg-gradient-to-r from-[#7C3030] to-[#9C5050] text-white text-lg rounded-lg hover:from-[#6a2828] hover:to-[#8a4040] transition-all duration-300 shadow-2xl hover:shadow-3xl font-semibold overflow-hidden"
            onClick={() => document.getElementById('apartments').scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="relative z-10 flex items-center">
              Découvrir nos appartements
              <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>
          
          <button 
            className="group relative px-10 py-4 bg-transparent border-2 border-white text-white text-lg rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm font-semibold overflow-hidden"
            onClick={() => navigate('/reservation')}
          >
            <span className="relative z-10 flex items-center">
              Réserver maintenant
              <svg className="w-5 h-5 ml-3 transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
              </svg>
            </span>
            <div className="absolute inset-0 bg-white/5 transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
          </button>
        </div>
        
        {/* Informations rapides */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto text-sm">
          <div className="flex items-center justify-center text-white/80">
            <svg className="w-5 h-5 text-[#D4AF37] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <span>Cotonou Centre-Ville</span>
          </div>
          <div className="flex items-center justify-center text-white/80">
            <svg className="w-5 h-5 text-[#D4AF37] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span>5 min de l'Aéroport</span>
          </div>
          <div className="flex items-center justify-center text-white/80">
            <svg className="w-5 h-5 text-[#D4AF37] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
            </svg>
            <span>Vue Panoramique</span>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default HeroSection;