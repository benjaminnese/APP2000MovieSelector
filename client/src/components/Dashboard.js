import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Row, Card, Toast, Tab, Tabs } from "react-bootstrap/";
import Backgrunn from './General/bg-backgrunn.jpg';
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
          className="col-2 ml-auto pt-3 mr-5"
          style={{ backgroundColor: "rgba(105, 105, 105,0.5)" }}
        >
          
          <Tabs defaultActiveKey="profile">
            <Tab eventKey="home" title="Venner"></Tab>
            <Tab eventKey="profile" title="Finn gruppe"></Tab>
          </Tabs>
          <Row style={{height:'50vh'}}/>
         
          <Row>
          <Toast>
            <Toast.Header>
              <img src={Backgrunn} style={{height:'25px'}} className="rounded mr-2" alt="" />
              <strong className="mr-auto">Svein</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Skal vi se film?</Toast.Body>
          </Toast>
          <Toast>
            <Toast.Header>
              <img src={Backgrunn} style={{height:'25px'}} className="rounded mr-2" alt="" />
              <strong className="mr-auto">Svein</strong>
              <small>3 mins ago</small>
            </Toast.Header>
            <Toast.Body>Hallo?</Toast.Body>
          </Toast>
          <Toast>
            <Toast.Header>
              <img src={Backgrunn} style={{height:'25px'}} className="rounded mr-2" alt="" />
              <strong className="mr-auto">Mathilde</strong>
              <small>1 mins ago</small>
            </Toast.Header>
            <Toast.Body>Vi er klare</Toast.Body>
          </Toast>
         
          </Row>
          
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
