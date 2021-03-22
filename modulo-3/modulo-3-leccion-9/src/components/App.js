import "../style/App.css";

import Home from "./Home";
import About from "./About";
import Pricing from "./Pricing";

import { Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
        </ul>
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/pricing" component={Pricing} />
        </Switch>
      </main>
      <footer>footer</footer>
    </>
  );
}

export default App;
