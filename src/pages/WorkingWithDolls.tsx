import { Link } from 'react-router-dom';

const WorkingWithDolls = () => {
    return (
        <div className="container" style={{ padding: 'var(--spacing-md) var(--spacing-sm)' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ color: 'var(--color-secondary)', marginBottom: '2rem', textAlign: 'center' }}>Werken met poppetjes</h1>

                <div className="glass-card" style={{ padding: '2rem', background: 'white', marginBottom: '2rem' }}>
                    <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1rem' }}>
                        Voor therapeuten, coaches, opstellers en begeleiders:
                        Poppetjes zijn een prachtig middel om cliënten inzicht te geven in hun situatie. Door een situatie visueel te maken, gebeurt er iets anders dan wanneer je er alleen over praat.
                    </p>
                    <h3 style={{ color: 'var(--color-primary)', marginTop: '2rem', marginBottom: '1rem' }}>Tips voor gebruik</h3>
                    <ul style={{ paddingLeft: '1.5rem', lineHeight: 1.8 }}>
                        <li>Laat de cliënt zelf de poppetjes kiezen.</li>
                        <li>Gebruik de opstelling om vragen te stellen: "Waar kijkt dit poppetje naar?"</li>
                        <li>Geef ruimte voor stilte tijdens het neerzetten.</li>
                    </ul>
                </div>

                <div style={{ marginBottom: '3rem' }}>
                    <h2 style={{ color: 'var(--color-primary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        📌 Waarom Playmobil?
                    </h2>
                    <div style={{ display: 'grid', gap: '1rem' }}>
                        {[
                            "Ze zijn herkenbaar, maar niet té gedetailleerd, waardoor projectie makkelijk is.",
                            "Flexibel in gebruik: armen en benen kunnen bewegen.",
                            "Kindvriendelijk én professioneel inzetbaar: het ziet er verzorgd uit.",
                            "Grote variatie in poppetjes beschikbaar."
                        ].map((item, i) => (
                            <div key={i} style={{
                                background: 'var(--color-surface)',
                                padding: '1rem',
                                borderRadius: 'var(--radius-sm)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem'
                            }}>
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--color-success)' }}></div>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="glass-card" style={{
                    padding: '2rem',
                    background: 'linear-gradient(to right, #e0f7fa, #fff)',
                    borderLeft: '5px solid var(--color-secondary)'
                }}>
                    <h3>🛒 Aanbevolen set voor professionals</h3>
                    <p style={{ margin: '0.5rem 0 1.5rem' }}>
                        Wil je starten met opstellingen? Dan is de <strong>Basis set</strong> een uitstekend vertrekpunt.
                    </p>
                    <Link to="/producten#basis-set" className="btn btn-primary">
                        Bekijk de Basis Set
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default WorkingWithDolls;
