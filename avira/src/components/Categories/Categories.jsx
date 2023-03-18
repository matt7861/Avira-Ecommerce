import React from "react";
import { Link } from "react-router-dom";
import "./Categories.scss";

export const Categories = () => {
  return (
    <div className="categories">
      <div className="container">
        <div className="row">
          <div className="categories__col categories__col--left">
            <Link className="categories__item" to={"/shop/men"}>
              <img src="" alt="" />
            </Link>
            <Link className="categories__item" to={"/shop/men"}>
              <img src="" alt="" />
            </Link>
          </div>
          <div className="categories__col categories__col--right">
            <Link className="categories__item" to={"/shop/men"}>
              <img src="" alt="" />
            </Link>
            <Link className="categories__item" to={"/shop/men"}>
              <img src="" alt="" />
            </Link>
            <Link className="categories__item" to={"/shop/men"}>
              <img src="" alt="" />
            </Link>
            <Link className="categories__item" to={"/shop/men"}>
              <img src="" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
