import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Navbar, Nav, Form} from "react-bootstrap";
import Logo from "./logo.PNG";

/* 

 @actor Mathias Berger 

*/ 
class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <Button variant="primary" a href="/auth/google">
            Login with google
          </Button>
        );
      default:
        return [
          <Nav style={{ float: "right" }} className="navbar m-0 p-0 pr-5">
            <a
                href="#dropdown-menu" //TODO FIX
              className="nav-link"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src={
                  this.props.auth
                    ? this.props.auth.bilde
                    : "https://cdn.iconscout.com/icon/premium/png-256-thumb/profile-1506810-1278719.png"
                }
                style={{ width: "50px", height: "50px" }}
                className="rounded-circle"
                alt="logo bilde"
              />
            </a>
            <div id="dropdown-menu">
              <a className="dropdown-item" href="/profil">
                Profil
              </a>
              <a  style={{ backgroundColor: "rgba(105, 105, 105,0.2)" }} className="dropdown-item" href="/api/logout">
                Log Out
              </a>
            </div>
          </Nav>,
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
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/film">Film</Nav.Link>
            </Nav>
            <Form inline>
              <h5 className="text-white pr-2">
                {this.props.auth ? this.props.auth.name : ""}
              </h5>
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
