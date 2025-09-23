import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Icônes SVG premium redessinées avec style luxueux
const LuxuryIcons = {
  arrowLeft: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
  ),
  check: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="url(#gradientCheck)"/>
      <defs>
        <linearGradient id="gradientCheck" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C3030"/>
          <stop offset="100%" stopColor="#D4AF37"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  location: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="url(#gradientLocation)"/>
      <defs>
        <linearGradient id="gradientLocation" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C3030"/>
          <stop offset="100%" stopColor="#D4AF37"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  phone: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" fill="url(#gradientPhone)"/>
      <defs>
        <linearGradient id="gradientPhone" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C3030"/>
          <stop offset="100%" stopColor="#D4AF37"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  wifi: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.07 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" fill="url(#gradientWifi)"/>
      <defs>
        <linearGradient id="gradientWifi" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C3030"/>
          <stop offset="100%" stopColor="#D4AF37"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  tv: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z" fill="url(#gradientTv)"/>
      <defs>
        <linearGradient id="gradientTv" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C3030"/>
          <stop offset="100%" stopColor="#D4AF37"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  cleaning: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9.5 6.5l7 7-7 7-7-7 7-7z" fill="url(#gradientCleaning)"/>
      <defs>
        <linearGradient id="gradientCleaning" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C3030"/>
          <stop offset="100%" stopColor="#D4AF37"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  car: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" fill="url(#gradientCar)"/>
      <defs>
        <linearGradient id="gradientCar" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C3030"/>
          <stop offset="100%" stopColor="#D4AF37"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  meeting: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" fill="url(#gradientMeeting)"/>
      <defs>
        <linearGradient id="gradientMeeting" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C3030"/>
          <stop offset="100%" stopColor="#D4AF37"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  warning: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" fill="url(#gradientWarning)"/>
      <defs>
        <linearGradient id="gradientWarning" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37"/>
          <stop offset="100%" stopColor="#F4D03F"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  info: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="url(#gradientInfo)"/>
      <defs>
        <linearGradient id="gradientInfo" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C3030"/>
          <stop offset="100%" stopColor="#9C5050"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  clock: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" fill="url(#gradientClock)"/>
      <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" fill="url(#gradientClock)"/>
      <defs>
        <linearGradient id="gradientClock" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C3030"/>
          <stop offset="100%" stopColor="#D4AF37"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  share: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" fill="url(#gradientShare)"/>
      <defs>
        <linearGradient id="gradientShare" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C3030"/>
          <stop offset="100%" stopColor="#D4AF37"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  email: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="url(#gradientEmail)"/>
      <defs>
        <linearGradient id="gradientEmail" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C3030"/>
          <stop offset="100%" stopColor="#D4AF37"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  star: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="url(#gradientStar)"/>
      <defs>
        <linearGradient id="gradientStar" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37"/>
          <stop offset="100%" stopColor="#F4D03F"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  bed: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M7 14c1.66 0 3-1.34 3-3S8.66 8 7 8s-3 1.34-3 3 1.34 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm12-3h-8v8H3V7H1v10h22v-6c0-2.21-1.79-4-4-4zm2 8h-8V9h6c1.1 0 2 .9 2 2v4z" fill="url(#gradientBed)"/>
      <defs>
        <linearGradient id="gradientBed" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C3030"/>
          <stop offset="100%" stopColor="#D4AF37"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  users: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="url(#gradientUsers)"/>
      <defs>
        <linearGradient id="gradientUsers" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C3030"/>
          <stop offset="100%" stopColor="#D4AF37"/>
        </linearGradient>
      </defs>
    </svg>
  )
};

const CompanyInfo = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('description');

  // Données des appartements
  const apartments = [
    {
      type: "Chambre simple",
      description: "Chambre élégante et fonctionnelle pour séjour court",
      price: "11 800 FCFA/nuit",
      priceElec: "30 000 FCFA/nuit (élec. incluse)",
      image: "https://drive.google.com/uc?export=download&id=1tMt0ZJrvA2hPFUCjN1UgLZVjUBFMn0f"
    },
    {
      type: "Appartement 1 chambre salon",
      description: "Espace raffiné avec salon et kitchenette",
      price: "11 800 FCFA/jour",
      week: "82 600 FCFA/semaine",
      month: "330 400 FCFA/mois",
      minNights: 3
    },
    {
      type: "Appartement 2 chambres salon",
      description: "Appartement spacieux avec deux chambres",
      price: "23 600 FCFA/jour",
      week: "165 200 FCFA/semaine",
      month: "660 800 FCFA/mois",
      minNights: 3
    },
    {
      type: "Appartement 3 chambres salon",
      description: "Suite prestigieuse avec trois chambres",
      price: "35 400 FCFA/jour",
      week: "247 800 FCFA/semaine",
      month: "991 200 FCFA/mois",
      minNights: 3
    }
  ];

  // Services inclus
  const includedServices = [
    "Wi-Fi illimité + Canal+",
    "Climatisation incluse",
    "Ménage régulier",
    "Draps fournis",
    "Kitchenette dans les appartements",
    "Gardiennage 24/7",
    "Parking sécurisé",
    "Groupe électrogène"
  ];

  // Services supplémentaires
  const additionalServices = [
    {
      name: "Blanchisserie",
      details: "Repassage gratuit ; lavage 3 €/kg",
      icon: LuxuryIcons.cleaning
    },
    {
      name: "Restauration",
      details: "Plateau repas du soir inclus si demandé 24h à l'avance",
      icon: LuxuryIcons.tv
    },
    {
      name: "Formule Bed & Car",
      details: "16 000 FCFA/nuit ; dépose possible à Lomé sur demande",
      icon: LuxuryIcons.car
    },
    {
      name: "Salle de réunion",
      details: "15 places, équipée de vidéoprojecteur et micro - 15 000 FCFA/jour",
      icon: LuxuryIcons.meeting
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF7F2] via-[#F5F2EC] to-[#F0EDE8] text-[#2C2C2C] font-sans pt-20">
      <div className="container mx-auto px-6 max-w-7xl py-12">
        {/* Bouton retour ultra luxueux */}
        <button 
          onClick={() => navigate(-1)}
          className="mb-12 flex items-center group transition-all duration-500"
        >
          <div className="w-12 h-12 bg-gradient-to-r from-[#7C3030] to-[#D4AF37] rounded-full flex items-center justify-center mr-4 shadow-2xl group-hover:scale-110 transition-transform group-hover:rotate-[-5deg]">
            {LuxuryIcons.arrowLeft}
          </div>
          <span className="text-[#7C3030] font-semibold text-lg group-hover:text-[#D4AF37] transition-colors">Retour à l'accueil</span>
        </button>

        {/* En-tête premium */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
            <div className="w-80 h-80 bg-gradient-to-r from-[#7C3030]/15 to-[#D4AF37]/15 rounded-full blur-3xl animate-pulse"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-[#2C2C2C] mb-6 relative bg-gradient-to-r from-[#7C3030] to-[#D4AF37] bg-clip-text text-transparent">
            Flamboyant Résidence
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-[#7C3030] via-[#D4AF37] to-[#7C3030] mx-auto mb-6 rounded-full"></div>
          <p className="mt-6 text-xl max-w-3xl mx-auto text-[#2C2C2C] leading-relaxed relative font-light">
            L'excellence d'un séjour luxueux au cœur de Cotonou - Où le prestige rencontre l'élégance
          </p>
        </div>

        {/* Navigation par onglets premium */}
        <div className="flex flex-wrap justify-center mb-16 bg-white/80 backdrop-blur-md rounded-2xl p-2 shadow-2xl border border-[#E5E1D9]/50">
          {['description', 'services', 'tarifs', 'localisation', 'contact'].map((tab) => (
            <button
              key={tab}
              className={`px-8 py-4 font-medium text-sm md:text-base transition-all duration-500 relative mx-2 rounded-xl ${
                activeTab === tab 
                  ? 'bg-gradient-to-r from-[#7C3030] to-[#D4AF37] text-white shadow-lg transform -translate-y-1' 
                  : 'text-[#2C2C2C] hover:text-[#7C3030] hover:bg-white/50'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'description' && 'Description Premium'}
              {tab === 'services' && 'Services Exclusifs'}
              {tab === 'tarifs' && 'Tarifs Prestige'}
              {tab === 'localisation' && 'Localisation'}
              {tab === 'contact' && 'Contact VIP'}
            </button>
          ))}
        </div>

        {/* Contenu des onglets - Design Ultra Luxe */}
        <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-3xl p-8 md:p-12 mb-16 border border-[#E5E1D9]/30 relative overflow-hidden">
          {/* Élément décoratif de fond */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#7C3030]/5 to-[#D4AF37]/5 rounded-full -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#D4AF37]/5 to-[#7C3030]/5 rounded-full translate-y-32 -translate-x-32"></div>

          <div className="relative z-10">
            {/* Description */}
            {activeTab === 'description' && (
              <div className="space-y-12">
                <div className="text-center mb-12">
                  <h3 className="text-4xl font-playfair font-bold text-[#2C2C2C] mb-6 bg-gradient-to-r from-[#7C3030] to-[#D4AF37] bg-clip-text text-transparent">
                    À Propos de Flamboyant Résidence
                  </h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#7C3030] to-[#D4AF37] mx-auto rounded-full"></div>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-8">
                    <div className="text-lg text-[#2C2C2C] leading-relaxed space-y-6">
                      <p className="bg-gradient-to-r from-white to-[#FAF7F2] p-6 rounded-2xl border-l-4 border-[#7C3030] shadow-sm">
                        Idéalement situé en plein cœur de Cotonou, à 5 minutes de l'Aéroport International Cardinal Bernardin Gantin, 
                        la Résidence le Flamboyant vous accueille dans un environnement moderne, sobre et soigné.
                      </p>
                      <p className="bg-gradient-to-r from-white to-[#FAF7F2] p-6 rounded-2xl border-l-4 border-[#D4AF37] shadow-sm">
                        Composé de 8 chambres individuelles climatisées offrant le Bed and Breakfast ou une formule 
                        Bed and Car avec chauffeur inclus et 6 appartements de 2 ou 4 pièces équipées de kitchenette, 
                        vous vous sentirez comme chez vous.
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="bg-gradient-to-br from-[#7C3030] to-[#D4AF37] p-8 rounded-2xl text-white shadow-2xl">
                      <div className="flex items-center mb-6">
                        <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mr-4">
                          {LuxuryIcons.star}
                        </div>
                        <h4 className="text-2xl font-playfair font-semibold">Restaurant Panoramique</h4>
                      </div>
                      <p className="text-white/90 leading-relaxed">
                        Notre restaurant avec vue panoramique sur Cotonou complète cette expérience d'exception 
                        pour des moments inoubliables (mariages, anniversaires, soirées à thème).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-12">
                  <div className="bg-gradient-to-br from-white to-[#FAF7F2] p-8 rounded-2xl border border-[#E5E1D9] shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#7C3030] to-[#9C5050] rounded-full flex items-center justify-center mb-6 shadow-lg">
                      {LuxuryIcons.car}
                    </div>
                    <h4 className="text-2xl font-playfair font-semibold text-[#7C3030] mb-4">Navette Aéroport Premium</h4>
                    <p className="text-[#2C2C2C] leading-relaxed">
                      Service de navette gratuit disponible les Dimanche 21h, Lundi 21h, Mercredi 21h, Vendredi 21h, 
                      sur les vols Air France, Ethiopian, Sky et Royal Air Maroc sur réservation 24h à l'avance.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-white to-[#FAF7F2] p-8 rounded-2xl border border-[#E5E1D9] shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] rounded-full flex items-center justify-center mb-6 shadow-lg">
                      {LuxuryIcons.star}
                    </div>
                    <h4 className="text-2xl font-playfair font-semibold text-[#7C3030] mb-4">Offre Spéciale VIP</h4>
                    <p className="text-[#2C2C2C] leading-relaxed">
                      Pour tout séjour de plus de 5 nuitées, navette Flixbus gratuite depuis l'aéroport de Lomé 
                      pour les correspondances. Remboursement de 15 000 FCFA sur présentation du ticket de bus 
                      pour les séjours de 6 nuitées minimum.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Services */}
            {activeTab === 'services' && (
              <div className="space-y-12">
                <div className="text-center mb-12">
                  <h3 className="text-4xl font-playfair font-bold text-[#2C2C2C] mb-6 bg-gradient-to-r from-[#7C3030] to-[#D4AF37] bg-clip-text text-transparent">
                    Nos Services Exclusifs
                  </h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#7C3030] to-[#D4AF37] mx-auto rounded-full"></div>
                </div>
                
                <div>
                  <h4 className="text-2xl font-semibold text-[#2C2C2C] mb-8 flex items-center justify-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#7C3030] to-[#9C5050] rounded-full flex items-center justify-center mr-4 shadow-lg">
                      {LuxuryIcons.check}
                    </div>
                    Services Inclus dans votre séjour
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    {includedServices.map((service, index) => (
                      <div key={index} className="flex items-center p-4 bg-gradient-to-r from-white to-[#FAF7F2] rounded-xl border border-[#E5E1D9] shadow-sm hover:shadow-md transition-all group">
                        <div className="w-10 h-10 bg-gradient-to-r from-[#7C3030] to-[#D4AF37] rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                          {LuxuryIcons.check}
                        </div>
                        <span className="text-[#2C2C2C] font-medium text-lg">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl font-semibold text-[#2C2C2C] mb-8 flex items-center justify-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] rounded-full flex items-center justify-center mr-4 shadow-lg">
                      {LuxuryIcons.star}
                    </div>
                    Services Supplémentaires Premium
                  </h4>
                  <div className="grid md:grid-cols-2 gap-8">
                    {additionalServices.map((service, index) => (
                      <div key={index} className="bg-gradient-to-br from-white to-[#FAF7F2] p-6 rounded-2xl border border-[#E5E1D9] shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
                        <div className="flex items-center mb-4">
                          <div className="w-14 h-14 bg-gradient-to-r from-[#7C3030] to-[#9C5050] rounded-full flex items-center justify-center mr-4 shadow-lg">
                            {service.icon}
                          </div>
                          <h5 className="font-semibold text-[#7C3030] text-xl">{service.name}</h5>
                        </div>
                        <p className="text-[#2C2C2C] text-lg leading-relaxed">{service.details}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#7C3030] via-[#9C5050] to-[#D4AF37] text-white p-10 rounded-2xl shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4 shadow-lg">
                        {LuxuryIcons.car}
                      </div>
                      <h4 className="text-3xl font-playfair font-semibold">Formule Exclusive Bed & Car</h4>
                    </div>
                    <div className="space-y-4 text-lg">
                      <p className="flex items-center">
                        <span className="w-3 h-3 bg-white rounded-full mr-4 shadow-md"></span>
                        <strong>26 000 FCFA/nuit</strong> pour une chambre simple - véhicule avec chauffeur inclus (hors frais de carburation)
                      </p>
                      <p className="flex items-center">
                        <span className="w-3 h-3 bg-white rounded-full mr-4 shadow-md"></span>
                        <strong>36 000 FCFA/nuit</strong> pour un appartement - mêmes conditions premium
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tarifs */}
            {activeTab === 'tarifs' && (
              <div className="space-y-12">
                <div className="text-center mb-12">
                  <h3 className="text-4xl font-playfair font-bold text-[#2C2C2C] mb-6 bg-gradient-to-r from-[#7C3030] to-[#D4AF37] bg-clip-text text-transparent">
                    Nos Tarifs Prestige
                  </h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#7C3030] to-[#D4AF37] mx-auto rounded-full"></div>
                </div>
                
                <div className="overflow-x-auto rounded-2xl shadow-2xl">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gradient-to-r from-[#7C3030] to-[#D4AF37] text-white">
                        <th className="p-8 font-semibold text-xl font-playfair">Type de logement</th>
                        <th className="p-8 font-semibold text-xl font-playfair">Description</th>
                        <th className="p-8 font-semibold text-xl font-playfair">Prix/Nuit</th>
                        <th className="p-8 font-semibold text-xl font-playfair">Prix/Semaine</th>
                        <th className="p-8 font-semibold text-xl font-playfair">Prix/Mois</th>
                      </tr>
                    </thead>
                    <tbody>
                      {apartments.map((apartment, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-[#FAF7F2]'}>
                          <td className="p-8 border-b border-[#7C3030]/20 font-semibold text-[#2C2C2C] text-lg">{apartment.type}</td>
                          <td className="p-8 border-b border-[#7C3030]/20 text-[#2C2C2C] text-lg">{apartment.description}</td>
                          <td className="p-8 border-b border-[#7C3030]/20 text-[#7C3030] font-bold text-xl">{apartment.price}</td>
                          <td className="p-8 border-b border-[#7C3030]/20 text-[#7C3030] font-semibold text-lg">{apartment.week || '-'}</td>
                          <td className="p-8 border-b border-[#7C3030]/20 text-[#7C3030] font-semibold text-lg">{apartment.month || '-'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-amber-50 to-amber-100 border-l-4 border-amber-500 p-8 rounded-2xl shadow-lg">
                    <div className="flex items-center mb-4">
                      {LuxuryIcons.warning}
                      <h4 className="text-2xl font-semibold text-amber-800 ml-3">Notes importantes</h4>
                    </div>
                    <p className="text-amber-700 text-lg leading-relaxed">
                      Les appartements nécessitent un minimum de 3 nuits. 
                      Électricité facturée à 300 FCFA/kWh pour les offres "hors élec.".
                      Pas de demi-journée pour les chambres simples.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-500 p-8 rounded-2xl shadow-lg">
                    <div className="flex items-center mb-4">
                      {LuxuryIcons.info}
                      <h4 className="text-2xl font-semibold text-blue-800 ml-3">Conditions générales</h4>
                    </div>
                    <p className="text-blue-700 text-lg leading-relaxed">
                      Annulation possible en dernière minute. 
                      Long séjour (≥6 mois) = 3 mois de caution + 50 000 FCFA d'acompte électricité.
                      Tout acompte éventuel est prévu dans un contrat.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Localisation */}
            {activeTab === 'localisation' && (
              <div className="space-y-12">
                <div className="text-center mb-12">
                  <h3 className="text-4xl font-playfair font-bold text-[#2C2C2C] mb-6 bg-gradient-to-r from-[#7C3030] to-[#D4AF37] bg-clip-text text-transparent">
                    Localisation Exclusive
                  </h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#7C3030] to-[#D4AF37] mx-auto rounded-full"></div>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                    <div className="flex items-start mb-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#7C3030] to-[#9C5050] rounded-full flex items-center justify-center mr-6 flex-shrink-0 shadow-2xl">
                        {LuxuryIcons.location}
                      </div>
                      <div>
                        <h4 className="text-2xl font-semibold text-[#2C2C2C] mb-3">Adresse Prestige</h4>
                        <p className="text-[#2C2C2C] text-lg leading-relaxed">
                          FLAMBOYANT Résidence<br />
                          Carré 771 Cadjèhoun "von mon secret"<br />
                          Cotonou, Bénin
                        </p>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-2xl font-semibold text-[#2C2C2C] mb-6 flex items-center">
                        {LuxuryIcons.location}
                        <span className="ml-3">Repères d'exception à proximité</span>
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        {['Église Bon Pasteur', 'Boulevard de la Nation', 'Pharmacie Ste Philomène', 'Cyber Canada'].map((landmark, index) => (
                          <div key={index} className="flex items-center p-3 bg-gradient-to-r from-white to-[#FAF7F2] rounded-xl border border-[#E5E1D9] shadow-sm">
                            <div className="w-3 h-3 bg-gradient-to-r from-[#7C3030] to-[#D4AF37] rounded-full mr-3"></div>
                            <span className="text-[#2C2C2C] font-medium">{landmark}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-white to-[#FAF7F2] p-8 rounded-2xl border border-[#E5E1D9] shadow-xl">
                      <h4 className="text-2xl font-semibold text-[#2C2C2C] mb-6 flex items-center">
                        {LuxuryIcons.car}
                        <span className="ml-3">Accès Aéroport VIP</span>
                      </h4>
                      <div className="space-y-4">
                        {[
                          { icon: LuxuryIcons.location, text: "Distance: ≈ 2 km" },
                          { icon: LuxuryIcons.clock, text: "Temps de trajet: 6-10 minutes" },
                          { icon: LuxuryIcons.car, text: "Options: Taxi, Zem, ou Bed & Car sur réservation" }
                        ].map((item, index) => (
                          <div key={index} className="flex items-center">
                            <div className="w-12 h-12 bg-gradient-to-r from-[#7C3030] to-[#9C5050] rounded-full flex items-center justify-center mr-4 shadow-lg">
                              {item.icon}
                            </div>
                            <span className="text-[#2C2C2C] text-lg font-medium">{item.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.25838970914!2d2.424610274887545!3d6.356881223929711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023553d13b3c5a5%3A0x7a8e9e7b3c4d5e6f!2sCarr%C3%A9%20771%20Cadj%C3%A8houn%2C%20Cotonou%2C%20B%C3%A9nin!5e0!3m2!1sfr!2sfr!4v1234567890123!5m2!1sfr!2sfr"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Localisation de Flamboyant Résidence"
                        className="absolute inset-0"
                      ></iframe>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
                    </div>
                    
                    <div className="mt-8 grid grid-cols-2 gap-4">
                      <a 
                        href="https://maps.google.com/?q=Carr%C3%A9+771+Cadj%C3%A8houn%2C+Cotonou%2C+B%C3%A9nin" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center px-6 py-4 bg-gradient-to-r from-[#7C3030] to-[#9C5050] text-white rounded-xl hover:from-[#6a2828] hover:to-[#8a4040] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                      >
                        {LuxuryIcons.location}
                        <span className="ml-3 font-semibold text-lg">Google Maps</span>
                      </a>
                      
                      <button 
                        onClick={() => {
                          if (navigator.share) {
                            navigator.share({
                              title: 'Flamboyant Résidence',
                              text: 'Découvrez Flamboyant Résidence à Cotonou',
                              url: 'https://maps.google.com/?q=Carr%C3%A9+771+Cadj%C3%A8houn%2C+Cotonou%2C+B%C3%A9nin'
                            })
                          } else {
                            navigator.clipboard.writeText('https://maps.google.com/?q=Carr%C3%A9+771+Cadj%C3%A8houn%2C+Cotonou%2C+B%C3%A9nin')
                            alert('Lien copié dans le presse-papiers!')
                          }
                        }}
                        className="flex items-center justify-center px-6 py-4 bg-white text-[#7C3030] border-2 border-[#7C3030] rounded-xl hover:bg-[#7C3030] hover:text-white transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                      >
                        {LuxuryIcons.share}
                        <span className="ml-3 font-semibold text-lg">Partager</span>
                      </button>
                    </div>

                    <div className="mt-6 bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500 p-6 rounded-xl">
                      <p className="text-blue-700 text-lg">
                        <strong>Service Conciergerie:</strong> Utilisez Waze ou Google Maps pour vous rendre facilement à la résidence. 
                        Notre équipe peut également vous envoyer un chauffeur VIP sur réservation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Contact */}
            {activeTab === 'contact' && (
              <div className="space-y-12">
                <div className="text-center mb-12">
                  <h3 className="text-4xl font-playfair font-bold text-[#2C2C2C] mb-6 bg-gradient-to-r from-[#7C3030] to-[#D4AF37] bg-clip-text text-transparent">
                    Contact VIP
                  </h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#7C3030] to-[#D4AF37] mx-auto rounded-full"></div>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                    <h4 className="text-2xl font-semibold text-[#2C2C2C] mb-8 flex items-center justify-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#7C3030] to-[#9C5050] rounded-full flex items-center justify-center mr-4 shadow-lg">
                        {LuxuryIcons.phone}
                      </div>
                      Contacts Téléphoniques Premium
                    </h4>
                    
                    <div className="space-y-6">
                      {[
                        { type: "Réception", numbers: ["+229 01 46 52 15 55", "+229 01 55 11 70 70"], color: "from-[#7C3030] to-[#9C5050]" },
                        { type: "Service Clients", numbers: ["+229 01 95 41 51 98", "+229 01 62 31 71 95"], color: "from-[#D4AF37] to-[#F4D03F]" }
                      ].map((contact, index) => (
                        <div key={index} className="flex items-start p-6 bg-gradient-to-br from-white to-[#FAF7F2] rounded-2xl border border-[#E5E1D9] shadow-lg hover:shadow-xl transition-all">
                          <div className={`w-14 h-14 bg-gradient-to-r ${contact.color} rounded-full flex items-center justify-center mr-6 flex-shrink-0 shadow-lg`}>
                            {LuxuryIcons.phone}
                          </div>
                          <div>
                            <p className="font-semibold text-[#2C2C2C] text-xl mb-2">{contact.type}</p>
                            {contact.numbers.map((number, idx) => (
                              <p key={idx} className="text-[#7C3030] font-medium text-lg">{number}</p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <h4 className="text-2xl font-semibold text-[#2C2C2C] mb-6">WhatsApp VIP</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { number: "2290195415198", label: "WhatsApp (1)" },
                          { number: "2290155117070", label: "WhatsApp (2)" }
                        ].map((whatsapp, index) => (
                          <a 
                            key={index}
                            href={`https://wa.me/${whatsapp.number}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-6 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-700 hover:to-green-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
                          >
                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488"/>
                              </svg>
                            </div>
                            {whatsapp.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-2xl font-semibold text-[#2C2C2C] mb-8 flex items-center justify-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] rounded-full flex items-center justify-center mr-4 shadow-lg">
                        {LuxuryIcons.email}
                      </div>
                      Réseaux Sociaux & Email
                    </h4>
                    
                    <div className="space-y-6">
                      {[
                        { platform: "Email", handle: "residenceflamboyant24@gmail.com", icon: LuxuryIcons.email, color: "from-[#7C3030] to-[#9C5050]" },
                        { platform: "YouTube", handle: "@FlamboyantRésidence", icon: LuxuryIcons.tv, color: "from-[#FF0000] to-[#FF3333]" },
                        { platform: "Facebook", handle: "Flamboyant Résidence Hôtel", icon: LuxuryIcons.share, color: "from-[#3b5998] to-[#4c70ba]" },
                        { platform: "Instagram", handle: "@flamboyantresidence", icon: LuxuryIcons.star, color: "from-purple-500 to-pink-500" },
                        { platform: "TikTok", handle: "Bed&Car 26000 Fcfa", icon: LuxuryIcons.tv, color: "from-black to-gray-800" }
                      ].map((social, index) => (
                        <a 
                          key={index}
                          href="#" 
                          className="flex items-center p-6 bg-gradient-to-br from-white to-[#FAF7F2] rounded-2xl border border-[#E5E1D9] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                        >
                          <div className={`w-14 h-14 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center mr-6 group-hover:scale-110 transition-transform shadow-lg`}>
                            {social.icon}
                          </div>
                          <div>
                            <p className="font-semibold text-[#2C2C2C] text-xl group-hover:text-[#7C3030] transition-colors">{social.platform}</p>
                            <p className="text-[#2C2C2C] text-lg">{social.handle}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#7C3030] via-[#9C5050] to-[#D4AF37] text-white p-10 rounded-2xl shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>
                  
                  <div className="relative z-10 flex items-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-6 shadow-2xl">
                      {LuxuryIcons.clock}
                    </div>
                    <div>
                      <h4 className="text-2xl font-semibold mb-2">Horaires d'Ouverture VIP</h4>
                      <p className="text-white/90 text-lg">Notre équipe est disponible de 8h à 12h et de 15h à 23h tous les jours pour un service exclusif</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;