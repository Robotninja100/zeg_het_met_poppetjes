import { Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="container" style={{ padding: 'var(--spacing-md) var(--spacing-sm)' }}>
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <h1 style={{ color: 'var(--color-primary)', marginBottom: '2rem', textAlign: 'center' }}>Contact</h1>

                <div className="glass-card" style={{ padding: '2rem', background: 'white' }}>
                    <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
                        <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
                            Wil je een set bestellen? Vul het formulier hieronder in met je gegevens en welke set je wilt.
                        </p>
                        <div style={{ background: 'var(--color-surface)', padding: '1.5rem', borderRadius: 'var(--radius-sm)', textAlign: 'left' }}>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>Hoe verloopt een bestelling?</h3>
                            <ol style={{ paddingLeft: '1.2rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                                <li>Vul het formulier in en geef aan wat je wilt bestellen.</li>
                                <li>Ik neem contact met je op om de bestelling te bevestigen.</li>
                                <li>Betaling verloopt veilig via een betaalverzoek of via mijn <a href="https://www.marktplaats.nl/u/met-poppetjes/57041140/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-secondary)', fontWeight: 'bold' }}>Marktplaats account</a>.</li>
                                <li>Na ontvangst van de betaling wordt het pakketje verzonden (of je kunt het ophalen).</li>
                            </ol>
                        </div>
                    </div>

                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div>
                            <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Naam</label>
                            <input type="text" id="name" style={{
                                width: '100%',
                                padding: '0.75rem',
                                borderRadius: 'var(--radius-sm)',
                                border: '1px solid #ddd',
                                fontSize: '1rem',
                                fontFamily: 'inherit'
                            }} placeholder="Jouw naam" />
                        </div>

                        <div>
                            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>E-mailadres</label>
                            <input type="email" id="email" style={{
                                width: '100%',
                                padding: '0.75rem',
                                borderRadius: 'var(--radius-sm)',
                                border: '1px solid #ddd',
                                fontSize: '1rem',
                                fontFamily: 'inherit'
                            }} placeholder="jouw@email.nl" />
                        </div>

                        <div>
                            <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Bericht</label>
                            <textarea id="message" rows={5} style={{
                                width: '100%',
                                padding: '0.75rem',
                                borderRadius: 'var(--radius-sm)',
                                border: '1px solid #ddd',
                                fontSize: '1rem',
                                fontFamily: 'inherit',
                                resize: 'vertical'
                            }} placeholder="Waar kan ik je mee helpen?"></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center', marginTop: '1rem' }}>
                            <Send size={18} /> Verstuur bericht
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
