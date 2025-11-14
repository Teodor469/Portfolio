import React from 'react';
import ParticleBackground from './ParticleBackground';
import './Contact.css';

interface Social {
    name: string;
    url: string;
    icon: string;
}

interface ContactProps {
    email: string;
    socials: Social[];
}

const Contact: React.FC<ContactProps> = ({ email, socials }) => {
    return (
        <div className="contact-section">
            <ParticleBackground />
            <div className="contact-content">
                <h2 className="section-title">Let's Build Something Amazing Together</h2>
                
                <div className="contact-hero">
                    <div className="contact-message">
                        <h3 className="contact-subtitle">Ready to discuss your next project?</h3>
                        <p className="contact-description">
                            I'm actively seeking new opportunities where I can contribute my Laravel expertise and passion for clean, scalable code. Whether you're looking for a dedicated backend developer or someone to help bring your ideas to life, I'd love to hear from you!
                        </p>
                        
                        <div className="contact-highlights">
                            <div className="highlight-item">
                                <span className="highlight-icon">⚡</span>
                                <span>Quick to respond</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-icon">🎯</span>
                                <span>Focused on results</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-icon">🚀</span>
                                <span>Ready to start immediately</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="contact-card">
                        <h4 className="contact-card-title">Get in touch</h4>
                        <p className="contact-card-subtitle">
                            Drop me a line and let's discuss how we can work together
                        </p>
                        
                        <div className="contact-methods">
                            <a 
                                href={`mailto:${email}`}
                                className="primary-contact-button"
                            >
                                <span className="contact-icon">✉️</span>
                                Send me an email
                            </a>
                            
                            <div className="contact-divider">
                                <span>or connect with me on</span>
                            </div>
                            
                            <div className="social-links-grid">
                                {socials.map((social, index) => (
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
                            <p>💬 I typically respond within 24 hours</p>
                        </div>
                    </div>
                </div>
                
                <div className="contact-footer">
                    <p className="availability-text">
                        <span className="availability-dot"></span>
                        Available for full-time positions and freelance projects
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;