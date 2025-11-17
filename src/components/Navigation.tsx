import React from 'react';
import { useTranslation } from 'react-i18next';
import './Navigation.css';

interface NavigationProps {
    activeSection: string;
    onSectionChange: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onSectionChange }) => {
    const { t, i18n } = useTranslation();
    
    const navItems = [
        { id: 'home', label: t('nav.home') },
        { id: 'about', label: t('nav.about') },
        { id: 'skills', label: t('nav.skills') },
        { id: 'projects', label: t('nav.projects') },
        { id: 'contact', label: t('nav.contact') },
    ];

    const toggleLanguage = () => {
        const currentLang = i18n.language;
        const newLang = currentLang === 'en' ? 'bg' : 'en';
        i18n.changeLanguage(newLang);
    };

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
                    <li>
                        <button 
                            onClick={toggleLanguage}
                            className="nav-button language-toggle"
                        >
                            {i18n.language === 'en' ? 'БГ' : 'EN'}
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navigation;