import { useNavigate } from 'react-router-dom';

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
    available: true
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
    available: true
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
    available: true
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
    available: true
  }
];

const ApartmentShowcase = () => {
  const navigate = useNavigate();
  
  return (
    <section id="apartments" className="py-20 bg-[#F5F2EC]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#2C2C2C] mb-4">
            Notre Catalogue Exclusif
          </h2>
          <div className="w-20 h-1 bg-[#7C3030] mx-auto"></div>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-[#2C2C2C]">
            Découvrez nos appartements et chambres meublés avec élégance, alliant confort absolu et services premium
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apartments.map((apartment, index) => (
            <div key={index} className="bg-white overflow-hidden group relative rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 border border-[#E5E1D9]">
              <div className="h-64 overflow-hidden">
                <img 
                  src={apartment.image} 
                  alt={apartment.type}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/30 transition-colors"></div>
                <div className="absolute top-4 right-4 bg-[#7C3030] text-white text-sm px-3 py-1 rounded-full font-medium">
                  {apartment.available ? "Disponible" : "Sur demande"}
                </div>
                {apartment.minNights && (
                  <div className="absolute top-4 left-4 bg-[#D4AF37] text-[#2C2C2C] text-xs px-2 py-1 rounded-full font-medium">
                    Min. {apartment.minNights} nuits
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-playfair font-semibold mb-2 text-[#2C2C2C]">{apartment.type}</h3>
                <p className="text-sm text-gray-600 mb-4 min-h-[40px]">{apartment.description}</p>
                
                <div className="space-y-4">
                  {/* Prix principal */}
                  <div className="flex justify-between items-center">
                    <span className="text-[#7C3030] font-semibold text-lg">{apartment.price}</span>
                    {apartment.priceElec && (
                      <span className="text-sm text-gray-500">{apartment.priceElec}</span>
                    )}
                  </div>
                  
                  {/* Options semaine/mois pour les appartements */}
                  {(apartment.week || apartment.month) && (
                    <div className="bg-[#FAF7F2] p-3 rounded-lg">
                      <h4 className="text-sm font-semibold text-[#2C2C2C] mb-2">Forfaits longue durée</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {apartment.week && (
                          <div className="text-center">
                            <p className="text-xs text-gray-500">Semaine</p>
                            <p className="text-sm font-medium text-[#7C3030]">{apartment.week}</p>
                          </div>
                        )}
                        {apartment.month && (
                          <div className="text-center">
                            <p className="text-xs text-gray-500">Mois</p>
                            <p className="text-sm font-medium text-[#7C3030]">{apartment.month}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  
                  {/* Informations supplémentaires */}
                  <div className="pt-3 border-t border-gray-100">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <svg className="w-4 h-4 mr-2 text-[#7C3030]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001 1h3a1 1 0 001-1m-6 0V6a1 1 0 011-1h12a1 1 0 011 1v10m-7 极a1 1 0 001 1h3" />
                      </svg>
                      <span>Surface: {apartment.size || "Non spécifiée"}</span>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 mr-2 text-[#7C3030]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 极v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 极 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span>Capacité: {apartment.capacity || "Non spécifiée"}</span>
                    </div>
                  </div>
                  
                  {/* Note sur l'électricité */}
                  {apartment.electricityNote && (
                    <div className="mt-3 p-2 bg-amber-50 rounded border border-amber-200">
                      <p className="text-xs text-amber-700">{apartment.electricityNote}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Informations générales sur les tarifs */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-6 border border-[#E5E1D9]">
          <h3 className="text-xl font-playfair font-semibold text-[#7C3030] mb-4">Informations Tarifaires</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-[#2C2C2C] mb-2">Services Inclus</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-[#7C3030] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Wi-Fi illimité + Canal+
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-[#7C3030] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Climatisation incluse
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-[#7C3030] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 极" />
                  </svg>
                  Ménage régulier
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#2C2C2C] mb-2">Notes Importantes</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Électricité facturée à 300 FCFA/kWh pour les offres "hors élec."
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Minimum 3 nuits pour les appartements
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApartmentShowcase;