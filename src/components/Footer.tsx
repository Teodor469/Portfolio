import React from 'react';
import './Footer.css';

interface FooterProps {
    name: string;
}

const Footer: React.FC<FooterProps> = ({ name }) => {
    return (
        <footer className="footer">
            <p>Designed & Built by {name}</p>
        </footer>
    );
};

export default Footer;