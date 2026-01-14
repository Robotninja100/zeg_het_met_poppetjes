import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

const Products = () => {
    const categories = [
        { name: 'Starter set', icon: '🧍‍♂️' },
        { name: 'Basis set', icon: '🧍‍♂️🧍‍♂️' },
        { name: 'Uitgebreide set', icon: '🧍‍♂️🧍‍♂️🧍‍♂️' },
        { name: 'Set op maat', icon: '✨' },
        { name: 'Thema-poppetjes', icon: '👮' },
        { name: 'Dieren', icon: '🦁' },
        { name: 'Accessoires', icon: '🎒' },
        { name: 'Materialen', icon: '🥡', sub: 'Binnenkort' },
    ];

    const sets = [
        {
            title: 'Starter set',
            price: '€10,50',
            description: 'Set met 7 poppetjes met verschillende leeftijden en uiterlijk (4 volwassenen, 2 kinderen en 1 baby).',
            image: '/images/e260529e-6ca8-47c8-a83e-c49f66eece43.avif'
        },
        {
            title: 'Basis set',
            price: '€17,50',
            description: 'Set met 12 poppetjes met verschillende leeftijden en uiterlijk (6 volwassenen, 4 kinderen en 2 baby’s).',
            image: '/images/80f96d0d-6b55-498e-8a7b-8ab8944f9221.avif',
            highlight: true
        },
        {
            title: 'Uitgebreide set',
            price: '€21,50',
            description: 'Set met 14 poppetjes met verschillende leeftijden en uiterlijk (opa & oma, 6 volwassenen, 4 kinderen en 2 baby’s, incl. hoofdeksels en accessoires).',
            image: '/images/93905c53-b188-41ff-b261-23edfb0affdf.avif'
        }
    ];

    return (
        <div className="container" style={{ padding: 'var(--spacing-md) var(--spacing-sm)' }}>
            <h1 style={{ textAlign: 'center', color: 'var(--color-primary)', marginBottom: '3rem' }}>Poppetjes en materialen</h1>

            {/* Category Buttons */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '1rem',
                marginBottom: '4rem'
            }}>
                {categories.map((cat) => (
                    <button key={cat.name} className="glass-card" style={{
                        padding: '1.5rem',
                        textAlign: 'center',
                        border: '2px solid transparent',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        background: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'var(--color-primary)';
                            e.currentTarget.style.transform = 'translateY(-5px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'transparent';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                        onClick={() => {
                            const el = document.getElementById(cat.name.replace(/\s+/g, '-').toLowerCase());
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        <span style={{ fontSize: '2rem' }}>{cat.icon}</span>
                        <span style={{ fontWeight: '600' }}>{cat.name}</span>
                        {cat.sub && <span style={{ fontSize: '0.8rem', color: 'var(--color-accent)' }}>{cat.sub}</span>}
                    </button>
                ))}
            </div>

            {/* Product Details */}
            <h2 style={{ marginBottom: '2rem', borderBottom: '2px solid var(--color-surface)', paddingBottom: '0.5rem' }}>De Sets</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                {sets.map((set) => (
                    <div key={set.title} id={set.title.replace(/\s+/g, '-').toLowerCase()} className="glass-card" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem',
                        padding: '2rem',
                        background: 'white',
                        border: set.highlight ? '2px solid var(--color-primary)' : '1px solid #eee'
                    }}>
                        <div style={{ height: '300px', background: '#f9f9f9', borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}>
                            <img src={set.image} alt={set.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <h3 style={{ color: 'var(--color-primary)', fontSize: '2rem' }}>{set.title}</h3>
                            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '0.5rem 0 1.5rem', color: 'var(--color-secondary)' }}>
                                {set.price}
                            </div>
                            <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
                                {set.description}
                            </p>
                            <Link to="/contact" className="btn btn-primary" style={{ alignSelf: 'start' }}>
                                <ShoppingCart size={20} /> Bestellen via formulier
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* Ordering Info */}
            <div style={{ marginTop: '4rem', padding: '2rem', background: 'var(--color-surface)', borderRadius: 'var(--radius-md)' }}>
                <h3>Bestellen & Verzenden</h3>
                <p style={{ marginBottom: '1rem' }}>
                    Bestellen gaat eenvoudig via het bestelformulier. Na ontvangst van je bestelling neem ik contact op voor de betaling en verzending.
                </p>
                <p>
                    Betaling verloopt veilig via een betaalverzoek of <a href="https://www.marktplaats.nl/u/met-poppetjes/57041140/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Marktplaats</a>. Verzending vindt plaats na ontvangst van betaling. Ophalen is ook mogelijk in overleg.
                </p>
                <div style={{ marginTop: '2rem' }}>
                    <Link to="/contact" className="btn btn-primary">Ga naar bestelformulier</Link>
                </div>
            </div>
        </div>
    );
};

export default Products;
