import { Card } from "react-bootstrap";
import LikeMovie from "./LikeMovie";

//Struktur og informasjon om bilde poster

const MoviePoster = ({movie}) => {
  if(!movie){
    return <div className="text-white">loading</div>
  }
  //Vi får bare siste del av bilde url, ettersom første del er static
  //lagrer vi den i variabelen baseImgUrl og size
  const baseImgUrl = "https://image.tmdb.org/t/p";
  const size = "w500";
  const backgroundStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.9)), 
    url(${baseImgUrl}/${size}${movie.poster_path})`,
    backgroundSize: "cover",
    height: "90vh",
    width: "100%",
    borderRadius: "100px",
  };

  return (
  
    <div style={{ width: "800px", display: "flex" }}>
      <Card text="dark" style={{ width: "100%", borderRadius: "95px" }}>
        <Card.Img variant="top" style={backgroundStyle} />
        <Card.ImgOverlay className="d-flex flex-column ">
          <div className="mt-auto ">
            {" "}
            {/*Fix for å flytte teksten*/}
            <Card.Body className="d-flex mb-5" style={{ color: "white" }}>
              <Card.Title>
                <h1>{movie.title}</h1>
              </Card.Title>
              <Card.Text className="pl-5" variant="primary">
                <h2>{movie.overview}</h2>
              </Card.Text>
            </Card.Body>
            <LikeMovie
              className="mb-5"
              filmid = {movie.id}
              film ={movie}
            />
          </div>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};
export default MoviePoster;