import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import WorkingWithDolls from './pages/WorkingWithDolls';
import DisDolls from './pages/DisDolls';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/producten" element={<Products />} />
          <Route path="/werken-met" element={<WorkingWithDolls />} />
          <Route path="/dis-delen" element={<DisDolls />} />
          <Route path="/over-mij" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      {/* Scroll to top component from router if available, or just standard behavior */}
    </div>
  );
}

export default App;
