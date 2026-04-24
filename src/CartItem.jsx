import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity, removeItem } from "./features/CartSlice";

function CartItem({ goBack }) {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>

      <h3>Total: ₹{total}</h3>

      {cart.map(i => (
        <div key={i.id}>
          <h4>{i.name}</h4>
          <p>₹{i.price} x {i.quantity} = ₹{i.price * i.quantity}</p>

          <button onClick={() => dispatch(updateQuantity({ id: i.id, amount: 1 }))}>+</button>
          <button onClick={() => dispatch(updateQuantity({ id: i.id, amount: -1 }))}>-</button>
          <button onClick={() => dispatch(removeItem(i.id))}>Delete</button>
        </div>
      ))}

      <button onClick={() => alert("Coming Soon")}>
        Checkout
      </button>

      <br /><br />

      <button onClick={goBack}>
        Continue Shopping
      </button>
    </div>
  );
}

export default CartItem;
