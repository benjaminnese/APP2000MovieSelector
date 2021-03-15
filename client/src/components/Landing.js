//Side som bruker kommer til om ikke innlogget
import background from "./bg-backgrunn.jpg";
import OmApp from './OmApp'
import {Button} from 'react-bootstrap';
import './App.css';
// Se lucid chart for skjetch for landigpage


export const Landing = () =>{

        return(
            <div className="fixBackgroundParent">
                <div className="fixBackground"/>         
                    <OmApp/>
                    <Button variant="outline-primary mr-3" a href="/auth/google">Register today with Google</Button>;  
            </div>
          
        );


}
export default Landing;
