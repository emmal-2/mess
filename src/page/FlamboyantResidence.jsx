import { useState } from 'react';
import Header from './../components/Header';
import HeroSection from './../components/HeroSection';
import AboutSection from './../components/AboutSection';
import ApartmentShowcase from './../components/ApartmentShowcase';
import ServicesSection from './../components/ServicesSection';
import LuxuryGallery from './../components/LuxuryGallery';
import ContactSection from './../components/ContactSection';
import Footer from './../components/Footer';

// Configuration des polices personnalisées
const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;500&family=Montserrat:wght@300;400;500;600&display=swap');
`;

const FlamboyantResidence = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Données des appartements
  const apartments = [
    {
      type: "Chambre simple",
      description: "Chambre élégante et fonctionnelle pour séjour court",
      price: "11 800 FCFA/nuit",
      image: "https://drive.google.com/uc?export=download&id=1tMt0ZJrvA2hPFUCjN1UgLZVjUBFMn0f"
    },
    {
      type: "Appartement 1 chambre salon",
      description: "Espace raffiné avec salon et chambre séparée",
      price: "11 800 FCFA/jour",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      type: "Appartement 2 chambres salon",
      description: "Appartement spacieux avec deux chambres et salon",
      price: "23 600 FCFA/jour",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      type: "Appartement 3 chambres salon",
      description: "Suite prestigieuse avec trois chambres et espace de vie",
      price: "35 400 FCFA/jour",
      image: "https://images.unsplash.com/photo-1616587226157-48e49175ee20?ixlib=rb-4.0.3&极id=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  // Services exclusifs
  const services = [
    {
      title: "Navette Aéroport",
      description: "Service de navette gratuit aux horaires spécifiques sur réservation",
      icon: "🚐"
    },
    {
      title: "Formule Bed & Car",
      description: "Véhicule avec chauffeur inclus pour votre mobilité",
      icon: "🚗"
    },
    {
      title: "Restaurant Panoramique",
      description: "Vue imprenable sur Cotonou avec une cuisine d'exception",
      icon: "🍽️"
    },
    {
      title: "Services Sur Mesure",
      description: "Blanchisserie, ménage régulier et repas sur demande",
      icon: "✨"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C2C2C] font-montserrat">
      <style>{fontStyles}</style>
      
      <Header />
      <HeroSection />
      <AboutSection />
      <ApartmentShowcase apartments={apartments} />
      <ServicesSection services={services} />
      <LuxuryGallery />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default FlamboyantResidence;