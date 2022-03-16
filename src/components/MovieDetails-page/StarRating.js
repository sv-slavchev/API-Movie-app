import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <>
      {
        [...Array(5)].map((star, i) => {
          const ratingValue = i + 1;

          return (
            <>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
              />

              <FaStar
                className="star"
                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                size={30}
                onClick={() => setRating(ratingValue)}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
              />
            </>
          );
        })
      }
      < p > Your voting  is {rating}.</p >
    </>
  );
};

export default StarRating;