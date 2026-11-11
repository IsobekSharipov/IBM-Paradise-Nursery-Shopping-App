import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, selectCartItems } from "./CartSlice";

export const plants = [
  { id: 1, name: "Snake Plant", price: 15, category: "Air Purifying Plants", image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b7d?w=600&auto=format&fit=crop&q=80" },
  { id: 2, name: "Peace Lily", price: 18, category: "Air Purifying Plants", image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=600&auto=format&fit=crop&q=80" },
  { id: 3, name: "Lavender", price: 12, category: "Aromatic Plants", image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=600&auto=format&fit=crop&q=80" },
  { id: 4, name: "Rosemary", price: 10, category: "Aromatic Plants", image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&auto=format&fit=crop&q=80" },
  { id: 5, name: "Aloe Vera", price: 14, category: "Low Maintenance Plants", image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=600&auto=format&fit=crop&q=80" },
  { id: 6, name: "ZZ Plant", price: 20, category: "Low Maintenance Plants", image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&auto=format&fit=crop&q=80" },
];

const categories = ["Air Purifying Plants", "Aromatic Plants", "Low Maintenance Plants"];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  return (
    <main className="product-page">
      <h1>Our Houseplants</h1>
      <p>Choose from our collection of beautiful plants for your home.</p>
      {categories.map((category) => (
        <section key={category} aria-label={category}>
          <h2 className="category-heading">{category}</h2>
          <div className="product-grid">
            {plants.filter((plant) => plant.category === category).map((plant) => {
              const inCart = cartItems.some((item) => item.id === plant.id);
              return (
                <article className="plant-card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} loading="lazy" />
                  <h3>{plant.name}</h3>
                  <p>${plant.price.toFixed(2)}</p>
                  <button
                    type="button"
                    disabled={inCart}
                    onClick={() => dispatch(addItem(plant))}
                  >
                    {inCart ? "Added to Cart" : "Add to Cart"}
                  </button>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
}

export default ProductList;
