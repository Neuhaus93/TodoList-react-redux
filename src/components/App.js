import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import TodoListPage from "./pages/TodoListPage";
import Header from "./Header";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={HomePage} />
          <Route path="/auth/signin" exact component={SignInPage} />
          <Route path="/auth/signup" exact component={SignUpPage} />
          <Route path="/todos" exact component={TodoListPage} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
