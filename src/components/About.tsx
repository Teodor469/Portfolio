import React from 'react';
import { useTranslation } from 'react-i18next';
import ParticleBackground from './ParticleBackground';
import './About.css';

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
    const { t } = useTranslation();
    return (
        <div className="about-section">
            <ParticleBackground />
            <div className="about-content">
                <h2 className="section-title">{t('about.title')}</h2>
                
                {/* Professional Summary */}
                <div className="resume-card summary-card">
                    <h3 className="card-title">{t('about.title')}</h3>
                    <p className="summary-text">{t('portfolioData.about.description')}</p>
                </div>

                <div className="resume-grid">
                    {/* Experience Section */}
                    <div className="resume-card experience-card">
                        <h3 className="card-title">
                            <span className="title-icon">💼</span>
                            {t('about.experience')}
                        </h3>
                        <div className="experience-list">
                            {(t('portfolioData.about.experience', { returnObjects: true }) as any[]).map((exp: any, index: number) => (
                                <div key={index} className="experience-item">
                                    <div className="experience-header">
                                        <h4 className="position">{exp.position}</h4>
                                        <span className="duration">{exp.duration}</span>
                                    </div>
                                    <p className="company">{exp.company}</p>
                                    <ul className="responsibilities">
                                        {exp.description.map((desc: string, i: number) => (
                                            <li key={i}>{desc}</li>
                                        ))}
                                    </ul>
                                    {exp.technologies && (
                                        <div className="tech-stack">
                                            {exp.technologies.map((tech: string, i: number) => (
                                                <span key={i} className="tech-badge">{tech}</span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education Section */}
                    <div className="resume-card education-card">
                        <h3 className="card-title">
                            <span className="title-icon">🎓</span>
                            {t('about.education')}
                        </h3>
                        <div className="education-list">
                            {(t('portfolioData.about.education', { returnObjects: true }) as any[]).map((edu: any, index: number) => (
                                <div key={index} className="education-item">
                                    <div className="education-header">
                                        <h4 className="degree">{edu.degree}</h4>
                                        <span className="duration">{edu.duration}</span>
                                    </div>
                                    <p className="institution">{edu.institution}</p>
                                    {edu.details && <p className="details">{edu.details}</p>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;