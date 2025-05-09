import React from 'react';
import { Tag, Rate } from 'antd';
import './ReviewCard.css';

const ReviewCard = ({ review, renderStars}) => {
  return (
    <div className="review-card" >
      <div className="review-card__corner" />
      <div className="review-card__content">
        <h2 className="review-card__name">{review.name}</h2>
        <p className="review-card__claim">
          <a href="#" className="review-card__claim-link">Claim ID: {review.claimId}</a>
        </p>
        <Tag color="" className="review-card__tag custom-tag-bg" id="card__tag">{review.type}</Tag>

        {/* <Tag color="" className="review-card__tag" id="card__tag">{review.type}</Tag> */}
        <p className="review-card__text">
          {review.comment}
        </p>
        <Rate defaultValue={review.rating} disabled className="review-card__stars" />
        {/* {renderStars(4)} */}
        <p className="review-card__time">{review.date}</p>
      </div>
      <div
  className="review-card__rating-circle"
  style={{
    backgroundColor:
      review.rating >= 4
      ? '#F7FFE5'
        : (review.rating >= 3 && review.rating < 4) || review.rating === 3.5
        ? '#E2EFFD'
        : review.rating <= 2
        ? '#EBEBEB'
        : '',
       

      
  }}
>
        <span className="review-card__rating-text" style={{   color:
      review.rating >= 4
      ? '#81B31A'
      : (review.rating >= 3 && review.rating < 4) || review.rating === 3.5
      ? '#00439E'
      : review.rating <= 2
      ? '#606060'
      : '', }}>{review.rating}</span>
      </div>
    </div>
  );
};

export default ReviewCard;
