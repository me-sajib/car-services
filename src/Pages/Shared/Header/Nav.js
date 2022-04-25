import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import CustomLink from "../../Home/CustomLink/CustomLink";

const Nav = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          Logo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <CustomLink to="/">Home</CustomLink>
            </li>
            {user && (
              <>
                <li className="nav-item">
                  <CustomLink to="/addProduct">Add Product</CustomLink>
                </li>
                <li className="nav-item">
                  <CustomLink to="/manage">Manage Product</CustomLink>
                </li>
                <li className="nav-item">
                  <CustomLink to="/order">order</CustomLink>
                </li>
              </>
            )}

            {user ? (
              <li className="nav-item">
                <button
                  onClick={() => signOut(auth)}
                  className="btn btn-link text-decoration-none"
                >
                  Logout
                </button>
              </li>
            ) : (
              <li className="nav-item">
                <CustomLink to="/login">Login</CustomLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
