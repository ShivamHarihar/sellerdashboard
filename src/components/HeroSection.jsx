import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-wave-top"></div>
            <div className="container">
                <div className="hero-content">
                    <div className="hero-image">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop" alt="Seller" />
                    </div>
                    <div className="hero-text">
                        <h1>
                            Want to Sell on <span className="text-green">NEROZON?</span>
                        </h1>
                        <p>List your products and sell all anywhere</p>
                        <Link to="/register" className="btn btn-primary">Join Nerozon Now</Link>
                    </div>
                </div>
            </div>
            <div className="hero-wave-bottom"></div>
        </section>
    );
};

export default HeroSection;
