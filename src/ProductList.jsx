import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./features/CartSlice";

const plants = [
  { id: 1, name: "Aloe Vera", price: 10, category: "Succulent" },
  { id: 2, name: "Snake Plant", price: 15, category: "Indoor" },
  { id: 3, name: "Peace Lily", price: 20, category: "Indoor" },
  { id: 4, name: "Cactus", price: 8, category: "Succulent" },
  { id: 5, name: "Fern", price: 12, category: "Outdoor" },
  { id: 6, name: "Bamboo", price: 18, category: "Outdoor" }
];

function ProductList() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  return (
    <div>
      <h2>Plants</h2>

      {plants.map(p => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p>₹{p.price}</p>

          <button
            onClick={() => dispatch(addToCart(p))}
            disabled={cart.find(i => i.id === p.id)}
          >
            {cart.find(i => i.id === p.id) ? "Added" : "Add to Cart"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
