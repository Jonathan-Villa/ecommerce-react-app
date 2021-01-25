import "./App.css";
import { Route, Switch } from "react-router-dom";
import { NavBar} from "./components";
import Home from "./pages/Home"
import { useContext } from "react";
import { Context } from "./store/Store";
import CheckoutForm from "./pages/Checkout"

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
