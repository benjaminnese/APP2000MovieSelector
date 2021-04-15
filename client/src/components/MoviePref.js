import {Col, Form} from 'react-bootstrap';
import {useState, useRef} from 'react';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

const MoviePref = () =>{

    const [year, setYear] = useState([1985,2021]);
    const [rating, setRating] = useState([0,10]);
    const valgSlider = useRef(null);

    const handleChange = (e, props) => {
        if(e.target.id==="Year")
            console.log("yes")
    }
    const fokus = () =>{
        valgSlider.current.focus();
    }
    //TODO FIKS FOKUS PÅ HVILKEN KNAPP, SAMT GENERALISER DE I RANGEBAR

    const RangeBar =(props) =>{
        return(
         <div>
            <Typography id={props.id}>
                <b>{props.title}:</b>
            </Typography>   
            <Slider 
                style={{width:300}}
                valueLabelDisplay="auto"
                aria-labelledby="year"
                value={props.value}
                min={props.min}
                max={props.max}
                onChange={handleChange}
             />
        </div>
        )
    }
    return(
        <div className="p-2 mb-5 bg-white">
        <h1 className="text-center">Film Preferanse</h1>
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
        <RangeBar 
          title="Year" 
          id="year" 
          min={1985} 
          max={2021} 
          ref={valgSlider} 
          onChange={fokus}
        />
    
        <Typography id="range-year">
            <b>Year:</b> {year[0]}-{year[1]}
        </Typography>   
       <Slider 
            style={{width:300}}
            valueLabelDisplay="auto"
            aria-labelledby="range-year"
            value={year}
            min={1985}
            max={2021}
            onChange={(e, value)=>setYear(value)}
       />
       <Typography id="range-rating">
            <b>Rating:</b> {rating[0]}-{rating[1]}
        </Typography>   
       <Slider 
            style={{width:300}}
            valueLabelDisplay="auto"
            aria-labelledby="range-rating"
            value={rating}
            min={0}
            max={10}
            onChange={(e, value)=>setRating(value)}
       />
       
      </Form>
      </div>
    );
};
export default MoviePref;