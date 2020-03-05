import React from "react";
import { Link } from "react-router-dom";
import { tryLogginOut } from "../actions";
import { connect } from "react-redux";

class Auth extends React.Component {
  render() {
    return (
      <Link
        to="/"
        type="button"
        onClick={() => this.props.onClick()}
        className="btn btn-danger my-2 my-sm-0"
        style={{ visibility: `${this.props.isSignedIn ? "" : "hidden"}` }}
      >
        Log out
      </Link>
    );
  }
}

const mapStateToProps = state => ({
  isSignedIn: state.userActions.isSignedIn
});

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(tryLogginOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
