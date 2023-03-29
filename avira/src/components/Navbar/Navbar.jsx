import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import heart from "../../assets/heart.svg";
import cart from "../../assets/cart.svg";
import search from "../../assets/search.svg";
import user from "../../assets/user.svg";
import "./Navbar.scss";
import { Cart } from "../Cart/Cart";
import { Wishlist } from "../Wishlist/Wishlist";

export const Navbar = () => {
  return (
    <header className="site-header">
      <div className="site-header__col">
        <Link to={"/"}>
          <img className="site-logo" src={logo} alt="Avira Logo" />
        </Link>
      </div>
      <ul className="site-header__col site-header__links">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/blogs"}>Blogs</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
      <div className="site-header__col site-header__col--right">
        <Link className="icon-link icon-link--login" to={"/login"}>
          <img src={user} alt="" role="presentation" />
          Login / Register
        </Link>
        <Link to={"/"}>
          <img src={search} alt="search icon" />
        </Link>
        <Link className="icon-link" to={"/"}>
          <img src={cart} alt="cart icon" />
          <span>1</span>
        </Link>
        <Link className="icon-link" to={"/"}>
          <img src={heart} alt="wishlist icon" />
          <span>2</span>
        </Link>
      </div>
      <Cart />
      <Wishlist />
    </header>
  );
};
