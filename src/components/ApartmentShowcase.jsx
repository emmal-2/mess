import { useNavigate, useLocation } from 'react-router-dom';

const apartments = [
  {
    type: "Chambre Simple",
    description: "Chambre élégante pour séjour court, parfaite pour voyageurs individuels",
    price: "11 800 FCFA/nuit",
    priceElec: "30 000 FCFA/nuit (élec. incluse)",
    electricityNote: "Pas de demi-journée. Électricité en option à 300 FCFA/kWh",
    size: "20 m²",
    capacity: "1-2 personnes",
    image: "./../../public/M1.jpg",
    available: true,
    amenities: ["Climatisation", "Wi-Fi Premium", "Canal+", "Service quotidien", "Salle de bain privée"]
  },
  {
    type: "Appartement 1 Chambre Salon",
    description: "Espace raffiné avec salon et kitchenette séparée",
    price: "11 800 FCFA/jour",
    week: "82 600 FCFA/semaine",
    month: "330 400 FCFA/mois",
    minNights: 3,
    size: "35 m²",
    capacity: "2-3 personnes",
    electricityNote: "Électricité facturée à 300 FCFA/kWh",
    image: "./../../public/M22.jpg",
    available: true,
    amenities: ["Kitchenette équipée", "Espace lounge", "Climatisation centrale", "Wi-Fi Premium", "Service VIP"]
  },
  {
    type: "Appartement 2 Chambres Salon",
    description: "Appartement spacieux avec deux chambres et salon",
    price: "23 600 FCFA/jour",
    week: "165 200 FCFA/semaine",
    month: "660 800 FCFA/mois",
    minNights: 3,
    size: "55 m²",
    capacity: "4-5 personnes",
    electricityNote: "Électricité facturée à 300 FCFA/kWh",
    image: "./../../public/M16.jpg",
    available: true,
    amenities: ["2 chambres séparées", "Salon spacieux", "Cuisine équipée", "Climatisation", "Service conciergerie"]
  },
  {
    type: "Appartement 3 Chambres Salon",
    description: "Suite prestigieuse avec trois chambres et espace de vie",
    price: "35 400 FCFA/jour",
    week: "247 800 FCFA/semaine",
    month: "991 200 FCFA/mois",
    minNights: 3,
    size: "75 m²",
    capacity: "6-7 personnes",
    electricityNote: "Électricité facturée à 300 FCFA/kWh",
    image: "./../../public/M33.jpg",
    available: true,
    amenities: ["Suite prestige", "3 chambres master", "Espace détente", "Service personnalisé", "Vue privilégiée"]
  }
];

// Icônes SVG améliorées et luxueuses
const LuxuryIcons = {
  home: (
    <svg className="w-5 h-5 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    </svg>
  ),
  users: (
    <svg className="w-5 h-5 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 7c0 2.21-1.79 4-4 4S8 9.21 8 7s1.79-4 4-4 4 1.79 4 4zm-4 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"/>
    </svg>
  ),
  check: (
    <svg className="w-4 h-4 text-[#7C3030]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
    </svg>
  ),
  wifi: (
    <svg className="w-5 h-5 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.07 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
    </svg>
  ),
  tv: (
    <svg className="w-5 h-5 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"/>
    </svg>
  ),
  cleaning: (
    <svg className="w-5 h-5 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9.5 6.5l7 7-7 7-7-7 7-7z"/>
    </svg>
  ),
  kitchen: (
    <svg className="w-5 h-5 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2.01L6 2c-1.1 0-2 .89-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.11-.9-1.99-2-1.99zM18 20H6v-9.02h12V20zm0-11H6V4h12v5zM8 5h2v3H8zm0 7h2v5H8z"/>
    </svg>
  ),
  lounge: (
    <svg className="w-5 h-5 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 9v6c0 1.1-.9 2-2 2h-1v-2h1V9H4v6h6v2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2zm-7.5 10h-2v2h2v-2zm-6 0h-2v2h2v-2zm6-6h-2v2h2v-2zm-6 0h-2v2h2v-2z"/>
    </svg>
  ),
  star: (
    <svg className="w-4 h-4 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
    </svg>
  ),
  warning: (
    <svg className="w-5 h-5 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
    </svg>
  )
};

