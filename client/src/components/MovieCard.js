import React, { useState, useEffect } from "react";
import MoviePoster from "./MoviePoster";
import { Button } from "react-bootstrap";
import MoviePref from "./MoviePref";

//Et film objekt vises på skjermen
const MovieCard = () => {
  const [movieTitle, setMovieTitle] = useState();
  const [movieDes, setMovieDes] = useState();
  const [moviePoster, setMoviePoster] = useState();
  const [count, setCount] = useState(566230);

  const baseImgUrl = "https://image.tmdb.org/t/p";
  const size = "w500";
  const API_KEY = "dea81014c2ec4aeceb134efbf3cfff1f";

  const onClick1 = () => {
    setCount(count + 1);
    getMovies(count);
  };

  const onClick2 = () => {
    setCount(count - 1);
    getMovies(count);
  };

  const getMovies = async (id) => {
    let response;
    let data;
    do {
      response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
      );
      data = await response.json();
      let ikkefunnet = response.status == 404;
      let ikkeFunnetBilde = data.poster_path == undefined;
      if (ikkefunnet || ikkeFunnetBilde) {
        id++;
      }
      console.log("etter" + id);
    } while (response.status == 404 || data.poster_path == undefined);

    setMovieTitle(data.title);
    setMovieDes(data.overview);
    setMoviePoster(data.poster_path);
  };

  return (
    <div>
      <MoviePref/>
      <div className="d-flex justify-content-center">
        <MoviePoster
          image={moviePoster}
          name={movieTitle}
          des={movieDes}
          onClickLiker={onClick1}
          onClickMisliker={onClick2}
        ></MoviePoster>
      </div>
    </div>
  );
};
export default MovieCard;
