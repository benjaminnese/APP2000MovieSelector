import React from 'react';
import {Col, Row, Card, Button, Tab, Tabs} from 'react-bootstrap/';

// Det bruker skal se når de kommer inn på nettside når de er allerede logget it

const Dashboard = () => {
    return(
      
      <Row style={{height:'100vh'}}> {/*Bootstrap deler siden opp i 12 kolonner, sier jeg vil bruke 9 til ene */}
      
      <Row className="col-9 justify-content-center">
        <Col className="col-10 bg-white mt-5"> 
            <h1 className ="p-5 text-dark" >Hei </h1>
        </Col>
    
        <Col className = "col-5 mt-5">
        <Card className="text-center">
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
        </Col>
        </Row>
        <Col className="col-3 pt-3 bg-dark">
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="Venner">
          </Tab>
          <Tab eventKey="profile" title="Mine sofagrupper">
          </Tab>
        
       </Tabs>
        </Col>
      </Row>
    
    );
};
export default Dashboard;
