import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: 'reservation'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Données du formulaire:', formData);
    alert('Votre message a été envoyé avec succès! Nous vous répondrons dans les plus brefs délais.');
    setFormData({ name: '', email: '', phone: '', message: '', subject: 'reservation' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Icônes SVG corrigées
  const LuxuryIcons = {
    location: (
      <svg className="w-6 h-6 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    ),
    phone: (
      <svg className="w-6 h-6 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
      </svg>
    ),
    email: (
      <svg className="w-6 h-6 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
    clock: (
      <svg className="w-6 h-6 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
      </svg>
    ),
    whatsapp: (
      <svg className="w-6 h-6 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488"/>
      </svg>
    ),
    send: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
      </svg>
    )
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#FAF7F2] to-[#F5F2EC] relative overflow-hidden">
      {/* Élément décoratif de fond */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-[#7C3030]/10 to-[#D4AF37]/10 rounded-full -translate-x-36 -translate-y-36"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#7C3030]/5 to-[#D4AF37]/5 rounded-full translate-x-48 translate-y-48"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#2C2C2C] mb-4">
            Contactez Notre Équipe
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#7C3030] to-[#D4AF37] mx-auto mb-6"></div>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-[#2C2C2C] leading-relaxed">
            Notre conciergerie dédiée est à votre écoute pour personnaliser votre séjour d'exception
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Informations de contact - Version améliorée */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-[#E5E1D9] h-full">
              <h3 className="text-2xl font-playfair font-semibold mb-8 text-[#2C2C2C] text-center">Coordonnées Exclusives</h3>
              
              <div className="space-y-8">
                {/* Adresse */}
                <div className="flex items-start group">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7C3030]/10 to-[#D4AF37]/10 flex items-center justify-center mr-4 transition-all duration-300 group-hover:scale-110">
                    {LuxuryIcons.location}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2C2C2C] text-lg mb-1">Adresse Prestige</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Carré 771 Cadjèhoun "von mon secret"<br />
                      Cotonou, Bénin
                    </p>
                    <a 
                      href="https://maps.google.com/?q=Carr%C3%A9+771+Cadj%C3%A8houn%2C+Cotonou%2C+B%C3%A9nin" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#7C3030] text-sm mt-2 inline-flex items-center hover:text-[#D4AF37] transition-colors"
                    >
                      Voir sur Google Maps
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                      </svg>
                    </a>
                  </div>
                </div>
                
                {/* Téléphone */}
                <div className="flex items-start group">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7C3030]/10 to-[#D4AF37]/10 flex items-center justify-center mr-4 transition-all duration-300 group-hover:scale-110">
                    {LuxuryIcons.phone}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2C2C2C] text-lg mb-1">Téléphone</h4>
                    <div className="space-y-1">
                      <p className="text-gray-600">+229 01 46 52 15 55</p>
                      <p className="text-gray-600">+229 01 55 11 70 70</p>
                    </div>
                    <div className="flex space-x-3 mt-3">
                      <a 
                        href="tel:+2290146521555" 
                        className="bg-[#7C3030] text-white px-3 py-1 rounded-full text-sm hover:bg-[#6a2828] transition-colors"
                      >
                        Appeler
                      </a>
                      <a 
                        href="https://wa.me/2290146521555" 
                        className="bg-[#25D366] text-white px-3 py-1 rounded-full text-sm hover:bg-[#128C7E] transition-colors flex items-center"
                      >
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488"/>
                        </svg>
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-start group">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7C3030]/10 to-[#D4AF37]/10 flex items-center justify-center mr-4 transition-all duration-300 group-hover:scale-110">
                    {LuxuryIcons.email}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2C2C2C] text-lg mb-1">Email</h4>
                    <p className="text-gray-600">residenceflamboyant24@gmail.com</p>
                    <a 
                      href="mailto:residenceflamboyant24@gmail.com" 
                      className="text-[#7C3030] text-sm mt-2 inline-block hover:text-[#D4AF37] transition-colors"
                    >
                      Envoyer un email
                    </a>
                  </div>
                </div>
                
                {/* Horaires */}
                <div className="flex items-start group">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7C3030]/10 to-[#D4AF37]/10 flex items-center justify-center mr-4 transition-all duration-300 group-hover:scale-110">
                    {LuxuryIcons.clock}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2C2C2C] text-lg mb-1">Horaires d'ouverture</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Lundi - Dimanche: 8h - 23h<br />
                      <span className="text-sm text-[#7C3030]">Service d'urgence 24h/24 disponible</span>
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Réseaux sociaux */}
              <div className="mt-8 pt-6 border-t border-[#E5E1D9]">
                <h4 className="font-semibold text-[#2C2C2C] mb-4 text-center">Suivez-nous</h4>
                <div className="flex justify-center space-x-4">
                  {[
                    { name: 'YouTube', color: 'bg-red-600', icon: '▶', link: 'https://youtube.com/@Flamboyantr%C3%A9sidence' },
                    { name: 'Facebook', color: 'bg-blue-600', icon: 'f', link: '#' },
                    { name: 'Instagram', color: 'bg-gradient-to-r from-purple-500 to-pink-500', icon: '📸', link: '#' },
                    { name: 'TikTok', color: 'bg-black', icon: '🎵', link: '#' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-full ${social.color} text-white flex items-center justify-center text-sm font-semibold hover:scale-110 transition-transform duration-300 shadow-lg`}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Formulaire de contact - Version améliorée */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-[#E5E1D9] h-full">
              <h3 className="text-2xl font-playfair font-semibold mb-2 text-[#2C2C2C] text-center">
                Formulaire de Contact Privilégié
              </h3>
              <p className="text-gray-600 text-center mb-8">Notre équipe vous répond sous 2 heures maximum</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[#2C2C2C] mb-2">
                      Nom complet *
                    </label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#E5E1D9] focus:outline-none focus:ring-2 focus:ring-[#7C3030] rounded-lg transition-all duration-300 bg-[#FAF7F2]/50"
                      placeholder="Votre nom et prénom"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-[#2C2C2C] mb-2">
                      Objet de votre message
                    </label>
                    <select 
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#E5E1D9] focus:outline-none focus:ring-2 focus:ring-[#7C3030] rounded-lg transition-all duration-300 bg-[#FAF7F2]/50"
                    >
                      <option value="reservation">Réservation</option>
                      <option value="information">Demande d'information</option>
                      <option value="group">Séjour de groupe</option>
                      <option value="event">Événement</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[#2C2C2C] mb-2">
                      Email *
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#E5E1D9] focus:outline-none focus:ring-2 focus:ring-[#7C3030] rounded-lg transition-all duration-300 bg-[#FAF7F2]/50"
                      placeholder="votre@email.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-[#2C2C2C] mb-2">
                      Téléphone
                    </label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#E5E1D9] focus:outline-none focus:ring-2 focus:ring-[#7C3030] rounded-lg transition-all duration-300 bg-[#FAF7F2]/50"
                      placeholder="+229 XX XX XX XX"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#2C2C2C] mb-2">
                    Message détaillé *
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-3 border border-[#E5E1D9] focus:outline-none focus:ring-2 focus:ring-[#7C3030] rounded-lg transition-all duration-300 bg-[#FAF7F2]/50 resize-none"
                    placeholder="Décrivez-nous votre projet de séjour, vos attentes particulières, ou toute demande spécifique..."
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full py-4 bg-gradient-to-r from-[#7C3030] to-[#D4AF37] text-white hover:from-[#6a2828] hover:to-[#C49F2F] transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] font-semibold text-lg flex items-center justify-center group"
                >
                  <span>Envoyer mon message privilégié</span>
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                  </svg>
                </button>
                
                <p className="text-center text-sm text-gray-500 mt-4">
                  * Champs obligatoires. Nous traitons vos données avec la plus grande confidentialité.
                </p>
              </form>
            </div>
          </div>
        </div>
        
        {/* CTA supplémentaire */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-[#7C3030] to-[#D4AF37] rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-playfair font-semibold mb-2">Service Conciergerie 24h/24</h3>
            <p className="mb-4 opacity-90">Pour les demandes urgentes en dehors des horaires d'ouverture</p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a 
                href="tel:+2290195415198" 
                className="bg-white text-[#7C3030] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
                Urgence: +229 01 95 41 51 98
              </a>
              <a 
                href="https://wa.me/2290195415198" 
                className="bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#128C7E] transition-colors flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488"/>
                </svg>
                WhatsApp Urgence
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;