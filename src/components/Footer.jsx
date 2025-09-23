const Footer = () => {
  // Icônes SVG premium pour le footer
  const LuxuryIcons = {
    phone: (
      <svg className="w-5 h-5 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
      </svg>
    ),
    email: (
      <svg className="w-5 h-5 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
    location: (
      <svg className="w-5 h-5 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    ),
    clock: (
      <svg className="w-5 h-5 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
      </svg>
    ),
    wifi: (
      <svg className="w-5 h-5 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.07 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
      </svg>
    ),
    car: (
      <svg className="w-5 h-5 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
      </svg>
    ),
    star: (
      <svg className="w-4 h-4 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
      </svg>
    )
  };

  const socialLinks = [
    {
      name: "YouTube",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
        </svg>
      ),
      url: "https://youtube.com/@Flamboyantr%C3%A9sidence",
      color: "hover:text-[#FF0000]"
    },
    {
      name: "Facebook",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      url: "#",
      color: "hover:text-[#3b5998]"
    },
    {
      name: "Instagram",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
        </svg>
      ),
      url: "#",
      color: "hover:text-[#E4405F]"
    },
    {
      name: "TikTok",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      ),
      url: "#",
      color: "hover:text-[#000000]"
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-[#1A1A1A] to-[#2C2C2C] text-white pt-16 pb-8 relative overflow-hidden">
      {/* Élément décoratif de fond */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#7C3030] via-[#D4AF37] to-[#7C3030]"></div>
      
      {/* Pattern de fond subtil */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(212, 175, 55, 0.3) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Colonne 1 - Présentation */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#7C3030] to-[#D4AF37] rounded-lg flex items-center justify-center mr-3 shadow-lg">
                <span className="text-white font-playfair font-bold text-lg">F</span>
              </div>
              <h3 className="text-2xl font-playfair font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Flamboyant Résidence
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 text-sm">
              L'excellence d'un séjour luxueux au cœur de Cotonou, à proximité immédiate de l'Aéroport International Cardinal Bernardin Gantin.
            </p>
            
            {/* Badge de certification luxe */}
            <div className="inline-flex items-center bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-[#2C2C2C] px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
              {LuxuryIcons.star}
              <span className="ml-2">Établissement 5 Étoiles</span>
            </div>

            {/* Réseaux sociaux */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:bg-gray-700 ${social.color} border border-gray-700`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Colonne 2 - Navigation */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-6 pb-3 border-b border-gray-700 flex items-center">
              <span className="bg-gradient-to-r from-[#7C3030] to-[#D4AF37] w-3 h-0.5 mr-3"></span>
              Navigation Rapide
            </h4>
            <ul className="space-y-3">
              {['À Propos', 'Appartements', 'Services', 'Galerie', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="flex items-center text-gray-300 hover:text-[#D4AF37] transition-all duration-300 group text-sm"
                  >
                    <span className="w-2 h-2 bg-[#7C3030] rounded-full mr-3 group-hover:bg-[#D4AF37] transition-colors"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 - Coordonnées */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-6 pb-3 border-b border-gray-700 flex items-center">
              <span className="bg-gradient-to-r from-[#7C3030] to-[#D4AF37] w-3 h-0.5 mr-3"></span>
              Nous Contacter
            </h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-lg">
                  {LuxuryIcons.location}
                </div>
                <div>
                  <p className="font-medium text-gray-200">Adresse</p>
                  <p className="text-gray-400 text-sm">Carré 771 Cadjèhoun "von mon secret"</p>
                  <p className="text-gray-400 text-sm">Cotonou, Bénin</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-lg">
                  {LuxuryIcons.phone}
                </div>
                <div>
                  <p className="font-medium text-gray-200">Téléphone</p>
                  <p className="text-gray-400 text-sm">+229 01 46 52 15 55</p>
                  <p className="text-gray-400 text-sm">+229 01 55 11 70 70</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-lg">
                  {LuxuryIcons.email}
                </div>
                <div>
                  <p className="font-medium text-gray-200">Email</p>
                  <p className="text-gray-400 text-sm">residenceflamboyant24@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne 4 - Services */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-6 pb-3 border-b border-gray-700 flex items-center">
              <span className="bg-gradient-to-r from-[#7C3030] to-[#D4AF37] w-3 h-0.5 mr-3"></span>
              Services Exclusifs
            </h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300 text-sm">
                {LuxuryIcons.car}
                <span className="ml-3">Navette Aéroport Gratuite</span>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                {LuxuryIcons.wifi}
                <span className="ml-3">Wi-Fi Premium Illimité</span>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <svg className="w-5 h-5 text-[#D4AF37]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.5 9H13v6h-1.5zM9 9H6c-.6 0-1 .5-1 1v4c0 .5.4 1 1 1h3c.6 0 1-.5 1-1v-2H8.5v1.5h-2v-3H10V10c0-.5-.4-1-1-1zm10 1.5V9h-4.5v6H16v-2h2v-1.5h-2v-1z"/>
                </svg>
                <span className="ml-3">Canal+ & Netflix</span>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                {LuxuryIcons.clock}
                <span className="ml-3">Service 24h/24</span>
              </div>
            </div>

            {/* Horaires */}
            <div className="mt-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <div className="flex items-center text-gray-200 text-sm mb-2">
                {LuxuryIcons.clock}
                <span className="ml-2 font-semibold">Horaires d'Ouverture</span>
              </div>
              <p className="text-gray-400 text-xs">Réception: 8h-12h / 15h-23h</p>
              <p className="text-gray-400 text-xs">Service 24h/24 sur réservation</p>
            </div>
          </div>
        </div>

        {/* Section de copyright améliorée */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Flamboyant Résidence. Tous droits réservés.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Conçu avec l'excellence pour des séjours mémorables
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-[#D4AF37] transition-colors text-xs">Mentions légales</a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors text-xs">Politique de confidentialité</a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors text-xs">CGV</a>
            </div>
          </div>
        </div>

        {/* Élément décoratif final */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center text-gray-500 text-xs">
            <span>Partenaire officiel</span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-3"></div>
            <span>Tourisme d'Excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;