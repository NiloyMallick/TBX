import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import TBXSourcing from './pages/TBXSourcing';
import TBXProducts from './pages/TBXProducts';
import ARSPrinting from './pages/ARSPrinting';
import AAFashion from './pages/AAFashion';
import Sustainability from './pages/Sustainability';
import Career from './pages/Career';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tbx-sourcing" element={<TBXSourcing />} />
          <Route path="/tbx-sourcing/products" element={<TBXProducts />} />
          <Route path="/ars-printing" element={<ARSPrinting />} />
          <Route path="/aa-fashion" element={<AAFashion />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
