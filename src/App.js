import "./App.css";
import { Route, Switch } from "react-router-dom";
import { NavBar, Home } from "./components";
import { useState, useContext } from "react";
import {Context } from "./store/Store"

function App() {
  const [state,dispatch] = useContext(Context)

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cart" />
      </Switch>

      <header className="App-header">
        <NavBar totalItems={state.cartQuantity} />
      </header>

      <footer></footer>
    </div>
  );
}

export default App;
