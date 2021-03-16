import React from 'react';
import {Col, Row, Card, Button, Tab, Tabs} from 'react-bootstrap/';

// Det bruker skal se når de kommer inn på nettside når de er allerede logget it

const Dashboard = () => {
    return(
      
      <Row style={{height:'100vh'}}> {/*Bootstrap deler siden opp i 12 kolonner, sier jeg vil bruke 9 til ene */}
      
      <Row className="col-9 justify-content-center">
        <Col className="col-10 mt-5 border"> 
            <h1 className ="p-5 text-white" >Hei (navn på bruker)</h1>
        </Col>
    
        <Col className = "col-5 mt-5">
        <Card>
          <Card.Header>Populær</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
        <Col className = "col-5 mt-5">
        <Card>
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
        </Row>
    
        <Col className="col-2 ml-auto pt-3" style={{backgroundColor:'rgba(9, 28, 37,0.9)'}}>
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="Venner">
          </Tab>
          <Tab eventKey="profile" title="Innstillinger">          
          </Tab>
        
       </Tabs>
        </Col>
      </Row>
    
    );
};
export default Dashboard;
