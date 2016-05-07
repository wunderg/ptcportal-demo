import React from 'react';
import StarRating from 'react-star-rating';
import './style.scss';

export default (props) => {
  const updateRating = () => {
    props.updateStudent(props.data);
  };
  return (
    <div className="card">
      {console.log(props.data.ratings.logic, 'STARS')}
      <div className="card-content black-text">
        <span className="card-title">Ratings</span>
        <hr />
        <div className="stars">
          <span>Logic</span>
          <StarRating
            className="star"
            size={30} name="airbnb-rating"
            totalStars={7}
            rating={props.data.ratings.logic}
            onRatingClick={updateRating}
          />
        </div>
        <div className="stars">
          <span>Motivation</span>
          <StarRating className="star" size={30} name="airbnb-rating" totalStars={7} />
        </div>
        <div className="stars">
          <span>Effort</span>
          <StarRating className="star" size={30} name="airbnb-rating" totalStars={7} />
        </div>
        <div className="stars">
          <span>Likebility</span>
          <StarRating className="star" size={30} name="airbnb-rating" totalStars={7} />
        </div>
        <div className="stars">
          <span>Explanation</span>
          <StarRating className="star" size={30} name="airbnb-rating" totalStars={7} />
        </div>
        <div className="stars">
          <span>Confidence</span>
          <StarRating className="star" size={30} name="airbnb-rating" totalStars={7} />
        </div>
      </div>
    </div>
  );
};
