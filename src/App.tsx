import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { portfolioConfig } from './config/portfolioConfig';
import './styles/variables.css';
import './App.css';

export default function App() {
    const [activeSection, setActiveSection] = useState('home');
    
    const renderSection = () => {
        switch (activeSection) {
            case 'home': 
                return <Home 
                    name={portfolioConfig.name}
                    title={portfolioConfig.title}
                    photoUrl={portfolioConfig.about.photoUrl}
                />;
            case 'about': 
                return <About 
                    description={portfolioConfig.about.description}
                    experience={portfolioConfig.about.experience}
                    education={portfolioConfig.about.education}
                />;
            case 'skills': 
                return <Skills skillCategories={portfolioConfig.skillCategories} />;
            case 'projects': 
                return <Projects projects={portfolioConfig.projects} />;
            case 'contact': 
                return <Contact 
                    email={portfolioConfig.contact.email}
                    socials={portfolioConfig.contact.socials}
                />;
            default: 
                return <Home 
                    name={portfolioConfig.name}
                    title={portfolioConfig.title}
                    photoUrl={portfolioConfig.about.photoUrl}
                />;
        }
    };
    
    return (
        <div className="portfolio-container">
            <div className="aurora-bg-1"></div>
            <div className="aurora-bg-2"></div>
            
            <div className="main-content-wrapper">
                <Navigation 
                    activeSection={activeSection}
                    onSectionChange={setActiveSection}
                />

                <main className="main-content">
                   <div className="section-wrapper">
                       {renderSection()}
                   </div>
                </main>
            </div>
            
            <Footer name={portfolioConfig.name} />
        </div>
    );
}