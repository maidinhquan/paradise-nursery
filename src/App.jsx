import { Link, NavLink, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import CartItem from './CartItem';
import { selectCartCount } from './CartSlice';
import './App.css';

function Navbar() {
  const count = useSelector(selectCartCount);
  return <header className="site-header"><nav className="nav container" aria-label="Main navigation">
    <Link to="/" className="brand"><span className="brand-mark">✦</span> Paradise <strong>Nursery</strong></Link>
    <div className="nav-links"><NavLink end to="/">Home</NavLink><NavLink to="/plants">Plants</NavLink><NavLink to="/cart" className="cart-link" aria-label={`Cart with ${count} items`}><span aria-hidden="true">🛒</span> Cart <span className="cart-count">{count}</span></NavLink></div>
  </nav></header>;
}
function Home() {
  return <main><section className="hero"><div className="hero-overlay"><div className="container hero-content"><p className="hero-kicker">Your home, naturally.</p><h1>Paradise Nursery</h1><p>Bring fresh life to your space with thoughtfully selected houseplants. Discover easy-care greens, leafy icons, and beautiful blooms.</p><Link to="/plants" className="button button-light">Get Started <span aria-hidden="true">→</span></Link></div></div></section><AboutUs/><section className="home-cta container"><h2>Find a plant that feels like home.</h2><Link className="button button-primary" to="/plants">Explore our plants →</Link></section></main>;
}
export default function App() {
  return <><Navbar/><Routes><Route path="/" element={<Home/>}/><Route path="/plants" element={<ProductList/>}/><Route path="/cart" element={<CartItem/>}/><Route path="*" element={<Home/>}/></Routes><footer className="site-footer">© {new Date().getFullYear()} Paradise Nursery · Grow something good.</footer></>;
}
