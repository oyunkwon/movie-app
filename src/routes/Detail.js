import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Movie from "../components/Movie";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <h1>Detail</h1>
      <Movie
        key={movie.id}
        id={movie.id}
        mediumCoverImage={movie.medium_cover_image}
        title={movie.title}
        summary={movie.summary}
        genres={movie.genres}
      />
    </div>
  );
}
export default Detail;
