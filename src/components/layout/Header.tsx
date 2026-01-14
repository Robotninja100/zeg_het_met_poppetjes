import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Poppetjes & materialen', path: '/producten' },
    { name: 'Werken met poppetjes', path: '/werken-met' },
    { name: 'Delen/DIS & poppetjes', path: '/dis-delen' },
    { name: 'Over mij', path: '/over-mij' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header" style={{
      padding: '1rem 0',
      background: 'white',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: 'var(--shadow-sm)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
          <img
            src={`${import.meta.env.BASE_URL}images/Logo.png`}
            alt="Met Poppetjes Logo"
            style={{ height: '60px', borderRadius: '50%' }}
          />
          <div style={{
            display: 'flex',
            flexDirection: 'column'
          }}>
            <span style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: 'var(--color-primary)',
              lineHeight: 1
            }}>MET POPPETJES</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav" style={{ display: 'none' }}>
          {/* We will use a media query in css to show this, or inline logic + width hook. 
              For simplicity, sticking to inline styles + css class logic 
           */}
          <ul style={{ display: 'flex', gap: '1.5rem', listStyle: 'none' }}>
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  style={{
                    textDecoration: 'none',
                    color: location.pathname === item.path ? 'var(--color-primary)' : 'var(--color-dark)',
                    fontWeight: 500,
                    fontSize: '1.1rem',
                    padding: '0.5rem 0',
                    borderBottom: location.pathname === item.path ? '2px solid var(--color-primary)' : 'none'
                  }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="mobile-toggle" style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: 'var(--color-dark)'
        }}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <nav style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'white',
          padding: '2rem',
          boxShadow: 'var(--shadow-md)',
          borderTop: '1px solid var(--color-surface)'
        }}>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', listStyle: 'none', textAlign: 'center' }}>
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    textDecoration: 'none',
                    color: 'var(--color-dark)',
                    fontSize: '1.2rem',
                    fontWeight: '600'
                  }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <style>{`
        @media (min-width: 900px) {
          .mobile-toggle { display: none !important; }
          .desktop-nav { display: block !important; }
        }
      `}</style>
    </header>
  );
};

export default Header;
