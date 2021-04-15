import {Col, Form, Button} from 'react-bootstrap';
import {useState, useRef} from 'react';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

const MoviePref = () =>{

    const [year, setYear] = useState([1985,2021]);
    const [rating, setRating] = useState([0,10]);
    const valgSlider = useRef(null);

    const [pref, setPref] = useState([])

    const [gendres, setGendres] = useState([]);
    let prefse;

    const handleChange = (e, props) => {
        if(e.target.id==="Year")
            console.log("yes")
    }
    const handleGendres =(e) =>{
        if(!pref.includes(e.target.value)) {
            setPref([...pref, e.target.value])
        }
        console.log(pref);
        prefse = pref.map(prefs=> `{"name": "${prefs}"}, `) //retunere name: action osv


    }


    const onSubmitPref =(e) =>{
        e.preventDefault();
        const id = '6078718431f4a60380267753';
        const preferanse = 	`{
            "userId": "105917563170383745150",
            "gendres":[
                ${prefse}
                ]
            }`
        console.log(axios.get('http://localhost:3000/movie_pref/6078718431f0380267753')
            .then((res)=>console.log(res.status)))

        axios.post('http://localhost:3000/movie_pref/add', preferanse)
            .then(res => {
            });

        alert("Lagret");
        //window.location ='/'; //sender bruker tilbake når trykket lagre
        axios.get('http://localhost:3000/movie_pref')
            .then(res => {
                   res.data.map(gendre => {
                       if(gendre.gendres.length>0)
                           console.log(gendre.gendres.map(pref => pref.name));
                   });
            });
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
                onChange={(e)=>handleChange}
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
            <Form.Check type="checkbox" label="Action" value={"Action"}  onChange={(e)=>handleGendres(e)}/>
            <Form.Check type="checkbox" label="Adventure" value={"Adventure"}  onChange={(e)=>handleGendres(e)}/>
            <Form.Check type="checkbox" label="Animation" value={"Animation"}  onChange={(e)=>handleGendres(e)}/>
            
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
            <Button onClick={(e) => onSubmitPref(e)}>lagre</Button>
      </div>
    );
};
export default MoviePref;