import React from 'react';
import './Navigation.css';

interface NavigationProps {
    activeSection: string;
    onSectionChange: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onSectionChange }) => {
    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' },
    ];

    return (
        <header className="header">
            <nav className="main-nav">
                <ul className="nav-list">
                    {navItems.map(item => (
                        <li key={item.id}>
                            <button 
                                onClick={() => onSectionChange(item.id)}
                                className={`nav-button ${activeSection === item.id ? 'active' : ''}`}
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Navigation;