import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Card } from "../Card/Card";
import "./Categories.scss";

export const Categories = () => {
  const { data, loading, error } = useFetch("/categories?populate=*");
  return (
    <div className="featured-products">
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
