import React from 'react';
import './CategoriesSection.css';

const CategoriesSection = () => {
    const categories = [
        'Sell Diaper and Wipes Online',
        'Sell Electronics Online',
        'Sell Clothes Online',
        'Sell Tents Online',
        'Sell Beauty Products Online',
        'Sell Appliances Online',
        'Sell Makeup Online',
        'Sell Watch Online',
        'Sell Women Clothes Online',
        'Sell Jewellery Online',
        'Sell Mobile Online',
        'Sell Shoes Online',
        'Sell Men Products Online',
        'Sell Furniture Online',
        'Sell Kurta Online',
        'Sell Bags Online',
        'Sell Indian Clothes Online',
        'Sell Paintings Online',
        'Sell Suits Online',
        'Sell Books Online'
    ];

    return (
        <section className="categories-section section">
            <div className="container-wide">
                <h2 className="text-center">Popular categories to sell across India</h2>
                <div className="categories-grid">
                    {categories.map((category, index) => (
                        <div key={index} className="category-item">
                            {category}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoriesSection;
