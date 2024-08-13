import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/nav.css";
import { Link, useNavigate, NavLink } from "react-router-dom";
import {
  faCartShopping,
  faHeart,
  faSignOutAlt,
  faSearch,
  faUser,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Mycontext } from "../Context";

const Navbar = () => {
  const { items, setItems } = useContext(Mycontext);
  const { search, setSearch } = useContext(Mycontext);
  const { matcheditems, setMatcheditems } = useContext(Mycontext);
  const { username, setUsername } = useContext(Mycontext);
  const { cartlist, setCartlist } = useContext(Mycontext);

  const nav = useNavigate();

  function handleInputChange(e) {
    const inputText = e.target.value;
    setSearch(inputText);  
  }

  function searchitem() {
    const matched = items.filter((item) =>
      item.description.toLowerCase().includes(search.toLowerCase()) ||
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setMatcheditems(matched);      
  }

  const profile = () => {
    if (username === '') {
      alert("Please login to show user details");
    } else {
      nav("/userdetails");
    }
  }

  return (
    <div className="body">
      <section id="navbar">
        <div className="nav-container">
          <div>
            <img
              src="https://t3.ftcdn.net/jpg/05/16/27/60/240_F_516276029_aMcP4HU81RVrYX8f5qCAOCCuOiCsu5UF.jpg"
              className="logo"
              alt="Logo"
            />
          </div>
          <div className="nav">
            <ul className="nav1">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/men"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  Men
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/women"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  Women
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/kids"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  Kids
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="search">
            <input
              type="text"
              onChange={handleInputChange}
              placeholder="Search items here"
            />
            <button onClick={searchitem}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          <div>
            <ul className="nav2">
              <li>
                <Link to="/wish">
                  <FontAwesomeIcon icon={faHeart} />
                  <span className="shop-nav-icon">Wishlist</span>
                </Link>
              </li>
              <li>
                <Link to="/cart">
                  <FontAwesomeIcon icon={faCartShopping} />
                  <span className="shop-nav-icon">{cartlist.length} Cart</span>
                </Link>
              </li>
              <li>
                <Link to="/register">
                  <FontAwesomeIcon icon={faSignInAlt} />
                  <span className="shop-nav-icon">
                    {username === "" ? "Login" : "Logout"}
                  </span>
                </Link>
              </li>
              <li onClick={profile}>
                <FontAwesomeIcon icon={faUser} />
                <span className="shop-nav-icon"></span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/*--------------------------------------------items----------------------------------------------------------- */}
    </div>
  );
};

export default Navbar;

