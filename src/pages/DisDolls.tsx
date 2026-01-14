import { Link } from 'react-router-dom';

const DisDolls = () => {
    return (
        <div className="container" style={{ padding: 'var(--spacing-md) var(--spacing-sm)' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ color: 'var(--color-accent)', marginBottom: '2rem', textAlign: 'center' }}>Delenwerk & DIS</h1>

                <div style={{ display: 'grid', gap: '2rem', marginBottom: '3rem' }}>
                    <div className="glass-card" style={{ padding: '2rem', background: 'white' }}>
                        <h2 style={{ color: 'var(--color-secondary)' }}>Wat is delenwerk?</h2>
                        <p style={{ lineHeight: 1.8 }}>
                            Delenwerk is een therapeutische benadering waarbij cliënten hun ‘delen’ leren kennen en in contact brengen met elkaar.
                            Poppetjes helpen om deze delen te verbeelden. Je kunt letterlijk zien hoe delen zich tot elkaar verhouden.
                        </p>
                    </div>

                    <div className="glass-card" style={{ padding: '2rem', background: 'white' }}>
                        <h2 style={{ color: 'var(--color-secondary)' }}>Wat is DIS?</h2>
                        <p style={{ lineHeight: 1.8 }}>
                            DIS (Dissociatieve Identiteitsstoornis) ontstaat meestal door vroegkinderlijk trauma.
                            Hierbij zijn er verschillende persoonlijkheidsdelen die het dagelijks leven beïnvloeden.
                            Het visueel maken van deze delen met Playmobil kan enorm helpend zijn in de behandeling en voor het begrip.
                        </p>
                    </div>
                </div>

                <div style={{ marginBottom: '3rem' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Je eigen set poppetjes</h2>
                    <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                        Het is belangrijk dat de poppetjes "kloppen" bij jouw delen. Samen kunnen we zorgvuldig uitzoeken welke poppetjes resoneren.
                    </p>
                    <h3 style={{ color: 'var(--color-primary)', marginTop: '2rem', marginBottom: '1rem' }}>Tips voor gebruik</h3>
                    <ul style={{ paddingLeft: '1.5rem', lineHeight: 1.8 }}>
                        <li>Gebruik poppetjes om gesprekken tussen delen te faciliteren.</li>
                        <li>Geef elk deel een eigen plek en stem.</li>
                    </ul>
                </div>

                <div style={{ marginBottom: '3rem' }}>
                    <h2 style={{ color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
                        📌 Waarom Playmobil?
                    </h2>
                    <div style={{ display: 'grid', gap: '1rem' }}>
                        <div style={{ background: 'var(--color-surface)', padding: '1rem', borderRadius: 'var(--radius-sm)' }}>
                            <strong>Visueel & Tastbaar:</strong> Het maakt abstracte concepten concreet.
                        </div>
                        <div style={{ background: 'var(--color-surface)', padding: '1rem', borderRadius: 'var(--radius-sm)' }}>
                            <strong>Veilig:</strong> Door het 'buiten jezelf' te zetten op tafel, ontstaat er veilige afstand.
                        </div>
                    </div>
                </div>

                <div className="glass-card" style={{
                    padding: '2rem',
                    background: 'linear-gradient(to right, #ffebee, #fff)',
                    borderLeft: '5px solid var(--color-accent)'
                }}>
                    <h3>🛒 Aanbevolen set voor delenwerk</h3>
                    <p style={{ margin: '0.5rem 0 1.5rem' }}>
                        Voor delenwerk is vaak specifiek maatwerk nodig.
                    </p>
                    <Link to="/contact" className="btn btn-primary">
                        Vraag een Set op Maat aan
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DisDolls;
