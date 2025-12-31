import React, { useState } from 'react';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const testimonials = [
        {
            name: 'Rajesh Mishra',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat, lectus'
        },
        {
            name: 'Rajesh Mishra',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat, lectus'
        }
    ];

    return (
        <section className="testimonials-section section">
            <div className="container">
                <h2 className="text-center">
                    <span className="text-orange">Seller Success</span> Stories
                </h2>
                <div className="testimonials-carousel">
                    <div className="testimonials-track" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="testimonial-card">
                                <div className="testimonial-content">
                                    <p className="testimonial-text">{testimonial.text}</p>
                                    <div className="quote-icon">
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                            <path d="M10 20C10 15 12 10 18 10V14C14 14 14 16 14 18H18V26H10V20Z" fill="#FFD700" />
                                            <path d="M22 20C22 15 24 10 30 10V14C26 14 26 16 26 18H30V26H22V20Z" fill="#FFD700" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="testimonial-author">
                                    <img src={testimonial.image} alt={testimonial.name} />
                                    <h4>{testimonial.name}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="carousel-dots">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === activeSlide ? 'active' : ''}`}
                            onClick={() => setActiveSlide(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
