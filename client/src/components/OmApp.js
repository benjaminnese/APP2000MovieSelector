import React from 'react';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

// Om oss, component i Landing.js, skal fortelle litt om oss, skal deretter følge en knapp for registrering med google

const OmApp = () => {
    return(
      <Card className='info'  border="info">
    <Card.Header>MovieSelector</Card.Header>
    <Card.Body>
      <Card.Title>About our project</Card.Title>
      <Card.Text>
              Movie Selector er en film applikasjon som har som mål å løse en av de største i-lands problemene vi har i dag, nemlig hva vi skal 
              se på i kveld. Det er en problemstilling som hjemsøker mange norske hjem hver dag.  Man blir overveldet av valg og 
              gnisningene mellom forskjellige ønsker drar denne prosessen i en retning ingen ønsker og sløser med tid.
              Med vår applikasjon så har vi som ambisjon å gjøre denne prosessen kort og avslappende. Det starter med at du oppretter
              en profil hos oss, hvor man setter sine film-preferanser. Så oppretter du en digital sofa (som en gruppe eller et lobbyrom)
              hvor du inviterer de du skal se film sammen med. Her vil applikasjonen se igjennom alle preferansene til medlemmene i 
              sofaen og lage en film-pool som matcher alles preferanser. Så vil applikasjonen vise frem en og en film, fra denne 
              film-poolen, til hvert medlem. Hver deltaker sveiper for å angi om de vil se filmen eller ikke. Etter minimum 10 filmer 
              vil applikasjonen vise den filmen alle ville se. Var det flere filmer som alle sa ja til, vil variabler som IMDB anmeldelse,
              popularitet, osv. avgjøre hvilken film som blir presentert som kveldens film

      </Card.Text>
      <Button className='registrering' variant="primary" a href="/auth/google">Register today with Google</Button>
    </Card.Body>
  </Card>
    );
};
export default OmApp;
