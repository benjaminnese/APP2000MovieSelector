import { Tabs, Tab, TabPane, TabContent, Nav, Col, Row } from "react-bootstrap";
import React from "react";
import MenuProfilSettings from "./MenuProfilSettings";

// Foreløpig fungerer denne mer som en placheholder for videre utvikling
// Inne i hver table.pane skal det inneholde en slags instilling menu typ.

const ProfilMenu = () => {
  return (
    <div className="d-flex justify-content-left">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Profil settings</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <MenuProfilSettings />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <MenuProfilSettings />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default ProfilMenu;
