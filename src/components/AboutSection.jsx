import { useNavigate } from 'react-router-dom';

const AboutSection = () => {
  const navigate = useNavigate();

  // Icônes SVG premium pour la section
  const LuxuryIcons = {
    location: (
      <svg className="w-6 h-6 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    ),
    airport: (
      <svg className="w-6 h-6 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
      </svg>
    ),
    restaurant: (
      <svg className="w-6 h-6 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.20-1.10-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"/>
      </svg>
    ),
    star: (
      <svg className="w-5 h-5 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
      </svg>
    ),
    check: (
      <svg className="w-5 h-5 text-[#7C3030]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
      </svg>
    ),
    bed: (
      <svg className="w-6 h-6 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 7h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4zm-3 9H8v-5h8v5zm3-7c-1.1 0-2 .9-2 2h2v-2zm-8-2H4v2h7v-2z"/>
      </svg>
    ),
    car: (
      <svg className="w-6 h-6 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
      </svg>
    )
  };

  const features = [
    {
      icon: LuxuryIcons.location,
      title: "Emplacement Privilégié",
      description: "Cœur de Cotonou, à 5 minutes de l'aéroport"
    },
    {
      icon: LuxuryIcons.bed,
      title: "8 Chambres Élégantes",
      description: "Bed and Breakfast ou formule Bed & Car"
    },
    {
      icon: LuxuryIcons.restaurant,
      title: "Restaurant Panoramique",
      description: "Vue exceptionnelle sur Cotonou"
    },
    {
      icon: LuxuryIcons.car,
      title: "Service Premium",
      description: "Chauffeur inclus et navette aéroport"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-[#FAF7F2] relative overflow-hidden">
      {/* Éléments décoratifs d'arrière-plan */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-[#7C3030]/10 to-transparent rounded-full -translate-x-36 -translate-y-36"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#D4AF37]/10 to-transparent rounded-full translate-x-48 translate-y-48"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#7C3030] to-[#9C5050] rounded-full mb-6 shadow-2xl">
            {LuxuryIcons.star}
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#2C2C2C] mb-4">
            Un Havre de Paix au Cœur de Cotonou
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#7C3030] to-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto text-[#2C2C2C] opacity-90">
            L'excellence d'un séjour luxueux dans un environnement moderne et soigné
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {/* Texte principal avec icônes intégrées */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] rounded-full flex items-center justify-center shadow-lg">
                  {LuxuryIcons.location}
                </div>
                <div>
                  <p className="text-lg leading-relaxed text-[#2C2C2C]">
                    <span className="font-semibold text-[#7C3030]">Idéalement situé</span> en plein cœur de Cotonou, 
                    à 5 minutes de l'Aéroport International Cardinal Bernardin Gantin, 
                    la Résidence le Flamboyant vous accueille dans un environnement moderne, sobre et soigné.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#7C3030] to-[#9C5050] rounded-full flex items-center justify-center shadow-lg">
                  {LuxuryIcons.bed}
                </div>
                <div>
                  <p className="text-lg leading-relaxed text-[#2C2C2C]">
                    Composé de <span className="font-semibold text-[#7C3030]">8 chambres individuelles climatisées</span> 
                    offrant le Bed and Breakfast ou une formule Bed and Car avec chauffeur inclus 
                    et <span className="font-semibold text-[#7C3030]">6 appartements de 2 ou 4 pièces</span> équipées de kitchenette, 
                    vous vous sentirez comme chez vous.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] rounded-full flex items-center justify-center shadow-lg">
                  {LuxuryIcons.restaurant}
                </div>
                <div>
                  <p className="text-lg leading-relaxed text-[#2C2C2C]">
                    Notre <span className="font-semibold text-[#7C3030]">restaurant avec vue panoramique</span> sur Cotonou 
                    complète cette expérience d'exception pour des moments inoubliables 
                    (mariages, anniversaires, soirées à thème).
                  </p>
                </div>
              </div>
            </div>

            {/* Grille des caractéristiques */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-4 rounded-xl shadow-lg border border-[#E5E1D9] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#2C2C2C] text-sm">{feature.title}</h4>
                      <p className="text-xs text-gray-600 mt-1">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bouton d'action */}
            <div className="pt-6">
              <button 
                onClick={() => navigate('/reservation')}
                className="px-8 py-3 bg-gradient-to-r from-[#7C3030] to-[#D4AF37] text-white rounded-lg hover:from-[#6a2828] hover:to-[#C49F2F] transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg flex items-center"
              >
                <span>Réserver votre séjour</span>
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Galerie d'images améliorée */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="h-80 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-700">
                  <img 
                    src="./../../public/M28.jpg" 
                    alt="Vue de la résidence"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="bg-gradient-to-br from-[#7C3030] to-[#9C5050] p-6 rounded-2xl text-white shadow-2xl">
                  <h4 className="font-playfair font-semibold text-lg mb-2">Formule Exclusive</h4>
                  <p className="text-sm opacity-90">
                    Bed & Car avec chauffeur privé inclus pour votre mobilité totale
                  </p>
                </div>
              </div>
              
              <div className="space-y-6 pt-12">
                <div className="bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] p-6 rounded-2xl text-[#2C2C2C] shadow-2xl">
                  <h4 className="font-playfair font-semibold text-lg mb-2">Vue Panoramique</h4>
                  <p className="text-sm opacity-90">
                    Restaurant avec terrasse offrant une vue exceptionnelle sur Cotonou
                  </p>
                </div>
                <div className="h-80 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-700">
                  <img 
                    src="./../../public/M38.jpg" 
                    alt="Restaurant panoramique"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
            
            {/* Élément décoratif flottant */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-[#7C3030]/20 to-[#D4AF37]/20 rounded-full blur-xl"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#D4AF37]/20 to-[#7C3030]/20 rounded-full blur-xl"></div>
          </div>
        </div>

        {/* Section supplémentaire pour les services */}
        <div className="mt-20 bg-gradient-to-r from-[#FAF7F2] to-white rounded-2xl p-8 shadow-xl border border-[#E5E1D9]">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#7C3030] to-[#9C5050] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                {LuxuryIcons.airport}
              </div>
              <h4 className="font-playfair font-semibold text-[#2C2C2C] mb-2">Navette Aéroport</h4>
              <p className="text-sm text-gray-600">
                Service gratuit aux horaires spécifiques sur réservation
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                {LuxuryIcons.car}
              </div>
              <h4 className="font-playfair font-semibold text-[#2C2C2C] mb-2">Bed & Car</h4>
              <p className="text-sm text-gray-600">
                Véhicule avec chauffeur inclus dans nos formules exclusives
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#7C3030] to-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                {LuxuryIcons.restaurant}
              </div>
              <h4 className="font-playfair font-semibold text-[#2C2C2C] mb-2">Événements</h4>
              <p className="text-sm text-gray-600">
                Organisation de mariages, anniversaires et soirées à thème
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;