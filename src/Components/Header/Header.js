import { Link, NavLink, useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart, AiFillHeart } from "react-icons/ai";

import { CgProfile } from "react-icons/cg";
import { useContext, useRef } from "react";
import {  AuthContext } from "../../Contexts/AuthContext";
import { CartContext } from "../../Contexts/CartContext"; 

import "./Header.css";

export const Header = () => {
    const timerId = useRef();
    const navigate = useNavigate();
    const { checkLogin } = useContext(AuthContext);
    const { getCartCount, getWishlistCount, addFilterQuery } =useContext(CartContext)
    
  const getActiveWishlist = ({ isActive }) => {
    return {
      color: isActive && "#991b1b",
    };
  };
  const getActiveCart = ({ isActive }) => {
    return {
      color: isActive && "#15803d",
    };
  };
  const searchHandler = (e) => {
    navigate("/products");
    addFilterQuery(e);
  };
  const debounceSearch = (callback, e, delay) => {
    clearTimeout(timerId.current);
    timerId.current = setTimeout(() => callback(e), delay);
  };

return (
    <>
      <nav>
        <h1 className="header-name">
          <Link className="header-name-a" to="/">
            Tiny-Toes
          </Link>
        </h1>
        <input
          className="search-input"
          type="text"
          placeholder="Search"
          onChange={(e) => debounceSearch(searchHandler, e, 500)}
        />
        <div className="header-links">
          <Link to="/products">
            <button
              style={{
                display: checkLogin() ? "" : "none",
              }}
              className="btn-header-login explore"
            >
              Explore
            </button>
          </Link>
          <Link to="/login">
            <button
              className="btn-header-login"
            >
              Login
            </button>
          </Link>

          <NavLink
            style={getActiveWishlist}
            to="/wishlist"
            className="link-wishlist"
          >
            <AiFillHeart className="link-wishlist-a" />
            <span
              className="badge"
              value={getWishlistCount()}
            ></span>
          </NavLink>
          <NavLink style={getActiveCart} to="/cart" className="link-cart">
            <AiOutlineShoppingCart />
            <span
            
              className="badge"
              value={getCartCount()}
            ></span>
          </NavLink>
          <button
            
            className="btn-header-logout"
            onClick={() => navigate("/profile")}
          > 
             
            <CgProfile className="btn-header-logout-icon" />
           </button> 
        </div>
      </nav>
    </>
  );
            }