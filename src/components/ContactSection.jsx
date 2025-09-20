const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-[#F5F2EC]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#2C2C2C] mb-4">
            Nous Contacter
          </h2>
          <div className="w-20 h-1 bg-[#7C3030] mx-auto"></div>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-[#2C2C2C]">
            Notre équipe est à votre disposition pour toute demande d'information ou réservation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-playfair font-semibold mb-6 text-[#2C2C2C]">Informations de contact</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-[#7C3030]/10 flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-[#7C3030]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 极 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#2C2C2C]">Adresse</h4>
                  <p className="text-gray-600">Carré 771 Cadjèhoun "von mon secret", Cotonou, Bénin</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-[#7C3030]/10 flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-[#7C3030]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 极 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#2C2C2C]">Téléphone</h4>
                  <p className="text-gray-600">+229 01 46 52 15 55</p>
                  <p className="text-gray-600">+229 01 55 11 70 70</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-[#7C3030]/10 flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-[#7C3030]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#2C2C2C]">Email</h4>
                  <p className="text-gray-600">residenceflamboyant24@gmail.com</p>
                </div>
              </div>
            </div>
            
          </div>
          
          <div>
            <form className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#2C2C2C] mb-1">Nom complet</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2.5 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#7C3030] rounded-sm" 
                  placeholder="Votre nom"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#2C2C2C] mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-极 py-2.5 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#7C3030] rounded-sm" 
                  placeholder="Votre email"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#2C2C2C] mb-1">Téléphone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-2.5 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#7C3030] rounded-sm" 
                  placeholder="Votre téléphone"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#2C2C2C] mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  className="w-full px-4 py-2.5 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#7C3030] rounded-sm" 
                  placeholder="Votre message"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full py-3.5 bg-[#7C3030] text-white hover:bg-[#6a2828] transition-colors duration-300 rounded-sm shadow-md hover:shadow-lg"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;