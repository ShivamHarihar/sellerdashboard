import React from 'react';
import './StatsBanner.css';

const StatsBanner = () => {
    const stats = [
        { value: '870', label: 'Verified Sellers' },
        { value: '20,000+', label: 'Products Listed' },
        { value: '870', label: 'Active Buyers' },
        { value: '288', label: 'Categories' },
        { value: '72,500', label: 'Daily Visitors' }
    ];

    return (
        <section className="stats-banner">
            <div className="container-wide">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-item">
                            <h3 className="stat-value">{stat.value}</h3>
                            <p className="stat-label">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsBanner;
