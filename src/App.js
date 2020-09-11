import React from "react";
import { HashRouter, NavLink, Route } from "react-router-dom";
import "./App.css";
import Contact from "./Contact";
import Home from "./Home";
import Order from "./Order";
import Stuff from "./Stuff";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <div className="headers">
          <h1>SPARK</h1>
          <h2>Order Now</h2>
        </div>
        <ul className="header">
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/stuff">The Cars</NavLink>
          </li>
          <li className="logo">
            <NavLink exact to="/order">
              Order
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route path="/stuff" component={Stuff} />
          <Route path="/contact" component={Contact} />
          <Route path="/order" component={Order} />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
