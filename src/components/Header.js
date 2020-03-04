import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Auth from "./Auth";

const Header = ({ userName }) => {
  return (
    <nav className="navbar navbar-dark bg-dark d-flex justify-content-around">
      <Link to="/" className="navbar-brand">
        TodoList App
      </Link>
      <span className="navbar-brand">{userName}</span>
      <Auth />
    </nav>
  );
};

const mapStateToProps = state => ({
  userName: state.authReducer.userName
});

export default connect(mapStateToProps)(Header);
