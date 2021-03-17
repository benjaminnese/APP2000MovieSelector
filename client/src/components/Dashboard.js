import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Row, Card, Button, Tab, Tabs } from "react-bootstrap/";

// Det bruker skal se når de kommer inn på nettside når de er allerede logget it

class Dashboard extends Component {
  render() {
    return (
      <Row style={{ height: "100vh" }}>
        {" "}
        {/*Bootstrap deler siden opp i 12 kolonner, sier jeg vil bruke 9 til ene */}
        <Row className="col-9 justify-content-center">
          <Col className="col-10 mt-5 border">
            <h1 className="p-5 text-white">Hei {this.props.auth.name}</h1>
          </Col>

          <Col className="col-5 mt-5">
            <Card>
              <Card.Header>Populær</Card.Header>
              <Card.Body>
                <Card.Title>deserunt mollit anim id est laborum</Card.Title>
                <Card.Text>
                Lorem ipsum dolor sit amet, consectetu
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-5 mt-5">
            <Card>
              <Card.Header>aliquip ex ea commodo</Card.Header>
              <Card.Body>
                <Card.Title>deserunt mollit anim id est laborum</Card.Title>
                <Card.Text>
                Lorem ipsum dolor sit amet, consectetu
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Col
          className="col-2 ml-auto pt-3"
          style={{ backgroundColor: "rgba(105, 105, 105,0.5)" }}
        >
          <Tabs defaultActiveKey="profile">
            <Tab eventKey="home" title="Venner"></Tab>
            <Tab eventKey="profile" title="Innstillinger"></Tab>
          </Tabs>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth }; //Henter auth fra reducers
  //skjer noe magi, retunere til connect under
} //Les i App.js hvordan funger
export default connect(mapStateToProps)(Dashboard);
