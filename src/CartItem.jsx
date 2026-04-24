import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, remove } from "./features/CartSlice";
import { Link } from "react-router-dom";

function CartItem() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <h3>Total: ₹{total}</h3>

      {cart.map(i => (
        <div key={i.id}>
          <h4>{i.name}</h4>
          <p>₹{i.price} x {i.qty} = ₹{i.price * i.qty}</p>

          <button onClick={() => dispatch(increment(i.id))}>+</button>
          <button onClick={() => dispatch(decrement(i.id))}>-</button>
          <button onClick={() => dispatch(remove(i.id))}>Delete</button>
        </div>
      ))}

      <button>Checkout (Coming Soon)</button>
      <br /><br />

      <Link to="/plants">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
}

export default CartItem;
