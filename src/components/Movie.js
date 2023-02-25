import { Link } from "react-router-dom";

function Movie({ id, mediumCoverImage, title, summary, genres }) {
  return (
    <div>
      <img src={mediumCoverImage}></img>
      <h2>
        <Link to={`/Movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>{genres && genres.map((genre) => <li key={genre}>{genre}</li>)}</ul>
    </div>
  );
}
export default Movie;
