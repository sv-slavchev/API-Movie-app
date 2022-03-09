import React from "react";

const MovieList = (props) => {
  const FavoutiteComponent = props.favoutiteComponent;

  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="image-container d-flex justify-content-center mx-3">
          <img src={movie.Poster} alt="Movie"></img>
          <div
            onClick={() => props.handleFavouritesClick(movie)}
            className="overlay d-flex align-items-center justify-content-center"
          >
            <FavoutiteComponent />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;