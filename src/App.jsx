import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Order from './pages/Order';
import Confirmation from './pages/Confirmation';

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/"               element={<Home />} />
          <Route path="/catalog"        element={<Catalog />} />
          <Route path="/product/:id"    element={<ProductDetail />} />
          <Route path="/cart"           element={<Cart />} />
          <Route path="/order"          element={<Order />} />
          <Route path="/confirmation"   element={<Confirmation />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
