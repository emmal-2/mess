import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-r from-[#7C3030]/80 to-[#7C3030]/60 z-10"></div>
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-1000"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
        }}
      ></div>
      
      <div className="relative z-20 text-center text-white px-4 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6">Flamboyant Résidence</h1>
        <p className="text-xl md:text-2xl font-cormorant mb-8 max-w-2xl mx-auto">
          L'excellence d'un séjour luxueux au cœur de Cotonou
        </p>
        <div className="flex justify-center">
          <button 
            className="px-8 py-3.5 bg-white text-[#7C3030] text-lg rounded-sm hover:bg-[#f0f0f0] transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
            onClick={() => document.getElementById('apartments').scrollIntoView({ behavior: 'smooth' })}
          >
            Découvrir nos appartements
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;