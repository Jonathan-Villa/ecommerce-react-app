import "./App.css";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { NavBar } from "./components";
import Home from "./pages/Home";
import { useContext } from "react";
import { Context } from "./store/Store";
import Checkout from "./pages/Checkout";
import Product from "./pages/Product";
import DrawerCart from "./components/Drawer/DrawerCart";
function App() {
  const [state, dispatch] = useContext(Context);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleProductLink = (title, price, category, image, description) => {
    const selected = { title, price, category, image, description };
    localStorage.setItem("selectProduct", JSON.stringify(selected));
  };

  const handleCartItems = (title, price, category, image) => {
    const copyList = [...state.cart];

    const selected = { title, price, category, image };
    selected.quantity = 1;

    // find duplicate items
    let check = copyList.find((item) => item.title === title);
    // increment by 1 if duplicate found
    if (check) {
      check.quantity += 1;
    } else {
      copyList.push(selected);
    }

    dispatch({
      cartQuantity: state.cartQuantity + 1,
      type: "CART",
      cart: copyList,
      subTotal: state.subTotal + price,
    });
  };

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
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
          <Product
            handleCart={handleCartItems}
            handleDrawer={handleDrawerToggle}
          />
        </Route>
      </Switch>

      <DrawerCart
        open={openDrawer}
        items={state.cart}
        handleClose={handleDrawerToggle}
        handleCloseDrawer={handleDrawerToggle}
      />
      <footer></footer>
    </div>
  );
}

export default App;
