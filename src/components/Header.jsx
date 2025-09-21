import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Effet pour détecter le défilement et changer l'apparence du header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu mobile lorsqu'on change de page
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-[#FAF7F2] backdrop-blur-md border-b border-[#7C3030]/20 py-3 shadow-lg' 
        : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className={`text-2xl font-playfair font-bold transition-colors ${
              isScrolled ? 'text-[#7C3030]' : 'text-white'
            }`}
            onClick={() => navigate('/')}
            style={{ cursor: 'pointer' }}
          >
            Flamboyant Résidence
          </div>
          
          {/* Navigation Desktop */}
          <nav className="hidden md:flex space-x-10 items-center">
            <a 
              href="#about" 
              className={`transition-colors hover:text-[#7C3030] ${
                isScrolled ? 'text-[#2C2C2C]' : 'text-white'
              }`}
            >
              À Propos
            </a>
            <a 
              href="#apartments" 
              className={`transition-colors hover:text-[#7C3030] ${
                isScrolled ? 'text-[#2C2C2C]' : 'text-white'
              }`}
            >
              Appartements
            </a>
            <a 
              href="#services" 
              className={`transition-colors hover:text-[#7C3030] ${
                isScrolled ? 'text-[#2C2C2C]' : 'text-white'
              }`}
            >
              Services
            </a>
            <a 
              href="#contact" 
              className={`transition-colors hover:text-[#7C3030] ${
                isScrolled ? 'text-[#2C2C2C]' : 'text-white'
              }`}
            >
              Contact
            </a>
            <button 
              className="px-6 py-2 bg-[#7C3030] text-white rounded-sm hover:bg-[#6a2828] transition-all border border-[#D4AF37]"
              onClick={() => navigate('/reservation')}
            >
              Réserver
            </button>
          </nav>
          
          {/* Menu Mobile */}
          <button 
            className={`md:hidden transition-colors ${
              isScrolled ? 'text-[#7C3030]' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        
        {/* Menu Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-[#FAF7F2] rounded-lg shadow-lg">
            <nav className="flex flex-col space-y-3">
              <a 
                href="#about" 
                className="text-[#2C2C2C] hover:text-[#7C3030] transition-colors py-2 px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                À Propos
              </a>
              <a 
                href="#apartments" 
                className="text-[#2C2C2C] hover:text-[#7C3030] transition-colors py-2 px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Appartements
              </a>
              <a 
                href="#services" 
                className="text-[#2C2C2C] hover:text-[#7C3030] transition-colors py-2 px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#contact" 
                className="text-[#2C2C2C] hover:text-[#7C3030] transition-colors py-2 px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <button 
                className="px-6 py-2 bg-[#7C3030] text-white rounded-sm hover:bg-[#6a2828] transition-all mt-2 mx-4 border border-[#D4AF37]"
                onClick={() => {
                  navigate('/reservation');
                  setIsMenuOpen(false);
                }}
              >
                Réserver
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;