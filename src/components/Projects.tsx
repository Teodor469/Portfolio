import React from 'react';
import ParticleBackground from './ParticleBackground';
import './Projects.css';

interface Project {
    title: string;
    description: string;
    imageUrl: string;
    repoUrl?: string;
    tags?: string[];
    status?: 'Completed' | 'In Development' | 'Concept';
    featured?: boolean;
}

interface ProjectsProps {
    projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
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

    const renderProject = (project: Project, index: number, isAdditional: boolean = false) => (
        <div key={index} className={`project-card ${isAdditional ? 'additional-project' : ''}`}>
            <div className="project-image-container">
                <img src={project.imageUrl} alt={project.title} className="project-image" />
                {project.status && (
                    <div 
                        className="project-status-badge"
                        style={{ backgroundColor: getStatusColor(project.status) }}
                    >
                        {project.status}
                    </div>
                )}
            </div>
            <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                {project.tags && (
                    <div className="project-tags">
                        {project.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="tech-tag">{tag}</span>
                        ))}
                    </div>
                )}
                <div className="project-links">
                    {project.repoUrl && (
                        <a href={project.repoUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                            View Code
                        </a>
                    )}
                    {!project.repoUrl && (
                        <span className="project-status-text">Private Repository</span>
                    )}
                </div>
            </div>
        </div>
    );

    return (
        <div className="projects-section">
            <ParticleBackground />
            <div className="projects-content">
                <h2 className="section-title">My Projects</h2>
                <p className="projects-subtitle">
                    A showcase of my development work, from mobile applications to infrastructure solutions
                </p>
                
                {/* Featured Projects */}
                <div className="featured-projects">
                    <h3 className="subsection-title">Featured Projects</h3>
                    <div className="projects-grid featured-grid">
                        {featuredProjects.map((project, index) => renderProject(project, index))}
                    </div>
                </div>

                {/* Additional Projects */}
                {additionalProjects.length > 0 && (
                    <div className="additional-projects">
                        <h3 className="subsection-title">Additional Projects</h3>
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