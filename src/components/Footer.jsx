import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="container-wide">
                    <div className="footer-grid">
                        {/* Company Info */}
                        <div className="footer-column">
                            <div className="footer-logo">
                                <div className="logo-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#7ED321" />
                                        <path d="M2 17L12 22L22 17" stroke="#7ED321" strokeWidth="2" />
                                        <path d="M2 12L12 17L22 12" stroke="#7ED321" strokeWidth="2" />
                                    </svg>
                                </div>
                                <span className="logo-text">Nerozon</span>
                            </div>
                            <p className="footer-description">
                                On behalf of Nerozon, I hope that your business<br />
                                is also successful.
                            </p>
                            <p className="footer-phone">
                                <strong>Telephone:</strong> +033 123 45678
                            </p>
                        </div>

                        {/* About Links */}
                        <div className="footer-column">
                            <h4>About</h4>
                            <ul>
                                <li><a href="#contact">Contact Us</a></li>
                                <li><a href="#about">About Us</a></li>
                                <li><a href="#careers">Careers</a></li>
                            </ul>
                        </div>

                        {/* Policy Links */}
                        <div className="footer-column">
                            <h4>Policy</h4>
                            <ul>
                                <li><a href="#return">Return Policy</a></li>
                                <li><a href="#privacy">Privacy</a></li>
                                <li><a href="#terms">Terms of Use</a></li>
                            </ul>
                        </div>

                        {/* Social Links */}
                        <div className="footer-column">
                            <h4>Social</h4>
                            <ul>
                                <li><a href="#facebook">Facebook</a></li>
                                <li><a href="#twitter">Twitter</a></li>
                                <li><a href="#instagram">Instagram</a></li>
                            </ul>
                        </div>

                        {/* Register Office */}
                        <div className="footer-column">
                            <h4>Register Office</h4>
                            <p className="footer-address">
                                Nerozon Online Services<br />
                                Buildings Alyssa, Begonia &<br />
                                Clove Embassy Tech Village,<br />
                                Outer Ring Road, Devarabeesanahalli Village,<br />
                                Bengaluru, 560103,<br />
                                Karnataka, India
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container-wide">
                    <p>&copy; 2024 Nerozon. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
