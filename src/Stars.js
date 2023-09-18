import React from 'react';

const Stars = ({ rating, onRatingChange }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="stars">
      {stars.map((star) => (
        <span
          key={star}
          className={star <= rating ? 'active' : ''}
          onClick={() => onRatingChange(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Stars;
