import React from 'react';
import { useTranslation } from 'react-i18next';
import ParticleBackground from './ParticleBackground';
import './Skills.css';
import { portfolioConfig } from '../config/portfolioConfig';

interface SkillsProps {}

const Skills: React.FC<SkillsProps> = () => {
    const { t } = useTranslation();
    const getProficiencyLevel = (proficiency: string): number => {
        switch (proficiency) {
            case 'Beginner': return 25;
            case 'Intermediate': return 50;
            case 'Advanced': return 75;
            case 'Expert': return 100;
            default: return 0;
        }
    };

    const getProficiencyColor = (proficiency: string): string => {
        switch (proficiency) {
            case 'Beginner': return 'var(--accent-muted)';
            case 'Intermediate': return 'var(--accent-secondary)';
            case 'Advanced': return 'var(--accent-primary)';
            case 'Expert': return 'var(--accent-tertiary)';
            default: return 'var(--accent-primary)';
        }
    };

    return (
        <div className="skills-section">
            <ParticleBackground />
            <div className="skills-content">
                <h2 className="section-title">{t('skills.title')}</h2>
                <p className="skills-subtitle">
                    {t('skills.subtitle')}
                </p>
                
                <div className="skills-categories-grid">
                    {portfolioConfig.skillCategories.map((category, categoryIndex) => {
                        const translatedCategory = (t('portfolioData.skillCategories', { returnObjects: true }) as any[])[categoryIndex];
                        return (
                            <div key={categoryIndex} className="skill-category-card">
                                <div className="category-header">
                                    <span className="category-icon">{category.icon}</span>
                                    <div className="category-info">
                                        <h3 className="category-title">{translatedCategory?.title || category.title}</h3>
                                        <p className="category-description">{translatedCategory?.description || category.description}</p>
                                    </div>
                                </div>
                                
                                <div className="skills-list">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div key={skillIndex} className="skill-item">
                                            <div className="skill-header">
                                                <div className="skill-name-container">
                                                    {skill.iconPath && (
                                                        <img 
                                                            src={skill.iconPath} 
                                                            alt={skill.name}
                                                            className="skill-icon"
                                                            onError={(e) => {
                                                                (e.target as HTMLImageElement).style.display = 'none';
                                                            }}
                                                        />
                                                    )}
                                                    <span className="skill-name">{skill.name}</span>
                                                </div>
                                                <div className="skill-meta">
                                                    <span className="proficiency-label">{t(`skills.proficiency.${skill.proficiency}`)}</span>
                                                    {skill.yearsOfExperience && (
                                                        <span className="experience-badge">
                                                            {skill.yearsOfExperience}y
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            
                                            <div className="proficiency-bar-container">
                                                <div 
                                                    className="proficiency-bar"
                                                    style={{
                                                        width: `${getProficiencyLevel(skill.proficiency)}%`,
                                                        backgroundColor: getProficiencyColor(skill.proficiency)
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Skills;