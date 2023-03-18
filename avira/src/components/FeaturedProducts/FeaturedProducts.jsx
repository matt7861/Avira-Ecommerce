import React, { useEffect, useState } from "react";
import "./FeaturedProducts.scss";
import axios from "axios";

export const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          import.meta.env.VITE_API_URL + "/products",
          {
            headers: {
              Authorization: "bearer " + import.meta.env.VITE_API_TOKEN,
            },
          }
        );
        setProducts(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return <div className="featured-products">FeaturedProducts</div>;
};
