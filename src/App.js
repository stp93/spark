import React from "react";
import { HashRouter, NavLink, Route } from "react-router-dom";
import "./App.css";
import Custom from "./Custom";
import Order from "./Order";
// import Stuff from "./Stuff";

const Stuff = React.lazy(() => import("./Stuff"));
const Home = React.lazy(() => import("./Home"));
function App() {
  return (
    <React.Suspense fallback={<span>Loading...</span>}>
      <HashRouter>
        <div className="App">
          <ul className="header">
            <li>
              <NavLink className="logo" exact to="/">
                SPARK
              </NavLink>
            </li>
            <li>
              <NavLink to="/stuff">The Cars</NavLink>
            </li>
            <li>
              <NavLink exact to="/order">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/custom">Custom</NavLink>
            </li>
          </ul>
          <div className="content">
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/stuff" render={() => <Stuff />} />
            <Route path="/custom" component={Custom} />
            <Route path="/order" component={Order} />
          </div>
        </div>
      </HashRouter>
    </React.Suspense>
  );
}

export default App;
