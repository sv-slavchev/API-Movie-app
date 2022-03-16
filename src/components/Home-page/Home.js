import React, { useState, useEffect } from "react";
import HeroSection from "./HeroSection";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import MovieList from "../MovieList";
import RemoveFavourite from "../RemoveFavourites";

const Home = (movie) => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem('react-movie-app-favourites')
    );

    setFavourites(movieFavourites);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );

    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  return (
    <>
      <HeroSection />

      <div className="text-center my-3">
        <h2>Your Favorites</h2>
      </div>

      {/* <Link to={`/movies/${movie.Title}`}> */}
      <div className="fav-movies-list d-flex justify-content-center py-2">
        <MovieList
          movies={favourites}
          handleFavouritesClick={removeFavouriteMovie}
          favouriteComponent={RemoveFavourite}
        />
      </div>
      {/* </Link> */}
    </>
  );
};

export default Home;