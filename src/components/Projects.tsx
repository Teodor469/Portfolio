import React from 'react';
import { useTranslation } from 'react-i18next';
import ParticleBackground from './ParticleBackground';
import './Projects.css';
import { portfolioConfig } from '../config/portfolioConfig';

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = () => {
    const { t } = useTranslation();
    const projects = portfolioConfig.projects;
    const featuredProjects = projects.filter(project => project.featured);
    const additionalProjects = projects.filter(project => !project.featured);

    const getStatusColor = (status?: string): string => {
        switch (status) {
            case 'Completed': return 'var(--accent-primary)';
            case 'In Development': return 'var(--accent-secondary)';
            case 'Concept': return 'var(--accent-tertiary)';
            default: return 'var(--accent-primary)';
        }
    };

    const renderProject = (project: any, index: number, isAdditional: boolean = false) => {
        const translatedProjects = (t('portfolioData.projects', { returnObjects: true }) as any[]);
        const translatedProject = translatedProjects[index + (isAdditional ? featuredProjects.length : 0)];
        
        return (
            <div key={index} className={`project-card ${isAdditional ? 'additional-project' : ''}`}>
                <div className="project-image-container">
                    <img src={project.imageUrl} alt={translatedProject?.title || project.title} className="project-image" />
                    {project.status && (
                        <div 
                            className="project-status-badge"
                            style={{ backgroundColor: getStatusColor(project.status) }}
                        >
                            {t(`projects.status.${project.status}`)}
                        </div>
                    )}
                </div>
                <div className="project-info">
                    <h3 className="project-title">{translatedProject?.title || project.title}</h3>
                    <p className="project-description">{translatedProject?.description || project.description}</p>
                    {project.tags && (
                        <div className="project-tags">
                            {project.tags.map((tag: string, tagIndex: number) => (
                                <span key={tagIndex} className="tech-tag">{tag}</span>
                            ))}
                        </div>
                    )}
                    <div className="project-links">
                        {project.repoUrl && (
                            <a href={project.repoUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                                {t('projects.viewRepo')}
                            </a>
                        )}
                        {!project.repoUrl && (
                            <span className="project-status-text">Private Repository</span>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="projects-section">
            <ParticleBackground />
            <div className="projects-content">
                <h2 className="section-title">{t('projects.title')}</h2>
                <p className="projects-subtitle">
                    {t('projects.subtitle')}
                </p>
                
                {/* Featured Projects */}
                <div className="featured-projects">
                    <h3 className="subsection-title">{t('projects.featured')}</h3>
                    <div className="projects-grid featured-grid">
                        {featuredProjects.map((project, index) => renderProject(project, index))}
                    </div>
                </div>

                {/* Additional Projects */}
                {additionalProjects.length > 0 && (
                    <div className="additional-projects">
                        <h3 className="subsection-title">{t('projects.other')}</h3>
                        <div className="projects-grid additional-grid">
                            {additionalProjects.map((project, index) => renderProject(project, index, true))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Projects;