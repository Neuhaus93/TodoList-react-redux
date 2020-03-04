import React from "react";
// import { Field, reduxForm } from "redux-form";

class SignUpPage extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-6 text-center">Fazer Cadastro</h1>
          <form>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Insira email"
              />
            </div>
            <div className="form-group">
              <label>Usuario</label>
              <input
                type="email"
                className="form-control"
                placeholder="Insira nome do usuário"
              />
            </div>
            <div className="form-group">
              <label>Senha</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Senha"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Cadastre
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUpPage;
