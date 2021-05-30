import React, {useEffect, useState} from "react";
import MoviePoster from "./MoviePoster";
import MovieList from './MovieList';
import axios from 'axios';
import LikeMovie from './LikeMovie';
import Like from "@material-ui/icons/ThumbUp"; //bruk bootstrap icon?
import Dislike from "@material-ui/icons/ThumbDown";
//Et film objekt vises på skjermen
const MovieCard = (props) => {

    const [counter, setCounter] = useState(0);
    const [selectedMovie, setSelectedMovie] = useState();
    const [likedMovie, setLikedMovie] = useState([]);
    const [moviePoster, setMoviePoster] = useState([]);
    
 //TODO FIX her
 let url = `https://api.themoviedb.org/3/discover/movie?api_key=67eebbe4966f8175133a6a20f9206e7a`;
    const res = null;
    useEffect (()=>{
        console.log(url || props.url); //hent ut år
        axios.get(url || props.url)
        .then(res =>{
            console.log(res.data.results.map(movie=>{return (movie.title +  movie.vote_average)}));
            setMoviePoster(res.data.results.map(name=>{return (<MoviePoster movie = {name} ></MoviePoster> )}));
        });
        
    },[]); //aktivere på alle type preferanse endring?

    useEffect(()=>{
        setSelectedMovie(moviePoster[counter]);
        console.log("Kjøres bare engang")
    },[moviePoster]);

    useEffect(()=>{
        setSelectedMovie(moviePoster[counter]);
        console.log("liked");
    },[counter]);
    
    return (
        <div>
            <div className="d-flex flex-column justify-content-center text-white">
                <div className="m-auto pb-4">
                    {selectedMovie}
                {/*<LikeMovie onClick={()=>console.log("hello")}/>*/}
                <div className="m-auto pl-5 w-50">
                    <button
                        type="button"
                        className="btn btn-lg btn-success mr-5"
                        onClick={() => {setCounter(counter +1); setLikedMovie(prevState=>[...prevState, selectedMovie])}}
                    >
                        <Like />
                        </button>
                    
                    <button
                        type="button"
                    className="btn btn-lg btn-danger mr-5 "
                    onClick={() => {setCounter(counter +1)}}
                    >
                        <Dislike />
                    </button>
                </div>

                </div>
                Likte filmer
                <ul>
                    {likedMovie.map(e=><li>{e.props.movie.original_title}</li>)}
                </ul>
            </div>
        </div>
    );

}

export default MovieCard;
