import React from "react";
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import AddFavourites from "../AddFavourites";
import StarRating from "./StarRating";

const MovieDetails = (props, movie) => {
  const FavouriteComponent = props.favouriteComponent;

  return (
    <>
      <div className="movie-details d-block">
        <div className="movie d-md-flex m-4">
          <div className="movie-list-img">
            <Link to={`/movie/${movie.Title}`}>
              {/* <img src={movie.Poster} alt={movie.Title} /> */}
              <img src="https://m.media-amazon.com/images/M/MV5BMTQ3MjA1MTU1NV5BMl5BanBnXkFtZTgwMTc5ODEwMDE@._V1_SX300.jpg" />
              {/* <img src="https://i.imgur.com/s6qDYPt.png" /> */}
            </Link>
          </div>

          <div className="movie-list-info">
            <h4>
              <span className="text-success">Title: </span>
              {/* {movie.Title} */}
              Movie-Title
            </h4>

            <p>
              <span className="text-success">Type: </span>
              {/* {movie.Type} */}
              movie-type
            </p>

            <span className="text-success">Description:</span>
            <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

            <span className="text-success">Official website: </span>
            {/* <Link to={`/movie/${movie.Title}`} className="official-link">
              www.lorem-ipsum.com
            </Link> */}
            <a href={`https://www.google.com/search?q=${movie.Title}`} class="official-link" target="_blank">
              www.official-site.com
            </a>

            <div
              onClick={() => props.handleFavouritesClick(movie)}
              className="mt-2"
            >
              <AddFavourites />
            </div>
          </div>
        </div>

        <hr />

        <div className="container-fluid m-3">
          <StarRating />
        </div>
      </div>
    </>
  );
};

export default MovieDetails;