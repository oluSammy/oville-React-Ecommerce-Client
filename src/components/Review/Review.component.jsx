import React from 'react';
import './Review.styles.scss';

const Review = () => (
    <div className="review">
        <div className="review__header">
            <p className="review__name">Sammy</p>
            <p className="review__time">29-07-2020</p>
        </div>
        <div className="review__content">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nesciunt optio quasi sit asperiores ad?
                Lorem ipsum dolor sit amet.
            </p>
        </div>
    </div>
);

export default Review;