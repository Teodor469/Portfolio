import React from 'react';
import { useTranslation } from 'react-i18next';
import ParticleBackground from './ParticleBackground';
import './Home.css';

interface HomeProps {
    photoUrl: string;
}

const Home: React.FC<HomeProps> = ({ photoUrl }) => {
    const { t } = useTranslation();
    return (
        <div className="home-section">
            <ParticleBackground />
            <div className="home-content">
                <div className="photo-container">
                    <div className="photo-glow"></div>
                    <img 
                        src={photoUrl} 
                        alt={t('portfolioData.name')} 
                        className="profile-photo"
                    />
                </div>
                <div className="home-text">
                    <div className="availability-status">
                        <span className="status-indicator"></span>
                        {t('home.availableForHire')}
                    </div>
                    
                    <h1 className="name-title">{t('portfolioData.name')}</h1>
                    <h2 className="job-title">{t('portfolioData.title')}</h2>
                    
                    {/* Quick Stats Bar */}
                    <div className="stats-container">
                        <div className="stat-item">
                            <span className="stat-number">1+</span>
                            <span className="stat-label">{t('home.stats.yearsExperience')}</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">10+</span>
                            <span className="stat-label">{t('home.stats.projectsCompleted')}</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">5</span>
                            <span className="stat-label">{t('home.stats.technologiesMastered')}</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">100%</span>
                            <span className="stat-label">{t('home.stats.clientSatisfaction')}</span>
                        </div>
                    </div>

                    {/* Download CV and Social Buttons */}
                    <div className="action-buttons">
                        <a href="/ProfessionalCVResume.pdf" className="cv-download-button" download>
                            <span className="cv-icon">📄</span>
                            {t('home.downloadCV')}
                        </a>
                        <div className="social-buttons">
                            <a href="mailto:teodor.todorov469@gmail.com" className="social-button">
                                {t('home.buttons.gmail')}
                            </a>
                            <a href="https://github.com/Teodor469" className="social-button" target="_blank" rel="noopener noreferrer">
                                {t('home.buttons.github')}
                            </a>
                            <a href="https://www.linkedin.com/in/teodor-todorov-29453338b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="social-button" target="_blank" rel="noopener noreferrer">
                                {t('home.buttons.linkedin')}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;