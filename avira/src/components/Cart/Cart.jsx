import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import "./Cart.scss";
import { loadStripe } from "@stripe/stripe-js";
import { makeRequest } from "../../makeRequest";

export const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const totalPrice = () => {
    let total = 0;
    products.forEach((product) => (total += product.price * product.quantity));
    return total.toFixed(2);
  };
  const dispatch = useDispatch();

  const stripePromise = loadStripe(
    "pk_test_51MqvOjDpT19KJ4yCT15o04bX51wtDefqVjFPzUJEWqd8uGohru5WbrGYrWPqJq5TJi0igzlMyVp3fr5pBMGfVDNC00JeO8TZag"
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="cart">
      {products?.map((item, index) => (
        <div key={index}>
          <h1>{item.title}</h1>
          <p>{item.desc}</p>
          <p>{item.quantity}</p>
          <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
        </div>
      ))}
      <div>$ {totalPrice()}</div>
      <button onClick={handlePayment}>Checkout</button>
      <button onClick={() => dispatch(resetCart())}>empty</button>
    </div>
  );
};
