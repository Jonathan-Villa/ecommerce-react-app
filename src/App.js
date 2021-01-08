import "./App.css";
import Nav from "./components/Nav/Nav";
import {Route, Switch, } from "react-router-dom"
import {NavBar, Home} from "./components"

function App() {
  return (
    <div className="App">

    <Switch>
      <Route exact path="/" component={Home}  />
      <Route path="/cart" /> 
    </Switch>



      <header className="App-header">
        <NavBar />
      </header>

      <footer></footer>
    </div>
  );
}

export default App;
