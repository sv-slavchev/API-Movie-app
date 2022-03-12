import React, { useState, useEffect } from "react";
import NavMenu from './NavMenu';
import Header from './Header';
import Home from './Home';
import Main from './Main';
import MovieDetails from './MovieDetails';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import AddFavourites from "./components/AddFavourites";
import RemoveFavourite from "./components/RemoveFavourites";

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
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem('react-movie-app-favourites')
    );

    setFavourites(movieFavourites);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
  };

  const AddFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
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
      <div className="movie-app container-fluid">
        <Header />

        <Main />

        <div className="movies row">
          <div className="d-flex">
            <MovieList
              movies={movies}
              handleFavouritesClick={AddFavouriteMovie}
              favouriteComponent={AddFavourites}
            />
          </div>
        </div>

        {/*<div className="row d-flex align-items-center my-4">
                  <MovieListHeading heading="Favourites" />
                </div>
        
                <div className="movies row">
                  <div className="d-flex">
                    <MovieList
                      movies={favourites}
                      handleFavouritesClick={removeFavouriteMovie}
                      favouriteComponent={RemoveFavourite}
                    />
                  </div>
                </div>*/}
      </div>
    </>
  );
};

export default App;



// // import React from 'react'
// import React, { useState, useEffect } from "react";
// import NavMenu from './NavMenu'
// import Main from './Main'
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import MovieList from "./components/MovieList";
// import MovieListHeading from "./components/MovieListHeading";
// import SearchBox from "./components/SearchBox";
// import AddFavourites from "./components/AddFavourites";
// import RemoveFavourite from "./components/RemoveFavourites";

// const App = () => {
//   const [movies, setMovies] = useState([]);
//   const [favourites, setFavourites] = useState([]);
//   const [searchValue, setSearchValue] = useState('');

//   const getMovieRequest = async (searchValue) => {
//     const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=d3974e11`;

//     const response = await fetch(url);
//     const responseJson = await response.json();

//     if (responseJson.Search) {
//       setMovies(responseJson.Search);
//     }
//   };

//   useEffect(() => {
//     getMovieRequest(searchValue);
//   }, [searchValue]);

//   useEffect(() => {
//     const movieFavourites = JSON.parse(
//       localStorage.getItem('react-movie-app-favourites')
//     );

//     setFavourites(movieFavourites);
//   }, []);

//   const saveToLocalStorage = (items) => {
//     localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
//   };

//   const AddFavouriteMovie = (movie) => {
//     const newFavouriteList = [...favourites, movie];
//     setFavourites(newFavouriteList);
//     saveToLocalStorage(newFavouriteList);
//   };

//   const removeFavouriteMovie = (movie) => {
//     const newFavouriteList = favourites.filter(
//       (favourite) => favourite.imdbID !== movie.imdbID
//     );

//     setFavourites(newFavouriteList);
//     saveToLocalStorage(newFavouriteList);
//   };

//   return (
//     <>
//       <div className="movie-app container-fluid">
//         <div className="d-flex align-items-center my-4">
//           <MovieListHeading heading="Movies App" />

//           <NavMenu />

//           <SearchBox
//             searchValue={searchValue}
//             setSearchValue={setSearchValue}
//           />
//         </div>

//         <div className="row d-flex align-items-center my-4">
//           <MovieListHeading heading="Favourites" />
//         </div>

//         <div className="movies row">
//           <div className="d-flex">
//             <MovieList
//               movies={favourites}
//               handleFavouritesClick={removeFavouriteMovie}
//               favouriteComponent={RemoveFavourite}
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );

//   // return (
//   //   <div>
//   //     <h1>Welcome to Homepage</h1>
//   //   </div>
//   // );
// };

// export default App;