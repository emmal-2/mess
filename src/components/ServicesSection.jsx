import { useNavigate } from 'react-router-dom';

// Icônes SVG premium redessinées
const LuxuryServiceIcons = {
  shuttle: (
    <svg className="w-8 h-8 text-[#D4AF37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8 16H5l1-5h12l1 5h-3m0 0h4m-4 0v4h4v-4m-8 0v4h4v-4m-8 0v4h4v-4M4 11h16M4 7h16M4 3h16" />
      <circle cx="8.5" cy="16.5" r="1.5" fill="#D4AF37"/>
      <circle cx="15.5" cy="16.5" r="1.5" fill="#D4AF37"/>
    </svg>
  ),
  car: (
    <svg className="w-8 h-8 text-[#D4AF37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M5 13l4 4L19 7" stroke="#7C3030" strokeWidth="2"/>
      <path d="M8 12h8m-8 0V9a2 2 0 012-2h4a2 2 0 012 2v3m0 0v3a2 2 0 01-2 2h-4a2 2 0 01-2-2v-3m8 0H8" />
      <circle cx="7.5" cy="16.5" r="1.5" fill="#D4AF37"/>
      <circle cx="16.5" cy="16.5" r="1.5" fill="#D4AF37"/>
    </svg>
  ),
  restaurant: (
    <svg className="w-8 h-8 text-[#D4AF37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2l9 4.5V12l-9 4.5L3 12V6.5L12 2zM12 22V12"/>
      <path d="M15 12.5l3-1.5M9 12.5L6 11M12 22V12" stroke="#7C3030" strokeWidth="2"/>
      <circle cx="12" cy="7.5" r="1" fill="#D4AF37"/>
      <circle cx="8" cy="10" r="1" fill="#D4AF37"/>
      <circle cx="16" cy="10" r="1" fill="#D4AF37"/>
    </svg>
  ),
  concierge: (
    <svg className="w-8 h-8 text-[#D4AF37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20 12V8a2 2 0 00-2-2H6a2 2 0 00-2 2v4m16 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6m16 0H4"/>
      <path d="M8 16v-2a2 2 0 012-2h4a2 2 0 012 2v2" stroke="#7C3030" strokeWidth="2"/>
      <circle cx="12" cy="9" r="1" fill="#D4AF37"/>
      <rect x="10" y="12" width="4" height="2" rx="1" fill="#D4AF37"/>
    </svg>
  ),
  wifi: (
    <svg className="w-8 h-8 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3C7.03 3 3 7.03 3 12h2c0-3.86 3.14-7 7-7s7 3.14 7 7h2c0-4.97-4.03-9-9-9zm0 5c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2h2c0-2.21-1.79-4-4-4zm-3 8c0 1.66 1.34 3 3 3s3-1.34 3-3h-2c0 .55-.45 1-1 1s-1-.45-1-1H9z"/>
    </svg>
  ),
  cleaning: (
    <svg className="w-8 h-8 text-[#D4AF37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      <path d="M12 12v3m0 0v3m0-3h3m-3 0H9" stroke="#7C3030" strokeWidth="2"/>
    </svg>
  ),
  security: (
    <svg className="w-8 h-8 text-[#D4AF37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
      <path d="M8 11V7a4 4 0 018 0v4" stroke="#7C3030" strokeWidth="2"/>
    </svg>
  ),
  star: (
    <svg className="w-6 h-6 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
    </svg>
  )
};

