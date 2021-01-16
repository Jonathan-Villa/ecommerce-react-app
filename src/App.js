import "./App.css";
import { Route, Switch } from "react-router-dom";
import { NavBar, Home } from "./components";
import { useState, useContext } from "react";
import { Context } from "./store/Store";
import { CheckoutForm } from "./components";

function App() {
  const [state, dispatch] = useContext(Context);

  return (
    <div className="App">
      <header className="App-header">
        <NavBar totalItems={state.cartQuantity} />
      </header>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cart">
          <CheckoutForm cart={state.cart} store={state} />
        </Route>
      </Switch>

      <footer></footer>
    </div>
  );
}

export default App;
