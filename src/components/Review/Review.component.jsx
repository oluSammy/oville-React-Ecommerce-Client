import React from 'react';
import './Review.styles.scss';
import { dateObjToDate } from '../../utility-functions/utilityFunctions';

const Review = ({ createdAt, review, reviewBy }) => (
    <div className="review">
        <div className="review__header">
            <p className="review__name">{reviewBy ? reviewBy : 'anonymous' }</p>
            <p className="review__time">{
                createdAt ?
                    dateObjToDate(createdAt)
                : 'now'
                }
            </p>
        </div>
        <div className="review__content">
            <p> {review}</p>
        </div>
    </div>
)

export default Review;