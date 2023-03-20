import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

export const Card = ({ item }) => {
  return (
    <div>
      <Link to={"/product/" + item.id}>
        <img
          src={
            import.meta.env.VITE_API_UPLOAD_URL +
            item.attributes?.img?.data?.attributes?.url
          }
          alt=""
        />
        <p>{item.attributes?.brand?.data?.attributes?.title}</p>
        <p>{item.attributes?.title}</p>
        <p>${item.attributes?.price}</p>
        <a href="#" className="button">
          Add to cart
        </a>
      </Link>
    </div>
  );
};
