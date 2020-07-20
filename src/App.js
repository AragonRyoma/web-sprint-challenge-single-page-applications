import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./component/NavBar";
import HomePage from "./component/HomePage";
import PizzaForm from "./component/PizzaForm";

//NavBar
//HomePage
//PizzaForm

const App = () => {
  return (
    <div>
      <NavBar />
      <Route exact path="/">
        <HomePage />
      </Route>

      <Route exact path="/PizzaPizza">
        <PizzaForm />
      </Route>
    </div>
  );
};
export default App;
