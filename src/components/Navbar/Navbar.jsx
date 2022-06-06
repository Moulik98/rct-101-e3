import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

// use react-router Link or NavLink
const Link = <a />;

const Navbar = () => {

  const { isAuthorized,login,logout  } =useContext(AuthContext)
  return (
    <div data-cy="navbar">
      <Link to="/" data-cy="navbar-home-link">Home</Link>
      <span data-cy="navbar-cart-items-count">{/* count here */}</span>
      <button data-cy="navbar-login-logout-button" onClick={()=>{
        if(isAuthorized) logout();
        else login()
      }}>
        {isAuthorized?"Logout" : "Login"}
      </button>
    </div>
  );
};

export default Navbar;
