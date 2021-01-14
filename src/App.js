import "./App.css";
import { Route, Switch } from "react-router-dom";
import { NavBar, Home } from "./components";
import { useState, useContext } from "react";
import { Context } from "./store/Store";
import {CheckoutForm} from "./components"

function App() {
  const [state, dispatch] = useContext(Context);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home
            setAnchorEl={setAnchorEl}
            setOpenPopper={setOpen}
            setPlacement={setPlacement}
            placement={placement}
          />
        </Route>
        <Route path="/cart">
          <CheckoutForm/>
        </Route>
      </Switch>

      <header className="App-header">
        <NavBar totalItems={state.cartQuantity} />
      </header>

      <footer></footer>
    </div>
  );
}

export default App;
