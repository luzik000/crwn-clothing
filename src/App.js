import React, { Component } from "react";
import { Route, Switch } from "react-router";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shoppage.component";
import Header from "./components/header/header.component";
import SingInAndSingUpPage from "./components/sing-in-and-sing-up/sing-in-and-sing-up.component";
import { auth } from "./firebase/firebase.utils";

class App extends Component {

  state = {
    currentUser: null
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      // console.log("App -> componentDidMount -> user", user)
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/singin' component={SingInAndSingUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
