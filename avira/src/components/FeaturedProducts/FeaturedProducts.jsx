import React from "react";
import "./FeaturedProducts.scss";
import { Card } from "../Card/Card";
import useFetch from "../../hooks/useFetch";

export const FeaturedProducts = () => {
  const { data, loading, error } = useFetch(
    "/products?populate=*&[filters][type][$eq]=featured&pagination[limit]=4"
  );

  return (
    <div className="featured-products">
      <h3>FEATURED PRODUCTS</h3>
      <div className="featured-products__row">
        {loading
          ? "loading"
          : data?.map((product, index) => {
              return <Card item={product} key={index} />;
            })}
      </div>
    </div>
  );
};
