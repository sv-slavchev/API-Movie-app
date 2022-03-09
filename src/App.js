import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import AddFavourites from "./components/AddFavourites";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=d3974e11`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  }

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  const AddFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
  }

  return (
    <>
      <div className="container-fluid movie-app">
        <div className="row d-flex align-items-center my-4">
          <MovieListHeading heading="Movies App" />
          <SearchBox
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>

        <div className="movies row">
          <div className="d-flex m-4">
            <MovieList
              movies={movies}
              handleFavouritesClick={AddFavouriteMovie}
              favoutiteComponent={AddFavourites}
            />
          </div>
        </div>

        <div className="row d-flex align-items-center my-4">
          <MovieListHeading heading="Favourites" />
        </div>

        <div className="movies row">
          <div className="d-flex m-4">
            <MovieList
              movies={favourites}
              handleFavouritesClick={AddFavouriteMovie}
              favoutiteComponent={AddFavourites}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;