import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetWishlist } from "../../redux/wishlistReducer";
import "./Wishlist.scss";

export const Wishlist = () => {
  const list = useSelector((state) => state.wishlist.wishlistProducts);
  const totalPrice = () => {
    let total = 0;
    list.forEach((product) => (total += product.price));

    return total.toFixed(2);
  };
  const dispatch = useDispatch();

  return (
    <div className="wishlist">
      {list?.map((item, index) => (
        <div key={index}>
          <h1>{item.title}</h1>
          <p>{item.desc}</p>
          <p>{item.quantity}</p>
          <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
        </div>
      ))}
      <div>$ {totalPrice()}</div>

      <button onClick={() => dispatch(resetWishlist())}>empty</button>
    </div>
  );
};
