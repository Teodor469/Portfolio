import React from 'react';
import { useTranslation } from 'react-i18next';
import ParticleBackground from './ParticleBackground';
import './Contact.css';
import { portfolioConfig } from '../config/portfolioConfig';

interface Social {
    name: string;
    url: string;
    icon: string;
}

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
    const { t } = useTranslation();
    return (
        <div className="contact-section">
            <ParticleBackground />
            <div className="contact-content">
                <h2 className="section-title">{t('contact.title')}</h2>
                
                <div className="contact-hero">
                    <div className="contact-message">
                        <h3 className="contact-subtitle">{t('contact.subtitle')}</h3>
                        <p className="contact-description">
                            {t('contact.description')}
                        </p>
                        
                        <div className="contact-highlights">
                            <div className="highlight-item">
                                <span className="highlight-icon">⚡</span>
                                <span>{t('contact.highlights.quickResponse')}</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-icon">🎯</span>
                                <span>{t('contact.highlights.focused')}</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-icon">🚀</span>
                                <span>{t('contact.highlights.readyToStart')}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="contact-card">
                        <h4 className="contact-card-title">{t('contact.cardTitle')}</h4>
                        <p className="contact-card-subtitle">
                            {t('contact.cardSubtitle')}
                        </p>
                        
                        <div className="contact-methods">
                            <a 
                                href={`mailto:${portfolioConfig.contact.email}`}
                                className="primary-contact-button"
                            >
                                <span className="contact-icon">✉️</span>
                                {t('contact.sendEmail')}
                            </a>
                            
                            <div className="contact-divider">
                                <span>{t('contact.connectOn')}</span>
                            </div>
                            
                            <div className="social-links-grid">
                                {portfolioConfig.contact.socials.map((social, index) => (
                                    <a 
                                        key={index} 
                                        href={social.url} 
                                        className="social-link-card"
                                        title={`Connect on ${social.name}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div className="social-icon">
                                            {social.icon}
                                        </div>
                                        <span className="social-name">{social.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                        
                        <div className="response-promise">
                            <p>{t('contact.responseTime')}</p>
                        </div>
                    </div>
                </div>
                
                <div className="contact-footer">
                    <p className="availability-text">
                        <span className="availability-dot"></span>
                        {t('contact.availability')}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;