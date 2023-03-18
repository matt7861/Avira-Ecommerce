import React from "react";
import { Categories } from "../../components/Categories/Categories";
import { FeaturedProducts } from "../../components/FeaturedProducts/FeaturedProducts";

export const Home = () => {
  return (
    <div className="home">
      <Categories />
      <FeaturedProducts />
    </div>
  );
};
