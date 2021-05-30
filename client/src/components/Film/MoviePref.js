import {Col, Form, Button} from 'react-bootstrap';
import {useState, useEffect} from 'react';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import MoviePoster from './MoviePoster';
import MovieCard from './MovieCard';
const MoviePref = () =>{

    const [key, setKey] = useState ('67eebbe4966f8175133a6a20f9206e7a');
    const [language, setLanguage] = useState('en-US')
    const [sort, setSort] = useState('popularity.desc');
    const [year, setYear] = useState([1985,2021]); 
    // new Date(1995, 11, 17).toISOString().slice(0, 10), new Date(2021, 11, 17).toISOString().slice(0, 10)
    const [rating, setRating] = useState([0,10]);
    const [pref, setPref] = useState([]);
    const [moviePoster, setMoviePoster] = useState([]);
    //hent id assoisert med kategori https://api.themoviedb.org/3/genre/movie/list?api_key=67eebbe4966f8175133a6a20f9206e7a&language=en-US

    const testProps = "Hei fra moviepref";
    //TODO sorter liste lokalt istendenfor via url
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=${language}&sort_by=${sort}&include_adult=false&include_video=false&page=1&release_date.gte=${year[0]}-01-01&release_date.lte=${year[1]}-01-01&vote_count.gte=500&vote_average.gte=${rating[0]}&vote_average.lte=${rating[1]}&with_genres=${pref}`;
    const res = null;
    useEffect (()=>{
        console.log(url); //hent ut år
        axios.get(url)
        .then(res =>{
            console.log(res.data.results.map(movie=>{return (movie.title +  movie.vote_average)}));
            setMoviePoster(res.data.results.map(name=>{return (<MoviePoster movie = {name} ></MoviePoster> )}));
        });
    },[rating]); //aktivere på alle type preferanse endring?

    

    const reduxState = useSelector((state) => state.auth); //hente state fra store
                    // useDispatch() for oppdatere
 
    
    const onCheckedGenre =(value) =>{
        console.log(value);
        if(!pref.includes(value)) { //hvis preferanse allerede er i state
            setPref([...pref, value])
        }
      
    }

    const onSavePref =(e) =>{
        e.preventDefault(); //Vil unngå at nettleser automatisk lastest på nytt
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

    //Test for å hente ut preferansene fra mongoDB
    //TODO Funker ikke 
    const hent= (e) =>{
        e.preventDefault();
        console.log(url);
        axios.get(`http://localhost:3000/movie_pref/${reduxState.userEmail}`)
        .then(res => {
            
        });
    };

    //Test
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
                <Form.Control as="select" defaultValue="Popularity Desecending" onChange={(e)=>setSort(e.target.options[e.target.options.selectedIndex].value)}>
                    <option value="popularity.desc">Popularity</option>
                    <option value="vote_average.desc">Rating</option>
                    <option value="release_date.desc">Release Date</option>
                </Form.Control>
            </Col>
            </Form.Row>
            <Form.Row className ="m-2">
                <Form.Check type="checkbox" label="Action" value={"28"}  onChange={(e)=>onCheckedGenre(e.target.value)}/>
                <Form.Check type="checkbox" label="Adventure" value={"12"}  onChange={(e)=>onCheckedGenre(e.target.value)}/>
                <Form.Check type="checkbox" label="Animation" value={"16"}  onChange={(e)=>onCheckedGenre(e.target.value)}/>
                
            </Form.Row>
            <Form.Row className ="m-2">
                <Form.Check type="checkbox" label="Comedy" value={"35"}  onChange={(e)=>onCheckedGenre(e.target.value)}/>  
                <Form.Check type="checkbox" label="Thriller" value={"53"}  onChange={(e)=>onCheckedGenre(e.target.value)}/>
                <Form.Check type="checkbox" label="Romance" value={"10749"}  onChange={(e)=>onCheckedGenre(e.target.value)}/>  
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
                <div id="p1">{moviePoster[Math.floor(Math.random() * 5)]}</div>
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