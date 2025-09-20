import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
      details: "Repassage gratuit ; lavage 3 €/kg"
    },
    {
      name: "Restauration",
      details: "Plateau repas du soir inclus si demandé 24h à l'avance"
    },
    {
      name: "Formule Bed & Car",
      details: "16 000 FCFA/nuit ; dépose possible à Lomé sur demande"
    },
    {
      name: "Salle de réunion",
      details: "15 places, équipée de vidéoprojecteur et micro - 15 000 FCFA/jour"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C2C2C] font-sans pt-16">
      <div className="container mx-auto px-6 max-w-6xl py-12">
        <button 
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center text-[#7C3030] hover:text-[#6a2828] transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Retour
        </button>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#2C2C2C] mb-4">
            Flamboyant Résidence - Informations Complètes
          </h1>
          <div className="w-20 h-1 bg-[#7C3030] mx-auto"></div>
        </div>

        {/* Navigation par onglets */}
        <div className="flex flex-wrap justify-center mb-12 border-b border-[#7C3030]/20">
          {['description', 'services', 'tarifs', 'localisation', 'contact'].map((tab) => (
            <button
              key={tab}
              className={`px-6 py-3 font-medium text-sm md:text-base ${activeTab === tab ? 'text-[#7C3030] border-b-2 border-[#7C3030]' : 'text-[#2C2C2C] hover:text-[#7C3030]'}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'description' && 'Description'}
              {tab === 'services' && 'Services'}
              {tab === 'tarifs' && 'Tarifs'}
              {tab === 'localisation' && 'Localisation'}
              {tab === 'contact' && 'Contact'}
            </button>
          ))}
        </div>

        {/* Contenu des onglets */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-12">
          {/* Description */}
          {activeTab === 'description' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-semibold text-[#7C3030] mb-4">À Propos de Flamboyant Résidence</h3>
              <p className="text-lg text-[#2C2C2C]">
                Idéalement situé en plein cœur de Cotonou, à 5 minutes de l'Aéroport International Cardinal Bernardin Gantin, 
                la Résidence le Flamboyant vous accueille dans un environnement moderne, sobre et soigné.
              </p>
              <p className="text-lg text-[#2C2C2C]">
                Composé de 8 chambres individuelles climatisées offrant le Bed and Breakfast ou une formule 
                Bed and Car avec chauffeur inclus et 6 appartements de 2 ou 4 pièces équipées de kitchenette, 
                vous vous sentirez comme chez vous.
              </p>
              <p className="text-lg text-[#2C2C2C]">
                Notre restaurant avec vue panoramique sur Cotonou complète cette expérience d'exception 
                pour des moments inoubliables (mariages, anniversaires, soirées à thème).
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-[#F5F2EC] p-6 rounded-lg">
                  <h4 className="text-xl font-serif font-semibold text-[#7C3030] mb-3">Navette Aéroport</h4>
                  <p className="text-[#2C2C2C]">
                    Service de navette gratuit disponible les Dimanche 21h, Lundi 21h, Mercredi 21h, Vendredi 21h, 
                    sur les vols Air France, Ethiopian, Sky et Royal Air Maroc sur réservation 24h à l'avance.
                  </p>
                </div>

                <div className="bg-[#F5F2EC] p-6 rounded-lg">
                  <h4 className="text-xl font-serif font-semibold text-[#7C3030] mb-3">Offre Spéciale</h4>
                  <p className="text-[#2C2C2C]">
                    Pour tout séjour de plus de 5 nuitées, navette Flixbus gratuite depuis l'aéroport de Lomé 
                    pour les correspondances. Remboursement de 15 000 FCFA sur présentation du ticket de bus 
                    pour les séjours de 6 nuitées minimum (valable du 15 septembre au 15 octobre 2025).
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Services */}
          {activeTab === 'services' && (
            <div className="space-y-8">
              <h3 className="text-2xl font-serif font-semibold text-[#7C3030] mb-6">Nos Services Exclusifs</h3>
              
              <div>
                <h4 className="text-xl font-semibold text-[#2C2C2C] mb-4">Services Inclus</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {includedServices.map((service, index) => (
                    <div key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-[#7C3030] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#2C2C2C]">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-[#2C2C2C] mb-4">Services Supplémentaires</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  {additionalServices.map((service, index) => (
                    <div key={index} className="bg-[#F5F2EC] p-4 rounded-lg">
                      <h5 className="font-semibold text-[#7C3030]">{service.name}</h5>
                      <p className="text-[#2C2C2C] text-sm">{service.details}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#7C3030] text-white p-6 rounded-lg">
                <h4 className="text-xl font-serif font-semibold mb-4">Formule Exclusive Bed & Car</h4>
                <p className="mb-2">
                  • 26 000 FCFA/nuit pour une chambre simple - véhicule avec chauffeur inclus (hors frais de carburation)
                </p>
                <p>
                  • 36 000 FCFA/nuit pour un appartement - mêmes conditions
                </p>
              </div>
            </div>
          )}

          {/* Tarifs */}
          {activeTab === 'tarifs' && (
            <div className="space-y-8">
              <h3 className="text-2xl font-serif font-semibold text-[#7C3030] mb-6">Nos Tarifs</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#7C3030] text-white">
                      <th className="p-4 font-semibold">Type de logement</th>
                      <th className="p-4 font-semibold">Description</th>
                      <th className="p-4 font-semibold">Prix/Nuit</th>
                      <th className="p-4 font-semibold">Prix/Semaine</th>
                      <th className="p-4 font-semibold">Prix/Mois</th>
                    </tr>
                  </thead>
                  <tbody>
                    {apartments.map((apartment, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-[#F5F2EC]'}>
                        <td className="p-4 border-b border-[#7C3030]/20 font-medium text-[#2C2C2C]">{apartment.type}</td>
                        <td className="p-4 border-b border-[#7C3030]/20 text-[#2C2C2C]">{apartment.description}</td>
                        <td className="p-4 border-b border-[#7C3030]/20 text-[#7C3030] font-semibold">{apartment.price}</td>
                        <td className="p-4 border-b border-[#7C3030]/20 text-[#7C3030] font-semibold">{apartment.week || '-'}</td>
                        <td className="p-4 border-b border-[#7C3030]/20 text-[#7C3030] font-semibold">{apartment.month || '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mt-6">
                <p className="text-amber-700">
                  <strong>Note:</strong> Les appartements nécessitent un minimum de 3 nuits. 
                  Électricité facturée à 300 FCFA/kWh pour les offres "hors élec.".
                  Pas de demi-journée pour les chambres simples.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <p className="text-blue-700">
                  <strong>Conditions:</strong> Annulation possible en dernière minute. 
                  Long séjour (≥6 mois) = 3 mois de caution + 50 000 FCFA d'acompte électricité.
                  Tout acompte éventuel est prévu dans un contrat.
                </p>
              </div>
            </div>
          )}

          {/* Localisation */}
          {activeTab === 'localisation' && (
  <div className="space-y-6">
    <h3 className="text-2xl font-serif font-semibold text-[#7C3030] mb-4">Localisation et Accès</h3>
    
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <div className="flex items-start mb-6">
          <div className="w-8 h-8 bg-[#7C3030] rounded-full flex items-center justify-center mr-3 flex-shrink-0">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-[#2C2C2C] mb-2">Adresse Complète</h4>
            <p className="text-[#2C2C2C]">
              FLAMBOYANT Résidence<br />
              Carré 771 Cadjèhoun "von mon secret"<br />
              Cotonou, Bénin
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-semibold text-[#2C2C2C] mb-3">Repères à proximité</h4>
          <ul className="text-[#2C2C2C] space-y-2">
            <li className="flex items-center">
              <svg className="w-4 h-4 text-[#7C3030] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 极 3 3 0 016 0z" />
              </svg>
              Église Bon Pasteur
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 text-[#7C3030] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke极cap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0极" />
              </svg>
              Boulevard de la Nation
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 text-[#7C3030] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0极-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Pharmacie Ste Philomène
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 text-[#7C3030] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Cyber Canada
            </li>
          </ul>
        </div>

        <div className="bg-[#F5F2EC] p-4 rounded-lg">
          <h4 className="text-xl font-semibold text-[#2C2C2C] mb-3">Accès Aéroport</h4>
          <div className="space-y-2">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-[#7C3030] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              <span className="text-[#2C2C2C]"><strong>Distance:</strong> ≈ 2 km</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-[#7C3030] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-[#2C2C2C]"><strong>Temps de trajet:</strong> 6-10 minutes</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-[#7C3030] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-[#2C2C2C]"><strong>Options:</strong> Taxi, Zem, ou Bed & Car sur réservation</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
        </div>
        
        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          <a 
            href="https://maps.google.com/?q=Carr%C3%A9+771+Cadj%C3%A8houn%2C+Cotonou%2C+B%C3%A9nin" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-2 bg-[#7C3030] text-white rounded hover:bg-[#6a2828] transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
            </svg>
            Ouvrir dans Google Maps
          </a>
          
          <button 
            onClick={() => {
              // Fonction pour partager la localisation
              if (navigator.share) {
                navigator.share({
                  title: 'Flamboyant Résidence',
                  text: 'Découvrez Flamboyant Résidence à Cotonou',
                  url: 'https://maps.google.com/?q=Carr%C3%A9+771+Cadj%C3%A8houn%2C+Cotonou%2C+B%C3%A9nin'
                })
              } else {
                // Fallback pour copier le lien
                navigator.clipboard.writeText('https://maps.google.com/?q=Carr%C3%A9+771+Cadj%C3%A8houn%2C+Cotonou%2C+B%C3%A9nin')
                alert('Lien copié dans le presse-papiers!')
              }
            }}
            className="flex items-center justify-center px-4 py-2 bg-white text-[#7C3030] border border-[#7C3030] rounded hover:bg-[#7C3030] hover:text-white transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 极 105.367 2.684 3 3 0 00-5.367-2.684z" />
            </svg>
            Partager la localisation
          </button>
        </div>

        <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
          <p className="text-blue-700 text-sm">
            <strong>Conseil:</strong> Utilisez Waze ou Google Maps pour vous rendre facilement à la résidence. 
            Notre équipe peut également vous envoyer un chauffeur sur réservation.
          </p>
        </div>
      </div>
    </div>

    <div className="bg-[#F5F2EC] p-6 rounded-lg mt-8">
      <h4 className="text-xl font-semibold text-[#2C2C2C] mb-4">Transport depuis l'Aéroport</h4>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="text-center p-4 bg-white rounded-lg">
          <div className="w-12 h-12 bg-[#7C3030] rounded-full flex items-center justify-center mx-auto mb-3">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>
          </div>
          <h5 className="font-semibold text-[#7C3030]">Taxi</h5>
          <p className="text-sm text-[#2C2C2C]">Disponible 24h/24 à l'aéroport</p>
          <p className="text-xs text-gray-500 mt-1">≈ 2 000 FCFA</p>
        </div>

        <div className="text-center p-4 bg-white rounded-lg">
          <div className="w-12 h-12 bg-[#7C3030] rounded-full flex items-center justify-center mx-auto mb-3">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h5 className="font-semibold text-[#7C3030]">Zemidjan</h5>
          <p className="text-sm text-[#2C2C2C]">Moto-taxi économique et rapide</p>
          <p className="text-xs text-gray-500 mt-1">≈ 500 FCFA</p>
        </div>

        <div className="text-center p-4 bg-white rounded-lg">
          <div className="w-12 h-12 bg-[#7C3030] rounded-full flex items-center justify-center mx-auto mb-3">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <h5 className="font-semibold text-[#7C3030]">Service Bed & Car</h5>
          <p className="text-sm text-[#2C2C2C]">Avec chauffeur privé sur réservation</p>
          <p className="text-xs text-gray-500 mt-1">Inclus dans la formule</p>
        </div>
      </div>
    </div>
  </div>
)}

          {/* Contact */}
{activeTab === 'contact' && (
  <div className="space-y-8">
    <h3 className="text-2xl font-serif font-semibold text-[#7C3030] mb-6">Nos Coordonnées</h3>
    
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h4 className="text-xl font-semibold text-[#2C2C2C] mb-4">Contacts Téléphoniques</h4>
        
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="w-8 h-8 bg-[#7C3030] rounded-full flex items-center justify-center mr-3 flex-shrink-0">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-[#2C2C2C]">Réception</p>
              <p className="text-[#2C2C2C]">+229 01 46 52 15 55</p>
              <p className="text-[#2C2C2C]">+229 01 55 11 70 70</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-8 h-8 bg-[#7C3030] rounded-full flex items-center justify-center mr-3 flex-shrink-0">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 19.364" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-[#2C2C2C]">Service Clients</p>
              <p className="text-[#2C2C2C]">+229 01 95 41 51 98</p>
              <p className="text-[#2C2C2C]">+229 01 62 31 71 95</p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="text-xl font-semibold text-[#2C2C2C] mb-4">WhatsApp</h4>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/2290195415198" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center"
            >
              <div className="w-5 h-5 mr-2 bg-white rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.极.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488"/>
                </svg>
              </div>
              Nous écrire (1)
            </a>
            <a 
              href="https://wa.me/2290155117070" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center"
            >
              <div className="w-5 h-5 mr-2 bg-white rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.极-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.极-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.极.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.极 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 极 0012.05 0C5.495 0 .极 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24极6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488"/>
                </svg>
              </div>
              Nous écrire (2)
            </a>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-xl font-semibold text-[#2C2C2C] mb-4">Email et Réseaux Sociaux</h4>
        
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-[#7C3030] rounded-full flex items-center justify-center mr-3 flex-shrink-0">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 极 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <a href="mailto:residenceflamboyant24@gmail.com" className="text-[#2C2C2C] hover:text-[#7C3030] transition-colors">
              residenceflamboyant24@gmail.com
            </a>
          </div>

          <div className="flex items-center">
            <div className="w-8 h-8 bg-[#FF0000] rounded-full flex items-center justify-center mr-3 flex-shrink-0">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </div>
            <a href="https://youtube.com/@Flamboyantr%C3%A9sidence" target="_blank" rel="noopener noreferrer" className="text-[#2C2C2C] hover:text-[#7C3030] transition-colors">
              YouTube: Flamboyant Résidence
            </a>
          </div>

          <div className="flex items-center">
            <div className="w-8 h-8 bg-[#3b5998] rounded-full flex items-center justify-center mr-3 flex-shrink-0">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            <a href="#" className="text-[#2C2C2C] hover:text-[#7C3030] transition-colors">
              Facebook: Flamboyant Résidence Hôtel/Conarex SA
            </a>
          </div>

          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.极-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.极.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
            <a href="#" className="text-[#2C2C2C] hover:text-[#7C3030] transition-colors">
              Instagram: Flamboyant Résidence Hôtel
            </a>
          </div>

          <div className="flex items-center">
            <div className="w-8 h-8 bg-[#0077b5] rounded-full flex items-center justify-center mr-3 flex-shrink-0">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <a href="#" className="text-[#2C2C2C] hover:text-[#7C3030] transition-colors">
              LinkedIn
            </a>
          </div>

          <div className="flex items-center">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mr-3 flex-shrink-0">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </div>
            <a href="#" className="text-[#2C2C2C] hover:text-[#7C3030] transition-colors">
              TikTok: Bed&Car 26000 Fcfa
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-8 p-6 bg-[#F5F2EC] rounded-lg">
      <div className="flex items-center">
        <div className="w-8 h-8 bg-[#7C3030] rounded-full flex items-center justify-center mr-3 flex-shrink-0">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <h4 className="text-xl font-semibold text-[#2C2C2C] mb-1">Horaires d'Ouverture</h4>
          <p className="text-[#2C2C2C]">Notre équipe est disponible de 8h à 12h et de 15h à 23h tous les jours</p>
        </div>
      </div>
    </div>
  </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;