import React, { useState, useEffect } from "react";
import MoviePoster from "./MoviePoster";
import { Button } from "react-bootstrap";
import MoviePref from "./MoviePref";
import movieDB from "./movieDB";
import MovieList from './MovieList';
import SearchBar from './SearchBar';

//Et film objekt vises på skjermen
class MovieCard extends React.Component {

  state = {movies: [], selectedMovie: null};

  componentDidMount(){
    this.onTermSubmit(' ') //Tomt søkt når side lastest
  }

  onTermSubmit = async querry =>{
    const response = await movieDB.get('/search/movie',{
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
  onMovieSelect=(movie) =>{
    this.setState({selectedMovie: movie});
    console.log({movie});
    
};
onClickLiker = () => {
    this.state.selectedMovie.setState(this.state.movies[1]);
    console.log('her var vi' ,this.state.selectedMovie);
};


  render(){
  // const [movieTitle, setMovieTitle] = useState();
  // const [movieDes, setMovieDes] = useState();
  // const [moviePoster, setMoviePoster] = useState();
  // const [count, setCount] = useState(566230);

   const baseImgUrl = "https://image.tmdb.org/t/p";
   const size = "w500";
   const API_KEY = "dea81014c2ec4aeceb134efbf3cfff1f";


 

  // const onClick2 = () => {
  //   setCount(count - 1);
  //   getMovies(count);
  // };

  // const getMovies = async (id) => {
  //   let response;
  //   let data;
  //   do {
  //     response = await fetch(
  //       `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  //     );
  //     data = await response.json();
  //     let ikkefunnet = response.status == 404;
  //     let ikkeFunnetBilde = data.poster_path == undefined;
  //     if (ikkefunnet || ikkeFunnetBilde) {
  //       id++;
  //     }
  //     console.log("etter" + id);
  //   } while (response.status == 404 || data.poster_path == undefined);

  //   setMovieTitle(data.title);
  //   setMovieDes(data.overview);
  //   setMoviePoster(data.poster_path);
  // };

  return (
    <div>
      <div className="d-flex flex-column justify-content-center">
        <div>
          <SearchBar onFormSubmit={this.onTermSubmit}/>
        </div>
       
        <MoviePoster movie ={this.state.selectedMovie}
          // image={moviePoster}
          // name={movieTitle}
          // des={movieDes}
           onClickLiker={this.onClickLiker}
          // onClickMisliker={onClick2}
        ></MoviePoster>
        <MovieList movies={this.state.movies}
        onMovieSelect ={this.onMovieSelect}/>
      </div>
    </div>
  );
};
}
export default MovieCard;
