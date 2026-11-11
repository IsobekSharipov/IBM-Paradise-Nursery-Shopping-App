import React, { useState } from "react";
import AboutUs from "./AboutUs";
import ProductList from "./ProductList";
import { useSelector } from "react-redux";
import { selectCartCount } from "./CartSlice";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const cartCount = useSelector(selectCartCount);

  function goTo(nextPage) {
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (page === "home") {
    return (
      <main className="landing-page">
        <div className="landing-content">
          <h1>Paradise Nursery</h1>
          <p>
            Welcome to Paradise Nursery! Discover beautiful indoor plants
            to brighten your home, refresh your workspace, and bring
            a little nature into your everyday life.
          </p>
          <button
            type="button"
            className="get-started"
            onClick={() => goTo("plants")}
          >
            Get Started
          </button>
        </div>
      </main>
    );
  }

  return (
    <>
      <header className="shop-header">
        <a href="#home" onClick={(event) => { event.preventDefault(); goTo("home"); }}>
          <strong>Paradise Nursery</strong>
        </a>
        <nav aria-label="Shop navigation">
          <a href="#about" onClick={(event) => { event.preventDefault(); goTo("about"); }}>
            About Us
          </a>
          <a href="#plants" onClick={(event) => { event.preventDefault(); goTo("plants"); }}>
            Plants
          </a>
          <a href="#cart" onClick={(event) => { event.preventDefault(); goTo("cart"); }}>
            Cart <span className="cart-count">{cartCount}</span>
          </a>
        </nav>
      </header>

      {page === "about" ? (
        <AboutUs />
      ) : page === "plants" ? (
        <ProductList />
      ) : (
        <main className="cart-page">
          <h1>Shopping Cart</h1>
          <p>Your shopping cart is empty.</p>
          <button type="button" className="primary-button" onClick={() => goTo("plants")}>
            Continue Shopping
          </button>
        </main>
      )}
    </>
  );
}

export default App;
