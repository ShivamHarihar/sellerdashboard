import React from 'react';
import { Link } from 'react-router-dom';
import './RegistrationSection.css';

const RegistrationSection = () => {
    return (
        <section className="registration-section section">
            <div className="container">
                <div className="registration-grid">
                    {/* Left Card - Join Nerozon */}
                    <div className="join-card">
                        <div className="join-card-image">
                            <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop" alt="Join Nerozon" />
                        </div>
                        <div className="join-card-content">
                            <h3>Join Nerozon<br />Now!</h3>
                        </div>
                    </div>

                    {/* Center Card - Registration Form */}
                    <div className="register-card">
                        <div className="register-card-inner">
                            <h3>Sell on NEROZON</h3>
                            <p className="register-subtitle">List your products and sell all anywhere</p>
                            <form className="register-form">
                                <div className="phone-input">
                                    <span className="country-code">+91</span>
                                    <div className="input-divider"></div>
                                    <input type="tel" placeholder="Enter Mobile Number" />
                                </div>
                                <Link to="/register" className="btn btn-primary btn-block">
                                    Register Now
                                </Link>
                                <p className="register-footer">
                                    Already have an account?<br />
                                    <a href="#login">Login here</a>
                                </p>
                            </form>
                        </div>
                    </div>

                    {/* Right Card - Seller Support */}
                    <div className="support-card">
                        <div className="support-icon">
                            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                                <circle cx="32" cy="32" r="30" stroke="#FF8C00" strokeWidth="2" />
                                <path d="M32 16C23.163 16 16 23.163 16 32C16 35.866 17.568 39.366 20.134 42" stroke="#FF8C00" strokeWidth="2" strokeLinecap="round" />
                                <path d="M32 16C40.837 16 48 23.163 48 32C48 35.866 46.432 39.366 43.866 42" stroke="#FF8C00" strokeWidth="2" strokeLinecap="round" />
                                <circle cx="32" cy="32" r="4" fill="#FF8C00" />
                                <path d="M20 44C20 44 22 46 24 46C26 46 28 44 28 44" stroke="#FF8C00" strokeWidth="2" strokeLinecap="round" />
                                <path d="M36 44C36 44 38 46 40 46C42 46 44 44 44 44" stroke="#FF8C00" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                        <h4>Seller Support</h4>
                        <p>If you need some help in registering,<br />you can contact our helpline, we will assist you.</p>
                    </div>
                </div>

                {/* How it Works */}
                <div className="how-it-works">
                    <h3 className="text-center">How it Works?</h3>
                    <p className="text-center how-subtitle">Try to get more information about the users</p>
                </div>
            </div>
        </section>
    );
};

export default RegistrationSection;
