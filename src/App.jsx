import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Cart from './pages/Cart/Cart';
import Order from './pages/Order/Order';
import Confirmation from './pages/Confirmation/Confirmation';

export default function App() {
  return (
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
  );
}
