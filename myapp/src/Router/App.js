import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App2 from "../App2";
import About from "./About";
import Home from "./Home";
import Navbar from "./Navbar";
import NotFound from "./NotFound";
import Post from "./Post";
import Services from "./Services";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/card" component={App2} />
        <Route exact path="/post/:category/:topic" component={Post} />

        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
