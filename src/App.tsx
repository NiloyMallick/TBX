import { BrowserRouter, Route, Routes } from "react-router-dom";

import AAFashion from "./pages/AAFashion";
import AAFashionCategory from "./pages/AAFashionCategory";
import ARSPrinting from "./pages/ARSPrinting";
import ARSPrintingCategory from "./pages/ARSPrintingCategory";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import ProductCategory from "./pages/ProductCategory";
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
          <Route path="/tbx-sourcing/products/:categoryId" element={<ProductCategory />} />
          <Route path="/ars-printing" element={<ARSPrinting />} />
          <Route path="/ars-printing/:categoryId" element={<ARSPrintingCategory />} />
          <Route path="/aa-fashion" element={<AAFashion />} />
          <Route path="/aa-fashion/:categoryId" element={<AAFashionCategory />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
