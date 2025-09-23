import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// Icônes SVG premium redessinées
const LuxuryIcons = {
  menu: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16"/>
    </svg>
  ),
  close: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12"/>
    </svg>
  ),
  home: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
    </svg>
  ),
  apartment: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
    </svg>
  ),
  services: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z"/>
    </svg>
  ),
  contact: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
    </svg>
  ),
  reservation: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
    </svg>
  ),
  star: (
    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
    </svg>
  )
};

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  // Effet pour détecter le défilement et changer l'apparence du header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu mobile lorsqu'on change de page et détecter la section active
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveLink(location.hash || '#home');
  }, [location]);

  const navigationItems = [
    { href: '#about', label: 'À Propos', icon: LuxuryIcons.home },
    { href: '#apartments', label: 'Appartements', icon: LuxuryIcons.apartment },
    { href: '#services', label: 'Services', icon: LuxuryIcons.services },
    { href: '#contact', label: 'Contact', icon: LuxuryIcons.contact }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-700 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl border-b border-[#E5E1D9]/30 py-3 shadow-2xl' 
        : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo avec effet luxueux */}
          <div 
            className={`flex items-center space-x-3 transition-all duration-500 ${
              isScrolled ? 'text-[#7C3030]' : 'text-white'
            }`}
            onClick={() => navigate('/')}
            style={{ cursor: 'pointer' }}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-[#7C3030] to-[#D4AF37] rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  {LuxuryIcons.star}
                </div>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-[#7C3030] to-[#D4AF37] rounded-full blur-sm opacity-50 -z-10"></div>
            </div>
            <div>
              <div className="text-2xl font-playfair font-bold leading-none">Flamboyant</div>
              <div className="text-sm font-light tracking-widest opacity-90">RÉSIDENCE</div>
            </div>
          </div>
          
          {/* Navigation Desktop avec icônes */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className={`group flex items-center space-x-2 transition-all duration-300 ${
                  isScrolled 
                    ? activeLink === item.href 
                      ? 'text-[#7C3030]' 
                      : 'text-[#2C2C2C] hover:text-[#7C3030]'
                    : activeLink === item.href
                      ? 'text-white'
                      : 'text-white/80 hover:text-white'
                }`}
                onClick={() => setActiveLink(item.href)}
              >
                <div className={`transition-transform duration-300 group-hover:scale-110 ${
                  activeLink === item.href ? 'scale-110' : ''
                }`}>
                  {item.icon}
                </div>
                <span className="font-medium tracking-wide relative">
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#7C3030] to-[#D4AF37] transition-all duration-300 group-hover:w-full ${
                    activeLink === item.href ? 'w-full' : ''
                  }`}></span>
                </span>
              </a>
            ))}
            
            {/* Bouton de réservation premium */}
            <button 
              className="group relative px-8 py-3 bg-gradient-to-r from-[#7C3030] to-[#D4AF37] text-white rounded-full hover:from-[#6a2828] hover:to-[#C49F2F] transition-all duration-500 transform hover:scale-105 shadow-2xl overflow-hidden"
              onClick={() => navigate('/reservation')}
            >
              <div className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <div className="flex items-center space-x-2 relative z-10">
                {LuxuryIcons.reservation}
                <span className="font-semibold tracking-wider">RÉSERVER</span>
              </div>
            </button>
          </nav>
          
          {/* Menu Mobile amélioré */}
          <button 
            className={`lg:hidden relative w-10 h-10 rounded-full backdrop-blur-sm transition-all duration-500 ${
              isScrolled 
                ? 'bg-white/20 text-[#7C3030]' 
                : 'bg-white/10 text-white'
            } ${isMenuOpen ? 'bg-[#7C3030] text-white' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {isMenuOpen ? LuxuryIcons.close : LuxuryIcons.menu}
            </div>
            <div className="absolute inset-0 rounded-full border border-current opacity-20"></div>
          </button>
        </div>
        
        {/* Menu Mobile Dropdown Premium */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 bg-white/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
            <nav className="flex flex-col space-y-1 p-4">
              {navigationItems.map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  className="group flex items-center space-x-4 py-4 px-6 rounded-xl hover:bg-[#7C3030]/5 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-[#7C3030] to-[#D4AF37] rounded-full flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                  <span className="font-medium text-[#2C2C2C] group-hover:text-[#7C3030] transition-colors">
                    {item.label}
                  </span>
                </a>
              ))}
              
              <div className="pt-4 border-t border-[#E5E1D9]/30">
                <button 
                  className="w-full group flex items-center justify-center space-x-3 py-4 px-6 bg-gradient-to-r from-[#7C3030] to-[#D4AF37] text-white rounded-xl hover:from-[#6a2828] hover:to-[#C49F2F] transition-all duration-300 transform hover:scale-105 shadow-lg"
                  onClick={() => {
                    navigate('/reservation');
                    setIsMenuOpen(false);
                  }}
                >
                  {LuxuryIcons.reservation}
                  <span className="font-semibold tracking-wider">RÉSERVER MAINTENANT</span>
                </button>
              </div>
            </nav>
            
            {/* Élément décoratif bas du menu */}
            <div className="h-1 bg-gradient-to-r from-[#7C3030] to-[#D4AF37]"></div>
          </div>
        )}
      </div>

      {/* Élément décoratif de brillance */}
      {!isScrolled && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent pointer-events-none"></div>
      )}
    </header>
  );
};

export default Header;