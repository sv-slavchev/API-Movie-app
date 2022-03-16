import React from "react";
import { Link } from "react-router-dom";

const MovieList = (props, movie) => {
  const FavouriteComponent = props.favouriteComponent;

  return (
    <>
      {props.movies.map((movie, index) => (
        <>
          <div className="movie d-md-flex m-4">
            <div className="movie-list-img">
              {/* <Link to="/movie/movie-details"> */}
              <Link to={`/movie/${movie.Title}`}>
                <img src={movie.Poster} alt={movie.Title} />
              </Link>
            </div>

            <div className="movie-list-info">
              <h4>
                <span className="text-success">Title: </span>
                <Link to={`/movie/${movie.Title}`}>
                  {movie.Title} ({movie.Year})
                </Link>
              </h4>

              <p><span className="text-success">Type:</span> {movie.Type}</p>

              <p className="description"><span className="text-success">Description: </span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

              <span className="text-success">Official website: </span>
              {/* <Link to={`/movie/${movie.Title}`} className="official-link">
                www.lorem-ipsum.com
              </Link> */}
              <a href={`https://www.google.com/search?q=${movie.Title}`} class="official-link" target="_blank" rel="noreferrer">
                www.official-site.com
              </a>

              <div onClick={() => props.handleFavouritesClick(movie)} >
                <FavouriteComponent />
              </div>
            </div>
          </div>

          <hr />
        </>
      ))}
    </>
  );
};

export default MovieList;