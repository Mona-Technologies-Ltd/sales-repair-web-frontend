import React from 'react';
import './ReviewCardClaim.css';

const ReviewCardClaim = () => {
  return (
    <div className="review-card">
      <div className="review-content">
        <h2 className="review-title">Your Reviews</h2>
        <p className="review-text">
          Aliyu did a great job assisting us with the repairs of my Iphone 13
        </p>
        <div className="stars">
          {[1, 2, 3, 4].map((_, i) => (
            <span key={i} className="star filled">★</span>
          ))}
          <span className="star">★</span>
        </div>
      </div>

      <div className="review-score-container">
        <div className="score-circle">
          <span className="score">4.5</span>
        </div>
      </div>

      <div className="corner-stripes" />
    </div>
  );
};

export default ReviewCardClaim;
