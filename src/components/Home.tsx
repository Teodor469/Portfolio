import React from 'react';
import ParticleBackground from './ParticleBackground';
import './Home.css';

interface HomeProps {
    name: string;
    title: string;
    photoUrl: string;
}

const Home: React.FC<HomeProps> = ({ name, title, photoUrl }) => {
    return (
        <div className="home-section">
            <ParticleBackground />
            <div className="home-content">
                <div className="photo-container">
                    <div className="photo-glow"></div>
                    <img 
                        src={photoUrl} 
                        alt={name} 
                        className="profile-photo"
                    />
                </div>
                <div className="home-text">
                    <div className="availability-status">
                        <span className="status-indicator"></span>
                        Available for hire
                    </div>
                    
                    <h1 className="name-title">{name}</h1>
                    <h2 className="job-title">{title}</h2>
                    
                    {/* Quick Stats Bar */}
                    <div className="stats-container">
                        <div className="stat-item">
                            <span className="stat-number">6+</span>
                            <span className="stat-label">Months Experience</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">10+</span>
                            <span className="stat-label">Projects Completed</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">5</span>
                            <span className="stat-label">Technologies Mastered</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">100%</span>
                            <span className="stat-label">Client Satisfaction</span>
                        </div>
                    </div>

                    {/* Download CV and Social Buttons */}
                    <div className="action-buttons">
                        <a href="/cv.pdf" className="cv-download-button" download>
                            <span className="cv-icon">📄</span>
                            Download CV
                        </a>
                        <div className="social-buttons">
                            <a href="mailto:teodor.todorov469@gmail.com" className="social-button">
                                Gmail
                            </a>
                            <a href="https://github.com/yourusername" className="social-button" target="_blank" rel="noopener noreferrer">
                                GitHub
                            </a>
                            <a href="https://linkedin.com/in/yourprofile" className="social-button" target="_blank" rel="noopener noreferrer">
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;