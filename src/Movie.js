import React, { useState } from 'react';
import Stars from './Stars';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

const Movie = ({ movie }) => {
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const addReview = (review) => {
    setReviews([...reviews, review]);
  };

  return (
    <div className="movie">
      <h2>{movie.title}</h2>
      <img src={movie.image} alt={movie.title}
      style={{ width: '250px', height: 'auto' }} />
      <Stars rating={rating} onRatingChange={handleRatingChange} />
      <ReviewList reviews={reviews} />
      <ReviewForm onReviewSubmit={addReview} />
    </div>
  );
};

export default Movie;
