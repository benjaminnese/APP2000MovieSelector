import React, {useEffect, useState} from "react";
import MoviePoster from "./MoviePoster";
import movieDB from "./movieDB";
import MovieList from './MovieList';
import SearchBar from '../General/SearchBar';

//Et film objekt vises på skjermen
const MovieCard = ({type}) => {

    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        onTermSubmit(' ') //Tomt søkt når side lastest
    }, []); //kjører bare når den blir opprette, samme effect som didMount

    const onTermSubmit = async querry => {
        const response = await movieDB.get('/search/movie', {
            params: {
                api_key: '67eebbe4966f8175133a6a20f9206e7a',
                query: querry
            }
        });
            setMovies(response.data.results);
            setSelectedMovie(response.data.results[0]) //default video når nytt søk

    };
    const onMovieSelect = (movie) => {
        setSelectedMovie({movie});
        console.log("valgt film ", ({selectedMovie}));
    };

 //TODO FIX her
    const baseImgUrl = "https://image.tmdb.org/t/p";
    return (
        <div>
            <div className="d-flex flex-column justify-content-center">
                <div>
                    <SearchBar onFormSubmit={onTermSubmit}/>
                </div>
                <MoviePoster movie={selectedMovie}
                />
                <MovieList movies={movies}
                           onMovieSelect={onMovieSelect}/>
            </div>
        </div>
    );

}

export default MovieCard;
