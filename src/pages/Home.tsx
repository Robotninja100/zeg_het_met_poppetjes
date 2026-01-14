import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
    return (
        <div className="home">
            {/* Hero Banner - Using a gradient overlay on image if available, otherwise just gradient for now until we identify specific banner image */}
            <section style={{
                position: 'relative',
                height: '80vh',
                minHeight: '600px',
                background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("${import.meta.env.BASE_URL}images/5c1c3c6f-a9d2-4a10-b506-4e891e3fd9aa (1).avif")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                color: 'white',
                padding: '0 1rem'
            }}>
                <div className="glass-card" style={{
                    maxWidth: '800px',
                    background: 'rgba(255, 255, 255, 0.85)',
                    color: 'var(--color-dark)', // Text needs to be dark on white glass
                    border: '1px solid rgba(255,255,255,0.9)',
                    margin: '0 1rem'
                }}>
                    <h1 className="animate-fade-in" style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>
                        Zeg het MET POPPETJES
                    </h1>
                    <p style={{
                        fontSize: '1.5rem',
                        marginBottom: '2rem',
                        fontWeight: 500,
                        color: 'var(--color-dark)'
                    }}>
                        Voor therapie, coaching, opstellingen en meer
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/producten" className="btn btn-primary">
                            Naar de poppetjes <ArrowRight size={20} />
                        </Link>
                        <Link to="/werken-met" className="btn btn-secondary">
                            Meer over werken met poppetjes
                        </Link>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="container" style={{ padding: 'var(--spacing-lg) var(--spacing-sm)' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-secondary)', marginBottom: '1.5rem' }}>Welkom bij Met Poppetjes</h2>
                    <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: 1.8 }}>
                        Wil jij werken met poppetjes in bijvoorbeeld therapie, coaching of begeleiding, dan ben je bij mij aan het juiste adres.
                        Ik stel speciaal voor dat doel 2de hands Playmobil poppetjes beschikbaar.
                    </p>
                    <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: 1.8 }}>
                        Wil je ze zelf gebruiken bij jouw therapie? Om bijvoorbeeld je delen weer te geven of een familieopstelling te doen,
                        dan zijn deze poppetjes daar heel geschikt voor. Ik zoek de meest passende poppetjes graag samen met jou uit.
                    </p>
                    <p style={{ fontSize: '1.1rem', marginBottom: '2rem', lineHeight: 1.8 }}>
                        En ook als je als therapeut, psycholoog, begeleider, of coach gebruik wilt maken van poppetjes zijn mijn sets ideaal om mee te werken.
                        Maak je keuze uit de starter set, de basis set, de uitgebreide set of laat het samenstellen op maat.
                        Aan te vullen met Playmobil dieren, accessoires, themapoppetjes, etc.
                    </p>
                    <div style={{
                        background: 'var(--color-surface)',
                        padding: '1rem',
                        borderRadius: 'var(--radius-sm)',
                        display: 'inline-block'
                    }}>
                        <strong>Duurzaam:</strong> Het zijn 2de hands Playmobil poppetjes en accessoires!
                    </div>
                </div>
            </section>

            {/* Featured Sets */}
            <section style={{ background: 'var(--color-surface)', padding: 'var(--spacing-lg) 0' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Onze Sets</h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem'
                    }}>
                        {/* Starter Set */}
                        <div className="glass-card" style={{ padding: '2rem', textAlign: 'center', background: 'white' }}>
                            <div style={{ height: '200px', background: '#eee', marginBottom: '1.5rem', borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}>
                                <img src={`${import.meta.env.BASE_URL}images/e260529e-6ca8-47c8-a83e-c49f66eece43.avif`} alt="Starter Set" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <h3 style={{ color: 'var(--color-primary)' }}>Starter Set</h3>
                            <p style={{ margin: '1rem 0' }}>€10,50</p>
                            <Link to="/producten" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>Bekijken</Link>
                        </div>

                        {/* Basis Set */}
                        <div className="glass-card" style={{ padding: '2rem', textAlign: 'center', background: 'white', transform: 'scale(1.05)', border: '2px solid var(--color-primary)' }}>
                            <div style={{ position: 'absolute', top: -15, left: '50%', transform: 'translateX(-50%)', background: 'var(--color-primary)', color: 'white', padding: '0.25rem 1rem', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 'bold' }}>
                                Meest gekozen
                            </div>
                            <div style={{ height: '200px', background: '#eee', marginBottom: '1.5rem', borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}>
                                <img src={`${import.meta.env.BASE_URL}images/80f96d0d-6b55-498e-8a7b-8ab8944f9221.avif`} alt="Basis Set" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <h3 style={{ color: 'var(--color-primary)' }}>Basis Set</h3>
                            <p style={{ margin: '1rem 0' }}>€17,50</p>
                            <Link to="/producten" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Bekijken</Link>
                        </div>

                        {/* Uitgebreide Set */}
                        <div className="glass-card" style={{ padding: '2rem', textAlign: 'center', background: 'white' }}>
                            <div style={{ height: '200px', background: '#eee', marginBottom: '1.5rem', borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}>
                                <img src={`${import.meta.env.BASE_URL}images/93905c53-b188-41ff-b261-23edfb0affdf.avif`} alt="Uitgebreide Set" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <h3 style={{ color: 'var(--color-primary)' }}>Uitgebreide Set</h3>
                            <p style={{ margin: '1rem 0' }}>€21,50</p>
                            <Link to="/producten" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>Bekijken</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
