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
        <div className="movie d-lg-flex m-4">
          <div className="movie-list-img">
            <Link to={`/movies/${movie.Title}`}>
              <img src={movie.Poster} alt={movie.Title}></img>
            </Link>
          </div>

          <div className="movie-list-info">
            <h2>
                <span className="text-success">Title: </span>
                <Link to={`/movies/${movie.Title}`}>
                    {movie.Title} ({movie.Year})
                </Link>
            </h2>


            <p><span className="text-success">Type:</span> {movie.Type}</p>

            <span className="text-success">Description:</span>
            <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

            <span className="text-success">Official website: </span>
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
