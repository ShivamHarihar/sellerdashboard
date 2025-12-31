import React from 'react';
import './MobileAppSection.css';

const MobileAppSection = () => {
    const features = [
        'Checks and manage listing',
        'Manage orders and more',
        'Track inventory',
        'Pay/Tariff',
        'Advertising',
        'Business Insights',
        'Seller Support and more'
    ];

    return (
        <section className="mobile-app-section section">
            <div className="container">
                <div className="mobile-app-content">
                    {/* Left Side - App Info */}
                    <div className="app-info">
                        <h2>Download the<br /><span className="text-green">Nerozon Seller App</span></h2>
                        <p className="app-description">
                            Now you can download the latest version<br />
                            of Nerozon seller app
                        </p>
                        <div className="app-badges">
                            <a href="#" className="app-badge">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" />
                            </a>
                            <a href="#" className="app-badge">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on App Store" />
                            </a>
                        </div>
                    </div>

                    {/* Center - Phone Mockup */}
                    <div className="phone-mockup">
                        <div className="phone-frame">
                            <div className="phone-screen">
                                <div className="app-header">
                                    <div className="app-logo">NEROZON</div>
                                    <div className="app-title">Seller App</div>
                                </div>
                                <div className="vendor-quality">
                                    <h4>Vendor Quality</h4>
                                    <div className="quality-chart">
                                        <div className="chart-item" style={{ background: '#FF5252' }}>
                                            <span>Product Quality</span>
                                            <strong>5,555</strong>
                                        </div>
                                        <div className="chart-item" style={{ background: '#2196F3' }}>
                                            <span>Delivery</span>
                                            <strong>5,555</strong>
                                        </div>
                                        <div className="chart-item" style={{ background: '#4CAF50' }}>
                                            <span>Customer Service</span>
                                            <strong>5,555</strong>
                                        </div>
                                        <div className="chart-item" style={{ background: '#FFD700' }}>
                                            <span>Outstanding Payments</span>
                                            <strong>5,555</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Features List */}
                    <div className="app-features">
                        {features.map((feature, index) => (
                            <div key={index} className="app-feature-item">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 13L9 17L19 7" stroke="#7ED321" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>{feature}</span>
                            </div>
                        ))}
                        <p className="app-footer-text">
                            Stay connected and in control of your NEROZON business with<br />
                            the seller 1.1.6 App
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MobileAppSection;
