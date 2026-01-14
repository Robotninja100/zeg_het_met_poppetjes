import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{
            background: 'var(--color-dark)',
            color: 'white',
            padding: 'var(--spacing-lg) 0 var(--spacing-md) 0',
            marginTop: 'auto'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem',
                    marginBottom: '2rem'
                }}>
                    <div>
                        <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>MET POPPETJES</h3>
                        <p style={{ opacity: 0.8 }}>
                            Specialistische Playmobil sets voor therapie, coaching en opstellingen.
                        </p>
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '1rem' }}>Info</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li><Link to="/about" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>Over ons</Link></li>
                            <li><Link to="/terms" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>Algemene voorwaarden</Link></li>
                            <li><Link to="/shipping" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>Verzendinformatie</Link></li>
                            <li><Link to="/privacy" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>Privacyverklaring</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '1rem' }}>Contact</h4>
                        <p style={{ opacity: 0.8, marginBottom: '0.5rem' }}>Heb je vragen? Mail gerust.</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <a href="mailto:contact@metpoppetjes.nl" style={{ color: 'var(--color-secondary)', textDecoration: 'none', fontWeight: 'bold' }}>
                                contact@metpoppetjes.nl
                            </a>
                            <a href="https://www.marktplaats.nl/u/met-poppetjes/57041140/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontSize: '0.9rem' }}>
                                Bekijk op Marktplaats
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '2rem',
                    textAlign: 'center',
                    fontSize: '0.9rem',
                    opacity: 0.6
                }}>
                    &copy; {new Date().getFullYear()} MET POPPETJES. Alle rechten voorbehouden.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
