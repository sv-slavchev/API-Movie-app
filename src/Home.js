// import React from "react";
import React, { useState, useEffect } from "react";
import NavMenu from './NavMenu';
import Main from './Main';
import HeroSection from './HeroSection';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import AddFavourites from "./components/AddFavourites";
import RemoveFavourite from "./components/RemoveFavourites";

const Home = () => {
  {/*const [movies, setMovies] = useState([]);*/}
  const [favourites, setFavourites] = useState([]);
  {/*const [searchValue, setSearchValue] = useState('');*/}

  {/*const getMovieRequest = async (searchValue) => {
      const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=d3974e11`;
  
      const response = await fetch(url);
      const responseJson = await response.json();
  
      if (responseJson.Search) {
        setMovies(responseJson.Search);
      }
    };*/}

  {/*useEffect(() => {
      getMovieRequest(searchValue);
    }, [searchValue]);*/}

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem('react-movie-app-favourites')
    );

    setFavourites(movieFavourites);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
  };

  {/*const AddFavouriteMovie = (movie) => {
      const newFavouriteList = [...favourites, movie];
      setFavourites(newFavouriteList);
      saveToLocalStorage(newFavouriteList);
    };*/}

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );

    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  return (
    <>
      <div className="movie-app container-fluid">
        <HeroSection />

        {/*<SearchBox
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />

        <div className="movies row">
          <div className="d-flex">
            <MovieList
              movies={movies}
              handleFavouritesClick={AddFavouriteMovie}
              favoutiteComponent={AddFavourites}
            />
          </div>
        </div>*/}

        <div className="row d-flex text-center align-items-center my-4">
          <MovieListHeading heading="Favourites" />
        </div>

        <div className="movies d-flex justify-content-center py-3">
            <MovieList
              movies={favourites}
              handleFavouritesClick={removeFavouriteMovie}
              favoutiteComponent={RemoveFavourite}
            />
        </div>
      </div>
    </>
  );
};

export default Home;