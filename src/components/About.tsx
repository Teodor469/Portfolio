import React from 'react';
import ParticleBackground from './ParticleBackground';
import './About.css';

interface Experience {
    company: string;
    position: string;
    duration: string;
    description: string[];
    technologies?: string[];
}

interface Education {
    institution: string;
    degree: string;
    duration: string;
    details?: string;
}


interface AboutProps {
    description: string;
    experience: Experience[];
    education: Education[];
}

const About: React.FC<AboutProps> = ({ description, experience, education }) => {
    return (
        <div className="about-section">
            <ParticleBackground />
            <div className="about-content">
                <h2 className="section-title">About Me</h2>
                
                {/* Professional Summary */}
                <div className="resume-card summary-card">
                    <h3 className="card-title">Professional Summary</h3>
                    <p className="summary-text">{description}</p>
                </div>

                <div className="resume-grid">
                    {/* Experience Section */}
                    <div className="resume-card experience-card">
                        <h3 className="card-title">
                            <span className="title-icon">💼</span>
                            Professional Experience
                        </h3>
                        <div className="experience-list">
                            {experience.map((exp, index) => (
                                <div key={index} className="experience-item">
                                    <div className="experience-header">
                                        <h4 className="position">{exp.position}</h4>
                                        <span className="duration">{exp.duration}</span>
                                    </div>
                                    <p className="company">{exp.company}</p>
                                    <ul className="responsibilities">
                                        {exp.description.map((desc, i) => (
                                            <li key={i}>{desc}</li>
                                        ))}
                                    </ul>
                                    {exp.technologies && (
                                        <div className="tech-stack">
                                            {exp.technologies.map((tech, i) => (
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
                            Education
                        </h3>
                        <div className="education-list">
                            {education.map((edu, index) => (
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