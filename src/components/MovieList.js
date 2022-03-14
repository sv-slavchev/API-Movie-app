// import React from "react";
// import { Link } from "react-router-dom";

// const MovieList = (props, movie) => {
//   const FavouriteComponent = props.favouriteComponent;

//   return (
//     <>
//       {props.movies.map((movie, index) => (
//         <Link to={`../movies/${movie.Title}`}>
//           <div className="movie justify-content-center m-3">
//             <img src={movie.Poster} alt="Movie"></img>
//             <p>{movie.Title}</p>
//             {/* <p>{movie.Year}</p>
//             <p>{movie.imdbID}</p>
//             <p>{movie.Type}</p> */}

//             <div
//               className="overlay d-flex align-items-center justify-content-center"
//               onClick={() => props.handleFavouritesClick(movie)}
//             >
//               <FavouriteComponent />
//             </div>
//           </div>
//         </Link>
//       ))}
//     </>
//   );
// };

// export default MovieList;


import React from "react";
import { Link } from "react-router-dom";

const MovieList = (props, movie) => {
  const FavouriteComponent = props.favouriteComponent;

  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="movie d-md-flex justify-content-center m-3">
          <div className="movie-list-img col-md-2">
            <Link to={`../movies/${movie.Title}`}>
              <img src={movie.Poster} alt="Movie"></img>
            </Link>
          </div>


          <div className="movie-list-info col-md-8">
            <h2>{movie.Title} ({movie.Year})</h2>
            <p>{movie.Type}</p>
            <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <Link to={`/movies/${movie.Title}`} className="official-link">www.lorem-ipsum.com</Link>

            <div onClick={() => props.handleFavouritesClick(movie)} >
              <FavouriteComponent />
            </div>
          </div>
        </div>
      ))
      }
    </>
  );
};

export default MovieList;