import './App.css';
import React, { Component } from 'react';
import Dashboard from './Dashboard'
import OmApp from './OmApp'
import ProfilMenu from './ProfilMenu'
import {connect} from 'react-redux';

// Skal vise diverse instillinger


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
                    <ProfilMenu />
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
