import React from "react";
import { reset, Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import { tryLoggingIn, fetchUsers } from "../../actions";

class SignInPage extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderEmailInput = ({ input }) => {
    return (
      <div className="form-group">
        <label>Email</label>
        <input
          {...input}
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Insira email"
        />
      </div>
    );
  };

  renderPasswordInput = ({ input }) => {
    return (
      <div className="form-group">
        <label>Senha</label>
        <input
          {...input}
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Senha"
        />
      </div>
    );
  };

  onSubmit = (formProps, dispatch) => {
    console.log(formProps);

    const isSignedIn = () =>
      new Promise((res, rej) => {
        dispatch(tryLoggingIn(formProps));
        res();
      });

    isSignedIn().then(() => {
      if (this.props.isSignedIn) {
        this.props.history.push("/todos");
      } else {
        dispatch(reset("signInForm"));
      }
    });
  };

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-6 text-center">Fazer Login</h1>
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field name="loginEmail" component={this.renderEmailInput} />
            <Field name="loginPassword" component={this.renderPasswordInput} />
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.loginEmail) {
    errors.loginEmail = "Você deve inserir um e-mail";
  }

  if (!formValues.loginPassword) {
    errors.loginPassword = "Você deve inserir uma senha";
  }

  return errors;
};

const mapStateToProps = state => ({
  isSignedIn: state.auth.isSignedIn
});

export default reduxForm(
  {
    form: "signInForm",
    validate
  },
  { tryLoggingIn }
)(connect(mapStateToProps, { fetchUsers })(SignInPage));
