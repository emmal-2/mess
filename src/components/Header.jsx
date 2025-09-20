import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-[#FAF7F2] backdrop-blur-md border-b border-[#7C3030]/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-playfair font-bold text-[#7C3030]">Flamboyant Résidence</div>
          
          {/* Navigation Desktop */}
          <nav className="hidden md:flex space-x-10">
            <a href="#about" className="text-[#2C2C2C] hover:text-[#7C3030] transition-colors">À Propos</a>
            <a href="#apartments" className="text-[#2C2C2C] hover:text-[#7C3030] transition-colors">Appartements</a>
            <a href="#services" className="text-[#2C2C2C] hover:text-[#7C3030] transition-colors">Services</a>
            <a href="#contact" className="text-[#2C2C2C] hover:text-[#7C3030] transition-colors">Contact</a>
          </nav>
          
          {/* Menu Mobile */}
          <button 
            className="md:hidden text-[#7C3030]"
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
              <a href="#about" className="text-[#2C2C2C] hover:text-[#7C3030] transition-colors py-2 px-4">À Propos</a>
              <a href="#apartments" className="text-[#2C2C2C] hover:text-[#7C3030] transition-colors py-2 px-4">Appartements</a>
              <a href="#services" className="text-[#2C2C2C] hover:text-[#7C3030] transition-colors py-2 px-4">Services</a>
              <a href="#contact" className="text-[#2C2C2C] hover:text-[#7C3030] transition-colors py-2 px-4">Contact</a>
              <button 
                className="px-6 py-2 bg-[#7C3030] text-white rounded-sm hover:bg-[#6a2828] transition-all mt-2 mx-4"
                onClick={() => navigate('/reservation')}
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