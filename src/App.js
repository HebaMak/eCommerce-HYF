import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductContext from "./hooks/context";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Favorites from "./pages/Favorites";
import "./App.css";

function App() {
  return (
    <ProductContext>
      <BrowserRouter>
        <h1 className="title">Products</h1>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </ProductContext>
  );
}

export default App;
