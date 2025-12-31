import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import RegistrationSection from '../components/RegistrationSection';
import FeaturesSection from '../components/FeaturesSection';
import MobileAppSection from '../components/MobileAppSection';
import CategoriesSection from '../components/CategoriesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import StatsBanner from '../components/StatsBanner';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <div className="App">
            <Header />
            <main>
                <HeroSection />
                <AboutSection />
                <RegistrationSection />
                <FeaturesSection />
                <MobileAppSection />
                <CategoriesSection />
                <TestimonialsSection />
                <StatsBanner />
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
