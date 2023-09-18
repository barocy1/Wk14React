import React, { useState } from 'react';

const ReviewForm = ({ onReviewSubmit }) => {
  const [reviewText, setReviewText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onReviewSubmit(reviewText);
    setReviewText('');
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <textarea
        placeholder="Leave a review..."
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReviewForm;
