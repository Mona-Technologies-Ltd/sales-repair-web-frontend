import React from "react";
import { Icon } from "@iconify/react";
import "../styles/Reviews.css";

const Reviews = () => {
  const overallStats = {
    totalReviews: 695,
    ratings: [
      { stars: 5, count: 8058 },
      { stars: 4, count: 452 },
      { stars: 3, count: 82 },
      { stars: 2, count: 19 },
      { stars: 1, count: 84 },
    ],
    averageRating: 4.9,
  };

  const ratingBreakdown = [
    { category: "Local knowledge", rating: 4.9 },
    { category: "Process expertise", rating: 4.9 },
    { category: "Responsiveness", rating: 4.9 },
    { category: "Technical skills", rating: 4.9 },
  ];

  const reviews = [
    {
      id: 1,
      name: "John Doe",
      claimId: "CL-134763",
      rating: 4.5,
      type: "Accidental Damage",
      comment:
        "Aliyu did a great job assisting us with the repairs of my Iphone 13",
      date: "2 months ago",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      claimId: "CL-145982",
      rating: 5.0,
      type: "Screen Replacement",
      comment:
        "Excellent service! My device was repaired faster than expected and works perfectly now.",
      date: "1 week ago",
    },
    {
      id: 3,
      name: "Michael Chen",
      claimId: "CL-138765",
      rating: 4.8,
      type: "Water Damage",
      comment:
        "Very professional team. They saved my phone when I thought it was completely ruined.",
      date: "3 weeks ago",
    },
    {
      id: 3,
      name: "Michael Chen",
      claimId: "CL-138765",
      rating: 4.8,
      type: "Water Damage",
      comment:
        "Very professional team. They saved my phone when I thought it was completely ruined.",
      date: "3 weeks ago",
    },
    // Add more review objects as needed
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Icon
        key={index}
        icon={
          index < Math.floor(rating)
            ? "material-symbols:star"
            : index < rating
            ? "material-symbols:star-half"
            : "material-symbols:star-outline"
        }
        className={
          index < Math.floor(rating)
            ? "star-filled"
            : index < rating
            ? "star-filled"
            : "star-empty"
        }
        width="20"
        height="20"
      />
    ));
  };

  return (
    <div className="reviews-container">
      <div className="overall-rating-section">
        <h2 className="section-title">Overall Rating</h2>
        <div className="rating-summary">
          <div className="rating-left">
            <p className="total-reviews">
              {overallStats.totalReviews} total reviews
            </p>
            {overallStats.ratings.map((rating) => (
              <div key={rating.stars} className="rating-bar">
                <span className="stars-label">{rating.stars} Stars</span>
                <div className="progress-bar">
                  <div
                    className="progress-dynamic"
                    style={{
                      width: `${
                        (rating.count / overallStats.totalReviews) * 100
                      }%`,
                    }}
                  ></div>
                </div>
                <span className="count-label">({rating.count})</span>
              </div>
            ))}
          </div>
          <div className="rating-right">
            <h3 className="breakdown-title">Rating Breakdown</h3>
            <div className="breakdown-container">
              {ratingBreakdown.map((item) => (
                <div key={item.category} className="breakdown-item">
                  <span className="category-label">{item.category}</span>
                  <div className="rating-stars">
                    {renderStars(item.rating)}
                    <span className="rating-value">{item.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="reviews-grid">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-header">
              <div className="reviewer-info">
                <div className="reviewer-details">
                  <h3 className="reviewer-name">{review.name}</h3>
                  <p className="claim-id">Claim ID: {review.claimId}</p>
                </div>
              </div>
              <div className="review-meta">
                <span className="review-type">{review.type}</span>
                <p className="review-date">{review.date}</p>
              </div>
            </div>
            <div className="review-content">
              <div className="rating-display">
                <div className="rating-circle">
                  <span>{review.rating.toFixed(1)}</span>
                </div>
                <div className="review-stars">{renderStars(review.rating)}</div>
              </div>
              <p className="review-comment">"{review.comment}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
