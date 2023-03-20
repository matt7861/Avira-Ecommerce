import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

export const Product = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][id][$eq]=${id}`
  );
  return <div>{loading ? "loading" : data?.[0]?.attributes?.title}</div>;
};
