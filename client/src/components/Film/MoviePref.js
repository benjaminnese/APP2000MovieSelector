import {Col, Form, Button} from 'react-bootstrap';
import {useState, useRef} from 'react';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';



const MoviePref = ({user}) =>{

    const [year, setYear] = useState([1985,2021]);
    const [rating, setRating] = useState([0,10]);
    const valgSlider = useRef(null);

    const [pref, setPref] = useState([])
    let prefse;

    const handleChange = (e, props) => {
        if(e.target.id==="Year")
            console.log("yes")
    }
    const handleGendres =(e) =>{
        if(!pref.includes(e.target.value)) {
            setPref([...pref, e.target.value])
        }
        prefse = pref.map(prefs=> `${prefs}`); //retunere name: action osv
        console.log('fra topp', prefse)
    }

    const onSubmitPref =(e) =>{
        e.preventDefault();
            console.log('fra ',prefse)
            const test = {
                userId: user.userEmail,
                gendres: (
                    pref.map(pre =>{
                        return(
                            {name: `${pre}`}
                        )
                         
                    })
                )    
            }
            console.log('til ',test)
        // console.log(axios.get('http://localhost:3000/movie_pref/6078718431f0380267753')
        //     .then((res)=>console.log(res.status)))

        axios.post('http://localhost:3000/movie_pref/add', test)
            .then(res => {
                console.log(test);
                console.log('fra moviepref.js: ', res)
            });

        alert("Lagret");
        //window.location ='/'; //sender bruker tilbake når trykket lagre
       
    }

    const hent= (e) =>{
        e.preventDefault();
        axios.get(`http://localhost:3000/movie_pref/${user.userEmail}`)
        .then(res => {
            document.getElementById("p1").innerHTML = JSON.stringify(res.data);
        });
    };

    const hentAlle=() =>{
        axios.get(`http://localhost:3000/movie_pref`)
        .then(res => {
            document.getElementById("p1").innerHTML = JSON.stringify(res.data);
        });
         
    };

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
            <Form.Check type="checkbox" label="Comedy" value={"Comedy"}  onChange={(e)=>handleGendres(e)}/>  
            <Form.Check type="checkbox" label="Thriller" value={"Thriller"}  onChange={(e)=>handleGendres(e)}/>
            <Form.Check type="checkbox" label="Romance" value={"Romance"}  onChange={(e)=>handleGendres(e)}/>  
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
            <Button onClick={(e) => hent(e)}> hent</Button>
            <Button onClick={() => hentAlle()}> hent Alle</Button>


            <p id="p1"> hei</p>
      </div>
    );
};
export default MoviePref;