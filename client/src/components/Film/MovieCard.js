import React, {useEffect, useState} from "react";
import MoviePoster from "./MoviePoster";
import MovieList from './MovieList';

//Et film objekt vises på skjermen
const MovieCard = () => {

    
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

  

 //TODO FIX her
    const baseImgUrl = "https://image.tmdb.org/t/p";
    return (
        <div>
            <div className="d-flex flex-column justify-content-center">
                <div>
                   
                </div>
              
            </div>
        </div>
    );

}

export default MovieCard;
