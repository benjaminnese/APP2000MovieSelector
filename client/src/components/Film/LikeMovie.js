import React from "react";
import Like from "@material-ui/icons/ThumbUp"; //bruk bootstrap icon?
import Dislike from "@material-ui/icons/ThumbDown";
import {useSelector, useDispatch} from "react-redux";
import {likeMovie,dislikeMovie} from "../../actions";

const LikeMovie = (props) => {
    const dispatch = useDispatch();
    const film  = useSelector(state => state.like); //henter ut film som er likt

  return (
    <div className="d-flex justify-content-center">
        <h1>test{film}</h1>
      <button
        type="button"
        className="btn btn-lg btn-success mr-5"
        onClick={() => dispatch(likeMovie(props.filmid))}
      >
        <Like />
      </button>
      <button
        type="button"
        className="btn btn-danger btn-lg ml-5 "
        onClick={() => dispatch(dislikeMovie())}
      >
        <Dislike />
      </button>
    </div>
  );
};

export default LikeMovie;
