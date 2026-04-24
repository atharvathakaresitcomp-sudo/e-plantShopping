import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./features/CartSlice";

const plants = {
  Indoor: [
    { id: 1, name: "Snake Plant", price: 15, image: "https://via.placeholder.com/100" },
    { id: 2, name: "Peace Lily", price: 20, image: "https://via.placeholder.com/100" },
    { id: 3, name: "Spider Plant", price: 12, image: "https://via.placeholder.com/100" },
    { id: 4, name: "ZZ Plant", price: 18, image: "https://via.placeholder.com/100" },
    { id: 5, name: "Rubber Plant", price: 22, image: "https://via.placeholder.com/100" },
    { id: 6, name: "Areca Palm", price: 25, image: "https://via.placeholder.com/100" }
  ],
  Outdoor: [
    { id: 7, name: "Rose", price: 10, image: "https://via.placeholder.com/100" },
    { id: 8, name: "Tulsi", price: 8, image: "https://via.placeholder.com/100" },
    { id: 9, name: "Hibiscus", price: 14, image: "https://via.placeholder.com/100" },
    { id: 10, name: "Jasmine", price: 13, image: "https://via.placeholder.com/100" },
    { id: 11, name: "Marigold", price: 9, image: "https://via.placeholder.com/100" },
    { id: 12, name: "Bougainvillea", price: 16, image: "https://via.placeholder.com/100" }
  ],
  Succulent: [
    { id: 13, name: "Aloe Vera", price: 10, image: "https://via.placeholder.com/100" },
    { id: 14, name: "Cactus", price: 8, image: "https://via.placeholder.com/100" },
    { id: 15, name: "Echeveria", price: 11, image: "https://via.placeholder.com/100" },
    { id: 16, name: "Jade Plant", price: 15, image: "https://via.placeholder.com/100" },
    { id: 17, name: "Haworthia", price: 12, image: "https://via.placeholder.com/100" },
    { id: 18, name: "Sedum", price: 9, image: "https://via.placeholder.com/100" }
  ]
};

function ProductList({ goToCart }) {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  return (
    <div>
      <h2>Our Plants</h2>

      <button onClick={goToCart}>Go to Cart</button>

      {Object.keys(plants).map(category => (
        <div key={category}>
          <h3>{category}</h3>

          {plants[category].map(p => (
            <div key={p.id}>
              <img src={p.image} alt={p.name} />
              <h4>{p.name}</h4>
              <p>₹{p.price}</p>

              <button
                onClick={() => dispatch(addItem(p))}
                disabled={cart.find(i => i.id === p.id)}
              >
                {cart.find(i => i.id === p.id) ? "Added" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
