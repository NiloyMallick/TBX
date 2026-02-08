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
    <h1 className="text-3xl font-bold text-center mt-20">Welcome to TBX Group</h1>
  );
}

export default App;
