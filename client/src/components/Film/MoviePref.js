import {Col, Form, Button} from 'react-bootstrap';
import {useState, useEffect} from 'react';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import MoviePoster from './MoviePoster';

const MoviePref = () =>{

    const [key, setKey] = useState ('67eebbe4966f8175133a6a20f9206e7a');
    const [language, setLanguage] = useState('en-US')
    const [sort, setSort] = useState('popularity.desc');
    const [year, setYear] = useState([1985,2021]);
    const [rating, setRating] = useState([0,10]);
    const [pref, setPref] = useState([]);
    const [moviePoster, setMoviePoster] = useState([]);

    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=${language}&sort_by=${sort}&include_adult=false&include_video=false&page=1&primary_release_date.gte=${year[0]}&vote_average.gte=${rating[0]}&vote_average.lte=${rating[1]}`;
    const res = null;
    useEffect (()=>{
        console.log(url);
        axios.get(url)
        .then(res =>{
            console.log(res.data.results);
            setMoviePoster(res.data.results.map(name=>{return (<MoviePoster movie = {name} ></MoviePoster> )}));
            
        });
    },[rating]); //aktivere på alle type pref endring?

    

    const reduxState = useSelector((state) => state.auth); //hente state fra store
                    // useDispatch() for oppdatere
 
    const onCheckedGenre =(e) =>{
        if(!pref.includes(e.target.value)) { //hvis preferanse allerede er i state
            setPref([...pref, e.target.value])
        }
      
    }

    const onSavePref =(e) =>{
        e.preventDefault();
            const preferanse = {
                userId: reduxState.userEmail,
                genres: (
                    pref.map(pre =>{
                        return(
                            {name: `${pre}`}
                        )
                         
                    })
                )    
            }
        // console.log(axios.get('http://localhost:3000/movie_pref/6078718431f0380267753')
        //     .then((res)=>console.log(res.status)))

        axios.post('http://localhost:3000/movie_pref/add', preferanse)
            .then(res => {
                console.log(preferanse);
                console.log('fra moviepref.js: ', res)
            });

        alert("Lagret");
        //window.location ='/'; //sender bruker tilbake når trykket lagre
       
    }

    const hent= (e) =>{
        e.preventDefault();
        console.log(url);
        axios.get(`http://localhost:3000/movie_pref/${reduxState.userEmail}`)
        .then(res => {
            
        });
    };

    const hentAlle=() =>{
        axios.get(`http://localhost:3000/movie_pref`)
        .then(res => {
            document.getElementById("p1").innerHTML = JSON.stringify(res.data);
        });
         
    };

  
   
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
            <Form.Check type="checkbox" label="Action" value={"Action"}  onChange={(e)=>onCheckedGenre(e)}/>
            <Form.Check type="checkbox" label="Adventure" value={"Adventure"}  onChange={(e)=>onCheckedGenre(e)}/>
            <Form.Check type="checkbox" label="Animation" value={"Animation"}  onChange={(e)=>onCheckedGenre(e)}/>
            
        </Form.Row>
        <Form.Row className ="m-2">
            <Form.Check type="checkbox" label="Comedy" value={"Comedy"}  onChange={(e)=>onCheckedGenre(e)}/>  
            <Form.Check type="checkbox" label="Thriller" value={"Thriller"}  onChange={(e)=>onCheckedGenre(e)}/>
            <Form.Check type="checkbox" label="Romance" value={"Romance"}  onChange={(e)=>onCheckedGenre(e)}/>  
        </Form.Row>
        {/* <RangeBar 
          title="Year" 
          id="year" 
          min={1985} 
          max={2021} 
          ref={valgSlider} 
          onChange={fokus}
        /> */}
    
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
            <Button onClick={(e) => onSavePref(e)}>lagre</Button>
            <Button onClick={(e) => hent(e)}> hent</Button>
            <Button onClick={() => hentAlle()}> hent Alle</Button>


            <div id="p1">{moviePoster[0]}</div>
      </div>
    );
};
export default MoviePref;

 //TODO FIKS FOKUS PÅ HVILKEN KNAPP, SAMT GENERALISER DE I RANGEBAR

    // const RangeBar =(props) =>{
    //     return(
    //      <div>
    //         <Typography id={props.id}>
    //             <b>{props.title}:</b>
    //         </Typography>   
    //         <Slider
    //             style={{width:300}}
    //             valueLabelDisplay="auto"
    //             aria-labelledby="year"
    //             value={props.value}
    //             min={props.min}
    //             max={props.max}
    //             onChange={(e)=>handleChange}
    //          />
    //     </div>
    //     )
    // }