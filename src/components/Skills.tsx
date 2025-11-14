import React from 'react';
import ParticleBackground from './ParticleBackground';
import './Skills.css';

interface Skill {
    name: string;
    iconPath?: string;
    proficiency: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
    yearsOfExperience?: number;
}

interface SkillCategory {
    title: string;
    description: string;
    skills: Skill[];
    icon: string;
}

interface SkillsProps {
    skillCategories: SkillCategory[];
}

const Skills: React.FC<SkillsProps> = ({ skillCategories }) => {
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
                <h2 className="section-title">Technologies I Work With</h2>
                <p className="skills-subtitle">
                    A comprehensive overview of my technical expertise and current learning journey
                </p>
                
                <div className="skills-categories-grid">
                    {skillCategories.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="skill-category-card">
                            <div className="category-header">
                                <span className="category-icon">{category.icon}</span>
                                <div className="category-info">
                                    <h3 className="category-title">{category.title}</h3>
                                    <p className="category-description">{category.description}</p>
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
                                                <span className="proficiency-label">{skill.proficiency}</span>
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
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;