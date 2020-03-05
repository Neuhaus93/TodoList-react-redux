import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Auth from "./Auth";

const Header = ({ userName, isSignedIn }) => {
  return (
    <nav className="navbar navbar-dark bg-dark d-flex justify-content-around">
      {isSignedIn ? (
        <a className="navbar-brand" href="#">
          TodoList App
        </a>
      ) : (
        <Link to="/" className="navbar-brand">
          TodoList App
        </Link>
      )}
      <span className="navbar-brand">{userName}</span>
      <Auth />
    </nav>
  );
};

const mapStateToProps = state => ({
  isSignedIn: state.userActions.isSignedIn,
  userName: state.userActions.userName
});

export default connect(mapStateToProps)(Header);
