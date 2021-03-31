import {Col, Form} from 'react-bootstrap';
import {useState} from 'react';

const MoviePref = () =>{

    const [minYear, setMinYear] = useState();
    const [maxYear, setMaxYear] = useState();

    const RangeBar =(props) =>{
        return(
        <Form.Row>
            <Form>
            <Form.Label >{props.title}</Form.Label>
            <Form.Control variant="primary" type="range" min={props.title} max={props.title} step="1"/>
            </Form>
        </Form.Row>
        )
    }
    const YearFilter =()=>{
        return minYear;
    }

    return(
        <div className="p-2 mb-5 bg-white">
        <h1 className="text-center">pref</h1>
        <Form>
        <Form.Row>
        <Col>
            <Form.Label>Sort</Form.Label>
            <Form.Control as="select" defaultValue="Popularity Desecending">
                <option>Popularity</option>
                <option>Rating</option>
                <option>Release Date</option>
                <option>Title</option>
            </Form.Control>
        </Col>
        </Form.Row>
        <Form.Row className ="m-2">
            <Form.Check type="checkbox" label="Action" />
            <Form.Check type="checkbox" label="Adventure" />  
            <Form.Check type="checkbox" label="Animation" />
            
        </Form.Row>
        <Form.Row className ="m-2">
            <Form.Check type="checkbox" label="Comedy" />  
            <Form.Check type="checkbox" label="Thriller" />
            <Form.Check type="checkbox" label="Romance" />  
        </Form.Row>
      
          
        
           
    
       <RangeBar title="Year" min="1985" max ="2020"/>
       <RangeBar title="Rating" min="1" max ="10"/>
      </Form>
      </div>
    );
};
export default MoviePref;