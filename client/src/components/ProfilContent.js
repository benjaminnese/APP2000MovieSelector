import './App.css';
import React, { Component } from 'react';
import Dashboard from './Dashboard'
import OmApp from './OmApp'
import {connect} from 'react-redux';

// Skal vise diverse profil muligheter, evt en hub til å kunne forandre preferanser, svartliste filmer, logge ut etc


class ProfilContent extends Component {
  renderContent(){
          switch(this.props.auth){
              case null:
                  return;
              case false:
                return(
                  <OmApp />);
              default:
                  return(
                     <Dashboard />
                   );
          }
      }


  render(){
        return(
            <div className="fixBackgroundParent">
                <div className="fixBackground"/>
                {this.renderContent()}
            </div>
        );
}

}
function mapStateToProps({auth}) {
  return { auth };
}

export default connect(mapStateToProps)(ProfilContent);
