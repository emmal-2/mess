const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-[#FAF7F2]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#2C2C2C] mb-4">
            Un havre de paix au cœur de Cotonou
          </h2>
          <div className="w-20 h-1 bg-[#7C3030] mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-lg mb-6 leading-relaxed text-[#2C2C2C]">
              Idéalement situé en plein cœur de Cotonou, à 5 minutes de l'Aéroport International, 
              la Résidence le Flamboyant vous accueille dans un environnement moderne, sobre et soigné.
            </p>
            <p className="text-lg mb-6 leading-relaxed text-[#2C2C2C]">
              Composé de 8 chambres individuelles climatisées offrant le Bed and Breakfast ou une formule 
              Bed and Car avec chauffeur inclus et 6 appartements de 2 ou 4 pièces équipées de kitchenette, 
              vous vous sentirez comme chez vous.
            </p>
            <p className="text-lg leading-relaxed text-[#2C2C2C]">
              Notre restaurant avec vue panoramique sur Cotonou complète cette expérience d'exception 
              pour des moments inoubliables.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="h-64 bg-gray-200 bg-cover bg-center rounded-lg shadow-lg" style={{ backgroundImage: "url('./../../public/M28.jpg')" }}></div>
            <div className="h-64 bg-gray-200 bg-cover bg-center rounded-lg shadow-lg mt-10" style={{ backgroundImage: "url('./../../public/M38.jpg')" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;