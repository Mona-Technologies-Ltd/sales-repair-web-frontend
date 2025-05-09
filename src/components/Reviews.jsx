import { BsStarHalf } from "react-icons/bs"; 
import { AiOutlineStar } from "react-icons/ai"; 
import { AiFillStar } from "react-icons/ai"; 
import React from "react";
import { Icon } from "@iconify/react";
import "../styles/Reviews.css";
import ReviewCard from "./ReviewCard";

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
      rating: 3.5,
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
      id: 4,
      name: "Michael Chen",
      claimId: "CL-138765",
      rating: 1.0,
      type: "Water Damage",
      comment:
        "Very professional team. They saved my phone when I thought it was completely ruined.",
      date: "3 weeks ago",
    },
    {
      id: 5,
      name: "Michael Chen",
      claimId: "CL-138765",
      rating: 3.5,
      type: "Water Damage",
      comment:
        "Very professional team. They saved my phone when I thought it was completely ruined.",
      date: "3 weeks ago",
    },
    {
      id: 6,
      name: "Michael Chen",
      claimId: "CL-138765",
      rating: 2.0,
      type: "Water Damage",
      comment:
        "Very professional team. They saved my phone when I thought it was completely ruined.",
      date: "3 weeks ago",
    },
    // Add more review objects as needed
  ];

//  const renderStars = (rating) => {
//     return [...Array(5)].map((_, index) => (
//       <Icon
//         key={index}
//         icon={
//           index < Math.floor(rating)
//             ? <AiFillStar />
//             : index < rating
//             ? <BsStarHalf />
//             : <AiOutlineStar />
//         }
//         className={
//           index < Math.floor(rating)
//             ? "star-filled"
//             : index < rating
//             ? "star-filled"
//             : "star-empty"
//         }
//         width="20"
//         height="20"
//       />
//     ));
//   };
const renderStars = (rating) => {
  return [...Array(5)].map((_, index) => {
    if (index < Math.floor(rating)) {
      return <AiFillStar key={index} className="star-filled" size={20} />;
    } else if (index < rating) {
      return <BsStarHalf key={index} className="star-filled" size={20} />;
    } else {
      return <AiOutlineStar key={index} className="star-empty" size={20} />;
    }
  });
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
          <h5>{renderStars(4.9)} 4.9</h5>
            <h3 className="breakdown-title">Rating Breakdown</h3>
            <div className="breakdown-container">
              {ratingBreakdown.map((item) => (
                <div key={item.category} className="breakdown-item">
                  <span className="category-label">{item.category}</span>
                  <div className="rating-stars">
                    {/* {renderStars(item.rating)} */}
                    <AiFillStar color="#004AAD" />
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
          <ReviewCard key={review.id} review={review} renderStars={renderStars} />
         
        ))}
      </div>
      
    </div>
  );
};

export default Reviews;
