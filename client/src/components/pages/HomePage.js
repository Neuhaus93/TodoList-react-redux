import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-5 text-center">TodoList App</h1>
        <p className="lead text-center">
          Seja bem vindo ao aplicativo de tarefas
        </p>

        <Link
          type="button"
          to="/auth/signin"
          className="btn btn-primary btn-lg btn-block"
        >
          Fazer Login
        </Link>
        <Link
          type="button"
          to="/auth/signup"
          className="btn btn-danger btn-lg btn-block"
        >
          Fazer Cadastro
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
