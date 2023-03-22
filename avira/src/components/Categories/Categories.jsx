import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Card } from "../Card/Card";
import "./Categories.scss";

const CategoryImage = ({ data, index }) => {
  return (
    <div className="categories__col">
      {data?.[index]?.attributes?.img?.data?.attributes?.url && (
        <>
          <img
            src={
              import.meta.env.VITE_API_UPLOAD_URL +
              data[index].attributes.img.data.attributes.url
            }
            alt=""
          />

          <div className="categories__label">
            {data[index].attributes.title}
          </div>
        </>
      )}
    </div>
  );
};

export const Categories = () => {
  const { data, loading, error } = useFetch(
    "/categories?populate=*&pagination[limit]=6"
  );
  console.log(data);
  return (
    <div className="categories">
      {loading ? (
        "loading"
      ) : (
        <div className="categories__row">
          <div className="categories__wrapper">
            <CategoryImage data={data} index={1} />
            <CategoryImage data={data} index={0} />
          </div>
          <div className="categories__wrapper">
            <CategoryImage data={data} index={2} />
            <CategoryImage data={data} index={3} />
            <CategoryImage data={data} index={4} />
            <CategoryImage data={data} index={5} />
          </div>
        </div>
      )}
    </div>
  );
};
