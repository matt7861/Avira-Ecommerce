import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

export const Card = ({ item }) => {
  return (
    <div className="card">
      <Link to={"/product/" + item.id}>
        <img
          className="card__image"
          src={
            import.meta.env.VITE_API_UPLOAD_URL +
            item.attributes?.img?.data?.attributes?.url
          }
          alt=""
        />
        <span className="card__brand">
          {item.attributes?.brand?.data?.attributes?.title}
        </span>
        <span className="card__title">{item.attributes?.title}</span>
        <span className="card__price">${item.attributes?.price}</span>
      </Link>
      <a href="#" className="button">
        Add to cart
      </a>
    </div>
  );
};