const ServicesSection = ({ services }) => {
  const navigate = useNavigate();

  // Mapper les icônes textuelles aux icônes SVG
  const getServiceIcon = (iconName) => {
    const iconMap = {
      '🚐': LuxuryServiceIcons.shuttle,
      '🚗': LuxuryServiceIcons.car,
      '🍽️': LuxuryServiceIcons.restaurant,
      '⭐': LuxuryServiceIcons.concierge,
      '📶': LuxuryServiceIcons.wifi,
      '🧹': LuxuryServiceIcons.cleaning,
      '🔒': LuxuryServiceIcons.security
    };
    
    return iconMap[iconName] || <span className="text-2xl">{iconName}</span>;
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-[#FAF7F2] to-[#F0ECE3] relative overflow-hidden">
      {/* Éléments décoratifs d'arrière-plan */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-[#7C3030]/5 to-[#D4AF37]/5 rounded-full -translate-x-36 -translate-y-36"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#7C3030]/5 to-[#D4AF37]/5 rounded-full translate-x-48 translate-y-48"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#2C2C2C] mb-4">
            Services Exclusifs
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#7C3030] to-[#D4AF37] mx-auto mb-6"></div>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-[#2C2C2C] leading-relaxed">
            Des prestations haut de gamme soigneusement conçues pour transformer votre séjour en une expérience d'exception
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group relative overflow-hidden border border-[#E5E1D9]"
            >
              {/* Fond décoratif au hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#FAF7F2] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Badge de luxe */}
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-[#2C2C2C] text-xs px-2 py-1 rounded-full font-semibold shadow-lg flex items-center">
                  {LuxuryServiceIcons.star}
                  <span className="ml-1">PREMIUM</span>
                </div>
              </div>
              
              <div className="relative z-10 p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#7C3030]/10 to-[#D4AF37]/10 flex items-center justify-center group-hover:from-[#7C3030]/20 group-hover:to-[#D4AF37]/20 transition-all duration-300 shadow-inner border border-[#E5E1D9]/50">
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    {getServiceIcon(service.icon)}
                  </div>
                </div>
                
                <h3 className="text-xl font-playfair font-semibold mb-3 text-[#2C2C2C] group-hover:text-[#7C3030] transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  {service.description}
                </p>
                
                {/* Ligne décorative */}
                <div className="w-12 h-0.5 bg-gradient-to-r from-[#7C3030] to-[#D4AF37] mx-auto mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Section Bed & Car améliorée */}
        <div className="relative rounded-2xl shadow-2xl overflow-hidden">
          {/* Fond avec dégradé et motif */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#7C3030] via-[#8C4040] to-[#9C5050]"></div>
          <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.7\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/svg%3E')]"></div>
          
          {/* Élément décoratif */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-white/5 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
          
          <div className="relative z-10 p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                {/* En-tête avec icône */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] rounded-lg flex items-center justify-center mr-4 shadow-lg">
                    {LuxuryServiceIcons.car}
                  </div>
                  <h3 className="text-3xl font-playfair font-bold">Formule Exclusive Bed & Car</h3>
                </div>
                
                <div className="space-y-4 text-white/90 leading-relaxed">
                  <p className="flex items-start">
                    <span className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      <strong>26 000 FCFA/nuit</strong> pour une chambre simple - véhicule avec chauffeur inclus 
                      (hors frais de carburation)
                    </span>
                  </p>
                  
                  <p className="flex items-start">
                    <span className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      <strong>36 000 FCFA/nuit</strong> pour un appartement - mêmes conditions de service premium
                    </span>
                  </p>
                  
                  <p className="flex items-start">
                    <span className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      Service disponible 24h/24 - Dépose possible à Lomé sur demande spéciale
                    </span>
                  </p>
                </div>
              </div>
              
              <div className="text-center lg:text-right">
                <div className="inline-flex flex-col items-center lg:items-end space-y-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <h4 className="font-playfair font-semibold text-lg mb-3">Avantages Exclusifs</h4>
                    <ul className="text-sm space-y-2 text-white/80">
                      <li className="flex items-center justify-end">
                        <span className="ml-2">Chauffeur personnel dédié</span>
                        {LuxuryServiceIcons.star}
                      </li>
                      <li className="flex items-center justify-end">
                        <span className="ml-2">Véhicule haut de gamme</span>
                        {LuxuryServiceIcons.star}
                      </li>
                      <li className="flex items-center justify-end">
                        <span className="ml-2">Flexibilité horaire totale</span>
                        {LuxuryServiceIcons.star}
                      </li>
                    </ul>
                  </div>
                  
                  <button 
                    className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-[#2C2C2C] font-semibold hover:from-[#C49F2F] hover:to-[#E4C03F] transition-all duration-300 transform hover:scale-105 rounded-xl shadow-lg hover:shadow-xl flex items-center group/btn"
                    onClick={() => navigate('/info')}
                  >
                    <span>Découvrir les détails</span>
                    <svg className="w-5 h-5 ml-3 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section d'information supplémentaire */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white rounded-lg p-6 shadow-md border border-[#E5E1D9]">
            <div className="w-12 h-12 bg-gradient-to-br from-[#7C3030]/10 to-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-3">
              {LuxuryServiceIcons.security}
            </div>
            <h4 className="font-semibold text-[#2C2C2C] mb-2">Sécurité Optimale</h4>
            <p className="text-sm text-gray-600">Gardiennage 24h/24 et système de surveillance avancé</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md border border-[#E5E1D9]">
            <div className="w-12 h-12 bg-gradient-to-br from-[#7C3030]/10 to-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-3">
              {LuxuryServiceIcons.wifi}
            </div>
            <h4 className="font-semibold text-[#2C2C2C] mb-2">Connectivité Premium</h4>
            <p className="text-sm text-gray-600">Wi-Fi haut débit et Canal+ inclus dans tous les forfaits</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md border border-[#E5E1D9]">
            <div className="w-12 h-12 bg-gradient-to-br from-[#7C3030]/10 to-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-3">
              {LuxuryServiceIcons.cleaning}
            </div>
            <h4 className="font-semibold text-[#2C2C2C] mb-2">Service d'Excellence</h4>
            <p className="text-sm text-gray-600">Ménage quotidien et service blanchisserie sur demande</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;