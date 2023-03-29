import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { addToCart } from "../../redux/cartReducer";
import { addToWishlist } from "../../redux/wishlistReducer";
import "./Product.scss";

export const Product = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  const [featuredImage, setFeaturedImage] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const decreaseQuantity = () => {
    quantity > 1 ? setQuantity((prev) => prev - 1) : 1;
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="single-product">
      {loading ? (
        "loading"
      ) : (
        <div className="single-product__container">
          <div className="single-product__left-col">
            <div>
              <img
                src={
                  import.meta.env.VITE_API_UPLOAD_URL +
                  data?.attributes.img?.data?.attributes?.url
                }
                onClick={() => setFeaturedImage("img")}
                alt=""
              />
              <img
                src={
                  import.meta.env.VITE_API_UPLOAD_URL +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                onClick={() => setFeaturedImage("img2")}
                alt=""
              />
            </div>

            <img
              className="single-product__featured"
              src={
                import.meta.env.VITE_API_UPLOAD_URL +
                data?.attributes[featuredImage]?.data?.attributes?.url
              }
              alt=""
            />
          </div>

          <div className="single-product__right-col">
            <h3>{data?.attributes?.title}</h3>
            <p>${data?.attributes?.price}</p>
            <p>{data?.attributes?.desc}</p>
            <div className="quantity-wrapper">
              <button onClick={decreaseQuantity}>-</button>
              <span>{quantity}</span>
              <button onClick={increaseQuantity}>+</button>
            </div>

            <button
              className="add-to-cart"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data?.attributes?.title,
                    desc: data?.attributes?.desc,
                    quantity: quantity,
                    price: data?.attributes?.price,
                  })
                )
              }
            >
              ADD TO CART
            </button>
            <button
              onClick={() =>
                dispatch(
                  addToWishlist({
                    id: data.id,
                    title: data?.attributes?.title,
                    desc: data?.attributes?.desc,
                    price: data?.attributes?.price,
                  })
                )
              }
            >
              ADD TO WISHLIST
            </button>
            <div className="info"></div>
          </div>
        </div>
      )}
    </div>
  );
};
