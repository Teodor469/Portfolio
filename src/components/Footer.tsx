import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
    const { t } = useTranslation();
    return (
        <footer className="footer">
            <p>Designed & Built by {t('portfolioData.name')} - {t('footer.rights')}</p>
        </footer>
    );
};

export default Footer;