import './Reviews.css';
import { Link } from 'react-router-dom';

function Reviews({ reviews }) {
  return (
    <div className="reviews">
      {!reviews?.length ? (
        <p>No reviews available.</p>
      ) : (
        <ul className="reviews__list">
          {reviews.map((review) => (
            <li key={review.id} className="reviews__item">
              <Link to={`/reviews/${review.id}`}>{review.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Reviews;
