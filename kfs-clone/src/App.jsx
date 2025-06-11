import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Coupons from './pages/Coupons'
import Promotions from './pages/Promotions'
import Cart from './pages/Cart'
import Navigation from './components/Navigation'
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <div style={{ flex: 1 }}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/coupons" element={<Coupons />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App