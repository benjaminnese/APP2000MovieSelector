//Side som bruker kommer til om ikke innlogget
import background from "./bg-backgrunn.jpg";
import OmApp from './OmApp'
import {Button} from 'react-bootstrap';

// Se lucid chart for skjetch for landigpage


export const Landing = () =>{

        return(
            <div style={{ backgroundImage: `url(${background})`,  backgroundSize: "cover", zIndex: "-10", position : "fixed" }}>
                <div id="rcorners3">
                <OmApp/> // Om Webapp
                <Button variant="outline-primary mr-3" a href="/auth/google">Register today with Google</Button>;
                </div>
            </div>
        );


}
export default Landing;
