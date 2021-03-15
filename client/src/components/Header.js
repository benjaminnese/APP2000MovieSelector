import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {Button, Navbar,Nav,Form} from 'react-bootstrap';
import Logo from './logo.PNG';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <Button variant="outline-primary mr-3" a href="/auth/google">login with google</Button>;
      default:
        return [
          <Button variant="outline-danger mr-3" a href="/api/logout">Logout</Button>
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
        <Nav.Link href="/about">About us</Nav.Link>

      </Nav>
      <Form inline>
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
