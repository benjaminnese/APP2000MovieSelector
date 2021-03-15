//Direkte foreldren til alle "html" komponentene som vises til bruker
import './App.css';
import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header'
import WelcomePage from './WelcomePage';
import DashBoard from './Dashboard';
import backgroundImg from './bg-backgrunn.jpg';
import MovieCard from './MovieCard';


class App extends Component{
    componentDidMount() {
        this.props.fetchUser();
      }
    //Sjekk om bruker er innlogget, gir
    //route basert på dette
    render() {
        return(
            <div className="container-fluid bg-backgrunnsFarge">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/hei" component={MovieCard} />
                        <Route exact path ="/about" component={AboutUs} />
                    </div>
                </BrowserRouter>

            </div>
        );
    }

}
export default connect(null, actions) (App);
