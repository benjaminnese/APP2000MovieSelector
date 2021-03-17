import React from "react";
import Like from "@material-ui/icons/ThumbUp"; //bruk bootstrap icon?
import Dislike from "@material-ui/icons/ThumbDown";

const PickMovie = (props) => {
  const nei = () => {
    alert("nei");
  };
  const ja = () => {};
  return (
    <div className="d-flex justify-content-center">
      <button
        type="button"
        className="btn btn-lg btn-success mr-5"
        onClick={props.onClickLiker}
      >
        <Like />
      </button>
      <button
        type="button"
        className="btn btn-danger btn-lg ml-5 "
        onClick={props.onClickMisliker}
      >
        <Dislike />
      </button>
    </div>
  );
};

export default PickMovie;
