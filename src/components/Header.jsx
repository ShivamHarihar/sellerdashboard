import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <div className="logo">
                        <div className="logo-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#7ED321" />
                                <path d="M2 17L12 22L22 17" stroke="#7ED321" strokeWidth="2" />
                                <path d="M2 12L12 17L22 12" stroke="#7ED321" strokeWidth="2" />
                            </svg>
                        </div>
                        <span className="logo-text">Nerozon</span>
                    </div>
                    <button className="btn btn-outline">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ marginRight: '8px' }}>
                            <path d="M10 10C12.7614 10 15 7.76142 15 5C15 2.23858 12.7614 0 10 0C7.23858 0 5 2.23858 5 5C5 7.76142 7.23858 10 10 10Z" fill="currentColor" />
                            <path d="M10 12C4.47715 12 0 14.4772 0 17.5V20H20V17.5C20 14.4772 15.5228 12 10 12Z" fill="currentColor" />
                        </svg>
                        Login for existing user
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
