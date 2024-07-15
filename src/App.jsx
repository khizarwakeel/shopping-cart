import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import ProductCard from "./components/productCard";
import CartPage from "./components/cartPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductCard />} />
          <Route path="/product-list" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
