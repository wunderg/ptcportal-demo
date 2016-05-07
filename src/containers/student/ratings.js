import React from 'react';
import StarRating from 'react-star-rating';
import './style.scss';

export default (props) => {
  const updateRating = (_, stars) => {
    console.log('updateRating');
    const student = props.data;
    student.ratings[stars.name] = stars.rating;
    props.updateStudent(student);
  };
  return (
    <div className="card">
      <div className="card-content black-text">
        <span className="card-title">Ratings</span>
        <hr />
        <div className="stars">
          <span>Logic</span>
          <StarRating
            className="star"
            size={30}
            name="logic"
            totalStars={7}
            rating={props.data.ratings.logic}
            onRatingClick={updateRating}
            editing={true}
          />
        </div>
        <div className="stars">
          <span>Motivation</span>
          <StarRating
            className="star"
            size={30}
            totalStars={7}
            name="motiv"
            rating={props.data.ratings.motiv}
            onRatingClick={updateRating}
            editing={true}
          />
        </div>
        <div className="stars">
          <span>Effort</span>
          <StarRating
            className="star"
            size={30}
            totalStars={7}
            name="effort"
            rating={props.data.ratings.effort}
            onRatingClick={updateRating}
            editing={true}
          />
        </div>
        <div className="stars">
          <span>Likebility</span>
          <StarRating
            className="star"
            size={30}
            totalStars={7}
            name="ethic"
            rating={props.data.ratings.ethic}
            onRatingClick={updateRating}
            editing={true}
          />
        </div>
        <div className="stars">
          <span>Explanation</span>
          <StarRating
            className="star"
            size={30}
            totalStars={7}
            name="explain"
            rating={props.data.ratings.explain}
            onRatingClick={updateRating}
            editing={true}
          />
        </div>
        <div className="stars">
          <span>Confidence</span>
          <StarRating
            className="star"
            size={30}
            totalStars={7}
            name="confid"
            rating={props.data.ratings.confid}
            onRatingClick={updateRating}
            editing={true}
          />
        </div>
      </div>
    </div>
  );
};
