import React from "react";
import { Link } from "react-router-dom";

import Auth from "./Auth";

const Header = () => {
  return (
    <nav class="navbar navbar-dark bg-dark d-flex justify-content-around">
      <Link to="/" className="navbar-brand">
        TodoList App
      </Link>
      <Auth />
    </nav>
  );
};

export default Header;
