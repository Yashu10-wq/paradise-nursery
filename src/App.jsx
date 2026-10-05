import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";

import "./App.css";

function Navbar() {
  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <Link to="/plants">
        <h2>Paradise Nursery</h2>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/plants">Plants</Link>

        <Link to="/about">About Us</Link>

        <Link to="/cart" className="cart-link">
          🛒 Cart ({cartCount})
        </Link>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>

        <p>
          Bring nature home with our beautiful
          collection of indoor, flowering, and
          aromatic plants.
        </p>

        <Link to="/plants">
          <button className="get-started-btn">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/plants"
          element={
            <>
              <Navbar />
              <ProductList />
            </>
          }
        />

        <Route
          path="/cart"
          element={
            <>
              <Navbar />
              <CartItem />
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <AboutUs />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;