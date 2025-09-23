import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Icônes SVG premium pour le paiement
const PaymentIcons = {
  momo: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>
  ),
  bank: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 7v2h20V7L12 2zm0 4.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM4 12v6h16v-6H4zm16 8H4v2h16v-2z"/>
    </svg>
  ),
  card: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
    </svg>
  ),
  cash: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.32c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
    </svg>
  ),
  security: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
    </svg>
  ),
  shield: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
    </svg>
  ),
  lock: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
    </svg>
  ),
  check: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
    </svg>
  ),
  network: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.07 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
    </svg>
  ),
  home: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    </svg>
  ),
  users: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 7c0 2.21-1.79 4-4 4S8 9.21 8 7s1.79-4 4-4 4 1.79 4 4zm-4 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"/>
    </svg>
  )
};

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
      icon: PaymentIcons.momo,
      networks: [
        { id: 'mtn', name: 'MTN MoMo', color: 'bg-gradient-to-r from-yellow-100 to-yellow-50' },
        { id: 'moov', name: 'MoovMoney', color: 'bg-gradient-to-r from-blue-100 to-blue-50' },
        { id: 'celtiis', name: 'Waa Celtiis', color: 'bg-gradient-to-r from-green-100 to-green-50' }
      ]
    },
    {
      id: 'bank',
      name: 'Virement Bancaire',
      description: 'Transfert bancaire sécurisé',
      icon: PaymentIcons.bank,
      networks: [
        { id: 'uba', name: 'UBA', color: 'bg-gradient-to-r from-red-100 to-red-50' },
        { id: 'ecobank', name: 'Ecobank', color: 'bg-gradient-to-r from-orange-100 to-orange-50' },
        { id: 'boa', name: 'Bank of Africa', color: 'bg-gradient-to-r from-purple-100 to-purple-50' }
      ]
    },
    {
      id: 'card',
      name: 'Carte Bancaire',
      description: 'Paiement sécurisé par carte Visa/Mastercard',
      icon: PaymentIcons.card,
      networks: []
    },
    {
      id: 'cash',
      name: 'Paiement en Espèces',
      description: 'Payer à votre arrivée à la résidence',
      icon: PaymentIcons.cash,
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
      <div className="text-center mb-8">
        <h3 className="text-3xl font-playfair font-semibold text-[#7C3030] mb-4">Finalisez Votre Réservation</h3>
        <div className="w-24 h-1 bg-gradient-to-r from-[#7C3030] to-[#D4AF37] mx-auto"></div>
      </div>
      
      <div className="space-y-8">
        {/* Informations personnelles avec design amélioré */}
        <div className="bg-gradient-to-br from-white to-[#FAF7F2] rounded-2xl p-8 shadow-xl border border-[#E5E1D9]">
          <h4 className="text-xl font-playfair font-semibold text-[#7C3030] mb-6 flex items-center">
            {PaymentIcons.security}
            <span className="ml-3">Informations Personnelles</span>
          </h4>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-3 text-[#2C2C2C]">Prénom</label>
              <input
                type="text"
                name="firstName"
                value={reservationData.firstName}
                onChange={(e) => setReservationData({...reservationData, firstName: e.target.value})}
                className="w-full px-4 py-3 border border-[#E5E1D9] focus:outline-none focus:ring-2 focus:ring-[#7C3030] rounded-lg bg-white transition-all duration-300"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-3 text-[#2C2C2C]">Nom</label>
              <input
                type="text"
                name="lastName"
                value={reservationData.lastName}
                onChange={(e) => setReservationData({...reservationData, lastName: e.target.value})}
                className="w-full px-4 py-3 border border-[#E5E1D9] focus:outline-none focus:ring-2 focus:ring-[#7C3030] rounded-lg bg-white transition-all duration-300"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <label className="block text-sm font-medium mb-3 text-[#2C2C2C]">Email</label>
              <input
                type="email"
                name="email"
                value={reservationData.email}
                onChange={(e) => setReservationData({...reservationData, email: e.target.value})}
                className="w-full px-4 py-3 border border-[#E5E1D9] focus:outline-none focus:ring-2 focus:ring-[#7C3030] rounded-lg bg-white transition-all duration-300"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-3 text-[#2C2C2C]">Téléphone</label>
              <input
                type="tel"
                name="phone"
                value={reservationData.phone}
                onChange={(e) => setReservationData({...reservationData, phone: e.target.value})}
                className="w-full px-4 py-3 border border-[#E5E1D9] focus:outline-none focus:ring-2 focus:ring-[#7C3030] rounded-lg bg-white transition-all duration-300"
                required
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium mb-3 text-[#2C2C2C]">Demandes spéciales</label>
            <textarea
              name="specialRequests"
              value={reservationData.specialRequests}
              onChange={(e) => setReservationData({...reservationData, specialRequests: e.target.value})}
              rows="4"
              className="w-full px-4 py-3 border border-[#E5E1D9] focus:outline-none focus:ring-2 focus:ring-[#7C3030] rounded-lg bg-white transition-all duration-300"
              placeholder="Précisez vos préférences alimentaires, besoins particuliers, ou toute autre demande..."
            ></textarea>
          </div>
        </div>

        {/* Section de paiement améliorée */}
        <div className="bg-gradient-to-br from-white to-[#FAF7F2] rounded-2xl p-8 shadow-xl border border-[#E5E1D9]">
          <h4 className="text-xl font-playfair font-semibold text-[#7C3030] mb-6 flex items-center">
            {PaymentIcons.card}
            <span className="ml-3">Méthode de Paiement</span>
          </h4>
          
          {/* Méthodes de paiement - Design amélioré */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className={`border-2 rounded-xl p-6 cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                  selectedMethod === method.id 
                    ? 'border-[#7C3030] bg-gradient-to-br from-[#7C3030]/5 to-[#D4AF37]/5 shadow-2xl' 
                    : 'border-[#E5E1D9] hover:border-[#7C3030]/50 bg-white shadow-lg'
                }`}
                onClick={() => setSelectedMethod(method.id)}
              >
                <div className="flex items-center mb-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                    selectedMethod === method.id 
                      ? 'bg-gradient-to-r from-[#7C3030] to-[#D4AF37] text-white' 
                      : 'bg-[#F5F2EC] text-[#7C3030]'
                  }`}>
                    {method.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#2C2C2C]">{method.name}</h4>
                    <p className="text-sm text-[#2C2C2C] opacity-80">{method.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Détails du paiement */}
          {selectedPayment && (
            <div className="bg-gradient-to-br from-[#F5F2EC] to-[#FAF7F2] rounded-xl p-6 mb-8 border border-[#E5E1D9]">
              <h4 className="text-xl font-semibold text-[#2C2C2C] mb-4 flex items-center">
                {PaymentIcons.network}
                <span className="ml-2">Détails pour {selectedPayment.name}</span>
              </h4>

              {selectedMethod === 'momo' && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-3 text-[#2C2C2C]">
                      Sélectionnez votre réseau
                    </label>
                    <div className="grid grid-cols-3 gap-4">
                      {selectedPayment.networks.map(network => (
                        <div
                          key={network.id}
                          className={`p-4 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                            paymentDetails.network === network.id 
                              ? 'bg-gradient-to-r from-[#7C3030] to-[#D4AF37] text-white shadow-2xl' 
                              : `${network.color} text-[#2C2C2C] shadow-lg`
                          }`}
                          onClick={() => setPaymentDetails({...paymentDetails, network: network.id})}
                        >
                          <div className="text-center">
                            <div className="text-lg font-semibold">{network.name}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-3 text-[#2C2C2C]">
                      Numéro de téléphone
                    </label>
                    <input
                      type="tel"
                      placeholder="Ex: 229 01 23 45 67"
                      value={paymentDetails.phone}
                      onChange={(e) => setPaymentDetails({...paymentDetails, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-[#E5E1D9] focus:outline-none focus:ring-2 focus:ring-[#7C3030] rounded-lg bg-white transition-all duration-300"
                    />
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-4 rounded-lg">
                    <p className="text-blue-700 text-sm flex items-center">
                      <span className="text-lg mr-2">💡</span>
                      <span><strong>Comment ça marche:</strong> Après confirmation, vous recevrez une demande de paiement sur votre mobile pour autoriser la transaction.</span>
                    </p>
                  </div>
                </div>
              )}

              {selectedMethod === 'bank' && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-3 text-[#2C2C2C]">
                      Banque
                    </label>
                    <select
                      className="w-full px-4 py-3 border border-[#E5E1D9] focus:outline-none focus:ring-2 focus:ring-[#7C3030] rounded-lg bg-white transition-all duration-300"
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
                  
                  <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-500 p-6 rounded-lg">
                    <h5 className="font-semibold text-amber-700 mb-3">Coordonnées bancaires</h5>
                    <div className="text-sm text-amber-700 space-y-2">
                      <p><strong>Bénéficiaire:</strong> Flamboyant Résidence</p>
                      <p><strong>Banque:</strong> {paymentDetails.network.toUpperCase()}</p>
                      <p><strong>IBAN:</strong> BJ061 2345 6789 1234 5678 9012 34</p>
                      <p><strong>Code Swift:</strong> FLAMBJPC</p>
                      <p><strong>Référence:</strong> Réservation #{Math.random().toString(36).substring(2, 10).toUpperCase()}</p>
                    </div>
                  </div>
                </div>
              )}

              {selectedMethod === 'card' && (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-3 text-[#2C2C2C]">Numéro de carte</label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-4 py-3 border border-[#E5E1D9] focus:outline-none focus:ring-2 focus:ring-[#7C3030] rounded-lg bg-white transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-3 text-[#2C2C2C]">Titulaire de la carte</label>
                      <input
                        type="text"
                        placeholder="Nom Prénom"
                        className="w-full px-4 py-3 border border-[#E5E1D9] focus:outline-none focus:ring-2 focus:ring-[#7C3030] rounded-lg bg-white transition-all duration-300"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-3 text-[#2C2C2C]">Date d'expiration</label>
                      <input
                        type="text"
                        placeholder="MM/AA"
                        className="w-full px-4 py-3 border border-[#E5E1D9] focus:outline-none focus:ring-2 focus:ring-[#7C3030] rounded-lg bg-white transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-3 text-[#2C2C2C]">CVV</label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full px-4 py-3 border border-[#E5E1D9] focus:outline-none focus:ring-2 focus:ring-[#7C3030] rounded-lg bg-white transition-all duration-300"
                      />
                    </div>
                    <div className="flex items-end">
                      <div className="flex space-x-3">
                        <div className="w-12 h-8 bg-gray-300 rounded-lg"></div>
                        <div className="w-12 h-8 bg-gray-300 rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedMethod === 'cash' && (
                <div className="text-center py-8">
                  <div className="text-6xl mb-6">💵</div>
                  <p className="text-[#2C2C2C] text-lg">
                    Vous pourrez régler votre séjour en espèces à votre arrivée à la résidence.
                    Un acompte de 30% sera demandé pour confirmer votre réservation.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Récapitulatif du prix - Design amélioré */}
          <div className="bg-gradient-to-r from-[#7C3030] to-[#9C5050] text-white p-8 rounded-2xl mb-8 shadow-2xl">
            <h4 className="text-2xl font-playfair font-semibold mb-6 text-center">Total à Payer</h4>
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg">{nights} nuit(s) - {roomName}</span>
              <span className="text-3xl font-bold">{total.toLocaleString()} FCFA</span>
            </div>
            
            {selectedMethod === 'momo' && (
              <div className="mt-4 text-sm bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                <p className="flex items-center">
                  {PaymentIcons.check}
                  <span className="ml-2">Frais de service Mobile Money: <strong>Gratuits</strong></span>
                </p>
                <p className="text-xs mt-2 opacity-90">Aucun frais supplémentaire ne sera appliqué pour cette transaction</p>
              </div>
            )}
          </div>

          {/* Bouton de paiement amélioré */}
          <div className="text-center">
            <button
              onClick={handlePayment}
              disabled={paymentStatus === 'processing' || (selectedMethod === 'momo' && !paymentDetails.phone)}
              className="px-12 py-4 bg-gradient-to-r from-[#7C3030] to-[#D4AF37] text-white rounded-xl hover:from-[#6a2828] hover:to-[#C49F2F] transition-all duration-500 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none font-semibold text-lg shadow-2xl flex items-center justify-center mx-auto group/btn"
            >
              {paymentStatus === 'processing' ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Traitement en cours...
                </span>
              ) : (
                <span className="flex items-center">
                  {PaymentIcons.lock}
                  <span className="ml-2">Payer {total.toLocaleString()} FCFA</span>
                </span>
              )}
            </button>
            
            {paymentStatus === 'error' && (
              <p className="text-red-600 mt-6 bg-red-50 p-4 rounded-lg border border-red-200">
                Une erreur s'est produite. Veuillez réessayer ou choisir une autre méthode de paiement.
              </p>
            )}
          </div>

          {/* Sécurité et garanties - Design amélioré */}
          <div className="mt-12 pt-8 border-t border-[#E5E1D9]">
            <h4 className="text-xl font-playfair font-semibold text-[#2C2C2C] mb-6 text-center flex items-center justify-center">
              {PaymentIcons.shield}
              <span className="ml-3">Paiement 100% Sécurisé</span>
            </h4>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-white to-[#FAF7F2] rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-[#7C3030] to-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {PaymentIcons.lock}
                </div>
                <h5 className="font-semibold text-[#2C2C2C] mb-2">Transactions cryptées</h5>
                <p className="text-sm text-[#2C2C2C] opacity-80">Protection SSL 256-bit</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-white to-[#FAF7F2] rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-[#7C3030] to-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {PaymentIcons.security}
                </div>
                <h5 className="font-semibold text-[#2C2C2C] mb-2">Protection anti-fraude</h5>
                <p className="text-sm text-[#2C2C2C] opacity-80">Système de surveillance avancé</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-white to-[#FAF7F2] rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-[#7C3030] to-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {PaymentIcons.check}
                </div>
                <h5 className="font-semibold text-[#2C2C2C] mb-2">Données protégées</h5>
                <p className="text-sm text-[#2C2C2C] opacity-80">Aucune donnée stockée</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="pt-8 flex justify-between">
          <button
            type="button"
            onClick={onBack}
            className="px-8 py-3 border-2 border-[#7C3030] text-[#7C3030] hover:bg-[#7C3030] hover:text-white transition-all duration-300 rounded-lg font-semibold flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Retour aux détails
          </button>
          
          <button
            type="button"
            onClick={handlePayment}
            className="px-10 py-3 bg-gradient-to-r from-[#7C3030] to-[#D4AF37] text-white hover:from-[#6a2828] hover:to-[#C49F2F] transition-all duration-300 rounded-lg font-semibold flex items-center shadow-lg"
          >
            Confirmer la réservation
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
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
      price: "11 800 FCFA/nuit",
      priceElec: "30 000 FCFA/nuit (élec. incluse)",
      image: "/M2.jpg",
      details: ["Climatisation", "Wi-Fi illimité", "Canal+", "Service ménage inclus"],
      size: "20 m²",
      capacity: "1-2 personnes"
    },
    {
      id: 'appart-1-chambre',
      name: "Appartement 1 chambre salon",
      description: "Espace raffiné avec salon et kitchenette",
      price: "11 800 FCFA/jour",
      week: "82 600 FCFA/semaine",
      month: "330 400 FCFA/mois",
      minNights: 3,
      image: "/M5.jpg",
      details: ["Kitchenette équipée", "Climatisation", "Wi-Fi illimité", "Canal+", "Service ménage inclus"],
      size: "35 m²",
      capacity: "2-3 personnes"
    },
    {
      id: 'appart-2-chambres',
      name: "Appartement 2 chambres salon",
      description: "Appartement spacieux avec deux chambres",
      price: "23 600 FCFA/jour",
      week: "165 200 FCFA/semaine",
      month: "660 800 FCFA/mois",
      minNights: 3,
      image: "/M20.jpg",
      details: ["Espace lounge", "2 chambres séparées", "Climatisation", "Wi-Fi illimité", "Canal+"],
      size: "55 m²",
      capacity: "4-5 personnes"
    },
    {
      id: 'appart-3-chambres',
      name: "Appartement 3 chambres salon",
      description: "Suite prestigieuse avec trois chambres",
      price: "35 400 FCFA/jour",
      week: "247 800 FCFA/semaine",
      month: "991 200 FCFA/mois",
      minNights: 3,
      image: "/M15.jpg",
      details: ["Suite prestige", "3 chambres luxueuses", "Espace détente", "Climatisation", "Service VIP"],
      size: "75 m²",
      capacity: "6-7 personnes"
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
          className="mb-8 flex items-center text-[#7C3030] hover:text-[#6a2828] transition-colors group"
        >
          <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Retour à l'accueil
        </button>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-[#2C2C2C] mb-4">
            Réserver votre séjour d'exception
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#7C3030] to-[#D4AF37] mx-auto mb-6"></div>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-[#2C2C2C] leading-relaxed">
            Vivez une expérience unique au cœur de Cotonou avec notre service haut de gamme
          </p>
        </div>

        {/* Navigation par onglets améliorée */}
        <div className="flex flex-wrap justify-center mb-12 border-b border-[#7C3030]/20">
          {['selection', 'details', 'paiement'].map((tab) => (
            <button
              key={tab}
              className={`px-8 py-4 font-medium text-sm md:text-base transition-all duration-300 ${
                activeTab === tab 
                  ? 'text-[#7C3030] border-b-2 border-[#7C3030] bg-gradient-to-b from-white to-[#FAF7F2]' 
                  : 'text-[#2C2C2C] hover:text-[#7C3030] hover:bg-[#FAF7F2]'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'selection' && 'Sélection de la Suite'}
              {tab === 'details' && 'Détails du Séjour'}
              {tab === 'paiement' && 'Paiement Sécurisé'}
            </button>
          ))}
        </div>

        {/* Contenu des onglets */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-12 border border-[#E5E1D9]">
          {/* Sélection de chambre - Version améliorée */}
          {activeTab === 'selection' && (
            <div className="space-y-8">
              <h3 className="text-3xl font-playfair font-semibold text-[#7C3030] mb-8 text-center">Sélectionnez Votre Suite d'Exception</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                {roomTypes.map((room, index) => (
                  <div 
                    key={index}
                    className={`border-2 rounded-2xl p-6 cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                      reservationData.roomType === room.id 
                        ? 'border-[#7C3030] bg-gradient-to-br from-[#7C3030]/5 to-[#D4AF37]/5 shadow-2xl' 
                        : 'border-[#E5E1D9] hover:border-[#7C3030]/50 bg-white shadow-lg'
                    }`}
                    onClick={() => {
                      setReservationData({...reservationData, roomType: room.id});
                      setActiveTab('details');
                    }}
                  >
                    {room.image && (
                      <div className="h-56 overflow-hidden mb-6 rounded-xl">
                        <img 
                          src={room.image} 
                          alt={room.name}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute top-4 right-4 bg-[#7C3030] text-white text-sm px-3 py-1 rounded-full font-medium shadow-lg">
                          LUXE
                        </div>
                      </div>
                    )}
                    
                    <h4 className="text-xl font-playfair font-semibold text-[#2C2C2C] mb-3">{room.name}</h4>
                    <p className="text-[#2C2C2C] mb-4 leading-relaxed">{room.description}</p>
                    
                    <div className="mb-4">
                      <p className="text-[#7C3030] font-semibold text-lg font-playfair">{room.price}</p>
                      {room.priceElec && <p className="text-sm text-[#2C2C2C] mt-1">{room.priceElec}</p>}
                      {room.week && <p className="text-sm text-[#2C2C2C]">{room.week}</p>}
                      {room.month && <p className="text-sm text-[#2C2C2C]">{room.month}</p>}
                    </div>
                    
                    {/* Informations supplémentaires */}
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        {PaymentIcons.home}
                        <span className="ml-2">{room.size}</span>
                      </div>
                      <div className="flex items-center">
                        {PaymentIcons.users}
                        <span className="ml-2">{room.capacity}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {room.details.map((detail, i) => (
                        <span key={i} className="text-xs bg-gradient-to-r from-[#F5F2EC] to-[#FAF7F2] text-[#2C2C2C] px-3 py-1 rounded-full border border-[#E5E1D9]">
                          {detail}
                        </span>
                      ))}
                    </div>
                    
                    <button className="w-full py-3 bg-gradient-to-r from-[#7C3030] to-[#D4AF37] text-white rounded-lg hover:from-[#6a2828] hover:to-[#C49F2F] transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg">
                      Sélectionner cette suite
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Détails de réservation - Version améliorée */}
          {activeTab === 'details' && (
            <div className="space-y-8">
              <h3 className="text-3xl font-playfair font-semibold text-[#7C3030] mb-8 text-center">Détails de Votre Séjour</h3>
              
              {reservationData.roomType && (
                <div className="bg-gradient-to-br from-[#F5F2EC] to-[#FAF7F2] rounded-2xl p-8 mb-8 border border-[#E5E1D9] shadow-lg">
                  <h4 className="text-2xl font-playfair font-semibold text-[#2C2C2C] mb-6 text-center">Récapitulatif de Votre Sélection</h4>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#7C3030] to-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                        {PaymentIcons.home}
                      </div>
                      <p className="text-sm text-[#2C2C2C]">Type de logement</p>
                      <p className="font-semibold text-[#7C3030] text-lg">
                        {roomTypes.find(r => r.id === reservationData.roomType)?.name}
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#7C3030] to-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                        💰
                      </div>
                      <p className="text-sm text-[#2C2C2C]">Prix par nuit</p>
                      <p className="font-semibold text-[#7C3030] text-lg">
                        {roomTypes.find(r => r.id === reservationData.roomType)?.price}
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#7C3030] to-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                        🌙
                      </div>
                      <p className="text-sm text-[#2C2C2C]">Nombre de nuits</p>
                      <p className="font-semibold text-[#7C3030] text-lg">{nights}</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#7C3030] to-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                        📊
                      </div>
                      <p className="text-sm text-[#2C2C2C]">Total</p>
                      <p className="font-semibold text-[#7C3030] text-lg">{total.toLocaleString()} FCFA</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-medium mb-3 text-[#2C2C2C]">Date d'arrivée</label>
                    <input
                      type="date"
                      name="checkIn"
                      value={reservationData.checkIn}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-[#E5E1D9] focus:outline-none focus:ring-2 focus:ring-[#7C3030] rounded-lg bg-white transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-3 text-[#2C2C2C]">Date de départ</label>
                    <input
                      type="date"
                      name="checkOut"
                      value={reservationData.checkOut}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-[#E5E1D9] focus:outline-none focus:ring-2 focus:ring-[#7C3030] rounded-lg bg-white transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-medium mb-3 text-[#2C2C2C]">Adultes</label>
                    <select
                      name="adults"
                      value={reservationData.adults}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-[#E5E1D9] focus:outline-none focus:ring-2 focus:ring-[#7C3030] rounded-lg bg-white transition-all duration-300"
                    >
                      {[1, 2, 3, 4, 5].map(num => (
                        <option key={num} value={num}>{num} {num > 1 ? 'adultes' : 'adulte'}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-3 text-[#2C2C2C]">Enfants</label>
                    <select
                      name="children"
                      value={reservationData.children}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-[#E5E1D9] focus:outline-none focus:ring-2 focus:ring-[#7C3030] rounded-lg bg-white transition-all duration-300"
                    >
                      {[0, 1, 2, 3, 4].map(num => (
                        <option key={num} value={num}>{num} {num > 1 ? 'enfants' : 'enfant'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="pt-8 flex justify-between border-t border-[#E5E1D9]">
                  <button
                    type="button"
                    onClick={() => setActiveTab('selection')}
                    className="px-8 py-3 border-2 border-[#7C3030] text-[#7C3030] hover:bg-[#7C3030] hover:text-white transition-all duration-300 rounded-lg font-semibold flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Retour à la sélection
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('paiement')}
                    className="px-8 py-3 bg-gradient-to-r from-[#7C3030] to-[#D4AF37] text-white hover:from-[#6a2828] hover:to-[#C49F2F] transition-all duration-300 rounded-lg font-semibold flex items-center shadow-lg"
                    disabled={!reservationData.checkIn || !reservationData.checkOut}
                  >
                    Continuer vers le paiement
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
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