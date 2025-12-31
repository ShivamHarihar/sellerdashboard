import React from 'react';
import './FeaturesSection.css';

const FeaturesSection = () => {
    const features = [
        {
            icon: (
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                    <circle cx="40" cy="40" r="35" fill="#FFE8E8" />
                    <path d="M25 35L35 45L55 25" stroke="#FF5252" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="20" y="50" width="40" height="15" rx="2" fill="#FF5252" />
                    <circle cx="25" cy="57" r="3" fill="#333" />
                    <circle cx="55" cy="57" r="3" fill="#333" />
                </svg>
            ),
            title: 'Fast Delivery',
            description: 'Nerozon will make a delivery as soon as possible'
        },
        {
            icon: (
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                    <circle cx="40" cy="40" r="35" fill="#FFF8E1" />
                    <circle cx="35" cy="35" r="12" fill="#FFD700" />
                    <circle cx="50" cy="40" r="10" fill="#FFA500" />
                    <path d="M30 50C30 50 35 55 40 55C45 55 50 50 50 50" stroke="#FF8C00" strokeWidth="2" />
                </svg>
            ),
            title: 'Exclusive Payment',
            description: 'Timely payment for payments keep this in mind'
        },
        {
            icon: (
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                    <circle cx="40" cy="40" r="35" fill="#FFE8F0" />
                    <rect x="25" y="30" width="30" height="35" rx="3" fill="#FF6B9D" />
                    <rect x="30" y="25" width="20" height="5" fill="#FF6B9D" />
                    <circle cx="40" cy="45" r="8" fill="#FFD700" />
                    <path d="M35 45L38 48L45 41" stroke="#FF6B9D" strokeWidth="2" strokeLinecap="round" />
                </svg>
            ),
            title: 'Offers & Discounts',
            description: 'If you want to make a sale offer participate in the offer'
        },
        {
            icon: (
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                    <circle cx="40" cy="40" r="35" fill="#FFF3E0" />
                    <path d="M50 30L40 40L50 50" stroke="#FF8C00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M40 40C40 40 35 35 30 40C25 45 30 50 35 50" stroke="#FF8C00" strokeWidth="3" strokeLinecap="round" />
                    <circle cx="45" cy="40" r="15" stroke="#FF8C00" strokeWidth="2" fill="none" />
                </svg>
            ),
            title: 'Easy Returns',
            description: 'Try this to get minimum return on your product'
        }
    ];

    return (
        <section className="features-section">
            <div className="container">
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
                            <h4 className="feature-title text-green">{feature.title}</h4>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
