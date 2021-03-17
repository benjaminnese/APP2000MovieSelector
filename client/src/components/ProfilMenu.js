import { Tabs, Tab, TabPane, TabContent, Nav, Col, Row } from "react-bootstrap";
import React from "react";
import MenuProfilSettings from "./MenuProfilSettings";
import { connect } from "react-redux";
import Container from 'react-bootstrap/Container'

// Foreløpig fungerer denne mer som en placheholder for videre utvikling
// Inne i hver table.pane skal det inneholde en slags instilling menu typ.

const ProfilMenu = ({userName, userPic}) => {
  return (
    <div className="d-flex justify-content-left" style ={{backgroundColor: 'white', width: '50%', height: '50%', opacity: '0.8'}}>
    <Container>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Generelt</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <MenuProfilSettings userName = {userName} userPic = {userPic} />              </Tab.Pane>
              <Tab.Pane eventKey="second">
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      </Container>
    </div>
  );
};
function mapStateToProps(state) {
  return { auth: state.auth }; //Henter auth fra reducers
  //skjer noe magi, retunere til connect under
} //Les i App.js hvordan funger
export default connect(mapStateToProps)(ProfilMenu);
