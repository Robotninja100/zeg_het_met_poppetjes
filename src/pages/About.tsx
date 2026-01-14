const About = () => {
    return (
        <div className="container" style={{ padding: 'var(--spacing-md) var(--spacing-sm)' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ color: 'var(--color-primary)', marginBottom: '2rem', textAlign: 'center' }}>Over Mij</h1>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '3rem',
                    alignItems: 'start'
                }}>
                    <div className="glass-card" style={{ padding: '2rem', background: 'white' }}>
                        <h2 style={{ marginBottom: '1rem', color: 'var(--color-secondary)' }}>Waarom ik dit doe</h2>
                        <p style={{ lineHeight: 1.8, marginBottom: '1.5rem' }}>
                            Vanuit mijn passie voor therapie en coaching ben ik begonnen met het verzamelen en samenstellen van Playmobil sets.
                            Ik merkte hoe krachtig het werken met poppetjes kan zijn en hoe lastig het soms is om de juiste set bij elkaar te vinden.
                        </p>
                        <p style={{ lineHeight: 1.8 }}>
                            Daarom wil ik het makkelijk maken voor therapeuten en cliënten om direct aan de slag te kunnen met een mooie, complete set.
                        </p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div style={{
                            height: '300px',
                            background: '#eee',
                            borderRadius: 'var(--radius-md)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#888',
                            fontSize: '1.2rem',
                            border: '2px dashed #ccc'
                        }}>
                            Foto van mijn eigen poppetjes?
                        </div>

                        <div className="glass-card" style={{ padding: '1.5rem', background: 'white' }}>
                            <h3 style={{ color: 'var(--color-accent)' }}>Mijn eigen ervaring</h3>
                            <p style={{ marginTop: '0.5rem', fontStyle: 'italic', opacity: 0.8 }}>
                                "In mijn eigen proces hebben poppetjes mij geholpen om zichtbaar te maken wat ik voelde maar niet kon verwoorden."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
