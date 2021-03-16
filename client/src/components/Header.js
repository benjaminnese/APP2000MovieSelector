import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {Button, Navbar,Nav,Form,Dropdown} from 'react-bootstrap';
import Logo from './logo.PNG';
import DropdownButton from 'react-bootstrap/DropdownButton'

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <Button variant="btn btn-info mr-3" a href="/auth/google">Login with google</Button>;
      default:
        return [<DropdownButton id="dropdown-basic-button" title="Dropdown button"> 
                      <Dropdown.Item href="/profil">Profil</Dropdown.Item>
                    <Dropdown.Item href="/profil/instillinger">Instillinger</Dropdown.Item>
                    <Dropdown.Item href="/api/logout">Logout</Dropdown.Item>
              </DropdownButton>
        ];
    }
  }

  render() {
    return (
      <div className="Row">
        <div className="Col">
          <Navbar variant="dark">
          <Navbar.Brand href="/">
              MovieSelector
              <img
                alt="Logo bilde"
                src={Logo}
                width="50"
                height="50"
                className="ml-2"

            />
    </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        

      </Nav>
      <Form inline>
      <h4 className="text-white pr-2">{this.props.auth.name}</h4>
      <img className = "rounded-circle" src={this.props.auth.bilde}/>
      {this.renderContent()}
      </Form>
    </Navbar>
    </div>
  </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
