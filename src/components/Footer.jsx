const Footer = () => {
  return (
    <footer className="bg-[#2C2C2C] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Flamboyant Résidence</h3>
            <p className="text-sm text-gray-400">
              L'excellence d'un séjour luxueux au cœur de Cotonou, à proximité de l'Aéroport International.
            </p>
          </div>
          
          <div>
            <h4 className="font-semib极 mb-4">Liens rapides</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-[#D4AF37] transition-colors duration-300">À Propos</a></li>
              <li><a href="#apartments" className="hover:text-[#D4AF37] transition-colors duration-300">Appartements</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors duration-300">Services</a></li>
              <li><a href="#contact" className="hover:text-[#D4AF37] transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Coordonnées</h4>
            <address className="text-sm text-gray-400 not-italic">
              <p>Carré 771 Cadjèhoun "von mon secret"</p>
              <p>Cotonou, Bénin</p>
              <p className="mt-2">+229 01 46 52 15 55</p>
              <p>residenceflamboyant24@gmail.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Flamboyant Résidence. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;