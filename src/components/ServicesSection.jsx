import { useNavigate } from 'react-router-dom';

const ServicesSection = ({ services }) => {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-20 bg-[#FAF7F2]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#2C2C2C] mb-4">
            Services Exclusifs
          </h2>
          <div className="w-20 h-1 bg-[#7C3030] mx-auto"></div>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-[#2C2C2C]">
            Des prestations haut de gamme pour un séjour d'exception
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center p-6 group hover:bg-white rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#7C3030]/10 flex items-center justify-center group-hover:bg-[#7C3030]/20 transition-colors duration-300 text-2xl">
                {service.icon}
              </div>
              <h3 className="text-xl font-cormorant font-semibold mb-3 text-[#2C2C2C]">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-[#7C3030] text-white p-12 relative rounded-lg shadow-xl overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E')]"></div>
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-playfair font-bold mb-4">Formule Exclusive Bed & Car</h3>
              <p className="mb-4">
                Pour toute réservation Bed & Car à 26 000 FCFA la nuitée pour une chambre simple, 
                un véhicule avec chauffeur vous est mis à disposition (hors frais de carburation).
              </p>
              <p>
                Cette formule passe à 36 000 FCFA pour une réservation Bed & Car dans un appartement 
                (chambre salon) avec les mêmes conditions.
              </p>
            </div>
            <div className="text-center">
              <button 
                className="px-8 py-3 bg-white text-[#7C3030] font-semibold hover:bg-gray-100 transition-all duration-300 rounded-sm shadow-md hover:shadow-lg"
                onClick={() => navigate('/info')}
              >
                En savoir plus
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;