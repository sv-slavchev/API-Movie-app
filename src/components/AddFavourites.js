import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AddFavourites = () => {
  const addFavouriteMovie = event => {
    event.preventDefault();
    alert('The movie was been added to Favorites!');
  }


  return (
    <>
      <button
        type="button"
        className="btn btn-outline-success"
        onClick={addFavouriteMovie}
      >
        Add to Favourites

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          fill="currentColor"
          class="bi bi-heart-fill"
          viewBox="0 0 16 16"
        >
          <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
        </svg>
      </button>
    </>
  );
};

export default AddFavourites;