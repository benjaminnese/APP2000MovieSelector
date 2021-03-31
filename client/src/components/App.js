//Direkte foreldren til alle "html" komponentene som vises til bruker
import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux"; //kompalitet mellom react og redux biblioteket
import * as actions from "../actions"; //* hent alle action creators vi har lagd
import Header from "./Header";

import MovieCard from "./MovieCard";
import Landing from "./Landing";
import AboutUs from "./AboutUs";
import Profil from "./Profil";

class App extends Component {
  //Lagde den om til class så vi får tilgang til livssyklusen 86.Refactor APP
  componentDidMount() {
    //props lages fra connect under
    this.props.fetchUser(); //fetchUser er hentet fra /actions
  }

  
  renderContent() {
    switch (this.props.auth) {
      case null: //ikke avklart om bruker logget inn eller ikke
        return null;
      case false: //ikke logget inn
        return null;
      default:
        //logget inn
        return null;
    }
  }

  //Sjekk om bruker er innlogget, gir
  //route basert på dette
  //render kjører alltid før componentDidMount osv
  render() {
    return (
      <div className="container-fluid bg-backgrunnsFarge">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/film" component={MovieCard} />
            <Route exact path="/about" component={AboutUs} />
            <Route exact path="/profil" component={Profil} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
//mapStateToProp sett vi null, også alle actions creatorsene.
export default connect(null, actions)(App);
