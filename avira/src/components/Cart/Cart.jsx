import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import "./Cart.scss";

export const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const totalPrice = () => {
    let total = 0;
    products.forEach((product) => (total += product.price * product.quantity));
    return total.toFixed(2);
  };
  const dispatch = useDispatch();

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

      <button onClick={() => dispatch(resetCart())}>empty</button>
    </div>
  );
};
