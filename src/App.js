import "./App.css";
import Nav from "./components/Nav/Nav";
import { Route, Switch } from "react-router-dom";
import { NavBar, Home, StoreContext } from "./components";
import { useState } from "react";

function App() {

  const [updateItems, setItems] = useState(0)

  const handleItems = (totalItems)=> {
    
  }

  return (
    <div className="App" >

      <Switch>
        <Route exact path="/">
          <Home totalItems={handleItems} />
        </Route>
        <Route path="/cart" />
      </Switch>

      <header className="App-header">


      <NavBar  />
  
        

      </header>

      <footer>
      </footer>
    </div>
  );
}

export default App;
