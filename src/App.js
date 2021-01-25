import "./App.css";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { NavBar } from "./components";
import Home from "./pages/Home";
import { useContext } from "react";
import { Context } from "./store/Store";
import Checkout from "./pages/Checkout";
import Product from "./pages/Product";

function App() {
  const [state, dispatch] = useContext(Context);

  const handleProductLink = (title, price, category, image) => {
    const selected = { title, price, category, image };
    localStorage.setItem("selectProduct", JSON.stringify(selected));
  };

  return (
    <div className="App">
      <header className="App-header">
        <NavBar totalItems={state.cartQuantity} />
      </header>

      <Switch>
        <Route exact path="/">
          <Home handleProductLink={handleProductLink} />
        </Route>
        <Route path="/cart">
          <Checkout cart={state.cart} store={state} />
        </Route>

        <Route path="/product">
          <Product />
        </Route>
      </Switch>

      <footer></footer>
    </div>
  );
}

export default App;
