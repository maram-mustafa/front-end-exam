import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Favorite from "./Component/Favorite";

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch> 
            
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/fav">
              <Favorite />
            </Route>
          
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
