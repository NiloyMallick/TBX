import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import AAFashion from "./pages/AAFashion";
import ARSPrinting from "./pages/ARSPrinting";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Sustainability from "./pages/Sustainability";
import TBXProducts from "./pages/TBXProducts";
import TBXSourcing from "./pages/TBXSourcing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/tbx-sourcing" element={<TBXSourcing />} />
          <Route path="/tbx-sourcing/products" element={<TBXProducts />} />
          <Route path="/ars-printing" element={<ARSPrinting />} />
          <Route path="/aa-fashion" element={<AAFashion />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
