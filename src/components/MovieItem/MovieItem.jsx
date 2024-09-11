import { Link } from 'react-router-dom';
import './MovieItem.scss';

function MovieItem({ link, name, imgLink, releaseDate }) {
  return (
    <div className="movie-item">
      <div className="movie-thumb">
        <Link to={link}>
          <img src={imgLink} alt={name} />
        </Link>
      </div>
      <h3 className="movie-title">
        <Link to={link}>{name}</Link>
      </h3>
      <div className="movie-release_date">{releaseDate}</div>
    </div>
  );
}

export default MovieItem;