const ApartmentShowcase = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  return (
    <section id="apartments" className="py-20 bg-gradient-to-b from-[#FAF7F2] to-[#F5F2EC]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#2C2C2C] mb-4">
            Notre Collection Exclusive
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#7C3030] to-[#D4AF37] mx-auto mb-6"></div>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-[#2C2C2C] leading-relaxed">
            Découvrez nos appartements et chambres meublés avec élégance, alliant confort absolu et services premium
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {apartments.map((apartment, index) => (
            <div key={index} className="bg-white overflow-hidden group relative rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-700 border border-[#E5E1D9] transform hover:-translate-y-2">
              {/* Badge de luxe */}
              <div className="absolute top-4 left-4 z-20">
                <div className="bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-[#2C2C2C] text-xs px-3 py-1 rounded-full font-semibold shadow-lg flex items-center">
                  {LuxuryIcons.star}
                  <span className="ml-1">LUXE</span>
                </div>
              </div>
              
              <div className="h-72 overflow-hidden relative">
                <img 
                  src={apartment.image} 
                  alt={apartment.type}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Badge disponibilité */}
                <div className="absolute top-4 right-4 bg-[#7C3030] text-white text-sm px-3 py-1 rounded-full font-medium shadow-lg">
                  {apartment.available ? "DISPONIBLE" : "SUR DEMANDE"}
                </div>
                
                {apartment.minNights && (
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full font-medium backdrop-blur-sm">
                    Min. {apartment.minNights} nuits
                  </div>
                )}
              </div>
              
              <div className="p-6 relative">
                {/* Élément décoratif */}
                <div className="absolute -top-4 left-6 w-12 h-1 bg-gradient-to-r from-[#7C3030] to-[#D4AF37] rounded-full"></div>
                
                <h3 className="text-xl font-playfair font-semibold mb-3 text-[#2C2C2C] leading-tight">{apartment.type}</h3>
                <p className="text-sm text-gray-600 mb-4 min-h-[40px] leading-relaxed">{apartment.description}</p>
                
                <div className="space-y-4">
                  {/* Prix principal avec design amélioré */}
                  <div className="bg-gradient-to-r from-[#FAF7F2] to-[#F5F2EC] p-4 rounded-lg border border-[#E5E1D9]">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[#7C3030] font-semibold text-lg font-playfair">{apartment.price}</span>
                      {apartment.priceElec && (
                        <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded-full border">{apartment.priceElec}</span>
                      )}
                    </div>
                    
                    {/* Options semaine/mois pour les appartements */}
                    {(apartment.week || apartment.month) && (
                      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#E5E1D9]">
                        {apartment.week && (
                          <div className="text-center">
                            <p className="text-xs text-gray-500 font-medium">Semaine</p>
                            <p className="text-sm font-semibold text-[#7C3030]">{apartment.week}</p>
                          </div>
                        )}
                        {apartment.month && (
                          <div className="text-center">
                            <p className="text-xs text-gray-500 font-medium">Mois</p>
                            <p className="text-sm font-semibold text-[#7C3030]">{apartment.month}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  
                  {/* Équipements avec icônes luxueuses */}
                  <div className="pt-3 border-t border-gray-100">
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      {LuxuryIcons.home}
                      <span className="ml-2 font-medium">Surface: {apartment.size}</span>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      {LuxuryIcons.users}
                      <span className="ml-2 font-medium">Capacité: {apartment.capacity}</span>
                    </div>
                    
                    {/* Équipements premium */}
                    <div className="grid grid-cols-2 gap-2">
                      {apartment.amenities.slice(0, 4).map((amenity, i) => (
                        <div key={i} className="flex items-center text-xs text-gray-500">
                          {LuxuryIcons.check}
                          <span className="ml-1">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Note sur l'électricité */}
                  {apartment.electricityNote && (
                    <div className="mt-3 p-3 bg-amber-50 rounded-lg border border-amber-200 flex items-start">
                      {LuxuryIcons.warning}
                      <p className="text-xs text-amber-700 ml-2">{apartment.electricityNote}</p>
                    </div>
                  )}
                  
                  {/* Bouton de réservation amélioré */}
                  <button 
                    className="w-full py-3 bg-gradient-to-r from-[#7C3030] to-[#9C5050] text-white rounded-lg hover:from-[#6a2828] hover:to-[#8a4040] transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg flex items-center justify-center group/btn"
                    onClick={() => navigate('/reservation')}
                  >
                    <span>Réserver maintenant</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Informations générales sur les tarifs - Version améliorée */}
        <div className="mt-16 bg-gradient-to-br from-white to-[#FAF7F2] rounded-2xl shadow-2xl p-8 border border-[#E5E1D9] relative overflow-hidden">
          {/* Élément décoratif arrière-plan */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#7C3030]/5 to-[#D4AF37]/5 rounded-full -translate-y-32 translate-x-32"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-playfair font-semibold text-[#7C3030] mb-6 text-center">Services & Conditions Exclusives</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#7C3030] to-[#9C5050] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  {LuxuryIcons.wifi}
                </div>
                <h4 className="font-semibold text-[#2C2C2C] mb-3">Services Inclus</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center justify-center">
                    {LuxuryIcons.check}
                    <span className="ml-2">Wi-Fi Premium illimité</span>
                  </li>
                  <li className="flex items-center justify-center">
                    {LuxuryIcons.check}
                    <span className="ml-2">Canal+ & Netflix</span>
                  </li>
                  <li className="flex items-center justify-center">
                    {LuxuryIcons.check}
                    <span className="ml-2">Service ménage quotidien</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  {LuxuryIcons.warning}
                </div>
                <h4 className="font-semibold text-[#2C2C2C] mb-3">Informations Importantes</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center justify-center">
                    {LuxuryIcons.warning}
                    <span className="ml-2">Électricité: 300 FCFA/kWh</span>
                  </li>
                  <li className="flex items-center justify-center">
                    {LuxuryIcons.warning}
                    <span className="ml-2">Minimum 3 nuits requis</span>
                  </li>
                  <li className="flex items-center justify-center">
                    {LuxuryIcons.warning}
                    <span className="ml-2">Caution pour longs séjours</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#7C3030] to-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-[#2C2C2C] mb-3">Service Conciergerie</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center justify-center">
                    {LuxuryIcons.check}
                    <span className="ml-2">Navette aéroport gratuite</span>
                  </li>
                  <li className="flex items-center justify-center">
                    {LuxuryIcons.check}
                    <span className="ml-2">Réservation restaurants</span>
                  </li>
                  <li className="flex items-center justify-center">
                    {LuxuryIcons.check}
                    <span className="ml-2">Service 24h/24</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-8 pt-6 border-t border-[#E5E1D9]">
              <button 
                className="px-8 py-3 bg-gradient-to-r from-[#7C3030] to-[#D4AF37] text-white rounded-lg hover:from-[#6a2828] hover:to-[#C49F2F] transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg"
                onClick={() => navigate('/reservation')}
              >
                Réserver Votre Séjour d'Exception
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApartmentShowcase;