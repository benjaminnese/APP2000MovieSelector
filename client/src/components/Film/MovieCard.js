import React, { useEffect} from "react";
import MoviePoster from "./MoviePoster";
import movieDB from "./movieDB";
import MovieList from './MovieList';
import SearchBar from '../General/SearchBar';

//Et film objekt vises på skjermen
class MovieCard extends React.Component {

    state = {movies: [], selectedMovie: null};

    componentDidMount() {
        this.onTermSubmit(' ') //Tomt søkt når side lastest
    }

    onTermSubmit = async querry => {
        const response = await movieDB.get('/search/movie', {
            params: {
                api_key: '67eebbe4966f8175133a6a20f9206e7a',
                query: querry
            }
        });

        this.setState({
            movies: response.data.results,
            selectedMovie: response.data.results[0] //default video når nytt søk
        });
    };
    onMovieSelect = (movie) => {
        this.setState({selectedMovie: movie});
        console.log({movie});

    };


    render() {

        const baseImgUrl = "https://image.tmdb.org/t/p";
        return (
            <div>
                <div className="d-flex flex-column justify-content-center">
                    <div>
                        <SearchBar onFormSubmit={this.onTermSubmit}/>
                    </div>
                    <MoviePoster movie={this.state.selectedMovie}
                    />
                    <MovieList movies={this.state.movies}
                               onMovieSelect={this.onMovieSelect}/>
                </div>
            </div>
        );
    };
}

export default MovieCard;
