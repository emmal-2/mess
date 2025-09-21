import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentSection = ({ reservationData, setReservationData, onPaymentSuccess, onBack, nights, total, roomName }) => {
  const [selectedMethod, setSelectedMethod] = useState('momo');
  const [paymentStatus, setPaymentStatus] = useState('idle');
  const [paymentDetails, setPaymentDetails] = useState({
    phone: '',
    network: 'mtn',
  });

  const paymentMethods = [
    {
      id: 'momo',
      name: 'Mobile Money',
      description: 'Paiement via MTN MoMo, MoovMoney ou Waa Celtiis Cash',
      icon: '📱',
      networks: [
        { id: 'mtn', name: 'MTN MoMo', color: 'bg-yellow-100' },
        { id: 'moov', name: 'MoovMoney', color: 'bg-blue-100' },
        { id: 'celtiis', name: 'Waa Celtiis', color: 'bg-green-100' }
      ]
    },
    {
      id: 'bank',
      name: 'Virement Bancaire',
      description: 'Transfert bancaire sécurisé',
      icon: '🏦',
      networks: [
        { id: 'uba', name: 'UBA', color: 'bg-red-100' },
        { id: 'ecobank', name: 'Ecobank', color: 'bg-orange-100' },
        { id: 'boa', name: 'Bank of Africa', color: 'bg-purple-100' }
      ]
    },
    {
      id: 'card',
      name: 'Carte Bancaire',
      description: 'Paiement sécurisé par carte Visa/Mastercard',
      icon: '💳',
      networks: []
    },
    {
      id: 'cash',
      name: 'Paiement en Espèces',
      description: 'Payer à votre arrivée à la résidence',
      icon: '💵',
      networks: []
    }
  ];

  const handlePayment = async () => {
    setPaymentStatus('processing');
    
    // Simulation de traitement de paiement
    try {
      setTimeout(() => {
        setPaymentStatus('success');
        onPaymentSuccess({
          method: selectedMethod,
          transactionId: 'TX' + Date.now(),
          amount: total
        });
      }, 2000);
    } catch (error) {
      setPaymentStatus('error');
    }
  };

  const selectedPayment = paymentMethods.find(method => method.id === selectedMethod);

  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-serif font-semibold text-[#7C3030] mb-6">Finalisez votre réservation</h3>
      
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-[#2C2C2C]">Prénom</label>
            <input
              type="text"
              name="firstName"
              value={reservationData.firstName}
              onChange={(e) => setReservationData({...reservationData, firstName: e.target.value})}
              className="w-full px-4 py-2 border border-[#E5E1D9] focus:outline-none focus:ring-1 focus:ring-[#7C3030] rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-[#2C2C2C]">Nom</label>
            <input
              type="text"
              name="lastName"
              value={reservationData.lastName}
              onChange={(e) => setReservationData({...reservationData, lastName: e.target.value})}
              className="w-full px-4 py-2 border border-[#E5E1D9] focus:outline-none focus:ring-1 focus:ring-[#7C3030] rounded"
              required
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-[#2C2C2C]">Email</label>
            <input
              type="email"
              name="email"
              value={reservationData.email}
              onChange={(e) => setReservationData({...reservationData, email: e.target.value})}
              className="w-full px-4 py-2 border border-[#E5E1D9] focus:outline-none focus:ring-1 focus:ring-[#7C3030] rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-[#2C2C2C]">Téléphone</label>
            <input
              type="tel"
              name="phone"
              value={reservationData.phone}
              onChange={(e) => setReservationData({...reservationData, phone: e.target.value})}
              className="w-full px-4 py-2 border border-[#E5E1D9] focus:outline-none focus:ring-1 focus:ring-[#7C3030] rounded"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-[#2C2C2C]">Demandes spéciales</label>
          <textarea
            name="specialRequests"
            value={reservationData.specialRequests}
            onChange={(e) => setReservationData({...reservationData, specialRequests: e.target.value})}
            rows="4"
            className="w-full px-4 py-2 border border-[#E5E1D9] focus:outline-none focus:ring-1 focus:ring-[#7C3030] rounded"
            placeholder="Précisez vos préférences alimentaires, besoins particuliers, ou toute autre demande..."
          ></textarea>
        </div>

        {/* Section de paiement améliorée */}
        <div className="pt-6 border-t border-[#E5E1D9]">
          <h4 className="text-xl font-serif font-semibold text-[#2C2C2C] mb-4">Méthode de paiement</h4>
          
          {/* Méthodes de paiement */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                  selectedMethod === method.id 
                    ? 'border-[#7C3030] bg-[#7C3030]/5' 
                    : 'border-[#E5E1D9] hover:border-[#7C3030]/50'
                }`}
                onClick={() => setSelectedMethod(method.id)}
              >
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-3">{method.icon}</span>
                  <h4 className="text-lg font-semibold text-[#2C2C2C]">{method.name}</h4>
                </div>
                <p className="text-sm text-[#2C2C2C]">{method.description}</p>
              </div>
            ))}
          </div>

          {/* Détails du paiement */}
          {selectedPayment && (
            <div className="bg-[#F5F2EC] p-6 rounded-lg mb-6">
              <h4 className="text-xl font-semibold text-[#2C2C2C] mb-4">
                Détails pour {selectedPayment.name}
              </h4>

              {selectedMethod === 'momo' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-[#2C2C2C]">
                      Sélectionnez votre réseau
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {selectedPayment.networks.map(network => (
                        <div
                          key={network.id}
                          className={`px-4 py-2 rounded-full cursor-pointer ${
                            paymentDetails.network === network.id 
                              ? 'bg-[#7C3030] text-white' 
                              : `${network.color} text-[#2C2C2C]`
                          }`}
                          onClick={() => setPaymentDetails({...paymentDetails, network: network.id})}
                        >
                          {network.name}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-[#2C2C2C]">
                      Numéro de téléphone
                    </label>
                    <input
                      type="tel"
                      placeholder="Ex: 229 01 23 45 67"
                      value={paymentDetails.phone}
                      onChange={(e) => setPaymentDetails({...paymentDetails, phone: e.target.value})}
                      className="w-full px-4 py-2 border border-[#E5E1D9] focus:outline-none focus:ring-1 focus:ring-[#7C3030] rounded"
                    />
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                    <p className="text-blue-700 text-sm">
                      💡 <strong>Comment ça marche:</strong> Après confirmation, vous recevrez une demande de paiement sur votre mobile pour autoriser la transaction.
                      {paymentDetails.network === 'mtn' && ' Via MTN MoMo API '}
                      {paymentDetails.network === 'moov' && ' Via Moov Money Transfer '}
                      {paymentDetails.network === 'celtiis' && ' Via Waa Celtiis Cash '}
                    </p>
                  </div>
                </div>
              )}

              {selectedMethod === 'bank' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-[#2C2C2C]">
                      Banque
                    </label>
                    <select
                      className="w-full px-4 py-2 border border-[#E5E1D9] focus:outline-none focus:ring-1 focus:ring-[#7C3030] rounded"
                      value={paymentDetails.network}
                      onChange={(e) => setPaymentDetails({...paymentDetails, network: e.target.value})}
                    >
                      {selectedPayment.networks.map(network => (
                        <option key={network.id} value={network.id}>
                          {network.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                    <p className="text-yellow-700 text-sm">
                      <strong>Coordonnées bancaires:</strong><br />
                      Flamboyant Résidence<br />
                      BANK: {paymentDetails.network.toUpperCase()}<br />
                      IBAN: BJ061 2345 6789 1234 5678 9012 34<br />
                      Code Swift: FLAMBJPC<br />
                      Référence: Réservation #{Math.random().toString(36).substring(2, 10).toUpperCase()}
                    </p>
                  </div>
                </div>
              )}

              {selectedMethod === 'card' && (
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-[#2C2C2C]">Numéro de carte</label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-4 py-2 border border-[#E5E1D9] focus:outline-none focus:ring-1 focus:ring-[#7C3030] rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-[#2C2C2C]">Titulaire de la carte</label>
                      <input
                        type="text"
                        placeholder="Nom Prénom"
                        className="w-full px-4 py-2 border border-[#E5E1D9] focus:outline-none focus:ring-1 focus:ring-[#7C3030] rounded"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-[#2C2C2C]">Date d'expiration</label>
                      <input
                        type="text"
                        placeholder="MM/AA"
                        className="w-full px-4 py-2 border border-[#E5E1D9] focus:outline-none focus:ring-1 focus:ring-[#7C3030] rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-[#2C2C2C]">CVV</label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full px-4 py-2 border border-[#E5E1D9] focus:outline-none focus:ring-1 focus:ring-[#7C3030] rounded"
                      />
                    </div>
                    <div className="flex items-end">
                      <div className="flex space-x-2">
                        <div className="w-10 h-6 bg-gray-200 rounded"></div>
                        <div className="w-10 h-6 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedMethod === 'cash' && (
                <div className="text-center py-4">
                  <div className="text-4xl mb-4">💵</div>
                  <p className="text-[#2C2C2C]">
                    Vous pourrez régler votre séjour en espèces à votre arrivée à la résidence.
                    Un acompte de 30% sera demandé pour confirmer votre réservation.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Récapitulatif du prix */}
          <div className="bg-[#7C3030] text-white p-6 rounded-lg mb-6">
            <h4 className="text-xl font-serif font-semibold mb-4">Total à Payer</h4>
            <div className="flex justify-between items-center">
              <span className="text-lg">{nights} nuit(s) - {roomName}</span>
              <span className="text-2xl font-bold">{total.toLocaleString()} FCFA</span>
            </div>
            
            {selectedMethod === 'momo' && (
              <div className="mt-4 text-sm bg-white/20 p-3 rounded">
                <p>Frais de service Mobile Money: <strong>Gratuits</strong></p>
                <p className="text-xs mt-1">Aucun frais supplémentaire ne sera appliqué pour cette transaction</p>
              </div>
            )}
          </div>

          {/* Bouton de paiement */}
          <div className="text-center">
            <button
              onClick={handlePayment}
              disabled={paymentStatus === 'processing' || (selectedMethod === 'momo' && !paymentDetails.phone)}
              className="px-8 py-3 bg-[#7C3030] text-white rounded-lg hover:bg-[#6a2828] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {paymentStatus === 'processing' ? (
                <span>Traitement en cours...</span>
              ) : (
                <span>Payer {total.toLocaleString()} FCFA</span>
              )}
            </button>
            
            {paymentStatus === 'error' && (
              <p className="text-red-600 mt-4">
                Une erreur s'est produite. Veuillez réessayer ou choisir une autre méthode de paiement.
              </p>
            )}
          </div>

          {/* Sécurité et garanties */}
          <div className="mt-8 pt-6 border-t border-[#E5E1D9]">
            <h4 className="text-lg font-semibold text-[#2C2C2C] mb-4">✅ Paiement Sécurisé</h4>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="p-3">
                <div className="text-2xl mb-2">🔒</div>
                <p className="text-sm text-[#2C2C2C]">Transactions cryptées et sécurisées</p>
              </div>
              <div className="p-3">
                <div className="text-2xl mb-2">🛡️</div>
                <p className="text-sm text-[#2C2C2C]">Protection contre la fraude</p>
              </div>
              <div className="p-3">
                <div className="text-2xl mb-2">💾</div>
                <p className="text-sm text-[#2C2C2C]">Aucune donnée bancaire stockée</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 flex justify-between">
          <button
            type="button"
            onClick={onBack}
            className="px-6 py-2 border border-[#7C3030] text-[#7C3030] hover:bg-[#7C3030] hover:text-white transition-colors"
          >
            Retour
          </button>
          <button
            type="button"
            onClick={handlePayment}
            className="px-8 py-2 bg-[#7C3030] text-white hover:bg-[#6a2828] transition-colors"
          >
            Confirmer la réservation
          </button>
        </div>
      </div>
    </div>
  );
};

const ReservationPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('selection');
  const [reservationData, setReservationData] = useState({
    roomType: '',
    checkIn: '',
    checkOut: '',
    adults: 1,
    children: 0,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: '',
    paymentMethod: 'card',
    bedAndCar: false
  });

  const roomTypes = [
    {
      id: 'chambre-simple',
      name: "Chambre simple",
      description: "Chambre élégante et fonctionnelle pour séjour court",
      price: "11800 FCFA/nuit",
      priceElec: "30000 FCFA/nuit (élec. incluse)",
      image: "/M2.jpg",
      details: ["Climatisation", "Wi-Fi illimité", "Canal+", "Service ménage inclus"]
    },
    {
      id: 'appart-1-chambre',
      name: "Appartement 1 chambre salon",
      description: "Espace raffiné avec salon et kitchenette",
      price: "11800 FCFA/jour",
      week: "82600 FCFA/semaine",
      month: "330400 FCFA/mois",
      minNights: 3,
      image: "/M5.jpg",
      details: ["Kitchenette équipée", "Climatisation", "Wi-Fi illimité", "Canal+", "Service ménage inclus"]
    },
    {
      id: 'appart-2-chambres',
      name: "Appartement 2 chambres salon",
      description: "Appartement spacieux avec deux chambres",
      price: "23600 FCFA/jour",
      week: "165200 FCFA/semaine",
      month: "660800 FCFA/mois",
      minNights: 3,
      image: "/M20.jpg",
      details: ["Espace lounge", "2 chambres séparées", "Climatisation", "Wi-Fi illimité", "Canal+"]
    },
    {
      id: 'appart-3-chambres',
      name: "Appartement 3 chambres salon",
      description: "Suite prestigieuse avec trois chambres",
      price: "35400 FCFA/jour",
      week: "247800 FCFA/semaine",
      month: "991200 FCFA/mois",
      minNights: 3,
      image: "/M15.jpg",
      details: ["Suite prestige", "3 chambres luxueuses", "Espace détente", "Climatisation", "Service VIP"]
    }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setReservationData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const calculateNights = () => {
    if (!reservationData.checkIn || !reservationData.checkOut) return 0;
    const checkIn = new Date(reservationData.checkIn);
    const checkOut = new Date(reservationData.checkOut);
    const diffTime = checkOut - checkIn;
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const calculateTotal = () => {
    const room = roomTypes.find(r => r.id === reservationData.roomType);
    if (!room) return 0;
    
    // Extraire le prix numérique
    const priceNum = parseInt(room.price.replace(/\s|FCFA\/?\w+/g, ''));
    return priceNum * calculateNights();
  };

  const handlePaymentSuccess = (paymentResult) => {
    console.log('Paiement réussi:', paymentResult);
    alert('Votre réservation a été confirmée et payée avec succès! Vous recevrez un email de confirmation.');
    navigate('/');
  };

  const selectedRoom = roomTypes.find(room => room.id === reservationData.roomType);
  const roomName = selectedRoom ? selectedRoom.name : '';
  const nights = calculateNights();
  const total = calculateTotal();

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
            Réserver votre séjour d'exception
          </h1>
          <div className="w-20 h-1 bg-[#7C3030] mx-auto"></div>
        </div>

        {/* Navigation par onglets */}
        <div className="flex flex-wrap justify-center mb-12 border-b border-[#7C3030]/20">
          {['selection', 'details', 'paiement'].map((tab) => (
            <button
              key={tab}
              className={`px-6 py-3 font-medium text-sm md:text-base ${activeTab === tab ? 'text-[#7C3030] border-b-2 border-[#7C3030]' : 'text-[#2C2C2C] hover:text-[#7C3030]'}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'selection' && 'Sélection'}
              {tab === 'details' && 'Détails'}
              {tab === 'paiement' && 'Paiement'}
            </button>
          ))}
        </div>

        {/* Contenu des onglets */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-12">
          {/* Sélection de chambre */}
          {activeTab === 'selection' && (
            <div className="space-y-8">
              <h3 className="text-2xl font-serif font-semibold text-[#7C3030] mb-6">Sélectionnez votre hébergement</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                {roomTypes.map((room, index) => (
                  <div 
                    key={index}
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                      reservationData.roomType === room.id 
                        ? 'border-[#7C3030] bg-[#7C3030]/5' 
                        : 'border-[#E5E1D9] hover:border-[#7C3030]/50'
                    }`}
                    onClick={() => {
                      setReservationData({...reservationData, roomType: room.id});
                      setActiveTab('details');
                    }}
                  >
                    {room.image && (
                      <div className="h-48 overflow-hidden mb-4 rounded">
                        <img 
                          src={room.image} 
                          alt={room.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    
                    <h4 className="text-xl font-serif font-semibold text-[#2C2C2C] mb-2">{room.name}</h4>
                    <p className="text-[#2C2C2C] mb-3">{room.description}</p>
                    
                    <div className="mb-4">
                      <p className="text-[#7C3030] font-semibold">{room.price}</p>
                      {room.priceElec && <p className="text-sm text-[#2C2C2C]">{room.priceElec}</p>}
                      {room.week && <p className="text-sm text-[#2C2C2C]">{room.week}</p>}
                      {room.month && <p className="text-sm text-[#2C2C2C]">{room.month}</p>}
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {room.details.map((detail, i) => (
                        <span key={i} className="text-xs bg-[#F5F2EC] text-[#2C2C2C] px-2 py-1 rounded">
                          {detail}
                        </span>
                      ))}
                    </div>
                    
                    <button className="w-full py-2 bg-[#7C3030] text-white rounded hover:bg-[#6a2828] transition-colors">
                      Sélectionner
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Détails de réservation */}
          {activeTab === 'details' && (
            <div className="space-y-8">
              <h3 className="text-2xl font-serif font-semibold text-[#7C3030] mb-6">Détails de votre réservation</h3>
              
              {reservationData.roomType && (
                <div className="bg-[#F5F2EC] p-6 rounded-lg mb-6">
                  <h4 className="text-xl font-semibold text-[#2C2C2C] mb-3">Récapitulatif</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-[#2C2C2C]">Type de logement:</p>
                      <p className="font-semibold text-[#7C3030]">
                        {roomTypes.find(r => r.id === reservationData.roomType)?.name}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-[#2C2C2C]">Prix par nuit:</p>
                      <p className="font-semibold text-[#7C3030]">
                        {roomTypes.find(r => r.id === reservationData.roomType)?.price}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-[#2C2C2C]">Nombre de nuits:</p>
                      <p className="font-semibold text-[#7C3030]">{nights}</p>
                    </div>
                    <div>
                      <p className="text-sm text-[#2C2C2C]">Total:</p>
                      <p className="font-semibold text-[#7C3030]">{total.toLocaleString()} FCFA</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-[#2C2C2C]">Date d'arrivée</label>
                    <input
                      type="date"
                      name="checkIn"
                      value={reservationData.checkIn}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-[#E5E1D9] focus:outline-none focus:ring-1 focus:ring-[#7C3030] rounded"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-[#2C2C2C]">Date de départ</label>
                    <input
                      type="date"
                      name="checkOut"
                      value={reservationData.checkOut}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-[#E5E1D9] focus:outline-none focus:ring-1 focus:ring-[#7C3030] rounded"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-[#2C2C2C]">Adultes</label>
                    <select
                      name="adults"
                      value={reservationData.adults}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-[#E5E1D9] focus:outline-none focus:ring-1 focus:ring-[#7C3030] rounded"
                    >
                      {[1, 2, 3, 4, 5].map(num => (
                        <option key={num} value={num}>{num} {num > 1 ? 'adultes' : 'adulte'}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-[#2C2C2C]">Enfants</label>
                    <select
                      name="children"
                      value={reservationData.children}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-[#E5E1D9] focus:outline-none focus:ring-1 focus:ring-[#7C3030] rounded"
                    >
                      {[0, 1, 2, 3, 4].map(num => (
                        <option key={num} value={num}>{num} {num > 1 ? 'enfants' : 'enfant'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="pt-6 flex justify-between">
                  <button
                    type="button"
                    onClick={() => setActiveTab('selection')}
                    className="px-6 py-2 border border-[#7C3030] text-[#7C3030] hover:bg-[#7C3030] hover:text-white transition-colors"
                  >
                    Retour
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('paiement')}
                    className="px-6 py-2 bg-[#7C3030] text-white hover:bg-[#6a2828] transition-colors"
                    disabled={!reservationData.checkIn || !reservationData.checkOut}
                  >
                    Continuer
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Paiement */}
          {activeTab === 'paiement' && (
            <PaymentSection 
              reservationData={reservationData}
              setReservationData={setReservationData}
              onPaymentSuccess={handlePaymentSuccess}
              onBack={() => setActiveTab('details')}
              nights={nights}
              total={total}
              roomName={roomName}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ReservationPage;