import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { tryLogginOut } from "../actions";

const Header = ({ userName, isSignedIn, onClick }) => {
  const logOutButton = (
    <Link
      to="/"
      type="button"
      onClick={onClick}
      className="btn btn-danger my-2 my-sm-0"
      style={{ visibility: `${isSignedIn ? "" : "hidden"}` }}
    >
      Log out
    </Link>
  );

  return (
    <nav className="navbar navbar-dark bg-dark d-flex justify-content-around">
      {isSignedIn ? (
        <button
          className="navbar-brand link-button"
          style={{
            backgroundColor: "transparent",
            border: "none"
          }}
        >
          TodoList App
        </button>
      ) : (
        <Link to="/" className="navbar-brand">
          TodoList App
        </Link>
      )}
      <span className="navbar-brand">{userName}</span>
      <span>{logOutButton}</span>
    </nav>
  );
};

const mapStateToProps = state => ({
  isSignedIn: state.userActions.isSignedIn,
  userName: state.userActions.userName
});

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(tryLogginOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
