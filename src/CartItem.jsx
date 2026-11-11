import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity,
  selectCartItems,
  selectCartCount,
  selectCartTotal,
} from "./CartSlice";

function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const totalItems = useSelector(selectCartCount);
  const totalCost = useSelector(selectCartTotal);

  const increase = (item) =>
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));

  const decrease = (item) =>
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));

  const remove = (id) => dispatch(removeItem(id));

  const checkout = () => window.alert("Coming Soon!");

  return (
    <main className="cart-page">
      <h1>Shopping Cart</h1>
      <h2>Total Cart Amount: ${totalCost.toFixed(2)}</h2>
      <p>Total Plants: {totalItems}</p>

      {items.length === 0 ? (
        <p>Your shopping cart is empty. Browse our plants to get started!</p>
      ) : (
        <div className="cart-items">
          {items.map((item) => (
            <article className="cart-row" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="cart-info">
                <h3>{item.name}</h3>
                <p>Unit Price: ${item.price.toFixed(2)}</p>
                <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                <div className="quantity-controls">
                  <button
                    type="button"
                    aria-label={`Decrease ${item.name} quantity`}
                    onClick={() => decrease(item)}
                  >
                    −
                  </button>
                  <strong aria-label="Quantity">{item.quantity}</strong>
                  <button
                    type="button"
                    aria-label={`Increase ${item.name} quantity`}
                    onClick={() => increase(item)}
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                className="delete-button"
                type="button"
                onClick={() => remove(item.id)}
                aria-label={`Delete ${item.name} from cart`}
              >
                Delete
              </button>
            </article>
          ))}
        </div>
      )}

      <div className="cart-actions">
        <button
          type="button"
          className="primary-button"
          onClick={onContinueShopping}
        >
          Continue Shopping
        </button>
        <button
          type="button"
          className="primary-button"
          onClick={checkout}
        >
          Checkout
        </button>
      </div>
    </main>
  );
}

export default CartItem;
