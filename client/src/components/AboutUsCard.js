//Side som bruker kommer til om ikke innlogget
import React from 'react';
import {Card} from 'react-bootstrap';

// Lager et kort for å vise frem hver student
// Skal ta en navn(Mathias Berger) feks, og tekst om personen. Samt et bilde.

export const AboutUsCard = (props) =>{
        return(
            <div>
                <Card bg="primary" text="white" style={{ width: '15%', height: '3 0%' }}>
                    <Card.Header>{props.name}</Card.Header>
                    <Card.Body>
                    <Card.Title>{props.studentNummer}</Card.Title>
                    <Card.Text>
                        {props.desc}
                    </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
}

export default AboutUsCard;
