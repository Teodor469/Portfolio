import { useState } from 'react';
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
                    photoUrl={portfolioConfig.about.photoUrl}
                />;
            case 'about': 
                return <About />;
            case 'skills': 
                return <Skills />;
            case 'projects': 
                return <Projects />;
            case 'contact': 
                return <Contact />;
            default: 
                return <Home 
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
            
            <Footer />
        </div>
    );
}